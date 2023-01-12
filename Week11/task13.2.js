import { useState, useEffect } from "react";

const MIN_VALUE = 0;
const MAX_VALUE = 100;

export default function Slider(props) {
  const validInterval = () =>
    props.value < MIN_VALUE
      ? MIN_VALUE
      : props.value > MAX_VALUE
      ? MAX_VALUE
      : props.value;

  const [progress, setProgress] = useState(validInterval());
  const [isDisabledDecrement, setIsDisabledDecrement] = useState(false);
  const [isDisabledIncrement, setIsDisabledIncrement] = useState(false);

  useEffect(() => {
    progress === MIN_VALUE
      ? setIsDisabledDecrement(true)
      : setIsDisabledDecrement(false);

    progress === MAX_VALUE
      ? setIsDisabledIncrement(true)
      : setIsDisabledIncrement(false);
  }, [progress]);

  function decrement() {
    if (progress === MIN_VALUE) {
      return;
    }

    setProgress(progress - 1);
  }

  function increment() {
    if (progress === MAX_VALUE) {
      return;
    }

    setProgress(progress + 1);
  }

  return (
    <div className={props.className}>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${progress}%` }}
          aria-valuenow="50"
          aria-valuemin={MIN_VALUE}
          aria-valuemax={MAX_VALUE}
        ></div>
      </div>

      <div className="d-flex justify-content-between mt-2">
        <button
          type="button"
          className="btn btn-outline-danger"
          disabled={isDisabledDecrement}
          onClick={decrement}
        >
          -
        </button>
        <span>{progress}</span>
        <button
          type="button"
          className="btn btn-outline-success"
          disabled={isDisabledIncrement}
          onClick={increment}
        >
          +
        </button>
      </div>
    </div>
  );
}
