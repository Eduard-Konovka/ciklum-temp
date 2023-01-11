import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import MyRoutes from "./components/routes/MyRoutes";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />

    <MyRoutes />
  </StrictMode>
);

export default root;
