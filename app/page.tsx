export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          For Commercial Pilots & Flight Schools
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Turn Your Flight Data<br />
          <span className="text-[#58a6ff]">Into Recurring Revenue</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Upload GPS tracks and telemetry. We automatically package your flight data into sellable insights for aviation companies, weather services, and researchers — and handle all the buyers.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-lg"
        >
          Start Monetizing — $49/mo
        </a>
        <p className="text-sm text-[#8b949e] mt-3">Cancel anytime. First payout within 30 days.</p>

        <div className="grid grid-cols-3 gap-6 mt-14 text-center">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl font-bold text-[#58a6ff]">$340</div>
            <div className="text-sm text-[#8b949e] mt-1">Avg. monthly pilot payout</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl font-bold text-[#58a6ff]">120+</div>
            <div className="text-sm text-[#8b949e] mt-1">Active data buyers</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl font-bold text-[#58a6ff]">5 min</div>
            <div className="text-sm text-[#8b949e] mt-1">To upload & list data</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 max-w-md mx-auto">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xl font-bold text-white">Pilot Pro</span>
            <span className="bg-[#58a6ff] text-[#0d1117] text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</span>
          </div>
          <div className="mb-6">
            <span className="text-4xl font-bold text-white">$49</span>
            <span className="text-[#8b949e]">/month</span>
          </div>
          <ul className="space-y-3 mb-8">
            {[
              "Unlimited flight data uploads",
              "Automated data packaging & insights",
              "Access to 120+ verified buyers",
              "70% revenue share to you",
              "Real-time earnings dashboard",
              "Priority data listing placement"
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block text-center bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "What flight data formats are supported?",
              a: "We support GPX, KML, CSV telemetry exports, and direct integrations with ForeFlight, Garmin Pilot, and most EFB apps. Upload raw files and we handle the rest."
            },
            {
              q: "Who buys the data and how do payouts work?",
              a: "Buyers include weather analytics firms, aviation safety researchers, flight training companies, and drone corridor planners. You earn 70% of every sale, paid monthly via Stripe."
            },
            {
              q: "Is my personal and route information kept private?",
              a: "Yes. All personally identifiable information is stripped before listing. Buyers receive anonymized, aggregated data packages — never raw logs tied to you or your aircraft."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-sm border-t border-[#30363d] pt-8">
        © {new Date().getFullYear()} FlightData Pro. All rights reserved.
      </footer>
    </main>
  );
}
