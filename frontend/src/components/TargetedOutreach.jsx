import {useState} from 'react'
import sample from "../assets/sample_sheet.png";

const STYLES = `
  .outreach-card { border: 2px solid transparent; transition: border-color 0.2s, box-shadow 0.2s, transform 0.18s; }
  .outreach-card:hover { border-color: var(--bs-primary); box-shadow: 0 6px 24px rgba(0,0,0,0.10); transform: translateY(-3px); }
  .outreach-card.featured { border-color: var(--bs-primary-dark); }
  .outreach-card.featured:hover { border-color: var(--bs-gray); box-shadow: 0 8px 28px rgba(0,0,0,0.18); }
  .outreach-check { flex-shrink: 0; width: 16px; height: 16px; margin-top: 2px; color: var(--bs-primary); }
  .outreach-card.featured .outreach-check { color: #fff; }
  .outreach-price-num { font-size: 2.75rem; font-weight: 700; line-height: 1; letter-spacing: -0.03em; }
  .outreach-badge-slot { min-height: 1.6rem; }
`;

const CheckIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="8" fill="currentColor" opacity="0.15"/>
    <path d="M4.5 8l2.5 2.5 4-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const FeatureItem = ({ text }) => (
  <div className="d-flex align-items-start gap-2 small">
    <CheckIcon className="outreach-check" />
    <span>{text}</span>
  </div>
);

const CHANNELS = [
  {
    title: "Direct Mail",
    badge: "Physical",
    badgeClass: "bg-primary text-white",
    features: [
      `Custom 4" × 6" postcard`,
      "Double-sided, professionally printed",
      "Design + creation included",
      "Up to 4 revisions before final approval",
      "Mailing includes postage",
    ],
  },
  {
    title: "Email Campaign",
    badge: "Digital",
    badgeClass: "bg-primary-dark text-white",
    features: [
      "2 customizable email blasts sent to your target list",
    ],
  },
  {
    title: "Data Accuracy Guarantee",
    badge: "Guarantee",
    badgeClass: "bg-primary text-white",
    features: [
      "Bounce-back emails will be researched and re-sent at no additional cost",
      "Returned postcards will be researched and re-mailed at no additional cost",
    ],
  },
];

const TargetedOutreach = () => {
  const [active, setActive] = useState(null);

  return (
    <div id="targeted-outreach" className="row g-3 g-lg-0" style={{ scrollMarginTop: 'var(--header-height)' }}>
      <style>{STYLES}</style>

      {/* ── Left: Sample image ── */}
      <div className="col-12 col-lg-5 d-flex flex-column justify-content-center align-items-center text-center px-3">
        <div
          className="card text-dark p-0 w-100"
          onMouseEnter={() => setActive("sample")}
          onMouseLeave={() => setActive(null)}
        >
          <img src={sample} className="card-img img-fluid" alt="Sample spreadsheet" />
          {/* Mobile overlay */}
          <div className="card-img-overlay p-0 d-md-none d-flex justify-content-center align-items-center h-100 bg-primary bg-opacity-75">
            <button className="bg-primary p-3 w-100">
              <h4 className="lead fs-5">Click here to download!</h4>
            </button>
          </div>
          {/* Desktop hover overlay */}
          <button className={`card-img-overlay p-0 d-md-flex d-none justify-content-center align-items-center h-100 bg-primary ${active === "sample" ? "bg-opacity-75" : "bg-opacity-25"}`}>
            <div className="bg-primary p-3 w-100">
              <h4 className="lead fs-5">Click here to download!</h4>
            </div>
          </button>
        </div>
        <p className="lead fst-italic pt-3 mb-0">Sample Marketing Solution VI CID List</p>
      </div>

      {/* ── Right: Outreach info ── */}
      <div className="col-12 col-lg-7 d-flex flex-column gap-2 px-5 overflow-hidden">

        {/* Header */}
        <div className="pt-1 pb-2 text-center">
          <h1 className="display-4 border-bottom border-3 border-light pb-2 mb-3 fw-bold">Outreach Campaign</h1>
          <h2 className="lead fst-italic mb-2">Highly-targeted multi-point outreach campaigns using the most up-to-date information.</h2>
          <p className="mb-0 opacity-75 small">
            500 touchpoints targeting approximately 125 associations, with detailed research to enhance and verify target data
          </p>
        </div>

        {/* Channel cards */}
        <div className="row g-2 flex-grow-1">
          {CHANNELS.map(({ title, badge, badgeClass, features }) => (
            <div key={title} className="col-12 col-sm-4">
              <div className="outreach-card h-100 d-flex flex-column rounded-4 p-3 bg-light">
                <div className="outreach-badge-slot mb-2">
                  <span className={`badge rounded-pill fw-semibold text-uppercase ${badgeClass}`}
                    style={{ fontSize: "0.65rem", letterSpacing: "0.1em" }}>
                    {badge}
                  </span>
                </div>
                <p className="text-uppercase fw-semibold mb-2 opacity-50"
                  style={{ fontSize: "0.72rem", letterSpacing: "0.14em" }}>{title}</p>
                <hr className="my-2 opacity-10" />
                <div className="d-flex flex-column gap-2">
                  {features.map((f) => <FeatureItem key={f} text={f} />)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing */}
        <div className="d-flex flex-column justify-content-center border border-1 border-light rounded-2 bg-primary-subtle p-3 w-75 mx-auto">
          <div className="text-center">
            <span className="outreach-price-num">$1,500</span>
            <span className="text-uppercase fw-semibold opacity-50 d-block mt-1"
              style={{ fontSize: "0.72rem", letterSpacing: "0.14em" }}>
              per 500 touchpoints
            </span>
          </div>
          <hr className="opacity-10 my-2" />
          <div className="d-flex flex-column gap-2">
            <FeatureItem text="Full campaign at $1,500 per 500 touchpoints" />
            <FeatureItem text="Replicated campaign (same design as original) at $1,000" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default TargetedOutreach;