import React from 'react';
import { Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ExerciseDetails from './pages/ExerciseDetails';
import Footer from './components/Footer';


const App = () => {

  return (
    //to make the app responsive we will use the Box component from MUI
    //  and set the width to 400px for small screens and 1488px for larger screens

    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<h1>ExerciseDetails</h1>} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;