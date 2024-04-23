function App() {
  const items = [1, 2, 3, 4, 5];
  return (
    <div>
      <h1>List</h1>
      <ul>
        {items.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
