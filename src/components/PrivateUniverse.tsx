import { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink, Headphones, Calendar, PlayCircle, Mic } from 'lucide-react';

const episodes = [
  {
    n: 188,
    title: 'Teamwork',
    date: 'Sep 2026',
    desc: 'Why teamwork is not only important but necessary — exploring our fundamental need for human connection and collaboration.',
  },
  {
    n: 187,
    title: 'Cleaning Out the Clutter in Our Lives',
    date: 'Aug 2026',
    desc: 'On letting go of what no longer serves us — the physical objects, the mental load, and the emotional weight we carry unnecessarily.',
  },
  {
    n: 186,
    title: 'Anxiety',
    date: 'Jul 2026',
    desc: 'A deep dive into anxiety — what it is, where it lives in the body and mind, and practical tools to navigate it.',
  },
  {
    n: 185,
    title: 'Rebellion',
    date: 'Jul 2026',
    desc: 'Being a rebel with or without a cause. The psychology of pushing back, questioning norms, and finding your own way.',
  },
  {
    n: 184,
    title: 'Closure',
    date: 'Jun 2026',
    desc: 'Do we really need closure? Questioning one of life\'s most sought-after — yet most elusive — states of mind.',
  },
];

export default function PrivateUniverse() {
  useEffect(() => {
    document.title = 'Private Universe Podcast | Carlos Camacho';
    return () => {
      document.title = 'Carlos Camacho | Registered Psychologist | Sydney, Central Coast & Telehealth NSW';
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-white selection:text-neutral-900">

      {/* Back nav */}
      <div className="max-w-5xl mx-auto px-6 pt-8">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          carloscomacho.com
        </a>
      </div>

      {/* ── Hero ── */}
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          {/* Artwork with glow */}
          <div className="relative inline-block mb-10">
            <div className="absolute inset-0 rounded-3xl blur-3xl opacity-25 bg-indigo-400 scale-90 translate-y-4" />
            <img
              src="/carlos-podcast.jpg"
              alt="Private Universe podcast artwork"
              className="relative w-52 h-52 rounded-3xl shadow-2xl mx-auto"
            />
          </div>

          <p className="text-xs font-semibold tracking-[0.3em] text-neutral-500 uppercase mb-5">
            A podcast by Carlos Camacho
          </p>

          <h1 className="text-6xl sm:text-8xl font-extralight tracking-tight text-white mb-6 leading-none">
            Private<br />
            <span className="text-neutral-500">Universe</span>
          </h1>

          <p className="text-lg text-neutral-400 max-w-xl mx-auto leading-relaxed mb-10">
            Personal, philosophical &amp; comedic conversations about life, existence, art, music, sport, and what it means to be human.
          </p>

          {/* Metadata */}
          <div className="flex items-center justify-center flex-wrap gap-x-6 gap-y-2 mb-12 text-sm text-neutral-600">
            <span className="flex items-center gap-1.5">
              <Headphones className="w-4 h-4" />
              188 Episodes
            </span>
            <span className="hidden sm:block w-px h-4 bg-neutral-800" />
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              Running since 2019
            </span>
            <span className="hidden sm:block w-px h-4 bg-neutral-800" />
            <span className="flex items-center gap-1.5">
              <Mic className="w-4 h-4" />
              Monthly episodes
            </span>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://podcasts.apple.com/au/podcast/private-universe/id1454764350"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-white text-neutral-900 text-sm font-semibold hover:bg-neutral-100 transition-colors shadow-lg"
            >
              <PlayCircle className="w-5 h-5" />
              Listen on Apple Podcasts
            </a>
            <a
              href="https://carloscamacho.libsyn.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-neutral-700 text-white text-sm font-medium hover:border-neutral-500 hover:bg-neutral-900 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              All Episodes
            </a>
          </div>
        </motion.div>
      </section>

      {/* ── Story ── */}
      <section className="bg-white py-24">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-4">The Show</p>
            <h2 className="text-3xl font-medium text-neutral-900 tracking-tight sm:text-4xl mb-10">
              What is a private universe?
            </h2>
            <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
              <p>
                Every person carries an inner world — a private universe shaped by memory, belief, curiosity, and experience. It is the space behind the eyes, the voice in the quiet moments, the story you tell yourself about who you are and why you are here.
              </p>
              <p>
                <em className="text-neutral-900">Private Universe</em> is Carlos Camacho's exploration of that space.
              </p>
              <p>
                Running since 2019, with over 185 episodes across seven years, the podcast weaves together psychology, philosophy, and honest human conversation. Carlos — registered psychologist, philosopher, author, musician, and lifelong student of the human condition — turns life's biggest and smallest questions over with equal care: the nature of grief, the joy of sport, the weight of addiction, the meaning of closure, the lightness of laughter.
              </p>
              <p>
                Personal and comedic, serious and searching. Each episode is an invitation into a different corner of the human experience. Short enough for a morning commute. Deep enough to stay with you all day.
              </p>
            </div>

            <blockquote className="mt-12 border-l-4 border-neutral-200 pl-6 text-xl italic text-neutral-500 font-light leading-relaxed">
              "Wonderful stories directly from the people who experienced them, alongside psychological and philosophical discussions. Unique."
              <span className="block mt-3 text-sm not-italic text-neutral-400 font-normal">— Apple Podcasts listener review</span>
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* ── Recent Episodes ── */}
      <section className="bg-neutral-950 py-24" style={{ backgroundColor: '#0d0d0d' }}>
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <p className="text-xs font-semibold tracking-widest text-neutral-600 uppercase mb-4">Recent Episodes</p>
            <h2 className="text-3xl font-medium text-white tracking-tight">Latest from the show</h2>
          </motion.div>

          <div className="space-y-3">
            {episodes.map((ep, i) => (
              <motion.a
                key={ep.n}
                href="https://carloscamacho.libsyn.com/"
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group flex items-start gap-5 p-5 rounded-2xl bg-neutral-900/60 hover:bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-all"
              >
                <div className="flex-shrink-0 mt-0.5 w-9 h-9 rounded-full bg-neutral-800 group-hover:bg-neutral-700 flex items-center justify-center transition-colors">
                  <PlayCircle className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium text-neutral-600">Ep. {ep.n}</span>
                    <span className="text-neutral-700">·</span>
                    <span className="text-xs text-neutral-600">{ep.date}</span>
                  </div>
                  <h3 className="text-base font-medium text-neutral-200 group-hover:text-white mb-1.5 transition-colors">
                    {ep.title}
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">{ep.desc}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-neutral-700 group-hover:text-neutral-400 transition-colors flex-shrink-0 mt-1" />
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 text-center"
          >
            <a
              href="https://carloscamacho.libsyn.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-white transition-colors"
            >
              Browse all 188 episodes
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Listen On ── */}
      <section className="bg-[#0a0a0a] border-t border-neutral-900 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold tracking-widest text-neutral-600 uppercase mb-8">Available on</p>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-20">
              {[
                { label: 'Apple Podcasts', href: 'https://podcasts.apple.com/au/podcast/private-universe/id1454764350' },
                { label: 'Libsyn',         href: 'https://carloscamacho.libsyn.com/' },
                { label: 'Deezer',         href: 'https://www.deezer.com/search/private%20universe%20carlos%20camacho/podcast' },
                { label: 'RSS Feed',       href: 'https://carloscamacho.libsyn.com/rss' },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-2.5 rounded-full border border-neutral-800 text-sm text-neutral-500 hover:border-neutral-600 hover:text-white transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>

            <div className="border-t border-neutral-900 pt-10">
              <p className="text-sm text-neutral-600 mb-2">Want to explore more of Carlos's work?</p>
              <a
                href="/"
                className="inline-flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to carloscomacho.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
