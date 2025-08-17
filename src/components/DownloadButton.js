"use client";

import { Download } from "lucide-react";

export default function DownloadButton() {
  return (
    <div className="flex justify-center mt-6">
      <a
        href="/resume_on_site.pdf"
        download
        className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-white hover:bg-zinc-800 transition-colors"
      >
        <Download className="w-5 h-5" />
        Download Resume
      </a>
    </div>
  );
}
