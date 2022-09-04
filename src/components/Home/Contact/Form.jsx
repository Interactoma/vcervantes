import { useState } from "react"
import emailjs from '@emailjs/browser';

import style from './Form.module.css'

export default function Form(){

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    })

    const handleSend = (e) => {
        e.preventDefault();
        let templateParams = {
            from_name: form.name,
            from_email: form.email,
            from_phone: form.phone,
            message: form.message,
        }

        emailjs.send('service_cdr8ier', 'template_o6abik6', templateParams, 'gMzIEjuhZXpffxkJz')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        setForm({
            name: "",
            email: "",
            phone: "",
            message: "",
        })
    }


    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    return(
        <div>
            <h2 className={style.form__title}>Contact</h2>
            <form className={style.form}>
                <label htmlFor="name" className={style.form__subtitle}>Name</label>
                <input name="name" type="text" placeholder="Name"  value={form.name} onChange={handleChange}/>
                <label htmlFor="email" className={style.form__subtitle}>Email</label>
                <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange}/>
                <label htmlFor="phone" className={style.form__subtitle}>Phone</label>
                <input name="phone" type="tel" placeholder="Phone" value={form.phone} onChange={handleChange}/>
                <label htmlFor="message" className={style.form__subtitle}>Message</label>
                <textarea name="message" id="" cols="30" rows="10" placeholder="Message" value={form.message} onChange={handleChange}></textarea>
                <button type="submit" onClick={handleSend}>Submit</button>
            </form>
        </div>
    )

}