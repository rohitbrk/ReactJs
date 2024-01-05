// You can use useEffect to perform effects like fetching data, using browser APIs etc

import { useEffect } from "react";

function Example() {
  const [data, setData] = useState("");

  // useEffect takes a function and a dependency array as arguments
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(URL);
      const data = await response.json();
      setData(data);
    }
    fetchData();

    // optionally we can provide clean-up function in the return statement
  }, []);

  return (
    <div>
      <p>Fetched Data - {data}</p>
    </div>
  );
}
