import { NextResponse } from 'next/server';
import { specializations } from '@/data/specializations';
import { questions } from '@/data/questions';

// API route to get all specializations
export async function GET() {
  return NextResponse.json({ specializations, questions });
}

// API route to calculate recommendations based on answers
export async function POST(request: NextRequest) {
  try {
    const { answers } = await request.json();
    
    if (!answers || !Array.isArray(answers) || answers.length !== questions.length) {
      return NextResponse.json(
        { error: 'Invalid answers format' },
        { status: 400 }
      );
    }

    // Initialize scores for each specialization
    const scores: {[key: string]: number} = {};
    specializations.forEach(spec => {
      scores[spec.id] = 0;
    });

    // Calculate scores based on selected options
    answers.forEach((optionId, qIndex) => {
      const question = questions[qIndex];
      const option = question.options.find(opt => opt.id === optionId);
      
      if (option) {
        option.specializations.forEach(spec => {
          scores[spec.id] += spec.weight;
        });
      }
    });

    // Convert to array and sort by score
    const results = Object.entries(scores).map(([id, score]) => ({
      id,
      score,
      specialization: specializations.find(spec => spec.id === id)
    })).sort((a, b) => b.score - a.score);

    return NextResponse.json({ results });
  } catch (error) {
    console.error('Error processing recommendation:', error);
    return NextResponse.json(
      { error: 'Failed to process recommendation' },
      { status: 500 }
    );
  }
}
