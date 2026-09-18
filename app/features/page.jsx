import Link from "next/link";
import { Shell } from "@/components/site-shell";
import { Reveal } from "@/components/reveal";
import Image from "next/image";

const items = [
  [
    "Snap & extract",
    "Photograph an electricity bill, fuel receipt, or travel ticket. Snap2Green reads the numbers straight off the image &mdash; no typing, no forms, no daily habit to keep up.",
  ],
  [
    "Fuel, generators & vehicles",
    "Direct combustion &mdash; diesel generators, boilers, your own vehicle &mdash; is read straight from the receipt and mapped to the right fuel-specific factor.",
  ],
  [
    "Electricity, mapped to your grid",
    "Purchased electricity is matched to the correct regional CEA grid factor &mdash; Western, Southern, or otherwise &mdash; instead of one number applied to the whole country.",
  ],
  [
    "Hotspot insights",
    "Rather than a single flat total, Snap2Green shows which one source &mdash; the generator, the AC load, the commute &mdash; is actually responsible for most of the number.",
  ],
  [
    "One recommendation, not a list",
    'Snap2Green turns the biggest hotspot into a single priority action, so what you get back is "change this," not a dashboard you have to interpret yourself.',
  ],
  [
    "Instant PDF report",
    "A branded, downloadable report generated the moment your number is ready &mdash; the figure, the source factors behind it, and the recommendation, laid out to share.",
  ],
  [
    "Supplier & travel emissions",
    "Value-chain emissions &mdash; suppliers, business travel, upstream transport &mdash; are real, but deliberately left out for now so the number you get today stays fast and verifiable.",
  ],
];

const featureImages = [
  "/images/features/1-snap-extract.svg",
  "/images/features/2-fuel-generator.svg",
  "/images/features/3-electricity-grid.svg",
  "/images/features/4-hotspot.svg",
  "/images/features/5-one-recommendation.svg",
  "/images/features/6-pdf-report.svg",
  "/images/features/7-supplier-travel.svg",
];

function Visual({ index, title }) {
  return (
    <div className="fd-visual">
      <Image src={featureImages[index]} alt={title} width={200} height={160} />
    </div>
  );
}

export default function FeaturesPage() {
  return (
    <Shell current="features">
      <main>
        <section className="page-hero">
          <Reveal>
            <div className="wrap">
              <p className="eyebrow">What you get</p>
              <h1 style={{ marginTop: 10 }}>
                Everything your number needs, in one app.
              </h1>
              <p className="lede">
                Six things Snap2Green does with a single photo, and one thing it
                deliberately doesn't do yet.
              </p>
            </div>
          </Reveal>
        </section>
        <section style={{ paddingTop: 0 }}>
          <div className="wrap">
            {items.map(([title, text], index) => (
              <Reveal
                key={title}
                className={`feature-detail ${index % 2 ? "reverse" : ""}`}
              >
                <div>
                  <span className={`fd-badge ${index === 6 ? "roadmap" : ""}`}>
                    {index === 6 ? "On the roadmap" : "Available now"}
                  </span>
                  <h3>{title}</h3>
                  <p dangerouslySetInnerHTML={{ __html: text }} />
                </div>
                <Visual index={index} title={title} />
              </Reveal>
            ))}
          </div>
        </section>
        <section className="band-moss">
          <Reveal>
            <div className="wrap cta-final">
              <div>
                <p className="eyebrow">Ready when you are</p>
                <h2 style={{ marginTop: 10 }}>Try it on your next bill.</h2>
              </div>
              <Link className="btn-primary" href="/contact">
                Get early access
              </Link>
            </div>
          </Reveal>
        </section>
      </main>
    </Shell>
  );
}
