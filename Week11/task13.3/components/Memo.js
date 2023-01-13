import './memo.css';

const Memo = () => {
  return (
    <div>
      <h3>Memo</h3>
      <ol className="list-group">
        <li className="memo__year list-group-item">
          Поточний рік: <span>year</span>
        </li>
        <li className="memo__number list-group-item">
          Поточне число: <span>number</span>
        </li>
        <li className="memo__secret-number list-group-item">
          Поточне секретне число: <span>secretNumber</span>
        </li>
      </ol>
      <div className="memo__buttons">
        <button
          type="button"
          className="memo__button-year btn btn-primary"
          onClick={() => {}}
        >
          Змінити рік
        </button>
        <button
          type="button"
          className="memo__button-number btn btn-secondary"
          onClick={() => {}}
        >
          Змінити число
        </button>
      </div>
    </div>
  );
};

export default Memo;
