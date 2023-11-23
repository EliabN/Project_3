import { useState, useEffect } from 'react';
import TransferCommentList from '../components/TransferCommentList';
import TransferCommentForm from '../components/TransferCommentForm';
import { useParams } from 'react-router-dom';

const Transfers = () => {
  const { id } = useParams();
  const [transfers, setTransfers] = useState([]);

  useEffect(() => {
    const fetchTransferDetails = async () => {
      try {
        const response = await fetch(`https://v3.football.api-sports.io/transfers?team=${id}`, {
          method: 'GET',
          headers: {
            'x-rapidapi-host': 'v3.football.api-sports.io',
            'x-rapidapi-key': '59c7214420bf3f1d9545cf2ea', // TODO: Replace with actual 
          },
        });

        const result = await response.json();

        if (result.response && result.response.length > 0) {
          setTransfers(result.response);
          console.log('Return Data', result);
        }
      } catch (error) {
        console.error('Error fetching transfer details:', error);
      }
    };

    // Call the fetch function
    fetchTransferDetails();
  }, [id]);

  return (
    <div className="transfer-container card bg-light-green rounded p-4">
      <h2>Transfer Details</h2>
      {transfers.map((transfer) => (
        <div key={transfer.player.id} className="transfer-card">
          <h3>{transfer.player.name}</h3>
          <p>Last Update: {transfer.update}</p>
          <ul>
            {transfer.transfers && transfer.transfers.slice(0, 6).map((transferDetail, index) => (
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
          <TransferCommentList comments={transfer.comments} />
          <TransferCommentForm transferId={transfer._id} />
        </div>
      ))}
    </div>
  );
};

export default Transfers;