import { teamMembers } from "../../data/content";
import {
  Eyebrow,
  Invitation,
  PageHero,
  Photo,
} from "../../components/Editorial";

export default function TeamPage() {
  return (
    <>
      <PageHero
        label="Our people"
        title="Different expertise."
        accent="One shared purpose."
        description="Meet the passionate professionals bringing experience, care, and ambition to EE Agro Farms."
        image="/images/team-harvest.jpg"
        imageAlt="Working together through the agricultural season"
        note="Progress grows from good people."
      />
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <Eyebrow>Our core leadership</Eyebrow>
              <h2>
                The people
                <br />
                <em>behind the progress.</em>
              </h2>
            </div>
            <p>
              Experienced professionals guiding our agricultural vision, from
              the farm to finance and business leadership.
            </p>
          </div>
          <div className="team-list">
            {teamMembers.map((member, i) => (
              <article className="team-profile" key={member.name} data-reveal>
                <div
                  className={`team-portrait ${member.image.includes("blank") ? "team-placeholder" : ""}`}
                >
                  <Photo
                    src={member.image}
                    alt={
                      member.image.includes("blank")
                        ? "Portrait placeholder for Owoicho Edo"
                        : member.name
                    }
                  />
                  <span>0{i + 1}</span>
                </div>
                <div>
                  <span className="caption">{member.role}</span>
                  <h3>{member.name}</h3>
                  <p>{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section team-principles">
        <div className="container">
          <Eyebrow>What brings us together</Eyebrow>
          <h2>
            Expert hands.
            <br />
            <em>Shared values.</em>
          </h2>
          <div className="three-columns">
            {[
              [
                "Expertise",
                "Our team brings decades of combined experience in agriculture, finance, and business leadership.",
              ],
              [
                "Sustainability",
                "We implement farming practices that protect the environment while maximizing productivity.",
              ],
              [
                "Growth",
                "Continuous improvement through innovation, technology, and strategic planning.",
              ],
            ].map(([title, desc], i) => (
              <article key={title} data-reveal>
                <span className="caption">0{i + 1}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Invitation />
    </>
  );
}
