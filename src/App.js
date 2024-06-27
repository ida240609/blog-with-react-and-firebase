import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import Login from './components/Login';
import Logout from './components/Logout';
import Navbar from './components/Navbar';
import { useState } from 'react';

const APP_NAME = "/blog-with-react-and-firebase"; // リポジトリ名

function App() {
  // ログインしているかどうか
  const [ isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  return (
    <Router>
      <Navbar isAuth={isAuth} />
      <Routes>
        <Route path={APP_NAME + '/'} element={<Home />}></Route>
        <Route path={APP_NAME + '/createpost'} element={<CreatePost isAuth={isAuth} />}></Route>
        <Route path={APP_NAME + '/login'} element={<Login setIsAuth={setIsAuth} />}></Route>
        <Route path={APP_NAME + '/logout'} element={<Logout setIsAuth={setIsAuth} />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
