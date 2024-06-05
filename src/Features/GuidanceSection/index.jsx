import  styles from "../GuidanceSection/index.module.css"
const  GuidanceSection = ()=>{
    return(
        <div className={styles.mainCont}>
        <div className={styles.semiCont}>

            <p>200+ FINANCIAL CALCULATORS</p>
            <h1>Guidance for every</h1>
            <div className={styles.divCont}>

                 <div>
                     <div className={styles.divText}>  <p>Mortgage calculator</p>  </div>
                     <div className={styles.divText}>  <p>Amortization</p> </div>
                     <div className={styles.divText}>  <p>Home Affordability</p>   </div>
                     <div className={styles.divText}>  <p>CD calculator</p>    </div>
                </div>

                <div>
                    <div className={styles.divText}>   <p>Simple Savings</p>   </div>
                    <div className={styles.divText}>   <p>Cost-of-living</p>   </div>
                    <div className={styles.divText}>   <p>Credit card payoff</p>   </div>
                    <div className={styles.divText}>   <p>Balance transfer</p>   </div>
                </div>

            </div>
        </div>

            <div className={styles.pattern}>

            </div>
        </div>
    )
}

export default GuidanceSection;