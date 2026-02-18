import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const authCookie = request.cookies.get('demo_auth')
    const { pathname } = request.nextUrl

    // Allow static assets, login page, and Next.js internals
    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/static') ||
        pathname.startsWith('/images') ||
        pathname === '/favicon.ico' ||
        pathname === '/login'
    ) {
        return NextResponse.next()
    }

    // Check authentication
    if (authCookie?.value !== 'true') {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: '/:path*',
}
