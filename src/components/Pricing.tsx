import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$49",
    period: "/mo",
    description: "For small businesses beginning their sustainability journey.",
    features: [
      "Up to 5 users",
      "Basic carbon tracking",
      "Monthly reports",
      "Email support",
      "1 facility",
    ],
    cta: "Start Free Trial",
    featured: false,
  },
  {
    name: "Professional",
    price: "$149",
    period: "/mo",
    description:
      "For growing companies serious about reducing their footprint.",
    features: [
      "Up to 25 users",
      "Advanced analytics",
      "Automated ESG reports",
      "Supply chain mapping",
      "Carbon credit marketplace",
      "Priority support",
    ],
    cta: "Start Free Trial",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For organizations that need maximum control and scale.",
    features: [
      "Unlimited users",
      "Custom integrations",
      "Dedicated account manager",
      "SLA guarantee",
      "On-premise deployment",
      "Audit & compliance tools",
    ],
    cta: "Contact Sales",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-gray-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-orange-500">
            Pricing
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            Choose the plan that fits your organization. All plans include a
            14-day free trial.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`flex flex-col rounded-xl p-8 ring-1 ${
                plan.featured
                  ? "bg-teal-900 text-white ring-teal-700 shadow-xl"
                  : "bg-white text-gray-900 ring-gray-200"
              }`}
            >
              <h3
                className={`text-lg font-bold ${plan.featured ? "text-white" : "text-gray-900"}`}
              >
                {plan.name}
              </h3>
              <p
                className={`mt-1 text-sm ${plan.featured ? "text-teal-200" : "text-gray-500"}`}
              >
                {plan.description}
              </p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.period && (
                  <span
                    className={`text-sm ${plan.featured ? "text-teal-300" : "text-gray-500"}`}
                  >
                    {plan.period}
                  </span>
                )}
              </div>

              <ul className="mt-8 flex flex-1 flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className={`mt-0.5 h-4 w-4 flex-shrink-0 ${plan.featured ? "text-teal-300" : "text-teal-600"}`}
                    />
                    <span
                      className={`text-sm ${plan.featured ? "text-teal-100" : "text-gray-600"}`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 block rounded-lg py-3 text-center text-sm font-semibold transition-colors ${
                  plan.featured
                    ? "bg-orange-500 text-white hover:bg-orange-600"
                    : "bg-teal-600 text-white hover:bg-teal-700"
                }`}
              >
                {plan.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
