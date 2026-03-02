import TimelineItem from './TimelineItem.tsx'

export default function Experience() {
  return (
    <section id="experience" className="fullscreen-section">
      <h1>Experience</h1>

      <div className="timeline">
        <TimelineItem
          title="Software/DevOps Engineer Co-op"
          company="Wolters Kluwer"
          period="Jul 2024 – Dec 2024"
          description="Optimized backend services powering clinical software across 150+ hospitals."
          achievements={[
            "Reduced API latency by 30% in distributed microservices",
            "Automated CI/CD for 50+ services (40% fewer rollbacks)",
            "Integrated JUnit regression testing into production workflows"
          ]}
          imagePath='wolterskluwer.jpeg'
        />

        <TimelineItem
          title="Software Engineer Co-op"
          company="Salesloft (Drift)"
          period="Jul 2023 – Dec 2023"
          description="Built automation tooling and enterprise API integrations."
          achievements={[
            "Developed Python CLI managing 100+ billing objects",
            "Designed abstractions over 10+ REST APIs",
            "Implemented CI automation for trunk-based development"
          ]}
          imagePath='drift.webp'
        />

        {/* <TimelineItem
          title="Teaching Assistant"
          company="Northeastern University"
          period="Jan 2024 – Apr 2025"
          description="Led recitations and designed algorithmic coursework for 90+ students."
          achievements={[
            "Created dynamic programming & graph-based problems",
            "Mentored students on algorithmic optimization"
          ]}
          imagePath='northeastern.png'
        /> */}

        <TimelineItem
          title="MS in Computer Science"
          company="Georgia Institute of Technology"
          period="Aug 2025 – May 2027"
          description=""
          achievements={[
            "GPA: 4.00",
          ]}
          imagePath='gt.png'
        />

        <TimelineItem
          title="BS in Computer Science and Mathematics"
          company="Northeastern University"
          period="Aug 2021 – May 2025"
          description=""
          achievements={[
            "GPA: 3.96",
            "Honors College",
          ]}
          imagePath='northeastern.png'
        />
      </div>
    </section>
  );
}