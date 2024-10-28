import React, { useState, useEffect } from 'react';
import { fetchAPOD } from '../api';
import { Loader2 } from 'lucide-react';
import './Home.css';


const Home = () => {
  const [apod, setApod] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const getAPOD = async () => {
      const response = await fetchAPOD();
      setApod(response.data);
      setLoading(false);
    };
    getAPOD();
  }, []);

  if (loading) return <div className="flex items-center justify-center p-8"><Loader2 className="animate-spin h-8 w-8" /></div>;

  return (
    <div className="homepage">
      <center>
        <br></br>
        <br></br>
      <h1 className="text-3xl font-bold mb-6">Astronomy Picture of the Day</h1>
      {apod && (
        <div className={`bg-gray-100 rounded-lg shadow-lg p-6 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-2xl font-bold mb-4">{apod.title}</h2>
          <img src={apod.url} alt={apod.title} className="w-full h-auto rounded-lg mb-4" onLoad={() => setIsImageLoaded(true)} />
          <p className="text-gray-700 mb-2">Date: {apod.date}</p>
          <p>{apod.explanation}</p>
        </div>
      )}
      </center>
    </div>
  );
};

export default Home;
