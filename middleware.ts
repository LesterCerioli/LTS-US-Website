import { NextRequest, NextResponse } from "next/server";


const ALLOWED_ORIGINS = [
    "https://lts-us-website.vercel.app"
    
    
];

export function middleware(req: NextRequest) {
    const origin = req.headers.get("origin");

    
    if (!origin || ALLOWED_ORIGINS.includes(origin)) {
        const response = NextResponse.next();
        
        
        response.headers.set("Access-Control-Allow-Origin", origin || "*");
        response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
        response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

        return response;
    }

    
    return new NextResponse(
        JSON.stringify({ error: "Unauthorized access" }),
        { status: 403, headers: { "Content-Type": "application/json" } }
    );
}


export const config = {
    matcher: "/api/:path*",
};