type ButtonProps = {
  buttonText: string;
  name: string;
  projectsRef?: React.RefObject<HTMLDivElement | null>;
};

function Button({ buttonText, name, projectsRef }: ButtonProps) {
  function handleClick() {
    if (projectsRef?.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <article>
      <button
        className="font-bold mr-10 bg-blue-700/75 hover:bg-blue-400 text-white py-2 px-4 rounded-full"
        name={name}
        onClick={handleClick}
      >
        {buttonText}
      </button>
    </article>
  );
}

export default Button;
