/**
 * Do not forget that state cannot be mutated
 * @param {Array} cartItems
 * @param {Object} itemToAdd
 */
export function addItemUtil(cartItems, itemToAdd) {
  const item = cartItems.find(i => i.id === itemToAdd.id);

  if (item) {
    return cartItems.map(i =>
      i.id === itemToAdd.id ? { ...i, quantity: i.quantity + 1 } : i
    );
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
}
