import React from 'react';
import s from './Project.module.css'

export type ProjectPropsType = {
    title: string
    descr: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <div className={s.project}>
            <div className={s.imgContainer}>
                <a href="">
                    touch me
                </a>
            </div>
            <h3>{props.title}</h3>
            <span>{props.descr}</span>
        </div>
    );
};

