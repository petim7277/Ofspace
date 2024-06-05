import  styles from "../Reviews/index.module.css"
import logo from "../../Assets/download.png"
import capital from "../../Assets/capitalLogo.png"

const Reviews = ()=>{
    return(
        <div className={styles. mainCont}>
          <div className={styles.divWrapper}>
         <div className={styles.mainDiv}>
           <img src={logo} alt={"ofspace logo"}/>
             <h1>Reviews and recommendations</h1>
         </div>

         <div className={styles.mainDiv}>
           <p>Banking</p>
           <p>Mortgage lender</p>
           <p>Credit card</p>
           <p>Personal loan</p>
           <p>Home equity</p>
         </div>
            <hr/>
         <div className={styles.mainDiv}>
             <div className={styles.imgDiv}>
              <img src={capital} alt={"Capital one logo"}/>
              <h3>4.9 <span style={{color: "gold;"}}>&#9733; &#9733; &#9733; &#9733; &#9733;</span></h3>
              <p>Business reviews</p>
             </div>

             <div className={styles.imgDiv}>
                 <img src={capital} alt={"Capital one logo"}/>
                 <h3>4.9 <span style={{color: "gold;"}}>&#9733; &#9733; &#9733; &#9733; &#9733;</span></h3>
                 <p>Business reviews</p>
             </div>

             <div className={styles.imgDiv}>
                 <img src={capital} alt={"Capital one logo"}/>
                 <h3>4.9 <span style={{color: "gold;"}}>&#9733; &#9733; &#9733; &#9733; &#9733;</span></h3>
                 <p>Business reviews</p>
             </div>

             <div className={styles.imgDiv}>
                 <img src={capital} alt={"Capital one logo"}/>
                 <h3>4.9 <span style={{color: "gold;"}}>&#9733; &#9733; &#9733; &#9733; &#9733;</span></h3>
                 <p>Business reviews</p>
             </div>
             <div className={styles.imgDiv}>
                 <img src={capital} alt={"Capital one logo"}/>
                 <h3>4.9 <span style={{color: "gold;"}}>&#9733; &#9733; &#9733; &#9733; &#9733;</span></h3>
                 <p>Business reviews</p>
             </div>
         </div>
        </div>
        </div>
    )
}

export  default  Reviews;