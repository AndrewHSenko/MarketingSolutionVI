import { useState } from 'react';
import { Form } from 'react-bootstrap';
import PriceBox from './PriceBox.jsx'

const BOXES = [
  { label: "101-350",   price: "$450.00",  min: 1,    max: 350  },
  { label: "350-999",   price: "$598.00",  min: 351,  max: 999  },
  { label: "1000-1999", price: "$675.00",  min: 1000, max: 1999 },
  { label: "2000-3499", price: "$790.00",  min: 2000, max: 3499 },
  { label: "3500-4999", price: "$875.00",  min: 3500, max: 4999 },
  { label: "5000+",     price: "$950.00+", min: 5000, max: 6000 },
];

// Determines which box the current value is in
function getActiveIndex(value) {
  return BOXES.findIndex((b) => value >= b.min && value <= b.max);
}

const PriceScale = () => {
    const [value, setValue] = useState(0); 
    const activeIndex = getActiveIndex(value);

    return (
    <div className="d-flex flex-column justify-content-center text-center pb-3">
        <Form.Group>
            <Form.Label>
                <div>
                    <h1 className="lead">Listings</h1>
                    <h1 className="display-1 text-primary fw-bold">{value}</h1>
                </div>
            </Form.Label>
            <div className="w-lg-75 w-100 mx-auto px-md-5 px-4">
                <Form.Range
                min={0}
                max={6000}
                step={1}
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
                />
                <div className="d-flex justify-content-between text-light-gray pb-3">
                    <span>0</span>
                    <span>1000</span>
                    <span>2000</span>
                    <span>3000</span>
                    <span>4000</span>
                    <span>5000+</span>
                    <span></span>
                </div>
                <div className="row g-3 pt-lg-4 justify-content-center align-items-center">
                    {BOXES.map((box, i) => {
                        const isActive = i === activeIndex;
                        return (
                        <div key={box.label} className="col-6 col-sm-4">
                            <PriceBox box={box} isActive={isActive} />
                        </div>
                        );
                    })}
                </div>
            </div>

        </Form.Group>
        <div>
            
        </div>
    </div>
    )
}

export default PriceScale