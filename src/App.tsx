import { useEffect, useState } from 'react';
import { ArrowUpRight, Smartphone, Menu, X, Check, Play, FileText } from 'lucide-react';
import FeatureVisual from './FeatureVisual';
import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './components/ui/accordion';

const features = [
  ['Voice following', 'Your words set the pace. EyeLine follows your voice and pauses when you do.'],
  ['Right below your camera', 'Keep your next line close to the lens for natural eye contact and a more confident delivery.'],
  ['A floating window', 'Pull your script away from the notch. Move and resize it to fit the way you work.'],
  ['Private while presenting', 'The notch panel is hidden from screen sharing and recordings by default. Your audience sees you.'],
  ['Your iPhone is the remote', 'Scan the QR code on the same network. Play, pause, change speed, and jump between cues.'],
  ['Pause with a hover', 'Hover over the notch panel to take a breath. Move away when you’re ready to carry on.'],
  ['Adjust your pace', 'Speed up or slow down while reading. Keep the flow with simple keyboard shortcuts.'],
  ['A view that fits you', 'Make the text larger, adjust spacing, and choose the colors that feel comfortable.'],
  ['A moment to get ready', 'Take a breath before you begin. A countdown gives you time to settle into your delivery.'],
  ['Jump straight to a cue', 'Organize your script into sections and move to the right moment with a shortcut.'],
  ['Your script, saved locally', 'Write in the built-in editor. Your current script and settings stay on your Mac.'],
  ['Ready for prompter glass', 'Mirror your script or flip it vertically to work with your teleprompter setup.'],
] as const;

const faqs = [
  ['How does voice following work?', 'EyeLine listens while voice following is on and holds the script when you pause. On-device English speech recognition matches nearby script words; voice activity keeps other languages and ad-libs moving at your chosen speed. Microphone and Speech Recognition permissions are required.'],
  ['Will other people see my script when I share my screen?', 'The notch panel is hidden from screen sharing and recordings by default. You can change its capture visibility in the app. Check your presentation setup before going live.'],
  ['How do I use my iPhone as a remote?', 'Connect your Mac and iPhone to the same network, open Remote in EyeLine, and scan the QR code. The remote opens in your phone’s browser, with controls for playback, speed, and cues.'],
  ['Where are my scripts stored?', 'Your current script and settings are saved locally on your Mac. EyeLine currently saves one script at a time; it does not include a library of multiple saved scripts.'],
  ['Do I need a MacBook with a notch?', 'No. On a Mac without a notch, the panel appears at the top edge of your display. You can also drag it into a floating window. EyeLine supports macOS 12 or later, on Intel and Apple silicon.'],
  ['Does EyeLine record my screen or camera?', 'No. EyeLine is a teleprompter. Use your preferred recording or meeting app alongside it.'],
  ['How do I install the Mac app?', 'Download the DMG, open it, and drag the app into Applications. The current installer still uses the original name Prompter. The current build is ad-hoc signed and not notarized, so macOS may require you to approve its first launch in Privacy & Security.'],
];

