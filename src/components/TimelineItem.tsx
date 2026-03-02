type TimelineItemProps = {
  title: string;
  company: string;
  period: string;
  achievements: string[];
  imagePath: string;
};

export default function TimelineItem({ title, company, period, achievements, imagePath }: TimelineItemProps) {
  return (
    <div className="timeline-item">
      <div
        className="timeline-marker"
        style={{ backgroundImage: `url(/assets/${imagePath})` }}
      />
      <div className="timeline-content">
        <p className="timeline-company">{company}</p>
        <p className="timeline-title">{title}</p>
        <p className="timeline-period">{period}</p>

        <ul className="timeline-achievements">
          {achievements.map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}