const STYLES = `
  .sol-root {
    position: relative;
    overflow: hidden;
    background:
      radial-gradient(ellipse 60% 50% at 20% 35%, rgba(197,229,244,0.16), transparent 60%),
      radial-gradient(ellipse 60% 50% at 85% 90%, rgba(216,199,172,0.14), transparent 60%),
      var(--bs-primary-dark);
  }
  .sol-top-fade {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 240px;
    z-index: 0;
    pointer-events: none;
    background: linear-gradient(to bottom, var(--bs-primary-dark) 0, rgba(63,91,116,0) 100%);
  }
  .sol-blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(70px);
    pointer-events: none;
    z-index: 0;
  }
  .sol-blob-1 {
    width: 340px; height: 340px;
    top: 60px; left: -80px;
    background: rgba(197,229,244,0.25);
    animation: sol-float-1 14s ease-in-out infinite;
  }
  .sol-blob-2 {
    width: 380px; height: 380px;
    bottom: -120px; right: -100px;
    background: rgba(216,199,172,0.22);
    animation: sol-float-2 16s ease-in-out infinite;
  }
  @keyframes sol-float-1 {
    0%, 100% { transform: translate(0, 0) scale(1); }
    50% { transform: translate(30px, 25px) scale(1.12); }
  }
  @keyframes sol-float-2 {
    0%, 100% { transform: translate(0, 0) scale(1); }
    50% { transform: translate(-25px, -20px) scale(1.1); }
  }

  .sol-card {
    position: relative;
    z-index: 1;
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(197,229,244,0.18);
    border-radius: 28px;
    box-shadow: 0 30px 80px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.08);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
  }

  .sol-badge {
    background: linear-gradient(135deg, #d8c7ac, #c5e5f4);
    color: #24343f;
    animation: sol-pulse 2.4s ease-in-out infinite;
  }
  @keyframes sol-pulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(216,199,172,0.45); }
    50% { box-shadow: 0 0 0 10px rgba(216,199,172,0); }
  }

  .sol-price-old {
    font-size: 1.4rem;
    font-weight: 500;
    color: rgba(255,255,255,0.45);
  }
  .sol-price-new {
    font-size: clamp(2.75rem, 6vw, 4.25rem);
    font-weight: 800;
    line-height: 1;
    letter-spacing: -0.03em;
    background: linear-gradient(100deg, #c5e5f4, #ffffff 35%, #d8c7ac 65%, #c5e5f4);
    background-size: 220% auto;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: sol-shimmer 5s linear infinite;
  }
  @keyframes sol-shimmer {
    to { background-position: -220% center; }
  }

  .sol-include {
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(197,229,244,0.12);
    border-radius: 14px;
    opacity: 0;
    animation: sol-rise 0.6s ease-out forwards;
    transition: background 0.2s, border-color 0.2s, transform 0.2s;
  }
  .sol-include:hover {
    background: rgba(197,229,244,0.1);
    border-color: rgba(197,229,244,0.35);
    transform: translateY(-2px);
  }
  .sol-include:nth-child(1) { animation-delay: 0.05s; }
  .sol-include:nth-child(2) { animation-delay: 0.2s; }
  .sol-include:nth-child(3) { animation-delay: 0.35s; }
  @keyframes sol-rise {
    from { opacity: 0; transform: translateY(14px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .sol-check {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    margin-top: 1px;
  }
  .sol-check circle { fill: #d8c7ac; opacity: 0.25; }
  .sol-check path { stroke: #d8c7ac; }

  .sol-why-item {
    flex: 0 0 100%;
    transition: transform 0.2s;
  }
  .sol-why-item:hover {
    transform: translateX(3px);
  }
  @media (min-width: 768px) {
    .sol-why-item {
      flex: 0 0 calc(50% - 1.75rem);
    }
  }
  @media (min-width: 992px) {
    .sol-why-item {
      flex: 0 0 auto;
      white-space: nowrap;
    }
  }
  .sol-why-item span {
    color: rgba(255,255,255,0.85);
  }
  .sol-why-check {
    flex-shrink: 0;
    width: 18px;
    height: 18px;
    margin-top: 1px;
  }
  .sol-why-check circle { fill: #c5e5f4; opacity: 0.2; }
  .sol-why-check path { stroke: #c5e5f4; }
`;

const CheckIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="8" />
    <path d="M4.5 8l2.5 2.5 4-5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const INCLUDES = [
  "Every single county CID data sheet",
  "Mapline Membership for 1-2 accounts for 12 months",
  "15% Discount on Targeted Outreach campaigns throughout the year (excludes reprints)",
];

const WHY = [
  "Highly targeted outreach (not mass marketing)",
  "Verified, continuously updated HOA data",
  "Visual mapping for smarter territory planning",
  "Multi-touch campaigns increase response rates",
  "Ongoing data access for long-term growth",
];

const MSVISolution = () => (
  <div className="sol-root pt-3 pb-5 px-3 px-lg-5">
    <style>{STYLES}</style>
    <div className="sol-blob sol-blob-1" />
    <div className="sol-blob sol-blob-2" />
    <div className="sol-top-fade" />

    <div className="row justify-content-center">
      <div className="col-12 col-xl-9">
        <div className="sol-card p-4 p-md-5 text-white text-center">

          <div className="d-flex flex-column align-items-center gap-2 mb-1">
            <span
              className="sol-badge badge rounded-pill fw-bold px-3 py-2"
              style={{ fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase" }}
            >
              Save
            </span>
            <span className="sol-price-old text-decoration-line-through">$16,175.00</span>
            <span className="sol-price-new">$8,087.00</span>
          </div>
          <p
            className="text-uppercase fw-semibold mb-4"
            style={{ letterSpacing: "0.16em", fontSize: "0.82rem", color: "rgba(255,255,255,0.6)" }}
          >
            The Complete Package
          </p>

          <hr className="my-4" style={{ borderColor: "rgba(197,229,244,0.18)" }} />

          <div className="row g-3 justify-content-center text-start mb-5">
            {INCLUDES.map((text) => (
              <div key={text} className="col-12 col-md-10">
                <div className="sol-include d-flex align-items-start gap-3 p-3">
                  <CheckIcon className="sol-check" />
                  <span>{text}</span>
                </div>
              </div>
            ))}
          </div>

          <h3 className="fw-bold mb-4" style={{ letterSpacing: "0.04em" }}>Why This Works</h3>
          <div className="row justify-content-center">
            <div className="col-12 col-md-9 col-lg-12 col-xl-9">
              <div
                className="d-flex flex-wrap justify-content-center text-start"
                style={{ rowGap: "0.75rem", columnGap: "3.5rem" }}
              >
                {WHY.map((text) => (
                  <div
                    key={text}
                    className="sol-why-item d-flex align-items-center justify-content-start gap-2 py-1"
                  >
                    <CheckIcon className="sol-why-check" />
                    <span style={{ fontSize: "0.92rem" }}>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
);

export default MSVISolution;
