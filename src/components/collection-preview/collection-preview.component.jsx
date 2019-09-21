import React from "react";
import "./collection-preview.styles.scss";
import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, items }) => {
  const fourLimitedItems = items.filter((item, idx) => idx < 4);
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {fourLimitedItems.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
