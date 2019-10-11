import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import {
  CollectionPreviewContainer,
  Title,
  Preview
} from "./collection-preview.styles";

const CollectionPreview = ({ title, items }) => {
  const fourLimitedItems = items.filter((item, idx) => idx < 4);
  return (
    <CollectionPreviewContainer>
      <Title>{title.toUpperCase()}</Title>
      <Preview>
        {fourLimitedItems.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </Preview>
    </CollectionPreviewContainer>
  );
};

export default CollectionPreview;
