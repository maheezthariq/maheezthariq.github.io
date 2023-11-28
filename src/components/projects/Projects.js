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
          title="Check out my work to get an idea of my skills"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Eco Trash"
          des=" Leading a team of five members in developing a comprehensive waste management solution incorporating IoT-enabled smart bins. The integration of a user-friendly mobile app allowing users to report and resell their surplus items."
          src={projectOne}
          githubLink="https://github.com/maheezthariq/EcoTrash"
          websiteLink=""

        />
        <ProjectsCard
          title="Hello Doc"
          des=" Collaborating with the Electrical Department in Univerity to address difficulties in obtaining medical documentation for students. Developed a Medical Document Management System that streamlined communication between medical staffs and HODs."
          src={projectTwo}
          githubLink=""
          websiteLink={null} // Set websiteLink to null to hide the website icon
        />
        <ProjectsCard
          title="ITUM DB Management System"
          des="Designed and implemented a Student Management System. This system efficiently recorded and managed student data, including their academic results. This website in developing a functional and user-friendly solution for academic record-keeping."
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