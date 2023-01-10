import MyRoutes from "./components/routes/MyRoutes";

export default function App() {
  return (
    <div className="App container">
      {/*========== Початок зони редагування ===============*/}
      <MyRoutes />
      {/*========== Кінець зони редагування ===============*/}
    </div>
  );
}
