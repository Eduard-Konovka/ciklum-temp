import './callback.css';

const Callback = () => {
  return (
    <div>
      <h2>Callback component</h2>
      <ol className="list-group">
        <li className="callback__year list-group-item">
          Поточний рік: <span>year</span>
        </li>
        <li className="callback__number list-group-item">
          Поточне число: <span>number</span>
        </li>
        <li className="callback__secret-number list-group-item">
          Поточне секретне число: <span>secretNumber</span>
        </li>
      </ol>
      <div className="callback__buttons">
        <button
          className="callback__button-year btn btn-primary"
          onClick={() => {}}
        >
          Змінити рік
        </button>
        <button
          className="callback__button-number btn btn-secondary"
          onClick={() => {}}
        >
          Змінити число
        </button>
        <button
          className="callback__button-seacret-number btn btn-success"
          onClick={() => {}}
        >
          Змінити секретне число
        </button>
      </div>
    </div>
  );
};

export default Callback;
