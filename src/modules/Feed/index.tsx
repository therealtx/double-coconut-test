import React, { useEffect, useState } from "react";
import userbase from "userbase-js";
import Head from "next/head";
import { PrivateLayout } from "@/components/Layout";
import FeedStyled from "./index.styles";
import PostForm from "@/components/PostForm";
import FeedItem from "@/modules/Feed/FeedItem";

const Feed = () => {
  const [feedData, setFeedData] = useState<any>([]);

  useEffect(() => {
    userbase
      .openDatabase({
        databaseName: "feed",
        changeHandler: function (items) {
          setFeedData(items.reverse());
        },
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <PrivateLayout>
      <Head>
        <title>Feed</title>
      </Head>
      <FeedStyled>
        <h1>Feed</h1>

        <PostForm />

        <hr />

        <div>
          {feedData.map((item: any) => (
            <FeedItem key={item.itemId} {...item} />
          ))}
        </div>
      </FeedStyled>
    </PrivateLayout>
  );
};

export default Feed;
