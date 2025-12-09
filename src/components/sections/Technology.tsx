import { useEffect } from 'react';

// Technology stack data
const techStacks = [
  {
    title: 'Cloud, DevOps & Infrastructure',
    speed: 0.6,
    items: [
      { icon: 'logos:aws', name: 'AWS' },
      { icon: 'logos:google-cloud', name: 'GCP' },
      { icon: 'logos:microsoft-azure', name: 'Azure' },
      { icon: 'simple-icons:ibm', name: 'IBM Cloud', color: '#052FAD' },
      { icon: 'logos:digital-ocean', name: 'DigitalOcean' },
      { icon: 'logos:git-icon', name: 'Git' },
      { icon: 'logos:github-icon', name: 'GitHub' },
      { icon: 'logos:gitlab-icon', name: 'GitLab' },
      { icon: 'logos:jenkins', name: 'Jenkins' },
      { icon: 'logos:docker-icon', name: 'Docker' },
      { icon: 'logos:kubernetes', name: 'Kubernetes' },
      { icon: 'logos:openshift', name: 'OpenShift' },
      { icon: 'logos:terraform-icon', name: 'Terraform' },
      { icon: 'logos:ansible', name: 'Ansible' },
      { icon: 'logos:prometheus', name: 'Prometheus' },
      { icon: 'logos:grafana', name: 'Grafana' },
      { icon: 'logos:datadog-icon', name: 'Datadog' },
      { icon: 'logos:argo-icon', name: 'ArgoCD' },
      { icon: 'logos:chef', name: 'Chef' },
    ],
  },
  {
    title: 'Blockchain & Crypto',
    speed: 0.5,
    items: [
      { icon: 'logos:ethereum', name: 'Ethereum' },
      { icon: 'simple-icons:polygon', name: 'Polygon', color: '#7B3FE4' },
      { icon: 'simple-icons:solana', name: 'Solana', color: '#9945FF' },
      { icon: 'simple-icons:binance', name: 'BSC', color: '#F3BA2F' },
      { icon: 'simple-icons:hyperledger', name: 'Hyperledger', color: '#2F3134' },
      { icon: 'logos:solidity', name: 'Solidity' },
      { icon: 'logos:rust', name: 'Rust' },
      { icon: 'logos:metamask-icon', name: 'MetaMask' },
      { icon: 'simple-icons:alchemy', name: 'Alchemy', color: '#000000' },
      { icon: 'lucide:lock', name: 'ZKP / FHE', color: '#334155' },
    ],
  },
  {
    title: 'Frontend Development',
    speed: 0.5,
    items: [
      { icon: 'logos:html-5', name: 'HTML5' },
      { icon: 'logos:css-3', name: 'CSS3' },
      { icon: 'logos:tailwindcss-icon', name: 'Tailwind' },
      { icon: 'logos:javascript', name: 'JavaScript' },
      { icon: 'logos:typescript-icon', name: 'TypeScript' },
      { icon: 'logos:react', name: 'React' },
      { icon: 'logos:nextjs-icon', name: 'Next.js' },
      { icon: 'logos:angular-icon', name: 'Angular' },
      { icon: 'logos:vue', name: 'Vue.js' },
      { icon: 'logos:svelte-icon', name: 'Svelte' },
      { icon: 'logos:material-ui', name: 'Material UI' },
      { icon: 'simple-icons:shadcnui', name: 'Shadcn', color: '#000000' },
      { icon: 'logos:redux', name: 'Redux' },
      { icon: 'logos:vitejs', name: 'Vite' },
      { icon: 'logos:jest', name: 'Jest' },
      { icon: 'logos:cypress-icon', name: 'Cypress' },
    ],
  },
  {
    title: 'Backend',
    speed: 0.5,
    items: [
      { icon: 'logos:nodejs-icon', name: 'Node.js' },
      { icon: 'logos:python', name: 'Python' },
      { icon: 'logos:go', name: 'GoLang' },
      { icon: 'logos:java', name: 'Java' },
      { icon: 'logos:ruby', name: 'Ruby' },
      { icon: 'logos:php', name: 'PHP' },
      { icon: 'logos:nestjs', name: 'NestJS' },
      { icon: 'logos:spring-icon', name: 'Spring' },
      { icon: 'logos:laravel', name: 'Laravel' },
      { icon: 'logos:postgresql', name: 'Postgres' },
      { icon: 'logos:mongodb-icon', name: 'MongoDB' },
      { icon: 'logos:redis', name: 'Redis' },
      { icon: 'logos:neo4j', name: 'Neo4j' },
      { icon: 'logos:graphql', name: 'GraphQL' },
    ],
  },
  {
    title: 'Mobile App Development',
    speed: 0.6,
    items: [
      { icon: 'logos:react', name: 'React Native' },
      { icon: 'logos:flutter', name: 'Flutter' },
      { icon: 'logos:ionic-icon', name: 'Ionic' },
      { icon: 'logos:expo-icon', name: 'Expo' },
      { icon: 'logos:xamarin', name: 'Xamarin' },
      { icon: 'logos:swift', name: 'Swift' },
      { icon: 'logos:kotlin-icon', name: 'Kotlin' },
      { icon: 'logos:firebase', name: 'Firebase' },
      { icon: 'logos:supabase-icon', name: 'Supabase' },
      { icon: 'logos:appium', name: 'Appium' },
    ],
  },
  {
    title: 'Artificial Intelligence / ML',
    speed: 0.6,
    items: [
      { icon: 'logos:python', name: 'Python' },
      { icon: 'logos:r-lang', name: 'R' },
      { icon: 'logos:julia', name: 'Julia' },
      { icon: 'logos:tensorflow', name: 'TensorFlow' },
      { icon: 'logos:pytorch-icon', name: 'PyTorch' },
      { icon: 'simple-icons:scikitlearn', name: 'Scikit-learn', color: '#F7931E' },
      { icon: 'logos:hugging-face-icon', name: 'HuggingFace' },
      { icon: 'logos:openai-icon', name: 'OpenAI' },
      { icon: 'simple-icons:langchain', name: 'LangChain', color: '#1C3C3C' },
      { icon: 'logos:apache-spark', name: 'Spark' },
      { icon: 'logos:hadoop', name: 'Hadoop' },
      { icon: 'logos:kafka-icon', name: 'Kafka' },
      { icon: 'simple-icons:databricks', name: 'Databricks', color: '#FF3621' },
      { icon: 'simple-icons:amazonsagemaker', name: 'SageMaker', color: '#FF9900' },
    ],
  },
  {
    title: 'Cybersecurity',
    speed: 0.5,
    items: [
      { icon: 'simple-icons:burpsuite', name: 'Burp Suite', color: '#FF6633' },
      { icon: 'simple-icons:kalilinux', name: 'Kali Linux', color: '#557C94' },
      { icon: 'simple-icons:wireshark', name: 'Wireshark', color: '#1679A7' },
      { icon: 'simple-icons:owasp', name: 'OWASP', color: '#000000' },
      { icon: 'simple-icons:snyk', name: 'Snyk', color: '#4C4A73' },
      { icon: 'simple-icons:sonarqube', name: 'SonarQube', color: '#4E9BCD' },
      { icon: 'logos:okta-icon', name: 'Okta' },
      { icon: 'logos:auth0-icon', name: 'Auth0' },
    ],
  },
];

