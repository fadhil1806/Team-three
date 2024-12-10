import { NextResponse } from 'next/server';

export function middleware(req) {
    // Get the token from cookies
    const token = req.cookies.get('authToken'); 

    // If there's no token, redirect to login
    if (!token) {
        return NextResponse.redirect(new URL('/login', req.url));
    }

    // If the token exists, continue with the request
    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard/:path*'], // Apply this middleware to /dashboard and its subpaths
};
