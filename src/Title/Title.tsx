import React from 'react';
import s from './Title.module.css'

export const Title = () => {
    return (
        <div className={s.title}>
            <div className={s.container}>
                <div className={s.text}>
                    <span>Hello</span>
                    <h1>Name</h1>
                    <p>Front</p>
                </div>
                <div className={s.photo}>Foto</div>
            </div>

        </div>
    );
};

