"use client";

import usePageHeaders from "../util/extractHeaders"
import "../app/tableOfContentsStyles.css"

export default function TableOfContents({ headers: customHeaders}) {
    const defaultHeaders = usePageHeaders();
    const headers = customHeaders || defaultHeaders;
    
    return (
        <div className="table-of-contents-container">
            <h2>Table of Contents</h2>
            <ul>
                {headers.slice(0, -1).map((header) => (
                    <li key={header.id}>
                        <a href={`#${header.id}`}>{header.text}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}