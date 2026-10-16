import { Action, Eyebrow } from "../../components/Editorial";
import FieldArt from "../../components/FieldArt";

export default function NotFoundPage() {
  return (
    <section className="not-found section">
      <FieldArt />
      <div className="container">
        <Eyebrow>404 / A little off the beaten path</Eyebrow>
        <h1>
          This page hasn’t
          <br />
          <em>sprouted yet.</em>
        </h1>
        <p>Let’s get you back to fertile ground.</p>
        <Action to="/">Back to the homepage</Action>
      </div>
    </section>
  );
}
