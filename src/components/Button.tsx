type ButtonProps = {
  buttonText: string;
  name: string;
  activeState: string;
  onToggle: (newState: string) => void;
};

function Button({ buttonText, name, activeState, onToggle }: ButtonProps) {
  function handleClick() {
    console.log(name);
    if (activeState == name) {
      onToggle("");
      console.log("this is the current state already!");
    } else {
      onToggle(name);
    }
  }

  return (
    <div>
      <button
        className="font-bold bg-blue-700/75 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full"
        name={name}
        onClick={handleClick}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default Button;
