import logo from "./logo.svg";
import "./App.css";
import HeaderCom from "./components/header";
import ProductList from "./pages/product";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
function App() {
  return (
    <>
      {/* <HeaderCom />
      <ProductList /> */}
      <Login />
      {/* <Register /> */}
    </>
  );
}

export default App;
