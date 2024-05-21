import React, { useState } from 'react'
import Style from './About.module.css'
import Form from '../input_Form/Form'


const About = () => {
    const [userDetails, setUserDetails] = useState({
        company: '',
        firstName: '',
        lastName: '', 
        email: '',
        phoneNumber: ''
    })
    const Details = (e)=>{
        const name = e.target.name
        const value = e.target.value

        setUserDetails =(
            (prevState)=>({
             ...prevState,
             [name]: value
        
        }))
    }
    const handleSubmit = (e)=>{
        e.preventDefault(e)
    }
    return (
        <div id={Style.About_WrapDiv}>
            <div id={Style.about_textDiv}>
                <h5>Dedicated <span> Outsourced</span> Sales</h5>
                <div id={Style.text}> Utilizing a <b>dedicated prospecting team from outside</b> focusing on substantial or intricate accounts (generally exceeding $50,000 annually) where the outside, <b>interpersonal connection  </b>plays a crucial role in the transaction.</div>
            </div>

            <div id={Style.About_form}>
                <p>Schedule a time to Learn more about (Agency name)</p>
                <div id={Style.About_formDiv}>
                    <div id={Style.textDiv}>
                        <div id={Style.requestText}>Request a Call Back</div>
                        <div id={Style.formText}>(Business name) develops sales relationships inside a target account on your behalf, transitioning the customer back to you when they are ready to buy.</div>
                        <div>Request a call back to learn more.</div>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div id={Style.div}>
                            <div className={Style.inputDiv}>
                                <Form
                                    placeholder='Company'
                                    type='text'
                                    name='company'
                                    value={userDetails.company}
                                    OnChange={Details}
                                />
                                <Form
                                    placeholder='First Name'
                                    type='text'
                                    name='firstName'
                                    value={userDetails.firstName}
                                    OnChange={Details}
                                />
                            </div>
                            <div className={Style.inputDiv}>
                                <Form
                                    placeholder='Last Name'
                                    type='text'
                                    name='lastName'
                                    value={userDetails.lastName}
                                    OnChange={Details}
                                />
                                <Form
                                    placeholder='Email Address'
                                    type='email'
                                    name='email'
                                    value={userDetails.email}
                                    OnChange={Details}
                                />
                            </div>
                            <div className={Style.inputDiv}>
                            <Form
                                    placeholder='Phone Number'
                                    type='tel'
                                    name='phoneNumber'
                                    value={userDetails.phoneNumber}
                                    OnChange={Details}
                                />
                                  <Form
                                    placeholder='Phone Number'
                                    type='tel'
                                    name='phoneNumber'
                                    value={userDetails.phoneNumber}
                                    OnChange={Details}
                                />
                            </div>
                                <button type="submit" onSubmit={handleSubmit}>Submit</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default About