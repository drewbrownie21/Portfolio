type ButtonProps = {
  buttonText: string;
  name: string;
  activeState: string;
  onToggle: (newState: string) => void;
  projectsRef?: React.RefObject<HTMLDivElement | null>;
};

function Button({
  buttonText,
  name,
  activeState,
  onToggle,
  projectsRef,
}: ButtonProps) {
  function handleClick() {
    if (activeState == name) {
      onToggle("");
    } else {
      onToggle(name);
    }

    if (projectsRef?.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div>
      <button
        className="font-bold mr-10 bg-blue-700/75 hover:bg-blue-400 text-white py-2 px-4 rounded-full"
        name={name}
        onClick={handleClick}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default Button;
