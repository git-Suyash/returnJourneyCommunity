import Navbar from "./components/navbar";
import Footer from "./components/footer";
import HomePage from "./pages/Homepage";
import ProfilePage from "./pages/Profile";

import { BrowserRouter as Router, Route, Routes,Link,Redirect } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route exact path={"/"} element={ <HomePage /> } />
          <Route exact path={"/profile"} element= { <ProfilePage /> } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
