const WorkFlow = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-r from-[#6729f7] via-[#7a1ff4] to-[#8e14f8] px-4 py-20 sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -right-20 -bottom-16 h-52 w-52 rounded-full bg-[#d6b7ff]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center text-white">
        <h2 className="text-[30px] font-extrabold leading-tight tracking-tight sm:text-[36px] md:text-[41px]">
          Ready To Transform Your Workflow?
        </h2>

        <p className="mt-3 max-w-2xl text-[11px] font-medium leading-5 text-white/82 sm:text-[12px]">
          Join thousands of professionals who are already using Digitools to
          work smarter.
          <br className="hidden sm:block" />
          Start your free trial today.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <button
            type="button"
            className="rounded-full bg-white px-5 py-3 text-[12px] font-semibold text-[#6d27f3] shadow-[0_10px_24px_rgba(255,255,255,0.14)] hover:cursor-pointer"
          >
            Explore Products
          </button>

          <button
            type="button"
            className="rounded-full border border-white/70 px-5 py-3 text-[12px] font-semibold text-white hover:cursor-pointer"
          >
            View Pricing
          </button>
        </div>

        <p className="mt-6 text-[11px] font-medium text-white/75 sm:text-[12px]">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default WorkFlow;
