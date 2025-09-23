export const SITE_CONFIG = {
  name: 'OpsCore Labs',
  fullName: 'OpsCore Labs LLC',
  description: 'Full-service technology consultancy specializing in frontend, backend, DevOps, cloud architecture, and blockchain solutions.',
  email: 'contact@opscorelabs.com',
  url: 'https://opscorelabs.com',
} as const;

export const NAVIGATION_ITEMS = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Team', href: '#team' },
  { name: 'Contact', href: '#contact' },
] as const;

export const SERVICES = [
  {
    title: 'Frontend Development',
    description: 'Modern, responsive web applications using React, Vue, Angular, and cutting-edge technologies.',
    icon: '🎨',
  },
  {
    title: 'Backend Development',
    description: 'Scalable server-side solutions with Node.js, Python, Go, and cloud-native architectures.',
    icon: '⚙️',
  },
  {
    title: 'DevOps & Cloud',
    description: 'Infrastructure automation, CI/CD pipelines, and cloud migration strategies.',
    icon: '☁️',
  },
  {
    title: 'Cloud Architecture',
    description: 'Design and implement robust, scalable cloud solutions on AWS, Azure, and GCP.',
    icon: '🏗️',
  },
  {
    title: 'Blockchain Development',
    description: 'Smart contracts, DeFi protocols, and Web3 applications on various blockchain platforms.',
    icon: '⛓️',
  },
  {
    title: 'Full-Stack Solutions',
    description: 'End-to-end development from concept to deployment with modern tech stacks.',
    icon: '🚀',
  },
] as const;

export const TEAM_PLACEHOLDERS = [
  {
    name: 'Kumar Saurabh',
    role: 'Engineering Lead',
    bio: 'Engineering Lead with 10+ years of experience building and scaling backend systems, infrastructure, and architecture across startups and globally distributed platforms.',
    image: '/team/saurabh.png',
    social: {
      linkedin: 'https://www.linkedin.com/in/itsksaurabh/',
      github: 'https://github.com/itsksaurabh',
      twitter: 'https://twitter.com/itsksaurabh',
    },
  },
  {
    name: 'Abhishek Gupta',
    role: 'Lead DevSecOps Engineer',
    bio: 'Lead DevSecOps Engineer with 15+ years of experience in cloud infrastructure, automation, and scalable system deployments. Expert in Kubernetes, AWS, and CI/CD pipelines.',
    image: '/team/abhishek.png',
    social: {
      linkedin: 'https://www.linkedin.com/in/abhishek-gupta-33018046/',
      github: 'https://github.com/abhishekgupta',
      twitter: 'https://twitter.com/abhishekgupta',
    },
  },
  {
    name: 'Robil Sharma',
    role: 'Senior Blockchain & Full Stack Developer & DevOps',
    bio: 'Senior Blockchain and Full Stack Developer with expertise in smart contracts, DeFi protocols, and modern web applications. Skilled in Solidity, React, Node.js, and DevOps.',
    image: '/team/robil.png',
    social: {
      linkedin: 'https://www.linkedin.com/in/robil-sharma/',
      github: 'https://github.com/robilsharma',
      twitter: 'https://twitter.com/robilsharma',
    },
  },
  {
    name: 'Vishwajeet Singh',
    role: 'Senior Blockchain Engineer & DevOps',
    bio: 'Senior Blockchain Engineer and DevOps specialist with deep expertise in Ethereum, smart contracts, and blockchain infrastructure. Experienced in building scalable blockchain solutions.',
    image: '/team/vishwajeet.png',
    social: {
      linkedin: 'https://www.linkedin.com/in/vishwajeety12/',
      github: 'https://github.com/vishwajeety12',
      twitter: 'https://twitter.com/vishwajeety12',
    },
  },
  {
    name: 'Atul Agrawal',
    role: 'Lead Blockchain Developer',
    bio: 'Lead Blockchain Developer and Smart Contract expert with extensive experience in Ethereum, Solidity, and Web3 technologies. Specialized in building secure, gas-optimized smart contracts.',
    image: '/team/atul.png',
    social: {
      linkedin: 'https://www.linkedin.com/in/atul-agr/',
      github: 'https://github.com/atulagr',
      twitter: 'https://twitter.com/atulagr',
    },
  },
  {
    name: 'Kumar Gaurav',
    role: 'Senior Web3 Frontend Engineer',
    bio: 'Senior Web3 Frontend Engineer with expertise in building modern, interactive user interfaces for blockchain applications. Skilled in React, TypeScript, and Web3 integration.',
    image: '/team/gaurav.png',
    social: {
      linkedin: 'https://www.linkedin.com/in/arkhaminferno/',
      github: 'https://github.com/arkhaminferno',
      twitter: 'https://twitter.com/arkhaminferno',
    },
  },
] as const;

export const ANIMATION_CONFIG = {
  duration: {
    fast: 0.2,
    normal: 0.3,
    slow: 0.5,
  },
  easing: {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  },
} as const;

export const PARTICLE_CONFIG = {
  count: 200,
  speed: 0.5,
  size: 3,
  opacity: 0.8,
  colors: ['#00d4ff', '#ff006e', '#8338ec', '#00ff88', '#ffaa00', '#ff3366'],
} as const;

