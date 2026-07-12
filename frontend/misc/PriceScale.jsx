import { useState } from 'react';
import { Form } from 'react-bootstrap';
import PriceBox from './PriceBox.jsx'

const BOXES = [
  { label: "1-250",   price: "$250.00",  min: 1,    max: 250  },
  { label: "251-500",   price: "$425.00",  min: 251,  max: 500  },
  { label: "501-1000", price: "$650.00",  min: 501, max: 1000 },
  { label: "1001-3500", price: "$850.00",  min: 1000, max: 3500 },
  { label: "3500+",     price: "$975.00+", min: 3500, max: 4000 },
];

// Determines which box the current value is in
function getActiveIndex(value) {
  return BOXES.findIndex((b) => value >= b.min && value <= b.max);
}

const PriceScale = () => {
    const [value, setValue] = useState(0); 
    const activeIndex = getActiveIndex(value);

    return (
    <div className="d-flex flex-column justify-content-center text-center py-lg-4 py-3 bg-primary-dark">
        <Form.Group>
            <Form.Label>

                <h1 className="lead text-light pt-2 fs-2">Slide below to see your quote</h1>
                <div className="text-light py-lg-4">
                    <h1 className="lead">Listings</h1>
                    <h1 className="display-1 text-primary fw-bold">{value}</h1>
                </div>
            </Form.Label>
            <div className="w-lg-75 w-100 mx-auto px-md-5 px-4">
                <Form.Range
                min={0}
                max={4000}
                step={1}
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
                />
                <div className="d-flex justify-content-between text-light-gray pb-3">
                    <span>0</span>
                    <span>1000</span>
                    <span>2000</span>
                    <span>3000</span>
                    <span>4000+</span>
                    <span></span>
                </div>
                <div className="row g-3 py-lg-5 justify-content-center align-items-center">
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
    </div>
    )
}

export default PriceScale