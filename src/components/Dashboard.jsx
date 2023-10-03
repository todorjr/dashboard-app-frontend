import React, { useEffect, useState } from 'react';
import StateTrack from './StateTrack';
import { FaHotjar } from 'react-icons/fa';
import { FaHamburger } from 'react-icons/fa';
import { FaAppleAlt } from 'react-icons/fa';
import { fetchData } from '../api/api';


function Dashboard({ userId }) {
    const [userData, setUserData] = useState({});
    const endpoint = '/user_data';

    useEffect(() => {
        fetchData(endpoint, userId)
            .then((data) => {
                setUserData(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [userId]);

    console.log(userId);


    return (
        <div style={{ flex: 1, padding: '20px' }}>
            <div className="title">
                <h1>Bonjour {userData?.data?.userInfos?.firstName}</h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
            <div className="container">
                <div className="first-section">
                    <div className="activity">
                        <h2>Activité quotidienne</h2>
                        {/* Add content for the big div */}
                    </div>
                    <div className="column">
                        <div className="row time">
                            <div className="square session">
                                <h2>Durée moyenne des sessions</h2>
                            </div>
                            <div className="square intense">
                                <h2>Intensité</h2>
                            </div>
                            <div className="square score">
                                <h2>Score</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="side-section">
                    <div className="column">
                        <StateTrack
                            bgColor="#f0f0f0"
                            iconColor='#fff'
                            value={userData?.data?.keyData?.calorieCount}
                            label="Calories"
                            icon={<FaHotjar />}
                        />
                        <StateTrack
                            bgColor="#f0f0f0"
                            value={userData?.data?.keyData?.proteinCount}
                            label="Proteines"
                            icon={<FaHamburger />}

                        />
                        <StateTrack
                            bgColor="#f0f0f0"
                            value={userData?.data?.keyData?.carbohydrateCount}
                            label="Glucides"
                            icon={<FaAppleAlt />}
                        />
                        <StateTrack
                            bgColor="#f0f0f0"
                            value={userData?.data?.keyData?.lipidCount}
                            label="Lipides"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

