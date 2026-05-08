import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { 
  Chrome, 
  PlayCircle, 
  Brain, 
  FileText, 
  MessageSquare, 
  Zap, 
  Code2, 
  CheckCircle2,
  Sparkles,
  ArrowRight,
  User,
  Star,
  Quote,
  BookOpen,
  List,
  Globe,
  Github
} from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
    
    const handleHashClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.hash && anchor.hash.startsWith('#') && anchor.pathname === window.location.pathname) {
        const id = anchor.hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          e.preventDefault();
          lenis.scrollTo(element, { offset: -64 });
        }
      }
    };

    document.addEventListener('click', handleHashClick);

    return () => {
      document.removeEventListener('click', handleHashClick);
      lenis.destroy();
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <HowItWorksSection />
        <OpenSourceSection />
        <SocialProofSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-slate-100 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 text-indigo-600 font-bold text-lg tracking-tight">
          <img src="/logo.png" alt="NeuraLearn Logo" className="w-8 h-8" />
          <span>NeuraLearn</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#how-it-works" className="hover:text-slate-900 transition-colors">How it works</a>
          <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
          <a href="#open-source" className="hover:text-slate-900 transition-colors">Open Source</a>
        </div>
        <a href="https://chromewebstore.google.com/detail/youtube-transcript-bulk-d/fgpagmikaghagifhoibbgpfcjibjdlfa" target="_blank" rel="noopener noreferrer" className="bg-indigo-600 hover:bg-indigo-700 hover:-translate-y-0.5 hover:shadow-md text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center gap-2 shadow-sm">
          <Chrome size={16} />
          <span className="hidden sm:inline">Add to Chrome</span>
        </a>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-medium mb-8"
      >
        <Sparkles size={16} />
        <span>NeuraLearn BETA is now live</span>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6"
      >
        Learn from YouTube, <br className="hidden md:block"/> <span className="text-indigo-600">effectively.</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 text-balance leading-relaxed"
      >
        NeuraLearn BETA is a free, open-source Chrome extension that turns passive videos into structured study notes and lets you ask questions from the transcript.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <a href="https://chromewebstore.google.com/detail/youtube-transcript-bulk-d/fgpagmikaghagifhoibbgpfcjibjdlfa" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/30 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-sm active:scale-[0.98] w-full sm:w-auto">
          <Chrome size={20} />
          <span>Add to Chrome — Free</span>
        </a>
        <a href="#how-it-works" className="flex items-center justify-center gap-2 text-slate-600 hover:text-slate-900 font-medium px-6 py-4 transition-colors w-full sm:w-auto">
          See how it works <ArrowRight size={16} />
        </a>
      </motion.div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section className="py-24 bg-white px-6">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Watching YouTube is passive.</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">We spend hours watching educational content, but without a system, the knowledge fades quickly.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:-translate-y-1 hover:shadow-md transition-all duration-300 ease-out">
            <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center mb-6">
              <PlayCircle size={24} />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Passive Watching</h3>
            <p className="text-slate-600 leading-relaxed">You start a tutorial, watch it to the end, but rarely actively engage with the material being presented.</p>
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:-translate-y-1 hover:shadow-md transition-all duration-300 ease-out">
            <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center mb-6">
              <Brain size={24} />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Poor Retention</h3>
            <p className="text-slate-600 leading-relaxed">Without taking notes or generating active recall questions, it's incredibly hard to retain new information.</p>
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:-translate-y-1 hover:shadow-md transition-all duration-300 ease-out">
            <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center mb-6">
              <BookOpen size={24} />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">No Structured System</h3>
            <p className="text-slate-600 leading-relaxed">Juggling between YouTube and a separate note-taking app breaks your focus and slows down learning.</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function SolutionSection() {
  return (
    <section className="py-24 bg-slate-900 px-6 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-fuchsia-500/20 rounded-full blur-3xl mix-blend-screen pointer-events-none"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto text-center relative z-10"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Turn passive watching into <span className="text-indigo-400">active learning</span>.</h2>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-16 text-balance">
          NeuraLearn sits right next to your YouTube player. Get instant structured notes and plain-English AI explanations so you actually understand the content.
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
           <div className="bg-slate-800/50 border border-slate-700/50 p-8 rounded-2xl backdrop-blur-sm hover:bg-slate-800/80 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 ease-out">
              <FileText className="text-indigo-400 mb-6" size={32} />
              <h3 className="text-xl font-semibold mb-3">Instant Structured Notes</h3>
              <p className="text-slate-400 leading-relaxed">NeuraLearn reads the video transcript and automatically generates beautifully formatted notes, key concepts, and actionable summaries.</p>
           </div>
           <div className="bg-slate-800/50 border border-slate-700/50 p-8 rounded-2xl backdrop-blur-sm hover:bg-slate-800/80 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 ease-out">
              <MessageSquare className="text-indigo-400 mb-6" size={32} />
              <h3 className="text-xl font-semibold mb-3">AI-Powered Explanations</h3>
              <p className="text-slate-400 leading-relaxed">Confused by a complex concept? Ask the embedded AI chat to explain ideas based directly on what the speaker just said.</p>
           </div>
        </div>
      </motion.div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: <FileText size={24} />,
      title: "Automatic Study Notes",
      desc: "Instantly generate complete, well-formatted notes from any educational video on YouTube."
    },
    {
      icon: <List size={24} />,
      title: "Structured Summaries",
      desc: "Break down long videos into digestible, easy-to-read summaries and key takeaways."
    },
    {
      icon: <MessageSquare size={24} />,
      title: "Chat from Transcripts",
      desc: "Chat directly with the video. Ask questions, request examples, or get clarifications."
    },
    {
      icon: <Brain size={24} />,
      title: "Concepts & Quizzes",
      desc: "Automatically extract important terminology and generate practice questions to test yourself."
    },
    {
      icon: <Zap size={24} />,
      title: "Fast, One-Click Workflow",
      desc: "No tab switching required. Everything is seamlessly injected into the right side of the YouTube page."
    },
    {
      icon: <Code2 size={24} />,
      title: "100% Open Source",
      desc: "Transparent, community-driven, and completely free to use without any hidden subscriptions."
    }
  ];

  return (
    <section id="features" className="py-24 bg-slate-50 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Everything you need to learn.</h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-500">Powerful features wrapped in an intuitive, minimal interface.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((f, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-out hover:border-slate-300 text-left">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{f.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">{f.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      num: 1,
      title: "Open a YouTube video",
      desc: "Navigate to any educational or lecture video on YouTube."
    },
    {
      num: 2,
      title: "Click the NeuraLearn button",
      desc: "Open the side-panel directly from your Chrome toolbar."
    },
    {
      num: 3,
      title: "Get notes instantly",
      desc: "NeuraLearn reads the transcript and creates structured study guides."
    },
    {
      num: 4,
      title: "Ask questions",
      desc: "Use the AI chat tab to clarify concepts mentioned in the video."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-slate-900 px-6 border-t border-slate-800">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">How it works</h2>
            <p className="text-slate-400 text-lg">Four simple steps to totally transform your YouTube learning experience.</p>
          </div>
          <div className="space-y-6 text-left">
            {steps.map((s, i) => (
              <div key={i} className="flex gap-6 sm:gap-8 items-start bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 hover:bg-slate-800/80 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 ease-out">
                <div className="w-12 h-12 shrink-0 bg-indigo-500/20 text-indigo-400 rounded-full flex items-center justify-center font-bold text-xl">
                  {s.num}
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-semibold text-slate-100 mb-2">{s.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-lg">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function OpenSourceSection() {
  return (
    <section id="open-source" className="py-24 bg-slate-50 px-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto bg-indigo-50/50 border border-indigo-100 rounded-[2.5rem] p-12 text-center shadow-sm"
      >
        <Code2 className="mx-auto text-indigo-600 mb-6" size={48} />
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Built for accessibility.</h2>
        <p className="text-slate-600 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          NeuraLearn BETA is fully open-source and completely free for everyone. We believe powerful AI learning tools shouldn't be locked behind expensive paywalls. 
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="https://github.com/riteshelango/Virtual-Pet-Game" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 hover:-translate-y-0.5 hover:shadow-md text-slate-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-sm">
            <Github size={20} />
            Explore the Code
          </a>
        </div>
      </motion.div>
    </section>
  );
}

function SocialProofSection() {
  const testimonials = [
    {
      text: "This extension completely changed how I watch programming tutorials. The instant notes are incredibly accurate and save me so much time.",
      author: "Student",
      role: "Computer Science"
    },
    {
      text: "Being able to ask questions to the video transcript feels like absolute magic. It's literally like having a personal tutor right there.",
      author: "Lifelong Learner",
      role: "Self-taught"
    },
    {
      text: "Open source and completely free? This is unquestionably the best learning tool I've added to my browser this entire year.",
      author: "UX Designer",
      role: "Career transitioner"
    }
  ];

  return (
    <section className="py-24 bg-white px-6 border-t border-slate-100">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Loved by early learners</h2>
          <div className="flex items-center justify-center gap-1.5 text-amber-400">
            {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="currentColor" />)}
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm relative flex flex-col justify-between hover:-translate-y-1 hover:shadow-md transition-all duration-300 ease-out hover:border-slate-300">
              <div>
                <Quote className="text-indigo-100 mb-4" size={40} />
                <p className="text-slate-600 font-medium mb-8 leading-relaxed text-lg">"{t.text}"</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center shrink-0">
                  <User size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{t.author}</h4>
                  <span className="text-sm font-medium text-slate-500">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function FinalCTASection() {
  return (
    <section className="py-24 bg-indigo-600 px-6 text-center text-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none"></div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to upgrade your learning?</h2>
        <p className="text-xl text-indigo-100 mb-12 max-w-2xl mx-auto leading-relaxed">
          Join the beta today. NeuraLearn is free, open-source, and installs to your Chrome browser in seconds.
        </p>
        <a href="https://chromewebstore.google.com/detail/youtube-transcript-bulk-d/fgpagmikaghagifhoibbgpfcjibjdlfa" target="_blank" rel="noopener noreferrer" className="w-fit flex items-center mx-auto gap-3 bg-white text-indigo-600 hover:bg-slate-50 hover:-translate-y-1 px-10 py-5 rounded-xl font-bold text-lg md:text-xl transition-all duration-300 shadow-xl hover:shadow-2xl active:scale-[0.98]">
          <Chrome size={24} />
          <span>Try NeuraLearn BETA — Free</span>
        </a>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 bg-white border-t border-slate-100 text-center px-6">
      <div className="flex items-center justify-center gap-2 text-indigo-600 mb-4 font-bold text-xl tracking-tight">
        <img src="/logo.png" alt="NeuraLearn Logo" className="w-8 h-8" />
        <span>NeuraLearn</span>
      </div>
      <p className="text-slate-500 text-base mb-8">An open-source tool for better learning.</p>
      <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-slate-600">
        <a href="https://chromewebstore.google.com/detail/youtube-transcript-bulk-d/fgpagmikaghagifhoibbgpfcjibjdlfa" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors">Chrome Web Store</a>
        <a href="https://github.com/riteshelango/Virtual-Pet-Game" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors">GitHub Repository</a>
        <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
      </div>
    </footer>
  );
}
