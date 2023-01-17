import { useContext } from "react";
import { userContext } from "../context/use-user";
import "./avatar.css";

export default function Avatar() {
  const userData = useContext(userContext);

  return (
    <div className="avatar">
      <img className="avatar__image" src={userData.avatar} alt="avatar" />
    </div>
  );
}
