import { useState } from 'react';
import { Download, ArrowUpRight, Mic, Camera, PanelsTopLeft, EyeOff, Smartphone, MousePointer2, Gauge, SlidersHorizontal, Timer, List, Save, FlipHorizontal, Menu, X, Check, Play, FileText } from 'lucide-react';
import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './components/ui/accordion';

const features = [
  [Mic, 'Voice following', 'Your words set the pace. Prompter follows your voice and pauses when you do.'],
  [Camera, 'Right below your camera', 'Keep your next line close to the lens for natural eye contact and a more confident delivery.'],
  [PanelsTopLeft, 'A floating window', 'Pull your script away from the notch. Move and resize it to fit the way you work.'],
  [EyeOff, 'Private while presenting', 'The notch panel is hidden from screen sharing and recordings by default. Your audience sees you.'],
  [Smartphone, 'Your iPhone is the remote', 'Scan the QR code on the same network. Play, pause, change speed, and jump between cues.'],
  [MousePointer2, 'Pause with a hover', 'Hover over the notch panel to take a breath. Move away when you’re ready to carry on.'],
  [Gauge, 'Adjust your pace', 'Speed up or slow down while reading. Keep the flow with simple keyboard shortcuts.'],
  [SlidersHorizontal, 'A view that fits you', 'Make the text larger, adjust spacing, and choose the colors that feel comfortable.'],
  [Timer, 'A moment to get ready', 'Take a breath before you begin. A countdown gives you time to settle into your delivery.'],
  [List, 'Jump straight to a cue', 'Organize your script into sections and move to the right moment with a shortcut.'],
  [Save, 'Your script, saved locally', 'Write in the built-in editor. Your current script and settings stay on your Mac.'],
  [FlipHorizontal, 'Ready for prompter glass', 'Mirror your script or flip it vertically to work with your teleprompter setup.'],
] as const;

const faqs = [
  ['How does voice following work?', 'Prompter listens while voice following is on and holds the script when you pause. On-device English speech recognition matches nearby script words; voice activity keeps other languages and ad-libs moving at your chosen speed. Microphone and Speech Recognition permissions are required.'],
  ['Will other people see my script when I share my screen?', 'The notch panel is hidden from screen sharing and recordings by default. You can change its capture visibility in the app. Check your presentation setup before going live.'],
  ['How do I use my iPhone as a remote?', 'Connect your Mac and iPhone to the same network, open Remote in Prompter, and scan the QR code. The remote opens in your phone’s browser, with controls for playback, speed, and cues.'],
  ['Where are my scripts stored?', 'Your current script and settings are saved locally on your Mac. Prompter currently saves one script at a time; it does not include a library of multiple saved scripts.'],
  ['Do I need a MacBook with a notch?', 'No. On a Mac without a notch, the panel appears at the top edge of your display. You can also drag it into a floating window. Prompter supports macOS 12 or later, on Intel and Apple silicon.'],
  ['Does Prompter record my screen or camera?', 'No. Prompter is a teleprompter. Use your preferred recording or meeting app alongside it.'],
  ['How do I install the Mac app?', 'Download the DMG, open it, and drag Prompter into Applications. The current build is ad-hoc signed and not notarized, so macOS may require you to approve its first launch in Privacy & Security.'],
];

