type Product = {
  id: number;
  title: string;
  price: number;
};
async function getProducts() {
  const res = await fetch('http://localhost:5000/products', { cache: 'no-store' });
  return res.json();
}

export default async function ProductsList() {
  const product: Product[] = await getProducts();
  return (
    <div className="py-10 px-10">
      <table className="table w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {product.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>Actions</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
