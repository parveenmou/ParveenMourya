import usePageMeta from '../hooks/usePageMeta.js'
import {
  EXPERIENCED_IN,
  FEATURED,
  BY_NUMBERS,
  TIMELINE,
} from '../data/projects.js'

// Explicit class maps so Tailwind's JIT keeps every colour variant.
const TL = {
  yellow: { dot: 'bg-yellow-300', ring: 'bg-yellow-300/15 border-yellow-200/40 text-yellow-100', chip: 'bg-yellow-300/15 text-yellow-50 border-yellow-300/30', hover: 'hover:border-yellow-300/40' },
  cyan: { dot: 'bg-cyan-300', ring: 'bg-cyan-300/15 border-cyan-200/40 text-cyan-100', chip: 'bg-cyan-300/15 text-cyan-50 border-cyan-300/30', hover: 'hover:border-cyan-300/40' },
  blue: { dot: 'bg-blue-300', ring: 'bg-blue-300/15 border-blue-200/40 text-blue-100', chip: 'bg-blue-300/15 text-blue-50 border-blue-300/30', hover: 'hover:border-blue-300/40' },
  indigo: { dot: 'bg-indigo-300', ring: 'bg-indigo-300/15 border-indigo-200/40 text-indigo-100', chip: 'bg-indigo-300/15 text-indigo-50 border-indigo-300/30', hover: 'hover:border-indigo-300/40' },
  amber: { dot: 'bg-amber-300', ring: 'bg-amber-300/15 border-amber-200/40 text-amber-100', chip: 'bg-amber-300/15 text-amber-50 border-amber-300/30', hover: 'hover:border-amber-300/40' },
  pink: { dot: 'bg-pink-300', ring: 'bg-pink-300/15 border-pink-200/40 text-pink-100', chip: 'bg-pink-300/15 text-pink-50 border-pink-300/30', hover: 'hover:border-pink-300/40' },
  emerald: { dot: 'bg-emerald-300', ring: 'bg-emerald-300/15 border-emerald-200/40 text-emerald-100', chip: 'bg-emerald-300/15 text-emerald-50 border-emerald-300/30', hover: 'hover:border-emerald-300/40' },
  lime: { dot: 'bg-lime-300', ring: 'bg-lime-300/15 border-lime-200/40 text-lime-100', chip: 'bg-lime-300/15 text-lime-50 border-lime-300/30', hover: 'hover:border-lime-300/40' },
  teal: { dot: 'bg-teal-300', ring: 'bg-teal-300/15 border-teal-200/40 text-teal-100', chip: 'bg-teal-300/15 text-teal-50 border-teal-300/30', hover: 'hover:border-teal-300/40' },
}

function TimelineCard({ item }) {
  const c = TL[item.color]
  return (
    <div className={`group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-[0_25px_80px_rgba(0,0,0,0.45)] transition duration-300 hover:-translate-y-2 ${c.hover}`}>
      <div className="flex items-center gap-3 mb-2">
        <div className={`flex h-9 w-9 items-center justify-center rounded-full border ${c.ring}`}>
          {item.badge}
        </div>
        <span className="text-sm font-semibold tracking-wide text-gray-200">{item.period}</span>
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
      <p className="text-gray-300 leading-relaxed">{item.desc}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        <span className={`px-3 py-1 text-xs rounded-full border ${c.chip}`}>{item.tags[0]}</span>
        <span className="px-3 py-1 text-xs rounded-full bg-white/10 text-gray-200 border border-white/10">{item.tags[1]}</span>
      </div>
    </div>
  )
}

