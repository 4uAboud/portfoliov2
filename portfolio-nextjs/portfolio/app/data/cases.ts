export type Persona = {
  name: string
  role: string
  quote: string
  tags: string[]
  bgColor: string
  avatarColor: string
  skinColor: string
  eyeColor: string
}

export type AffinityCluster = {
  label: string
  color: 'red' | 'blue' | 'green' | 'amber'
  notes: string[]
}

export type CaseStudy = {
  slug: string
  num: string
  industry: string
  title: string
  titleItalic: string
  summary: string
  meta: { label: string; value: string }[]
  overviewBody: string[]
  stats: { num: string; label: string }[]
  overviewCallout: string
  processSteps: { title: string; desc: string }[]
  methods: { icon: string; title: string; desc: string }[]
  affinityTitle: string
  affinityClusters: AffinityCluster[]
  personas: Persona[]
  findingsIntro: string
  findings: { title: string; body: string; tag: string }[]
  bigQuote: string
  bigQuoteCite: string
  recoIntro: string
  recos: { priority: string; title: string; desc: string }[]
  impact: { num: string; label: string }[]
  impactCallout?: string
  prevSlug?: string
  prevLabel?: string
  nextSlug?: string
  nextLabel?: string
}

export const cases: CaseStudy[] = [
  {
    slug: 'saas-dashboard',
    num: '01',
    industry: 'SaaS · B2B Analytics',
    title: 'Redesigning Analytics for ',
    titleItalic: 'Data-Driven Teams',
    summary: 'A SaaS dashboard used by enterprise analyst teams showed alarming drop-off rates at the custom reporting layer. I led an end-to-end research engagement to uncover why — and what to do about it.',
    meta: [
      { label: 'Industry', value: 'SaaS · B2B Analytics' },
      { label: 'My Role', value: 'Lead UX Researcher' },
      { label: 'Timeline', value: '[X] Weeks' },
      { label: 'Participants', value: '[X] Analysts' },
      { label: 'Outcome', value: '[X]% Drop in Abandonment' },
    ],
    overviewBody: [
      'The product team at [Company Name] noticed a troubling pattern in their usage data: analysts were opening the custom report builder regularly, but [X]% never completed a report. They assumed it was a complexity problem — too many filters, a confusing UI, or a steep learning curve.',
      'They were about to commission a full redesign. Before spending six months rebuilding a product, they needed to understand what was actually wrong. That\'s where research came in.',
    ],
    stats: [
      { num: '[X]%', label: 'Report Abandonment Rate' },
      { num: '[X]', label: 'Avg. Steps Before Drop-Off' },
      { num: '[X]%', label: 'Users Who Never Returned' },
    ],
    overviewCallout: '"The data told us users were leaving. It couldn\'t tell us why. That gap — between what the analytics showed and what was actually happening — is exactly where research lives."',
    processSteps: [
      { title: 'Stakeholder Alignment & Hypothesis Mapping', desc: 'Facilitated a structured session with the PM, product designer, and data team to surface all existing assumptions about why users were dropping off. Created a hypothesis map to prioritize which to test first.' },
      { title: 'Contextual Inquiry — Analysts in Their Natural Environment', desc: 'Conducted [X] contextual inquiry sessions observing analysts using the dashboard in their actual work context. Rather than asking them to complete tasks, I watched them pursue their real goals — which surfaced behaviors that lab testing would have missed entirely.' },
      { title: 'Think-Aloud Usability Sessions', desc: 'Ran [X] moderated think-aloud sessions focused on the report builder flow. Participants were encouraged to narrate their reasoning — not just what they were doing, but why they paused, hesitated, or felt uncertain.' },
      { title: 'Journey Mapping & Affinity Synthesis', desc: 'Synthesized all sessions into a detailed journey map, then ran affinity diagramming workshops with the product team to collectively build understanding of the problem — not just hand over a report.' },
    ],
    methods: [
      { icon: 'eye', title: 'Contextual Inquiry', desc: 'Observed analysts in their actual work environment to capture real behavior — not performed or idealized task completion.' },
      { icon: 'chat', title: 'Think-Aloud Sessions', desc: 'Moderated protocol capturing in-the-moment reasoning, hesitation points, and unspoken doubts throughout the reporting flow.' },
      { icon: 'map', title: 'Journey Mapping', desc: 'End-to-end mapping of the analyst\'s reporting journey — from intent to output — surfacing friction points and abandonment triggers.' },
      { icon: 'check', title: 'Affinity Diagramming', desc: 'Collaborative synthesis workshop with product and design to cluster raw observations into themes — building shared ownership of the findings.' },
    ],
    affinityTitle: 'Clustered Observations · [X] Raw Notes → 4 Themes',
    affinityClusters: [
      { label: 'Data Trust', color: 'red', notes: ['"Numbers don\'t match what I expected"', '"I assumed I did something wrong"', '"Can\'t tell if filter is applied"', '"I just close it and use Excel"'] },
      { label: 'Filter Confusion', color: 'blue', notes: ['"Same filters, different numbers"', '"Which view is the right one?"', '"I saved the report but it changed"', '"Reset button does nothing obvious"'] },
      { label: 'Empty States', color: 'amber', notes: ['"Blank screen, no explanation"', '"Didn\'t know how to fix it"', '"Thought the page had crashed"', '"No way to go back easily"'] },
      { label: 'Workarounds', color: 'green', notes: ['"I have a specific order I use"', '"Never told anyone — just figured it out"', '"Saved config from a colleague"', '"Always double check in old tool"'] },
    ],
    personas: [
      { name: 'Sarah K.', role: 'Senior Data Analyst · 6 yrs', quote: '"I\'ve learned which filters to avoid. No one taught me — I just found out the hard way."', tags: ['Power User', 'Workaround Builder', 'Trust Issues'], bgColor: '#e8e0f4', avatarColor: '#9b82c9', skinColor: '#c4b4e4', eyeColor: '#6a4fa8' },
      { name: 'Marcus T.', role: 'BI Manager · 3 yrs', quote: '"When the numbers look wrong I don\'t have time to investigate. I just go back to the spreadsheet."', tags: ['High-Frequency User', 'Abandoner', 'Time-Pressured'], bgColor: '#e0ede8', avatarColor: '#6aab88', skinColor: '#a0ccb4', eyeColor: '#2d6a4a' },
      { name: 'Priya R.', role: 'Operations Analyst · 1 yr', quote: '"I never completed a report. I was always scared I\'d send wrong numbers to my manager."', tags: ['Low Confidence', 'New to Tool', 'Risk-Averse'], bgColor: '#faeee6', avatarColor: '#e09070', skinColor: '#f0b89a', eyeColor: '#8b3a20' },
    ],
    findingsIntro: 'The leading hypothesis — that the UI was too complex — turned out to be largely wrong. The real problem was more subtle, and more fixable.',
    findings: [
      { title: 'Users weren\'t confused — they were distrustful of the data', body: 'Analysts frequently encountered moments where filter combinations produced results that "felt wrong." Rather than investigate, most users quietly abandoned the report. They assumed the tool was broken, even when it wasn\'t. Trust in the output had collapsed.', tag: 'Data Trust Issue' },
      { title: 'Inconsistent filter behavior was the primary trigger', body: '[X] out of [X] participants encountered a specific pattern: applying the same filter combination across different views produced different result counts. In [X]% of cases, this was the exact moment of abandonment in the recorded sessions.', tag: 'UI Inconsistency' },
      { title: 'The error state gave users no path forward', body: 'When users encountered empty or unexpected results, the product offered no explanation or recovery path. Most interpreted a blank state as their own mistake rather than a product state to navigate through.', tag: 'Error Recovery Gap' },
      { title: 'Power users had developed invisible workarounds', body: 'The small percentage who regularly completed reports had developed undocumented workarounds — specific filter sequences and manual checks. These strategies were entirely self-discovered. The product had no mechanism for surfacing or scaling this tribal knowledge.', tag: 'Hidden Mental Models' },
    ],
    bigQuote: '"I just assumed I was doing something wrong. The numbers looked off, so I closed it and went back to the spreadsheet. I\'ve been doing that for months."',
    bigQuoteCite: '— Participant 04, Senior Data Analyst',
    recoIntro: 'Based on the research findings, I developed four strategic recommendations — each mapped to a specific finding, with a defined product owner, priority level, and measurable success metric.',
    recos: [
      { priority: 'Priority 1 — Immediate Fix', title: 'Resolve filter inconsistency across views', desc: 'Standardize filter logic so the same combination produces identical results across all dashboard views. Add a visible "filter state" indicator so users always know what\'s applied.' },
      { priority: 'Priority 2 — Short Term', title: 'Design honest, helpful empty states', desc: 'Replace blank result screens with contextual explanations: what the current filters are showing, why results might be empty, and clear actions to adjust or reset.' },
      { priority: 'Priority 3 — Medium Term', title: 'Surface power-user patterns as in-product guidance', desc: 'Document top analysts\' filter strategies and package them as contextual tips, "popular report templates," or onboarding nudges — giving all users access to discovered workarounds.' },
      { priority: 'Priority 4 — Strategic', title: 'Establish a continuous data-trust feedback loop', desc: 'Build a lightweight mechanism for analysts to flag results that "don\'t look right" — feeding that signal back to the data team and turning silent abandonment into a visible quality signal.' },
    ],
    impact: [
      { num: '[X]%', label: 'Reduction in Report Abandonment' },
      { num: '[X]%', label: 'Increase in Report Completion Rate' },
      { num: '[X]×', label: 'Faster Time to First Report' },
    ],
    nextSlug: 'wellness-onboarding',
    nextLabel: 'Wellness App Onboarding',
  },
  {
    slug: 'wellness-onboarding',
    num: '02',
    industry: 'Mobile App · Health & Wellness',
    title: 'Understanding Drop-Off in a ',
    titleItalic: 'Wellness App Onboarding Flow',
    summary: 'A mobile health and wellness app was losing [X]% of new users within their first 3 days. The analytics showed where users left — but not why. Research revealed emotional friction that the data simply couldn\'t see.',
    meta: [
      { label: 'Industry', value: 'Mobile App · Health' },
      { label: 'My Role', value: 'Lead UX Researcher' },
      { label: 'Timeline', value: '[X] Weeks' },
      { label: 'Participants', value: '[X] New Users' },
      { label: 'Outcome', value: '[X]% Day-3 Retention Lift' },
    ],
    overviewBody: [
      'The growth team at [Company Name] had a solid product and strong top-of-funnel numbers — but they were hemorrhaging new users in the first 72 hours. Day-3 retention sat at [X]%, well below the [X]% industry benchmark for wellness apps.',
      'The engineering team had already A/B tested shorter onboarding flows, progress indicators, and skip options. None of it moved the needle. The team was stuck because they were solving for cognitive friction — when the real problem was emotional.',
    ],
    stats: [
      { num: '[X]%', label: 'Day-3 Drop-Off Rate' },
      { num: '[X]', label: 'A/B Tests Run with No Result' },
      { num: '[X]%', label: 'Users Who Never Returned After Day 1' },
    ],
    overviewCallout: '"Every test we ran was optimizing the wrong variable. We were treating a trust problem like a UX complexity problem — and wondering why nothing worked."',
    processSteps: [
      { title: 'Diary Study — First 7 Days of App Use', desc: 'Recruited [X] new users who had downloaded the app within the past 48 hours. Participants submitted short daily diary entries capturing their emotional state, what felt off, and what they actually did in the app each day.' },
      { title: 'JTBD-Framed Depth Interviews', desc: 'Ran [X] in-depth interviews structured around the Jobs-to-Be-Done framework — exploring what motivated users to download the app, what progress they hoped to feel, and what caused the internal decision to stop engaging.' },
      { title: 'Emotional Mapping of the Onboarding Journey', desc: 'Compiled all diary entries and interview transcripts into a longitudinal emotional arc — plotting user sentiment at each onboarding step against actual drop-off data from analytics.' },
      { title: 'Moderated Usability Sessions for Validation', desc: 'Once the emotional themes were clear, ran [X] moderated sessions to validate specific interaction moments — confirming which exact screens were triggering the anxiety response identified in diaries.' },
    ],
    methods: [
      { icon: 'calendar', title: 'Diary Studies', desc: '7-day longitudinal study capturing evolving emotional responses and real usage patterns from new users in their natural context.' },
      { icon: 'chat', title: 'JTBD Interviews', desc: 'Depth interviews framed around progress and motivation — understanding what users were really hiring the app to do for them.' },
      { icon: 'star', title: 'Emotional Mapping', desc: 'Longitudinal emotional arc overlaid on product analytics — connecting user sentiment to the exact moments of drop-off.' },
      { icon: 'clock', title: 'Moderated Usability Sessions', desc: 'Targeted sessions to validate specific emotional trigger points identified in qualitative research — confirming which moments caused drop-off.' },
    ],
    affinityTitle: 'Clustered Observations · [X] Diary Entries → 4 Themes',
    affinityClusters: [
      { label: 'Surveillance Feeling', color: 'red', notes: ['"Why do they need my health data now?"', '"Felt like they were collecting info on me"', '"I hadn\'t even used it yet"', '"Too personal, too fast"'] },
      { label: 'Trust Signals Missing', color: 'amber', notes: ['"No explanation of why they need it"', '"I want to know what they\'ll do with it"', '"No option to skip or do later"', '"Felt like an app I\'d never heard of"'] },
      { label: 'Motivation Mismatch', color: 'blue', notes: ['"I wanted to feel healthier, not fill forms"', '"Just show me what the app does first"', '"I didn\'t know what I\'d get in return"', '"Felt like signing up for a gym"'] },
      { label: 'Positive Moments', color: 'green', notes: ['"The design looked clean and calming"', '"Once I got in — I really liked it"', '"Goal setting felt personal"', '"Day 2 felt much easier"'] },
    ],
    personas: [
      { name: 'Aisha M.', role: 'New User · Churned Day 1', quote: '"I really wanted to use it. But asking for my health data before I even saw what the app could do felt wrong."', tags: ['Privacy-Conscious', 'Early Churner', 'High Motivation'], bgColor: '#fce8e0', avatarColor: '#e07858', skinColor: '#f0a888', eyeColor: '#7a2810' },
      { name: 'James L.', role: 'Retained User · Day 7+', quote: '"I almost left too. I\'m glad I pushed through — but the app shouldn\'t rely on people pushing through."', tags: ['Hesitant Retainer', 'Tech-Savvy', 'Vocal Advocate'], bgColor: '#e4eef8', avatarColor: '#5880b8', skinColor: '#88aadc', eyeColor: '#1c3a70' },
      { name: 'Fatima K.', role: 'Day-3 Churner · Diary Participant', quote: '"I didn\'t dislike the app. I just never went back after day two. Nothing pulled me back in."', tags: ['Passive Disengager', 'Goal-Oriented', 'Low Friction Needed'], bgColor: '#eef4e8', avatarColor: '#70aa60', skinColor: '#a0cc90', eyeColor: '#2a5020' },
    ],
    findingsIntro: 'The research exposed something A/B tests had never been able to catch: the drop-off wasn\'t about interface complexity. It was about the emotional contract between the user and the product.',
    findings: [
      { title: 'Users felt surveilled before they felt supported', body: 'The data permission screen arrived at step 3 — before users had experienced any value from the product. [X] out of [X] diary participants described the same feeling: "I\'d only been in the app for two minutes and they were already asking for access to my health records."', tag: 'Trust Sequence Failure' },
      { title: 'Wellness is a vulnerable domain — users needed safety signals first', body: 'Health goals are personal and emotionally charged. Users weren\'t just evaluating a product — they were deciding whether this brand deserved access to intimate information about their bodies, habits, and struggles. The onboarding treated this as a checkbox moment. Users experienced it as a judgment.', tag: 'Emotional Domain Mismatch' },
      { title: 'Users who saw a value preview stayed — but none were shown one', body: 'During validation sessions, users shown a 30-second demo of what their personalized dashboard would look like before the data request were [X]× more likely to complete onboarding. The value proposition needed to come before the ask — not after it.', tag: 'Value-Before-Ask Principle' },
      { title: 'Users who churned didn\'t dislike the app — they felt unseen', body: 'A striking finding from the diary study: the majority of Day-1 churners described the app positively. "It looked good," "seemed well made," "probably works." What was missing wasn\'t product quality — it was a sense that the product understood them as a person with a specific goal.', tag: 'Personalization Gap' },
    ],
    bigQuote: '"It wasn\'t that I didn\'t trust the app. I just didn\'t trust it yet. And they asked me to trust them before I had any reason to."',
    bigQuoteCite: '— Diary Participant 07, Day 1 Entry',
    recoIntro: 'The recommendations centered on a single principle: earn trust before you ask for it.',
    recos: [
      { priority: 'Priority 1 — Immediate', title: 'Move the data permission request to after the first value moment', desc: 'Restructure onboarding so users experience a personalized insight or meaningful dashboard state before any data permission is requested. The ask should feel like a natural next step — not a toll gate.' },
      { priority: 'Priority 2 — Short Term', title: 'Add a "value preview" screen before any data collection', desc: 'Show users a 20–30 second animated preview of what their personalized experience will look like. Frame the upcoming questions as "helping us personalize this for you" — not "we need your data."' },
      { priority: 'Priority 3 — Medium Term', title: 'Rewrite the permission copy using safety language, not feature language', desc: 'The current copy leads with "to give you the best experience." Research showed users need to hear what won\'t happen to their data as much as what will. Reframe around control, privacy, and reversibility.' },
      { priority: 'Priority 4 — Strategic', title: 'Introduce goal-aware personalization from the first question', desc: 'Begin onboarding with an empathetic, open-ended goal question — "What are you hoping to feel in 30 days?" — rather than demographic and health metric collection. This shifts the frame from surveillance to support.' },
    ],
    impact: [
      { num: '[X]%', label: 'Improvement in Day-3 Retention' },
      { num: '[X]%', label: 'Reduction in Permission Screen Drop-Off' },
      { num: '[X]×', label: 'Increase in Onboarding Completion' },
    ],
    prevSlug: 'saas-dashboard',
    prevLabel: 'SaaS Dashboard Analytics',
    nextSlug: 'fintech-payment',
    nextLabel: 'Fintech Payment Trust',
  },
  {
    slug: 'fintech-payment',
    num: '03',
    industry: 'Fintech · Service Platform',
    title: 'Rebuilding Trust in a ',
    titleItalic: 'Fintech Payment Experience',
    summary: 'Users of a fintech service platform were hesitating and abandoning at the payment confirmation step — despite completing the entire journey up to that point. The problem wasn\'t the interface. It was the architecture of trust.',
    meta: [
      { label: 'Industry', value: 'Fintech · Service Platform' },
      { label: 'My Role', value: 'Lead UX Researcher' },
      { label: 'Timeline', value: '[X] Weeks' },
      { label: 'Participants', value: '[X] Users' },
      { label: 'Outcome', value: '[X]% Payment Completion Lift' },
    ],
    overviewBody: [
      'The product team at [Company Name] was watching a significant percentage of users drop off at the payment confirmation screen — the very last step of a multi-step flow. These weren\'t new visitors. They were users who had gone through account creation, filled out their service details, reviewed their order, and then stopped.',
      'The design team\'s first instinct was a UX audit. But the interface was clean, the copy was clear, and there were no obvious friction points. The problem wasn\'t the design — it was something underneath it.',
    ],
    stats: [
      { num: '[X]%', label: 'Payment Step Drop-Off Rate' },
      { num: '[X]s', label: 'Avg. Time Spent Hesitating on Page' },
      { num: '[X]%', label: 'Who Abandoned Never Returned' },
    ],
    overviewCallout: '"They trusted the brand to get to step 5. Something on that page made them stop trusting the transaction. Those are two different kinds of trust — and our research was designed to find exactly where the second one broke."',
    processSteps: [
      { title: 'Trust Laddering Interviews', desc: 'Conducted [X] in-depth interviews using the laddering technique — starting from stated concerns ("I wasn\'t sure about the fee") and drilling down to underlying values ("I need to feel in control of my money").' },
      { title: 'Cognitive Walkthroughs of the Payment Flow', desc: 'Ran structured cognitive walkthroughs with [X] participants — asking at each step: "What would you expect next?", "Does anything feel unclear?", "How confident do you feel right now?" Confidence ratings created a visible drop-off map.' },
      { title: 'Unmoderated Sessions — Prototype Variants', desc: 'Tested [X] prototype variants of the payment screen with [X] unmoderated participants — each variant modifying one trust-related element, allowing rapid comparison of which changes most reduced hesitation.' },
      { title: 'Survey — Post-Abandonment Intercept', desc: 'Deployed a lightweight exit survey triggered immediately after users abandoned the payment step. Responses from [X] participants gave quantitative weight to the qualitative themes.' },
    ],
    methods: [
      { icon: 'shield', title: 'Trust Laddering', desc: 'Depth technique that moves from stated concerns to underlying values — revealing the psychological architecture of financial hesitation.' },
      { icon: 'clock', title: 'Cognitive Walkthroughs', desc: 'Structured step-by-step evaluation capturing confidence ratings at each point in the flow — creating a visual map of where trust degraded.' },
      { icon: 'doc', title: 'Unmoderated Prototype Testing', desc: 'Rapid comparison of [X] payment screen variants — isolating which trust signals most reduced hesitation and increased completion intent.' },
      { icon: 'user', title: 'Post-Abandonment Survey', desc: 'Real-time exit intercept capturing authentic hesitation reasons at the moment of abandonment — giving quantitative weight to themes.' },
    ],
    affinityTitle: 'Clustered Observations · [X] Interview Notes → 4 Trust Themes',
    affinityClusters: [
      { label: 'Visual Doubt', color: 'red', notes: ['"Page looked different from the rest"', '"Font seemed off somehow"', '"Background color changed"', '"Felt like a different website"'] },
      { label: 'Fee Surprise', color: 'amber', notes: ['"Didn\'t see that charge earlier"', '"Why is there a service fee?"', '"Felt hidden until the last step"', '"I went back to check if I missed it"'] },
      { label: 'Security Missing', color: 'blue', notes: ['"No lock icon, no SSL badge"', '"I always look for those things"', '"Didn\'t recognize the payment logo"', '"Amazon always shows it — why not here?"'] },
      { label: 'Reversibility Fear', color: 'green', notes: ['"What if I need to cancel?"', '"Couldn\'t find a refund policy"', '"Felt permanent — no way back"', '"Just wanted to know my options"'] },
    ],
    personas: [
      { name: 'Daniel O.', role: 'Abandoner · Step 5', quote: '"I trusted the company. Something about that page just didn\'t feel right. I can\'t explain it exactly."', tags: ['Brand Loyal', 'Page Skeptic', 'Security-Aware'], bgColor: '#e8f0fa', avatarColor: '#4870b8', skinColor: '#7898d8', eyeColor: '#1a3870' },
      { name: 'Nour A.', role: 'Completer · After Hesitation', quote: '"The service fee shocked me. I almost left. I wish I\'d seen it earlier — I would have been fine with it."', tags: ['Price-Sensitive', 'Transparency-Driven', 'High Completion Intent'], bgColor: '#f5ece4', avatarColor: '#c88060', skinColor: '#e8a888', eyeColor: '#6a3018' },
      { name: 'Tariq S.', role: 'Repeat Abandoner · 3 Attempts', quote: '"I tried three times. Each time I got to payment and stopped. I couldn\'t find anything about cancellation."', tags: ['High-Intent', 'Risk-Averse', 'Needs Reversibility'], bgColor: '#e8f4ec', avatarColor: '#4a9868', skinColor: '#80c898', eyeColor: '#1a5030' },
    ],
    findingsIntro: 'The core finding reframed how the team thought about the problem. Users didn\'t lack trust in the company — they lacked trust in the page at the moment of payment. These are different things, and they require different solutions.',
    findings: [
      { title: 'Visual inconsistencies on the payment page activated a "something\'s wrong" signal', body: 'The payment confirmation page had a slightly different visual treatment from the rest of the flow. [X] out of [X] participants in cognitive walkthroughs mentioned noticing "something different" about the page. In a payment context, "different" reads as "suspicious."', tag: 'Visual Consistency' },
      { title: 'The total fee was visible — but not explained early enough', body: 'The service fee appeared for the first time on the payment confirmation screen. For [X]% of abandoners in the exit survey, "unexpected cost" was cited as the primary reason for stopping. The fee wasn\'t the problem — the timing was.', tag: 'Pricing Transparency' },
      { title: 'Missing security cues in a high-stakes moment', body: 'The payment screen contained no visible security indicators — no SSL badge, no recognizable payment processor logo. Users had been conditioned by years of e-commerce to expect these signals before entering card details. Their absence created ambient uncertainty.', tag: 'Security Signal Gap' },
      { title: 'Users couldn\'t find an easy way back if they made a mistake', body: 'Users were afraid of being unable to undo a payment. The lack of a visible cancellation or refund policy created a sense of permanence around the decision. Surfacing this information reduced perceived risk significantly in prototype testing.', tag: 'Reversibility Anxiety' },
    ],
    bigQuote: '"I trusted the company. It was something about that particular page that made me pause. It just didn\'t look quite right — I can\'t even say what it was."',
    bigQuoteCite: '— Participant 03, Cognitive Walkthrough Session',
    recoIntro: 'Every recommendation was designed around a single insight: the payment screen is a moment of maximum psychological sensitivity. Every element either adds to or subtracts from a user\'s willingness to commit.',
    recos: [
      { priority: 'Priority 1 — Immediate', title: 'Align the payment page visually with the rest of the flow', desc: 'Apply full brand consistency to the payment confirmation screen — matching typography, spacing, container styles, and background color exactly to the preceding steps. In a high-trust domain, visual continuity is a security signal.' },
      { priority: 'Priority 2 — Immediate', title: 'Introduce fee transparency earlier in the flow', desc: 'Surface the service fee — with a clear one-line explanation — at step 2 (service selection), not step 5 (payment confirmation). Frame it positively: "A [X]% service fee helps us [brief value statement]."' },
      { priority: 'Priority 3 — Short Term', title: 'Add contextual security signals to the payment screen', desc: 'Incorporate a small security strip below the payment form — SSL indicator, recognized payment processor logos, and a single line of assurance copy. Prototype testing showed this reduced hesitation scores by [X]%.' },
      { priority: 'Priority 4 — Short Term', title: 'Make reversibility visible before the final action', desc: 'Add a single reassuring line above the CTA button — "You can cancel within [X] days for a full refund" — with a linked policy page. This directly addresses the reversibility anxiety identified in research.' },
    ],
    impact: [
      { num: '[X]%', label: 'Increase in Payment Completion' },
      { num: '[X]%', label: 'Reduction in Hesitation Time on Page' },
      { num: '[X]%', label: 'Increase in User-Reported Confidence' },
    ],
    impactCallout: '"In high-stakes moments, users are not evaluating your design. They are asking themselves a single question — \'can I trust this?\' Every element of the experience is either answering yes or no."',
    prevSlug: 'wellness-onboarding',
    prevLabel: 'Wellness App Onboarding',
  },
]
