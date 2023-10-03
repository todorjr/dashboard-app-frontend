import React, { useEffect, useState } from 'react';
import StateTrack from './StateTrack';
import { FaHotjar, FaHamburger, FaAppleAlt } from 'react-icons/fa';
import { BsEggFried } from 'react-icons/bs';
import { fetchData, API_ENDPOINTS } from '../api/api';


function Dashboard({ userId }) {
    const [userData, setUserData] = useState({});
    const endpoint = API_ENDPOINTS.USER_MAIN_DATA + userId;
    console.log(endpoint);

    useEffect(() => {  //format this code to and separate into file formatter.js 
        fetchData(endpoint, userId)
            .then((data) => {
                setUserData(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [userId]);


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
                            iconColor='#fff'
                            value={userData?.data?.keyData?.calorieCount}
                            label="Calories"
                            icon={<FaHotjar />}
                            iconClassName="calorie"
                            iconContainerClassName="icon-calorie"
                        />
                        <StateTrack
                            value={userData?.data?.keyData?.proteinCount}
                            label="Proteines"
                            icon={<BsEggFried/>}
                            iconClassName="protein"
                            iconContainerClassName="icon-protein"

                        />
                        <StateTrack
                            value={userData?.data?.keyData?.carbohydrateCount}
                            label="Glucides"
                            icon={<FaAppleAlt />}
                            iconClassName="carbo"
                            iconContainerClassName="icon-carbo"
                        />
                        <StateTrack
                            value={userData?.data?.keyData?.lipidCount}
                            label="Lipides"
                            icon={<FaHamburger />}
                            iconClassName="lipid"
                            iconContainerClassName="icon-lipid"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