export const TIMELINE_SERVICES = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'We create stunning, responsive web applications using the latest frontend technologies. Our expertise spans React, Vue.js, Angular, Next.js, and modern CSS frameworks.',
    icon: '🎨',
    technologies: ['React', 'Vue.js', 'Angular', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Three.js', 'WebGL', 'PWA', 'Svelte', 'Nuxt.js', 'Gatsby', 'Vite', 'Webpack', 'Storybook', 'Jest', 'Cypress', 'Sass', 'Styled Components', 'Material-UI', 'Chakra UI'],
    features: [
      'Responsive Design & Mobile-First Approach',
      'Performance Optimization & Core Web Vitals',
      'Accessibility (WCAG 2.1 AA Compliance)',
      'Progressive Web Apps (PWA)',
      '3D Graphics & WebGL Integration',
      'Real-time Data Visualization',
      'Micro-frontend Architecture',
      'Component Library Development'
    ]
  },
  {
    id: 'backend',
    title: 'Backend Development',
    description: 'Robust server-side solutions with scalable architecture, microservices, and modern API design. We handle everything from database design to cloud deployment.',
    icon: '⚙️',
    technologies: ['Node.js', 'Python', 'Go', 'Rust', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'Kubernetes', 'GraphQL', 'REST APIs', 'gRPC', 'Express.js', 'FastAPI', 'Django', 'Flask', 'Spring Boot', 'Laravel', 'MySQL', 'Elasticsearch', 'RabbitMQ', 'Apache Kafka', 'Prisma', 'TypeORM', 'JWT', 'OAuth2'],
    features: [
      'Microservices Architecture',
      'RESTful & GraphQL APIs',
      'Real-time Communication (WebSockets)',
      'Database Design & Optimization',
      'Caching Strategies & Redis',
      'Message Queues & Event Streaming',
      'Authentication & Authorization',
      'API Rate Limiting & Security'
    ]
  },
  {
    id: 'devops',
    title: 'DevOps & Cloud Architecture',
    description: 'Complete infrastructure automation, CI/CD pipelines, and cloud-native solutions. We ensure your applications are scalable, secure, and highly available.',
    icon: '☁️',
    technologies: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'Ansible', 'Jenkins', 'GitLab CI', 'Prometheus', 'Grafana', 'ELK Stack', 'Helm', 'Istio', 'CloudFormation', 'Pulumi', 'Serverless Framework', 'AWS Lambda', 'Azure Functions', 'NGINX', 'Traefik', 'Datadog', 'New Relic'],
    features: [
      'Infrastructure as Code (IaC)',
      'Container Orchestration',
      'CI/CD Pipeline Automation',
      'Monitoring & Logging Solutions',
      'Auto-scaling & Load Balancing',
      'Security & Compliance',
      'Disaster Recovery Planning',
      'Cost Optimization Strategies'
    ]
  },
  {
    id: 'blockchain',
    title: 'Blockchain Development',
    description: 'Cutting-edge blockchain solutions including smart contracts, DeFi protocols, NFTs, and Web3 integration. We build the future of decentralized applications.',
    icon: '⛓️',
    technologies: ['Solidity', 'Web3.js', 'Ethers.js', 'Hardhat', 'Truffle', 'IPFS', 'Ethereum', 'Polygon', 'Binance Smart Chain', 'Arbitrum', 'Optimism', 'Foundry', 'OpenZeppelin', 'Chainlink', 'The Graph', 'Alchemy', 'Infura', 'MetaMask', 'WalletConnect', 'RainbowKit', 'Wagmi', 'Viem', 'React Query', 'Apollo Client', 'Uniswap', 'Aave', 'Compound', 'OpenSea', 'Rarible', 'ENS'],
    features: [
      'Smart Contract Development',
      'DeFi Protocol Integration',
      'NFT Marketplace Development',
      'Web3 Wallet Integration',
      'Cross-chain Bridge Solutions',
      'Token Economics Design',
      'Blockchain Analytics',
      'Security Auditing & Testing'
    ]
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    description: 'Intelligent solutions powered by artificial intelligence and machine learning. From data analysis to predictive models and automation.',
    icon: '🤖',
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI API', 'LangChain', 'Hugging Face', 'Pandas', 'NumPy', 'Jupyter', 'MLflow', 'Keras', 'XGBoost', 'Apache Spark', 'Apache Airflow', 'Kubeflow', 'Weights & Biases', 'TensorBoard', 'Grafana', 'Elasticsearch', 'Streamlit', 'Gradio', 'FastAPI', 'Flask', 'Django'],
    features: [
      'Natural Language Processing (NLP)',
      'Computer Vision & Image Recognition',
      'Predictive Analytics & Forecasting',
      'Recommendation Systems',
      'Chatbot & Conversational AI',
      'Data Pipeline Automation',
      'Model Training & Optimization',
      'MLOps & Model Deployment'
    ]
  },
  {
    id: 'mobile',
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications with exceptional user experience. From iOS and Android to React Native and Flutter solutions.',
    icon: '📱',
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Expo', 'Firebase', 'App Store Connect', 'Google Play Console', 'Xcode', 'Android Studio', 'Ionic', 'Unity', 'Unreal Engine', 'OpenGL', 'WebGL', 'Three.js', 'ARKit', 'ARCore', 'WebXR', 'Firebase Analytics', 'Firebase Crashlytics', 'Firebase Performance', 'Firebase Cloud Messaging'],
    features: [
      'Cross-platform Development',
      'Native Performance Optimization',
      'Push Notifications & Analytics',
      'App Store Optimization (ASO)',
      'Offline-first Architecture',
      'Biometric Authentication',
      'In-app Purchases & Monetization',
      'App Performance Monitoring'
    ]
  }
] as const;
