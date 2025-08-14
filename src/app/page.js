import SocialButtons from "@/components/SocialButtons";
import TableOfContents from "@/components/TableOfContents";
import EmailCopyToClipboard from "@/components/EmailCopyToClipboard";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="pt-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="main-content space-y-4 max-w-4xl">

          <h1 id="welcome-to-my-digital-space">WELCOME TO MY DIGITAL SPACE</h1>
          <p>I’m Andrew, a Vietnamese-American software engineer with a background in data engineering and a growing obsession with developer tooling and backend infrastructure.</p>
          <p>After graduating from UC Irvine with a B.S. in Computer Science, I moved to Ho Chi Minh City to immerse myself in a new environment and pursue meaningful work in tech. This site is part portfolio, part personal archive, and part sandbox for trying out ideas.</p>
          <SocialButtons />

          <br /><h1 id="why-i-build">WHY I BUILD</h1>
          <p>Most of the things I build start from a personal itch — something I wish existed, or something I wanted to understand better. Whether it’s automating a workflow, solving a niche problem, or learning a new framework, I treat code as a way of thinking.</p>
          <p>I value clear logic, simplicity, and function-over-flash. I also enjoy writing internal tools and utilities that reduce friction for myself or others.</p>

          <br /><h1 id="creative-interests">CREATIVE INTERESTS</h1>
          <p>Outside of code, I spend time writing, playing acoustic fingerstyle guitar, and studying Vietnamese. These creative outlets keep me balanced and remind me that building — in any form — is both art and craft.</p>
          <p>I'm also fascinated by how people learn and communicate. This often informs how I structure documentation, write UI copy, or teach concepts to others.</p>

          <br /><h1 id="this-site-as-a-project">THIS SITE AS A PROJECT</h1>
          <p>This site isn’t just a portfolio — it’s also a living project. I’m using it to experiment with frontend frameworks (like Next.js and Tailwind), integrate APIs, and improve UX patterns. Eventually, I plan to add blog posts, a newsletter archive, and a dynamic photo/video section.</p>
          <p>Every piece here — from the design to the markdown parsing to the project grids — was built manually. No templates. No drag-and-drop builders.</p>

          <br /><h1 id="say-hello">SAY HELLO</h1>
          <p>If you’ve made it this far, thanks for being here.</p>
          <p>I’m always open to interesting projects, collaborations, or just casual conversation. Feel free to reach out on LinkedIn, check out my GitHub, or send me an email below.</p>
          <EmailCopyToClipboard />
        </div>
      </div>

      <TableOfContents />
      <br />
      <Footer />
    </div>
  );
}
