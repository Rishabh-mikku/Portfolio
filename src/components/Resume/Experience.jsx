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
        <div className="mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Development Engineer (SDE) Intern"
            subTitle="Amazon, India - (July 2024 - Dec 2024)"
            result="Amazon, India"
            des="Designed and developed scalable containerization components and end-to-end services for Amazon Search, including API and database design. Led key system migrations, deprecations, and audit reporting enhancements to improve compliance, monitoring, and operational sustainability."
          />
          <ResumeCard
            title="Technical Team Member GDSC"
            subTitle="Google Developer Student Club - (Sep 2023 - May 2024)"
            result="LPU, India"
            des="Collaborated as a team member in GDSC LPU, spearheading the organization of numerous tech events such as hackathons, guest lectures and more, fostering a vibrant community of innovation and knowledge-sharing."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
