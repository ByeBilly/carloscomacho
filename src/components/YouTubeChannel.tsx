import { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Youtube, ExternalLink, Play } from 'lucide-react';

const videos = [
  {
    id: 'gGNTVCLVdDM',
    title: "Let's Talk About Relationships",
    desc: 'Communication, connection and what it really takes to build a lasting relationship.',
  },
  {
    id: 'cFE-V1wm5qw',
    title: 'Relationship Talk Part 2',
    desc: 'Continuing the conversation — deeper into the dynamics that shape our closest bonds.',
  },
  {
    id: 'rYePLfu_LrA',
    title: "Let's Talk About Depression",
    desc: 'Mental Health Week special — an honest, compassionate look at living with depression.',
  },
  {
    id: 'fjmSRSPj_pE',
    title: 'Mental Health Month',
    desc: 'Why mental health awareness matters every month, not just once a year.',
  },
  {
    id: 'W9JFXSPT4oo',
    title: 'Trying vs Doing',
    desc: "What women don't want — the difference between going through the motions and genuine action.",
  },
  {
    id: '8CDEtPh1osA',
    title: 'Francis Bacon Pt 2',
    desc: "Philosophy meets psychology — exploring the raw emotional power of Francis Bacon's art.",
  },
];

export default function YouTubeChannel() {
  useEffect(() => {
    document.title = 'YouTube | Carlos Camacho Psychologist';
    return () => {
      document.title = 'Carlos Camacho | Registered Psychologist | Sydney, Central Coast & Telehealth NSW';
    };
  }, []);

  const requestedId = new URLSearchParams(window.location.search).get('v');
  const orderedVideos = requestedId && videos.some(v => v.id === requestedId)
    ? [videos.find(v => v.id === requestedId)!, ...videos.filter(v => v.id !== requestedId)]
    : videos;
  const [featured, ...rest] = orderedVideos;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-white selection:text-neutral-900">

      {/* Back nav */}
      <div className="max-w-6xl mx-auto px-6 pt-8">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          iamcarloscamacho.com
        </a>
      </div>

      {/* ── Hero ── */}
      <section className="max-w-6xl mx-auto px-6 pt-14 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          {/* YouTube wordmark row */}
          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-red-600">
              <Youtube className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] text-neutral-500 uppercase leading-none mb-1">
                YouTube Channel
              </p>
              <p className="text-sm text-neutral-400">@carloscamachopsychologist4800</p>
            </div>
          </div>

          <h1 className="text-5xl sm:text-7xl font-extralight tracking-tight text-white leading-none mb-6">
            Carlos<br />
            <span className="text-neutral-500">Camacho</span>
          </h1>

          <p className="text-lg text-neutral-400 max-w-2xl leading-relaxed mb-10">
            Psychology in plain language. Relationships, mental health, philosophy, and the everyday questions that shape who we are — straight from the couch of a registered psychologist.
          </p>

          <a
            href="https://www.youtube.com/@carloscamachopsychologist4800?sub_confirmation=1"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-red-600 text-white text-sm font-semibold hover:bg-red-500 transition-colors shadow-lg"
          >
            <Youtube className="w-5 h-5" />
            Subscribe on YouTube
          </a>
        </motion.div>
      </section>

      {/* ── Featured Video ── */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-2 mb-5">
            <Play className="w-4 h-4 text-red-500 fill-red-500" />
            <p className="text-xs font-semibold tracking-widest text-neutral-500 uppercase">Featured</p>
          </div>

          <div className="rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl">
            <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${featured.id}?rel=0&modestbranding=1`}
                title={featured.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

          <div className="mt-5">
            <h2 className="text-xl font-medium text-white mb-1">{featured.title}</h2>
            <p className="text-sm text-neutral-500">{featured.desc}</p>
          </div>
        </motion.div>
      </section>

      {/* ── Video Grid ── */}
      <section className="bg-neutral-950 py-24" style={{ backgroundColor: '#0d0d0d' }}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <p className="text-xs font-semibold tracking-widest text-neutral-600 uppercase mb-3">More Videos</p>
            <h2 className="text-3xl font-medium text-white tracking-tight">Keep watching</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((v, i) => (
              <motion.div
                key={v.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900/60 hover:border-neutral-700 hover:bg-neutral-900 transition-all"
              >
                <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${v.id}?rel=0&modestbranding=1`}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-medium text-neutral-200 mb-1">{v.title}</h3>
                  <p className="text-xs text-neutral-500 leading-relaxed">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer CTA ── */}
      <section className="bg-[#0a0a0a] border-t border-neutral-900 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold tracking-widest text-neutral-600 uppercase mb-4">Find Carlos online</p>
            <h2 className="text-2xl font-light text-white mb-8">More from Carlos Camacho</h2>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
              {[
                { label: 'Private Universe Podcast', href: '/privateuniverse' },
                { label: 'Books on Amazon', href: 'https://www.amazon.com.au/stores/author/B078GJ9YF1/about' },
                { label: 'Axiom Psychology', href: 'https://axiompsych.com.au/carlos-camacho/' },
                { label: 'All YouTube Videos', href: 'https://www.youtube.com/@carloscamachopsychologist4800', external: true },
              ].map(({ label, href, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noreferrer' : undefined}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-neutral-800 text-sm text-neutral-500 hover:border-neutral-600 hover:text-white transition-colors"
                >
                  {label}
                  {external && <ExternalLink className="w-3 h-3" />}
                </a>
              ))}
            </div>

            <div className="border-t border-neutral-900 pt-10">
              <p className="text-sm text-neutral-600 mb-2">Want to see Carlos professionally?</p>
              <a
                href="/"
                className="inline-flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to iamcarloscamacho.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
