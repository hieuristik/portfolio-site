'use client'

import { useState } from 'react';
import { FiCopy, FiCheck } from 'react-icons/fi';
import '../app/emailCopyToClipboard.css';

export default function EmailCopyButton() {
  const [copied, setCopied] = useState(false);
  const email = "andrewle713@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <button onClick={handleCopy} className="email-copy-btn">
      <span className="email-label">{email}</span>
      {copied ? <FiCheck className="icon check-icon" /> : <FiCopy className="icon copy-icon" />}
    </button>
  );
}
