import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col gap-20 md:flex-row"
    >
      <div>
        <div className="w-full lgl:w-[650px]">
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - Present</p>
          <h2 className="text-4xl font-bold">Professional Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Designer and Sales Manager"
            subTitle="SchoolX Lanka PVT Ltd - (Dec 2018 - Jan 2020)"
            result="Colombo, Sri Lanka"
            des="SchoolX - Online learning platform startup like BYJUS, Joined as Promotional and Content video editor and got promoted as a marketing manager within a couple of months and executed impactful campaigns, expanding SchoolX's reach and influence. Our recognition as finalists at Disrupt Asia 2019 underscores our collective commitment to revolutionizing education."
          />
          <ResumeCard
            title="Founder"
            subTitle="WhyNot - (March 2019 - Present)"
            result="Freelance"
            des="As the founder of Why Not, a startup digital marketing agency, I orchestrated successful campaigns for both local and international clients, leveraging my strategic insights and creative prowess. My passion for design led me to freelance as a designer, crafting visually captivating content that resonates with audiences. "
          />
        </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - Present</p>
          <h2 className="text-4xl font-bold">Non Academic Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Publicity Committee"
            subTitle="IEEE- Student Branch of University of Moratuwa"
            result="IEEE"
            des="Elected as Publicity Committee of IEEE Student Branch of University of Moratuwa in the Term of 23/24"
          />
          <ResumeCard
            title="Editor in Chief"
            subTitle="Majlis Ul Islam - University of Moratuwa"
            result="Majlis Ul Islam"
            des="Joined as a Designer and got promoted as Editor in Chief in the term of 22/23"
          />
          <ResumeCard
            title="iGT Member"
            subTitle="AIESEC in University of Moratuwa"
            result="AIESEC CS"
            des="Elected as one of the nominees of Aiesec CS Eminence 22 in the category of 'Best Performing iGT Member’"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
