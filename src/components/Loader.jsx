import React from 'react'
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import styles from "../styles/Loader.module.css"

export const Loader = () => {
    return (
        <div className={styles.loader}>
           <AiOutlineLoading3Quarters className={styles.loading} size={60}/>
        </div>
    )
}
