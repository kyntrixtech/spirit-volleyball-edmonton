import Image from "next/image";

const benefits = [
  "Strength, coordination, and healthy movement habits",
  "Confidence, resilience, and positive stress relief",
  "Teamwork, communication, and leadership practice",
  "Friendships in a fun, supportive environment",
];

const skillBlocks = [
  {
    title: "Fundamentals First",
    text: "Passing, serving, setting, footwork, court awareness, and safe movement patterns for new players.",
  },
  {
    title: "Confidence In Motion",
    text: "Small-group drills help every girl get touches, try new skills, and feel progress week by week.",
  },
  {
    title: "Next-Step Pathways",
    text: "Players ready for more challenge are encouraged to explore tryouts and competitive opportunities.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <Image
          src="/volleyball-hero.png"
          alt="Girls playing volleyball near the net in an indoor gym"
          fill
          priority
          sizes="100vw"
          className="heroImage"
        />
        <div className="heroShade" />
        <nav className="nav" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="Spirit Volleyball Edmonton home">
            <span className="brandMark">V</span>
            <span>Spirit Volleyball Edmonton</span>
          </a>
          <div className="navLinks">
            <a href="#program">Program</a>
            <a href="#benefits">Benefits</a>
            <a href="#register">Register</a>
          </div>
        </nav>

        <div className="heroContent">
          <p className="eyebrow">Beginner program for girls ages 9-12</p>
          <h1>Build skills, confidence, and friendships through volleyball.</h1>
          <p className="heroLead">
            A welcoming Spirit Volleyball Edmonton program focused on fundamentals,
            teamwork, communication, and joy in movement.
          </p>
          <div className="heroActions">
            <a className="button primary" href="#register">
              Register interest
            </a>
            <a className="button secondary" href="#program">
              Explore program
            </a>
          </div>
        </div>
      </section>

      <section className="introBand" aria-label="Program summary">
        <div>
          <span className="stat">9-12</span>
          <span className="statLabel">Age group</span>
        </div>
        <div>
          <span className="stat">Beginner</span>
          <span className="statLabel">Skill level</span>
        </div>
        <div>
          <span className="stat">Supportive</span>
          <span className="statLabel">Learning environment</span>
        </div>
      </section>

      <section className="section split" id="program">
        <div>
          <p className="sectionKicker">Why Volleyball</p>
          <h2>Designed for a big stage of growth.</h2>
        </div>
        <div className="copyStack">
          <p>
            Participating in sports helps girls build strength, confidence, and
            resilience during a period of significant physical and emotional
            development. Regular physical activity supports overall health,
            helps manage stress, improves mood, and promotes healthy sleep and
            well-being.
          </p>
          <p>
            Through volleyball, girls also develop teamwork, communication,
            leadership, and problem-solving skills while building lasting
            friendships in a fun and supportive environment.
          </p>
        </div>
      </section>

      <section className="section" id="benefits">
        <div className="sectionHeader">
          <p className="sectionKicker">What Girls Gain</p>
          <h2>More than drills and rallies.</h2>
        </div>
        <div className="benefitGrid">
          {benefits.map((benefit, index) => (
            <article className="benefitCard" key={benefit}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{benefit}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section skillsSection">
        <div className="sectionHeader">
          <p className="sectionKicker">Development Path</p>
          <h2>A gentle start with room to grow.</h2>
        </div>
        <div className="skillGrid">
          {skillBlocks.map((block) => (
            <article className="skillCard" key={block.title}>
              <h3>{block.title}</h3>
              <p>{block.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section register" id="register">
        <div className="registerPanel">
          <div>
            <p className="sectionKicker">Parent Information</p>
            <h2>Help us organize a safe, supportive program.</h2>
            <p>
              The registration form collects the information needed to plan
              groups, communicate with families, and understand each child's
              needs. Required questions help us deliver the program effectively;
              optional questions can be completed when they apply.
            </p>
          </div>
          <div className="privacyBox">
            <h3>Privacy Promise</h3>
            <p>
              Personal information collected through the form will be used only
              for this volleyball program and will be kept confidential.
            </p>
            <a className="button primary full" href="mailto:info@example.com?subject=Girls%20Volleyball%20Development%20Program">
              Contact program organizer
            </a>
          </div>
        </div>
      </section>

      <footer>
        <p>Copyright © Kyntrix Technology Solutions Ltd.</p>
      </footer>
    </main>
  );
}
