// src/App.js
import React from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecyclingGuide from './components/RecyclingGuide/RecyclingGuide';
import DisposalGuide from './components/DisposalGuide/DisposalGuide';
import SearchPage from './components/SearchPage/SearchPage';
import HomePage from './components/HomePage/HomePage';
import AboutPage from './components/AboutPage/AboutPage';
import SearchOptions from './components/SearchOptions/SearchOptions';
import CarbonFootprintForm from './components/Form/CarbonFootprintForm';
import SignIn from './components/Sign In Page/SignIn';
import SignUp from './components/Sign In Page/SignUp';
import PostsManagement from './components/Posts/PostsManagement';
import OrderDetails from './components/Orders/OrderDetails';
import AddPost from './components/Posts/AddPost';
import EditPost from './components/Posts/EditPost';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/recycle" element={<RecyclingGuide />} />
          <Route path="/disposal" element={<DisposalGuide />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/search-options" element={<SearchOptions />} />
          <Route path="/carbon-footprint" element={<CarbonFootprintForm />} />
          <Route path="/posts-management" element={<PostsManagement />} />
          <Route path="/order-details" element={<OrderDetails />} />
          <Route path="/add-post" element={<AddPost />} />
          <Route path="/edit-post/:id" element={<EditPost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
