import { NextRequest, NextResponse } from 'next/server';
import { questions } from '@/data/questions';

// API route to get all questions
export async function GET() {
  try {
    return NextResponse.json({ questions });
  } catch (error) {
    console.error('Error fetching questions:', error);
    return NextResponse.json(
      { error: 'Failed to fetch questions' },
      { status: 500 }
    );
  }
}
