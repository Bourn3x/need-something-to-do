import "./Button.scss"

const Button = ({ handleClick }) => {
  return (
    <div className={'button-container'}>
      <button onClick={handleClick}>
        Generate!
      </button>
    </div>
  );
}

export default Button;
