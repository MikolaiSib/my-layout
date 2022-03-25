import React from 'react';
import s from './Contacts.module.css'

export const Contacts = () => {
    return (
        <div className={s.main}>
            <div className={s.container}>
                <h2 className={s.title}>contact</h2>
                <form action="" className={s.form}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea name="1" id="1" ></textarea>
                </form>
                <button>send</button>
            </div>
        </div>
    );
};
//cols="30" rows="10"
