import { useState, useEffect } from 'react'
import axios from "axios";
import { useHistory, useParams } from 'react-router-dom';

const EditBooks = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [year, setYear] = useState();
    const [avaibility, setAvailability] = useState(Boolean);
    const history = useHistory();
    const { id } = useParams();

    const updateBooks = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8000/books/${id}`,{
            title: title,
            author: author,
            year: year,
            avaibility: avaibility
        });
        history.push("/");
    }

    useEffect(() => {
        getBookByID();
    }, []);

    const getBookByID = async () => {
        const response = await axios.get(`http://localhost:8000/books/${id}`);
        setTitle(response.data.title);
        setAuthor(response.data.author);
        setYear(response.data.year);
        setAvailability(response.data.avaibility);
    }

    return (
        <div>
            <form onSubmit = {updateBooks}>
                <div className = "field">
                    <label className = "label">Title</label>
                    <input
                        className = "input"
                        type = "text"
                        placeholder = "text"
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

                <div className = "field">
                    <label className = "label">Availability</label>
                    <input
                        className = "input"
                        name = "true"
                        type = "radio"
                        id = "true"
                        value = { true }
                        onChange = { (e) => setAvailability(e.target.value) }
                    />
                    <label htmlFor="true">Yes</label>
                    <input
                        className = "input"
                        name = "false"
                        type = "radio"
                        id = "false"
                        value = { false }
                        onChange = { (e) => setAvailability(e.target.value) }
                    />
                    <label htmlFor="false">No</label>
                </div>

                <div className="field">
                    <button className="button is-primary">Save</button>
                </div>
            </form>

        </div>
    )

}

export default EditBooks