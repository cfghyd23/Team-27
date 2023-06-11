import React, { useState } from 'react';
import './SeekHelpAllForms.css';
import { formData } from '../../data.js'

const SeekHelpAllForms = () => {
    const [filterTag, setFilterTag] = useState('');

    const handleTagFilterChange = (e) => {
        setFilterTag(e.target.value);
    };

    const filteredData = filterTag
        ? formData.filter((data) => data.tag.toLowerCase() === filterTag.toLowerCase())
        : formData;

    return (
        <div>
            {/* <h2 style={{
                color: "#fcac04",
                textAlign: "center",
                fontSize: "2.5rem",
                fontWeight: "bold",
                marginTop: "2rem",
            }}>Those who are in need</h2> */}
            <div className="filter">
                <label htmlFor="filterTag">Filter by Tag:</label>
                <select id="filterTag" value={filterTag} onChange={handleTagFilterChange} className="filter-select">
                    <option value="">All</option>
                    <option value="finance">Finance</option>
                    <option value="education">Education</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <ul className="form-data-list" style={{
                listStyle: "none",
                padding: "0 15rem 0 15rem",
            }}>
                {filteredData.map((data, index) => (
                    <li key={index} className="form-data-item">
                        <div className="user">
                            <img src='/assests/dp.jpg' alt="User Profile" className="profile-image" />
                            <p className="user-name" >{data.user}</p>
                        </div>
                        <div className="form-details">
                            <strong>Title:</strong> {data.title} <br />
                            <strong>Description:</strong> {data.description} <br />
                            <strong>Tag:</strong> {data.tag}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SeekHelpAllForms;
