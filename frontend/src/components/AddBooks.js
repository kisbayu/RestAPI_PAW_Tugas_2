import { useState } from 'react'
import axios from "axios";
import { useHistory } from 'react-router-dom';

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
            <form onSubmit = {saveBooks}>
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

                {/* <div className = "field">
                    <label className = "label">Availability</label>
                    <input
                        className = "input"
                        name = "true"
                        type = "radio"
                        id = "true"
                        value = { true }
                        onChange = { (e) => setAvailability(e.target.value) }
                    />
                    <label htmlFor="true">Yes</label><br/>
                    <input
                        className = "input"
                        name = "false"
                        type = "radio"
                        id = "false"
                        value = { false }
                        onChange = { (e) => setAvailability(e.target.value) }
                    />
                    <label htmlFor="false">No</label>
                </div> */}

                <div className="field">
                    <button className="button is-primary">Save</button>
                </div>
            </form>

        </div>
    )
}

export default AddBooks