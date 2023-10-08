import React, { useState, useEffect } from 'react';
import './Home.css'; // You can create this CSS file for styling
import {Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from 'axios';
// import CreateBooks from "../CreateBooks/CreateBooks";
const HomePage = () => {
  const [books, setBooks] = useState([]); // Initialize 'books' as an empty array
    // Update 'books' with the received data.
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/books/readBooks'); // Replace with your API endpoint
        // const data = await response.json();
        // console.log("ata", data);
        if (response.data.length > 0) {
          setBooks(response.data); // Update 'books' with the array of books
        }
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };
  
    const Promptdelete = async function (id) {
      try {
        const response = await axios.delete(`http://localhost:5000/api/books/deleteBook/${id}`); // Replace with your API endpoint
       
        console.log("response", response.data);
        if (response.data.status === 200) {

          Swal.fire("Deleted!", "Your book has been deleted.", "success");
          
           setTimeout(function() {
              window.location.reload();
            }, 1000);
        }
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };
  
  useEffect(() => {
    fetchBookDetails();
  }, []);

  if (books.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="book-details">
      <h2>Book Details</h2>
      {books.map((book, index) => (
        <div className="book-card" key={index}>
          <p className="title">Title: {book.book_name}</p>
          <p className="author">Author: {book.author_name}</p>
          <hr />
          <button className="edit-sale-list">
            <Link style = {{textDecoration:"none"}} to={"/updateBook/" + book.id}>Edit</Link>
          </button>
          <button
          className="del-sale-list"
          onClick={() => Promptdelete(book.id)}
          >
          Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default HomePage;

