import styles from './SkillsStyles.module.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaBootstrap, FaVuejs } from 'react-icons/fa';
import {  SiRedux } from 'react-icons/si';

const skillsData = {
  frontend: [
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3Alt /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Vue', icon: <FaVuejs /> },
    // { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  ],
  backend: [
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Redux', icon: <SiRedux /> }
  ],
  tools: [
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'Bootstrap', icon: <FaBootstrap /> },
  ],
};

const Skills = () => {
  return (
    <section id="skills" className={styles.container}>
     
      <h1 className={styles.sectionTitle}>Skills</h1>

      <div className={styles.category}>
        <h2>Frontend</h2>
        <div className={styles.skillsGrid}>
          {skillsData.frontend.map((skill, index) => (
            <div key={index} className={styles.skillBadge}>
              {skill.icon}
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.category}>
        <h2>Backend</h2>
        <div className={styles.skillsGrid}>
          {skillsData.backend.map((skill, index) => (
            <div key={index} className={styles.skillBadge}>
              {skill.icon}
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.category}>
        <h2>Tools</h2>
        <div className={styles.skillsGrid}>
          {skillsData.tools.map((skill, index) => (
            <div key={index} className={styles.skillBadge}>
              {skill.icon}
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
