import styles from "./Banner.module.scss"

export function Banner(){
    return(
        <section className={styles.banner}>
            <div className={styles.container}>
                <article className={styles.textoBanner}>
                 <h1>Venha conhecer nossas promoções</h1>
                <p><span>50% Off</span> nos produtos</p>
                <button>Ver produto</button>    
                </article>               
            </div>
        </section>
    )
}