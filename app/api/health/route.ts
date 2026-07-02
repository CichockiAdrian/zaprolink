import { NextResponse } from 'next/server';

export function GET() {
  return NextResponse.json({
    ok: true,
    service: 'zaprolink',
    timestamp: new Date().toISOString(),
  });
}
