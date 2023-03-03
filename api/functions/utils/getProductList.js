const { postToShopify } = require('./postToShopify');

exports.getProductList = async () => {
  try {
    const shopifyResponse = await postToShopify({
      query: `
        query getProductList {
          products(sortKey: TITLE, first: 100) {
            edges {
              node {
                id
                handle
                description
                title
                totalInventory
                variants(first: 5) {
                  edges {
                    node {
                      id
                      title
                    }
                  }
                }
                priceRange {
                  maxVariantPrice {
                    amount
                    currencyCode
                  }
                  minVariantPrice {
                    amount
                    currencyCode
                  }
                }
                images(first: 1) {
                  edges {
                    node {
                      src
                      altText
                    }
                  }
                }
              }
            }
          }
        }
      `,
    });

    return shopifyResponse.products.edges;
  } catch (error) {
    console.log(error);
  }
};
