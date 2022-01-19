import * as React from 'react';
import logo from "../../Resources/logobg.png"
import emailjs from '@emailjs/browser';
import { useRef } from 'react';



interface Contact {

}

export const Contact: React.FC<Contact> = () => {


    const formy = useRef();


    const [firstname, setFirstname] = React.useState('');
    const handleFirstChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setFirstname(event.target.value);
    }

    const [lastname, setLastName] = React.useState('');
    const handleLastChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setLastName(event.target.value);
    }

    const [email, setEmail] = React.useState('');
    const handleEmailChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setEmail(event.target.value);
    }


    const [number, setNumber] = React.useState('');
    const handleNumberChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setNumber(event.target.value);
    }

    const [question, setQuestion] = React.useState('');
    const handleQuestionChange: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
        setQuestion(event.target.value);
    }


    const sendEmail = (e: React.ChangeEvent<any>) => {
        e.preventDefault();

        emailjs.sendForm('service_7qye3hg', 'template_jqelfso',e.target, 'user_icyl4TR2VjnQQKOPqqKvg')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };



    return (
        <section className='contact'>

            <h1>Contact us</h1>
            <hr className='contact__line'></hr>
            <h2 className='contact__subtitle'>Please let us know how we can help you grow your business by contacting us below</h2>

            <form className='contact__form' onSubmit={sendEmail}>
                <article className='contact__form--1'>
                    <div className='names'>
                        <div className='input names__first'>
                            <label className='input__label'>First Name</label>
                            <input type="text" name="name"
                                onChange={handleFirstChange}
                                value={firstname} />
                        </div>
                        <div className='input'>
                            <label className='input__label'>Last Name</label>
                            <input type="text" name="lastname"
                                onChange={handleLastChange}
                                value={lastname} />
                        </div>
                    </div>
                    <div className='input'>
                        <label className='input__label'>Email</label>
                        <input type="text" name="email"
                            onChange={handleEmailChange}
                            value={email} />
                    </div>
                    <div className='input'>
                        <label className='input__label'>Contact Number</label>
                        <input type="text" name="phone"
                            onChange={handleNumberChange}
                            value={number} />
                    </div>
                </article>

                <article className='contact__form--2'>
                    <div className='input'>
                        <label className='input__label'>Question or Message</label>
                        <textarea name="message"
                            onChange={handleQuestionChange}
                            value={question} />
                    </div>
                    <button type="submit" value="Send" className='contact__btn'>Send message</button>
                </article>


                
            </form>

            {/* <button type="submit" value="Send" className='contact__btn'>Send message</button> */}


            <img className='contact__logo' src={logo} />
        </section>
    );
}