import React, { useState, useEffect } from 'react';
import { fetchMissions } from '../api';
import { Loader2 } from 'lucide-react';
import './Missions.css';

const Missions = () => {
  const [missions, setMissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const getMissions = async () => {
      const response = await fetchMissions();
      setMissions(response.data.results);
      setLoading(false);
    };
    getMissions();
  }, []);

  const filteredMissions = missions.filter(mission => 
    mission[2].toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div className="flex items-center justify-center p-8"><Loader2 className="animate-spin h-8 w-8" /></div>;

  return (
    <div className="missions"> 
      <div className="max-w-4xl mx-auto p-6">
        <br></br>
        <br></br>
        <h1 className="text-3xl font-bold mb-6">Space Missions</h1>
        <input
          type="text"
          placeholder="Search missions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border rounded-lg"
        />
        <div className="grid gap-6 mt-4">
          {filteredMissions.map((mission, index) => (
            <div key={index} className="bg-gray-100 rounded-lg shadow p-6">
              <h2 className="text-xl font-bold">{mission[2]}</h2>
              <p>{mission[3]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Missions;
