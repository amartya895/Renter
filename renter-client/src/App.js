import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomeScreen from "./screens/HomeScreen";
import Footer from "./components/Footer";
import Signup from "./screens/Signup";
import ListProperty from "./screens/ListProperty";
import Hotels from "./screens/Hotels";
import Login from "./screens/Login";
import BooknowScreen from "./screens/BooknowScreen";
import Bookings from "./screens/Bookings";
import ProfileScreen from "./screens/ProfileScreen";
import Favourite from "./screens/Favourite";
import { useState , useEffect } from "react";
import Loader from "./components/Loader";

function App() {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const onPageLoad = () => {
      setLoader(false);
    };

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  return (
    <div>
      {loader ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" Component={HomeScreen} />
            <Route path="/signup" Component={Signup} />
            <Route path="/login" Component={Login} />
            <Route path="/registerproperty" Component={ListProperty} />
            <Route path="/allhotels" element={<Hotels />} />
            <Route path="/allbookings" Component={Bookings} />
            <Route path="/profile" Component={ProfileScreen} />
            <Route path="/favourite" Component={Favourite} />
            <Route
              path="/allhotels/:place/:fromdate/:todate"
              Component={Hotels}
            />
            <Route
              path="/booknow/:hotelid/:fromdate/:todate"
              Component={BooknowScreen}
            />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
