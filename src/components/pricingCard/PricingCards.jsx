import { Check } from "lucide-react";

const PricingCards = () => {
  return (
    <section className="bg-white px-4 py-20 sm:py-24">
      <div className=" mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <p className="text-[30px] font-extrabold tracking-tight text-[#101727] sm:text-[40px] md:text-[44px]">
            Simple, Transparent Pricing
          </p>
          <p className="mt-3 text-[12px] text-[#627382] sm:text-[13px]">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-[#E8EBF3] bg-white p-6 text-left shadow-[0_1px_16px_rgba(15,23,42,0.05)] transition-transform duration-200 hover:-translate-y-0.5">
            <h3 className="text-[18px] font-bold text-[#101727]">Starter</h3>
            <p className="mt-1 text-[12px] text-[#627382]">
              Perfect for getting started
            </p>

            <div className="mt-7 flex items-end gap-1">
              <span className="text-[33px] font-extrabold leading-none text-[#101727]">
                $0
              </span>
              <span className="pb-1 text-[12px] text-[#627382]">/Month</span>
            </div>
            <ul className="mt-6 space-y-2.5">
              <li className="flex items-start gap-2 text-[12px] font-medium leading-5 text-[#627382]">
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#22C55E]"
                  strokeWidth={3}
                />
                <span>Access to 10 free tools</span>
              </li>
              <li className="flex items-start gap-2 text-[12px] font-medium leading-5 text-[#627382]">
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#22C55E]"
                  strokeWidth={3}
                />
                <span>Basic templates</span>
              </li>
              <li className="flex items-start gap-2 text-[12px] font-medium leading-5 text-[#627382]">
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#22C55E]"
                  strokeWidth={3}
                />
                <span>Community support</span>
              </li>
              <li className="flex items-start gap-2 text-[12px] font-medium leading-5 text-[#627382]">
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#22C55E]"
                  strokeWidth={3}
                />
                <span>1 project per month</span>
              </li>
            </ul>

            <button className="mt-8 w-full rounded-full bg-linear-to-b from-[rgb(79,57,246)] to-[rgb(149,20,250)] px-5 py-3 text-[13px] font-semibold text-white transition-colors duration-200 hover:brightness-105">
              Get Started Free
            </button>
          </div>

          <div className="relative rounded-2xl bg-linear-to-b from-[rgb(79,57,246)] to-[rgb(149,20,250)] p-6 text-left text-white shadow-[0_18px_40px_rgba(111,76,255,0.22)] transition-transform duration-200 hover:-translate-y-0.5">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FDE68A] px-3 py-1 text-[11px] font-semibold text-[#C77700] shadow-sm">
              Most Popular
            </div>

            <h3 className="text-[18px] font-bold">Pro</h3>
            <p className="mt-1 text-[12px] text-white/85">
              Best for professionals
            </p>

            <div className="mt-7 flex items-end gap-1">
              <span className="text-[33px] font-extrabold leading-none">
                $29
              </span>
              <span className="pb-1 text-[12px] text-white/85">/Month</span>
            </div>

            <ul className="mt-6 space-y-2.5">
              <li className="flex items-start gap-2 text-[12px] font-medium leading-5 text-white/95">
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0 text-white"
                  strokeWidth={3}
                />
                <span>Access to all premium tools</span>
              </li>
              <li className="flex items-start gap-2 text-[12px] font-medium leading-5 text-white/95">
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0 text-white"
                  strokeWidth={3}
                />
                <span>Unlimited templates</span>
              </li>
              <li className="flex items-start gap-2 text-[12px] font-medium leading-5 text-white/95">
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0 text-white"
                  strokeWidth={3}
                />
                <span>Priority support</span>
              </li>
              <li className="flex items-start gap-2 text-[12px] font-medium leading-5 text-white/95">
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0 text-white"
                  strokeWidth={3}
                />
                <span>Unlimited projects</span>
              </li>
              <li className="flex items-start gap-2 text-[12px] font-medium leading-5 text-white/95">
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0 text-white"
                  strokeWidth={3}
                />
                <span>Cloud sync</span>
              </li>
              <li className="flex items-start gap-2 text-[12px] font-medium leading-5 text-white/95">
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0 text-white"
                  strokeWidth={3}
                />
                <span>Advanced analytics</span>
              </li>
            </ul>

            <button className="mt-8 w-full rounded-full bg-white px-5 py-3 text-[13px] font-semibold text-[rgb(111,76,255)] transition-colors duration-200 hover:bg-white/95">
              Start Pro Trial
            </button>
          </div>

          <div className="rounded-2xl border border-[#E8EBF3] bg-white p-6 text-left shadow-[0_1px_16px_rgba(15,23,42,0.05)] transition-transform duration-200 hover:-translate-y-0.5">
            <h3 className="text-[18px] font-bold text-[#101727]">Enterprise</h3>
            <p className="mt-1 text-[12px] text-[#627382]">
              For teams and businesses
            </p>

            <div className="mt-7 flex items-end gap-1">
              <span className="text-[33px] font-extrabold leading-none text-[#101727]">
                $99
              </span>
              <span className="pb-1 text-[12px] text-[#627382]">/Month</span>
            </div>

            <ul className="mt-6 space-y-2.5">
              <li className="flex items-start gap-2 text-[12px] font-medium leading-5 text-[#627382]">
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#22C55E]"
                  strokeWidth={3}
                />
                <span>Everything in Pro</span>
              </li>
              <li className="flex items-start gap-2 text-[12px] font-medium leading-5 text-[#627382]">
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#22C55E]"
                  strokeWidth={3}
                />
                <span>Team collaboration</span>
              </li>
              <li className="flex items-start gap-2 text-[12px] font-medium leading-5 text-[#627382]">
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#22C55E]"
                  strokeWidth={3}
                />
                <span>Custom integrations</span>
              </li>
              <li className="flex items-start gap-2 text-[12px] font-medium leading-5 text-[#627382]">
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#22C55E]"
                  strokeWidth={3}
                />
                <span>Dedicated support</span>
              </li>
              <li className="flex items-start gap-2 text-[12px] font-medium leading-5 text-[#627382]">
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#22C55E]"
                  strokeWidth={3}
                />
                <span>SLA guarantee</span>
              </li>
              <li className="flex items-start gap-2 text-[12px] font-medium leading-5 text-[#627382]">
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#22C55E]"
                  strokeWidth={3}
                />
                <span>Custom branding</span>
              </li>
            </ul>

            <button className="mt-8 w-full rounded-full bg-linear-to-b from-[rgb(79,57,246)] to-[rgb(149,20,250)] px-5 py-3 text-[13px] font-semibold text-white transition-colors duration-200 hover:brightness-105">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCards;
