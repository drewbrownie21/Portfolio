import myHeadshot from "../assets/drew.png";

function Title() {
  return (
    <article className="flex items-center justify-center space-x-10 p-20 overflow-visible">
      <h1>
        <p className="text-6xl font-bold">Drew Brown </p>
        <p className="text-2xl">Frontend Developer </p>
      </h1>
      <img
        className="w-full h-auto max-w-[150px] sm:max-w-[200px] md:max-w-[250px] lg:max-w-[300px] xl:max-w-[350px] rounded-full shadow-2xl bg-white duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
        src={myHeadshot}
      />
    </article>
  );
}

export default Title;
