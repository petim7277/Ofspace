import styles from ".//index.module.css";
import phone from "../../Assets/phone.png";

const HeroSection = ()=>{
    return(
      <div className={styles.mainCont}>
          <div className={styles.pattern}>

          </div>

          <div className={styles.mainText}>
           <p>CREATE A FREE ACCOUNT</p>
           <h1>Empower your<span style={{display:"block"}}>financial journey</span></h1>
              <p className={styles.Activate}>Activate your free Bankrate account to unlock<span style={{display:"block"}}>
                 our most premium tools and content.
              </span> </p>
              <ul>
                  <li>Improve your financial health with our suite of<span style={{display:"block"}}>
                      personal finance tools
                  </span></li>
                  <li>Gain access to a wide selection of courses,quizzes<span style={{display:"block"}}>
                      and other learning concerns
                  </span></li>
                  <li>Get articles,tools and product recommendations<span style={{display:"block"}}>
                      based on your interests
                  </span></li>
              </ul>
          </div>
      </div>
    )
}
export default HeroSection;