import { BrowserRouter as Router, Routes, Route, Navigate, NavigationType } from "react-router-dom";
import Header from "./components/Header";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Albums from "./Pages/Albums";
import Posts from "./Pages/Posts";
import Photos from "./Pages/Photos";
import SinglePost from "./Pages/SinglePost";
import Navbar from "./components/Navbar";
import './style/Home.css'
import Users from "./Pages/Users";

const Layout = () => {

    const user = JSON.parse(localStorage.getItem('currentUser'))

    return (
        <div className="Main">
            <Router>
           {user && <Header /> }
                <div className="divBody">
                   {user && <Navbar /> }
                    <Routes>
                        <Route path="/" element={user ? <Posts/> : <Login />} />
                        <Route path="/login" element={user ? <Posts/> : <Login />} />
                        <Route path="/signup" element={user ? <Posts/> : <Signup />} />

                        <Route path="/posts" element={user ? <Posts /> : <Navigate replace to = '/'/>} />
                        <Route path="/albums" element={user ? <Albums /> : <Navigate replace to = '/'/>} />
                        <Route path="/post/:id" element={user ? <SinglePost /> : <Navigate replace to = '/'/>} />
                        <Route path="/photos/:id" element={user ? <Photos /> : <Navigate replace to = '/'/>} />

                        <Route path="/users" element={user ? <Users /> : <Navigate replace to = '/'/>} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
};
export default Layout;
