import Image from "next/image";

const principles = [
  ["01", "Listen first", "We begin with the room, the rituals around it and the way you want it to feel."],
  ["02", "Draw with purpose", "Proportion, comfort and material are resolved together—not added as an afterthought."],
  ["03", "Make it slowly", "Every piece passes through skilled hands before it arrives and settles into your home."],
] as const;

export function Philosophy() {
  return (
    <section className="philosophy" id="story">
      <div className="philosophy-intro" data-enter>
        <span className="section-kicker">Our point of view</span>
        <h2>Furniture should belong to a life, <em>not a trend.</em></h2>
        <p>We make expressive, enduring pieces for real homes. Objects that feel considered on day one and gather more meaning with time.</p>
      </div>

      <div className="philosophy-composition">
        <figure className="philosophy-image philosophy-image-tall">
          <Image src="/images/philosophy-craft-ai.jpg" alt="A furniture maker hand-finishing a dark walnut joint" fill sizes="(max-width: 820px) 100vw, 42vw" />
          <figcaption>Made by hand in Chattogram</figcaption>
        </figure>
        <div className="philosophy-note">
          <span>Since 2020</span>
          <p>Warm timber. Honest joinery. Generous comfort. Nothing added without reason.</p>
        </div>
        <figure className="philosophy-image philosophy-image-wide">
          <Image src="/images/philosophy-joinery-ai.jpg" alt="Dark walnut joinery and natural linen upholstery on a lounge chair" fill sizes="(max-width: 820px) 100vw, 45vw" />
        </figure>
      </div>

      <ol className="principles">
        {principles.map(([number, title, description]) => (
          <li key={number}>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
