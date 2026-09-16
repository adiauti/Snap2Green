import Link from 'next/link';
import { Shell } from '@/components/site-shell';
import { Reveal } from '@/components/reveal';
import AeroHero from '@/components/ui/aero-hero-3';
import { ParallaxStory } from '@/components/parallax-story';

export default function HomePage() {
  return <Shell current="home"><main>
    <AeroHero />
    <Reveal>
      <ParallaxStory />
    </Reveal>
    <section>
      <Reveal>
        <div className="wrap accuracy-grid">
          <div><p className="eyebrow">Built on India's own numbers</p><h2 style={{ marginTop: 10 }}>The grid you're on changes the answer.</h2><p className="lede" style={{ marginTop: 16 }}>Most apps apply one global average to everyone. Snap2Green matches every bill to its actual regional grid factor, so the number you get is the number that's true for your state.</p></div>
          <div className="receipt"><div className="receipt-row"><span>Activity data</span><b>1,200 kWh</b></div><div className="receipt-row"><span>Western grid factor</span><b>0.716 kg CO&#8322;/kWh &rarr; 859 kg CO&#8322;e</b></div><div className="receipt-row"><span>Southern grid factor</span><b>0.82 kg CO&#8322;/kWh &rarr; 984 kg CO&#8322;e</b></div><div className="receipt-total"><span className="lbl">Same bill, different state</span><span className="v">15% apart</span></div><p className="receipt-note">Sourced from CEA's 2023 national grid data &mdash; not a generic worldwide average.</p></div>
        </div>
      </Reveal>
    </section>
    <section className="band-moss">
      <Reveal>
        <div className="wrap">
          <div className="section-head"><p className="eyebrow">What's inside</p><h2 style={{ marginTop: 10 }}>One snap covers more than you'd think.</h2></div>
          <div className="teaser-grid reveal-group">
            <Reveal><div className="teaser-card"><span className="n">Capture</span><h3>Snap any bill or ticket</h3><p>Electricity, fuel, or travel &mdash; photograph it once, no forms to fill in.</p></div></Reveal>
            <Reveal><div className="teaser-card"><span className="n">Understand</span><h3>See what's driving your number</h3><p>Hotspot insights point at the one source doing most of the damage.</p></div></Reveal>
            <Reveal><div className="teaser-card"><span className="n">Act</span><h3>Get one thing to change</h3><p>A single, specific recommendation &mdash; not a list you'll never read.</p></div></Reveal>
          </div>
          <div style={{ marginTop: 34 }}><Link className="btn-secondary" href="/features">View all features</Link></div>
        </div>
      </Reveal>
    </section>
    <section>
      <Reveal>
        <div className="wrap cta-final">
          <div><p className="eyebrow">For people, campuses, and companies</p><h2 style={{ marginTop: 10 }}>Built for how you'll actually use it.</h2></div>
          <Link className="btn-primary" href="/pricing">See plans</Link>
        </div>
      </Reveal>
    </section>
  </main></Shell>;
}
