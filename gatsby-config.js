/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-transformer-remark',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, 
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/pictures/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contents`,
        path: `${__dirname}/src/contents/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-responsive-iframe`],
      },
    },
    {
      resolve: `gatsby-plugin-i18n`,
      options: {        
        langKeyDefault: 'rs',
        useLangKeyLayout: false
      }
    },
  ],
  siteMetadata: {
    title: 'Nanex Plus',
    title2: 'Eko-Hemijsko Čišćenje i Vešeraj',
    headerTwo: 'Čišćenje & Vešeraj',
    description: 'Najpovoljnije hemijsko ciscenje, dry and laundry',
    copyright: 'This website is copyright 2021 Nanex Plus',
    author: 'reljicmladen@icloud.com',
    keyword: 'najpovoljnije hemijsko ciscenje, dry and laundry',
    siteUrl: 'https://nanexplus.com',
    metaUrl: 'https://nanexplus.com',
    metaDescription: 'Besplatna dostava ako je vrednost robe veća od 1500din !',
    metaImage: 'https://nanexplus.com/static/8c96ab86259c0487d65f5a452c218493/d70bb/clothes.png'
  },
  
}