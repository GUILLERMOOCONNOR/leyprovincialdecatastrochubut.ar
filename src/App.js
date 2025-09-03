import React from 'react';
import Header from './components/Header';
import VideoGallery from './components/VideoGallery';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <h1>Bienvenidos a Educando al Soberano</h1>
        <p>Explora temas de interés general y disfruta de nuestros videos.</p>
        <VideoGallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;