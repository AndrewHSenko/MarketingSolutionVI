// <a href="https://unsplash.com/illustrations/a-house-with-a-green-arrow-pointing-to-the-right-KVLB3Dr2gOM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Illustration</a> by <a href="https://unsplash.com/@roundicons/illustrations?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Round Icons</a> on <a href="https://unsplash.com/illustrations?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      

// <a href="https://unsplash.com/illustrations/a-living-room-with-a-couch-and-a-lamp-tVnqd8wmm98?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Illustration</a> by <a href="https://unsplash.com/@graphicsstocks/illustrations?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Graphics Stocks</a> on <a href="https://unsplash.com/illustrations?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      

// <a href="https://unsplash.com/illustrations/man-standing-at-a-signpost-with-multiple-directions-rhgdVQzjTp0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Illustration</a> by <a href="https://unsplash.com/@publicdomainvectors/illustrations?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Public domain vectors</a> on <a href="https://unsplash.com/illustrations?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
// Question ask mark Icon by Javis V. Pérez on <a href="https://icon-icons.com/authors/932-javis-v-perez">Icon-Icons.com</a>




import { useState, useRef } from "react";

const css = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Syne:wght@700;800&display=swap');
  @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css');

  :root {
    --ink: #0d0d0d;
    --paper: #f5f0e8;
    --accent: #e8440a;
    --muted: #9e9789;
    --border: #c8c0b0;
  }

  body { background: var(--paper); }

  .app-shell {
    min-height: 100vh;
    background: var(--paper);
    font-family: 'DM Mono', monospace;
    color: var(--ink);
  }

  .title-block {
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    font-size: clamp(1.6rem, 4vw, 2.4rem);
    letter-spacing: -0.03em;
    line-height: 1;
  }

  .subtitle {
    font-size: 0.72rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--muted);
  }

  .panel {
    background: #fff;
    border: 1.5px solid var(--border);
    border-radius: 2px;
  }

  .panel-label {
    font-size: 0.65rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--muted);
    border-bottom: 1px solid var(--border);
    padding: 0.5rem 1rem;
  }

  /* ── image stage ── */
  .stage {
    background: repeating-conic-gradient(#e8e2d8 0% 25%, #ede8df 0% 50%) 0 0 / 20px 20px;
    border: 1.5px solid var(--border);
    border-radius: 2px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    min-height: 340px;
  }

  .stage-img {
    display: block;
    transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1),
                filter 0.25s ease,
                opacity 0.25s ease;
    cursor: grab;
    user-select: none;
    -webkit-user-drag: none;
    max-width: 100%;
    max-height: 100%;
  }
  .stage-img:active { cursor: grabbing; }

  /* ── scale readout badge ── */
  .scale-badge {
    position: absolute;
    top: 10px;
    right: 10px;
    background: rgba(13,13,13,0.78);
    color: #f5f0e8;
    font-family: 'DM Mono', monospace;
    font-size: 0.72rem;
    padding: 3px 8px;
    border-radius: 2px;
    backdrop-filter: blur(4px);
    pointer-events: none;
  }

  /* ── controls ── */
  .ctrl-label {
    font-size: 0.7rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--ink);
    margin-bottom: 4px;
  }

  .ctrl-value {
    font-family: 'DM Mono', monospace;
    font-size: 0.78rem;
    color: var(--accent);
    min-width: 3.2ch;
    text-align: right;
  }

  input[type="range"] {
    accent-color: var(--accent);
    cursor: pointer;
  }

  /* ── preset buttons ── */
  .preset-btn {
    font-family: 'DM Mono', monospace;
    font-size: 0.7rem;
    letter-spacing: 0.08em;
    border: 1.5px solid var(--border) !important;
    background: transparent !important;
    color: var(--ink) !important;
    border-radius: 2px !important;
    padding: 5px 10px !important;
    transition: background 0.15s, color 0.15s !important;
  }
  .preset-btn:hover, .preset-btn.active-preset {
    background: var(--ink) !important;
    color: var(--paper) !important;
    border-color: var(--ink) !important;
  }

  /* ── fit mode toggles ── */
  .fit-btn {
    font-family: 'DM Mono', monospace;
    font-size: 0.68rem;
    letter-spacing: 0.06em;
    border: 1.5px solid var(--border) !important;
    border-radius: 2px !important;
    background: transparent !important;
    color: var(--muted) !important;
    padding: 4px 9px !important;
    transition: all 0.15s !important;
  }
  .fit-btn.active-fit {
    background: var(--accent) !important;
    border-color: var(--accent) !important;
    color: #fff !important;
  }

  /* ── reset btn ── */
  .reset-btn {
    font-family: 'DM Mono', monospace;
    font-size: 0.68rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    border: 1.5px solid var(--border) !important;
    background: transparent !important;
    color: var(--muted) !important;
    border-radius: 2px !important;
    transition: all 0.15s !important;
  }
  .reset-btn:hover {
    border-color: var(--accent) !important;
    color: var(--accent) !important;
  }

  /* ── info row ── */
  .info-chip {
    font-size: 0.65rem;
    background: var(--paper);
    border: 1px solid var(--border);
    border-radius: 2px;
    padding: 2px 8px;
    color: var(--muted);
  }
