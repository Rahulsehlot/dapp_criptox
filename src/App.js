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
import { useContext, useEffect, useState } from "react";
import { loadWeb3 } from "./shared/Freshers";
import { onAuthStateChanged } from "firebase/auth";
import { latestPrice, setGlobalState, useGlobalState } from "./store";
import { auth } from "./firebase";
import AuthGuard from "./AuthGuard";
import { SceneContext } from "./SceneContext";
function App() {
  const { loggedIn } = useContext(SceneContext);
  const [user, setUser] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [alert] = useGlobalState("alert");
  useEffect(() => {
    while (!loadWeb3()) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
          setGlobalState("isLoggedIn", true);
        } else {
          setUser(null);
          setGlobalState("isLoggedIn", false);
        }
        setIsLoaded(true);
      });
      latestPrice();
    }
  }, []);
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
