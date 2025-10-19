import "./card.css";

export function Card({ title, desc, imgUrl }) {
  return (
    <>
      <div className="card">
        <img src={imgUrl} />
        <div className="card-title">{title}</div>
        <div className="card-desc">{desc}</div>
      </div>
    </>
  );
}
