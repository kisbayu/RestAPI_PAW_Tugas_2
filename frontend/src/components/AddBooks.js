import { useState } from 'react';
import axios from "axios";
import { useHistory } from 'react-router-dom';
import './FormStyle.css';

const AddBooks = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [year, setYear] = useState('');
    const [avaibility, setAvailability] = useState(Boolean);
    const history = useHistory();

    const saveBooks = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:8000/books',{
            title: title,
            author: author,
            year: year,
            avaibility: 'true'
        });
        history.push("/");
    }

    return (
        <div>
            <h1 className = "title">TAMBAH DATA BUKU</h1>
            <form onSubmit = {saveBooks}>
                <ul>
                <div className = "field">
                    <label className = "label mr">Title</label>
                    <input
                        className = "input"
                        type = "text"
                        placeholder = "Text"
                        value = { title }
                        onChange = { (e) => setTitle(e.target.value) }
                    />
                </div>

                <div className = "field">
                    <label className = "label">Author</label>
                    <input
                        className = "input"
                        type = "text"
                        placeholder = "Author"
                        value = { author }
                        onChange = { (e) => setAuthor(e.target.value) }
                    />
                </div>

                <div className = "field">
                    <label className = "label">Year</label>
                    <input
                        className = "input"
                        type = "text"
                        placeholder = "Year"
                        value = { year }
                        onChange = { (e) => setYear(e.target.value) }
                    />
                </div>
                <div className="field">
                    <button className="editButton">Tambah Data</button>
                </div>
                </ul>
            </form>

        </div>
    )
}

export default AddBooks