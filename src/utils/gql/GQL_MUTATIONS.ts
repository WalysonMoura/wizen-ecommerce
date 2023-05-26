import { gql } from '@apollo/client';

export const ADD_TO_CART = gql`
  mutation ($input: AddToCartInput!) {
    addToCart(input: $input) {
      cartItem {
        key
        product {
          node {
            id
            databaseId
            name
            description
            type
            onSale
            slug
            averageRating
            reviewCount
            image {
              id
              sourceUrl
              altText
            }
            galleryImages {
              nodes {
                id
                sourceUrl
                altText
              }
            }
          }
        }
        variation {
          node {
            id
            databaseId
            name
            description
            type
            onSale
            price
            regularPrice
            salePrice
            image {
              id
              sourceUrl
              altText
            }
            attributes {
              nodes {
                id
                attributeId
                name
                value
              }
            }
          }
        }
        quantity
        total
        subtotal
        subtotalTax
      }
    }
  }
`;

export const CHECKOUT_MUTATION = gql`
  mutation CHECKOUT_MUTATION($input: CheckoutInput!) {
    checkout(input: $input) {
      result
      redirect
    }
  }
`;
export const UPDATE_CART = gql`
  mutation ($input: UpdateItemQuantitiesInput!) {
    updateItemQuantities(input: $input) {
      items {
        key
        product {
          node {
            id
            databaseId
            name
            description
            type
            onSale
            slug
            averageRating
            reviewCount
            image {
              id
              sourceUrl
              altText
            }
            galleryImages {
              nodes {
                id
                sourceUrl
                altText
              }
            }
          }
        }

        variation {
          node {
            id
            databaseId
            name
            description
            type
            onSale
            price
            regularPrice
            salePrice
            image {
              id
              sourceUrl
              altText
            }
            attributes {
              nodes {
                id
                attributeId
                name
                value
              }
            }
          }
        }
        quantity
        total
        subtotal
        subtotalTax
      }
      removed {
        key
        product {
          node {
            id
            databaseId
          }
        }
        variation {
          node {
            id
            databaseId
          }
        }
      }
      updated {
        key
        product {
          node {
            id
            databaseId
          }
        }

        variation {
          node {
            id
            databaseId
          }
        }
      }
    }
  }
`;