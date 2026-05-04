import { useState } from "react";
import { Form } from "react-bootstrap";

const BOXES = [
  { label: "101-350",   price: "$450.00",  min: 0,    max: 350  },
  { label: "350-999",   price: "$598.00",  min: 351,  max: 999  },
  { label: "1000-1999", price: "$675.00",  min: 1000, max: 1999 },
  { label: "2000-3499", price: "$790.00",  min: 2000, max: 3499 },
  { label: "3500-4999", price: "$875.00",  min: 3500, max: 4999 },
  { label: "5000+",     price: "$950.00+", min: 5000, max: 6000 },
];

function getActiveIndex(value) {
  return BOXES.findIndex((b) => value >= b.min && value <= b.max);
}

export default function PriceScale() {
  const [value, setValue] = useState(0);
  const activeIndex = getActiveIndex(value);

  return (
    <div className="min-vh-100 bg-white d-flex flex-column align-items-center justify-content-center gap-4 p-5">

      {/* Title + Number */}
      <div className="text-center">
        <div className="text-uppercase text-secondary small fw-semibold mb-1">
          Listings
        </div>
        <div className="display-4 fw-bold" style={{ color: "#c5e5f4" }}>
          {value}
        </div>
      </div>

      {/* Boxes Row */}
      <div className="d-flex gap-2">
        {BOXES.map((box, i) => {
          const isActive = i === activeIndex;
          return (
            <div
              key={box.label}
              className={`d-flex flex-column align-items-center justify-content-center p-3 rounded ${
                isActive ? "bg-light" : "bg-light"
              }`}
              style={{
                width: "96px",
                minHeight: "96px",
                border: `2px solid ${isActive ? "#c5e5f4" : "#dee2e6"}`,
              }}
            >
              {/* Dot */}
              <div
                className="rounded-circle mb-2"
                style={{
                  width: "10px",
                  height: "10px",
                  backgroundColor: isActive ? "#c5e5f4" : "#dee2e6",
                }}
              />
              {/* Range label */}
              <div
                className="fw-semibold text-uppercase text-center"
                style={{
                  fontSize: "10px",
                  color: isActive ? "#c5e5f4" : "#6c757d",
                }}
              >
                {box.label}
              </div>
              {/* Price */}
              <div
                className="text-center mt-1"
                style={{
                  fontSize: "9px",
                  color: isActive ? "#c5e5f4" : "#adb5bd",
                }}
              >
                {box.price}
              </div>
            </div>
          );
        })}
      </div>

      {/* Slider */}
      <div className="w-100" style={{ maxWidth: "520px" }}>
        <Form.Range
          min={0}
          max={6000}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="mb-1"
        />
        <div className="d-flex justify-content-between text-secondary" style={{ fontSize: "10px" }}>
          <span>0</span>
          <span>1000</span>
          <span>2000</span>
          <span>3000</span>
          <span>4000</span>
          <span>5000+</span>
        </div>
      </div>

    </div>
  );
}