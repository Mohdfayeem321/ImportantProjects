import React, { useState, useEffect } from 'react';
import '../HomePage/Home.css'; // You can create this CSS file for styling
import axios from 'axios';
// import CreateBooks from "../CreateBooks/CreateBooks";
const HistoryRequest = () => {
  const [histories, setHistories] = useState([]); // Initialize 'books' as an empty array
    // Update 'books' with the received data.
    const fetchDetails = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/books/historicalRequest'); // Replace with your API endpoint
        // const data = await response.json();
        console.log("response", response.data);
        if (response.data.data.length > 0) {
          setHistories(response.data.data);
          }
          console.log("histories", histories);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };
  
  useEffect(() => {
    fetchDetails();
  }, []);

  if (histories.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="book-details">
      <h2>Request History Details</h2>
      {histories.map((history, index) => (
        <div className="book-card" key={index}>
          <p className="title">Url: {history.url}</p>
          <p className="method">Method: {history.method}</p>
          <p className="header">Header: {history.headers}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default HistoryRequest;

