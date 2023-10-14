export default function ProductDetail({ params }: { params: { productId: string } }) {
  console.log(params);
  return <div>Product {params.productId[1]}</div>;
}
