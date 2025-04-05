import { NextResponse } from 'next/server';
import { specializations } from '@/data/specializations';

// API route to get all specializations
export async function GET() {
  try {
    return NextResponse.json({ specializations });
  } catch (error) {
    console.error('Error fetching specializations:', error);
    return NextResponse.json(
      { error: 'Failed to fetch specializations' },
      { status: 500 }
    );
  }
}
