import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import NoMatch from './NoMatch/NoMatch';
import FriendsDetail from './components/FriendsDetail/FriendsDetail';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="*" element={<NoMatch/>} />
        <Route path="/friend/:friendId" element={<FriendsDetail/>} />
        


      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
