import Link from 'next/link'

export default function NotFound() {
  return (
    <div style={{ minHeight:'100vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', background:'var(--sand)', textAlign:'center', padding:'0 5%' }}>
      <div style={{ fontFamily:'Lora, Georgia, serif', fontSize:'5rem', fontWeight:400, color:'rgba(193,125,82,.25)', lineHeight:1, marginBottom:16 }}>404</div>
      <h1 style={{ fontFamily:'Lora, Georgia, serif', fontSize:'2rem', fontWeight:500, color:'var(--ink)', marginBottom:12 }}>Page not found</h1>
      <p style={{ fontSize:'1rem', color:'var(--ink3)', marginBottom:36 }}>The page you're looking for doesn't exist.</p>
      <Link href="/" style={{ display:'inline-flex', alignItems:'center', gap:8, background:'var(--terra)', color:'var(--cream)', padding:'14px 28px', borderRadius:100, fontWeight:600, fontSize:'.875rem', textDecoration:'none' }}>
        Back to Portfolio
      </Link>
    </div>
  )
}
