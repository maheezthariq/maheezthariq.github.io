import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';
import ResumeCardW from './ResumeCardW';
import ResumeCardR from './ResumeCardR';  

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
      <div className="w-full lgl:w-[650px]">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Educational Qualification</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCardR
            title="Information Technology"
            subTitle="Institute of Technology, University of Moratuwa (2020 - Present)"
            //result="3.2 CGPA"
            des="Studying IT related subjects like OOP, DBMS, OS, Testing, Web, OOAD, Cloud etc. Hands on experience in the Academic related projects (Mobile app, Web app, UI/UX, Testing)" 
          />
          <ResumeCardR
            title="Higher Secondary Education"
            subTitle="BT/BC/ KCC (2016-2018)"
            // result="88.15%"
            des="I pursued my Advanced-Level education with a focus on Physics, Chemistry, and Combined Mathematics as my primary subjects."
          />
          <ResumeCardR
            title="Secondary School Education"
            subTitle="BT/BC/Al-Hira Maha Vidyalaya (2010 - 2015)"
            result="8A 1B"
            des="Got 8A and 1B in Ordinary Level Examination. Subjects: English, Maths, Science, ICT, Tamil, Islam, History, Tamil.lit, Commerce."
          />
        </div>
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Certificates</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[650px] border-l-black border-opacity-30 flex flex-col gap-6">
          <ResumeCardW
            title="Software Engineering"
            subTitle="Indonesian Cyber Education Institue"
            result="Online"
          />
          <ResumeCardW
            title="Agile Project Management in ICT"
            subTitle="University of Moratuwa"
            result="Online"
          />
          <ResumeCardW
            title="Software Testing"
            subTitle="DelftX"
            result="Online"
          />
          <ResumeCardW
            title="AWS Cloud Technical Essentials"
            subTitle="AWS"
            result="Online"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education
