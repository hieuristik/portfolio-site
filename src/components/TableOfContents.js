"use client";

import usePageHeaders from "../util/extractHeaders"

export default function TableOfContents({ headers: customHeaders}) {
    const defaultHeaders = usePageHeaders();
    const headers = customHeaders || defaultHeaders;
    
    return (
        <div>
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