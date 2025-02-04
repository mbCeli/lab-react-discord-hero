import "./Landing.css";

const title = "Imagine a place...";

function Landing() {
  return (
    <div>
      <nav className="navbar">
        <img
          src="../src/assets/discord-logo-white.png"
          alt="discord-logo"
          className="logo"
        />
        <img
          src="../src/assets/menu-icon.png"
          alt="menu-icon"
          className="burger"
        />
      </nav>

      <h1>{title.toUpperCase()}</h1>

      <p>
        ... where you can belong to a school club, a gaming group, or a
        worldwide art community. where just yo uand a handful of friends can
        spend time together. Aplace that makes it easy to talk every day and
        hang out more often.
      </p>

      <button className="mac">Download for Mac</button>
      <br />
      <button className="toDiscord">Open Discord in your browser</button>
        <br />
      <img
        src="../src/assets/discord-background.png"
        alt="discord-background"
        className="background"
      />
    </div>
  );
}

export default Landing;
