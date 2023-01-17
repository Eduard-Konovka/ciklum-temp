import { useUser } from "../context/use-user";
import "./avatar.css";

export default function Avatar() {
  const { avatar } = useUser();

  return (
    <div className="avatar">
      <img className="avatar__image" src={avatar} alt="avatar" />
    </div>
  );
}
