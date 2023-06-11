import React, { useState } from 'react';
import './ProvideHelp.css'; // Import the CSS file

const ProvideHelp = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tag, setTag] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Handle form submission here, e.g. send the title, description, and tag to the server
        console.log('Title:', title);
        console.log('Description:', description);
        console.log('Tag:', tag);

        // Reset the form fields
        setTitle('');
        setDescription('');
        setTag('');
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="form">
                <h1 className="title">
                    Thank You for your interest in helping others!
                </h1>
                <div className="formGroup">
                    <label htmlFor="title" className="label">
                        Title:
                    </label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="input"
                    />
                </div>
                <div className="formGroup">
                    <label htmlFor="description" className="label">
                        Description:
                    </label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="textarea"
                    />
                </div>
                <div className="formGroup">
                    <label className="label">Tags:</label>
                    <div className="radioGroup">
                        <label>
                            <input
                                type="radio"
                                name="tag"
                                value="finance"
                                checked={tag === 'finance'}
                                onChange={() => setTag('finance')}
                                className="radioInput"
                            />
                            Finance
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="tag"
                                value="education"
                                checked={tag === 'education'}
                                onChange={() => setTag('education')}
                                className="radioInput"
                            />
                            Education
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="tag"
                                value="other"
                                checked={tag === 'other'}
                                onChange={() => setTag('other')}
                                className="radioInput"
                            />
                            Other
                        </label>
                    </div>
                </div>
                <button type="submit" className="button">
                    Send
                </button>
            </form>
        </div>
    );
};

export default ProvideHelp;
