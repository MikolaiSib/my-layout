import React from 'react';
import {Skill, SkillPropsType} from './Skill/Skill';
import s from './Skills.module.css'

export const Skills = () => {

    let skills: SkillPropsType[] = [
        {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png', title: 'js', descr: 'js best'},
        {url: 'https://cdn-icons-png.flaticon.com/512/919/919826.png', title: 'css', descr: 'css best'},
        {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png', title: 'react', descr: 'react best'},
        {url: 'https://miro.medium.com/max/800/1*ZxmcaOzul181U6BT5z-Ipw.png', title: 'redux', descr: 'redux best redux best redux best redux best redux best redux best redux best redux best redux best redux best redux best redux best redux best redux best redux best redux best redux best redux best redux best redux best redux best redux best redux best redux best redux best redux best redux best redux best redux best redux best redux best redux best '},
    ]

    let arr = skills.map((s, i) => {
        return (
            <Skill key={i} url={s.url} title={s.title} descr={s.descr}  />
        )
    })

    return (
        <div className={s.skillBox}>
            <div className={s.container}>
                <h2 className={s.title}>skills</h2>
                <div className={s.skills}>
                    {arr}
                </div>
            </div>
        </div>
    );
};

