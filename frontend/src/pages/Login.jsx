import { useState } from "react";

export default function MSVILogin() {
  const [email, setEmail]               = useState("");
  const [password, setPassword]         = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading]           = useState(false);
  const [error, setError]               = useState("");
  const [forgotSent, setForgotSent]     = useState(false);

  const handleLogin = () => {
    setError("");
    if (!email.trim() || !password.trim()) {
      setError("Please enter both email and password.");
      return;
    }
    setLoading(true);

    // TODO: Replace with real JWT auth call
    // const res = await fetch("/api/auth/login", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ email, password }),
    // });
    // const data = await res.json();
    // if (!res.ok) { setError(data.message); setLoading(false); return; }
    // localStorage.setItem("token", data.token);

    setTimeout(() => {
      setLoading(false);
      setError("Invalid credentials. (Auth not yet connected.)");
    }, 1200);
  };

  const handleForgotPassword = () => {
    // TODO: trigger forgot-password flow
    setForgotSent(true);
    setTimeout(() => setForgotSent(false), 3000);
  };

  const handleKeyDown = (e) => { if (e.key === "Enter") handleLogin(); };

  return (
    <div className="msvi-root d-flex align-items-center justify-content-center min-vh-100">
      <div className="msvi-panel">

        {/* Title */}
        <h1 className="display-5 fw-light msvi-title">MSVI Login</h1>
        <div className="msvi-title-bar mb-4" />

        {/* Email */}
        <div className="mb-3">
          <label className="form-label text-uppercase small fw-semibold msvi-label">
            Email
          </label>
          <input
            className="form-control msvi-input"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setError(""); }}
            onKeyDown={handleKeyDown}
            autoComplete="email"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="form-label text-uppercase small fw-semibold msvi-label">
            Password
          </label>
          <div className="msvi-input-wrap">
            <input
              className="form-control msvi-input msvi-input--has-toggle"
              type={showPassword ? "text" : "password"}
              placeholder="enter password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(""); }}
              onKeyDown={handleKeyDown}
              autoComplete="current-password"
            />
            <button
              className="msvi-toggle"
              onClick={() => setShowPassword((v) => !v)}
              tabIndex={-1}
              type="button"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        {/* Error */}
        {error && (
          <div className="msvi-error-box px-3 py-2 mb-3 small">
            ⚠ {error}
          </div>
        )}

        {/* Sign In */}
        <div className="d-grid mb-2">
          <button
            className="btn msvi-btn-login"
            onClick={handleLogin}
            disabled={loading}
            type="button"
          >
            {loading
              ? <><span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true" />Authenticating…</>
              : "Sign In"
            }
          </button>
        </div>

        {/* Forgot Password */}
        <div className="d-grid">
          <button
            className="btn msvi-btn-forgot"
            onClick={handleForgotPassword}
            type="button"
          >
            Forgot Password?
          </button>
        </div>

        {/* Confirmation */}
        {forgotSent && (
          <p className="lead text-center mt-3 mb-0 msvi-confirm">
            ✓ Reset instructions sent. Check your email.
          </p>
        )}

      </div>
    </div>
  );
}