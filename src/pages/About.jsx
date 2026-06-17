import asset from '../utils/asset.js'
import useScrollReveal from '../hooks/useScrollReveal.js'
import usePageMeta from '../hooks/usePageMeta.js'
import {
  STORY_PARAGRAPHS,
  STORY_COLOR,
  STORY_BOXES,
  CORE_VALUES,
  ACADEMICS,
  SKILLS,
  SKILL_CATEGORY_CLASS,
  SKILL_ICON_CLASS,
  WHAT_I_DO,
  QUICK_STATS,
  WHY_PARTNER,
} from '../data/about.js'

const iconBg = { yellow: 'bg-yellow-400/10', cyan: 'bg-cyan-400/10', amber: 'bg-yellow-300/10' }
const iconText = { yellow: 'text-yellow-400', cyan: 'text-cyan-400', amber: 'text-amber-300' }
const valueText = { yellow: 'text-yellow-400', cyan: 'text-cyan-400' }
const hoverBorder = { yellow: 'hover:border-yellow-400', cyan: 'hover:border-cyan-400' }
const accentBar = {
  yellow: 'from-yellow-400 via-yellow-500 to-transparent',
  cyan: 'from-cyan-400 via-cyan-500 to-transparent',
  amber: 'from-yellow-300 via-amber-300 to-transparent',
}

