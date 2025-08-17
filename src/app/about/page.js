import DownloadButton from "@/components/DownloadButton";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="pt-24 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6 text-center">
          
          {/* About Me Header */}
          <h1 id="about-me" className="text-3xl font-bold">ABOUT ME</h1>
          
          {/* Intro Paragraphs */}
          <p>Hi, I’m <b>Andrew Le</b> — Vietnamese-American by blood, California-born, Texas-raised. I thrive on curiosity, caffeine, and the quiet joy of learning something new.</p>
          <p>I’m the kind of person who reads in the morning, plays guitar at night, and thinks about code somewhere in between. I find inspiration in a good photo, a well-written sentence, or a beautifully scored film. My passions stretch far and wide, but one thread ties them together: creation.</p>
          <p>I’ve always been fascinated by technology — ever since I was a kid tinkering with discarded electronics, trying to figure out how things work (and occasionally how to fix them). That spirit never really left.</p>
          <p>Moving to Vietnam wasn’t just a homecoming — it was an experiment in reinvention. I wanted to reconnect with my roots while challenging myself in new ways, beyond the traditional tech track.</p>
          <p>Though my degree is behind me, I still consider myself a student — of software, of systems, of people. Those who know me best might describe me as an old soul (a kind one, I hope — not a cranky one). And while I can’t confirm that myself, I’ll admit I do have a soft spot for The Beatles, The Smiths, and The Cure (all of the <i>The's</i>, now that I think about it).</p>

          {/* Technical Focus Section */}
          <section className="mt-16">
            <h1 className="text-3xl font-bold mb-6 text-center">TECHNICAL FOCUS</h1>

            {/* Left-align the internal content */}
            <div className="text-left space-y-4">
              <p>
                <span className="font-semibold">Programming Languages:</span>{" "}
                Python · C/C++ · Java · JavaScript · HTML/CSS · SQL
              </p>
              <p>
                <span className="font-semibold">Tools:</span>{" "}
                Git · Docker · AWS (EC2) · DBeaver · Lightup · Jira · Confluence ·
                Lucidchart · Kafka · Qlik Replicate
              </p>
              <p>
                <span className="font-semibold">Applications:</span>{" "}
                MySQL Workbench · MongoDB Compass
              </p>
              <p>I’m especially interested in backend engineering and data-driven systems — the invisible architecture that powers everything we see. I enjoy designing scalable solutions, optimizing performance, and making sense of large datasets.</p>
              <p>Lately, I’ve been diving deeper into AI frameworks and models, experimenting with LLMs and exploring how to build intelligent, accessible tools that serve real human needs. The blend of logic, empathy, and impact in AI keeps me hooked.</p>
            </div>
          </section>
          <DownloadButton />

          {/* What's Next Section */}
          <section className="mt-20">
            <h1 id="whats-next" className="text-3xl font-bold text-center">WHAT'S NEXT?</h1>
            <p className="mt-4">You’ll just have to check back now and then to see what unfolds :)</p>
          </section>

        </div>
      </div>
      <Footer />
    </div>
  );
}
