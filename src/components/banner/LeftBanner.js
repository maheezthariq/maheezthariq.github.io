import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["IT Undergraduate", "Full Stack Developer.", "Passionate Content Creator","Designer and Digital Marketer"],
      loop: true,
      typeSpeed: 30,
      deleteSpeed: 15,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal">Hello !</h4>
        <h1 className="text-6xl font-bold text-white">
          This is <span className="text-designColor capitalize">Maheez Thariq</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide text-justify">
        "An enthusiastic and self motivated person who passionate about exploring the latest technologies. As an IT undergraduate student love to working collaboratively with others to deliver quality software solutions and play numerous lead roles too. A Friendly communicable team player who can adapt to a new environment quickly and love to keep up-to-date with industry trends and developments, always looking for new challenges to help me grow both personally and professionally."
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner