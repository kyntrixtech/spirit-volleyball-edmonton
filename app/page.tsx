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
    text: "Serving, passing, setting, attacking, footwork, court awareness, and safe movement patterns for new players.",
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

const volleyballSkills = [
  "Serving",
  "Passing",
  "Setting",
  "Attacking",
  "Game strategy",
  "Team communication",
];

const openGymDetails = [
  { label: "Date", value: "August 15, 2026" },
  { label: "Time", value: "2:00-4:00 PM" },
  { label: "Location", value: "EIC Gym" },
  { label: "Registration", value: "No registration needed. Just show up." },
];

const coaches = [
  {
    name: "Esther",
    role: "Head Coach",
    image: "/coach-esther.png",
    bio: "Esther brings energy, patience, and a player-first approach to helping athletes build skill, teamwork, and confidence.",
  },
  {
    name: "Nancy",
    role: "Coach",
    image: "/coach-nancy.png",
    bio: "Lead. Inspire. Empower. Nancy guides players with a focus on skill, teamwork, confidence, and passion for the game.",
  },
  {
    name: "Melody",
    role: "Coach",
    image: "/coach-melody.png",
    bio: "Melody helps players grow with encouragement, strong fundamentals, teamwork, and passion for volleyball.",
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
            <Image
              src="/spirit-volleyball-logo.png"
              alt=""
              width={64}
              height={64}
              className="brandLogo"
            />
            <span>Spirit Volleyball Edmonton</span>
          </a>
          <div className="navLinks">
            <a href="#program">Program</a>
            <a href="#benefits">Benefits</a>
            <a href="#coaches">Coaches</a>
            <a href="#register">Register</a>
          </div>
        </nav>

        <div className="heroContent">
          <p className="eyebrow">Upcoming beginner program for girls ages 10-12</p>
          <h1>Build skills, confidence, and friendships through volleyball.</h1>
          <p className="heroLead">
            A welcoming Spirit Volleyball Edmonton program focused on fundamentals,
            teamwork, communication, and joy in movement.
          </p>
          <div className="heroActions">
            <a
              className="button primary"
              href="https://forms.cloud.microsoft/r/vjf6Kp2SpV"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register now
            </a>
            <a className="button secondary" href="#program">
              Explore program
            </a>
          </div>
        </div>
      </section>

      <section className="introBand" aria-label="Program summary">
        <div>
          <span className="stat">10-12</span>
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

      <section className="section eventSection" aria-labelledby="open-gym-title">
        <div className="eventCard">
          <div>
            <p className="sectionKicker">Open Gym</p>
            <h2 id="open-gym-title">Come try volleyball with us.</h2>
            <p>
              Girls interested in Spirit Volleyball Edmonton can drop in for an
              open gym session. No registration is needed for this event.
            </p>
          </div>
          <dl className="eventDetails" aria-label="Open gym details">
            {openGymDetails.map((detail) => (
              <div key={detail.label}>
                <dt>{detail.label}</dt>
                <dd>{detail.value}</dd>
              </div>
            ))}
          </dl>
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
        <div className="skillsLearned" aria-label="Volleyball skills learned">
          {volleyballSkills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section className="section coachesSection" id="coaches">
        <div className="sectionHeader">
          <p className="sectionKicker">Coaching Team</p>
          <h2>Supportive coaches for every stage of learning.</h2>
        </div>
        <div className="coachGrid">
          {coaches.map((coach) => (
            <article
              className={coach.image ? "coachCard featuredCoach" : "coachCard placeholderCoach"}
              key={coach.name}
            >
              {coach.image ? (
                <Image
                  src={coach.image}
                  alt={`${coach.role} ${coach.name}`}
                  width={768}
                  height={512}
                  className="coachPhoto"
                />
              ) : (
                <div className="coachPlaceholder" aria-hidden="true">
                  <span>{coach.name.slice(-1)}</span>
                </div>
              )}
              <div className="coachInfo">
                <p className="coachRole">{coach.role}</p>
                <h3>{coach.name}</h3>
                <p>{coach.bio}</p>
              </div>
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
              groups, communicate with families, and understand each child&apos;s
              needs. Required questions help us deliver the program effectively;
              optional questions can be completed when they apply.
            </p>
          </div>
          <div className="privacyBox">
            <h3>Registration Details</h3>
            <div className="feeList">
              <p>
                <strong>Open Gym:</strong> August 15, 2026, from 2:00-4:00 PM
                at EIC Gym. No registration needed. Just show up.
              </p>
              <p>
                <strong>Early Bird:</strong> $325 when registered by August 21, 2026.
              </p>
              <p>
                <strong>Fees:</strong> $350/player with an option for two instalments.
              </p>
            </div>
            <h3>Privacy Promise</h3>
            <p>
              Personal information collected through the form will be used only
              for this volleyball program and will be kept confidential.
            </p>
            <a
              className="button primary full"
              href="https://forms.cloud.microsoft/r/vjf6Kp2SpV"
              target="_blank"
              rel="noopener noreferrer"
            >
              Complete registration form
            </a>
            <a className="emailLink" href="mailto:volleyballgirls2026@gmail.com?subject=Spirit%20Volleyball%20Edmonton%20Program">
              Questions? Email volleyballgirls2026@gmail.com
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
