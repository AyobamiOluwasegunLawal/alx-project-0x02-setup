import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import React from "react";

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      <h1>This is the home page</h1>
      <Card title={"Card one"} content={"card two"} />

      <button onClick={handleModalOpen}>Open Modal</button>

      {isModalOpen && <PostModal />}
    </>
  );
};

export default Home;
