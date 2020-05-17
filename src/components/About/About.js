import React from 'react'
import Layout from '../Layout'
import aboutStyles from './about.module.css'

const About = () => {
    return(
        <Layout background='#FFE066' padding='0 5%'>
            <h2 className={aboutStyles.aboutHeading}>Code your way to success</h2>
            <p className={aboutStyles.aboutText}>Coding 2 Success is here to help you do just that, code your way to a successful future. By joining the Coding 2 Success community you’ll get access to tutorials, tips, guides, and resources to set you on the path towards building your first project or to just strengthen your skills. Take control of your future and let’s start Coding 2 Success.</p>
        </Layout>
    )
}

export default About