import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(_request: NextRequest) {
  // Simple middleware logic
  // You can customize this based on your needs
  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/',
}

