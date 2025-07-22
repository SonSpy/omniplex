// /src/app/api/debug/env/route.ts
import { NextResponse } from 'next/server';

export function GET() {
  return NextResponse.json({
    OPENAI_API_KEY: !!process.env.OPENAI_API_KEY,
    STRIPE_SECRET_KEY: !!process.env.STRIPE_SECRET_KEY,
    NODE_ENV: process.env.NODE_ENV,
  });
}
