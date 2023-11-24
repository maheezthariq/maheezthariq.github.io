import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["IT Undergraduate", "Full Stack Developer.", "Passionate Content Creator","Designer and Digital Marketer"],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal">Hello Makkale</h4>
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
        "Currently pursuing as a second-year Information Technology undergraduate at the Institute of Technology, University of Moratuwa. With a strong IT background, mathematical prowess, and effective public speaking skills, I have actively engaged in zonal and provincial-level competitions in both disciplines. My leadership capabilities flourished as I led teams in school and initiated "Why Not," a successful digital marketing agency serving global clientele. As a tutor and marketing manager at “SchoolX”, an online learning platform, I contributed to becoming a finalist at Disrupt Asia 2019. Within the university, I excelled as a finalist in AIESEC's Best Performing Team Member category and served as a content creator, designer, Publicity Committee at IEEE in the term of 2023/2024 and volunteering now as the Chief Editor of Majlis Ul Islam. My multi-faceted experiences reflect my adaptability, creativity, and unwavering commitment to excellence."
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner