import { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import './BookList.css'

const BookList = () => {
    const [books, setBook] = useState([]);

    useEffect(() => {
        getBooks();
    }, []);

    const getBooks = async () => {
        const response = await axios.get('http://localhost:8000/books');
        setBook(response.data);
    }

    const deleteBook = async (id) => {
        await axios.delete(`http://localhost:8000/books/${id}`);
        getBooks();
    }

    return (
        <div>
            <h1 className = "title">DATA PEMINJAMAN BUKU</h1>
            <Link to="/add" className="button-4">Masukkan Data Buku Baru</Link>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Year</th>
                        <th>Availability</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { books.map((book, index) => (
                        <tr key={ book.id }>
                            <td>{ index + 1 }</td>
                            <td>{ book.title }</td>
                            <td>{ book.year }</td>
                            <td>{ book.avaibility.toString() == 'true' ? 'YES' : 'NO' }</td>
                            <td>
                                <button onClick={(e) => {
                                    e.preventDefault(e);
                                    window.location.href=`/edit/${book.id}`}} className="editButton">Edit</button>
                                <button onClick={ () => deleteBook(book.id) } className="deleteButton">Delete</button>
                            </td>
                        </tr>
                    )) }
                     
                </tbody>
            </table>
        </div>
    )
}

export default BookList