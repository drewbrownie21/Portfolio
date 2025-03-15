import myHeadshot from "../assets/drew.png";

function Header() {
  return (
    <div className="flex items-center justify-center space-x-10 p-30">
      <div className="text-xl font-medium">
        Drew Brown, Frontend Web Developer
      </div>
      <img className="w-100 h-100 rounded-full" src={myHeadshot} />
    </div>
  );
}

export default Header;
