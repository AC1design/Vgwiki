import React from 'react'
import Statbox from '../components/Statbox'
import Skillbox from '../components/Skillbox'
import Talentbox from '../components/Talentbox'
import Skinbox from '../components/SkinBox'
import Heroes from '../components/Hero'
import Models from '../components/Model'
import Layout from '../components/layout'
import Page from 'react-page-loading'
import { heroCards } from '../constants/heroes'
import { graphql } from 'gatsby'

export default function({ data }) {
  data
}

export const postQuery = graphql`
  query HeroDataByPath($path: String!) {
    allJavascriptFrontmatter(filter: { frontmatter: { path: { eq: $path } } }) {
      edges {
        node {
          frontmatter {
            error
            name
            path
            type
            role
            description
            spotlight
            stats {
              name
              value
              color
            }
            model {
              image
              tmodel
            }
            skills {
              video
              name
              type
              image
              text
              stats {
                name
                amount
                cr
                wr
              }
            }
            talents {
              name
              type
              color
              text
              image
            }
            skins {
              name
              color
              type
              image
            }
          }
        }
      }
    }
  }
`
