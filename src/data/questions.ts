export interface Question {
  id: string;
  text: string;
  options: Option[];
}

export interface Option {
  id: string;
  text: string;
  specializations: {
    id: string;
    weight: number;
  }[];
}

export const questions: Question[] = [
  {
    id: "interests",
    text: "What interests you the most?",
    options: [
      {
        id: "data-analysis",
        text: "Analyzing data and finding patterns",
        specializations: [
          { id: "ai-ml", weight: 3 },
          { id: "big-data", weight: 5 },
          { id: "bioinformatics", weight: 4 }
        ]
      },
      {
        id: "building-systems",
        text: "Building and designing systems",
        specializations: [
          { id: "cloud-computing", weight: 4 },
          { id: "iot", weight: 5 },
          { id: "robotics", weight: 4 }
        ]
      },
      {
        id: "security",
        text: "Security and protecting systems",
        specializations: [
          { id: "cybersecurity", weight: 5 },
          { id: "computer-forensics", weight: 4 },
          { id: "iot", weight: 2 }
        ]
      },
      {
        id: "user-experience",
        text: "Creating user experiences and interfaces",
        specializations: [
          { id: "ux-design", weight: 5 },
          { id: "game-design", weight: 4 },
          { id: "big-data", weight: 1 }
        ]
      },
      {
        id: "innovation",
        text: "Innovating and creating new technologies",
        specializations: [
          { id: "ai-ml", weight: 5 },
          { id: "iot", weight: 4 },
          { id: "robotics", weight: 5 }
        ]
      },
      {
        id: "healthcare",
        text: "Applying technology to healthcare and medicine",
        specializations: [
          { id: "bioinformatics", weight: 5 },
          { id: "ai-ml", weight: 3 },
          { id: "iot", weight: 2 }
        ]
      },
      {
        id: "business-intelligence",
        text: "Using data to drive business decisions",
        specializations: [
          { id: "big-data", weight: 5 },
          { id: "cloud-computing", weight: 3 },
          { id: "ux-design", weight: 2 }
        ]
      }
    ]
  },
  {
    id: "skills",
    text: "Which skills do you already have or are most interested in developing?",
    options: [
      {
        id: "programming",
        text: "Programming and software development",
        specializations: [
          { id: "ai-ml", weight: 4 },
          { id: "game-design", weight: 5 },
          { id: "cloud-computing", weight: 3 }
        ]
      },
      {
        id: "design",
        text: "Design and creative thinking",
        specializations: [
          { id: "ux-design", weight: 5 },
          { id: "game-design", weight: 4 },
          { id: "iot", weight: 2 }
        ]
      },
      {
        id: "analysis",
        text: "Analysis and problem-solving",
        specializations: [
          { id: "computer-forensics", weight: 4 },
          { id: "cybersecurity", weight: 4 },
          { id: "big-data", weight: 5 }
        ]
      },
      {
        id: "mathematics",
        text: "Mathematics and algorithms",
        specializations: [
          { id: "ai-ml", weight: 5 },
          { id: "bioinformatics", weight: 4 },
          { id: "big-data", weight: 4 }
        ]
      },
      {
        id: "hardware",
        text: "Hardware and physical systems",
        specializations: [
          { id: "robotics", weight: 5 },
          { id: "iot", weight: 5 },
          { id: "cloud-computing", weight: 2 }
        ]
      },
      {
        id: "database",
        text: "Database management and SQL",
        specializations: [
          { id: "big-data", weight: 5 },
          { id: "cloud-computing", weight: 4 },
          { id: "bioinformatics", weight: 3 }
        ]
      },
      {
        id: "networking",
        text: "Networking and distributed systems",
        specializations: [
          { id: "cloud-computing", weight: 5 },
          { id: "cybersecurity", weight: 4 },
          { id: "iot", weight: 3 }
        ]
      }
    ]
  },
  {
    id: "programming-languages",
    text: "Which programming languages or technologies are you most interested in?",
    options: [
      {
        id: "python",
        text: "Python and data science libraries",
        specializations: [
          { id: "ai-ml", weight: 5 },
          { id: "big-data", weight: 4 },
          { id: "bioinformatics", weight: 4 }
        ]
      },
      {
        id: "javascript",
        text: "JavaScript and web technologies",
        specializations: [
          { id: "ux-design", weight: 5 },
          { id: "cloud-computing", weight: 3 },
          { id: "game-design", weight: 3 }
        ]
      },
      {
        id: "c-languages",
        text: "C, C++, or C#",
        specializations: [
          { id: "game-design", weight: 5 },
          { id: "robotics", weight: 4 },
          { id: "iot", weight: 4 }
        ]
      },
      {
        id: "java",
        text: "Java and enterprise applications",
        specializations: [
          { id: "cloud-computing", weight: 4 },
          { id: "big-data", weight: 3 },
          { id: "cybersecurity", weight: 3 }
        ]
      },
      {
        id: "specialized",
        text: "Specialized languages (R, Swift, Rust, etc.)",
        specializations: [
          { id: "bioinformatics", weight: 4 },
          { id: "iot", weight: 3 },
          { id: "cybersecurity", weight: 3 }
        ]
      }
    ]
  },
  {
    id: "work-environment",
    text: "What type of work environment do you prefer?",
    options: [
      {
        id: "research",
        text: "Research and academic settings",
        specializations: [
          { id: "ai-ml", weight: 4 },
          { id: "bioinformatics", weight: 5 },
          { id: "robotics", weight: 3 }
        ]
      },
      {
        id: "corporate",
        text: "Corporate and business environments",
        specializations: [
          { id: "cloud-computing", weight: 5 },
          { id: "big-data", weight: 4 },
          { id: "cybersecurity", weight: 4 }
        ]
      },
      {
        id: "creative",
        text: "Creative and design-focused studios",
        specializations: [
          { id: "game-design", weight: 5 },
          { id: "ux-design", weight: 5 },
          { id: "iot", weight: 2 }
        ]
      },
      {
        id: "security",
        text: "Security and law enforcement",
        specializations: [
          { id: "computer-forensics", weight: 5 },
          { id: "cybersecurity", weight: 4 },
          { id: "big-data", weight: 2 }
        ]
      },
      {
        id: "startup",
        text: "Startups and innovative companies",
        specializations: [
          { id: "iot", weight: 4 },
          { id: "ai-ml", weight: 4 },
          { id: "ux-design", weight: 3 }
        ]
      },
      {
        id: "healthcare",
        text: "Healthcare and medical institutions",
        specializations: [
          { id: "bioinformatics", weight: 5 },
          { id: "ai-ml", weight: 3 },
          { id: "big-data", weight: 3 }
        ]
      },
      {
        id: "remote",
        text: "Remote work and digital nomad lifestyle",
        specializations: [
          { id: "cloud-computing", weight: 4 },
          { id: "ux-design", weight: 4 },
          { id: "big-data", weight: 3 }
        ]
      }
    ]
  },
  {
    id: "personality",
    text: "Which personality trait best describes you?",
    options: [
      {
        id: "analytical",
        text: "Analytical and detail-oriented",
        specializations: [
          { id: "big-data", weight: 5 },
          { id: "computer-forensics", weight: 5 },
          { id: "bioinformatics", weight: 4 }
        ]
      },
      {
        id: "creative",
        text: "Creative and innovative",
        specializations: [
          { id: "game-design", weight: 5 },
          { id: "ux-design", weight: 5 },
          { id: "ai-ml", weight: 3 }
        ]
      },
      {
        id: "methodical",
        text: "Methodical and security-minded",
        specializations: [
          { id: "cybersecurity", weight: 5 },
          { id: "computer-forensics", weight: 4 },
          { id: "cloud-computing", weight: 3 }
        ]
      },
      {
        id: "hands-on",
        text: "Hands-on and practical",
        specializations: [
          { id: "robotics", weight: 5 },
          { id: "iot", weight: 5 },
          { id: "game-design", weight: 3 }
        ]
      },
      {
        id: "visionary",
        text: "Visionary and forward-thinking",
        specializations: [
          { id: "ai-ml", weight: 5 },
          { id: "iot", weight: 4 },
          { id: "cloud-computing", weight: 4 }
        ]
      },
      {
        id: "collaborative",
        text: "Collaborative and team-oriented",
        specializations: [
          { id: "ux-design", weight: 4 },
          { id: "cloud-computing", weight: 3 },
          { id: "game-design", weight: 4 }
        ]
      },
      {
        id: "independent",
        text: "Independent and self-directed",
        specializations: [
          { id: "computer-forensics", weight: 4 },
          { id: "bioinformatics", weight: 3 },
          { id: "big-data", weight: 3 }
        ]
      }
    ]
  },
  {
    id: "learning-style",
    text: "How do you prefer to learn new concepts?",
    options: [
      {
        id: "hands-on",
        text: "By doing and experimenting",
        specializations: [
          { id: "robotics", weight: 4 },
          { id: "game-design", weight: 4 },
          { id: "iot", weight: 4 }
        ]
      },
      {
        id: "theoretical",
        text: "Through theory and academic research",
        specializations: [
          { id: "ai-ml", weight: 4 },
          { id: "bioinformatics", weight: 4 },
          { id: "computer-forensics", weight: 3 }
        ]
      },
      {
        id: "visual",
        text: "Visually through diagrams and demonstrations",
        specializations: [
          { id: "ux-design", weight: 5 },
          { id: "big-data", weight: 3 },
          { id: "game-design", weight: 4 }
        ]
      },
      {
        id: "collaborative",
        text: "By working with others and discussing ideas",
        specializations: [
          { id: "cloud-computing", weight: 3 },
          { id: "cybersecurity", weight: 3 },
          { id: "ux-design", weight: 4 }
        ]
      },
      {
        id: "problem-solving",
        text: "Through problem-solving and challenges",
        specializations: [
          { id: "cybersecurity", weight: 4 },
          { id: "ai-ml", weight: 4 },
          { id: "big-data", weight: 3 }
        ]
      }
    ]
  },
  {
    id: "career-goals",
    text: "What are your long-term career goals?",
    options: [
      {
        id: "cutting-edge",
        text: "Working on cutting-edge technology",
        specializations: [
          { id: "ai-ml", weight: 5 },
          { id: "robotics", weight: 4 },
          { id: "iot", weight: 4 }
        ]
      },
      {
        id: "high-salary",
        text: "Maximizing earning potential",
        specializations: [
          { id: "cloud-computing", weight: 5 },
          { id: "ai-ml", weight: 4 },
          { id: "big-data", weight: 4 }
        ]
      },
      {
        id: "social-impact",
        text: "Making a positive social impact",
        specializations: [
          { id: "bioinformatics", weight: 5 },
          { id: "cybersecurity", weight: 3 },
          { id: "ux-design", weight: 3 }
        ]
      },
      {
        id: "creative-expression",
        text: "Creative expression and design",
        specializations: [
          { id: "game-design", weight: 5 },
          { id: "ux-design", weight: 5 },
          { id: "iot", weight: 2 }
        ]
      },
      {
        id: "security",
        text: "Protecting systems and solving crimes",
        specializations: [
          { id: "cybersecurity", weight: 5 },
          { id: "computer-forensics", weight: 5 },
          { id: "cloud-computing", weight: 2 }
        ]
      },
      {
        id: "entrepreneurship",
        text: "Starting your own tech company or product",
        specializations: [
          { id: "iot", weight: 4 },
          { id: "ai-ml", weight: 4 },
          { id: "cloud-computing", weight: 3 }
        ]
      },
      {
        id: "work-life-balance",
        text: "Achieving good work-life balance and stability",
        specializations: [
          { id: "ux-design", weight: 3 },
          { id: "big-data", weight: 3 },
          { id: "cloud-computing", weight: 4 }
        ]
      }
    ]
  },
  {
    id: "industry-preference",
    text: "Which industry sector interests you most?",
    options: [
      {
        id: "tech-giants",
        text: "Major tech companies (Google, Microsoft, etc.)",
        specializations: [
          { id: "ai-ml", weight: 4 },
          { id: "cloud-computing", weight: 5 },
          { id: "big-data", weight: 4 }
        ]
      },
      {
        id: "healthcare",
        text: "Healthcare and medical technology",
        specializations: [
          { id: "bioinformatics", weight: 5 },
          { id: "ai-ml", weight: 3 },
          { id: "iot", weight: 3 }
        ]
      },
      {
        id: "finance",
        text: "Finance and fintech",
        specializations: [
          { id: "big-data", weight: 4 },
          { id: "cybersecurity", weight: 4 },
          { id: "cloud-computing", weight: 3 }
        ]
      },
      {
        id: "entertainment",
        text: "Entertainment and gaming",
        specializations: [
          { id: "game-design", weight: 5 },
          { id: "ux-design", weight: 3 },
          { id: "ai-ml", weight: 2 }
        ]
      },
      {
        id: "government",
        text: "Government and public sector",
        specializations: [
          { id: "cybersecurity", weight: 5 },
          { id: "computer-forensics", weight: 5 },
          { id: "big-data", weight: 3 }
        ]
      },
      {
        id: "manufacturing",
        text: "Manufacturing and industrial automation",
        specializations: [
          { id: "robotics", weight: 5 },
          { id: "iot", weight: 4 },
          { id: "cloud-computing", weight: 2 }
        ]
      },
      {
        id: "retail",
        text: "Retail and e-commerce",
        specializations: [
          { id: "ux-design", weight: 4 },
          { id: "big-data", weight: 4 },
          { id: "cloud-computing", weight: 3 }
        ]
      }
    ]
  }
];
