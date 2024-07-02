"use client";  // Tandai file ini sebagai "Client Component"

import { useState, useEffect } from 'react';

export default function Home() {
    const [searchTerm, setSearchTerm] = useState('');
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            setData(jsonData);
            setFilteredData(jsonData.slice(0, 5));  // Initialize filtered data with first 5 items
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleSearchChange = (e) => {
        const searchTerm = e.target.value;
        setSearchTerm(searchTerm);
        const filteredData = data.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredData(filteredData.slice(0, 5));  // Update filtered data with first 5 filtered items
        setShowAll(false);  // Reset showAll state when search changes
    };

    const handleShowAll = () => {
        setFilteredData(data);  // Show all data
        setShowAll(true);  // Set showAll state to true
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 text-black">
            <div className="w-full max-w-2xl bg-white p-8 border border-gray-300 rounded-lg shadow-md">
                <div className="mb-4">
                    <input 
                        type="text" 
                        value={searchTerm} 
                        onChange={handleSearchChange} 
                        placeholder="Masukkan Keyword" 
                        className="w-full p-2 border border-gray-300 rounded mt-1 text-black"
                    />
                </div>
                <ul>
                    {filteredData.map(item => (
                        <li key={item.id} className="border-b border-gray-300 py-2">
                            <p className="text-lg font-bold">{item.name}</p>
                            <p>Email: {item.email}</p>
                            <p>Phone: {item.phone}</p>
                        </li>
                    ))}
                </ul>
                {!showAll && (
                    <button
                        onClick={handleShowAll}
                        className="mt-4 p-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600"
                    >
                        Show All
                    </button>
                )}
            </div>
        </div>
    );
}
