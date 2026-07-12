const STYLES = `
  .plan-card {
    border: 2px solid transparent;
    transition: border-color 0.2s, box-shadow 0.2s, transform 0.18s;
  }
  .plan-card:hover {
    border-color: var(--bs-primary);
    box-shadow: 0 6px 24px rgba(0,0,0,0.10);
    transform: translateY(-3px);
  }
  .plan-card.featured {
    border-color: var(--bs-primary-dark);
  }
  .plan-card.featured:hover {
    border-color: var(--bs-gray);
    box-shadow: 0 8px 28px rgba(0,0,0,0.18);
  }
  .plan-price {
    font-size: 2.75rem;
    font-weight: 700;
    line-height: 1;
    letter-spacing: -0.03em;
  }
  .plan-per {
    font-size: 0.85rem;
    font-weight: 400;
    opacity: 0.65;
  }
  .plan-check {
    flex-shrink: 0;
    width: 16px;
    height: 16px;
    margin-top: 2px;
    color: var(--bs-primary);
  }
  .plan-card.featured .plan-check { color: #fff; }
  .plan-badge-slot { min-height: 1.6rem; }
`;

const CheckIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="8" fill="currentColor" opacity="0.15"/>
    <path d="M4.5 8l2.5 2.5 4-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PLANS = [
  {
    duration: "1 Month",
    price: "$125",
    badge: null,
    featured: false,
    features: [
      "Full CID List for selected county",
      "Street names & unit numbers",
      "Community physical locations",
      "Navigable MSVI Map access",
    ],
  },
  {
    duration: "6 Months",
    price: "$99",
    badge: null,
    featured: false,
    features: [
      "Everything in previous plan",
      "1 additional CID sheet included",
      "MSVI special event notifications",
    ],
  },
  {
    duration: "12 Months",
    price: "$79",
    badge: "Best Value",
    featured: true,
    features: [
      "Everything in previous plan",
      "Unlimited CID sheets",
      "20% off additional counties",
      "Priority pre-release data access",
      "Priority MSVI event access",
    ],
  },
];

const Mapline = () => (
  <div className="row g-2 my-3">
    <style>{STYLES}</style>
    {/* Pay plans on left */}
    <div className="col-12 col-lg-6 d-flex flex-column gap-3">
      {/* Header */}
      <div className="rounded-5 pt-1 pb-3 text-center ">
        <h1 className="display-4 border-bottom border-3 border-light pb-2 mb-3 fw-bold">MSVI Map</h1>
        <h2 className="lead fst-italic mb-2">Visual mapping for smarter territory planning</h2>
        <p className="mb-0 opacity-75 small">
          Includes street names, unit numbers, and the communities' physical locations
        </p>
      </div>
      {/* Pricing cards */}
      <div className="row g-xl-3 g-2 flex-grow-1">
        {PLANS.map(({ duration, price, badge, featured, features }) => (
          <div key={duration} className="col-12 col-sm-4">
            <div className={`plan-card h-100 d-flex flex-column rounded-4 p-3 ${featured ? "featured bg-primary-dark text-white" : " bg-light"}`}>
              {/* Badge */}
              <div className="plan-badge-slot mb-2">
                {badge && (
                  <span
                    className={`badge rounded-pill fw-semibold ${featured ? "bg-white text-primary-dark" : "bg-primary"}`}
                    style={{ fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase" }}
                  >
                    {badge}
                  </span>
                )}
              </div>
              {/* Price */}
              <div className="mb-1">
                <span className="plan-price">{price}</span>
                <span className="plan-per">/mo</span>
              </div>
              <p className="text-uppercase fw-semibold mb-0 opacity-50" style={{ fontSize: "0.72rem", letterSpacing: "0.14em" }}>
                {duration}
              </p>
              <hr className={`my-3 opacity-${featured ? "25" : "10"}`} />
              {/* Features */}
              <div className="d-flex flex-column gap-2">
                {features.map((f) => (
                  <div key={f} className="d-flex align-items-start gap-2" style={{ fontSize: "0.88rem", lineHeight: 1.5 }}>
                    <CheckIcon className="plan-check" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    {/* Map sample on right */}
    <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center mt-3 mx-0 px-0">
      <iframe
        className="border border-2 border-primary-dark px-0"
        src="https://app.mapline.com/map/map_17a6146c/UlRaYVQzSno3Mno1eVJsd1BkVVlLUTdQbk9hUldwTll5TU5Vck"
        style={{ width: "80%", height: "600px" }}
        allow="geolocation *"
      />
      <div className="align-self-end pe-5" style={{ fontSize: "10px" }}>
        <a href="https://mapline.com" target="_blank">Mapping by Mapline</a>
      </div>
      <h1 className="lead fst-italic text-center">Sample Marketing Solution VI Map</h1>
    </div>
  </div>
);

export default Mapline;