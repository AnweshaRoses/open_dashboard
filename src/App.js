import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import SignIn from "./pages/home/SignIn";

import "./app.css"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";




function App() {
  return (
    <Router >
            <Routes>
        <Route path="/" element={ <SignIn/>}/ >
       
          
      </Routes>
      <Topbar/>
      <div className="container">
      <Routes>
      <Route path="/home" element={<HomeWithSidebar />} />
       
          
      </Routes>
      </div>
    </Router>
  );
}
function HomeWithSidebar() {
  const location = useLocation();
  
  // Check if the current route is the "/home" route
  const isHomeRoute = location.pathname === "/home";

  return (
    <>
    <div className="container">
    {isHomeRoute && <Sidebar />}
      <Home />
    </div>

    </>
  );
}

export default App;
