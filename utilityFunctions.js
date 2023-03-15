export function formatPrice(num, currency) {
  return parseFloat(num).toLocaleString('en-US', {
    style: 'currency',
    currency: currency || 'USD',
  });
}

export function formatPriceWithDefault(num, currency) {
  if (num === null) {
    return '$0.00';
  }
  return parseFloat(num).toLocaleString('en-US', {
    style: 'currency',
    currency: currency || 'USD',
  });
}

export function itemTotal(price, quantity) {
  const totalPrice = parseFloat(price.amount) * parseInt(quantity);

  return formatPrice(totalPrice, price.currencyCode);
}

export function getShoppingCartQuantity (shopifyResponse) {
  const edges = shopifyResponse.lines.edges
  const totalQuantity = edges.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.node.quantity;
  }, 0);
  return totalQuantity;
}

export default { formatPrice, itemTotal, getShoppingCartQuantity };
