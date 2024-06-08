import React from 'react'
import Title from '../Layouts/Title'
import projectOne from "../../assets/images/projects/projectOne.jpg";
import projectTwo from "../../assets/images/projects/projectTwo.jpg";
import projectThree from "../../assets/images/projects/projectThree.jpeg";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="FITNESS CLUB WEBSITE"
          des="Built using HTML, CSS, JavaScript, and Bootstrap. The website features an elegant design and intuitive layout, offering a seamless user experience."
          src={projectOne}
          github_link = "https://github.com/Rishabh-mikku/Fitness-Club-Website"
        />
        <ProjectsCard
          title="RISH SHOPPING SITE"
          des="A fully responsive front-end website build using React and Vite. The website offers a seamless shopping experience with dedicated sections for Men, Women, and Kids."
          src={projectTwo}
          github_link = "https://github.com/Rishabh-mikku/E-commerce"
        />
        <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
          github_link = "https://github.com/Rishabh-mikku/Fitness-Club-Website"
        />
        <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
          github_link = "https://github.com/Rishabh-mikku/Fitness-Club-Website"
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
          github_link = "https://github.com/Rishabh-mikku/Fitness-Club-Website"
        />
        <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
          github_link = "https://github.com/Rishabh-mikku/Fitness-Club-Website"
        />
      </div>
    </section>
  );
}

export default Projects