function AppleMark() { return <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M17.05 12.54c.03 3.3 2.9 4.4 2.93 4.42-.02.08-.46 1.57-1.51 3.11-.91 1.33-1.86 2.65-3.35 2.68-1.46.03-1.93-.87-3.6-.87-1.67 0-2.19.84-3.57.9-1.44.05-2.53-1.44-3.45-2.77C2.62 17.29 1.19 12.3 3.12 8.94c.96-1.67 2.68-2.73 4.55-2.76 1.42-.03 2.76.96 3.63.96.87 0 2.51-1.19 4.23-1.02.72.03 2.75.29 4.05 2.19-.1.06-2.42 1.41-2.4 4.23ZM14.3 4.32c.76-.92 1.27-2.2 1.13-3.48-1.1.04-2.44.73-3.23 1.65-.71.82-1.33 2.13-1.16 3.38 1.23.1 2.49-.63 3.26-1.55Z"/></svg>; }
function DownloadButton({ className = '' }: { className?: string }) {
  return <Button asChild className={`download-button ${className}`} size="lg"><a href="/downloads/EyeLine.dmg" download="EyeLine.dmg"><AppleMark/>Download for Mac</a></Button>;
}
function Brand() { return <a href="#top" className="brand" aria-label="EyeLine home"><img src="/assets/eyeline-logo.jpeg" alt="" width="32" height="32"/>EyeLine</a>; }

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [motionPaused, setMotionPaused] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        entry.target.classList.toggle('is-in-view', entry.isIntersecting);
        if (entry.isIntersecting) entry.target.classList.add('has-appeared');
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.motion-scene, .section-heading, .feature-card, .editor, .prompter-preview').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle('motion-paused', motionPaused);
    return () => document.documentElement.classList.remove('motion-paused');
  }, [motionPaused]);
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header id="top" className="hero sky">
      <nav className="nav" aria-label="Main navigation"><Brand/><div className="nav-links"><a href="#process">Process</a><a href="#features">Features</a><a href="#faq">FAQ</a></div><div className="nav-download"><DownloadButton/></div><Button className="menu-toggle" variant="ghost" size="icon" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="mobile-menu" aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X/> : <Menu/>}</Button></nav>
      {menuOpen && <div id="mobile-menu" className="mobile-menu"><a href="#process" onClick={() => setMenuOpen(false)}>Process</a><a href="#features" onClick={() => setMenuOpen(false)}>Features</a><a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a><DownloadButton/></div>}
      <div className="hero-copy"><div className="app-icon"><img src="/assets/eyeline-logo.jpeg" alt="EyeLine app icon" width="52" height="52"/></div><h1>Stay on script.<br className="mobile-break"/> Sound like yourself.</h1><p>Your words, right beneath your camera. EyeLine keeps you on track with voice following, floating scripts, and control from your iPhone.</p><div className="actions"><DownloadButton/><Button asChild variant="secondary" size="lg"><a href="#features">See the features <ArrowUpRight size={17}/></a></Button></div><p className="requirements">macOS 12+ <span>·</span> Intel & Apple silicon</p></div>
      <div className="prompter-preview" role="img" aria-label="Product preview: a dark teleprompter below the camera, showing the current line highlighted in white"><div className="notch"><i/></div><div className="preview-toolbar"><strong>EyeLine</strong><span><i className="orange-dot"/>Voice following on</span></div><div className="cue">01 / THE OPENING</div><p className="past-line">You already know what you want to say.</p><p className="current-line">Now say it like yourself.</p><p className="next-line">Keep your eyes up. Take your time.<br/>Your next line is right here.</p><div className="progress"><span/></div><div className="preview-footer"><span>01:42 remaining</span><span>45 px/s · Space to pause</span></div></div>
    </header>
    <div className="motion-toolbar"><span><i/> A little movement. A more natural flow.</span><button type="button" aria-pressed={motionPaused} onClick={() => setMotionPaused(p => !p)}>{motionPaused ? 'Play animations' : 'Pause animations'}</button></div>
    <main id="main">
      <section className="audience section" aria-labelledby="audience-title"><span className="eyebrow">LOOK UP. CONNECT.</span><h2 id="audience-title">Trusted by 1,000+ creators<br/>and corporate officials.</h2><p>For people with something to say — and an audience to connect with.</p><div className="audience-tags"><span>Content creators</span><span>Coaches</span><span>Professionals who present on camera</span></div></section>
      <section id="process" className="section workflow"><div className="section-heading"><span className="eyebrow">YOUR NEXT PRESENTATION</span><h2>Less memorizing.<br/>More connecting.</h2><p>Put your thoughts into words. Find your pace.<br/>Then focus on the person on the other side of the camera.</p></div>
      <div className="editor" role="img" aria-label="Illustrative EyeLine editor dashboard, with a current script and reading settings"><div className="editor-top"><span><FileText size={16}/> Your next presentation</span><span className="saved"><Check size={14}/> Saved on your Mac</span></div><div className="editor-body"><div className="script"><div className="script-tabs"><span>Current script</span><span className="muted">Cues</span></div><div className="cue">[THE OPENING]</div><p>You already know what you want to say.</p><p>Now say it like yourself.</p><p>Keep your eyes up. Take your time. Your next line is right here.</p><div className="editor-note">Your ideas. Your voice. A little help staying on track.</div></div><aside className="settings"><h3>Make it yours</h3><div className="setting"><span>Scroll speed</span><b>45 px/s</b></div><div className="visual-slider"><span/></div><div className="setting"><span>Text size</span><b>48 px</b></div><div className="visual-slider second"><span/></div><div className="setting"><span>Voice following</span><span className="visual-switch"/></div><div className="remote-hint"><Smartphone size={22}/><div><strong>Step away. Stay in control.</strong><p>Your iPhone becomes your remote.</p></div></div><div className="preview-start"><Play size={14} fill="currentColor"/>Ready when you are</div></aside></div></div>
      <div className="steps"><div><span>01</span><h3>Write your script</h3><p>Paste your notes into the built-in editor.</p></div><div><span>02</span><h3>Find your flow</h3><p>Set your view, speed, and speaking cues.</p></div><div><span>03</span><h3>Look up. Speak naturally.</h3><p>Keep your words close and your audience closer.</p></div></div></section>
      <section id="features" className="section features"><div className="section-heading"><span className="eyebrow">SMALL DETAILS. SMOOTHER DELIVERY.</span><h2>Everything you need<br/>to keep going.</h2><p>Thoughtful controls that stay out of your way,<br/>from the first word to the final take.</p></div><div className="feature-grid">{features.map(([title, body], index) => <Card key={title} className="feature-card"><FeatureVisual index={index}/><CardContent><h3>{title}</h3><p>{body}</p></CardContent></Card>)}</div></section>
      <section id="faq" className="section faq"><div className="faq-heading"><span className="eyebrow">GOOD TO KNOW</span><h2>A little clarity<br/>before you begin.</h2><p>Made for Mac. Designed to help you feel more like yourself on camera.</p><a className="text-link" href="#features">Back to features <ArrowUpRight size={16}/></a></div><Accordion type="single" collapsible className="faq-list">{faqs.map(([question, answer], i) => <AccordionItem value={`faq-${i}`} key={question}><AccordionTrigger>{question}</AccordionTrigger><AccordionContent>{answer}</AccordionContent></AccordionItem>)}</Accordion></section>
      <section id="download" className="closing pricing"><div className="pricing-halo" aria-hidden="true"/><div className="app-icon"><img src="/assets/eyeline-logo.jpeg" alt="" width="64" height="64"/></div><span className="eyebrow">YOUR WORDS. YOUR MOMENT.</span><h2>Say it with confidence.<br/>Keep it naturally you.</h2><p>Your notes, right beneath your camera.<br/>Stay connected to the people who matter.</p><div className="price-amount">US$12.99<span>One-time payment · No subscription</span></div><Button className="purchase-button" size="lg" disabled><AppleMark/>Get EyeLine · US$12.99</Button><p className="checkout-status">Purchasing coming soon</p><p className="requirements">macOS 12+ · Intel & Apple silicon</p><a href="#faq" className="install-help">Installation questions? Read the FAQ <ArrowUpRight size={14}/></a></section>
    </main><footer className="footer"><div className="footer-top"><div><Brand/><p>Built for Mac.<br/>Made for your next presentation.</p></div><div className="footer-links"><a href="#process">Process</a><a href="#features">Features</a><a href="#faq">FAQ</a><a href="/downloads/EyeLine.dmg" download>Download</a></div></div><div className="footer-wordmark" aria-hidden="true">EyeLine</div><div className="footer-bottom"><span>Stay on script. Sound like yourself.</span><span>Layout inspired by Applio · Amar KZR</span></div></footer>
  </>;
}
