

import { gql } from '@apollo/client';

export const POST_PRODUCTS = gql`
  {
    products(first: 10) {
      edges {
        node {
          name
          description
          logoUrl
          comments(first: 1) {
            edges {
              node {
                author {
                  profilePhotoUrl
                }
                content
              }
            }
          }
        }
      }
    }
  }
`;
