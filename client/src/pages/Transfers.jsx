// Transfers.jsx
import { useState, useEffect } from 'react';
import TransferCommentForm from '../components/TransferCommentForm';

const Transfer = () => {
  const [transfers, setTransfers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://v3.football.api-sports.io/transfers?team=33', {
          method: 'GET',
          headers: {
            'x-rapidapi-host': 'v3.football.api-sports.io',
            'x-rapidapi-key': 'YOUR_API_KEY', // Replace with your actual API key
          },
        });

        const result = await response.json();

        if (result.response && result.response.length > 0) {
          setTransfers(result.response);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="transfer-container">
      <h2>Transfer News</h2>
      {transfers.map((transfer) => (
        <div key={transfer.player.id} className="transfer-card">
          <h3>{transfer.player.name}</h3>
          <p>Last Update: {transfer.update}</p>
          <ul>
            {transfer.transfers.map((transferDetail, index) => (
              <li key={index}>
                Transfer Date: {transferDetail.date} | Type: {transferDetail.type}
                <div className="team-logos">
                  <img src={transferDetail.teams.in.logo} alt={transferDetail.teams.in.name} />
                  <span>&rarr;</span>
                  <img src={transferDetail.teams.out.logo} alt={transferDetail.teams.out.name} />
                </div>
              </li>
            ))}
          </ul>
          <TransferCommentForm transferId={transfer.player.id} />
        </div>
      ))}
    </div>
  );
};

export default Transfer;