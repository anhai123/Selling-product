import { createContext, useEffect, useState } from "react";
import ProductsAPI from "./api/ProductApi";
import UserAPI from "./api/UserApi";
import CategoriesAPI from "./api/CategoryApi";
import io from "socket.io-client";

export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // socketio
    // const socket = io("http://localhost:9001/");
    var connectionOptions = {
      "force new connection": true,
      reconnectionAttempts: "Infinity", //avoid having user reconnect manually in order to prevent dead clients after a server restart
      timeout: 10000, //before connect_error and connect_timeout are emitted.
      transports: ["websocket"],
      extraHeaders: {
        "Access-Control-Allow-Origin": "*",
      },
    };
    const socket = io("https://selling-product.vercel.app/");
    setSocket(socket);
    return () => socket.close();
  }, []);

  const state = {
    productsAPI: ProductsAPI(),
    categoriesAPI: CategoriesAPI(),
    userAPI: UserAPI(),
    socket,
  };

  return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};
