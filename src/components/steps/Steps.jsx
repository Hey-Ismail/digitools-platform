import { Package, Rocket, UserRound } from "lucide-react";

const Steps = () => {
  return (
    <section className="bg-[#F7F8FC] px-4 py-24 sm:py-28 mt-30">
      <div className="mx-auto max-w-5xl">
        <div className="mb-14 text-center">
          <h2 className="text-[28px] font-semibold tracking-tight text-[#0F172A] sm:text-[34px]">
            Get Started In 3 Steps
          </h2>
          <p className="mt-2 text-[12px] leading-5 text-[#6B7280] sm:text-[13px]">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3 lg:gap-5">
          <div className="relative min-h-64 rounded-2xl border border-[#E8EBF3] bg-white px-7 pb-8 pt-14 text-center shadow-[0_1px_14px_rgba(15,23,42,0.04)]">
            <div className="absolute right-4 top-4 flex h-7 w-7 items-center justify-center rounded-full bg-linear-to-b from-[rgb(79,57,246)] to-[rgb(149,20,250)] text-[10px] font-semibold text-white">
              01
            </div>

            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#EFE6FF] text-[#7C3AED]">
              <UserRound className="h-7 w-7 stroke-2" />
            </div>

            <h3 className="text-[18px] font-semibold text-[#111827]">
              Create Account
            </h3>
            <p className="mx-auto mt-3 max-w-52.5 text-[12px] leading-5 text-[#6B7280]">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>

          <div className="relative min-h-64 rounded-2xl border border-[#E8EBF3] bg-white px-7 pb-8 pt-14 text-center shadow-[0_1px_14px_rgba(15,23,42,0.04)]">
            <div className="absolute right-4 top-4 flex h-7 w-7 items-center justify-center rounded-full bg-linear-to-b from-[rgb(79,57,246)] to-[rgb(149,20,250)] text-[10px] font-semibold text-white">
              02
            </div>

            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#EFE6FF] text-[#7C3AED]">
              <Package className="h-7 w-7 stroke-2" />
            </div>

            <h3 className="text-[18px] font-semibold text-[#111827]">
              Choose Products
            </h3>
            <p className="mx-auto mt-3 max-w-52.5 text-[12px] leading-5 text-[#6B7280]">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>

          <div className="relative min-h-64 rounded-2xl border border-[#E8EBF3] bg-white px-7 pb-8 pt-14 text-center shadow-[0_1px_14px_rgba(15,23,42,0.04)]">
            <div className="absolute right-4 top-4 flex h-7 w-7 items-center justify-center rounded-full bg-linear-to-b from-[rgb(79,57,246)] to-[rgb(149,20,250)] text-[10px] font-semibold text-white">
              03
            </div>

            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#EFE6FF] text-[#7C3AED]">
              <Rocket className="h-7 w-7 stroke-2" />
            </div>

            <h3 className="text-[18px] font-semibold text-[#111827]">
              Start Creating
            </h3>
            <p className="mx-auto mt-3 max-w-52.5 text-[12px] leading-5 text-[#6B7280]">
              Download and start using your premium tools immediately.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
