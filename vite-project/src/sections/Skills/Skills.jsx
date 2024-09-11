import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';

const Skills = () => {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIconLight} skill="HTML" />
        <SkillList src={checkMarkIconLight} skill="CSS" />
        <SkillList src={checkMarkIconLight} skill="JavaScript" />
        <SkillList src={checkMarkIconLight} skill="TypeScript" />
        <SkillList src={checkMarkIconLight} skill="Node" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIconLight} skill="React" />
        <SkillList src={checkMarkIconLight} skill="Angular" />
        <SkillList src={checkMarkIconLight} skill="Vue" />
        <SkillList src={checkMarkIconLight} skill="Tailwind CSS" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIconLight} skill="Redux" />
        <SkillList src={checkMarkIconLight} skill="Webpack" />
        <SkillList src={checkMarkIconLight} skill="Git" />
        <SkillList src={checkMarkIconLight} skill="Jest" />
        <SkillList src={checkMarkIconLight} skill="Bootstrap" />
      </div>
    </section>
  )
}

export default Skills
