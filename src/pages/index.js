import React from "react"
import { Link, graphql } from "gatsby"
import Layout from '../components/Layout'
import * as styles from '../styles/home.module.css'
import * as responsive from "../styles/responsive.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import SEO from '../components/seo'

import Banner from '../pictures/banner1.png'


export default function Home({location, data }) {
  
  return (
      <Layout>
        <SEO
          title="Najpovoljnije hemijsko ciscenje"
          keywords={[`Najpovoljnije hemijsko ciscenje odece, dry and laundry`]}
          image={Banner}
          pathname={location.pathname}
          
        />
        <section className={styles.header} id={responsive["header"]}>
          <div>
            <img src={Banner} alt="Banner" style={{maxWidth: "10%",marginLeft:"80%", marginBottom:"-5%"}} />
            <h2>
              Eko-Hemijsko
            </h2>
            <h3>
              Čišćenje & Vešeraj
            </h3>
            <p>
              Mi pratimo nove tehnologije i ispunjavamo ekološke norme.
            </p>
            <p>
              Najpovoljnije hemijsko čišćenje odeće!
            </p>
            <div id={responsive['HomeBtn']}>
              <Link className={ styles.btn } to="/services">Naše Usluge</Link>
            </div>
            
          </div>
          <div>
            <GatsbyImage className={responsive.clothes} style={{maxWidth:"350px",margin:"0 auto"}} image={getImage(data.file)} alt="Clothes" />
          </div>
        
          
        </section>
      </Layout>
  )
}

export const query = graphql`
  query Slika {
    file(relativePath: { eq: "clothes.png" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: PNG
        )
      }
    }
  }
`
