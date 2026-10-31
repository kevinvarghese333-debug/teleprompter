export default function FeatureVisual({ index }: { index: number }) {
  return <div className={`feature-visual feature-art motion-scene art-${index}`} aria-hidden="true">
    <img src={`/assets/features/feature-${index}.jpg`} alt="" width="1024" height="1024" loading="lazy" decoding="async"/>
    {index === 8 && <span className="countdown-caption">Your next presentation begins shortly.</span>}
  </div>;
}
