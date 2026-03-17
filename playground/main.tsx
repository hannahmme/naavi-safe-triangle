import { createRoot } from "react-dom/client";

import { App } from "./App.tsx";
import { Store } from "./Store.tsx";

const root = document.getElementById("root");
if (!root) throw new Error("Missing #root element");

const Comp = () => {
  if (window.location.hash.includes("#store")) return <Store />;
  return <App />;
};

createRoot(root).render(<Comp />);
