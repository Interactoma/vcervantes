import { useState } from "react"
import emailjs from '@emailjs/browser';

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

    }


    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    return(
        <div>
            <form>
                <input name="name" type="text" placeholder="Name"  value={form.name} onChange={handleChange}/>
                <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange}/>
                <input name="phone" type="tel" placeholder="Phone" value={form.phone} onChange={handleChange}/>
                <textarea name="message" id="" cols="30" rows="10" placeholder="Message" value={form.message} onChange={handleChange}></textarea>
                <button type="submit" onClick={handleSend}>Submit</button>
            </form>
        </div>
    )

}