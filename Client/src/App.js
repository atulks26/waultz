import Home from "./pages/home/Home.js";
import Navbar from "./pages/navbar/navbar.js";
import Footer from "./pages/footer/Footer.js";
import Plans from "./pages/plans/plans.js";
import Login from "./pages/login&signup/login.js";
import Signup from "./pages/login&signup/signup.js";
import Tnc from "./pages/tnc/tnc.js";
import Profile from "./pages/profile/profile.js";
import ProfileUpload from "./pages/profile/profileUpload.js";
import Anonymous from "./pages/anonymous/anonymous.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TwilioSMS from "./pages/alert/alert.js";
import TextExtraction from "./pages/summary/summary.js";
// import Otp from "./pages/login&signup/otp.js";

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <div className="navbar-bottom-margin"></div>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/alert" element={<TwilioSMS />}></Route>
                    <Route path="/plans" element={<Plans />}></Route>
                    <Route path="/anonymous" element={<Anonymous />}></Route>
                    <Route path="/summary" element={<TextExtraction />} />
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/signup" element={<Signup />}></Route>
                    <Route path="/tnc" element={<Tnc />}></Route>
                    <Route path="/profile" element={<Profile />}></Route>
                    <Route path="/upload" element={<ProfileUpload />}></Route>
                    {/* <Route path="/verify" element={<Otp />}></Route> */}
                </Routes>
                {<Footer />}
            </Router>
        </div>
    );
}

export default App;