function DownloadButton({ className = '' }: { className?: string }) {
  return <Button asChild className={`download-button ${className}`} size="lg"><a href="/downloads/Prompter.dmg" download="Prompter.dmg"><Download size={18} aria-hidden="true"/>Download for Mac</a></Button>;
}
function Brand() { return <a href="#top" className="brand" aria-label="Prompter home"><img src="/favicon.svg" alt="" width="32" height="32"/>Prompter</a>; }

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header id="top" className="hero sky">
      <nav className="nav" aria-label="Main navigation"><Brand/><div className="nav-links"><a href="#process">Process</a><a href="#features">Features</a><a href="#faq">FAQ</a></div><div className="nav-download"><DownloadButton/></div><Button className="menu-toggle" variant="ghost" size="icon" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="mobile-menu" aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X/> : <Menu/>}</Button></nav>
      {menuOpen && <div id="mobile-menu" className="mobile-menu"><a href="#process" onClick={() => setMenuOpen(false)}>Process</a><a href="#features" onClick={() => setMenuOpen(false)}>Features</a><a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a><DownloadButton/></div>}
      <div className="hero-copy"><div className="app-icon"><img src="/favicon.svg" alt="Prompter app icon" width="52" height="52"/></div><h1>Stay on script.<br className="mobile-break"/> Sound like yourself.</h1><p>Your words, right beneath your camera. Prompter keeps you on track with voice following, floating scripts, and control from your iPhone.</p><div className="actions"><DownloadButton/><Button asChild variant="secondary" size="lg"><a href="#features">See the features <ArrowUpRight size={17}/></a></Button></div><p className="requirements">macOS 12+ <span>·</span> Intel & Apple silicon</p></div>
      <div className="prompter-preview" role="img" aria-label="Product preview: a dark teleprompter below the camera, showing the current line highlighted in white"><div className="notch"><i/></div><div className="preview-toolbar"><strong>Prompter</strong><span><i className="orange-dot"/>Voice following on</span></div><div className="cue">01 / THE OPENING</div><p className="past-line">You already know what you want to say.</p><p className="current-line">Now say it like yourself.</p><p className="next-line">Keep your eyes up. Take your time.<br/>Your next line is right here.</p><div className="progress"><span/></div><div className="preview-footer"><span>01:42 remaining</span><span>45 px/s · Space to pause</span></div></div>
    </header>
    <main id="main">
      <section id="process" className="section workflow"><div className="section-heading"><span className="eyebrow">YOUR NEXT PRESENTATION</span><h2>Less memorizing.<br/>More connecting.</h2><p>Put your thoughts into words. Find your pace.<br/>Then focus on the person on the other side of the camera.</p></div>
      <div className="editor" role="img" aria-label="Illustrative Prompter editor dashboard, with a current script and reading settings"><div className="editor-top"><span><FileText size={16}/> Your next presentation</span><span className="saved"><Check size={14}/> Saved on your Mac</span></div><div className="editor-body"><div className="script"><div className="script-tabs"><span>Current script</span><span className="muted">Cues</span></div><div className="cue">[THE OPENING]</div><p>You already know what you want to say.</p><p>Now say it like yourself.</p><p>Keep your eyes up. Take your time. Your next line is right here.</p><div className="editor-note">Your ideas. Your voice. A little help staying on track.</div></div><aside className="settings"><h3>Make it yours</h3><div className="setting"><span>Scroll speed</span><b>45 px/s</b></div><div className="visual-slider"><span/></div><div className="setting"><span>Text size</span><b>48 px</b></div><div className="visual-slider second"><span/></div><div className="setting"><span>Voice following</span><span className="visual-switch"/></div><div className="remote-hint"><Smartphone size={22}/><div><strong>Step away. Stay in control.</strong><p>Your iPhone becomes your remote.</p></div></div><div className="preview-start"><Play size={14} fill="currentColor"/>Ready when you are</div></aside></div></div>
      <div className="steps"><div><span>01</span><h3>Write your script</h3><p>Paste your notes into the built-in editor.</p></div><div><span>02</span><h3>Find your flow</h3><p>Set your view, speed, and speaking cues.</p></div><div><span>03</span><h3>Look up. Speak naturally.</h3><p>Keep your words close and your audience closer.</p></div></div></section>
      <section id="features" className="section features"><div className="section-heading"><span className="eyebrow">SMALL DETAILS. SMOOTHER DELIVERY.</span><h2>Everything you need<br/>to keep going.</h2><p>Thoughtful controls that stay out of your way,<br/>from the first word to the final take.</p></div><div className="feature-grid">{features.map(([Icon, title, body]) => <Card key={title} className="feature-card"><CardContent><div className="icon-tile"><Icon size={23} strokeWidth={1.5} aria-hidden="true"/></div><h3>{title}</h3><p>{body}</p></CardContent></Card>)}</div></section>
      <section id="faq" className="section faq"><div className="faq-heading"><span className="eyebrow">GOOD TO KNOW</span><h2>A little clarity<br/>before you begin.</h2><p>Made for Mac. Designed to help you feel more like yourself on camera.</p><a className="text-link" href="#features">Back to features <ArrowUpRight size={16}/></a></div><Accordion type="single" collapsible className="faq-list">{faqs.map(([question, answer], i) => <AccordionItem value={`faq-${i}`} key={question}><AccordionTrigger>{question}</AccordionTrigger><AccordionContent>{answer}</AccordionContent></AccordionItem>)}</Accordion></section>
      <section id="download" className="closing sky"><div className="app-icon"><img src="/favicon.svg" alt="" width="52" height="52"/></div><h2>Your next take<br/>starts here.</h2><p>Bring your script. Keep your voice.</p><DownloadButton/><p className="requirements">macOS 12+ · Intel & Apple silicon</p><a href="#faq" className="install-help">Installation questions? Read the FAQ <ArrowUpRight size={14}/></a></section>
    </main><footer className="footer"><div className="footer-top"><div><Brand/><p>Built for Mac.<br/>Made for your next presentation.</p></div><div className="footer-links"><a href="#process">Process</a><a href="#features">Features</a><a href="#faq">FAQ</a><a href="/downloads/Prompter.dmg" download>Download</a></div></div><div className="footer-wordmark" aria-hidden="true">Prompter</div><div className="footer-bottom"><span>Stay on script. Sound like yourself.</span><span>Layout inspired by Applio · Amar KZR</span></div></footer>
  </>;
}
