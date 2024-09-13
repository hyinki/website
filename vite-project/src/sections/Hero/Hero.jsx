import styles from './HeroStyles.module.css';
import heroImg from '../../assets/heropic.png';
import twitterLight from '../../assets/twitter-light.svg';
import githubLight from '../../assets/github-light.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import CV from '../../assets/Pang Hyin Ki Resume.pdf';

const Hero = () => {
  

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
      <img
        src={heroImg}
        className={styles.hero}
        alt="Profile picture of Hyin Ki"
      />

    </div>

    <div className={styles.info}>
    <h1>
          Pang Hyin Ki
          
        </h1>
        <h2>Y3 Information <br></br>System student</h2>
        

        <span>
          {/* <a href="https://twitter.com/" target="_blank">
            <img src={twitterLight} alt="Twitter icon" />
          </a> */}
          <a href="https://github.com/hyinki" target="_blank">
            <img src={githubLight} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/pang-hyin-ki/" target="_blank">
            <img src={linkedinLight} alt="Linkedin icon" />
          </a>
          
        </span>
        <p className={styles.description}>
        With a passion for leveraging<br></br> data to drive informed decision-making <br></br>and create innovative solutions <br></br>that transform businesses.
        </p>
        <a href={CV} download>
          <button className="hover">Download Resume</button>
        </a>

        
    </div>
    
  </section>
  )
}

export default Hero
