'use client'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { cases } from './data/cases'
import Nav from './components/Nav'

function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add('visible') }, { threshold: 0.07, rootMargin: '0px 0px -30px 0px' })
    obs.observe(el); return () => obs.disconnect()
  }, [])
  return <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>
}

const cardColors = [
  { bg: 'linear-gradient(135deg,#0f1f3a 0%,#1a2e52 100%)', icon: <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/> },
  { bg: 'linear-gradient(135deg,#1a1a0f 0%,#2e2a14 100%)', icon: <path d="M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5-4H7V4h10v12z"/> },
  { bg: 'linear-gradient(135deg,#1f0f1a 0%,#301828 100%)', icon: <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/> },
]

export default function Home() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault(); setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3500)
  }

  return (
    <>
      <Nav />

      {/* ─── HERO ─── */}
      <section id="who-i-am" style={{ background: 'var(--cream)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 'calc(100vh - 64px)' }}>
          {/* Left */}
          <div style={{ display:'flex', flexDirection:'column', justifyContent:'center', padding:'10% 8% 8% 10%', position:'relative', zIndex:2 }}
            className="hero-left-col">
            <div className="reveal visible" style={{ display:'inline-flex', alignItems:'center', gap:10, fontSize:'.75rem', fontWeight:600, letterSpacing:'.12em', textTransform:'uppercase', color:'var(--terra)', marginBottom:28 }}>
              <span style={{ display:'block', width:24, height:1.5, background:'var(--terra)', borderRadius:2 }} />
              UX Researcher · Product Strategist
            </div>
            <h1 className="font-lora" style={{ fontSize:'clamp(3rem,4.5vw,4.75rem)', fontWeight:500, lineHeight:1.1, letterSpacing:'-.02em', color:'var(--ink)', marginBottom:24 }}>
              Understanding people.<br /><em style={{ color:'var(--terra)' }}>Improving</em> products.
            </h1>
            <p style={{ fontSize:'1.0625rem', fontWeight:300, color:'var(--ink3)', lineHeight:1.8, maxWidth:440, marginBottom:44 }}>
              I bridge the gap between what users experience and what products should become — turning complex human behavior into clear, strategic decisions that teams can act on.
            </p>
            <div style={{ display:'flex', gap:12, flexWrap:'wrap' }}>
              <a href="#my-work" className="btn-fill">See My Work <Arrow /></a>
              <a href="#contact-me" className="btn-ghost">Let's Connect</a>
            </div>
          </div>

          {/* Right — warm visual */}
          <div style={{ position:'relative', overflow:'hidden', background:'var(--sand2)' }} className="hero-right-col">
            <div style={{ position:'absolute', width:500, height:500, borderRadius:'50%', border:'1px solid rgba(193,125,82,.1)', top:'50%', left:'50%', transform:'translate(-50%,-50%)' }} />
            <div style={{ position:'absolute', width:700, height:700, borderRadius:'50%', border:'1px solid rgba(193,125,82,.06)', top:'50%', left:'50%', transform:'translate(-50%,-50%)' }} />
            <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center' }}>
              <svg viewBox="0 0 500 500" style={{ width:'90%', height:'90%' }}>
                <path d="M250,80 C340,70 420,130 440,220 C460,310 400,400 310,430 C220,460 130,410 95,320 C60,230 100,130 180,95 C210,82 230,83 250,80Z" fill="rgba(193,125,82,.08)" stroke="rgba(193,125,82,.12)" strokeWidth="1.5"/>
              </svg>
            </div>
            <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center' }}>
              <div style={{ width:280, height:280, borderRadius:'50%', border:'2px dashed rgba(193,125,82,.3)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:10 }}>
                <svg style={{ width:40, height:40, fill:'rgba(193,125,82,.35)' }} viewBox="0 0 24 24"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>
                <p style={{ fontSize:'.75rem', letterSpacing:'.1em', textTransform:'uppercase', color:'rgba(193,125,82,.5)', fontWeight:600 }}>Your Photo</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', borderTop:'1px solid var(--border)', background:'var(--cream)' }}>
          {[['5+','Years of Research'],['30+','Studies Conducted'],['12+','Products Shaped'],['100%','User-Centered']].map(([n,l],i) => (
            <div key={i} style={{ padding:'24px 0', textAlign:'center', borderRight: i<3 ? '1px solid var(--border)' : 'none' }}>
              <div className="font-lora" style={{ fontSize:'2.25rem', fontWeight:500, color:'var(--terra)', lineHeight:1, marginBottom:6 }}>{n}</div>
              <div style={{ fontSize:'.75rem', fontWeight:600, letterSpacing:'.1em', textTransform:'uppercase', color:'var(--ink4)' }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section style={{ background:'var(--sand)', padding:'100px 10%', borderTop:'1px solid var(--border)' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1.8fr', gap:80, maxWidth:1200, margin:'0 auto', alignItems:'start' }}
          className="about-grid-resp">
          <Reveal>
            <div style={{ fontSize:'.75rem', fontWeight:600, letterSpacing:'.12em', textTransform:'uppercase', color:'var(--terra)', marginBottom:20, display:'flex', alignItems:'center', gap:10 }}>
              <span style={{ width:20, height:1.5, background:'var(--terra)', borderRadius:2, display:'block' }} /> About Me
            </div>
            <h2 className="font-lora" style={{ fontSize:'clamp(2rem,3.2vw,3rem)', fontWeight:500, lineHeight:1.2, letterSpacing:'-.02em', color:'var(--ink)' }}>
              Curious by<br />nature.<br /><em style={{ color:'var(--terra)' }}>Rigorous</em><br />by practice.
            </h2>
          </Reveal>
          <div>
            <Reveal delay={100}>
              <p style={{ fontSize:'1.0625rem', fontWeight:300, color:'var(--ink2)', lineHeight:1.9, marginBottom:20 }}>
                I believe the best products aren't built from assumptions — they're built from <strong style={{ color:'var(--ink)', fontWeight:500 }}>deep understanding of real human behavior.</strong> I work at the intersection of research rigor and product strategy, helping teams move from gut feeling to grounded decisions.
              </p>
              <p style={{ fontSize:'1.0625rem', fontWeight:300, color:'var(--ink2)', lineHeight:1.9, marginBottom:40 }}>
                Whether I'm running in-depth interviews, synthesizing usability sessions, or building research frameworks that align cross-functional teams — I bring <strong style={{ color:'var(--ink)', fontWeight:500 }}>clarity, structure, and genuine human empathy</strong> to every project.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16 }} className="pillars-grid-resp">
                {[
                  { t:'Behavioral Understanding', d:'I study how users think, not just what they say — mapping mental models to reveal real decision-making.' },
                  { t:'Strategic Translation', d:'I turn raw findings into decisions that product teams can act on with clarity and confidence.' },
                  { t:'Stakeholder Alignment', d:'I build shared understanding across product, design, and business — making research a true strategic asset.' },
                  { t:'Research Systems', d:'I design scalable frameworks that embed user insight into every stage of the product development cycle.' },
                ].map(({ t, d }) => (
                  <div key={t} style={{ padding:24, borderRadius:14, background:'var(--cream)', border:'1px solid var(--border)', transition:'border-color .25s, transform .25s, box-shadow .25s', cursor:'default' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.cssText += ';border-color:rgba(193,125,82,.3);transform:translateY(-3px);box-shadow:0 12px 36px rgba(43,37,32,.06)' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.cssText = (e.currentTarget as HTMLElement).style.cssText.replace(/;border-color:[^;]+|;transform:[^;]+|;box-shadow:[^;]+/g,'') }}>
                    <div className="font-lora" style={{ fontSize:'1rem', fontWeight:500, color:'var(--ink)', marginBottom:6 }}>{t}</div>
                    <div style={{ fontSize:'.8125rem', fontWeight:300, color:'var(--ink3)', lineHeight:1.65 }}>{d}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── MY WORK ─── */}
      <section id="my-work" style={{ background:'var(--sand2)', padding:'100px 10%', borderTop:'1px solid var(--border)' }}>
        <Reveal>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom:56, flexWrap:'wrap', gap:24, maxWidth:1200, margin:'0 auto 56px' }}>
            <div>
              <div style={{ fontSize:'.75rem', fontWeight:600, letterSpacing:'.12em', textTransform:'uppercase', color:'var(--terra)', marginBottom:16, display:'flex', alignItems:'center', gap:8 }}>
                <span style={{ width:20, height:1.5, background:'var(--terra)', borderRadius:2, display:'block' }} /> Selected Work
              </div>
              <h2 className="font-lora" style={{ fontSize:'clamp(2.25rem,4vw,3.5rem)', fontWeight:500, lineHeight:1.1, letterSpacing:'-.02em', color:'var(--ink)' }}>
                Research that<br /><em style={{ color:'var(--terra)' }}>drives decisions</em>
              </h2>
            </div>
            <p style={{ fontSize:'1rem', color:'var(--ink3)', maxWidth:340, fontWeight:300, lineHeight:1.75 }}>Three case studies showing end-to-end research that shaped product strategy and user outcomes.</p>
          </div>
        </Reveal>

        <div style={{ display:'flex', flexDirection:'column', gap:24, maxWidth:1200, margin:'0 auto' }}>
          {cases.map((c, i) => (
            <Reveal key={c.slug} delay={i * 100}>
              <div style={{ background:'var(--cream)', border:'1px solid var(--border)', borderRadius:14, display:'grid', gridTemplateColumns:'280px 1fr', overflow:'hidden', transition:'border-color .3s, transform .3s, box-shadow .3s', cursor:'pointer' }}
                className="case-card-resp"
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.cssText += ';border-color:rgba(193,125,82,.25);transform:translateY(-3px);box-shadow:0 16px 48px rgba(43,37,32,.08)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ''; (e.currentTarget as HTMLElement).style.borderColor = ''; (e.currentTarget as HTMLElement).style.boxShadow = '' }}>
                <div style={{ borderRight:'1px solid var(--border)', padding:'36px 28px', display:'flex', flexDirection:'column', justifyContent:'space-between' }}
                  className="card-left-resp">
                  <div className="font-lora" style={{ fontSize:'3rem', fontWeight:400, color:'rgba(193,125,82,.2)', lineHeight:1 }}>{c.num}</div>
                  <div>
                    <div style={{ fontSize:'.6875rem', fontWeight:600, letterSpacing:'.12em', textTransform:'uppercase', color:'var(--terra)', marginBottom:8 }}>{c.industry}</div>
                    <h3 className="font-lora" style={{ fontSize:'1.1875rem', fontWeight:500, color:'var(--ink)', lineHeight:1.35, marginBottom:14, letterSpacing:'-.01em' }}>
                      {c.title}<em style={{ color:'var(--terra)' }}>{c.titleItalic}</em>
                    </h3>
                    <div style={{ display:'flex', flexWrap:'wrap', gap:6 }}>
                      {c.methods.slice(0,3).map(m => (
                        <span key={m.title} style={{ fontSize:'.6875rem', fontWeight:600, letterSpacing:'.07em', textTransform:'uppercase', padding:'4px 10px', borderRadius:100, background:'var(--sand2)', border:'1px solid var(--border)', color:'var(--ink3)' }}>{m.title}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div style={{ padding:'36px 36px' }}>
                  <div style={{ fontSize:'.6875rem', fontWeight:600, letterSpacing:'.12em', textTransform:'uppercase', color:'var(--ink4)', marginBottom:8 }}>Research Goal</div>
                  <p style={{ fontSize:'1rem', color:'var(--ink2)', lineHeight:1.7, fontWeight:300, marginBottom:24, paddingBottom:24, borderBottom:'1px solid var(--border)' }}>{c.processSteps[0].desc.substring(0,160)}…</p>
                  <div style={{ padding:'14px 18px', borderLeft:'3px solid var(--terra)', background:'rgba(193,125,82,.05)', borderRadius:'0 10px 10px 0', marginBottom:24 }}>
                    <p className="font-lora" style={{ fontStyle:'italic', fontSize:'.9375rem', color:'var(--ink2)', lineHeight:1.7 }}>"{c.findings[0].title}"</p>
                  </div>
                  <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', paddingTop:16, borderTop:'1px solid var(--border)' }}>
                    <div style={{ fontSize:'.875rem', color:'var(--ink3)' }}>Impact: <strong style={{ color:'var(--ink)', fontWeight:600 }}>{c.impact[0].num} {c.impact[0].label.toLowerCase()}</strong></div>
                    <Link href={`/case/${c.slug}`} style={{ display:'inline-flex', alignItems:'center', gap:6, fontSize:'.8125rem', fontWeight:600, letterSpacing:'.06em', textTransform:'uppercase', color:'var(--terra)', textDecoration:'none', transition:'gap .2s' }}>
                      View Case Study <Arrow />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact-me" style={{ background:'var(--cream)', padding:'100px 10%', borderTop:'1px solid var(--border)' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:100, maxWidth:1200, margin:'0 auto', alignItems:'start' }}
          className="contact-grid-resp">
          <Reveal>
            <div style={{ fontSize:'.75rem', fontWeight:600, letterSpacing:'.12em', textTransform:'uppercase', color:'var(--terra)', marginBottom:16, display:'flex', alignItems:'center', gap:8 }}>
              <span style={{ width:20, height:1.5, background:'var(--terra)', borderRadius:2, display:'block' }} /> Get In Touch
            </div>
            <h2 className="font-lora" style={{ fontSize:'clamp(2rem,3.2vw,3rem)', fontWeight:500, lineHeight:1.2, letterSpacing:'-.02em', color:'var(--ink)', marginBottom:20 }}>
              Let's build<br />something<br /><em style={{ color:'var(--terra)' }}>people love.</em>
            </h2>
            <p style={{ fontSize:'1.0625rem', fontWeight:300, color:'var(--ink3)', lineHeight:1.8, marginBottom:36, maxWidth:400 }}>
              Whether you have a research challenge, a project to collaborate on, or simply want to talk about users and product — I'd genuinely love to hear from you.
            </p>
            <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
              {[
                { label:'Email', value:'your@email.com', href:'mailto:your@email.com' },
                { label:'LinkedIn', value:'linkedin.com/in/yourprofile', href:'https://linkedin.com/in/yourprofile' },
              ].map(({ label, value, href }) => (
                <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined}
                  style={{ display:'flex', alignItems:'center', gap:16, padding:'18px 20px', borderRadius:14, border:'1px solid var(--border)', textDecoration:'none', background:'var(--sand)', transition:'border-color .2s, transform .2s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor='rgba(193,125,82,.4)'; (e.currentTarget as HTMLElement).style.transform='translateX(5px)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor=''; (e.currentTarget as HTMLElement).style.transform='' }}>
                  <div style={{ width:42, height:42, borderRadius:10, background:'rgba(193,125,82,.1)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                    <svg style={{ width:20, height:20, fill:'var(--terra)' }} viewBox="0 0 24 24">
                      {label === 'Email' ? <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/> : <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>}
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize:'.6875rem', fontWeight:600, letterSpacing:'.1em', textTransform:'uppercase', color:'var(--ink4)', marginBottom:2 }}>{label}</div>
                    <div style={{ fontSize:'.9375rem', color:'var(--ink)' }}>{value}</div>
                  </div>
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={150}>
            <form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', gap:16 }}>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }} className="form-row-resp">
                <FormField label="Your Name" placeholder="Jane Smith" type="text" />
                <FormField label="Company" placeholder="Acme Inc." type="text" />
              </div>
              <FormField label="Email Address" placeholder="jane@acme.com" type="email" />
              <FormField label="What brings you here?" placeholder="Research partnership, collaboration…" type="text" />
              <div style={{ display:'flex', flexDirection:'column', gap:6 }}>
                <label style={{ fontSize:'.6875rem', fontWeight:600, letterSpacing:'.1em', textTransform:'uppercase', color:'var(--ink3)' }}>Message</label>
                <textarea placeholder="Tell me about your project or research challenge…" rows={5}
                  style={{ background:'var(--sand)', border:'1.5px solid var(--border)', borderRadius:10, padding:'13px 16px', color:'var(--ink)', fontFamily:'inherit', fontSize:'.9375rem', fontWeight:300, outline:'none', resize:'none', width:'100%', transition:'border-color .2s' }}
                  onFocus={e => e.currentTarget.style.borderColor='rgba(193,125,82,.5)'}
                  onBlur={e => e.currentTarget.style.borderColor=''} />
              </div>
              <button type="submit"
                style={{ display:'inline-flex', alignItems:'center', justifyContent:'center', gap:10, background: submitted ? 'var(--ink2)' : 'var(--terra)', color:'var(--cream)', padding:'15px 32px', borderRadius:100, fontFamily:'inherit', fontSize:'.875rem', fontWeight:600, border:'none', cursor:'pointer', transition:'background .2s, transform .2s', marginTop:4 }}
                onMouseEnter={e => !submitted && ((e.currentTarget as HTMLElement).style.transform='translateY(-2px)')}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform=''}>
                {submitted ? '✓ Sent — I\'ll be in touch soon' : <>Send Message <svg style={{ width:16, height:16, fill:'currentColor' }} viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg></>}
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer style={{ background:'var(--sand3)', borderTop:'1px solid var(--border)', padding:'32px 10%', display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:16 }}>
        <div className="font-lora" style={{ fontSize:'1rem', fontWeight:500, color:'var(--ink3)' }}>
          Abdullah <em style={{ color:'var(--terra)' }}>AlJuhani</em> · UX Researcher
        </div>
        <div style={{ fontSize:'.8125rem', color:'var(--ink4)' }}>© 2025 · Made with care</div>
        <div style={{ display:'flex', gap:24 }}>
          {[['#who-i-am','Who I Am'],['#my-work','My Work'],['#contact-me','Contact']].map(([href,label]) => (
            <a key={href} href={href} style={{ fontSize:'.75rem', fontWeight:600, letterSpacing:'.08em', textTransform:'uppercase', color:'var(--ink4)', textDecoration:'none', transition:'color .2s' }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color='var(--terra)'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color=''}>{label}</a>
          ))}
        </div>
      </footer>

      <style>{`
        @media(max-width:1024px){
          .hero-right-col{display:none}
          .about-grid-resp{grid-template-columns:1fr!important;gap:40px!important}
          .contact-grid-resp{grid-template-columns:1fr!important;gap:56px!important}
          .case-card-resp{grid-template-columns:1fr!important}
          .card-left-resp{border-right:none!important;border-bottom:1px solid var(--border)}
          .pillars-grid-resp{grid-template-columns:1fr!important}
          .form-row-resp{grid-template-columns:1fr!important}
        }
        @media(max-width:720px){
          .hero-left-col{padding:10% 5% 8%!important}
        }
      `}</style>
    </>
  )
}

function Arrow() {
  return <svg style={{ width:14, height:14, fill:'none', stroke:'currentColor', strokeWidth:1.8, strokeLinecap:'round', strokeLinejoin:'round' }} viewBox="0 0 14 14"><path d="M2 7h10M7 2l5 5-5 5"/></svg>
}

function FormField({ label, placeholder, type }: { label: string; placeholder: string; type: string }) {
  return (
    <div style={{ display:'flex', flexDirection:'column', gap:6 }}>
      <label style={{ fontSize:'.6875rem', fontWeight:600, letterSpacing:'.1em', textTransform:'uppercase', color:'var(--ink3)' }}>{label}</label>
      <input type={type} placeholder={placeholder}
        style={{ background:'var(--sand)', border:'1.5px solid var(--border)', borderRadius:10, padding:'13px 16px', color:'var(--ink)', fontFamily:'inherit', fontSize:'.9375rem', fontWeight:300, outline:'none', width:'100%', transition:'border-color .2s' }}
        onFocus={e => e.currentTarget.style.borderColor='rgba(193,125,82,.5)'}
        onBlur={e => e.currentTarget.style.borderColor=''} />
    </div>
  )
}
