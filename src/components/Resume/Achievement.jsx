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
            title="2nd Prize in Hackathon, Xebia"
            subTitle="Web Development Hackathon"
            result="2nd Prize"
            des="Secured 2nd place in a front-end website development hackathon hosted by Xebia, demonstrating exceptional proficiency in web development, innovative problem-solving, and effective collaboration."
          />
          <ResumeCard
            title="3 Star Rating on Codechef"
            subTitle="Competitive Coding on Codechef"
            result="***"
            des="Achieved 3 Star Rating on a competitive coding platform Codechef."
          />
          <ResumeCard
            title="5 Star Rating on HackerRank"
            subTitle="Competitive Coding and DSA on HackerRank"
            result="*****"
            des="Achieved 5 Star Rating on HackerRank platform in programming languages Java, Python and C++."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
