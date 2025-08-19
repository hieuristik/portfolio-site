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
          <p>Hey, I’m glad you made it.</p>
          <p>{"I’m <b>Andrew Le</b> — a Vietnamese-American software engineer-in-training with a background in data engineering and an ever-growing obsession with building inclusive, meaningful software."}</p>
          <p>{"After graduating from UC Irvine with a B.S. in Computer Science, I packed up and moved to Vietnam. It was part life reboot, part exploration of opportunities beyond the usual tech grind. This site? It’s a portfolio, a digital journal, and a playground for testing whatever weird idea I can't shake off."}</p>
          <SocialButtons />

          <br /><h1 id="why-i-build">WHY I BUILD</h1>
          <p>{"My fascination with technology began at home — watching my dad bring home what looked like piles of electronic junk and somehow, magically, breathe life back into them. Broken stereos, dusty desktops, forgotten gadgets — he’d fix them all, and I’d sit nearby, wide-eyed."}</p>
          <p>{"I built my first computer with him when I was barely tall enough to reach the table. Looking back, he was the spark — the reason I wandered into the world of Computer Science."}</p>
          <p>{"At heart, I’m a tinkerer. I love dismantling things, understanding how they work, and (hopefully) putting them back together better. There’s something beautiful in that messy, trial-and-error process — a space full of learning, surprise, and clarity."}</p>
          <p>{"When I was a kid and someone asked, “What do you want to be when you grow up?”, I’d say: “I just want to make people smile.” These days, I’d answer the same — but with more precision. I want to build things that help people. Especially those who’ve been overlooked, left out, or underestimated."}</p>
          
          <br /><h1 id="this-site-as-a-project">THIS SITE AS A PROJECT</h1>
          <p>{"This site isn’t just a portfolio — it’s alive. A work-in-progress, a testbed, a reflection of everything I’m learning and unlearning."}</p>
          <p>{"Everything you see here — from layout to component logic to markdown parsing — was built from scratch. No templates. No site builders. Just code, curiosity, and lots of coffee."}</p>

          <br /><h1 id="lets-connect">LET'S CONNECT</h1>
          <p>{"Thanks for stopping by — it genuinely means a lot."}</p>
          <p>{"I’m always open to collaboration, passion projects, or just good conversation. If something here resonates with you, don’t hesitate to reach out."}</p>
          <p>{"Shoot me an email or find me on LinkedIn. Let’s build something cool — or at least have a good chuckle trying."}</p>
          <EmailCopyToClipboard />
        </div>
      </div>

      <TableOfContents />
      <br />
      <Footer />
    </div>
  );
}
