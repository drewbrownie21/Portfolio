import Skills from "./Skills";
import Experience from "./Experience";

function Background() {
  return (
    <article>
      <section className="flex flex-col md:flex-row items-stretch justify-center gap-4 max-w-6xl mx-auto h-90">
        <Skills />
        <Experience />
      </section>
    </article>
  );
}

export default Background;
