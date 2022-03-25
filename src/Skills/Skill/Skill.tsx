import React from 'react';
import s from './Skill.module.css'

export type SkillPropsType = {
    url: string
    title: string
    descr: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <div className={s.skill}>
            <img src={props.url} alt="no img"/>
            <h3>{props.title}</h3>
            <span>{props.descr}</span>
        </div>
    );
};

