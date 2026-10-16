import {
  Eyebrow,
  Invitation,
  PageHero,
  Photo,
} from "../../../components/Editorial";
import FieldArt from "../../../components/FieldArt";

const values = [
  [
    "Integrity",
    "We conduct our business with honesty, accountability, and respect for all stakeholders.",
  ],
  [
    "Innovation",
    "We embrace modern technologies and practices to improve productivity and product quality.",
  ],
  [
    "Sustainability",
    "We prioritize environmentally responsible farming and processing methods for long-term impact.",
  ],
  [
    "Partnership",
    "We build strong relationships with farmers, suppliers, and customers for a resilient value chain.",
  ],
  [
    "Quality",
    "We are committed to delivering consistent, high-grade agricultural products for industrial use.",
  ],
  [
    "Empowerment",
    "We support rural development and economic inclusion through job creation and capacity building.",
  ],
];
export default function AboutUs() {
  return (
    <>
      <PageHero
        label="Our story"
        title="Grounded in purpose."
        accent="Growing with possibility."
        description="From our fields to industries worldwide — sustainable, quality-driven agriculture with Nigerian roots."
        image="/images/cassava-field.jpg"
        imageAlt="Lush green cassava crops in the field"
        note="Our ambition begins with the land."
      />
      <section className="section" id="who-we-are">
        <div className="container story-layout">
          <div data-reveal>
            <Eyebrow>Where it all began</Eyebrow>
            <h2>
              Built from the ground up.
              <br />
              <em>For the road ahead.</em>
            </h2>
            <div className="founding-date">
              <strong>2025</strong>
              <span>
                INCORPORATED IN JUNE
                <br />A NEW CHAPTER IN NIGERIAN AGRICULTURE
              </span>
            </div>
          </div>
          <div className="story-body" data-reveal>
            <p className="lead">
              EE Agro Farms Ltd engages in the cultivation, harvesting,
              aggregation, and processing of agricultural produce, including
              soybeans, cassava, maize, and other cash and food crops.
            </p>
            <p>
              Incorporated in June 2025, we produce raw materials and finished
              goods for industrial, commercial, and export use.
            </p>
            <p>
              Our activities extend to packaging, storage, supply chain
              management, and trade in agricultural and agro-allied products,
              ensuring complete farm-to-factory excellence.
            </p>
          </div>
        </div>
      </section>
      <section className="story-photo">
        <Photo
          src="/images/farm-processing.jpg"
          alt="Agricultural operations connecting the farm to the factory"
          sizes="100vw"
        />
        <div className="container">
          <span>THE BIGGER PICTURE</span>
          <p>
            Better agriculture.
            <br />
            <em>Shared prosperity.</em>
          </p>
        </div>
      </section>
      <section className="section purpose-section">
        <FieldArt />
        <div className="container purpose-grid">
          <article id="vision" data-reveal>
            <Eyebrow>01 / Our vision</Eyebrow>
            <h2>
              A future worth
              <br />
              <em>cultivating.</em>
            </h2>
            <p>
              To become a leading provider of high-quality, sustainably
              processed agricultural products for industrial use across Africa
              and global markets — driving food security, industrial growth, and
              rural prosperity.
            </p>
          </article>
          <article id="mission" data-reveal>
            <Eyebrow>02 / Our mission</Eyebrow>
            <h2>
              Purpose in
              <br />
              <em>every harvest.</em>
            </h2>
            <p>
              To cultivate, aggregate, and process premium farm produce through
              innovative, efficient, and eco-friendly methods, delivering
              value-added products to manufacturers and end-users while
              empowering farmers, preserving the environment, and ensuring
              consistent quality across the value chain.
            </p>
          </article>
        </div>
      </section>
      <section className="section values-section" id="values">
        <div className="container">
          <div className="section-heading">
            <div>
              <Eyebrow light>Our core values</Eyebrow>
              <h2>
                What we grow
                <br />
                <em>is who we are.</em>
              </h2>
            </div>
            <p>
              The principles that guide every decision we make and every action
              we take.
            </p>
          </div>
          <div className="values-grid">
            {values.map(([title, desc], i) => (
              <article key={title} data-reveal>
                <span>0{i + 1}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section" id="principles">
        <div className="container principles-layout">
          <div>
            <Eyebrow>Our guiding principles</Eyebrow>
            <h2>
              A clear direction.
              <br />
              <em>At every turn.</em>
            </h2>
          </div>
          <div className="principles-list">
            {[
              [
                "Farm-to-factory excellence",
                "We ensure traceability and quality from cultivation to processing.",
              ],
              [
                "Customer-centric operations",
                "We prioritize the needs of our industrial clients by offering customized, reliable solutions.",
              ],
              [
                "Impact-driven growth",
                "We measure success through community, environmental, and economic outcomes as well as profit.",
              ],
              [
                "Adaptability and learning",
                "We continually improve through feedback, research, and innovation.",
              ],
            ].map(([title, desc], i) => (
              <article key={title} data-reveal>
                <span>0{i + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Invitation
        label="A shared ambition"
        title="Be part of what"
        accent="we’re growing."
        to="/partners"
        action="Explore partnerships"
      />
    </>
  );
}
