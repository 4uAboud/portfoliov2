'use client'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { useEffect, useRef } from 'react'
import { cases, type AffinityCluster, type Persona } from '../../data/cases'
import Nav from '../../components/Nav'

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add('visible') }, { threshold: 0.07, rootMargin: '0px 0px -30px 0px' })
    obs.observe(el); return () => obs.disconnect()
  }, [])
  return <div ref={ref} className="reveal" style={{ transitionDelay: `${delay}ms` }}>{children}</div>
}

const noteClass: Record<string, string[]> = {
  red:   ['note-red','note-red-lt','note-red','note-red-lt'],
  blue:  ['note-blue','note-blue-lt','note-blue','note-blue-lt'],
  green: ['note-green','note-green-lt','note-green','note-green-lt'],
  amber: ['note-amber','note-amber-lt','note-amber','note-amber-lt'],
}
const clusterBg: Record<string, string> = {
  red:   'rgba(212,84,84,.2)', blue: 'rgba(84,130,212,.2)',
  green: 'rgba(84,180,120,.2)', amber: 'rgba(212,170,84,.2)',
}
const clusterColor: Record<string, string> = {
  red:'#e8a0a0', blue:'#a0bcf0', green:'#a0d4b4', amber:'#e8d0a0',
}

function PersonaAvatar({ p }: { p: Persona }) {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" style={{ width:'100%', height:'100%' }}>
      <rect width="200" height="140" fill={p.bgColor}/>
      <circle cx="100" cy="46" r="28" fill={p.avatarColor}/>
      <ellipse cx="100" cy="118" rx="44" ry="32" fill={p.avatarColor}/>
      <circle cx="100" cy="46" r="22" fill={p.skinColor}/>
      <circle cx="92" cy="42" r="3" fill={p.eyeColor}/>
      <circle cx="108" cy="42" r="3" fill={p.eyeColor}/>
      <path d="M92 55 Q100 61 108 55" stroke={p.eyeColor} strokeWidth="2" fill="none" strokeLinecap="round"/>
    </svg>
  )
}

