export const getProductsService = async () => {
  return await fetch("http://localhost:5000").then((response) =>
    response.json()
  );
};
