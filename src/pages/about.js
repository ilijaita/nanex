import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import * as styles from "../styles/about.module.css"
import * as responsive from "../styles/responsive.module.css"
import loadable from "@loadable/component";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import SEO from '../components/seo'

import Banner from '../pictures/banner1.png'

export default function About({ data }) {
    const AmazonFrame = loadable(() => import("../components/AmazonFrame"), {
        fallback: <div>Loading...</div>
    });
  return (
      <Layout>
        <SEO
          title="O nama"
          keywords={[`dry and laundry`, `laundry`, `Hemijsko ciscenje`, `ciscenje`, `najpovoljnije`, `nanexplus`, `dorcol`, `beograd`, `stari grad`]}
          image={Banner}
          
        />
          <section className={styles.header} id={responsive["header"]}>
            <div className={styles.txtholder}>
                <h3>Hemijsko čišćenje NANEX PLUS je porodična firma sa dugogodišnjom tradicijom, poznata po svom kvalitetu i profesionalnosti.</h3>
                <h4>
                    Naše osoblje je motivisano, stručno i sa posebnom pažnjom se odnosi prema svim potrebama klijenata.<br/><br/>

                    U modernoj ekološkoj čistionici, hemijsko čišćenje i pranje odeće predstavljaju osnovne delatnosti naše kompanije.<br/>
                </h4>
            </div>
            <div>
                <GatsbyImage image={getImage(data.file)} className={ responsive.picture } style={{width:"400px", margin:"0 auto"}} />
            </div>
            <div id={styles["iframe"], responsive["iframe"]} className={styles.iframe,responsive.iframe}>
                <AmazonFrame style={{margin: "0 auto"}} title="map" className={styles.iframe,responsive.iframe} src="https://maps.google.com/maps?q=Gunduli%C4%87ev%20venac%2035&t=&z=17&ie=UTF8&iwloc=&output=embed" width="450" height="350" />
            </div>
            <div>
                
            </div>
            <div className={responsive.info} >
                <h4>Radno vreme:</h4>
                <h5>Ponedeljak - Petak 08:00 do 18:00h</h5>
                <h5>Subota             08:00 do 14:00h</h5> <br />
                <h4>Tel. 011/3390-709</h4>
                <h4>Mob. 064/2563-814</h4>
            </div>
        </section>
    </Layout>
  )
}

export const query = graphql`
  query InfoImg {
    file(relativePath: { eq: "about2.png" }) {
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