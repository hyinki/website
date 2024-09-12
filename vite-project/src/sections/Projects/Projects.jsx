import styles from './ProjectsStyles.module.css';
import ss1 from '../../assets/ss1.png';
import ss2 from '../../assets/ss2.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={ss1}
          link="https://hkshop.onrender.com/"
          h3="Shop"
          p="E-Commerce Application"
        />
        <ProjectCard
          src={ss2}
          link="https://github.com/hyinki/cv"
          h3="Computer Vision Project"
          p="Trained a custom YOLO v5 model"
        />
        {/* <ProjectCard
          src={hipsster}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Hipsster"
          p="Glasses Shop"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="FitLift"
          p="Fitness App"
        /> */}
      </div>
    </section>
  );
}

export default Projects;