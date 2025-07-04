import './Header.css'
import { FaCoffee } from "react-icons/fa";

export default function WebCafeHomePage() {
  return (
    <div className="webcafe-container">
      {/* Notification Bar */}
      <div className="notification-bar">
        <marquee behavior="scroll" direction="left" scrollamount="5">
          We're excited to share that <strong>_cafe_</strong> AI's investment,
          <span className="highlight"> Bumpups</span>, has secured funding from Google! 🌲
        </marquee>
      </div>

      {/* Header */}
      <div className="header">
        <div className="logo">
          <FaCoffee size={28} />
        </div>
        <div className="header-buttons">
          <button className="btn-outline animated-button">Content Catalog</button>
          <button className="btn-filled animated-button">Take This Website</button>
        </div>
      </div>

      {/* Main Section */}
      <div className="main-card"> 
        <h1 className="brand-title"> {'{'} <span className="cafe">_cafe_</span> {'}'} </h1> 
        <p className="description"> Based in San Francisco, <span className="cafe-bold">_cafe_</span> creates and invests in AI and SaaS solutions. </p> 
        <div className="investment-card animated-button"> <p className="investment-title">active investment</p> <p className="investment-link">bumpups.com</p> </div> 
        </div>
    </div>
  );
}
