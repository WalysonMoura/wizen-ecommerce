

export const getProductsByCategory = (category) => {

    const { data } = await getClient().query({ query });

  const { loading, error, data } = useQuery(GET_PRODUCTS_BY_CATEGORY, {
    variables: { category },
  });

  if (loading) return [];
  if (error) {
    console.error(
      `Error fetching products for category ${category}: ${error.message}`
    );
    return [];
  }

  return data.products.nodes;
};
