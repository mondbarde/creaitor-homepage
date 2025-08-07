import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.pathname
  
  // Handle ads.txt and app-ads.txt
  if (url === '/app-ads.txt' || url === '/ads.txt' || url === '/robots.txt') {
    const response = NextResponse.next()
    response.headers.set('Content-Type', 'text/plain; charset=UTF-8')
    response.headers.set('X-Content-Type-Options', 'nosniff')
    response.headers.set('Cache-Control', 'public, max-age=3600')
    return response
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: ['/app-ads.txt', '/ads.txt', '/robots.txt']
}