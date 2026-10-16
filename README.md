# EE Agro Farms

EE Agro’s React and Vite website. The redesign retains the existing logo, agricultural positioning, company information, team biographies, product availability, farm media, and contact endpoint.

## Development

```sh
npm install
npm run dev -- --host 127.0.0.1
npm run build
npm run preview
```

The build is written to `dist/`. Existing Apache SPA rewrites in `public/.htaccess` are retained. This checkout does not deploy automatically.

## Design and source structure

The visual direction is an agricultural field journal: forest green, warm cream, olive and harvest gold, Fraunces headings, Manrope body type, field contour drawings, framed photography, and numbered editorial chapters. Fonts load from Google Fonts with system fallbacks.

- `src/index.css`: shared tokens, typography, containers, responsive compositions, interactions, and reduced-motion rules.
- `src/components/Editorial.jsx`: responsive photographs, page introductions, calls to action, links, and scroll reveals.
- `src/components/FieldArt.jsx`: decorative crop and contour-line illustration.
- `src/components/Brand.jsx`: existing EE Agro logo with a consistent wordmark.
- `src/data/content.js`: retained product data and leadership biographies.
- `src/pages/`: seven public pages and a designed not-found view.

The header and footer stay mounted while route content loads. Navigation exposes all public pages. Community health content and reporting routes remain removed; agricultural references to soil health and nutritional products remain relevant.

## Audit and page coverage

The original live website’s home, About, products, gallery, team, partners, and contact pages were inspected, along with the original mobile homepage, local components, routes, forms, and assets. Original-page screenshots and the structured audit are generated under the ignored `artifacts/` directory with:

```sh
node tests/redesign.browser.mjs --live
```

The new homepage follows roots → soybean specifications → crops → applications → cultivation → quality and value chain → partnership inquiry. The About page presents the founding story, vision, mission, values, and guiding principles. Products distinguish currently available soybeans from four planned crops. Team biographies remain intact; partnership announcements remain explicitly pending.

Existing dead homepage and gallery calls to action now navigate to the appropriate destination. Product image paths for sorghum and millet are corrected. The gallery retains its original photo and both planting videos, with native modal focus management, Escape dismissal, keyboard-operable filters, and video controls.

## Images

Original files remain in `public/images/`. Checked-in WebP variants in `public/images/optimized/` are generated at 640, 1280, and 1920 pixels, without enlarging small originals:

```sh
npm run images:optimize
```

The shared `Photo` component selects these using `srcset` and `sizes`. Hero images load eagerly; other images load lazily. The 1280px set is approximately 3.1 MB, compared with 32.8 MB of originals. Image frames reserve their layout space.

## Contact behavior

The form posts the original `fullname`, `email`, `phone`, `subject`, and `message` JSON fields to `https://ee-agro.com/api/mailer/src/contact-us.php`. It supports native required-field/email validation, labeled controls, inquiry subjects supplied by links, disabled submission while sending, a 20-second timeout, and accessible inline success/error feedback. Failed submissions retain entered data.

Delivery depends on the existing mail service and its CORS configuration. Browser tests intercept this request; they never send a real message.

## Browser verification

With the development server running and Chrome installed:

```sh
npm run test:browser
```

The suite checks eight views at 320, 375, 390, 430, 768, 1024, 1280, and 1440 pixels. It checks horizontal overflow, image loading, one main heading per page, placeholder links, removed community health content, and browser exceptions. It also exercises mobile navigation and Escape dismissal, gallery photos/videos and focus restoration, and mocked contact success/error flows. Screenshots and JSON results are written to `artifacts/`.

For focused checks, set `AGRO_WIDTHS` to comma-separated widths or `AGRO_URL` to a different local server. Default checks respect reduced motion; the design also uses an intersection observer for modest scroll reveals when motion is enabled.