export default function Projects() {
  usePageMeta(
    'Projects & Experience | Mr. Parveen Kumar',
    "Explore Parveen Kumar's portfolio of websites, Meta Ads, and AI automation projects for brands like Burger Bae, Urban Needs, Decor Bae, and Confidence Clothing.",
  )

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="pt-40 pb-24 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            My Projects <span className="text-yellow-400">&amp;</span> Experience
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A showcase of my work, achievements, and the projects that shaped my
            career in web development, digital marketing, and AI solutions.
          </p>
        </div>
      </section>

      {/* ===== EXPERIENCE + FEATURED + NUMBERS ===== */}
      <section className="py-24 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Experienced In */}
          <div className="mb-24">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Experienced In</h2>
              <p className="text-gray-400 text-lg">Core strengths applied to high-performance digital solutions</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {EXPERIENCED_IN.map((e) => (
                <div key={e.title} className="bg-black border border-gray-700 p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold text-white mb-4">{e.title}</h3>
                  <p className="text-gray-400 mb-4">{e.desc}</p>
                  <p className="text-sm text-gray-500">{e.meta}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div className="mb-24">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
              <p className="text-gray-400 text-lg">Real brands. Real growth. Real results.</p>
            </div>
            <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
              {FEATURED.map((p) => (
                <div
                  key={p.title}
                  className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-black via-gray-900 to-[#0b1424] p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-yellow-400/70 hover:shadow-yellow-400/15 flex flex-col"
                >
                  <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${p.accent} opacity-0 group-hover:opacity-100 transition`}></div>
                  <h3 className="text-2xl font-bold text-white mb-3">{p.title}</h3>
                  <p className="text-gray-400 mb-5">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {p.tags.map((t) => (
                      <span key={t} className="px-3 py-1 text-xs rounded-full bg-gray-800/60 border border-gray-700 text-gray-200 transition group-hover:border-yellow-400/50">{t}</span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 mb-4">{p.outcome}</p>
                  <div className="mt-auto">
                    {p.link ? (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-semibold text-black bg-yellow-400 hover:bg-yellow-300 rounded-xl transition border border-yellow-500/60"
                      >
                        {p.cta}
                      </a>
                    ) : (
                      <span className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-semibold text-gray-400 bg-gray-800/60 rounded-xl border border-gray-700 cursor-default">
                        {p.cta}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* By The Numbers */}
          <div className="border-t border-gray-700 pt-24">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">By The Numbers</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {BY_NUMBERS.map((n) => (
                <div key={n.label} className="bg-black border border-gray-700 p-8 rounded-2xl">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">{n.value}</div>
                  <p className="text-gray-400">{n.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== TIMELINE ===== */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#05070d] via-[#070a12] to-[#0a0f1a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-[0.25em] text-yellow-300/80 uppercase">Trajectory</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Professional Journey</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              From hands-on sales operations to building scalable digital growth systems
            </p>
          </div>

          <div className="relative">
            {/* Vertical rail — left edge on mobile, centered on desktop */}
            <div className="absolute top-0 h-full w-[3px] bg-gradient-to-b from-yellow-300 via-cyan-300 to-emerald-300 left-[7px] md:left-1/2 md:-translate-x-1/2"></div>
            <div className="space-y-10">
              {TIMELINE.map((item, i) => {
                const left = i % 2 === 1
                return (
                  <div key={item.title} className="relative pl-10 md:pl-0 md:flex md:items-stretch md:gap-8">
                    {/* Node dot — sits on the rail (left on mobile, centered on desktop) */}
                    <div className="absolute top-2 left-0 md:top-0 md:left-1/2 md:-translate-x-1/2 md:flex md:h-full">
                      <div className={`w-4 h-4 self-start rounded-full border border-white/40 ${TL[item.color].dot}`}></div>
                    </div>
                    {left ? (
                      <>
                        <div className="md:w-1/2 md:pr-12">
                          <TimelineCard item={item} />
                        </div>
                        <div className="hidden md:block md:w-1/2"></div>
                      </>
                    ) : (
                      <>
                        <div className="hidden md:block md:w-1/2"></div>
                        <div className="md:w-1/2 md:pl-12">
                          <TimelineCard item={item} />
                        </div>
                      </>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
