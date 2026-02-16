import { ArrowRight, CheckCircle } from "lucide-react";

const highlights = [
  "Free 14-day trial",
  "No credit card required",
  "Cancel anytime",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(249,115,22,0.12),_transparent_60%)]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-20 text-center md:py-28 lg:flex-row lg:gap-16 lg:px-8 lg:py-32 lg:text-left">
        <div className="flex-1">
          <span className="inline-block rounded-full bg-teal-700/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-teal-200">
            Sustainable Growth Platform
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Build a greener future{" "}
            <span className="text-orange-400">with confidence</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-teal-100/80 lg:max-w-none">
            GreenPath helps businesses track, reduce, and offset their
            environmental footprint with real-time analytics, actionable
            insights, and verified carbon credits.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:items-start">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-orange-600"
            >
              Start Free Trial
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              Learn More
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 lg:justify-start">
            {highlights.map((text) => (
              <li
                key={text}
                className="flex items-center gap-2 text-sm text-teal-200/70"
              >
                <CheckCircle className="h-4 w-4 text-teal-400" />
                {text}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full max-w-lg flex-shrink-0 lg:max-w-md xl:max-w-lg">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-sm">
            <img
              src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Team collaborating on sustainability metrics"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
