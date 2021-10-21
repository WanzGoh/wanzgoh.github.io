import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import Header from "../components/Header"
import Work from "../components/Work"
import About from "../components/about"
import Skills from "../components/skills"
import Promotion from "../components/Promotion"
import Footer from "../components/Footer"
import Projects from '../components/Project'

const IndexPage = () => (
  <Layout>
    <SEO title="YuwanGo Portfolio" />
    <Header></Header>
    <Promotion></Promotion>
    <About></About>
    <Promotion></Promotion> 
    <Skills></Skills>
    <Promotion></Promotion>
    <Projects></Projects>
    <Work></Work>
    <Promotion></Promotion>
    <Promotion></Promotion>
    <Footer></Footer>
  </Layout>
)

export default IndexPage
