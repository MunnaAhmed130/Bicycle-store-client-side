export const getProducts = async () => {
  const res = await fetch("../../src/assets/data/productsData.json");
  const data = await res.json();
  //   console.log(data);
  return data;
};

export const getReviews = async () => {
  const reviews = await fetch("/src/assets/data/reviewsData.json").then((res) =>
    res.json()
  );
  //   console.log(reviews);
  return reviews;
};
