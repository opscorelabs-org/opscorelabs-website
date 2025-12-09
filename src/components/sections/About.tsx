const About = () => {
  const features = [
    {
      title: 'Transparent Delivery',
      description: 'Weekly sprints, open repositories, and direct access to your engineering team.',
    },
    {
      title: 'Enterprise Security',
      description: 'SOC2 compliant workflows and rigorous code auditing standards.',
    },
    {
      title: 'Scalable Architecture',
      description: 'Systems built to handle millions of requests from day one.',
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-sm sm:text-base font-bold text-brand-600 uppercase tracking-wide mb-2">
              Why OpsCore Labs?
            </h2>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-slate-900 mb-6">
              A partner, not just a vendor.
            </h3>
            <p className="text-base sm:text-lg text-slate-600 mb-6">
              We bridge the gap between complex technology and business value. While other agencies
              just write code, we engineer solutions that align with your long-term strategic goals.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-brand-100 text-brand-600 mt-1">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-base sm:text-lg font-semibold text-slate-900">
                      {feature.title}
                    </h4>
                    <p className="text-sm sm:text-base text-slate-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 lg:mt-0 relative">
            {/* Abstract tech visual for trust */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-slate-100">
              <div className="flex items-center justify-between mb-8">
                <div className="text-slate-900 font-bold text-lg sm:text-xl">System Uptime</div>
                <div className="text-green-500 font-medium bg-green-50 px-3 py-1 rounded-full text-sm">
                  99.99%
                </div>
              </div>
              {/* Fake Chart: Colors fixed via config */}
              <div className="flex items-end space-x-2 h-40 sm:h-48">
                <div className="w-full bg-brand-100 rounded-t h-[99%]"></div>
                <div className="w-full bg-brand-200 rounded-t h-[99%]"></div>
                <div className="w-full bg-brand-300 rounded-t h-[99%]"></div>
                <div className="w-full bg-brand-400 rounded-t h-[99%]"></div>
                <div className="w-full bg-brand-500 rounded-t h-[99%]"></div>
                <div className="w-full bg-brand-600 rounded-t h-[99%]"></div>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-100 flex justify-between text-xs sm:text-sm text-slate-500">
                <span>Jul</span>
                <span>Aug</span>
                <span>Sep</span>
                <span>Oct</span>
                <span>Nov</span>
                <span>Dec</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

