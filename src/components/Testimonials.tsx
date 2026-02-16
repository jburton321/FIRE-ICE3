import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "GreenPath made it effortless to get our first ESG report out the door. What used to take weeks of spreadsheet wrangling now happens automatically.",
    name: "Sarah Chen",
    role: "VP of Sustainability",
    company: "NovaTech Industries",
    avatar:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
  },
  {
    quote:
      "The supply chain mapping feature alone justified the investment. We identified emission hotspots we had no visibility into before.",
    name: "Marcus Johnson",
    role: "Chief Operations Officer",
    company: "Meridian Logistics",
    avatar:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
  },
  {
    quote:
      "Our team adopted GreenPath in days, not months. The intuitive dashboards give everyone, from interns to executives, clear visibility into our progress.",
    name: "Amara Osei",
    role: "Head of Corporate Responsibility",
    company: "BlueWave Partners",
    avatar:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-orange-500">
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by sustainability leaders
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            See how forward-thinking companies are using GreenPath to hit their
            climate goals.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="flex flex-col justify-between rounded-xl bg-gray-50 p-8 ring-1 ring-gray-200"
            >
              <div>
                <Quote className="mb-4 h-8 w-8 text-teal-200" />
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-orange-400 text-orange-400"
                    />
                  ))}
                </div>
                <blockquote className="text-sm leading-relaxed text-gray-700">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>

              <div className="mt-6 flex items-center gap-3 border-t border-gray-200 pt-6">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {t.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