const TechnologyMarquee = ({ title, speed, items }: { title: string; speed: number; items: Array<{ icon: string; name: string; color?: string }> }) => {
  useEffect(() => {
    // Load iconify script if not already loaded
    if (!document.querySelector('script[src*="iconify"]')) {
      const script = document.createElement('script');
      script.src = 'https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js';
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div>
      <h3 className="text-xl sm:text-2xl font-heading font-bold text-slate-900 mb-6 text-center">
        {title}
      </h3>
      <div className="marquee-wrapper" data-speed={speed}>
        <div className="marquee-track">
          {/* SET 1 */}
          <div className="flex gap-6">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="marquee-item p-4 bg-slate-50 rounded-xl border border-slate-100"
              >
                <iconify-icon
                  icon={item.icon}
                  style={{ fontSize: '32px', color: item.color || undefined }}
                ></iconify-icon>
                <span className="mt-2 font-bold text-slate-700 text-sm block">{item.name}</span>
              </div>
            ))}
          </div>
          {/* SET 2 (DUPLICATE) */}
          <div className="flex gap-6">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="marquee-item p-4 bg-slate-50 rounded-xl border border-slate-100"
              >
                <iconify-icon
                  icon={item.icon}
                  style={{ fontSize: '32px', color: item.color || undefined }}
                ></iconify-icon>
                <span className="mt-2 font-bold text-slate-700 text-sm block">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Technology = () => {
  useEffect(() => {
    // Initialize marquee drag functionality
    const marquees = document.querySelectorAll('.marquee-wrapper');

    marquees.forEach((wrapper) => {
      const track = wrapper.querySelector('.marquee-track') as HTMLElement;
      if (!track) return;

      const speed = parseFloat((wrapper as HTMLElement).dataset.speed || '0.5');
      let position = 0;
      let isDragging = false;
      let startX = 0;
      let prevX = 0;
      let animationId: number;

      const updateDimensions = () => {
        return track.scrollWidth / 2;
      };

      let halfWidth = updateDimensions();
      window.addEventListener('resize', () => {
        halfWidth = updateDimensions();
      });

      const animate = () => {
        if (!isDragging) {
          position -= speed;
        }

        if (position <= -halfWidth) {
          position = 0;
        }
        if (position > 0) {
          position = -halfWidth;
        }

        track.style.transform = `translate3d(${position}px, 0, 0)`;
        animationId = requestAnimationFrame(animate);
      };

      animationId = requestAnimationFrame(animate);

      const handleMouseDown = (e: MouseEvent) => {
        isDragging = true;
        startX = e.pageX;
        prevX = position;
        (wrapper as HTMLElement).style.cursor = 'grabbing';
      };

      const handleMouseMove = (e: MouseEvent) => {
        if (!isDragging) return;
        const delta = e.pageX - startX;
        position = prevX + delta;
      };

      const handleMouseUp = () => {
        isDragging = false;
        (wrapper as HTMLElement).style.cursor = 'grab';
      };

      const handleTouchStart = (e: TouchEvent) => {
        isDragging = true;
        startX = e.touches[0].pageX;
        prevX = position;
      };

      const handleTouchMove = (e: TouchEvent) => {
        if (!isDragging) return;
        const delta = e.touches[0].pageX - startX;
        position = prevX + delta;
      };

      const handleTouchEnd = () => {
        isDragging = false;
      };

      wrapper.addEventListener('mousedown', handleMouseDown as EventListener);
      window.addEventListener('mousemove', handleMouseMove as EventListener);
      window.addEventListener('mouseup', handleMouseUp);
      wrapper.addEventListener('touchstart', handleTouchStart as EventListener, { passive: false });
      window.addEventListener('touchmove', handleTouchMove as EventListener, { passive: false });
      window.addEventListener('touchend', handleTouchEnd);

      return () => {
        cancelAnimationFrame(animationId);
        wrapper.removeEventListener('mousedown', handleMouseDown as EventListener);
        window.removeEventListener('mousemove', handleMouseMove as EventListener);
        window.removeEventListener('mouseup', handleMouseUp);
        wrapper.removeEventListener('touchstart', handleTouchStart as EventListener);
        window.removeEventListener('touchmove', handleTouchMove as EventListener);
        window.removeEventListener('touchend', handleTouchEnd);
      };
    });
  }, []);

  return (
    <section id="tech" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 border-b border-slate-100 pb-8">
          <div className="max-w-2xl text-center md:text-left w-full md:w-auto">
            <h2 className="text-sm sm:text-base font-bold text-brand-600 uppercase tracking-wide mb-2">
              Technology Stack
            </h2>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-slate-900">
              Built with modern standards
            </h3>
          </div>
        </div>

        <div className="space-y-16">
          {techStacks.map((stack, idx) => (
            <TechnologyMarquee key={idx} title={stack.title} speed={stack.speed} items={stack.items} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;

