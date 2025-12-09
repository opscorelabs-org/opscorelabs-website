const Stats = () => {
  return (
    <section className="py-12 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl sm:text-4xl font-bold font-heading text-brand-400 mb-1">
              100%
            </div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium uppercase tracking-wider">
              Delivery Success
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-bold font-heading text-brand-400 mb-1">
              99.9%
            </div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium uppercase tracking-wider">
              Uptime SLA
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-bold font-heading text-brand-400 mb-1">
              100%
            </div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium uppercase tracking-wider">
              Security Compliance
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-bold font-heading text-brand-400 mb-1">
              100%
            </div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium uppercase tracking-wider">
              Expert Engineers
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;

