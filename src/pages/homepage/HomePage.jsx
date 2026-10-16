import { Link } from "react-router-dom";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import {
  Action,
  Eyebrow,
  Invitation,
  Photo,
  TextLink,
} from "../../components/Editorial";
import FieldArt from "../../components/FieldArt";

const stats = [
  ["40–45%", "Protein content", "Nutrition that goes further."],
  [
    "10,000+",
    "MT annual production capacity",
    "Cultivated at an industrial scale.",
  ],
  ["18–22%", "Oil content", "Made for efficient extraction."],
  ["200+", "Farm partners", "A network rooted in trust."],
];
const process = [
  [
    "Seed selection",
    "Certified high-yield varieties with proven performance.",
    "soybean_selection.jpg",
  ],
  [
    "Precision planting",
    "Optimal spacing and depth for maximum yield potential.",
    "soy_planting.jpg",
  ],
  [
    "Nutrient management",
    "Soil-specific fertilization and irrigation programs.",
    "soybeans_plant.jpg",
  ],
  [
    "Timely harvest",
    "Monitoring moisture levels for perfect harvest timing.",
    "havesting_soy.jpg",
  ],
  [
    "Careful processing",
    "Gentle handling to preserve quality and nutrition.",
    "processing.jpg",
  ],
];
export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="hero-landscape">
          <Photo
            src="/images/soybeans_open_field.jpg"
            alt="Rows of soybean crops stretching across green farmland"
            eager
            sizes="100vw"
          />
          <div className="hero-shade" />
        </div>
        <FieldArt className="hero-field-art" />
        <div className="container hero-content">
          <Eyebrow light>Nigeria’s soybean specialists</Eyebrow>
          <h1>
            Rooted in the soil.
            <br />
            Growing <em>possibilities.</em>
          </h1>
          <p>
            From the first seed to the final harvest, we cultivate premium
            soybeans that nourish people, power industries, and grow a better
            tomorrow.
          </p>
          <div className="hero-actions">
            <Action to="/products">Discover our crops</Action>
            <Action to="/partners" secondary>
              Grow with us
            </Action>
          </div>
        </div>
        <div className="container hero-bottom">
          <a href="#our-roots" className="hero-scroll">
            <span className="circle-arrow">
              <ArrowDown size={18} />
            </span>
            There’s more beneath the surface
          </a>
          <div className="hero-location">
            <span className="live-dot" />
            GWARIA WIZI, KWARA STATE
            <span>Cultivated with care. Grown with purpose.</span>
          </div>
        </div>
        <div className="hero-stamp" aria-hidden="true">
          <span>FROM SEED</span>
          <svg viewBox="0 0 70 70" fill="none">
            <path
              d="M35 61V29m0 14C14 42 9 29 10 21c16-1 25 7 25 22Zm0-12c20-1 26-15 25-22-16-1-25 7-25 22Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
          <span>TO POSSIBILITY</span>
        </div>
      </section>
      <div className="crop-ribbon" aria-label="Our approach">
        <span>SUSTAINABLY GROWN</span>
        <span className="ribbon-flower">✳</span>
        <span>LOCALLY ROOTED</span>
        <span className="ribbon-flower">✳</span>
        <span>QUALITY AT EVERY STAGE</span>
        <span className="ribbon-flower">✳</span>
        <span>FARM TO FACTORY</span>
        <span className="ribbon-flower">✳</span>
      </div>
      <section id="our-roots" className="section roots-section">
        <div className="container roots-grid">
          <div className="roots-visual" data-reveal>
            <Photo
              src="/images/agro_farm.jpg"
              alt="Agricultural land cultivated for a productive growing season"
            />
            <div className="roots-inset">
              <Photo
                src="/images/soy_seed.jpg"
                alt="A close view of harvested soybean seeds"
              />
              <span>
                Small seeds.
                <br />
                Extraordinary potential.
              </span>
            </div>
            <span className="vertical-caption">
              THE EARTH IS WHERE OUR STORY BEGINS
            </span>
          </div>
          <div className="roots-copy" data-reveal>
            <Eyebrow>01 / Our roots run deep</Eyebrow>
            <h2>
              A love for the land.
              <br />
              <em>A vision for more.</em>
            </h2>
            <p className="lead">
              We see more than a field. We see the beginning of something that
              matters.
            </p>
            <p>
              EE Agro Farms brings modern agriculture and sustainable land
              management together. From our farm in Kwara State, we specialize
              in premium soybean cultivation for Nigeria’s food and industrial
              sectors.
            </p>
            <p>
              With quality at our core, we’re thoughtfully expanding into
              cassava, maize, sorghum, and millet — growing our possibilities,
              one crop at a time.
            </p>
            <TextLink to="/about">Get to know EE Agro</TextLink>
          </div>
        </div>
      </section>
      <section className="harvest-section section">
        <FieldArt />
        <div className="container">
          <div className="section-heading" data-reveal>
            <div>
              <Eyebrow light>02 / Small seed. Remarkable impact.</Eyebrow>
              <h2>
                Nature’s potential.
                <br />
                <em>Our everyday pursuit.</em>
              </h2>
            </div>
            <p>
              Packed with protein and rich in possibility, our soybeans are
              cultivated for consistent quality, nutritional value, and
              industrial performance.
            </p>
          </div>
          <div className="harvest-stats">
            {stats.map(([number, label, detail]) => (
              <div key={label} data-reveal>
                <strong>{number}</strong>
                <h3>{label}</h3>
                <p>{detail}</p>
              </div>
            ))}
          </div>
          <p className="stats-note">
            Production capacity and crop specifications as described by EE Agro.
            Contact our team for current availability and batch specifications.
          </p>
        </div>
      </section>
      <section className="section crop-feature">
        <div className="container">
          <div className="section-heading" data-reveal>
            <div>
              <Eyebrow>03 / What we grow</Eyebrow>
              <h2>
                Good things begin
                <br />
                <em>with a great seed.</em>
              </h2>
            </div>
            <TextLink to="/products">
              Explore our agricultural products
            </TextLink>
          </div>
          <Link className="soybean-feature" to="/products#soybeans" data-reveal>
            <div className="soybean-feature-image">
              <Photo
                src="/images/soybeans.jpg"
                alt="Freshly harvested premium soybeans"
              />
              <span className="product-status">
                <span />
                CURRENTLY GROWING
              </span>
            </div>
            <div className="soybean-feature-copy">
              <span className="caption">GLYCINE MAX / OUR SPECIALTY</span>
              <h3>Soybeans.</h3>
              <p>
                One extraordinary crop. A world of applications. Premium,
                protein-rich soybeans for oil extraction, animal feed, and
                value-added food products.
              </p>
              <span className="text-link">
                Meet our flagship crop <ArrowUpRight size={20} />
              </span>
              <span className="crop-index">01</span>
            </div>
          </Link>
          <div className="future-crops">
            <span>ON THE HORIZON</span>
            {["Cassava", "Maize", "Sorghum", "Millet"].map((name) => (
              <Link to="/products#future-crops" key={name}>
                {name}
                <ArrowUpRight size={15} />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section applications-section">
        <div className="container">
          <div className="section-heading" data-reveal>
            <div>
              <Eyebrow>04 / Beyond the harvest</Eyebrow>
              <h2>
                From our fields.
                <br />
                <em>Into everyday life.</em>
              </h2>
            </div>
            <p>
              Quality raw materials, countless possibilities. Our soybeans
              support the industries that feed and move the world.
            </p>
          </div>
          <div className="application-grid">
            {[
              [
                "Food & nutrition",
                "Tofu, soy milk, flour, and protein isolates for nourishing food products.",
                "soydrink.jpg",
              ],
              [
                "Animal feed",
                "High-protein meal for poultry, livestock, and aquaculture nutrition.",
                "animal_feed.jpg",
              ],
              [
                "Industrial innovation",
                "Soybean oil for biodiesel, lecithin for manufacturing, and other industrial uses.",
                "industrial.jpg",
              ],
            ].map(([title, desc, image], i) => (
              <article className="application-item" key={title} data-reveal>
                <div className="application-image">
                  <Photo src={`/images/${image}`} alt={title} />
                  <span>0{i + 1}</span>
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section process-section">
        <div className="container process-layout">
          <div className="process-intro" data-reveal>
            <Eyebrow>05 / The care behind the crop</Eyebrow>
            <h2>
              Every stage.
              <br />
              <em>Every detail.</em>
            </h2>
            <p>
              Quality doesn’t happen at harvest. It begins with a carefully
              selected seed and a commitment that follows it all the way.
            </p>
            <TextLink to="/gallery">Step inside the farm</TextLink>
            <FieldArt />
          </div>
          <div className="process-list">
            {process.map(([title, desc, image], i) => (
              <article className="process-step" key={title} data-reveal>
                <span className="step-number">0{i + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
                <Photo src={`/images/${image}`} alt={title} />
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section quality-section">
        <div className="container">
          <div className="quality-heading">
            <Eyebrow>Built on trust</Eyebrow>
            <h2>
              Care you can <em>trace.</em>
            </h2>
            <p>Specialized practices that make our soybeans stand out.</p>
          </div>
          <div className="quality-list">
            {[
              [
                "Quality grading",
                "Rigorous sorting by size, color, and protein content for consistent quality.",
              ],
              [
                "Non-GMO assurance",
                "Verified traditional varieties preferred by quality-conscious markets.",
              ],
              [
                "Certified processes",
                "Internationally recognized farming and handling certifications.",
              ],
              [
                "Full traceability",
                "Supply chain transparency from farm to customer.",
              ],
            ].map(([title, desc], i) => (
              <div key={title} data-reveal>
                <span>0{i + 1}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
          <div className="value-chain">
            <span>OUR END-TO-END VALUE CHAIN</span>
            <p>
              Cultivation <b>→</b> Harvesting <b>→</b> Processing <b>→</b>{" "}
              Distribution <b>→</b> Export
            </p>
            <p className="value-chain-detail">
              Sustainable farming and timely harvesting, careful processing,
              efficient logistics across Nigeria, and trade with international
              markets.
            </p>
          </div>
        </div>
      </section>
      <Invitation />
    </>
  );
}
