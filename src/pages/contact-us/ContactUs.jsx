import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ArrowUpRight, Check, Loader2 } from "lucide-react";
import { Eyebrow, Invitation, PageHero } from "../../components/Editorial";

const initialData = {
  fullname: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};
export default function ContactUs() {
  const [params] = useSearchParams();
  const [data, setData] = useState({
    ...initialData,
    subject: params.get("subject") || "",
  });
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState(null);
  const change = (event) =>
    setData((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  const submit = async (event) => {
    event.preventDefault();
    if (busy) return;
    setBusy(true);
    setStatus(null);
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 20000);
    try {
      const response = await fetch(
        "https://ee-agro.com/api/mailer/src/contact-us.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(
            Object.fromEntries(
              Object.entries(data).map(([key, value]) => [key, value.trim()]),
            ),
          ),
          signal: controller.signal,
        },
      );
      if (!response.ok)
        throw new Error(
          "Unable to send your message. Please try again or email info@ee-agro.com.",
        );
      const result = await response.json();
      if (!result.success)
        throw new Error(
          result.message || "Your message could not be sent. Please try again.",
        );
      setStatus({
        success: true,
        message:
          "Thank you. Your message has been sent. Our team will be in touch.",
      });
      setData(initialData);
    } catch (error) {
      setStatus({
        success: false,
        message:
          error.name === "AbortError"
            ? "The request took too long. Please try again or email info@ee-agro.com."
            : error.message === "Failed to fetch"
              ? "We could not connect. Please try again or email info@ee-agro.com."
              : error.message,
      });
    } finally {
      window.clearTimeout(timeout);
      setBusy(false);
    }
  };
  return (
    <>
      <PageHero
        label="Get in touch"
        title="Let’s talk about"
        accent="what comes next."
        description="For product inquiries, partnerships, supply chain collaborations, or a visit to the farm — we’d love to hear from you."
        image="/images/contact.jpg"
        imageAlt="Agricultural fields and the natural landscape"
        note="Every good partnership starts somewhere."
      />
      <section className="section">
        <div className="container contact-layout">
          <aside className="contact-details">
            <Eyebrow>Our door is open</Eyebrow>
            <h2>
              A conversation
              <br />
              <em>worth starting.</em>
            </h2>
            <p>
              Tell us what you have in mind. We’ll help you find the right way
              forward.
            </p>
            <div className="contact-detail">
              <span className="caption">01 / FIND US</span>
              <h3>Head office</h3>
              <p>
                186A, Igbosere Rd, Obalende,
                <br />
                Lagos, Nigeria
              </p>
              <h3>Farm location</h3>
              <p>
                Gwaria Wizi Village, Kaiama LGA,
                <br />
                Kwara State, Nigeria
              </p>
            </div>
            <div className="contact-detail">
              <span className="caption">02 / SAY HELLO</span>
              <a href="mailto:info@ee-agro.com">
                info@ee-agro.com <ArrowUpRight size={16} />
              </a>
              <a href="tel:+2349163563562">+234 916 356 3562</a>
              <a href="tel:+2348133035963">+234 813 303 5963</a>
            </div>
            <div className="contact-detail">
              <span className="caption">03 / WORKING HOURS</span>
              <p>
                Monday – Friday: 8am – 5pm
                <br />
                Saturday: 9am – 1pm
                <br />
                Sunday: Closed
              </p>
            </div>
          </aside>
          <div className="contact-form-wrap">
            <Eyebrow>Make the first move</Eyebrow>
            <h2>Send us a message.</h2>
            <p>
              Fields marked <span aria-hidden="true">*</span> are required.
            </p>
            <form onSubmit={submit} className="contact-form" aria-busy={busy}>
              <div className="form-pair">
                <div className="form-field">
                  <label htmlFor="fullname">
                    Full name <span>*</span>
                  </label>
                  <input
                    autoComplete="name"
                    id="fullname"
                    name="fullname"
                    required
                    maxLength={120}
                    value={data.fullname}
                    onChange={change}
                    placeholder="Your full name"
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="email">
                    Email address <span>*</span>
                  </label>
                  <input
                    autoComplete="email"
                    type="email"
                    id="email"
                    name="email"
                    required
                    maxLength={254}
                    value={data.email}
                    onChange={change}
                    placeholder="you@company.com"
                  />
                </div>
              </div>
              <div className="form-pair">
                <div className="form-field">
                  <label htmlFor="phone">
                    Phone number <span className="optional">(optional)</span>
                  </label>
                  <input
                    autoComplete="tel"
                    type="tel"
                    id="phone"
                    name="phone"
                    maxLength={40}
                    value={data.phone}
                    onChange={change}
                    placeholder="+234"
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="subject">
                    Subject <span>*</span>
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    required
                    maxLength={200}
                    value={data.subject}
                    onChange={change}
                    placeholder="What would you like to discuss?"
                  />
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="message">
                  Your message <span>*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  minLength={10}
                  maxLength={5000}
                  rows={6}
                  value={data.message}
                  onChange={change}
                  placeholder="A little about your inquiry, your business, or what you’d like to grow with us…"
                />
              </div>
              <button type="submit" className="button" disabled={busy}>
                {busy ? "Sending your message…" : "Send message"}
                {busy ? (
                  <Loader2 className="spinner" size={18} />
                ) : (
                  <ArrowUpRight size={18} />
                )}
              </button>
              {status && (
                <div
                  className={`form-status ${status.success ? "success" : "error"}`}
                  role={status.success ? "status" : "alert"}
                >
                  {status.success && <Check size={18} />}
                  <p>{status.message}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
      <section className="map-section">
        <div className="container">
          <div className="map-heading">
            <Eyebrow>Visit our Lagos office</Eyebrow>
            <a
              className="text-link"
              href="https://www.google.com/maps/search/?api=1&query=186A+Igbosere+Road+Obalende+Lagos"
              target="_blank"
              rel="noreferrer"
            >
              Get directions <ArrowUpRight size={18} />
            </a>
          </div>
          <iframe
            title="EE Agro Farms head office in Lagos"
            src="https://www.google.com/maps?q=186A%20Igbosere%20Rd%20Lagos&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>
      <Invitation
        title="Good products begin"
        accent="with good produce."
        description="Whether you’re a farmer, distributor, or industrial buyer, explore high-quality agricultural products tailored to your needs."
        to="/products"
        action="Explore our crops"
      />
    </>
  );
}
