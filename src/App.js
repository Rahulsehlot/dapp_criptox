import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Store from "./pages/Store";
import Teams from "./pages/Teams";
import About from "./pages/About";
import { useContext, useEffect } from "react";
// import { useGlobalState } from "./store";
import AuthGuard from "./AuthGuard";
import { SceneContext } from "./SceneContext";
// import { ethers } from "ethers";
import { loadWeb3 } from "./shared/Freshers";

function App() {
  const { loggedIn } = useContext(SceneContext);

  useEffect(() => {
    loadWeb3();
    isWalletConnected();
  }, []);

  const isWalletConnected = async () => {
    try {
      const { ethereum } = window;

      const accounts = await ethereum.request({ method: "eth_accounts" });
      console.log("accounts: ", accounts);

      if (accounts.length > 0) {
        const account = accounts[0];
        console.log("wallet is connected! " + account);
      } else {
        alert("make sure MetaMask is connected");
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <>
      {/* {isLoaded ? ( */}
      <div className="App">
        <Router>
          <Header />
          {/* <Product /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/cart" element={<Cart />} />
            <Route
              path="/profile/store"
              element={
                <AuthGuard user={loggedIn}>
                  <Store />
                </AuthGuard>
              }
            />
            <Route path="/teams" element={<Teams />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
