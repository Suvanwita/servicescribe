import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import { useState } from "react";
import PostListProvider from "./store/post-list-store";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import SignInPage from "./pages/signinpage";
import SignUpPage from "./pages/signuppage";
import LandingPage from "./Pages/LandingPage";
import Contactus from "./Pages/contactus";
import Faq from "./Pages/faq";
import axios from "axios";
import Booking from "./pages/Booking";
import AppointmentScheduling1 from "./components/Calender1";
import Error from "./pages/Error";
import Electricions from "./pages/Electricions"
import Plumber from "./pages/Plumber"
import PricingTable from "./components/Subscription"
import AppointmentScheduling2 from "./components/Calender2";
import PriceSingle from "./components/Singleprice";
function FeedBack() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <div className="hlooo"><PostListProvider>
    <div className="app-container">
      <Sidebar
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      ></Sidebar>
      <div className="content">
        {selectedTab === "Home" ? (
          <PostList></PostList>
        ) : (
          <CreatePost></CreatePost>
        )}
      </div>
    </div>
  </PostListProvider></div>
    
  );
}
function Layout() {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}
function App() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [me, setMe] = useState(false);
  async function signup(email, password, name) {
    const response = await axios.post("http://localhost:8001/signup", {
      email: email,
      password: password,
      name: name,
    });
    console.log(response);
  }
  async function signin(email, password) {
    const response = await axios.post("http://localhost:8001/signin", {
      email: email,
      password: password,
    });
    localStorage.setItem("token", response.data.token);
    console.log(response);
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/feedback" element={<FeedBack />} />
          <Route path="/contactus" element={<Contactus></Contactus>} />
          <Route path="/" element={<LandingPage></LandingPage>} />
          <Route path="/faq" element={<Faq></Faq>} />
          <Route path="/booking" element={<Booking></Booking>}></Route>
          <Route path="/subs" element={<PricingTable></PricingTable>}></Route>
          <Route path="/price" element={<PriceSingle></PriceSingle>}></Route>
          <Route path="/booking/calender/elec" element={<Electricions></Electricions>}></Route>
          <Route path="/booking/calender/plum" element={<Plumber></Plumber>}></Route>
          <Route path="/booking/calender1" element={<AppointmentScheduling1></AppointmentScheduling1>}></Route>
          <Route path="/booking/calender2" element={<AppointmentScheduling2></AppointmentScheduling2>}></Route>
          <Route
            path="/signin"
            element={<SignInPage signin={signin}></SignInPage>}
          />

          <Route
            path="/signup"
            element={<SignUpPage signup={signup}></SignUpPage>}
          />
          <Route path="*" element={<Error></Error>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
