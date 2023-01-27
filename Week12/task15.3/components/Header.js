import { useState } from "react";
import Button from "./Button";
import Title from "./Title";

export default function Header() {
  const [title, setTitle] = useState("Заголовок до змін");

  const onClickHandler = () => {
    setTitle("Заголовок був змінений");
  };

  return (
    <div className="d-flex flex-column">
      <Title title={title} />
      <Button onClick={onClickHandler} />
    </div>
  );
}
