import myHeadshot from "../assets/drew.png";

function Title() {
  return (
    <div className="flex items-center justify-center space-x-10 p-20">
      <h1 className="text-4xl font-bold">Drew Brown </h1>
      <h2>Frontend Developer</h2>
      <img
        className="w-full h-auto max-w-[150px] sm:max-w-[200px] md:max-w-[250px] lg:max-w-[300px] xl:max-w-[350px] rounded-full"
        src={myHeadshot}
      />
    </div>
  );
}

export default Title;
