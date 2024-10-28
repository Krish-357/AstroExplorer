import React, { useState, useEffect } from 'react';
import { fetchPlanetData } from '../api';
import { Loader2 } from 'lucide-react';
import './Planet.css';

const Planet = () => {
  const [planetData, setPlanetData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPlanetData = async () => {
      try {
        const response = await fetchPlanetData('mars');
        setPlanetData(response.data.collection.items || []);
      } catch (error) {
        console.error("Error fetching planet data:", error);
      } finally {
        setLoading(false);
      }
    };
    getPlanetData();
  }, []);

  if (loading) return <div className="flex items-center justify-center p-8"><Loader2 className="animate-spin h-8 w-8" /></div>;

  return (
    <div className="planet">
      <div className="max-w-4xl mx-auto p-6">
        <br /><br />
        <h1 className="text-3xl font-bold mb-6">Planet Explorer</h1>
        {planetData.map((item, index) => (
          <div key={index} className="planet-details mb-4">
            {item.links && item.links[0] && item.links[0].href ? (
              <img src={item.links[0].href} alt="Mars Surface" className="planet-image" />
            ) : (
              <p>No image available</p>
            )}
            <div className="planet-detail-section">
              <h2 className="planet-detail-title">{item.data[0]?.title || 'Unknown Title'}</h2>
              <p className="planet-detail-info">{item.data[0]?.description || 'Description not available.'}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Planet;
