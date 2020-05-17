import React from 'react'
import Layout from '../Layout'
import heroStyles from './hero.module.css'


const Hero = () => {
    return(
        <Layout background='#007FC8'>
            <p className={heroStyles.heroText}>Coming Soon</p>
            <h1 className={heroStyles.heroTitle}>Coding2Success</h1>
        </Layout>
    )
}

export default Hero