export default function About() {
  usePageMeta(
    'About Mr. Parveen Kumar | Web Developer & Meta Ads Expert',
    'Meet Parveen Kumar, a website designer, Meta Ads manager, and AI automation specialist helping D2C brands grow with high-converting design and profitable ads.',
  )
  useScrollReveal()

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-gray-900 border border-gray-700 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
            <span className="text-xs lg:text-sm font-medium text-gray-300">know me</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6">
            About{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-400">
              Mr. Parveen Kumar
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            I’m Parveen Kumar, a website designer and Meta Ads manager helping
            brands grow with powerful design and profitable ads.
          </p>
        </div>
      </section>

      {/* ===== MY STORY ===== */}
      <section className="py-6 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-yellow-600/5 rounded-full blur-3xl"></div>
        <div className="max-w-6xl mx-auto">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              My <span className="text-yellow-400">Story</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-cyan-400 mb-8 mx-auto lg:mx-0"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 text-gray-400 text-base lg:text-lg leading-relaxed space-y-4 text-center lg:text-left">
              {STORY_PARAGRAPHS.map((segments, i) => (
                <p key={i}>
                  {segments.map((seg, j) =>
                    typeof seg === 'string' ? (
                      seg
                    ) : (
                      <span key={j} className={STORY_COLOR[seg[1]]}>
                        {seg[0]}
                      </span>
                    ),
                  )}
                </p>
              ))}
            </div>

            <div className="relative lg:sticky lg:top-28">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-cyan-400/10 rounded-xl blur-lg"></div>
              <div className="relative bg-gray-900 border border-gray-700 rounded-xl p-6 space-y-4">
                {STORY_BOXES.map((b) => {
                  const Icon = b.icon
                  return (
                    <div key={b.title} className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg flex-shrink-0 ${iconBg[b.color]}`}>
                        <Icon className={`w-6 h-6 ${iconText[b.color]}`} />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-base mb-1">{b.title}</h3>
                        <p className="text-gray-400 text-xs leading-relaxed">{b.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CORE VALUES ===== */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Core <span className="text-yellow-400">Values</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              The principles that guide every decision and project
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((v) => {
              const Icon = v.icon
              return (
                <div
                  key={v.title}
                  className={`group bg-gray-900 border border-gray-800 rounded-2xl p-8 transition-all duration-300 hover:scale-105 text-center ${hoverBorder[v.color]}`}
                >
                  <div className={`p-4 rounded-xl w-fit mb-6 mx-auto transition-all ${iconBg[v.color]}`}>
                    <Icon className={`w-8 h-8 ${iconText[v.color]}`} />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-3">{v.title}</h3>
                  <p className="text-gray-400">{v.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ===== ACADEMIC ===== */}
      <section className="py-24 px-6 bg-gradient-to-b from-black via-[#070a12] to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Academic Background</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              A strong technical foundation supporting real-world digital growth experience
            </p>
          </div>
          <div className="relative max-w-5xl mx-auto">
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-8 bottom-8 w-[2px] bg-gradient-to-b from-yellow-300/80 via-cyan-300/70 to-emerald-300/70"></div>
            <div className="grid md:grid-cols-2 gap-8">
              {ACADEMICS.map((a) => (
                <div
                  key={a.title}
                  className={`group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-7 shadow-[0_20px_70px_rgba(0,0,0,0.45)] transition duration-300 hover:-translate-y-2 ${a.accent === 'yellow' ? 'hover:border-yellow-300/40' : 'hover:border-cyan-300/40'}`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`h-10 w-10 rounded-full flex items-center justify-center text-xl ${a.accent === 'yellow' ? 'bg-yellow-300/15 border border-yellow-200/30 text-yellow-100' : 'bg-cyan-300/15 border border-cyan-200/30 text-cyan-100'}`}>
                        {a.badge}
                      </div>
                      <div>
                        <p className={`text-xs uppercase tracking-[0.2em] ${a.accent === 'yellow' ? 'text-yellow-200/80' : 'text-cyan-100/80'}`}>{a.kicker}</p>
                        <h3 className="text-xl font-semibold text-white">{a.title}</h3>
                      </div>
                    </div>
                    <span className="px-3 py-1 text-xs rounded-full bg-white/10 text-gray-100 border border-white/10 whitespace-nowrap">{a.period}</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{a.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {a.tags.map((t) => (
                      <span key={t} className="px-3 py-1 text-xs rounded-full bg-white/10 text-gray-200 border border-white/10">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SKILLS ===== */}
      <section className="py-20 px-6" id="skills">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Skills &amp; <span className="text-yellow-400">Expertise</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-2">
              A comprehensive toolkit built over 5+ years of hands-on experience
            </p>
            <p className="text-cyan-400 font-semibold text-sm">Master 12+ Technologies</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {SKILLS.map((s) => {
              const Icon = s.icon
              return (
                <div
                  key={s.name}
                  className={`group bg-gradient-to-br from-gray-900/80 to-gray-800/60 border rounded-2xl p-6 sm:p-8 text-center transition-all duration-300 hover:-translate-y-2 ${SKILL_CATEGORY_CLASS[s.category]}`}
                >
                  <div className="mx-auto mb-6 w-fit">
                    <Icon className={`w-9 h-9 transition-transform duration-500 group-hover:rotate-[360deg] group-hover:scale-110 ${SKILL_ICON_CLASS[s.category]}`} />
                  </div>
                  <h3 className="text-base sm:text-xl font-bold text-white mb-2">{s.name}</h3>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ===== WHAT I DO ===== */}
      <section className="py-24 bg-gray-900/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-700 bg-gray-800/70 text-xs font-semibold uppercase tracking-[0.2em] text-gray-300">
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
              Services Snapshot
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-6 mb-4">What I Do Best</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Performance-focused services blending premium web experiences, profitable ads, and AI-powered automation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {WHAT_I_DO.map((c) => {
              const Icon = c.icon
              return (
                <div
                  key={c.title}
                  className="relative overflow-hidden bg-gradient-to-br from-black via-black to-gray-900/30 border border-gray-800 p-8 rounded-2xl group hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl flex flex-col"
                >
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity ${accentBar[c.accent]}`}></div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 rounded-xl border ${iconBg[c.accent]} ${c.accent === 'cyan' ? 'border-cyan-400/30' : 'border-yellow-400/30'}`}>
                      <Icon className={`w-7 h-7 ${iconText[c.accent]}`} />
                    </div>
                    <div>
                      <p className={`text-xs font-semibold uppercase tracking-[0.15em] ${iconText[c.accent]}`}>{c.kicker}</p>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">{c.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-400 leading-relaxed mb-6">{c.desc}</p>
                  <div className="mb-6">
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-3">{c.listLabel}</p>
                    <div className="flex flex-wrap gap-2">
                      {c.items.map((it) => (
                        <span key={it} className="px-3 py-1 rounded-lg bg-gray-800/60 border border-gray-700 text-xs text-gray-200">{it}</span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-auto">
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-3">{c.poweredLabel}</p>
                    <div className="flex gap-3 items-center">
                      {c.logos.map((logo) => (
                        <img key={logo.label} src={asset(logo.src)} alt={logo.label} title={logo.label} className="h-8 w-8 rounded-lg object-contain bg-gray-800/60 border border-gray-700 p-1" />
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ===== QUICK STATS ===== */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Results That <span className="text-yellow-400">Speak</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {QUICK_STATS.map((s) => (
              <div key={s.label} className={`text-center bg-gray-900 border border-gray-800 rounded-2xl p-6 transition-all ${hoverBorder[s.color]}`}>
                <div className={`text-4xl sm:text-5xl font-bold mb-2 ${valueText[s.color]}`}>{s.value}</div>
                <div className="text-gray-400 text-sm sm:text-base">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY PARTNER ===== */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Why Partner <span className="text-yellow-400">With Me?</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Benefits that set this collaboration apart from typical agencies
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_PARTNER.map((w) => {
              const Icon = w.icon
              return (
                <div key={w.title} className={`flex items-start gap-4 bg-gray-900 border border-gray-800 rounded-2xl p-6 transition-all ${hoverBorder[w.color]}`}>
                  <div className={`p-3 rounded-lg flex-shrink-0 ${iconBg[w.color]}`}>
                    <Icon className={`w-6 h-6 ${iconText[w.color]}`} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">{w.title}</h3>
                    <p className="text-gray-400 text-sm">{w.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
