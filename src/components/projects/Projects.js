import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree,projectFour,projectFive,projectSix} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="Check these out on my github"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Eco Trash"
          des=" The Waste Management Project is an innovative solution designed to bridge the gap between the public and waste collectors, fostering a collaborative and environmentally conscious community."
          src={projectOne}
          githubLink="https://github.com/maheezthariq/EcoTrash"
          websiteLink=""

        />
        <ProjectsCard
          title="Student Medical Record System"
          des=" This is a blog website have a EJS, Node & Express as backend and Mongoose & MongoDB database."
          src={projectTwo}
          githubLink=""
          websiteLink=""
        />
        <ProjectsCard
          title="Portfolio Website"
          des=" This is a website for posting secrets anonymously with an authentication system ."
          src={projectThree}
          githubLink=""
          websiteLink=""
        />
        <ProjectsCard
          title="Student Management System"
          des=" To create a website which plays Cartoon/Show songs' audio when user clicks on a particular cartoon image. Using HTML,CSS,JS,Bootstrap to bundle the songs we loved during our childhood!"
          src={projectFour}
          githubLink=""
          websiteLink=""
        />
        <ProjectsCard
          title="Graphic Designing Projects"
          des=" This is a weather website created using HTML,CSS,Bootstrap,Node.js,Express.js and OpenWeather API ."
          src={projectFive}
          githubLink=""
          websiteLink=""
        />
        <ProjectsCard
          title="Face Detection"
          des=" This project uses various libraries like to detect human face from a given image, detect a face from a live -webcam video and to create an attendance system."
          src={projectSix}
          githubLink=""
          websiteLink=""
        />
      </div>
    </section>
  );
}

export default Projects