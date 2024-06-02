import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p> */}
          <h2 className="text-4xl font-bold">Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Team Member GDSC"
            subTitle="Google Developer Student Club - (Sep 2023 - Present)"
            result="LPU, India"
            des="Collaborated as a team member in GDSC LPU, spearheading the organization of numerous tech events such as hackathons, guest lectures and more, fostering a vibrant community of innovation and knowledge-sharing."
          />
          <ResumeCard
            title="ML & AI Developer"
            subTitle="Kaggle - (2023 - Present)"
            result="India"
            des="Contributed in many machine learning projects on Kaggle, trained various regression and classification models. Implemented through TensorFlow."
          />
          <ResumeCard
            title="Open Source Contributor"
            subTitle="Github - (2022 - Present)"
            result="India"
            des="Contributed significantly to multiple open-source projects in Java and Python, leveraging expertise to enhance functionalities and drive community-driven development."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
