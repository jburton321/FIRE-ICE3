import {
  BarChart3,
  ShieldCheck,
  Zap,
  Globe,
  TrendingUp,
  Users,
} from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description:
      "Track your carbon footprint in real time with interactive dashboards and detailed breakdowns by department, product, or facility.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Carbon Credits",
    description:
      "Offset unavoidable emissions through a marketplace of certified, third-party-verified carbon credit projects worldwide.",
  },
  {
    icon: Zap,
    title: "Automated Reporting",
    description:
      "Generate compliance-ready ESG reports automatically, aligned with GRI, CDP, and TCFD frameworks to satisfy stakeholders.",
  },
  {
    icon: Globe,
    title: "Supply Chain Mapping",
    description:
      "Visualize and measure Scope 3 emissions across your entire supply chain with intelligent data collection from partners.",
  },
  {
    icon: TrendingUp,
    title: "Reduction Roadmaps",
    description:
      "Receive science-based, actionable reduction targets and step-by-step plans tailored to your industry and business model.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Empower every department to contribute with role-based access, task assignments, and shared sustainability dashboards.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-gray-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-orange-500">
            Features
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to go green
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            A comprehensive toolkit for measuring, managing, and minimizing your
            environmental impact, all in one platform.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="group rounded-xl bg-white p-8 shadow-sm ring-1 ring-gray-200 transition-shadow hover:shadow-md"
            >
              <div className="mb-5 inline-flex rounded-lg bg-teal-50 p-3">
                <feature.icon className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
