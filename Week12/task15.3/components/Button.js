const Button = ({ onClick }) => {
  return (
    <button className="btn btn-primary" data-testid="button" onClick={onClick}>
      Змінити заголовок
    </button>
  );
};

export default Button;
