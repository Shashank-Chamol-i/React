import { useState } from "react";
import "./PasswordVisibility.css";

function EyeOpenIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 5C7 5 2.73 8.11 1 12C2.73 15.89 7 19 12 19C17 19 21.27 15.89 23 12C21.27 8.11 17 5 12 5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="12"
        r="3"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

function EyeSlashIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 12C3.7 8.92 7 6.5 12 6.5C13.59 6.5 15.08 6.83 16.42 7.42"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M21.97 12.01C20.27 15.09 17 17.51 12 17.51C10.41 17.51 8.92 17.18 7.58 16.59"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="2"
        y1="2"
        x2="22"
        y2="22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function getStrength(password) {
  if (!password) {
    return {
      score: 0,
      label: "Enter a password",
      labelClass: "label-empty",
    };
  }

  let score = 0;
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/\d/.test(password)) score++;
  if (/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) score++;

  let label = "";
  let labelClass = "";

  switch (score) {
    case 1:
      label = "Weak password";
      labelClass = "label-weak";
      break;
    case 2:
      label = "Fair password";
      labelClass = "label-fair";
      break;
    case 3:
      label = "Good password";
      labelClass = "label-good";
      break;
    case 4:
      label = "Strong password";
      labelClass = "label-strong";
      break;
    default:
      label = "Enter a password";
      labelClass = "label-empty";
  }

  return {
    score,
    label,
    labelClass,
  };
}

export default function PasswordVisibility() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { score, label, labelClass } = getStrength(password);

  return (
    <div className="page">
      <div className="card">
        <h2 className="title">Password Visibility</h2>

        <div className="field">
          <label className="field-label" htmlFor="pw">
            Password
          </label>
          <div className="input-wrap">
            <input
              id="pw"
              className="pw-input"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              autoComplete="new-password"
            />
            <button
              type="button"
              className="eye-btn"
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeSlashIcon /> : <EyeOpenIcon />}
            </button>
          </div>
        </div>

        <div className="bars">
          {[1, 2, 3, 4].map((bar) => (
            <div
              key={bar}
              className={`bar${password && bar <= score ? " bar-filled" : ""}`}
            />
          ))}
        </div>

        <p className={`strength-label ${labelClass}`}>{label}</p>
        <p className="hint">Use 8+ characters, uppercase, number, and symbol.</p>
      </div>
    </div>
  );
}
