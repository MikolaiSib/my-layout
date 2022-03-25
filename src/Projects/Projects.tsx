import React from 'react';
import s from './Projects.module.css'
import {Project, ProjectPropsType} from "./Project/Project";

export const Projects = () => {

    let skills: ProjectPropsType[] = [
        { title: 'way', descr: 'way way way way way way way way way way way way way way way way way way way way way way way way way way way way way way way '},
        { title: 'todolist', descr: 'js best'},
        { title: 'counter', descr: 'js best'},
    ]

    let arr = skills.map((s, i) => {
        return (
            <Project key={i} title={s.title} descr={s.descr}  />
        )
    })

    return (
        <div className={s.projectsBox}>
            <div className={s.container}>
                <h2 className={s.title}>projects</h2>
                <div className={s.projects}>
                    {arr}
                </div>
            </div>

        </div>
    );
};

