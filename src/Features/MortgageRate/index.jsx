import styles from "../MortgageRate/index.module.css"
const MortgageRate = ()=>{
    return(
        <div className={styles.mainDiv} >

            <div className={styles.divWrap}>

                    <div className={styles.divCont}>

                        <div className={styles.square}></div>
                        <div className={styles.square}></div>
                        <div className={styles.square}></div>

                    </div>

                    <div className={styles.divCont}>
                    <div>
                        <p>DEBT</p>
                        <h6>Older couples discuss<br/> information on laptop <br/>3mins read &#8594;</h6>
                    </div>

                    <div>
                        <p>DEBT</p>
                        <h6>Older couples discuss<br/> information on laptop <br/>3mins read &#8594;</h6>
                    </div>
                    <div>
                        <p>DEBT</p>
                        <h6>Older couples discuss<br/> information on laptop <br/>3mins read &#8594;</h6>
                    </div>

                    </div>

            </div>

            <div className={styles.imgDiv}>

            </div>
        </div>
    )
}

export default MortgageRate;