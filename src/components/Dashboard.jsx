import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StateTrack from './StateTrack';
import { FaHotjar, FaHamburger, FaAppleAlt } from 'react-icons/fa';
import { BsEggFried } from 'react-icons/bs';
import { getUserData, getActivityData, getSessionData, getIntensityData } from '../services/services.js';


import ActivityChart from './charts/ActivityChart';
import SessionChart from './charts/SessionChart';
import IntensityChart from './charts/IntensityChart'
import ScoreChart from './charts/ScoreChart';

function Dashboard({ userId }) {
    const [userData, setUserData] = useState({ data:[] });
    const [activity, setUserActivity] = useState({ data: [], loading: false });
    const [session, setUserSession] = useState({ data: [], loading: false });
    const [performance, setUserPerformance] = useState({ data:[], loading: false});

    useEffect(() => {
        async function basicUserData () {
            const result = await getUserData(userId)
            setUserData({...userData, data: result })
        }
        async function userActivityData() {
            const result = await getActivityData(userId)
            setUserActivity({ ...activity, data: result, loading: true })
        }
        async function userSessionData() {
            const result = await getSessionData(userId)
            setUserSession({ ...session, data: result, loading: true })
        }
        async function userPerfomanceData() {
            const result = await getIntensityData(userId)
            setUserPerformance({...performance, data: result, loading: true})

        }

        basicUserData()
        setTimeout(()=>{
            userActivityData()
            userSessionData()
            userPerfomanceData()
        }, 2000)
    }, [userId]);

    const userName = userData?.data?.userInfos?.firstName
    const scoreValue = userData?.data?.todayScore ?? userData?.data?.score;
    const scoreData = [{
        score: scoreValue,
    }];
    
    return (
        <div style={{ flex: 1, padding: '20px' }}>
            <div className="title">
                <h1>Bonjour {userName}</h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
            <div className="container">
                <div className="first-section">
                    <div className="activity">
                        <h2>Activité quotidienne</h2>
                        <ActivityChart data={ activity.data } loading={ activity.loading } />
                    </div>
                    <div className="column">
                        <div className="row time">
                            <div className="square session">
                                <h2>Durée moyenne des sessions</h2>
                                <SessionChart data={ session.data } loading={ session.loading } />

                            </div>
                            <div className="square intense">
                                <h2>Intensité</h2>
                                <IntensityChart data={ performance.data } loading={performance.loading } />
                            </div>
                            <div className="square score">
                                <h2>Score</h2>
                                <ScoreChart data={scoreData} />
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
                            icon={<BsEggFried />}
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

