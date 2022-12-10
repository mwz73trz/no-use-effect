import "./App.css";
import { createBrowserRouter, defer } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      loader: async ({ request, params }) => {
        const data = fetch("https://dummyjson.com/products/1");
        console.log(data);
        return defer({
          results: data,
        });
      },
    },
  ]);

  return <div className="App">{router}</div>;
};

export default App;
