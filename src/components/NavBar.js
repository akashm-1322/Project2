import travelLogo from "../images/travel_logo.png"
export default function Navbar() {
  return (
    <div className="navigation">
      <img src={travelLogo} alt="Travel logo" className="travel-image"/>
      <h1 className="nav-title">My Travel App.</h1>
    </div>
  );
}