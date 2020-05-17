/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Coding 2 Success: Code Your Way To A Successful Future',
    description: 'Coding 2 Success is here to help you do just that, code your way to a successful future. By joining the Coding 2 Success community you’ll get access to tutorials, tips, guides, and resources to set you on the path towards building your first project or to just strengthen your skills. Take control of your future and let’s start Coding 2 Success.',
    author: 'Coding 2 Success'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Coding2Success',
        short_name: 'Coding2Success',
        start_url: '/',
        background_color: '#FFE066',
        theme_color: '#007FC8',
        display: 'standalone',
        icon: 'src/assets/icon.png',
        crossOrigin: 'use-credentials'
      }
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography'
      }
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: "https://findyourhappypodcast.us14.list-manage.com/subscribe/post?u=59a77d2a12435866e86825cd9&amp;id=80049c79a9"
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
  ],
}
