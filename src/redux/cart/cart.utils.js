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

/**
 *
 * @param {Array<CartItem>} cartItems
 * @param {Object<Cart>} itemToRemove
 */
export function removeItemUtil(cartItems, itemToRemove) {
  if (itemToRemove.quantity === 1) {
    return clearItemUtil(cartItems, itemToRemove);
  }

  return cartItems.map(item =>
    item.id === itemToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
}

/**
 *
 * @param {Array<CartItem>} cartItems
 * @param {Object<Cart>} itemToRemove
 */
export const clearItemUtil = (cartItems, itemToRemove) =>
  cartItems.filter(item => item.id !== itemToRemove.id);
