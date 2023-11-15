import { useItems } from "../context/ItemsContext";

const ShopPage = () => {
  const items = useItems();

  return (
    <>
      <h1> ShopPage </h1>
    </>
  );
};

export default ShopPage;
