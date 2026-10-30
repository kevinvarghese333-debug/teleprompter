import type { CSSProperties } from 'react';

function Lines({ active = false }: { active?: boolean }) {
  return <div className={`mini-lines ${active ? 'active-lines' : ''}`}><i/><i/><i/><i/></div>;
}
function Panel({ floating = false }: { floating?: boolean }) {
  return <div className={`glass-panel ${floating ? 'floating-panel' : ''}`}><div className="mini-camera"/><span className="mini-label">EYELINE</span><Lines active/><span className="mini-progress"/></div>;
}

export default function FeatureVisual({ index }: { index: number }) {
  return <div className={`feature-visual motion-scene scene-${index}`} aria-hidden="true">
    <div className="scene-grid"/><div className="scene-glow"/>
    {index === 0 && <><div className="voice-orbit"/><div className="waveform">{Array.from({length:23},(_,i)=><i key={i} style={{'--bar':`${18 + ((i*17)%65)}px`,'--delay':`${i*-.13}s`} as CSSProperties}/>)}</div><div className="glass-pill voice-pill"><span className="live-dot"/> Following your voice</div></>}
    {index === 1 && <div className="laptop-frame"><div className="laptop-camera"><i/></div><div className="lens-guide"/><Panel/><div className="eye-caption">Your words. Right at eye level.</div></div>}
    {index === 2 && <><div className="window-outline back-window"><span/><span/><span/></div><Panel floating/><div className="coordinate-label">A little room to move.</div></>}
    {index === 3 && <><div className="meeting-grid">{['A','B','C','D'].map(x=><div key={x}><i/><b/></div>)}</div><div className="private-panel"><Panel/></div><div className="glass-pill privacy-pill"><span className="privacy-lock"/> Only you can see this</div></>}
    {index === 4 && <><div className="remote-panel"><Panel/></div><div className="connection-dots"><i/><i/><i/><i/></div><div className="phone-device"><div className="phone-island"/><span className="mini-label">EYELINE REMOTE</span><div className="phone-play">Ⅱ</div><div className="phone-controls"><span>−</span><span>45</span><span>+</span></div><div className="phone-track"><i/></div></div></>}
    {index === 5 && <><Panel/><div className="pause-disc">Ⅱ</div><svg className="scene-cursor" width="40" height="48" viewBox="0 0 40 48"><path d="M5 3v34l10-8 8 15 7-4-8-14 13-3Z" fill="white" stroke="#172235" strokeWidth="2"/></svg><div className="glass-pill hover-pill">Take a breath.</div></>}
    {index === 6 && <><div className="pace-dial"><div className="dial-ticks"/><div className="dial-hand"/><div className="dial-center"/><strong>45<span>PX / SECOND</span></strong></div><div className="keycaps"><kbd>↓</kbd><span>Your pace. Your flow.</span><kbd>↑</kbd></div></>}
    {index === 7 && <div className="type-panel"><div className="type-sample">Aa<span>Aa</span></div><div className="type-slider"><i/></div><div className="color-swatches">{['#fff','#ff713c','#91b9ed','#ccbadf','#b9d6ce'].map(c=><i key={c} style={{background:c}}/>)}</div><span className="mini-label">MAKE IT YOURS</span></div>}
    {index === 8 && <><div className="countdown-ring"><svg viewBox="0 0 160 160"><circle cx="80" cy="80" r="70"/><circle className="ring-progress" cx="80" cy="80" r="70"/></svg><div className="countdown-numbers"><span>3</span><span>2</span><span>1</span></div></div><div className="countdown-caption">A moment, just for you.</div></>}
    {index === 9 && <div className="cues-panel"><span className="mini-label">YOUR TALK, IN CHAPTERS</span>{['The opening','The big idea','The closing'].map((x,i)=><div className={`cue-row cue-row-${i}`} key={x}><span>0{i+1}</span><b>{x}</b><kbd>{i+1}</kbd></div>)}</div>}
    {index === 10 && <><div className="document-sheet"><span>My next presentation</span><Lines/><Lines/></div><div className="save-seal"><svg viewBox="0 0 24 24"><path d="m5 12 5 5L20 7"/></svg></div><div className="glass-pill saved-pill">Saved on your Mac</div></>}
    {index === 11 && <><div className="mirror-axis"/><div className="mirror-copy original">Hello.<small>YOUR SCRIPT</small></div><div className="mirror-copy reflection">Hello.<small>YOUR SCRIPT</small></div><div className="glass-pill mirror-pill">Made for your setup</div></>}
    <span className="scene-number">{String(index+1).padStart(2,'0')} / EYELINE</span>
  </div>;
}
