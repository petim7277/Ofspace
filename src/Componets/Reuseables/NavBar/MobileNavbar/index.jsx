import styles from "./index.module.css"
import logo from "../../../../Assets/download.png";
import arrow from "../../../../Assets/arrows.png";
import piggy from "../../../../Assets/piggy.png";
import bank from "../../../../Assets/bank.png";
import {useState} from "react";


const MobileNavbar = ()=>{

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavLinks = () => {
        setIsOpen(!isOpen);
    };

    const navLinks = () => (
        <div className={styles.menuBar}>
            <div className={styles.navCont}>
                <div className={styles.navText}><p>About</p></div>
                <div className={styles.navText}><p>Contact us</p></div>
                <div className={styles.navText}><p>Help</p></div>
                <div className={styles.navText}><p>Search</p></div>
                <div><p>Log in</p></div>
                <div><button><p>Sign Up</p></button></div>
            </div>

            <button onClick={toggleNavLinks} className={styles.cancel}>x</button>
        </div>
    );

    return(

        <div className={styles.mainDiv}>
            <div className={styles.navWrapper}>

            <div className={styles.logoWrapper}>

                <div >
                    <img src={logo} alt={"OfSpace Company Logo"} className={styles.logoImg}/>
                </div>

                <div className={styles.logoText}>
                    <h1 className={styles.logoTextHeader}>Ofspace</h1>
                    <p>Digital  Agency</p>
                </div>

                <div className={styles.hamWrap}>
                    <button onClick= {toggleNavLinks}> ☰</button>
                </div>
            </div>

                <div className={styles.display}>
                    {isOpen && navLinks()}

                </div>

            </div>
            <div className={styles.heroText}>
                <h1>Guiding you<span style={{display:"block"}}></span> through life's<span style={{display:"block"}}></span> financial journey</h1>
                <p>Grow your money faster<span style={{display:"block"}}> with smart tools in an  </span>
                    <span style={{display:"block"}}>Ally Bank Online Savings Account </span></p>
            </div>


            <div className={styles.tabCont}>
                <div className={styles.tabText}>
                    <img src={arrow} alt={"Arrow Logo"} />
                    <h3>Self Directed Trading</h3>
                    <p>That's right-you can trade commission<span style={{display:"block"}}>
                                       free with Ally Invest Self-Directed Trading
                                   </span></p>
                    <h4>Learn More &#8594;</h4>
                </div>

                <div className={styles.tabText}>
                    <img src={piggy} alt={"Piggy Logo"}/>
                    <h3>Managed Portfolios</h3>
                    <p>we're offering investing free of advisory<span style={{display:"block"}}>
                                       fees. Start investing with as little as &#x24;100
                                           </span></p>
                    <h4>Learn More &#8594;</h4>
                </div>

                <div className={styles.tabText}>
                    <img src={bank} alt={"Bank Logo"} />
                    <h3>Home Loans</h3>
                    <p>You could get pre-approved for<span style={{display:"block"}}>
                                       a home loan we're offering
                                           </span></p>
                    <h5>Learn More &#8594;</h5>
                </div>
            </div>




        </div>
    )
}
 export  default  MobileNavbar;