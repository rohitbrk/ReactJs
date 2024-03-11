function App() {
  const [products, setProducts] = useState([]);
  const [selectedPage, setSelectedPage] = useState(1);
  const fetchData = async () => {
    const res = await fetch(
      `https://dummyjson.com/products?limit=10&skip=${selectedPage * 10 - 10}`
    );
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchData();
  }, [selectedPage]);
  return (
    <>
      <div>
        {products.products &&
          products.products.map((product) => <img src={product.thumbnail} />)}
      </div>
      <div>
        {products.total &&
          [...Array(products.total / 10)].map((_, i) => (
            <button onClick={() => setSelectedPage(i + 1)}>{i + 1}</button>
          ))}
      </div>
    </>
  );
}