`;

const SAMPLE_IMAGE =
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80";

const PRESETS = [
  { label: "25%", scale: 0.25 },
  { label: "50%", scale: 0.5 },
  { label: "75%", scale: 0.75 },
  { label: "100%", scale: 1 },
  { label: "150%", scale: 1.5 },
  { label: "200%", scale: 2 },
];

const FIT_MODES = ["contain", "cover", "fill", "none"];

export default function DynamicImageScale() {
  const [scale, setScale] = useState(1);
  const [rotate, setRotate] = useState(0);
  const [opacity, setOpacity] = useState(100);
  const [blur, setBlur] = useState(0);
  const [fitMode, setFitMode] = useState("contain");
  const [imgSrc, setImgSrc] = useState(SAMPLE_IMAGE);
  const fileRef = useRef();

  const reset = () => {
    setScale(1);
    setRotate(0);
    setOpacity(100);
    setBlur(0);
    setFitMode("contain");
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setImgSrc(url);
  };

  const transform = `scale(${scale}) rotate(${rotate}deg)`;
  const filter = `blur(${blur}px)`;

  return (
    <>
      <style>{css}</style>
      <div className="app-shell py-4 px-3">
        <div className="container-lg">

          {/* Header */}
          <div className="d-flex align-items-end justify-content-between mb-4 flex-wrap gap-2">
            <div>
              <div className="subtitle mb-1">React Bootstrap · Image Utility</div>
              <div className="title-block">Dynamic Image Scaling</div>
            </div>
            <div className="d-flex gap-2 align-items-center flex-wrap">
              <button className="btn reset-btn btn-sm" onClick={reset}>↺ Reset</button>
              <button
                className="btn preset-btn btn-sm"
                onClick={() => fileRef.current.click()}
              >
                ＋ Upload image
              </button>
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                className="d-none"
                onChange={handleFile}
              />
            </div>
          </div>

          <div className="row g-3">
            {/* Stage */}
            <div className="col-lg-8">
              <div className="stage" style={{ height: 420 }}>
                <img
                  src={imgSrc}
                  alt="preview"
                  className="stage-img"
                  style={{
                    transform,
                    filter,
                    opacity: opacity / 100,
                    objectFit: fitMode,
                    width: "100%",
                    height: "100%",
                  }}
                  onError={() => setImgSrc(SAMPLE_IMAGE)}
                />
                <div className="scale-badge">
                  {(scale * 100).toFixed(0)}% · {rotate}° · {opacity}%op
                </div>
              </div>

              {/* Info row */}
              <div className="d-flex gap-2 mt-2 flex-wrap">
                <span className="info-chip">transform: scale({scale.toFixed(2)}) rotate({rotate}deg)</span>
                <span className="info-chip">filter: blur({blur}px)</span>
                <span className="info-chip">opacity: {(opacity / 100).toFixed(2)}</span>
                <span className="info-chip">object-fit: {fitMode}</span>
              </div>
            </div>

            {/* Controls */}
            <div className="col-lg-4 d-flex flex-column gap-3">

              {/* Scale slider */}
              <div className="panel">
                <div className="panel-label">Scale</div>
                <div className="p-3">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="ctrl-label">Scale factor</span>
                    <span className="ctrl-value">{(scale * 100).toFixed(0)}%</span>
                  </div>
                  <input
                    type="range"
                    className="form-range mb-3"
                    min={0.1} max={3} step={0.01}
                    value={scale}
                    onChange={(e) => setScale(Number(e.target.value))}
                  />
                  <div className="d-flex flex-wrap gap-1">
                    {PRESETS.map((p) => (
                      <button
                        key={p.label}
                        className={`preset-btn btn btn-sm ${scale === p.scale ? "active-preset" : ""}`}
                        onClick={() => setScale(p.scale)}
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Rotate */}
              <div className="panel">
                <div className="panel-label">Rotation</div>
                <div className="p-3">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="ctrl-label">Degrees</span>
                    <span className="ctrl-value">{rotate}°</span>
                  </div>
                  <input
                    type="range"
                    className="form-range mb-2"
                    min={-180} max={180} step={1}
                    value={rotate}
                    onChange={(e) => setRotate(Number(e.target.value))}
                  />
                  <div className="d-flex gap-1 flex-wrap">
                    {[0, 90, 180, -90].map((d) => (
                      <button
                        key={d}
                        className={`preset-btn btn btn-sm ${rotate === d ? "active-preset" : ""}`}
                        onClick={() => setRotate(d)}
                      >
                        {d}°
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Opacity + Blur */}
              <div className="panel">
                <div className="panel-label">Filters</div>
                <div className="p-3">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <span className="ctrl-label">Opacity</span>
                    <span className="ctrl-value">{opacity}%</span>
                  </div>
                  <input
                    type="range"
                    className="form-range mb-3"
                    min={0} max={100} step={1}
                    value={opacity}
                    onChange={(e) => setOpacity(Number(e.target.value))}
                  />
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <span className="ctrl-label">Blur</span>
                    <span className="ctrl-value">{blur}px</span>
                  </div>
                  <input
                    type="range"
                    className="form-range"
                    min={0} max={20} step={0.5}
                    value={blur}
                    onChange={(e) => setBlur(Number(e.target.value))}
                  />
                </div>
              </div>

              {/* Object-fit mode */}
              <div className="panel">
                <div className="panel-label">Object-fit mode</div>
                <div className="p-3">
                  <div className="d-flex gap-1 flex-wrap">
                    {FIT_MODES.map((m) => (
                      <button
                        key={m}
                        className={`fit-btn btn btn-sm ${fitMode === m ? "active-fit" : ""}`}
                        onClick={() => setFitMode(m)}
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}