import { NextRequest, NextResponse } from 'next/server';
import { specializations } from '@/data/specializations';

// API route to get a specific specialization by ID
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const specialization = specializations.find(spec => spec.id === id);
    
    if (!specialization) {
      return NextResponse.json(
        { error: 'Specialization not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ specialization });
  } catch (error) {
    console.error('Error fetching specialization:', error);
    return NextResponse.json(
      { error: 'Failed to fetch specialization' },
      { status: 500 }
    );
  }
}
