const Services = () => {
  const services = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          ></path>
        </svg>
      ),
      bgColor: 'bg-blue-50',
      iconColor: 'text-brand-600',
      title: 'Web & Mobile Development',
      description:
        'Custom full-stack applications built with React, Next.js, and Node. High performance, SEO-optimized, and scalable.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          ></path>
        </svg>
      ),
      bgColor: 'bg-teal-50',
      iconColor: 'text-teal-600',
      title: 'Cloud & DevOps',
      description:
        'AWS/GCP infrastructure, Kubernetes orchestration, and CI/CD pipelines designed for zero downtime and security.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          ></path>
        </svg>
      ),
      bgColor: 'bg-indigo-50',
      iconColor: 'text-indigo-600',
      title: 'Blockchain Solutions',
      description:
        'Smart contract auditing, dApp development, and private blockchain integration for enterprise use cases.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          ></path>
        </svg>
      ),
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
      title: 'AI & Machine Learning',
      description:
        'Integrating LLMs, predictive analytics, and process automation to drive business intelligence.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          ></path>
        </svg>
      ),
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600',
      title: 'IT Strategy & Consulting',
      description:
        'Digital transformation roadmaps, technology assessment, and legacy modernization strategies.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          ></path>
        </svg>
      ),
      bgColor: 'bg-rose-50',
      iconColor: 'text-rose-600',
      title: 'Cybersecurity',
      description:
        'Security audits, penetration testing, and compliance implementation (SOC2, HIPAA, ISO).',
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-sm sm:text-base font-bold text-brand-600 uppercase tracking-wide mb-2">
            Our Expertise
          </h2>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-slate-900 mb-4">
            Comprehensive IT Solutions
          </h3>
          <p className="text-base sm:text-lg text-slate-600">
            We deliver end-to-end technology services, from architectural design to production
            deployment and maintenance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-card hover:shadow-card-hover hover-lift border border-slate-100"
            >
              <div
                className={`w-12 h-12 ${service.bgColor} rounded-xl flex items-center justify-center ${service.iconColor} mb-6`}
              >
                {service.icon}
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
                {service.title}
              </h4>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

