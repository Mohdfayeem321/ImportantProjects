import React, { useState } from 'react';
import './CreateBooks.css';
import Swal from "sweetalert2";
import axios from "axios";


function CreateBooks() {

    const [formData, setFormData] = useState({
        book_name: '',
        author_name: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();
        // You can handle form submission here, e.g., send data to the server
        console.log('Form data submitted:', formData)
        await axios.post("http://localhost:5000/api/books/createBook",
            // method: "post",
            formData,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
            .then((data) => {
                    Swal.fire("Created!", "Your book has been created.", "success");
                    // Handle the response if needed (e.g., show a message to the user)
                    console.log(data);
                })
                .catch((error) => {
                    console.error("Error:", error);
                    return Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: error.message,
                    })
                });
    }

    return (
        <div className="registration-container">
            <h2>Create Book</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="book_name">Book Name</label>
                    <input
                        type="text"
                        id="book_name"
                        name="book_name"
                        value={formData.book_name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="author_name">Author Name</label>
                    <input
                        type="text"
                        id="author_name"
                        name="author_name"
                        value={formData.author_name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='submit-button'>
                <button type="submit">Create Book</button>
                </div>
            </form>
        </div>
    );
}

export default CreateBooks;
