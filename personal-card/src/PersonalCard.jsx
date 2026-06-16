import "./PersonalCard.css";
import profile from "./assets/dog.jpg";

function PersonalCard({ name, role, hobby }) {
  return (
    <div className="card">
      <img src={profile} alt="profile" className="profile-img" />
      <h2>{name}</h2>
      <p>{role}</p>
      <p>Hobby: {hobby}</p>
    </div>
  );
}

export default PersonalCard;
