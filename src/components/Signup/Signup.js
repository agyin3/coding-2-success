import React, { useState } from 'react'
import Layout from '../Layout'
import signupStyles from './signup.module.css'
import Footer from '../Footer/Footer'
import addToMailchimp from 'gatsby-plugin-mailchimp'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState(false)

    const handleChange = e => {
        setEmail(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault()
        if(email.includes('@')){
            addToMailchimp(email)
                .then(res => {
                    console.log(res)
                    if(res.result === 'success'){
                        setSubmitted(true)
                    }else{
                        setSubmitted(false)
                        setError(true)                       
                    }
                })
                .then(() => setEmail(''))
                .catch(err => console.log(err))
        }
    }
    return (
        <Layout background='#007FC8'>
            {submitted ? <p className={signupStyles.thanksMsg}>Thank you</p> :
            <> 
                <h2 className={signupStyles.signupHeading}>
                    Sign up to start your <span className={signupStyles.signupBrand}>Coding2Success</span> journey
                </h2>
                <Layout className={signupStyles.signupDiv} direction='row' height='auto' width='50%'>
                    <input type='email' value={email} onChange={handleChange} placeholder='me@havingfun.com'/>
                    <button onClick={handleSubmit}>Submit</button>
                </Layout>
                {error && <p className={signupStyles.errorMsg}>Submitted email is already subscribed</p>}
            </>
            }
            <Footer />
        </Layout>
    )
}

export default Signup
