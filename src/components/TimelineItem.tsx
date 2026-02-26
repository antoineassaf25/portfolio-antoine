type TimelineItemProps = {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
};

export default function TimelineItem({ title, company, period, description, achievements }: TimelineItemProps) {
  return (
    <div className="timeline-item">
      <div className="timeline-marker" />
      <div className="timeline-content">
        <h3>{title}</h3>
        <h4>{company}</h4>
        <span className="period">{period}</span>

        <p>{description}</p>

        <ul>
          {achievements.map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}