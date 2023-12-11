import React from "react";
import styles from "./page.module.css"


export default function Loading(){
    return (
        <main className={styles.main}>
            <div className={styles.loading}>
                <div className={styles.circle}></div>
            </div>
        </main>
    )
}