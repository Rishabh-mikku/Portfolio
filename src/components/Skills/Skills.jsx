import React from 'react'
import skills from '../../data/skills.json'
import { getImageUrl } from '../../utils'
import styles from './Skills.module.css'

const Skills = () => {
  return (
    // <div className="skill-container">
    <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        // </div>
  )
}

export default Skills
