import { createSelector } from "reselect";

export const selectShop = state => state.shop;

export const selectShopCollection = createSelector(
  [selectShop],
  shop => shop.collection
);

export const selectCollectionForPreview = createSelector(
  [selectShopCollection],
  collections => Object.keys(collections).map(k => collections[k])
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectShopCollection],
    collections => collections[collectionUrlParam]
  );
