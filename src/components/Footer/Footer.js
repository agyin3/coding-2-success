import React from 'react'
import Layout from '../Layout'
import footerStyles from './footer.module.css'

const Footer = () => {
    return (
        <Layout 
            className={footerStyles.footerDiv} 
            direction='row' 
            justify='space-between' 
            padding='0 2.5%' 
            height='20vh' 
            background='#FFF' 
            width='100%'
        >
            <p className={footerStyles.footerText}>&copy; Coding2Success</p>
            <p className={footerStyles.footerText}>info@coding2success.com</p>
        </Layout>
    )
}

export default Footer