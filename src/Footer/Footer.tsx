import React from 'react';
import s from './Footer.module.css'

export const Footer = () => {
    return (
        <div className={s.main}>
            <div className={s.container}>
                <h2 className={s.title}>Morozov N.S.</h2>
                <div className={s.center}>
                    <div className={s.item}></div>
                    <div className={s.item}></div>
                    <div className={s.item}></div>
                    <div className={s.item}></div>
                </div>
                <div>2022 Все права защищены</div>
            </div>
        </div>
    );
};

