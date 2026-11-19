type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  detail?: string;
};

export function SectionHeading({ eyebrow, title, detail }: SectionHeadingProps) {
  return (
    <div className="section-heading" data-reveal>
      <p className="eyebrow">{eyebrow}</p>
      <div className="section-heading-row">
        <h2>{title}</h2>
        {detail ? <p>{detail}</p> : null}
      </div>
    </div>
  );
}
