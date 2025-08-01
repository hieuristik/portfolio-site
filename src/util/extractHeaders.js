import { useState, useEffect } from 'react';

export default function usePageHeaders() {
  const [headers, setHeaders] = useState([]);

  useEffect(() => {
    const nodes = document.querySelectorAll('h1, h2, h3');
    const extracted = Array.from(nodes).map((node) => ({
      id: node.id,
      text: node.innerText,
      level: node.tagName,
    }));
    setHeaders(extracted);
  }, []);

  return headers;
}
