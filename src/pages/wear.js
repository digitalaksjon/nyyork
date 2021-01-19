import React from 'react';
import SEO from '../components/seo';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import { SectionWrapper } from '../components/common/SectionWrapper';
import OpeningHours from '../components/common/OpeningHours';
import WhoWeAre from '../components/common/WhoWeAre';
import WhereIs from '../components/common/WhereIs';
import Ad from '../components/common/Ad';
import FeatureAlternate from '../components/common/FeatureAlternate';
import InstagramGrid from '../components/common/InstagramGrid';

import WearTop from '../components/wear/WearTop';

import '../components/styles/styles.scss';
import  nyYorkColors from '../components/constants/colors';



const WearPage = () => {
    const data = useStaticQuery(myQuery);
    const wear = data.wear.edges
    const generalinfo = data.generalinfo.edges
  

    return (
        <Layout>
            <SEO title="Wear" keywords={['ny york', 'vintage', 'wear']} />

            <SectionWrapper id="wear01">
                <WearTop data={wear} />
            </SectionWrapper>

            <SectionWrapper id="wear02">
                <OpeningHours color="pink" store="wear" data={generalinfo} />
                <WhoWeAre data={wear} />
            </SectionWrapper>
                
            <SectionWrapper id="wear03">
                <WhereIs data={generalinfo} />        
            </SectionWrapper>

            <SectionWrapper id="wear04">
                <Ad type="jeans" />
                <FeatureAlternate color={nyYorkColors.yellow} bgColor={nyYorkColors.pink} data={wear} />  
            </SectionWrapper>

            <SectionWrapper id="wear05" >
                <InstagramGrid  bgColor={nyYorkColors.pink} />
            </SectionWrapper>

    </Layout>   
    );
}


export default WearPage;


export const myQuery = graphql`
query {
  wear: allWordpressAcfWear {
    edges {
        node {
            acf {

              featureartikkel_1 {
                  post_title
                  post_excerpt
                  post_name
          
              }
              featurebilde1_liten {
                  id
                  localFile {
                      childImageSharp {
                          fluid(quality: 100, maxWidth:415) {
                              src
                          }
                      }
                  }
              }
              hvem_er_vi_overskrift
              hvem_er_vi_tekst
              hvem_er_vi_bilde {
                  id
                  localFile {
                      childImageSharp {
                          fluid(quality: 100, maxWidth:415) {
                              src
                          }
                      }
                  }
              }
              toppbilde {
                  localFile {
                      childImageSharp {
                          fluid(quality: 100, maxWidth:1200) {
                              src
                          }
                      }
                  }
              }
            }
        }
    }
}
  generalinfo: allWordpressAcfGeneralinfo {
    edges {
      node {
        acf {
          apningstider_jeans
          hvor_er_ny_york_overskrift
          hvor_er_ny_york_tekst
          apningstider_wear
        }
      }
    }
  }
}

`;