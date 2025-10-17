// src/middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const host = req.headers.get('host') || ''
  const subdomain = host.split('.')[0] // ambil subdomain (school1)

  // Jika domain utama, lanjutkan biasa
  if (subdomain === 'localhost' || subdomain === 'www') {
    return NextResponse.next()
  }

  // Simpan subdomain ke header
  const requestHeaders = new Headers(req.headers)
  requestHeaders.set('x-tenant-slug', subdomain)

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
