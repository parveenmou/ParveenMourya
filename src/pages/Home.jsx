import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  ExternalLink,
  TrendingUp,
  LayoutGrid,
  ShieldCheck,
  ShoppingBag,
} from 'lucide-react'
import asset from '../utils/asset.js'
import useTypewriter from '../hooks/useTypewriter.js'
import useScrollReveal from '../hooks/useScrollReveal.js'
import usePageMeta from '../hooks/usePageMeta.js'
import {
  TYPEWRITER_WORDS,
  STATS_BAR,
  SERVICES,
  FEATURED_PROJECTS,
  TAG_COLORS,
} from '../data/home.js'

export default function Home() {
  usePageMeta(
    'Mr. Parveen Kumar | Web Developer & Meta Ads Manager',
    'Parveen Kumar builds scalable, conversion-focused websites and runs profitable Meta, Google & YouTube ads, plus AI automation that drives real revenue.',
  )
  useScrollReveal()
  const typed = useTypewriter(TYPEWRITER_WORDS)

  return (
    <>
      {/* ===== HERO ===== */}
      <section
        id="home"
        className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden"
      >
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-gray-600/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
          <div className="space-y-6 lg:space-y-8">
            <div className="inline-flex items-center space-x-2 bg-gray-900 border border-gray-700 rounded-full px-4 py-2">
              <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
              <span className="text-xs lg:text-sm font-medium text-gray-300">
                Available for new projects
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight">
              I Build Scalable Websites &amp; <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-400">
                Run Profitable Ads.
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-lg leading-relaxed">
              Stop hiring two different agencies. I bridge the gap between
              high-end design and performance marketing to drive real revenue.
            </p>

            <div className="flex flex-row gap-3 sm:gap-4">
              <Link
                to="/projects"
                className="px-4 sm:px-6 py-2 sm:py-3 bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-lg transition-all flex items-center justify-center gap-2 group text-xs sm:text-sm"
              >
                View My Work
                <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
              <a
                href="#services"
                className="px-4 sm:px-6 py-2 sm:py-3 bg-gray-900 border border-gray-700 hover:border-gray-500 text-white font-medium rounded-lg transition-all flex items-center justify-center text-xs sm:text-sm"
              >
                Explore Services
              </a>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative mt-12 lg:mt-0">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-full blur-3xl opacity-10 transform translate-x-6 translate-y-6"></div>

            <div className="relative z-10 flex justify-center">
              <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
                <img
                  src={asset('/main-image.png')}
                  alt="Parveen Kumar - Web Developer & Meta Ads Manager"
                  className="w-full h-auto object-cover drop-shadow-2xl hover:scale-105 transition-transform duration-500 rounded-lg sm:rounded-2xl"
                />

                {/* Flowing light box */}
                <div className="relative h-24 sm:h-32 md:h-40 overflow-hidden rounded-lg sm:rounded-xl bg-black border-2 border-cyan-600/30">
                  <div className="absolute inset-0 bg-gradient-to-b from-cyan-600/30 via-blue-600/20 to-black"></div>
                  <div className="absolute top-0 left-0 w-32 h-32 sm:w-40 sm:h-40 bg-cyan-400/40 rounded-full blur-3xl" style={{ animation: 'flowStream1 3s ease-in-out infinite' }}></div>
                  <div className="absolute top-4 right-0 w-32 h-24 sm:w-48 sm:h-32 bg-blue-400/30 rounded-full blur-3xl" style={{ animation: 'flowStream2 4s ease-in-out infinite 0.5s' }}></div>
                  <div className="absolute -bottom-4 left-1/3 w-24 h-24 sm:w-36 sm:h-36 bg-cyan-500/25 rounded-full blur-3xl" style={{ animation: 'flowStream3 3.5s ease-in-out infinite 1s' }}></div>

                  <div className="relative z-10 h-full flex flex-col items-center justify-center px-3 sm:px-4 text-center">
                    <p className="text-lg sm:text-2xl md:text-3xl font-bold text-white mb-2">Mr. Parveen Kumar</p>
                    <Link
                      to="/about"
                      className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-1.5 rounded-full transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm"
                    >
                      Know more
                    </Link>
                  </div>
                </div>

                {/* Floating stat cards */}
                <div className="absolute -top-4 sm:-top-6 -left-8 sm:-left-12 bg-gray-900 border border-gray-700 p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-2xl floating-card z-20">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="p-1.5 sm:p-2 bg-yellow-400/20 rounded-lg">
                      <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase font-bold">Ad ROAS</p>
                      <p className="text-lg sm:text-xl font-bold text-white">5.2x</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-4 sm:-top-6 -right-8 sm:-right-12 bg-gray-900 border border-gray-700 p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-2xl floating-card-delay z-20">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="p-1.5 sm:p-2 bg-gray-700/50 rounded-lg">
                      <LayoutGrid className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase font-bold">Conversion</p>
                      <p className="text-lg sm:text-xl font-bold text-white">+125%</p>
                    </div>
                  </div>
                </div>

                <div className="absolute top-[60%] -translate-y-1/2 -left-8 sm:-left-12 bg-gray-900 border border-gray-700 p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-2xl floating-card z-20">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="p-1.5 sm:p-2 bg-blue-600/30 rounded-lg">
                      <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase font-bold">Verified</p>
                      <p className="text-sm sm:text-base font-bold text-white">Meta Certified</p>
                    </div>
                  </div>
                </div>

                <div className="absolute top-[60%] -translate-y-1/2 -right-8 sm:-right-12 bg-gray-900 border border-gray-700 p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-2xl floating-card-delay z-20">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="p-1.5 sm:p-2 bg-green-600/30 rounded-lg">
                      <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase font-bold">Expert</p>
                      <p className="text-sm sm:text-base font-bold text-white">Shopify Expert</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TYPEWRITER ===== */}
      <section id="typewriter" className="py-16 px-6 bg-black border-t border-b border-gray-700">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-relaxed">
            <span>I am a </span>
            <span className="text-yellow-400 typewriter-text">{typed}</span>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="services" className="py-24 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Build. Scale. Automate.</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              I build high-performing websites, scale profitable ads, and automate workflows with AI.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="scroll-animate bg-gradient-to-br from-black via-black to-gray-900/30 border border-gray-700 p-8 rounded-2xl hover:border-yellow-400 transition-all group hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-400/10 relative overflow-hidden flex flex-col"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="mb-8">
                  <div className="inline-block px-3 py-1 bg-yellow-400/10 border border-yellow-400/20 rounded-full mb-4">
                    <p className="text-xs font-semibold text-yellow-400 tracking-wider">{s.tag}</p>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">{s.title}</h3>
                  <p className="text-gray-400 leading-relaxed mb-6">{s.desc}</p>
                </div>

                <div className="mb-8">
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-3">{s.listLabel}</p>
                  <div className="flex gap-2 flex-wrap">
                    {s.items.map((it) => (
                      <span key={it} className="inline-block px-3 py-1 bg-gray-800/50 border border-gray-700 rounded-lg text-xs text-gray-300">{it}</span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto">
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-3">{s.poweredLabel}</p>
                  <div className="flex gap-3">
                    {s.logos.map((logo) => (
                      <div key={logo.label} className="icon-container">
                        <img src={asset(logo.src)} alt={logo.label} title={logo.label} loading="lazy" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <div className="border-y border-gray-700 bg-black">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS_BAR.map((s) => (
            <div key={s.label}>
              <div className="text-4xl font-bold text-white mb-2">{s.value}</div>
              <div className="text-gray-400 text-sm uppercase">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== PORTFOLIO ===== */}
      <section id="work" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">What I've Built &amp; Scaled</h2>
              <p className="text-gray-400">A showcase of selected projects across development, marketing, and AI automation.</p>
            </div>
            <Link
              to="/projects"
              className="whitespace-nowrap px-6 py-3 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-300 transition-all hover:shadow-lg hover:shadow-yellow-400/50 transform hover:scale-105"
            >
              Know More
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {FEATURED_PROJECTS.map((p) => (
              <a
                key={p.title}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-box bg-black border border-gray-700 rounded-2xl overflow-hidden hover:border-gray-500 transition-all hover:shadow-lg hover:shadow-gray-700/20 group block"
              >
                <div className="aspect-video bg-gray-950 overflow-hidden relative flex flex-col">
                  <div className="bg-gray-800 border-b border-gray-700 px-4 py-3 flex items-center gap-3 flex-shrink-0">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="flex-1 bg-gray-700 rounded px-3 py-1 flex items-center gap-2">
                      <span className="text-xs text-gray-400">🔒</span>
                      <span className="text-xs text-gray-300">{p.domain}</span>
                    </div>
                  </div>
                  <div className="flex-1 overflow-hidden bg-white">
                    <picture>
                      <source media="(max-width: 768px)" srcSet={asset(p.mobile)} />
                      <img src={asset(p.desktop)} alt={`${p.title} Website`} className="w-full h-full object-cover" loading="lazy" />
                    </picture>
                  </div>
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="text-center">
                      <ExternalLink className={`w-12 h-12 mx-auto mb-2 ${p.overlay}`} />
                      <p className="text-white font-semibold">View Live Site</p>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{p.title}</h3>
                  <p className="text-gray-400 mb-4">{p.desc}</p>
                  <div className="flex gap-3 flex-wrap mb-6">
                    {p.tags.map((t) => (
                      <span key={t.label} className={`px-3 py-1 border rounded-lg text-sm ${TAG_COLORS[t.color]}`}>{t.label}</span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <span className="inline-block px-6 py-2 bg-yellow-400 text-black font-bold rounded-lg group-hover:bg-yellow-300 transition-all">
                      Visit Live →
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
