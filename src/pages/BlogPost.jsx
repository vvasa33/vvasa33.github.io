import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ArrowLeft, Clock, Calendar, Tag, Share2 } from 'lucide-react';
import { getPostBySlug } from '../utils/blogLoader';
import SEO from '../components/SEO';
import { useLayoutEffect } from 'react';
import Header from '../components/Header';
import Masthead from '../components/Masthead';
import Footer from '../components/Footer';
import { LineDivider } from '../components/SectionDivider';
import { personaVariants } from '../constants/animations';

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);
  
  const CodeRenderer = ({ inline, className, children, ...props }) => {
    const languageMatch = /language-(\w+)/.exec(className || '');
    const codeString = String(children).replace(/\n$/, '');

    if (inline) {
      return (
        <code
          className="bg-highlighter-yellow/30 text-black px-1.5 py-0.5 rounded-none font-['IBM_Plex_Mono'] text-[0.85em] border-b border-black"
          {...props}
        >
          {codeString}
        </code>
      );
    }

    return (
      <div className="my-8 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-300">
        <div className="flex items-center justify-between px-4 py-2 bg-black text-white font-['IBM_Plex_Mono'] text-xs uppercase tracking-widest border-b border-black">
          <span>{languageMatch ? languageMatch[1] : 'Code'}</span>
          <div className="flex gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500"/>
            <span className="w-2 h-2 rounded-full bg-yellow-500 delay-75"/>
            <span className="w-2 h-2 rounded-full bg-green-500 delay-150"/>
          </div>
        </div>
        <pre
          className="overflow-x-auto p-6 bg-paper text-sm leading-relaxed font-['IBM_Plex_Mono'] text-gray-900"
          {...props}
        >
          <code className={className}>{codeString}</code>
        </pre>
      </div>
    );
  };

  const ImageRenderer = ({ src, alt }) => (
    <figure className="my-10 border-2 border-black p-2 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform duration-300">
      <div className="overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none mix-blend-overlay"></div>
      </div>
      {alt && (
        <figcaption className="px-4 py-3 border-t-2 border-black mt-2 font-['IBM_Plex_Mono'] text-xs uppercase tracking-widest text-gray-500 flex items-center gap-2">
          <span className="w-2 h-2 bg-cmyk-cyan"></span>
          Fig. {alt}
        </figcaption>
      )}
    </figure>
  );

  const HeadingRenderer = ({ level, children }) => {
    const Tag = `h${level}`;
    const styles = {
      h1: "font-['Manrope'] text-4xl md:text-5xl font-black uppercase tracking-tight mb-8 mt-12 border-b-4 border-black pb-4",
      h2: "font-['Manrope'] text-3xl md:text-4xl font-bold uppercase tracking-tight mb-6 mt-12 flex items-center gap-3 before:content-[''] before:w-6 before:h-6 before:bg-cmyk-magenta before:block",
      h3: "font-['Manrope'] text-2xl md:text-3xl font-bold uppercase tracking-tight mb-4 mt-8",
      h4: "font-['IBM_Plex_Mono'] text-xl font-bold uppercase tracking-wider mb-4 mt-8 text-gray-700"
    };
    
    return (
      <Tag className={styles[Tag] || styles.h4}>
        {children}
      </Tag>
    );
  };

  const BlockquoteRenderer = ({ children }) => (
    <blockquote className="my-8 border-l-8 border-cmyk-yellow bg-white p-6 md:p-8 font-['Manrope'] text-xl md:text-2xl font-medium italic leading-relaxed shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]">
      "{children}"
    </blockquote>
  );

  const markdownComponents = {
    code: CodeRenderer,
    img: ImageRenderer,
    h1: (props) => <HeadingRenderer level={1} {...props} />,
    h2: (props) => <HeadingRenderer level={2} {...props} />,
    h3: (props) => <HeadingRenderer level={3} {...props} />,
    h4: (props) => <HeadingRenderer level={4} {...props} />,
    blockquote: BlockquoteRenderer,
    ul: ({ children }) => <ul className="list-disc list-outside ml-6 mb-6 font-['IBM_Plex_Mono'] marker:text-cmyk-cyan">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal list-outside ml-6 mb-6 font-['IBM_Plex_Mono'] marker:font-bold">{children}</ol>,
    li: ({ children }) => <li className="mb-2 pl-2">{children}</li>,
    p: ({ children }) => <p className="mb-6 text-base md:text-lg leading-relaxed text-gray-800 font-['IBM_Plex_Mono']">{children}</p>,
    a: ({ href, children }) => (
      <a href={href} className="font-bold underline decoration-2 decoration-cmyk-magenta underline-offset-4 hover:bg-cmyk-magenta hover:text-white transition-all px-0.5">
        {children}
      </a>
    ),
    hr: () => <hr className="border-t-2 border-dashed border-gray-300 my-12" />
  };

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-paper flex items-center justify-center p-4 font-['IBM_Plex_Mono']">
        <div className="text-center border-4 border-black p-12 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h1 className="font-['Manrope'] text-6xl font-black mb-4 text-cmyk-magenta">404</h1>
          <p className="mb-8 text-xl uppercase tracking-widest">Article Removed or Missing</p>
          <Link 
            to="/blogs" 
            className="inline-flex items-center gap-2 font-bold border-2 border-black px-6 py-3 bg-black text-white hover:bg-white hover:text-black transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Return to Bureau
          </Link>
        </div>
      </div>
    );
  }

  const textColor = post.color.includes('green') || post.color.includes('yellow') || post.color.includes('cyan') ? 'text-black' : 'text-white';

  return (
    <>
      <SEO 
        title={post.title}
        description={post.excerpt}
        canonical={`/blog/${post.slug}`}
      />
      
      <div className="bg-paper min-h-screen w-full pb-[max(2rem,env(safe-area-inset-bottom))] pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] pt-[max(2rem,env(safe-area-inset-top))] text-black font-['IBM_Plex_Mono'] md:pb-[max(5rem,env(safe-area-inset-bottom))] md:pl-[max(3rem,env(safe-area-inset-left))] md:pr-[max(3rem,env(safe-area-inset-right))] md:pt-[max(5rem,env(safe-area-inset-top))] lg:pl-[max(6rem,env(safe-area-inset-left))] lg:pr-[max(6rem,env(safe-area-inset-right))]">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={personaVariants.container}
          >
            {/* Header Structure */}
            <Header />
            <Masthead />
            <LineDivider />

            {/* Navigation */}
            <div className="mb-12">
              <Link 
                to="/blogs" 
                className="group inline-flex min-h-[44px] items-center gap-2 border border-black bg-white px-4 py-2 text-xs font-bold uppercase tracking-widest shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:bg-black hover:text-white hover:shadow-none"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Reports
              </Link>
            </div>

            {/* Article Header */}
            <article className="max-w-6xl mx-auto">
              <header className="mb-12 md:mb-16">
                <div className="flex flex-wrap items-center gap-4 mb-6 text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                  <span className={`px-2 py-1 border border-black ${post.color} ${textColor}`}>
                    {post.tag}
                  </span>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <time>
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </time>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>Est. Read: {Math.max(1, Math.ceil(post.content.split(' ').length / 200))} min</span>
                  </div>
                </div>

                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 400, damping: 20 }}
                  className="mb-8 break-words font-['Manrope'] text-3xl font-black uppercase leading-[0.9] tracking-tighter text-black sm:text-4xl md:text-6xl lg:text-7xl"
                >
                  {post.title}
                </motion.h1>

                {post.excerpt && (
                  <p className="text-xl md:text-2xl leading-relaxed font-medium text-gray-700 border-l-4 border-black pl-6 py-2">
                    {post.excerpt}
                  </p>
                )}
              </header>

              {/* Main Content */}
              <div className="border-2 border-black bg-white p-5 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] sm:p-8 md:p-16 lg:p-20">
                <div className="prose prose-2xl max-w-none leading-relaxed">
                  <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                    {post.content}
                  </ReactMarkdown>
                </div>

                {/* Article Footer */}
                <div className="mt-16 pt-8 border-t-2 border-black border-dashed flex flex-col md:flex-row justify-between items-center gap-6">
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-widest">
                      Filed Under: {post.tag}
                    </span>
                  </div>
                  
                  <div className="flex gap-4">
                     {/* Share buttons could go here */}
                     <button 
                      onClick={() => navigator.clipboard.writeText(window.location.href)}
                      className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:bg-cmyk-yellow px-2 py-1 transition-colors cursor-pointer group"
                     >
                       <Share2 className="w-4 h-4 transition-transform" />
                       Share Link
                     </button>
                  </div>
                </div>
              </div>

              {/* Back Link Bottom */}
              <div className="mt-16 text-center">
                 <Link 
                  to="/blogs" 
                  className="inline-flex items-center gap-2 font-['Manrope'] text-xl font-bold border-b-2 border-black hover:bg-black hover:text-white transition-colors group"
                >
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                  Return to all Field Reports
                </Link>
              </div>

            </article>

            {/* Footer */}
            <Footer />
          </motion.div>
        </div>
      </div>
    </>
  );
}
