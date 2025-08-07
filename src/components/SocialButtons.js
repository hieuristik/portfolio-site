import React from "react";
import "../app/socialButtonsStyles.css";
import { PiLinkedinLogoBold, PiGithubLogoBold } from "react-icons/pi";

export default function SocialButtons() {
  return (
    <div className="social-buttons-container">
      <a
        href="https://www.linkedin.com/in/leltrunghieu1017"
        target="_blank"
        rel="noopener noreferrer"
        className="social-button linkedin"
      >
        <PiLinkedinLogoBold />
      </a>
      <a
        href="https://github.com/hieuristik"
        target="_blank"
        rel="noopener noreferrer"
        className="social-button github"
      >
        <PiGithubLogoBold />
      </a>
    </div>
  );
} 