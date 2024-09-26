"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {

    const [buttonMessage, setButtonMessage] = useState('');


    const handleButtonClick = () => {
        axios.get('http://localhost:3002/api/message')
            .then(response => {
                setButtonMessage(response.data.message);
            })
            .catch(error => {
                console.error('Error fetching the button message:', error);
            });
    };

    return (
        <div>
            <h1>Message from Express Server:</h1>
            <button onClick={handleButtonClick} className='bg-blue-400 rounded-md' >Get Button Message</button>
            <p>{buttonMessage}</p>
        </div>
    );
}
