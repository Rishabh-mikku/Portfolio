import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Achievements</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Specialist on Codeforces"
            subTitle="Competitive Coding on Codeforces"
            des="Achieved Specialist title on Codeforces, demonstrating advanced problem-solving skills and proficiency in competitive programming."
          />
          <ResumeCard
            title="1st Prize in Hackathon, Xebia"
            subTitle="Web Development Hackathon"
            des="Secured 1st place in a front-end website development hackathon hosted by Xebia, demonstrating exceptional proficiency in web development, innovative problem-solving, and effective collaboration."
          />
          <ResumeCard
            title="1st prize in Hackathon, TechYons"
            subTitle="ML/AI Hackathon"
            des="Secured 1st Prize in ML/AI hackathon organized by Techyons, for building an innovative AI-driven solution, demonstrating expertise in machine learning, problem-solving, and rapid prototyping under time constraints."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
