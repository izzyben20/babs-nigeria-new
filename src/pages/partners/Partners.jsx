import {
  Action,
  Eyebrow,
  Invitation,
  PageHero,
} from "../../components/Editorial";
import FieldArt from "../../components/FieldArt";

const groups = [
  [
    "For farmers",
    [
      "Access to premium markets and fair pricing",
      "Technical training and capacity building",
      "Input financing and resource support",
      "Sustainable farming partnerships",
    ],
  ],
  [
    "For processors",
    [
      "Reliable raw material supply chain",
      "Quality assurance and consistency",
      "Volume guarantees for production",
      "Traceability and certification support",
    ],
  ],
  [
    "For buyers",
    [
      "Premium quality agricultural products",
      "Competitive market pricing",
      "Sustainable and ethical sourcing",
      "Custom product development options",
    ],
  ],
];
export default function PartnersPage() {
  return (
    <>
      <PageHero
        label="Our partnership network"
        title="Stronger roots."
        accent="Shared growth."
        description="Building strategic collaborations to strengthen Nigeria’s agricultural ecosystem, from local farms to global markets."
        image="/images/partners.jpg"
        imageAlt="Agriculture and collaboration across the value chain"
        note="The best things grow together."
      />
      <section className="section">
        <div className="container partnership-intro">
          <div>
            <Eyebrow>Partnerships in progress</Eyebrow>
            <h2>
              Something good
              <br />
              <em>is taking root.</em>
            </h2>
            <p className="lead">
              We are currently finalizing several strategic partnerships that
              will be announced soon.
            </p>
          </div>
          <div className="partnership-note" data-reveal>
            <FieldArt />
            <span className="caption">OUR NETWORK / THE NEXT CHAPTER</span>
            <h3>Partnership arrangements underway.</h3>
            <p>
              We are actively working to establish valuable collaborations with
              farmers, processors, distributors, and research institutions.
              These partnerships will be announced once agreements are
              finalized.
            </p>
            <Action to="/contact?subject=Partnership%20inquiry">
              Start a conversation
            </Action>
          </div>
        </div>
      </section>
      <section className="section partner-benefits">
        <div className="container">
          <div className="section-heading">
            <div>
              <Eyebrow light>A place in the value chain</Eyebrow>
              <h2>
                Different strengths.
                <br />
                <em>Greater possibilities.</em>
              </h2>
            </div>
            <p>
              We welcome inquiries from potential partners across the
              agricultural value chain.
            </p>
          </div>
          <div className="partner-columns">
            {groups.map(([title, benefits], i) => (
              <article key={title} data-reveal>
                <span className="partner-number">0{i + 1}</span>
                <h3>{title}</h3>
                <ul>
                  {benefits.map((benefit) => (
                    <li key={benefit}>{benefit}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Invitation
        title="Let’s build something"
        accent="that keeps growing."
        description="From farmers and processors to distributors and research institutions, there’s room for a shared ambition."
        to="/contact?subject=Partnership%20inquiry"
        action="Partnership inquiries"
      />
    </>
  );
}
