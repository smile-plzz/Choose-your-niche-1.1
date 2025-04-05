# CSE Specialization Recommendation App

A web application to help Computer Science Engineering (CSE) freshers choose specialized sectors for their careers.

## Features

- Interactive questionnaire about interests, skills, and preferences
- Recommendation algorithm that matches users with suitable CSE specializations
- Detailed information about 10 different CSE specializations
- Responsive design that works on mobile and desktop

## Specializations Covered

1. AI and Machine Learning
2. Robotics
3. Computer Forensics
4. Cybersecurity and Ethical Hacking
5. Video Game Design
6. Cloud Computing
7. Bioinformatics
8. UX Design
9. Big Data
10. Internet of Things (IoT)

## Technology Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **Deployment**: Temporary URL via port exposure

## How It Works

The application uses a weighted scoring algorithm to match users with suitable specializations based on their responses to questions about:

- Interests
- Skills
- Work environment preferences
- Personality traits
- Career goals

Each response adds weight to relevant specializations, and the top matches are presented to the user with detailed information.

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Run the development server:
   ```
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

- `src/app/page.tsx`: Main application component
- `src/app/layout.tsx`: Layout component
- `src/components/`: Reusable UI components
- `src/data/`: Data models and content
  - `specializations.ts`: Information about CSE specializations
  - `questions.ts`: Question flow and scoring weights
- `src/app/api/`: Backend API routes

## API Endpoints

- `GET /api/specializations`: Get all specializations
- `GET /api/specializations/[id]`: Get a specific specialization
- `GET /api/questions`: Get all questions
- `GET /api/recommendations`: Get specializations and questions
- `POST /api/recommendations`: Calculate recommendations based on answers

## License

This project is open source and available under the MIT License.
