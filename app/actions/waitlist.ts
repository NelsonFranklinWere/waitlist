'use server'

import { headers } from 'next/headers'
import { supabaseAdmin } from '@/lib/supabaseAdmin'
import { resend } from '@/lib/resend'

// Simple in-memory rate limiting (for development/demo)
// In production, use Redis or similar
const rateLimit = new Map<string, { count: number; resetTime: number }>()
const RATE_LIMIT_MAX = 3 // max requests per window
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute in milliseconds

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const userLimit = rateLimit.get(ip)

  if (!userLimit || now > userLimit.resetTime) {
    // First request or window expired
    rateLimit.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    return true
  }

  if (userLimit.count >= RATE_LIMIT_MAX) {
    return false // Rate limit exceeded
  }

  userLimit.count++
  return true
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email) && email.length <= 254
}

async function sendConfirmationEmail(email: string): Promise<boolean> {
  try {
    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: [email],
      subject: "Welcome to OCH! You're Now Part of Africa's Cyber Future",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #1e3a8a;">Thank You for Joining the OCH Waitlist!</h1>

          <p style="font-size: 18px; color: #374151; margin-bottom: 20px;">
            <strong>Thank you for taking the first step towards becoming Africa's next cybersecurity leader!</strong>
          </p>

          <p>We're thrilled to have you join Ongozacyberhub (OCH) - Africa's premier Cyber Talent Platform for University Students.</p>

          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #1e3a8a; font-weight: bold;">
              Your journey to cyber excellence starts here!
            </p>
          </div>

          <h2 style="color: #1e3a8a;">What happens next?</h2>
          <ol style="line-height: 1.6;">
            <li><strong>Instant Confirmation:</strong> We've successfully added you to our exclusive waitlist and you're now part of Africa's future cyber leaders!</li>
            <li><strong>Exclusive Updates:</strong> Get behind-the-scenes access to our development journey and early-bird opportunities.</li>
            <li><strong>Launch Priority:</strong> Be among the first to access OCH when we launch in Nairobi and beyond.</li>
            <li><strong>Community Access:</strong> Join our growing community of ambitious cyber professionals.</li>
          </ol>

          <div style="background-color: #eff6ff; padding: 20px; border-radius: 8px; margin: 25px 0; border-left: 4px solid #1e3a8a;">
            <h3 style="margin-top: 0; color: #1e3a8a;">Why OCH?</h3>
            <p style="margin-bottom: 0;">Unlike traditional courses, OCH provides:</p>
            <ul style="margin-top: 10px;">
              <li>• <strong>Practical Excellence:</strong> Real-world cyber challenges</li>
              <li>• <strong>Mentor Network:</strong> Guidance from industry experts</li>
              <li>• <strong>Community Focus:</strong> Learn and grow together</li>
              <li>• <strong>Leadership Development:</strong> Build cyber leaders, not just technicians</li>
            </ul>
          </div>

          <p>If you have any questions or want to share your cyber interests, feel free to reply to this email. We're here to support your journey!</p>

          <p style="font-style: italic; color: #6b7280; border-top: 1px solid #e5e7eb; padding-top: 20px; margin-top: 30px;">
            No spam. Only meaningful updates that matter to your cyber career.
          </p>

          <p style="color: #1e3a8a; font-weight: bold;">
            Best regards,<br>
            The OCH Team<br>
            <small style="color: #6b7280; font-weight: normal;">Building Africa's Cybersecurity Leaders</small>
          </p>
        </div>
      `,
    })

    if (error) {
      console.error('Email sending error:', error)
      return false
    }

    return true
  } catch (error) {
    console.error('Email sending failed:', error)
    return false
  }
}

export async function joinWaitlist(formData: FormData) {
  try {
    // Get client IP for rate limiting
    const headersList = await headers()
    const forwardedFor = headersList.get('x-forwarded-for')
    const realIp = headersList.get('x-real-ip')
    const clientIp = forwardedFor?.split(',')[0] || realIp || 'unknown'

    // Check rate limit
    if (!checkRateLimit(clientIp)) {
      return {
        success: false,
        message: 'Too many requests. Please try again later.',
      }
    }

    const email = formData.get('email') as string
    const honeypot = formData.get('website') as string // Honeypot field

    // Spam protection: honeypot
    if (honeypot && honeypot.trim() !== '') {
      return {
        success: false,
        message: 'Spam detected. Please try again.',
      }
    }

    // Validate email
    if (!email || !isValidEmail(email)) {
      return {
        success: false,
        message: 'Please enter a valid email address.',
      }
    }

    // Insert into database
    const { error } = await supabaseAdmin
      .from('waitlist')
      .insert({
        email: email.toLowerCase().trim(),
        source: 'landing'
      })
      .select()
      .single()

    if (error) {
      if (error.code === '23505') { // Unique violation
        return {
          success: false,
          message: 'This email is already on the waitlist.',
        }
      }
      console.error('Database error:', error)
      return {
        success: false,
        message: 'Something went wrong. Please try again.',
      }
    }

    // Send confirmation email
    const emailSent = await sendConfirmationEmail(email)

    if (!emailSent) {
      // Email failed but record was saved - return success with warning
      return {
        success: true,
        message: 'Thanks for your interest in Ongoza Cyber Hub! You have been successfully added to our waitlist. (Note: Confirmation email may be delayed.)',
      }
    }

    return {
      success: true,
      message: 'Thanks for your interest in Ongoza Cyber Hub! You have been successfully added to our waitlist. Check your email for confirmation.',
    }

  } catch (error) {
    console.error('Waitlist signup error:', error)
    return {
      success: false,
      message: 'Something went wrong. Please try again.',
    }
  }
}


