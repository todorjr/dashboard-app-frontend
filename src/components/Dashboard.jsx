// TitlePhrase.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard ({userId}) {
    const [userData, setUserData] = useState({});
    const apiUrl = `http://localhost:3000/user/${userId}`;

    console.log(userData,'userData');
    console.log(userId,'userId');

    const dashboardItems = Object.entries(userData).map(([key, value]) => (
        <li key={key}>
        <p>{key}:</p> {typeof value === 'object' ? JSON.stringify(value) : value}
        </li>
    ));

    useEffect(() => {
        axios.get(apiUrl)
            .then((response) => {
                setUserData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
        }, [userId]);

    return (
        <div style={{ flex: 1, padding: '20px' }}>
            <div className="title">
                <h1>Bonjour {userData.data?.userInfos?.firstName}</h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                <p>User ID: {userId}</p>
                    <div>
                        <h2>User Data</h2>
                        <ul>{dashboardItems}</ul>
                    </div>
            </div>
        </div>
    );
};

export default Dashboard;

