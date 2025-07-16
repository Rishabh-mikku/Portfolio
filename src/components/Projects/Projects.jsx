import React from 'react'
import Title from '../Layouts/Title'
import fitnessclub from "../../assets/images/projects/fitnessclub.jpg";
import projectTwo from "../../assets/images/projects/projectTwo.jpg";
import voiceassist from "../../assets/images/projects/voiceassist.jpg";
import projectFour from "../../assets/images/projects/projectFour.jpg";
import bioguardian from "../../assets/images/projects/bioguardian.png";
import greenspace from "../../assets/images/projects/greenspace.jpg";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center mb-10">
        <Title des="My Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14 px-4">
        <ProjectsCard
          title="Bio Guardian"
          domain="Android App"
          des="BioGuardian is an AI-enabled wildlife app that identifies animal species from images and raises conservation awareness. Built with Kotlin and GCP, it offers quick, accurate identification and detailed species information to promote biodiversity protection."
          src={bioguardian}
          github_link="https://github.com/Rishabh-mikku/Bio-Guardian-App"
        />
        <ProjectsCard
          title="GreenSpace"
          domain="Android App"
          des="An AI-powered plant identification app that recognises plant species from photos and provides essential information about them. Built using Kotlin, GCP, AWS and Mistral AI, it delivers fast, accurate identification to help users learn about plants and enhance their connection with nature."
          src={greenspace}
          github_link="https://github.com/Rishabh-mikku/GreenSpace"
        />
        <ProjectsCard
          title="Fitness Club"
          domain="Web Development"
          des="A responsive fitness club website built using HTML, CSS, and JavaScript featuring an interactive image carousel, event showcase slider, and user authentication forms. It offers clean navigation, modern UI components, and integrated social media links for enhanced user engagement."
          src={fitnessclub}
          github_link="https://github.com/Rishabh-mikku/Fitness-Club-Website"
        />
        <ProjectsCard
          title="Java Voice Assistant"
          domain="Web Development"
          des="A Java-based voice assistant developed in Eclipse using the Sphinx library to open websites in Chrome, access local drives, and shut down the laptop through speech commands."
          src={voiceassist}
          github_link="https://github.com/Rishabh-mikku/Voice-Assistant-Java"
        />
        <ProjectsCard
          title="Zillow Home Value Prediction"
          domain="ML/AI"
          des="Predicting home prices using ML by leveraging various features of homes and surroundings to estimate future values."
          src={projectFour}
          github_link="https://github.com/ML-Project-Zillow-Home-Value-Prediction/Zillow-Home-Value-Prediction"
        />
      </div>
    </section>
  );
}

export default Projects;
