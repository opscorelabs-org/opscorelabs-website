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
    name: 'Team Member 1',
    role: 'Lead Developer',
    bio: 'Experienced full-stack developer with expertise in modern web technologies.',
    image: '/placeholder-avatar.jpg',
  },
  {
    name: 'Team Member 2',
    role: 'DevOps Engineer',
    bio: 'Cloud infrastructure specialist focused on scalable and secure deployments.',
    image: '/placeholder-avatar.jpg',
  },
  {
    name: 'Team Member 3',
    role: 'Blockchain Developer',
    bio: 'Smart contract developer with deep knowledge of DeFi and Web3 technologies.',
    image: '/placeholder-avatar.jpg',
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
