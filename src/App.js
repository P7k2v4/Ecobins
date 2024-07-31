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
import SignIn from './components/SignPage/SignIn';
import SignUp from './components/SignPage/SignUp';
import PostsManagement from './components/Posts/PostsManagement';
import OrderDetails from './components/Orders/OrderDetails';
import AddPost from './components/Posts/AddPost';
import EditPost from './components/Posts/EditPost';
import ProfilePage from './components/ProfilePage/ProfilePage';
import Header from './components/Header/Header';  
import Dashboard from './components/Dashboard/Dashboard';
import MetricCard from './components/Dashboard/MetricCard';
import  QuickAccessLinks from './components/Dashboard/QuickAccessLinks';


function App() {
  return (
    <Router>
      <div className="App">
      <Header />
      <main>
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
          <Route path="/profile" element={<ProfilePage/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="dashboard/metric-card" element={<MetricCard/>}/>
          <Route path="dashboard/quick-access-links" element={<QuickAccessLinks/>}/>
        </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
