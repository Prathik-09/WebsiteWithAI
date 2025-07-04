import "./Section.css";

const cards = [
  {
    title: "AI Marketplace",
    description: "Pre-built Services",
    url: "webcafesoftware.com",
    image: "https://buildersconsolelog.com/static/media/market-prev.a9eecd99d812607208e5.jpg",
    button: "VIEW INVESTMENT",
  },
  {
    title: "Bumpups",
    description: "Chat with videos for anything.",
    url: "https://bumpups.com/",
    image: "https://imgs.search.brave.com/Fu4I-3-wxZCEshx3g5iXah_I34LPLz8-yAoaRYbdcq4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vZGF1bnFnam5n/L2ltYWdlL3VwbG9h/ZC9mX3dlYnAscV9h/dXRvLHdfYXV0byxk/cHJfYXV0by92MTcz/NzYyNDQ1NS9Mb2dv/cy9idW1wdXBzLWxv/Z28ud2VicC53ZWJw",
    button: "VIEW INVESTMENT",
  },
  {
    title: "Builder’s Console Log",
    description: "AI For Entrepreneurs",
    url: "https://www.skool.com/",
    image: "https://imgs.search.brave.com/JEpzlOSqtBacaJFzsUCAORLZF6pN_uNdUDzbsmsFZ5c/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTA3/NDg1MzcvcGhvdG8v/eW91bmctc3R1ZGVu/dHMtd2Fsa2luZy1k/b3duLWhhbGx3YXkt/b2Ytc2Nob29sLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1J/T0p0QmQwVXVVWjVJ/eGVYYmw4alZnQnlN/dF8tNTRRb3duQ3Jf/bXZzdHdrPQ",
    button: "VIEW INVESTMENT",
  },
];

export default function Section() {
  return (
    <div className="midpage-wrapper">
      <div className="card-grid">
        {cards.map((card, idx) => (
          <div className="investment-card" key={idx}>
            <img src={card.image} alt={card.title} className="media" />
            <div className="card-content">
              <h3>{card.title}</h3>
              <p className="desc">{card.description}</p>
              <p className="link">{card.url}</p>
            </div>
            <button className="view-btn">{card.button}</button>
          </div>
        ))}
      </div>

      <div className="newsletter-card">
        <h2>☕ Cafe Newsletter</h2>
        <p>
          {'{'} we will leverage <strong>AI and software</strong> to automate systems efficiently {'}'}
        </p>
        <div className="newsletter-form">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
}
