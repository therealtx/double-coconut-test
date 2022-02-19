import React from "react";
import PostWrapper from "./index.styles";

const FeedItem = ({ item }: any): React.ReactElement => {
  return (
    <PostWrapper>
      <blockquote className="sidekick">
        {item.post}
        <cite>{item.author || "Not Set"}</cite>
      </blockquote>
    </PostWrapper>
  );
};

export default FeedItem;
