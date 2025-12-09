const Process = () => {
  const steps = [
    {
      number: '1',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          ></path>
        </svg>
      ),
      title: 'Discovery & Strategy',
      description:
        'We align on your business goals, technical requirements, and success metrics through initial consultation.',
    },
    {
      number: '2',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          ></path>
        </svg>
      ),
      title: 'Scope Definition',
      description:
        'We translate your vision into concrete user stories, technical architecture, and detailed specifications.',
    },
    {
      number: '3',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 7h6m0 3.666V14m-1.88-5.334L10 14m-1-5.334L6 14m-3.12 5.334V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2h-14a2 2 0 01-2-2z"
          ></path>
        </svg>
      ),
      title: 'Proposal & Roadmap',
      description:
        'You receive a transparent estimation with fixed milestones, costs, and a clear timeline for delivery.',
    },
    {
      number: '4',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          ></path>
        </svg>
      ),
      title: 'Agile Development',
      description:
        'We build your MVP in iterative sprints, providing regular updates and maintaining high code quality.',
    },
    {
      number: '5',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          ></path>
        </svg>
      ),
      title: 'Demo & Launch',
      description:
        'Final QA, user acceptance testing (UAT), and seamless deployment to your production environment.',
    },
  ];

  return (
    <section id="process" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm sm:text-base font-bold text-brand-600 uppercase tracking-wide mb-2">
            Our Process
          </h2>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-slate-900 mb-4">
            From Concept to Deployment
          </h3>
          <p className="text-base sm:text-lg text-slate-600">
            We follow a rigorous, transparent workflow to ensure your software is delivered on time,
            within budget, and to the highest quality standards.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[10%] w-[80%] h-0.5 bg-slate-200 -z-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center text-center bg-slate-50 md:bg-transparent z-10 p-4 rounded-xl md:p-0"
              >
                <div className="w-24 h-24 bg-white border-4 border-brand-100 rounded-full flex items-center justify-center text-brand-600 shadow-sm mb-6 relative">
                  {step.icon}
                  <span className="absolute -top-1 -right-1 bg-brand-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-2 border-white">
                    {step.number}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;

