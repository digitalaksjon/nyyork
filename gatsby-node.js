

const path = require('path');
const slash = require('slash');
const sharp = require('sharp')

sharp.cache(false)
sharp.simd(false)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve('./src/components/templates/post.js');
  const productTemplate = path.resolve('./src/components/templates/product.js');

  const result = await graphql(`
    {

      allWordpressPost {
        edges {
          node {
            id
            link
            status
            featured_media {
              id
              alt_text
              localFile {
                childImageSharp {
                  fluid(quality: 100, maxWidth: 2000) {
                    srcWebp
                  }
                }
              }
            }
          }
        }
      }
    } 

  `);

  // Check for errors
  if (result.errors) {
    throw new Error(result.errors);
  }

  const {
    allWordpressPost,
    allWcProducts
  } = result.data;

  allWordpressPost.edges.forEach(edge => {
    if (edge.node.status === 'publish') {
      createPage({
        path: `/articles${edge.node.link}`,
        component: slash(postTemplate),
        context: {
          id: edge.node.id,
        },
      });
    }
  });


};
