export default function Section({ id, title, subtitle, children }) {
  const titleId = `${id}-title`

  return (
    <section id={id} className="section" aria-labelledby={titleId}>
      <div className="container">
        <h2 id={titleId} className="section-title">{title}</h2>
