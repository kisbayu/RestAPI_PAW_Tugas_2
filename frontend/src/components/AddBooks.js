import { useState } from 'react';
import axios from "axios";
import { useHistory } from 'react-router-dom';
import './FormStyle.css';

const AddBooks = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [year, setYear] = useState('');
    const history = useHistory();

    const saveBooks = async (e) => {
        e.preventDefault();
        await axios.post('https://paw-kel14-api.herokuapp.com/books',{
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
                <div className="container text-left">
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
                    <button onClick={(e) => {
                                    e.preventDefault(e);
                                    window.location.href=`/`}} className="deleteButton">Batal</button>
                </div>
                </div>
            </form>

        </div>
    )
}

export default AddBooks