function AffinityBoard({ title, clusters }: { title: string; clusters: AffinityCluster[] }) {
  return (
    <div style={{ margin:'32px 0', maxWidth:720 }}>
      <div style={{ fontSize:'.6875rem', fontWeight:700, letterSpacing:'.14em', textTransform:'uppercase', color:'var(--ink4)', marginBottom:14 }}>Affinity Mapping — Synthesis Session</div>
      <div className="affinity-board">
        <div className="affinity-board-bg" />
        <div style={{ fontSize:'.6875rem', fontWeight:600, letterSpacing:'.1em', textTransform:'uppercase', color:'rgba(255,255,255,.25)', marginBottom:20 }}>{title}</div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:12 }}>
          {clusters.map((cl, ci) => (
            <div key={ci} style={{ display:'flex', flexDirection:'column', gap:6 }}>
              <div style={{ fontSize:'.625rem', fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', padding:'5px 8px', borderRadius:5, textAlign:'center', marginBottom:4, background:clusterBg[cl.color], color:clusterColor[cl.color] }}>{cl.label}</div>
              {cl.notes.map((note, ni) => (
                <div key={ni} className={noteClass[cl.color][ni % 2 === 0 ? 0 : 1]}>{note}</div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function PersonaRow({ personas }: { personas: Persona[] }) {
  return (
    <div style={{ margin:'32px 0', maxWidth:720 }}>
      <div style={{ fontSize:'.6875rem', fontWeight:700, letterSpacing:'.14em', textTransform:'uppercase', color:'var(--ink4)', marginBottom:14 }}>Research Participants — Composite Personas</div>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:16 }} className="personas-grid-resp">
        {personas.map((p) => (
          <div key={p.name} className="persona-card" style={{ background:'var(--cream)', border:'1px solid var(--border)', borderRadius:14, overflow:'hidden' }}>
            <div style={{ height:140, overflow:'hidden' }}><PersonaAvatar p={p} /></div>
            <div style={{ padding:16 }}>
              <div className="font-lora" style={{ fontSize:'1rem', fontWeight:500, color:'var(--ink)', marginBottom:2 }}>{p.name}</div>
              <div style={{ fontSize:'.75rem', fontWeight:600, letterSpacing:'.08em', textTransform:'uppercase', color:'var(--terra)', marginBottom:10 }}>{p.role}</div>
              <div style={{ fontSize:'.8125rem', fontStyle:'italic', color:'var(--ink3)', lineHeight:1.6, borderLeft:'2px solid var(--terra-bdr)', paddingLeft:10, marginBottom:10 }}>{p.quote}</div>
              <div style={{ display:'flex', flexWrap:'wrap', gap:5 }}>
                {p.tags.map(tag => (
                  <span key={tag} style={{ fontSize:'.625rem', fontWeight:600, letterSpacing:'.07em', textTransform:'uppercase', padding:'3px 8px', borderRadius:100, background:'var(--sand2)', border:'1px solid var(--border)', color:'var(--ink3)' }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Callout({ text }: { text: string }) {
  return (
    <div style={{ padding:'22px 26px', borderLeft:'3px solid var(--terra)', background:'var(--terra-lt)', borderRadius:'0 12px 12px 0', margin:'28px 0', maxWidth:720 }}>
      <p className="font-lora" style={{ fontStyle:'italic', fontSize:'1rem', color:'var(--ink2)', lineHeight:1.75 }}>{text}</p>
    </div>
  )
}

function Divider() {
  return <div style={{ width:'100%', height:1, background:'var(--border)', margin:'48px 0' }} />
}

export default function CasePage({ params }: { params: { slug: string } }) {
  const cs = cases.find(c => c.slug === params.slug)
  if (!cs) notFound()

  return (
    <>
      <style>{`
        :root { --terra-lt: rgba(193,125,82,.12); --terra-bdr: rgba(193,125,82,.28); }
        .prose-p { font-size:1rem; font-weight:300; color:var(--ink2); line-height:1.9; max-width:720px; margin-bottom:16px; }
        .prose-p strong { color:var(--ink); font-weight:500; }
        .step-item { display:flex; gap:24px; padding:24px 0; border-bottom:1px solid var(--border); max-width:720px; }
        .step-item:first-child { border-top:1px solid var(--border); }
        .method-card { background:var(--cream); border:1px solid var(--border); border-radius:14px; padding:22px; transition:border-color .2s; }
        .method-card:hover { border-color:var(--terra-bdr); }
        .finding-card { background:var(--cream); border:1px solid var(--border); border-radius:14px; padding:24px 28px; transition:border-color .2s, box-shadow .2s; max-width:720px; margin-bottom:16px; }
        .finding-card:hover { border-color:var(--terra-bdr); box-shadow:0 8px 28px rgba(43,37,32,.06); }
        .reco-card { display:flex; gap:20px; background:var(--cream); border:1px solid var(--border); border-radius:14px; padding:22px 24px; transition:border-color .2s; max-width:720px; margin-bottom:14px; }
        .reco-card:hover { border-color:var(--terra-bdr); }
        @media(max-width:768px) {
          .cs-meta-strip { grid-template-columns:1fr 1fr!important; }
          .cs-meta-item + .cs-meta-item { border-left:none!important; border-top:1px solid var(--border); padding-left:0!important; padding-top:20px!important; }
          .methods-grid-resp { grid-template-columns:1fr!important; }
          .affinity-board > div:last-child { grid-template-columns:1fr 1fr!important; }
          .personas-grid-resp { grid-template-columns:1fr!important; }
          .impact-grid { grid-template-columns:1fr 1fr!important; }
          .cs-body-inner { padding:48px 5%!important; }
          .cs-hero-inner { padding:56px 5% 0!important; }
        }
      `}</style>

      <Nav />

      {/* CASE NAV */}
      <div style={{ position:'sticky', top:64, zIndex:99, height:52, padding:'0 6%', display:'flex', alignItems:'center', justifyContent:'space-between', background:'rgba(247,243,238,.95)', backdropFilter:'blur(16px)', borderBottom:'1px solid var(--border)' }}>
        <Link href="/#my-work" style={{ display:'inline-flex', alignItems:'center', gap:8, fontSize:'.8125rem', fontWeight:600, color:'var(--ink3)', textDecoration:'none' }}
          onMouseEnter={e => (e.currentTarget as HTMLElement).style.color='var(--terra)'}
          onMouseLeave={e => (e.currentTarget as HTMLElement).style.color=''}>
          <BackArrow /> Portfolio
        </Link>
        <span style={{ fontSize:'.75rem', fontWeight:600, letterSpacing:'.1em', textTransform:'uppercase', color:'var(--ink4)' }}>Case Study {cs.num} / 03</span>
        {cs.nextSlug ? (
          <Link href={`/case/${cs.nextSlug}`} style={{ display:'inline-flex', alignItems:'center', gap:6, fontSize:'.8125rem', fontWeight:600, color:'var(--ink3)', textDecoration:'none' }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.color='var(--terra)'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.color=''}>
            Next Case <FwdArrow />
          </Link>
        ) : <span />}
      </div>

      {/* HERO */}
      <div style={{ padding:'72px 6% 0', background:'var(--cream)', borderBottom:'1px solid var(--border)' }} className="cs-hero-inner">
        <div style={{ maxWidth:1080, margin:'0 auto' }}>
          <div style={{ display:'inline-flex', alignItems:'center', gap:8, fontSize:'.75rem', fontWeight:600, letterSpacing:'.12em', textTransform:'uppercase', color:'var(--terra)', marginBottom:20 }}>
            <span style={{ width:20, height:1.5, background:'var(--terra)', borderRadius:2, display:'block' }} /> Case Study {cs.num}
          </div>
          <h1 className="font-lora" style={{ fontSize:'clamp(2rem,4vw,3.25rem)', fontWeight:500, lineHeight:1.15, letterSpacing:'-.02em', color:'var(--ink)', marginBottom:20, maxWidth:800 }}>
            {cs.title}<em style={{ color:'var(--terra)' }}>{cs.titleItalic}</em>
          </h1>
          <p style={{ fontSize:'1.125rem', fontWeight:300, color:'var(--ink3)', lineHeight:1.8, maxWidth:640, marginBottom:44 }}>{cs.summary}</p>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(5,1fr)', borderTop:'1px solid var(--border)', paddingTop:0 }} className="cs-meta-strip">
            {cs.meta.map((m, i) => (
              <div key={m.label} className="cs-meta-item" style={{ padding:'24px 0', borderLeft: i>0 ? '1px solid var(--border)' : 'none', paddingLeft: i>0 ? 24 : 0 }}>
                <div style={{ fontSize:'.6875rem', fontWeight:600, letterSpacing:'.12em', textTransform:'uppercase', color:'var(--ink4)', marginBottom:6 }}>{m.label}</div>
                <div style={{ fontSize:'.9375rem', fontWeight:500, color:'var(--ink)', lineHeight:1.4 }}>{m.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BODY */}
      <div style={{ maxWidth:1080, margin:'0 auto', padding:'72px 6%' }} className="cs-body-inner">

        {/* 01 OVERVIEW */}
        <Reveal>
          <div style={{ marginBottom:72 }}>
            <div style={{ fontSize:'.6875rem', fontWeight:700, letterSpacing:'.16em', textTransform:'uppercase', color:'var(--terra)', marginBottom:10 }}>01 — Overview</div>
            <h2 className="font-lora" style={{ fontSize:'1.75rem', fontWeight:500, letterSpacing:'-.02em', color:'var(--ink)', marginBottom:24, lineHeight:1.25 }}>The Problem</h2>
            {cs.overviewBody.map((p, i) => <p key={i} className="prose-p" dangerouslySetInnerHTML={{ __html: p.replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>') }} />)}
            <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:16, margin:'32px 0', maxWidth:720 }} className="impact-grid">
              {cs.stats.map(s => (
                <div key={s.label} style={{ background:'var(--cream)', border:'1px solid var(--border)', borderRadius:14, padding:'24px 20px', textAlign:'center', transition:'border-color .2s, transform .2s', cursor:'default' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor='var(--terra-bdr)'; (e.currentTarget as HTMLElement).style.transform='translateY(-2px)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor=''; (e.currentTarget as HTMLElement).style.transform='' }}>
                  <div className="font-lora" style={{ fontSize:'2.25rem', fontWeight:500, color:'var(--terra)', lineHeight:1, marginBottom:6 }}>{s.num}</div>
                  <div style={{ fontSize:'.75rem', fontWeight:600, letterSpacing:'.08em', textTransform:'uppercase', color:'var(--ink4)', lineHeight:1.4 }}>{s.label}</div>
                </div>
              ))}
            </div>
            <Callout text={cs.overviewCallout} />
          </div>
        </Reveal>

        <Divider />

        {/* 02 PROCESS */}
        <Reveal>
          <div style={{ marginBottom:72 }}>
            <div style={{ fontSize:'.6875rem', fontWeight:700, letterSpacing:'.16em', textTransform:'uppercase', color:'var(--terra)', marginBottom:10 }}>02 — Research Process</div>
            <h2 className="font-lora" style={{ fontSize:'1.75rem', fontWeight:500, letterSpacing:'-.02em', color:'var(--ink)', marginBottom:24, lineHeight:1.25 }}>
              How I <em style={{ color:'var(--terra)' }}>approached</em> it
            </h2>
            <p className="prose-p">I designed a mixed-method approach to uncover the real drivers of user behavior — combining observational, attitudinal, and evaluative research methods.</p>
            <div>
              {cs.processSteps.map((step, i) => (
                <div key={i} className="step-item">
                  <div className="font-lora" style={{ fontSize:'1.5rem', fontWeight:400, color:'rgba(193,125,82,.3)', minWidth:36, paddingTop:2 }}>{String(i+1).padStart(2,'0')}</div>
                  <div>
                    <div style={{ fontSize:'.9375rem', fontWeight:600, color:'var(--ink)', marginBottom:6 }}>{step.title}</div>
                    <div style={{ fontSize:'.875rem', fontWeight:300, color:'var(--ink3)', lineHeight:1.7 }}>{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16, margin:'28px 0', maxWidth:720 }} className="methods-grid-resp">
              {cs.methods.map(m => (
                <div key={m.title} className="method-card">
                  <div style={{ width:36, height:36, borderRadius:8, background:'var(--terra-lt)', display:'flex', alignItems:'center', justifyContent:'center', marginBottom:12 }}>
                    <MethodIcon name={m.icon} />
                  </div>
                  <div className="font-lora" style={{ fontSize:'1rem', fontWeight:500, color:'var(--ink)', marginBottom:6 }}>{m.title}</div>
                  <div style={{ fontSize:'.8125rem', fontWeight:300, color:'var(--ink3)', lineHeight:1.65 }}>{m.desc}</div>
                </div>
              ))}
            </div>
            <AffinityBoard title={cs.affinityTitle} clusters={cs.affinityClusters} />
            <PersonaRow personas={cs.personas} />
          </div>
        </Reveal>

        <Divider />

        {/* 03 FINDINGS */}
        <Reveal>
          <div style={{ marginBottom:72 }}>
            <div style={{ fontSize:'.6875rem', fontWeight:700, letterSpacing:'.16em', textTransform:'uppercase', color:'var(--terra)', marginBottom:10 }}>03 — Key Findings</div>
            <h2 className="font-lora" style={{ fontSize:'1.75rem', fontWeight:500, letterSpacing:'-.02em', color:'var(--ink)', marginBottom:24, lineHeight:1.25 }}>
              What we <em style={{ color:'var(--terra)' }}>actually</em> discovered
            </h2>
            <p className="prose-p">{cs.findingsIntro}</p>
            {cs.findings.map((f, i) => (
              <div key={i} className="finding-card">
                <div style={{ display:'flex', alignItems:'flex-start', gap:16, marginBottom:12 }}>
                  <div style={{ minWidth:28, height:28, borderRadius:'50%', background:'var(--terra-lt)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'.75rem', fontWeight:700, color:'var(--terra)', flexShrink:0, marginTop:2 }}>{i+1}</div>
                  <div className="font-lora" style={{ fontSize:'1.0625rem', fontWeight:500, color:'var(--ink)', lineHeight:1.3 }}>{f.title}</div>
                </div>
                <div style={{ fontSize:'.875rem', fontWeight:300, color:'var(--ink3)', lineHeight:1.75, paddingLeft:44, marginBottom:10 }}>{f.body}</div>
                <div style={{ marginLeft:44, display:'inline-flex', padding:'4px 12px', borderRadius:100, background:'var(--sand2)', border:'1px solid var(--border)', fontSize:'.6875rem', fontWeight:600, letterSpacing:'.08em', textTransform:'uppercase', color:'var(--ink3)' }}>{f.tag}</div>
              </div>
            ))}
            <div style={{ margin:'36px 0', padding:'32px 36px', background:'var(--sand2)', borderRadius:14, maxWidth:720 }}>
              <blockquote className="font-lora" style={{ fontSize:'1.25rem', fontStyle:'italic', color:'var(--ink)', lineHeight:1.65, marginBottom:14 }}>{cs.bigQuote}</blockquote>
              <cite style={{ fontSize:'.8125rem', fontWeight:600, letterSpacing:'.06em', textTransform:'uppercase', color:'var(--ink4)', fontStyle:'normal' }}>{cs.bigQuoteCite}</cite>
            </div>
          </div>
        </Reveal>

        <Divider />

        {/* 04 RECOS */}
        <Reveal>
          <div>
            <div style={{ fontSize:'.6875rem', fontWeight:700, letterSpacing:'.16em', textTransform:'uppercase', color:'var(--terra)', marginBottom:10 }}>04 — Recommendations & Impact</div>
            <h2 className="font-lora" style={{ fontSize:'1.75rem', fontWeight:500, letterSpacing:'-.02em', color:'var(--ink)', marginBottom:24, lineHeight:1.25 }}>
              From insight to <em style={{ color:'var(--terra)' }}>action</em>
            </h2>
            <p className="prose-p">{cs.recoIntro}</p>
            {cs.recos.map((r, i) => (
              <div key={i} className="reco-card">
                <div style={{ width:40, height:40, borderRadius:10, background:'var(--terra-lt)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                  <RecoIcon index={i} />
                </div>
                <div>
                  <div style={{ fontSize:'.6875rem', fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'var(--terra)', marginBottom:4 }}>{r.priority}</div>
                  <div style={{ fontSize:'.9375rem', fontWeight:600, color:'var(--ink)', marginBottom:6 }}>{r.title}</div>
                  <div style={{ fontSize:'.8125rem', fontWeight:300, color:'var(--ink3)', lineHeight:1.65 }}>{r.desc}</div>
                </div>
              </div>
            ))}
            <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:16, margin:'32px 0', maxWidth:720 }} className="impact-grid">
              {cs.impact.map(imp => (
                <div key={imp.label} style={{ padding:'28px 24px', borderRadius:14, background:'var(--ink)', textAlign:'center' }}>
                  <div className="font-lora" style={{ fontSize:'2.5rem', fontWeight:500, color:'rgba(193,125,82,.7)', lineHeight:1, marginBottom:8 }}>{imp.num}</div>
                  <div style={{ fontSize:'.75rem', fontWeight:600, letterSpacing:'.08em', textTransform:'uppercase', color:'rgba(247,243,238,.45)', lineHeight:1.45 }}>{imp.label}</div>
                </div>
              ))}
            </div>
            {cs.impactCallout && <Callout text={cs.impactCallout} />}
          </div>
        </Reveal>
      </div>

      {/* FOOTER NAV */}
      <div style={{ background:'var(--cream)', borderTop:'1px solid var(--border)', padding:'44px 6%' }}>
        <div style={{ maxWidth:1080, margin:'0 auto', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:20 }}>
          {cs.prevSlug ? (
            <Link href={`/case/${cs.prevSlug}`} className="btn-outline">
              <BackArrow /> Previous: {cs.prevLabel}
            </Link>
          ) : (
            <Link href="/#my-work" className="btn-outline"><BackArrow /> Back to Portfolio</Link>
          )}
          {cs.nextSlug ? (
            <Link href={`/case/${cs.nextSlug}`} className="btn-terra">
              Next: {cs.nextLabel} <FwdArrow />
            </Link>
          ) : (
            <Link href="/#my-work" className="btn-terra">Back to Portfolio <FwdArrow /></Link>
          )}
        </div>
      </div>
    </>
  )
}

function BackArrow() {
  return <svg style={{ width:14,height:14,fill:'none',stroke:'currentColor',strokeWidth:2,strokeLinecap:'round',strokeLinejoin:'round' }} viewBox="0 0 14 14"><path d="M12 7H2M6 3L2 7l4 4"/></svg>
}
function FwdArrow() {
  return <svg style={{ width:14,height:14,fill:'none',stroke:'currentColor',strokeWidth:2,strokeLinecap:'round',strokeLinejoin:'round' }} viewBox="0 0 14 14"><path d="M2 7h10M8 3l4 4-4 4"/></svg>
}
function MethodIcon({ name }: { name: string }) {
  const paths: Record<string,string> = {
    eye: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z",
    chat: "M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z",
    map: "M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 8H3V9h9v2zm0-4H3V5h9v2z",
    check: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z",
    calendar: "M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z",
    star: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z",
    clock: "M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z",
    shield: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z",
    doc: "M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z",
    user: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z",
  }
  return <svg style={{ width:18,height:18,fill:'var(--terra)' }} viewBox="0 0 24 24"><path d={paths[name] ?? paths.check}/></svg>
}
function RecoIcon({ index }: { index: number }) {
  const paths = ["M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z","M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z","M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z","M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"]
  return <svg style={{ width:20,height:20,fill:'var(--terra)' }} viewBox="0 0 24 24"><path d={paths[index % paths.length]}/></svg>
}
