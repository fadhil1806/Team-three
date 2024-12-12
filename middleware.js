import { NextResponse } from 'next/server';
// import jwt from 'jsonwebtoken';

export function middleware(req) {
    const token = req.cookies.get('authToken')?.value;

    if (!token) return NextResponse.redirect(new URL('/login', req.url));
    

    try {
        // jwt.verify(token, process.env.JWT_KEY);
        return NextResponse.next();
    } catch {
        return NextResponse.redirect(new URL('/login', req.url));
    }
}

export const config = {
    matcher: ['/dashboard/:path*'], 
};
