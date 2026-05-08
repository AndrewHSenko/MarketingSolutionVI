import { useState } from "react";
import { Form, Badge, Button, Dropdown, InputGroup } from "react-bootstrap";    

const CountyDropdown = () => {
    const counties = {
        "Alameda County" : 825,
        "Alpine • Amador • Toulume • Imperial" : 70,
        "Butte County" : 95,
        "Calaveras • Sierra • Sutter • Glen" : 65,
        "Colusa • Yuba • Lake • Yolo • Inyo" : 70,
        "Contra Costa County" : 1035,
        "Del Norte • Humbolt • Trinity • Siskiyou • Kings" : 65,
        "El Dorado County" : 100,
        "Fresno County" : 245,
        "Kern County" : 185,
        "Lassen • Shasta • Tehama • Plumas • Glen" : 90,
        "Los Angeles County" : 5935,
        "Marin County" : 260,
        "Mendocino County" : 50,
        "Mono County" : 70,
        "Monterrey County" : 165,
        "Napa County" : 83,
        "Nevada County" : 74,
        "Orange County" : 2625,
        "Placer County" : 270,
        "Riverside County" : 910,
        "Sacramento County" : 470,
        "San Benito • Mariposa • Merced • Modoc • Sierra • Madera" : 60,
        "San Bernardino County" : 380,
        "San Diego County" : 2765,
        "San Francisco County" : 685,
        "San Joaquin County" : 250,
        "San Luis Obispo County" : 290,
        "San Mateo County" : 440,
        "Santa Barbara County" : 460,
        "Santa Clara County" : 1300,
        "Santa Cruz County" : 285,
        "Solano County" : 75,
        "Sonoma County" : 420,
        "Stanislaus County" : 110,
        "Tulare County" : 85,
        "Ventura County" : 620,
    }

    const [selected, setSelected] = useState([]);
    const [totalNumListings, setTotalNumListings] = useState(0)
    const [search, setSearch] = useState("");
    const [show, setShow] = useState(false);

    const filtered = Object.entries(counties).filter(([key]) =>
        key.toLowerCase().includes(search.toLowerCase()));

    const toggle = (item) => {
        const exists = selected.some(([k]) => k === item[0]);
        setSelected((prev) =>
            exists ? prev.filter(([k]) => k !== item[0]) : [...prev, item]
        );
        setTotalNumListings((total) => exists ? total - item[1] : total + item[1]);
    };

    const clearAll = () => {setSelected([]); setTotalNumListings(0)};

    return (
        <div className="row">
            <div className="col-12 col-md-7 d-flex gap-5 z-0">
                <Dropdown show={show} onToggle={(val) => setShow(val)}>
                    <Dropdown.Toggle as="div" bsPrefix="p-0">
                        <InputGroup>
                            <Form.Control
                                placeholder={"Search..."}
                                value={search}
                                onChange={(e) => {
                                    setSearch(e.target.value);
                                    setShow(true);
                                }}
                                onFocus={() => setShow(true)}
                                onClick={(e) => {e.stopPropagation(); setShow(true)}}
                            />
                            {search && (
                                <Button
                                    variant="outline-primary"
                                    onClick={() => { setSearch(""); setShow(false); }}
                                >x</Button>
                            )}
                        </InputGroup>
                        
                    </Dropdown.Toggle>
                    

                    <Dropdown.Menu className="w-auto p-2 overflow-y-auto" style={{maxHeight : "25rem"}}>
                        {filtered.length === 0 ? (
                            <Dropdown.ItemText className="text-muted">No results</Dropdown.ItemText>
                        ) : (
                            filtered.map(([option, num_listings]) => (
                            <Dropdown.Item
                                as="div"
                                key={option}
                                onClick={() => {toggle([option, num_listings]); setSearch("")}}
                                className="d-flex align-items-center rounded"
                            >
                            <Form.Check
                                type="checkbox"
                                checked={selected.some(([k]) => k === option)}
                                onChange={() => {}}
                                onClick={(e) => {e.stopPropagation(); toggle([option, num_listings]); setSearch("")}}
                                readOnly
                                label={<p className="lead fs-6 fs-md-5">{`${option} (${num_listings})`}</p>}
                            />
                            </Dropdown.Item>
                            ))
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                {selected.length > 0 &&
                    <Button variant="link" size="md" onClick={clearAll} className="align-self-start border border-2 border-primary-dark text-primary-dark text-decoration-none">
                        Clear all
                    </Button>
                }
            </div>
            <div className="col-12 col-md-5 d-flex flex-column pe-2 mt-3 mt-md-0 overflow-y-auto" style={{maxHeight : "24rem"}}>
                <h1 className="display-6 text-center">{`Total listings`}</h1>
                <h1 className="display-4 text-center">{`${totalNumListings}`}</h1>
                {selected.map(([item, l]) => (
                    <div className="p-1 m-2 text-center">
                        {`${item} : ${l}`}
                    </div>
                ))}
                
            </div>
        </div>
    );

}

export default CountyDropdown