import React from "react";
import s from './Spinner.module.css'

const Spinner = ()=>{
    return(
        <div className={s.preloader}>
                <div className={s.preloader__row}>
                    <div className={s.preloader__item}></div>
                    <div className={s.preloader__item}></div>
                </div>
        </div>
    )
}

export default Spinner