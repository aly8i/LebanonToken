import styles from  '../styles/Contact.module.css';
import emailjs from 'emailjs-com';
import { useRef } from 'react';
import React from 'react'

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_9rrmi85','template_1u6mcqg',form.current, 'YC4mx1yoeALHk974u');
        e.target.reset();
    }
    return (
        <div className="contact">
            <section id='contact'>
                <h5 className={styles.h5}>Get In Touch</h5>
                    <div className={`${styles.container} ${styles.contactContainer}`}>
                        <form ref={form} className={styles.form} onSubmit={sendEmail}>
                            <input className={styles.input} type = "text" name = 'name' placeholder = "Your Full Name" required />
                            <input className={styles.input} type = "email" name ="email" placeholder = 'Your Email' required/>
                            < textarea className={styles.textarea} name = "message" rows = "7" placeholder = "Your Message" required/>
                            <button type = "submit" className = {`${styles.btn} ${styles.btnPrimary}`}> Send Message </button>
                        </form>
                    </div>
            </section>
        </div>
    )
}
export default Contact;