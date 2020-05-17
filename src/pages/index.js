import React from "react"
import Hero from "../components/Hero/Hero"
import About from "../components/About/About"
import Signup from "../components/Signup/Signup"
import SEO from "../utils/SEO"

export default () => {
    return (
        <>
            <SEO />
            <Hero />
            <About />
            <Signup />
        </>
    )
}