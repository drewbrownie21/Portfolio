type ButtonProps = {
  buttonText: string;
  isSelected: boolean;
  onToggle: (newState: boolean) => void;
};

function Button({ buttonText, isSelected, onToggle }: ButtonProps) {
  return (
    <div>
      <button
        className="font-bold bg-blue-700/75 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full"
        onClick={() => onToggle(!isSelected)}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default Button;
