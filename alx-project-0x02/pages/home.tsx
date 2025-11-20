import Card from "@/components/common/Card";
import React, { ReactNode } from "react";

const Home: React.FC<ReactNode> = () => {
  return (
    <>
      <h1>This is the home page</h1>
      <Card title="Card-one" content="This is the content of card one." />
    </>
  );
};

export default Home;
