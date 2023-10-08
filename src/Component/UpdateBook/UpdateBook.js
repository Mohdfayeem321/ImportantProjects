import React, { useState, useEffect } from 'react';
import '../CreateBooks/CreateBooks.css';
import Swal from "sweetalert2";
import axios from "axios";
import { useParams } from "react-router-dom";

function UpdateBook() {
    const params = useParams();

    const [formData, setFormData] = useState({
        book_name: '',
        author_name: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(98,name,value)
        setFormData({ ...formData, [name]: value });
    };

    const [bookDetails, setBookDetails] = useState({});

    const getOneBook = async function () {
        await axios.get(`http://localhost:5000/api/books/getBook/${params.id}`,
            // method: "post",
            formData,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
            .then((data) => {
                let result = data.data.data
                setFormData({ book_name: result.book_name,  author_name: result.author_name});
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

    const handleSubmit = async (e) => {

        e.preventDefault();
        // You can handle form submission here, e.g., send data to the server
        console.log('Form data submitted:', formData)
        await axios.put(`http://localhost:5000/api/books/updateBook/${params.id}`,
            // method: "post",
            formData,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
            .then((data) => {
                Swal.fire("Updated!", "Your book has been updated.", "success");
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

    useEffect(() => {
        getOneBook();
    },[])

    return (
        <div className="registration-container">
            <h2>Update Book</h2>
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
                <button type="submit">Update Book</button>
                </div>
            </form>
        </div>
    );
}

export default UpdateBook;











