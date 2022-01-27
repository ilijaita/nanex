import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import * as styles from '../styles/services.module.css'
import * as responsive from "../styles/responsive.module.css"
import downloadFile from '../downloads/prices_final.pdf'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import SEO from '../components/seo'

import Banner from '../pictures/banner1.png'

export default function Services ({ location,data }) {
  return (
    <Layout>
      <SEO
          title="Usluge"
          keywords={[`dry and laundry`, `laundry`, `Hemijsko ciscenje`, `ciscenje`, `najpovoljnije`, `nanexplus`, `dorcol`, `beograd`, `stari grad`]}
          image={Banner}
          pathname={location.pathname}
        />
      <section className={styles.header} id={responsive["header"]}>
        <div className={styles.box} id={responsive["box"]}>
          <h4>Hemijsko čišćenje, usluge čišćenja, peglanja i specijalne bio obrade</h4>
          <GatsbyImage  image={getImage(data.file)} className={responsive.serviceImg} style={{width: "300px",margin: "0 auto"}} />
        </div>

        <div className={styles.center} id={responsive["holder"]} >
          <h4>Peglanje i pranje</h4>
          <p>
          U odvojenim mašinama ne spajajući vašu robu sa drugim klijentima i strogo vodeći računa o higijenskim uslovima. Sredstva koja koristimo su strogo profesionalna te time dobijate čisto, belo, sačuvano vlakno koje kod nas ne gori kao u običnim jakim hlorisanim izbeljivačima. Mašine su digitalizovane i sa dozatorima koji precizno vode proces pranja od kontrolisanja brzine okretanja bubnja do temperature.
          </p>
         
        </div>

        <div className={styles.box} id={responsive["box"]}>
          <h4>Specijlni programi za kožnu i krznenu galanteriju uz nadzor strucnjaka!</h4>
          <GatsbyImage  image={getImage(data.file)} className={responsive.serviceImg} style={{width: "300px",margin: "0 auto"}} />
        </div>

        <div className={styles.center}>
          
        </div>
        
        <a className={ styles.btn } id={responsive["btn"]} href={downloadFile} download="cenovnik">Preuzmite Cenovnik</a>

      </section>
      
    </Layout>
  )
}

export const query = graphql`
  query UslugeImg {
    file(relativePath: { eq: "services.png" }) {
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
