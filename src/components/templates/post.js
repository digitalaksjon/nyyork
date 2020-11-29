/* eslint-disable react/no-danger */
import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../layout';
import SEO from '../seo';
import { PostWrapper } from './styles/PostWrapper';

import FacebookIcon from '../../images/facebook_icon_yellow.svg';
import MailIcon from '../../images/mail_icon_yellow.svg';



import {
    EmailShareButton,
    FacebookShareButton 
} from "react-share";

const postTemplate = ({ data: { post }, location}) => {
    const url = location.href ? location.href : '';


    return(
        <Layout>
           <Helmet>
            <title>Page 1</title>
            <meta name="description" content="Ny York Vintage" />
            <meta property="og:title" content={post.title} />
            <meta property="og:image" content={url+post.featured_media.localFile.childImageSharp.fluid.src} />
   
          </Helmet>

            <div className="container">
                <div className="row" style={{ marginBottom: '40px' }}>
                    <PostWrapper className="col-lg-12">
                    <div className="left">
                            <div className="image">

                                <img src={post.featured_media.localFile.childImageSharp.fluid.src} alt={post.featured_media.alt_text} />

        
                            </div>
                            <div className="some">
                                <h3>DEL DENNE SAKEN</h3>
                                <div className="logos">
                                <FacebookShareButton url={url}>
                                    <img src={FacebookIcon} alt="Facebook icon" />
                                </FacebookShareButton>
                                <EmailShareButton>
                                    <img src={MailIcon} alt="Mail icon" />
                                </EmailShareButton>
                                </div>
                            </div>
                        </div>
                        <div className="right">
    

                            <div className="heading">
                                <div className="title">{post.title}</div>
                            </div>
                            <div className="body" dangerouslySetInnerHTML={{ __html: post.content }}>
                            </div>
                        </div>
            
                    </PostWrapper>
                </div>
            </div>
      </Layout>
    );
}
 

postTemplate.propTypes = {
  data: PropTypes.object.isRequired
}

export default postTemplate;

export const pageQuery = graphql`
  query($id: String!) {
    post: wordpressPost(id: { eq: $id }) {
      title
      content
      featured_media {
        id
        alt_text
            localFile {
            childImageSharp {
                fluid(quality: 100, maxWidth: 2000) {
                    src
                    }
                }
            }
        }
    }
  }
`;
