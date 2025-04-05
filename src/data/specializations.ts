export interface Specialization {
  id: string;
  name: string;
  description: string;
  jobTitles: string[];
  requirements: string[];
  suitableFor: string[];
  averageSalary: string;
  skills: string[];
  tools: string[];
  challenges: string[];
  futureOutlook: string;
  certifications: string[];
}

export const specializations: Specialization[] = [
  {
    id: "ai-ml",
    name: "AI and Machine Learning",
    description: "Artificial intelligence (AI) has been named a key driver of the Fourth Industrial Revolution. Machine learning enables an AI system to learn from data. Working in this field means innovating the technology of tomorrow.",
    jobTitles: [
      "Machine Learning Engineer",
      "Data Scientist",
      "AI Researcher",
      "NLP Engineer",
      "Computer Vision Engineer",
      "AI Ethics Specialist",
      "Reinforcement Learning Engineer"
    ],
    requirements: [
      "Bachelor or Master of Computer Science",
      "Knowledge of Python, Java, and R coding languages",
      "Strong mathematics background",
      "Deep learning frameworks",
      "Cloud computing experience",
      "Data analysis expertise"
    ],
    suitableFor: [
      "People who can think creatively and analytically",
      "Those who want to play a role in transforming the global economy",
      "Problem solvers who enjoy working with complex algorithms",
      "Research-oriented individuals",
      "Continuous learners",
      "Innovation-driven professionals"
    ],
    averageSalary: "$104,000+",
    skills: [
      "Deep Learning",
      "Neural Networks",
      "Natural Language Processing",
      "Computer Vision",
      "Reinforcement Learning",
      "Feature Engineering",
      "Model Deployment"
    ],
    tools: [
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "Keras",
      "Jupyter Notebooks",
      "CUDA",
      "MLflow",
      "Hugging Face"
    ],
    challenges: [
      "Keeping up with rapidly evolving field",
      "Ethical considerations in AI",
      "Bias in training data",
      "Explainability of complex models",
      "Computational resource requirements"
    ],
    futureOutlook: "The AI and ML field is expected to continue growing rapidly, with increasing applications across industries including healthcare, finance, transportation, and entertainment. Specialized roles in AI ethics, explainable AI, and AI systems engineering are emerging.",
    certifications: [
      "Google Professional Machine Learning Engineer",
      "AWS Certified Machine Learning",
      "Microsoft Certified: Azure AI Engineer",
      "TensorFlow Developer Certificate",
      "IBM AI Engineering Professional Certificate"
    ]
  },
  {
    id: "robotics",
    name: "Robotics",
    description: "The growing field of robotics focuses on building robots that can replicate human actions (from building cars to assisting in surgery). A foundation in computer science equips you to program the software that helps physical and virtual bots operate effectively.",
    jobTitles: [
      "Robotics Engineer",
      "Robotics Technician",
      "Software Developer",
      "Automation Engineer",
      "Control Systems Engineer",
      "Human-Robot Interaction Specialist",
      "Drone Engineer"
    ],
    requirements: [
      "Bachelor's degree in computer science or software, mechanical, or electrical engineering",
      "Experience with computer-aided design (CAD) software",
      "Proficiency in C++ or Python",
      "Electronics knowledge",
      "Control systems theory",
      "Sensor integration experience"
    ],
    suitableFor: [
      "People interested in computer programming as well as electrical and mechanical engineering",
      "Those who enjoy hands-on projects",
      "Individuals who like building and creating physical systems",
      "Interdisciplinary thinkers",
      "Spatial reasoning experts",
      "Mechatronics enthusiasts"
    ],
    averageSalary: "$95,000+",
    skills: [
      "Robot Operating System (ROS)",
      "Computer Vision",
      "Sensor Fusion",
      "Motion Planning",
      "Kinematics",
      "Embedded Systems",
      "Simulation"
    ],
    tools: [
      "ROS",
      "MATLAB",
      "Gazebo",
      "Arduino",
      "Raspberry Pi",
      "SolidWorks",
      "Autodesk Fusion 360",
      "Unity"
    ],
    challenges: [
      "Integration of hardware and software",
      "Real-time processing constraints",
      "Power management",
      "Safety considerations",
      "Cost of hardware development"
    ],
    futureOutlook: "Robotics is expanding beyond industrial applications into healthcare, agriculture, logistics, and consumer markets. Collaborative robots (cobots), autonomous vehicles, and service robots represent growing segments with significant career opportunities.",
    certifications: [
      "ROS Developer Certification",
      "FANUC Robot Operator Certification",
      "Universal Robots Certified Developer",
      "ABB Robotics Certification",
      "Certified LabVIEW Developer"
    ]
  },
  {
    id: "computer-forensics",
    name: "Computer Forensics",
    description: "Computer forensics exists at the intersection of law and computer science. Computer forensics, also called data or digital forensics, deals with the recovery and analysis of digital evidence recovered from computers, networks, and digital storage devices.",
    jobTitles: [
      "Digital Forensics Specialist",
      "Computer Forensics Investigator",
      "Forensic Computer Analyst",
      "E-Discovery Specialist",
      "Incident Response Analyst",
      "Mobile Device Forensics Expert",
      "Memory Forensics Specialist"
    ],
    requirements: [
      "Bachelor's degree in computer science or computer security",
      "Recognized digital forensics certification",
      "Understanding of legal procedures",
      "Knowledge of file systems",
      "Security principles",
      "Chain of custody protocols"
    ],
    suitableFor: [
      "Naturally inquisitive people",
      "Those interested in cybercrime and law enforcement",
      "Detail-oriented individuals with strong analytical skills",
      "Patient investigators",
      "Methodical workers",
      "Documentation specialists"
    ],
    averageSalary: "$85,000+",
    skills: [
      "Disk Imaging",
      "Data Recovery",
      "Memory Analysis",
      "Network Forensics",
      "Mobile Device Forensics",
      "Malware Analysis",
      "Expert Witness Testimony"
    ],
    tools: [
      "EnCase",
      "FTK",
      "Autopsy",
      "Volatility",
      "Wireshark",
      "Cellebrite",
      "X-Ways Forensics",
      "SANS SIFT Workstation"
    ],
    challenges: [
      "Keeping up with evolving technology",
      "Anti-forensics techniques",
      "Legal admissibility requirements",
      "Large volumes of data",
      "Encrypted evidence"
    ],
    futureOutlook: "Computer forensics continues to grow with increasing cybercrime rates and regulatory requirements. Cloud forensics, IoT forensics, and cryptocurrency investigations are emerging specializations with strong demand.",
    certifications: [
      "Certified Computer Forensics Examiner (CCFE)",
      "EnCase Certified Examiner (EnCE)",
      "GIAC Certified Forensic Analyst (GCFA)",
      "Certified Forensic Computer Examiner (CFCE)",
      "AccessData Certified Examiner (ACE)"
    ]
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity and Ethical Hacking",
    description: "Cybersecurity refers to the practice of protecting computer systems, networks, programs, and mobile devices from unauthorized access or digital attacks. Ethical hacking takes a proactive approach to cybersecurity by trying to find vulnerabilities before malicious hackers do.",
    jobTitles: [
      "Information Security Analyst",
      "Systems Engineer",
      "Cybersecurity Manager",
      "Penetration Tester",
      "Security Engineer",
      "Security Operations Center (SOC) Analyst",
      "Threat Intelligence Analyst",
      "Application Security Engineer"
    ],
    requirements: [
      "Bachelor of Computer Science or Master of Business Administration in Information Systems",
      "Information security certification like CISSP or CCSP",
      "Knowledge of security protocols and threat detection",
      "Networking knowledge",
      "Programming skills",
      "System administration experience"
    ],
    suitableFor: [
      "People who naturally think ahead to what could go wrong before it happens",
      "Those who take a methodical approach to problem-solving",
      "Security-minded individuals with strong ethical principles",
      "Continuous learners",
      "Adversarial thinkers",
      "Detail-oriented professionals"
    ],
    averageSalary: "$100,000+",
    skills: [
      "Vulnerability Assessment",
      "Penetration Testing",
      "Security Monitoring",
      "Incident Response",
      "Threat Hunting",
      "Security Architecture",
      "Social Engineering"
    ],
    tools: [
      "Kali Linux",
      "Metasploit",
      "Wireshark",
      "Burp Suite",
      "Nmap",
      "OWASP ZAP",
      "Splunk",
      "Nessus"
    ],
    challenges: [
      "Constantly evolving threat landscape",
      "Zero-day vulnerabilities",
      "Balancing security with usability",
      "Shortage of skilled professionals",
      "Keeping up with compliance requirements"
    ],
    futureOutlook: "Cybersecurity remains one of the fastest-growing fields with a significant skills gap. Cloud security, IoT security, and zero trust architecture are emerging areas with strong career prospects.",
    certifications: [
      "Certified Ethical Hacker (CEH)",
      "Certified Information Systems Security Professional (CISSP)",
      "Offensive Security Certified Professional (OSCP)",
      "CompTIA Security+",
      "GIAC Security Essentials (GSEC)"
    ]
  },
  {
    id: "game-design",
    name: "Video Game Design",
    description: "While video game design isn't a new industry, it's one that will likely continue to evolve. As games get more advanced, gaming companies will need more people skilled in designing and programming virtual reality, graphics, game physics, networks, and user interfaces.",
    jobTitles: [
      "Games Developer",
      "Programmer",
      "Technical Support Specialist",
      "Game Designer",
      "Level Designer",
      "Game AI Programmer",
      "Technical Artist",
      "Game Producer"
    ],
    requirements: [
      "Bachelor of Computer Science or related field",
      "Knowledge of the latest gaming trends",
      "Proficiency in C++ or Java programming languages",
      "3D modeling knowledge",
      "Game engine experience",
      "Understanding of game mechanics"
    ],
    suitableFor: [
      "Creative thinkers with a passion for video games",
      "Those who enjoy combining technical skills with artistic elements",
      "People who like working in collaborative, creative environments",
      "Gamers",
      "Storytellers",
      "Visual thinkers"
    ],
    averageSalary: "$90,000+",
    skills: [
      "Game Mechanics Design",
      "Level Design",
      "3D Modeling",
      "Animation",
      "Shader Programming",
      "Game AI",
      "Multiplayer Networking"
    ],
    tools: [
      "Unity",
      "Unreal Engine",
      "Blender",
      "Maya",
      "ZBrush",
      "Substance Painter",
      "Photoshop",
      "Git"
    ],
    challenges: [
      "Balancing creativity with technical constraints",
      "Meeting tight production schedules",
      "Optimizing performance across platforms",
      "Creating engaging player experiences",
      "Industry competition"
    ],
    futureOutlook: "The gaming industry continues to grow with emerging opportunities in mobile gaming, VR/AR experiences, and cloud gaming. Indie game development and specialized roles in game AI and procedural generation are expanding.",
    certifications: [
      "Unity Certified Programmer",
      "Unreal Engine Certification",
      "Autodesk Certified Professional",
      "Certified Game Developer",
      "Certified Scrum Master for Game Development"
    ]
  },
  {
    id: "cloud-computing",
    name: "Cloud Computing",
    description: "With the emergence of cloud computing technology, companies no longer need their own servers to build products. As the cloud continues to grow, so will the demand for professionals with cloud computing skills, including cloud security, database management, and network architecture.",
    jobTitles: [
      "Cloud Engineer",
      "Network Architect",
      "Cloud Security Specialist",
      "DevOps Engineer",
      "Cloud Infrastructure Engineer",
      "Solutions Architect",
      "Site Reliability Engineer",
      "Kubernetes Administrator"
    ],
    requirements: [
      "Bachelor's degree in computer science",
      "Certification from Google Cloud Platform (GCP), Amazon Web Services (AWS), Cisco, or Microsoft Azure",
      "Understanding of distributed systems",
      "Networking knowledge",
      "Virtualization experience",
      "System administration skills"
    ],
    suitableFor: [
      "People interested in how the internet can help transform businesses",
      "Those who enjoy working with scalable infrastructure",
      "Problem solvers who like optimizing systems",
      "System architects",
      "Business-minded technologists",
      "Automation enthusiasts"
    ],
    averageSalary: "$115,000+",
    skills: [
      "Infrastructure as Code",
      "Containerization",
      "Orchestration",
      "Microservices Architecture",
      "CI/CD Pipelines",
      "Cloud Security",
      "Cost Optimization"
    ],
    tools: [
      "AWS",
      "Azure",
      "Google Cloud",
      "Kubernetes",
      "Docker",
      "Terraform",
      "Ansible",
      "Jenkins",
      "Prometheus"
    ],
    challenges: [
      "Ensuring security in shared environments",
      "Managing cloud costs",
      "Multi-cloud integration",
      "Keeping up with rapid service evolution",
      "Compliance in the cloud"
    ],
    futureOutlook: "Cloud computing continues to expand with serverless computing, edge computing, and multi-cloud strategies driving growth. Specialized roles in cloud security, FinOps, and platform engineering are in high demand.",
    certifications: [
      "AWS Certified Solutions Architect",
      "Microsoft Certified: Azure Administrator",
      "Google Cloud Professional Cloud Architect",
      "Certified Kubernetes Administrator (CKA)",
      "HashiCorp Certified: Terraform Associate"
    ]
  },
  {
    id: "bioinformatics",
    name: "Bioinformatics",
    description: "Bioinformatics combines mathematics, biology, and computer science to better understand biological data. Scientists in this field use the growing stream of biological data by storing, analyzing, and interpreting big data sets using computer technology.",
    jobTitles: [
      "Bioinformatics Scientist",
      "Research Associate",
      "Bioinformatics Engineer",
      "Computational Biologist",
      "Biostatistician",
      "Genomics Specialist",
      "Clinical Informatics Specialist",
      "Structural Bioinformatician"
    ],
    requirements: [
      "Master's degree in computer science or computational biology",
      "Proficiency with Python, Perl, and R programming languages",
      "Understanding of biological systems",
      "Biology knowledge",
      "Statistics understanding",
      "Database experience"
    ],
    suitableFor: [
      "People who like analyzing facts and working with ideas",
      "Those interested in biological science as well as computers",
      "Individuals who enjoy interdisciplinary work",
      "Research-oriented individuals",
      "Patient problem-solvers",
      "Detail-oriented scientists"
    ],
    averageSalary: "$95,000+",
    skills: [
      "Sequence Analysis",
      "Genomics",
      "Proteomics",
      "Phylogenetics",
      "Structural Biology",
      "Pathway Analysis",
      "Next-Generation Sequencing"
    ],
    tools: [
      "BLAST",
      "Bioconductor",
      "Galaxy",
      "PyMOL",
      "MEGA",
      "Cytoscape",
      "Ensembl",
      "UCSC Genome Browser"
    ],
    challenges: [
      "Handling extremely large datasets",
      "Integrating diverse data types",
      "Biological complexity",
      "Interdisciplinary communication",
      "Reproducibility of analyses"
    ],
    futureOutlook: "Bioinformatics is growing with advances in precision medicine, genomics, and drug discovery. Emerging areas include single-cell analysis, multi-omics integration, and AI applications in healthcare.",
    certifications: [
      "Certified Bioinformatics Professional",
      "EMBL-EBI Bioinformatics Training Certification",
      "Genomic Data Science Certification",
      "Clinical Bioinformatics Certification",
      "Next-Generation Sequencing Data Analysis Certification"
    ]
  },
  {
    id: "ux-design",
    name: "UX Design",
    description: "User experience (UX) design helps shape a customer's emotions and attitudes when using a particular product, service, or system. Whether for a physical product or, more often, for a website or app, user design is concerned with gathering and analyzing data to craft the most enjoyable and efficient user experience.",
    jobTitles: [
      "UX Designer",
      "Information Architect",
      "Product Manager",
      "UI/UX Designer",
      "Interaction Designer",
      "User Researcher",
      "UX Strategist",
      "Accessibility Specialist"
    ],
    requirements: [
      "Bachelor's degree in human-computer interaction, computer science, or psychology",
      "Knowledge of design and prototyping tools like Sketch, InVision, or AdobeXD",
      "Understanding of user research methods",
      "Design principles knowledge",
      "Prototyping skills",
      "Usability testing methodologies"
    ],
    suitableFor: [
      "People interested in human behavior",
      "Those who want a career where they can use their creativity",
      "Individuals who enjoy combining technical and psychological insights",
      "Empathetic thinkers",
      "Problem solvers",
      "Visual communicators"
    ],
    averageSalary: "$85,000+",
    skills: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Usability Testing",
      "Information Architecture",
      "Interaction Design",
      "Visual Design",
      "Accessibility"
    ],
    tools: [
      "Figma",
      "Adobe XD",
      "Sketch",
      "InVision",
      "Axure",
      "UserTesting",
      "Optimal Workshop",
      "Miro"
    ],
    challenges: [
      "Balancing user needs with business goals",
      "Designing for diverse user groups",
      "Measuring UX success",
      "Communicating design decisions",
      "Keeping up with evolving platforms"
    ],
    futureOutlook: "UX design continues to grow as organizations recognize its impact on product success. Specialized roles in voice UI, AR/VR experiences, and accessibility are emerging areas with strong demand.",
    certifications: [
      "Certified User Experience Professional (CUXP)",
      "Nielsen Norman Group UX Certification",
      "Interaction Design Foundation Certification",
      "Google UX Design Professional Certificate",
      "Certified Usability Analyst (CUA)"
    ]
  },
  {
    id: "big-data",
    name: "Big Data",
    description: "Businesses are often inundated with data each day, more data than the human mind can make sense of on its own. Big data analytics comes in. This field deals with collecting and analyzing large data sets to find valuable information that can be leveraged to make better business decisions.",
    jobTitles: [
      "Data Scientist",
      "Data Visualization Developer",
      "Business Intelligence Engineer",
      "Data Engineer",
      "Big Data Architect",
      "Data Analyst",
      "Data Warehouse Engineer",
      "Analytics Engineer"
    ],
    requirements: [
      "Bachelor's or master's degree in computer or data science",
      "Proficiency with SQL",
      "Knowledge of Python, Java, or R programming languages",
      "Database knowledge",
      "Understanding of distributed systems",
      "Data modeling experience"
    ],
    suitableFor: [
      "People who enjoy mathematics and making sense of large data sets",
      "Those who like finding patterns and insights in complex information",
      "Analytical thinkers with strong problem-solving skills",
      "Detail-oriented individuals",
      "Systems thinkers",
      "Performance optimizers"
    ],
    averageSalary: "$110,000+",
    skills: [
      "Distributed Computing",
      "Data Warehousing",
      "ETL/ELT Processes",
      "Data Modeling",
      "SQL",
      "NoSQL",
      "Stream Processing",
      "Data Governance"
    ],
    tools: [
      "Hadoop",
      "Spark",
      "Kafka",
      "Snowflake",
      "Airflow",
      "Databricks",
      "Redshift",
      "BigQuery",
      "Elasticsearch"
    ],
    challenges: [
      "Handling data volume and velocity",
      "Ensuring data quality",
      "Data privacy and compliance",
      "Integrating diverse data sources",
      "Optimizing performance at scale"
    ],
    futureOutlook: "Big Data continues to grow with increasing data volumes and real-time analytics needs. Emerging areas include real-time streaming analytics, data mesh architecture, and DataOps practices.",
    certifications: [
      "Cloudera Certified Data Engineer",
      "AWS Certified Data Analytics",
      "Google Cloud Professional Data Engineer",
      "Microsoft Certified: Azure Data Engineer",
      "Databricks Certified Data Engineer"
    ]
  },
  {
    id: "iot",
    name: "Internet of Things (IoT)",
    description: "Physical objects around the globe—from thermostats and lightbulbs to toys and audio speakers—are now connected to the internet. IoT refers to this collection of devices and the technology used to connect the physical with the digital. As the number of 'smart' objects grows, companies will need professionals with the skills to design, develop, and program them.",
    jobTitles: [
      "IoT Developer",
      "Embedded Systems Designer",
      "Vulnerability Analyst",
      "IoT Solutions Architect",
      "IoT Product Manager",
      "Firmware Engineer",
      "IoT Security Specialist",
      "Edge Computing Engineer"
    ],
    requirements: [
      "Bachelor of Computer Science",
      "IoT or cloud development certification",
      "Proficiency with JavaScript and Python",
      "Electronics knowledge",
      "Networking understanding",
      "Security awareness"
    ],
    suitableFor: [
      "Natural tinkerers obsessed with the latest gadgets",
      "Those who enjoy working with both hardware and software",
      "People interested in creating connected systems",
      "Hardware enthusiasts",
      "System thinkers",
      "Innovators"
    ],
    averageSalary: "$100,000+",
    skills: [
      "Embedded Programming",
      "Sensor Integration",
      "Wireless Communication",
      "Edge Computing",
      "IoT Protocols",
      "Power Management",
      "Real-time Systems"
    ],
    tools: [
      "Arduino",
      "Raspberry Pi",
      "ESP32",
      "MQTT",
      "AWS IoT",
      "Azure IoT",
      "Node-RED",
      "Zigbee/Z-Wave"
    ],
    challenges: [
      "Device security",
      "Power constraints",
      "Interoperability between devices",
      "Scalability",
      "Connectivity in challenging environments"
    ],
    futureOutlook: "IoT continues to expand across industrial, consumer, healthcare, and smart city applications. Edge computing, 5G integration, and industrial IoT represent growing segments with significant career opportunities.",
    certifications: [
      "AWS Certified IoT Specialist",
      "Microsoft Certified: Azure IoT Developer",
      "Certified Internet of Things Practitioner",
      "IoT Security Foundation Certification",
      "Cisco IoT Certification"
    ]
  }
];
