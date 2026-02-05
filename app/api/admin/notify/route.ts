import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabaseAdmin'
import { resend } from '@/lib/resend'

async function sendPlatformLiveEmail(email: string): Promise<boolean> {
  try {
    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: [email],
      subject: 'OCH is Live! 🎉 Welcome to Africa\'s Cyber Talent Platform',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #1e3a8a;">OCH is Live!</h1>

          <p>Dear future cyber leader,</p>

          <p>We're excited to announce that <strong>Ongozacyberhub (OCH)</strong> is now live!</p>

          <p>Africa's first comprehensive cybersecurity talent development platform for university students is ready for you.</p>

          <h2>What you can do now:</h2>
          <ul>
            <li>🌟 <strong>Complete your profile</strong> and start your transformation journey</li>
            <li>🎯 <strong>Discover your strengths</strong> with our assessment tools</li>
            <li>🚀 <strong>Access practical labs</strong> and hands-on challenges</li>
            <li>🤝 <strong>Join the community</strong> of aspiring cyber professionals</li>
            <li>🏆 <strong>Compete in challenges</strong> and build your portfolio</li>
          </ul>

          <p>Ready to begin your journey from student to cyber leader?</p>

          <div style="text-align: center; margin: 30px 0;">
            <a href="${process.env.NEXT_PUBLIC_SITE_URL}/login"
               style="background-color: #1e3a8a; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
              Start Your Journey
            </a>
          </div>

          <p>Welcome to the future of African cybersecurity.</p>

          <p><em>No spam. Only meaningful updates.</em></p>

          <p>Best regards,<br>The OCH Team</p>
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

export async function POST(request: NextRequest) {
  try {
    // Check admin token
    const authHeader = request.headers.get('authorization')
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { error: 'Missing or invalid authorization header' },
        { status: 401 }
      )
    }

    const token = authHeader.substring(7) // Remove 'Bearer ' prefix
    if (token !== process.env.ADMIN_TOKEN) {
      return NextResponse.json(
        { error: 'Invalid admin token' },
        { status: 401 }
      )
    }

    // Get all users who haven't been notified yet and are pending or confirmed
    const { data: users, error: fetchError } = await supabaseAdmin
      .from('waitlist')
      .select('id, email, status')
      .in('status', ['pending', 'confirmed'])
      .is('notified_at', null)

    if (fetchError) {
      console.error('Database fetch error:', fetchError)
      return NextResponse.json(
        { error: 'Failed to fetch waitlist users' },
        { status: 500 }
      )
    }

    if (!users || users.length === 0) {
      return NextResponse.json(
        { message: 'No users to notify', count: 0 },
        { status: 200 }
      )
    }

    let successCount = 0
    let errorCount = 0
    const errors: string[] = []

    // Send emails and update database
    for (const user of users) {
      try {
        const emailSent = await sendPlatformLiveEmail(user.email)

        if (emailSent) {
          // Update user as notified
          const { error: updateError } = await supabaseAdmin
            .from('waitlist')
            .update({
              status: 'notified',
              notified_at: new Date().toISOString()
            })
            .eq('id', user.id)

          if (updateError) {
            console.error(`Failed to update user ${user.email}:`, updateError)
            errors.push(`Update failed for ${user.email}`)
            errorCount++
          } else {
            successCount++
          }
        } else {
          errors.push(`Email failed for ${user.email}`)
          errorCount++
        }

        // Small delay to avoid overwhelming the email service
        await new Promise(resolve => setTimeout(resolve, 100))

      } catch (error) {
        console.error(`Error processing user ${user.email}:`, error)
        errors.push(`Error processing ${user.email}`)
        errorCount++
      }
    }

    return NextResponse.json({
      message: 'Notification blast completed',
      total: users.length,
      successful: successCount,
      errors: errorCount,
      errorDetails: errors.length > 0 ? errors : undefined
    })

  } catch (error) {
    console.error('Admin notify error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}


