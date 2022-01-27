import React from "react"
import Layout from "../components/Layout"
import SEO from '../components/seo'
export default function NotFound({location}) {
  return (
    <Layout>
    <SEO pathname={location.pathname} title="404: Not Found" />
      <h1>Page Not Found</h1>
      <p>Oops, we couldn't find this page!</p>
    </Layout>
  )
}