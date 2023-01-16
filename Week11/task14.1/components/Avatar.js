import { useContext } from "react";
import "./avatar.css";

export default function Avatar() {
  const userData = useContext(UserProvider);

  return (
    <div className="avatar">
      <img className="avatar__image" src={userData.avatar} alt="avatar" />
    </div>
  );
}