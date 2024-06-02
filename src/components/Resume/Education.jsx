import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BTech in Computer Science & Engineering"
            subTitle="Lovely Professional University (2021 - Present)"
            result="9.34/10"
            des="Pursuing a BTech in Computer Science and Engineering with a strong foundation in programming, algorithms, and emerging technologies like AI and Cloud Computing."
          />
          <ResumeCard
            title="Higher Secondary (Class XII)"
            subTitle="ST. JOHN'S SCHOOL (2018 - 2020)"
            result="94.20 %"
            des="Completed Higher Secondary Education in the PCM (Physics, Chemistry, Mathematics) stream, building a strong foundation in analytical and scientific principles."
          />
          <ResumeCard
            title="Secondary School Education (Class X)"
            subTitle="ST. JOHN'S SCHOOL (2016 - 2018)"
            result="91.16 %"
            des="Completed Class X with a strong academic record, excelling in mathematics and science."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education