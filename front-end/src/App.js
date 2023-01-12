import logo from "./logo.svg";
import "./App.css";
import HeaderCom from "./components/header";
import ProductList from "./pages/product";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import CommentCreateForm from "./components/commentCreateForm";
import CommentItem from "./components/commentItem";
import Cart from "./pages/cart";
import ProductDetail from "./pages/productdetail/ProductDetail";
import OrderHistory from "./pages/orderhistory";
import OrderDetail from "./pages/orderdetail";
import ProductCategories from "./pages/categories";
import CreateProduct from "./pages/createproduct";
function App() {
  return (
    <>
      {/* <HeaderCom />
      <ProductList /> */}
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <CommentCreateForm /> */}
      {/* <CommentItem /> */}
      {/* <Cart /> */}
      {/* <ProductDetail /> */}
      {/* <OrderHistory /> */}
      {/* <OrderDetail /> */}
      {/* <ProductCategories /> */}
      <CreateProduct />
    </>
  );
}

export default App;
