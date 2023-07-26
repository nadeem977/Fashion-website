import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import About from './pages/About'
import Howitworks from "./pages/Howitworks";
import StylistLogin from "./pages/StylistLogin";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashbord from "./pages/Dashbord/Dashbord";
import DashboardDesigner from "./pages/Dashbord/DashboardDesigner";
import OrderDetails from "./pages/Dashbord/OrderDetails";
import ViewProfile from "./pages/Dashbord/ViewProfile";
import AddSuggesstion from "./pages/Dashbord/AddSuggesstion";
import Profile from "./pages/profiles/Profile";
import PersonalInfo from "./pages/profiles/PersonalInfo";
import Sizes from "./pages/profiles/Sizes";
import Measurements from "./pages/profiles/Measurements";
import PicDrew from "./pages/profiles/PicDrew";
import Feminine from "./pages/profiles/Feminine";
import BodyParts from "./pages/profiles/BodyParts";
import TopStyles from "./pages/profiles/TopStyles";
import StyleBottom from "./pages/profiles/StyleBottom";
import Footwaer from "./pages/profiles/Footwaer";
import Heelheight from "./pages/profiles/Heelheight";
import ShoeStyle from "./pages/profiles/ShoeStyle";
import OutFits from "./pages/profiles/OutFits";
import ConfortableOutFit from "./pages/profiles/ConfortableOutFit";
import AnyFashion from "./pages/profiles/AnyFashion";
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/About" element={<About/>} />
    <Route path="/Howitworks" element={<Howitworks/>} />
    <Route path="/StylistLogin" element={<StylistLogin/>} />
    <Route path="/Login" element={<Login/>} />
    <Route path="/Signup" element={<Signup/>} />
    <Route path="/Dashbord" element={<Dashbord/>} />
    <Route path="/DashboardDesigner" element={<DashboardDesigner/>} />
    <Route path="/OrderDetails" element={<OrderDetails/>} />
    <Route path="/ViewProfile" element={<ViewProfile/>} />
    <Route path="/AddSuggesstion" element={<AddSuggesstion/>} />
    <Route path="/Profile" element={<Profile/>} />
    <Route path="/PersonalInfo" element={<PersonalInfo/>} />
    <Route path="/Sizes" element={<Sizes/>} />
    <Route path="/Measurements" element={<Measurements/>} />
    <Route path="/PicDrew" element={<PicDrew/>} />
    <Route path="/Feminine" element={<Feminine/>} />
    <Route path="/BodyParts" element={<BodyParts/>} />
    <Route path="/TopStyles" element={<TopStyles/>} />
    <Route path="/StyleBottom" element={<StyleBottom/>} />
    <Route path="/Footwaer" element={<Footwaer/>} />
    <Route path="/Heelheight" element={<Heelheight/>} />
    <Route path="/ShoeStyle" element={<ShoeStyle/>} />
    <Route path="/OutFits" element={<OutFits/>} />
    <Route path="/ConfortableOutFit" element={<ConfortableOutFit/>} />
    <Route path="/AnyFashion" element={<AnyFashion/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
