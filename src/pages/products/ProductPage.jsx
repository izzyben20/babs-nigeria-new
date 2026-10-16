import { products } from "../../data/content";
import {
  Action,
  Eyebrow,
  Invitation,
  PageHero,
  Photo,
} from "../../components/Editorial";

export default function ProductsPage() {
  const soybeans = products[0];
  return (
    <>
      <PageHero
        label="Our agricultural products"
        title="Grown with care."
        accent="Full of potential."
        description="Currently specializing in premium soybean cultivation, with a thoughtful expansion into more of Nigeria’s essential crops."
        image="/images/soybeans_hero.jpg"
        imageAlt="Harvested soybeans in a burlap sack with a wooden scoop"
        note="Quality begins long before the harvest."
      />
      <section className="section" id="soybeans">
        <div className="container product-detail">
          <div className="product-portrait" data-reveal>
            <Photo src={soybeans.image} alt="Premium harvested soybeans" />
            <span className="product-status">
              <span />
              AVAILABLE NOW
            </span>
            <div className="portrait-label">
              GLYCINE MAX<span>01 / OUR FLAGSHIP CROP</span>
            </div>
          </div>
          <div data-reveal>
            <Eyebrow>Our current specialty</Eyebrow>
            <h2>
              Small bean.
              <br />
              <em>Big possibilities.</em>
            </h2>
            <p className="lead">{soybeans.description}</p>
            <div className="product-specs">
              <div>
                <strong>40–45%</strong>
                <span>PROTEIN CONTENT</span>
              </div>
              <div>
                <strong>18–22%</strong>
                <span>OIL CONTENT</span>
              </div>
            </div>
            <h3 className="small-heading">Made for your industry</h3>
            <ul className="lined-list">
              {soybeans.uses.map((use) => (
                <li key={use}>{use}</li>
              ))}
            </ul>
            <Action to="/contact?subject=Soybean%20pricing%20and%20availability">
              Request pricing & availability
            </Action>
            <p className="fine-print">
              Ask our team for current batch specifications and supply volumes.
            </p>
          </div>
        </div>
      </section>
      <section className="section future-section" id="future-crops">
        <div className="container">
          <div className="section-heading">
            <div>
              <Eyebrow>The next chapter</Eyebrow>
              <h2>
                More from
                <br />
                <em>the land we love.</em>
              </h2>
            </div>
            <p>
              We’re expanding our production to include these additional crops.
              Production is planned; contact us for updates on availability.
            </p>
          </div>
          <div className="crop-catalogue">
            {products.slice(1).map((product, i) => (
              <article key={product.name} className="catalogue-row" data-reveal>
                <Photo
                  src={product.image}
                  alt={product.name}
                  sizes="(max-width: 700px) 100vw, 25vw"
                />
                <div className="catalogue-title">
                  <span className="caption">0{i + 2} / COMING SOON</span>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                </div>
                <div>
                  <span className="caption">PLANNED APPLICATIONS</span>
                  <ul>
                    {product.uses.map((use) => (
                      <li key={use}>{use}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container commitment-layout">
          <div className="commitment-image">
            <Photo
              src="/images/quality_assurance.jpg"
              alt="Careful quality checks on agricultural produce"
            />
            <span>CARE AT EVERY STAGE</span>
          </div>
          <div>
            <Eyebrow>Our soybean quality commitment</Eyebrow>
            <h2>
              Good crops.
              <br />
              <em>No shortcuts.</em>
            </h2>
            <div className="commitment-list">
              {[
                [
                  "Quality assurance",
                  "Rigorous testing at every stage from farm to factory.",
                ],
                [
                  "Sustainable farming",
                  "Eco-friendly practices that protect soil health.",
                ],
                ["Reliable supply", "Consistent soybean volumes year-round."],
                ["Traceability", "Full farm-to-factory documentation."],
              ].map(([title, desc]) => (
                <article key={title}>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </article>
              ))}
            </div>
            <Action to="/contact?subject=Soybean%20specifications">
              Request soybean specifications
            </Action>
          </div>
        </div>
      </section>
      <Invitation
        title="Your next great product"
        accent="starts in our fields."
        description="Contact our sales team for pricing, specifications, and availability of our premium soybeans."
        action="Contact our sales team"
      />
    </>
  );
}
