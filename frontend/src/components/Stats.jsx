import suit from '../assets/suit.svg'
import crossroads from '../assets/crossroads.svg'
import calendar from '../assets/calendar.svg'
import building from '../assets/building.svg'
import home from '../assets/home.svg'
import community from "../assets/community.svg";
import management from "../assets/management.svg";
import board from "../assets/board.svg";

const STATS = [
  { num: "23,000", title: "Registered HOAs" },
  { num: "60",     title: "Counties" },
  { num: "14",     title: "Different Categories" },
];

const DATA_ITEMS = [
  { src: suit,       alt: "Corporation Names",      title: "Corporation Names",      desc: "Legal HOA entity names" },
  { src: crossroads, alt: "Cross Streets",          title: "Cross Streets",          desc: "Real intersections per city" },
  { src: calendar,   alt: "Registration Dates",     title: "Registration Dates",     desc: "Spanning 1985 – 2026" },
  { src: building,   alt: "Units",                  title: "Units",                  desc: "Communities from 20–600 units" },
  { src: community,  alt: "Development Type",       title: "Development Type",       desc: "HOAs, COAs, and other communities" },
  { src: management, alt: "Management Contact Info", title: "Management Contact Info", desc: "Names of the management company or agent" },
  { src: board,      alt: "Board of Directors",     title: "Board of Directors",     desc: "Registered contact information updated consistently" },
  { src: home,       alt: "More",                   title: "...and more",            desc: "Regularly updated for the most accurate information" },
];


const Stats = () => (
  <div className="bg-white text-dark py-5 px-4 mx-lg-5 mx-3">

    {/* ── Row 1: Stat pills ── */}
    <div className="row g-3 justify-content-center mb-0">
      {STATS.map(({ num, title }) => (
        <div key={title} className="col-12 col-sm-4">
          <div className="msvi-stat-pill bg-light border rounded-3 p-4 text-center">
            <p className="msvi-stat-num mb-1 fw-medium font-monospace">{num}</p>
            <p className="msvi-stat-label text-uppercase fst-italic fw-medium mb-0">{title}</p>
          </div>
        </div>
      ))}
    </div>

    <hr className="my-4 opacity-25" />

    {/* ── Row 2: Blurb ── */}
    <div className="row justify-content-center">
      <div className="col-12 col-lg-10">
        <p className="lead text-primary-dark">
          More than 23,000 HOAs, COAs, and developments are registered with Marketing
          Solution VI, meaning you now have access to thousands of properties to add to
          your client list. We regularly contact communities and scour online listings to
          find new developments and information to update our list, keeping your records
          accurate and as up-to-date as possible. By providing ongoing access to our HOA
          data, you can be assured that your marketing base sustains long-term growth.
        </p>
      </div>
    </div>

    <hr className="my-4 opacity-25" />

    {/* ── Row 3: Data cards ── */}
    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-3 justify-content-center mx-lg-4 mx-2">
      {DATA_ITEMS.map(({ src, alt, title, desc }) => (
        <div key={title} className="col">
          <div className="msvi-data-card bg-light border rounded-3 h-100 d-flex flex-column">
            <div className="msvi-card-top">
              <img src={src} className="msvi-card-img" alt={alt} />
            </div>
            <div className="border-top text-center msvi-card-title">
              <p className="display-6 mb-0">{title}</p>
            </div>
            <div className="border-top text-center msvi-card-desc">
              <p className="lead text-primary-dark mb-0">{desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>

  </div>
);

export default Stats;