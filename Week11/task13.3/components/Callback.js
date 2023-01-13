import { useState, useCallback } from "react";
import "./callback.css";

const Callback = () => {
  const [number, setNumber] = useState(1);
  const [year, setYear] = useState(2021);
  const [secretNumber, setSecretNumber] = useState(number * year * 3);

  const changeSecretNumberHandler = useCallback(
    (num) => setSecretNumber(number * year * num),
    [year]
  );

  return (
    <div>
      <h2>Callback component</h2>
      <ol className="list-group">
        <li className="callback__year list-group-item">
          Поточний рік: <span>{year}</span>
        </li>
        <li className="callback__number list-group-item">
          Поточне число: <span>{number}</span>
        </li>
        <li className="callback__secret-number list-group-item">
          Поточне секретне число: <span>{secretNumber}</span>
        </li>
      </ol>
      <div className="callback__buttons">
        <button
          className="callback__button-year btn btn-primary"
          onClick={() => setYear(year + 1)}
        >
          Змінити рік
        </button>
        <button
          className="callback__button-number btn btn-secondary"
          onClick={() => setNumber(number + 1)}
        >
          Змінити число
        </button>
        <button
          className="callback__button-seacret-number btn btn-success"
          onClick={() => changeSecretNumberHandler(3)}
        >
          Змінити секретне число
        </button>
      </div>
    </div>
  );
};

export default Callback;
