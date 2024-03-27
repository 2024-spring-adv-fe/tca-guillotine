import { useNavigate } from 'react-router-dom';
import { GeneralFacts, LeaderboardEntry, PointFunFacts } from './GameResults';
import { FC, useEffect } from 'react';

export const AppTitle = "Guillotine Companion App";

interface HomeProps {
    leaderboardData: LeaderboardEntry[];
    setTitle: (t: string) => void;
    generalFacts: GeneralFacts;
    pissBoyLeaderboard: [string, number][];
    pointFunFacts: PointFunFacts;
}

export const Home: FC<HomeProps> = ({
    leaderboardData
    , setTitle
    , generalFacts
    , pissBoyLeaderboard
    , pointFunFacts
}) => {

    useEffect(
        () => setTitle(AppTitle)
        , []
    );

    const nav = useNavigate();

    return (
        <div
            className='flex flex-col gap-3'
        >
            <button
                className="btn btn-lg btn-primary"
                onClick={() => nav('/setup')}
            >
                Play
            </button>
            <div
                className='card bg-base-100 shadow-xl'
            >
                <div
                    className='card-body overflow-x-hidden p-3'
                >
                    <h2
                        className='card-title text-nowrap'
                    >
                        General
                    </h2>
                    <table
                        className='table'
                    >
                        <tbody>
                            <tr>
                                <td>Total Games</td>
                                <td>{generalFacts.totalGames}</td>
                            </tr>
                            <tr>
                                <td>Last Played</td>
                                <td>{generalFacts.lastPlayed}</td>
                            </tr>
                            <tr>
                                <td>Shortest Game</td>
                                <td>{generalFacts.shortestGame}</td>
                            </tr>
                            <tr>
                                <td>Longest Game</td>
                                <td>{generalFacts.longestGame}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div
                className='card bg-base-100 shadow-xl'
            >
                <div
                    className='card-body overflow-x-hidden p-3'
                >
                    <h2
                        className='card-title text-nowrap'
                    >
                        Leaderboard
                    </h2>
                    {
                        leaderboardData.length > 0
                            ? (
                                <table
                                    className='table'
                                >
                                    <thead>
                                        <tr>
                                            <th>W</th>
                                            <th>L</th>
                                            <th>AVG</th>
                                            <th>PLAYER</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            leaderboardData.map(lbe => (
                                                <tr
                                                    key={lbe.name}
                                                >
                                                    <td>{lbe.wins}</td>
                                                    <td>{lbe.losses}</td>
                                                    <td>{lbe.avg.toFixed(3)}</td>
                                                    <td>{lbe.name}</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            )
                            : (
                                <p>
                                    Play a game to see the leaderboard!
                                </p>
                            )
                    }
                </div>
            </div>
            <div
                className='card bg-base-100 shadow-xl'
            >
                <div
                    className='card-body overflow-x-hidden p-3'
                >
                    <h2
                        className='card-title text-nowrap'
                    >
                        Piss Boys
                    </h2>
                    {
                        pissBoyLeaderboard.length > 0
                            ? (
                                <table
                                    className='table'
                                >
                                    <thead>
                                        <tr>
                                            <th>PLAYER</th>
                                            <th>#</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            pissBoyLeaderboard.map(pblb => (
                                                <tr
                                                    key={pblb[0]}
                                                >
                                                    <td>{pblb[0]}</td>
                                                    <td>{pblb[1]}</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            )
                            : (
                                <p>
                                    Play a game to see the Piss Boys!
                                </p>
                            )
                    }
                </div>
            </div>
            <div
                className='card bg-base-100 shadow-xl'
            >
                <div
                    className='card-body overflow-x-hidden p-3'
                >
                    <h2
                        className='card-title text-nowrap'
                    >
                        High/Low Scores
                    </h2>
                    {
                        pointFunFacts.maxPointPlayers.length > 0
                            ? (
                                <table
                                    className='table'
                                >
                                    <tbody>
                                        <tr>
                                            <td>High Score</td>
                                            <td className='text-right'>{pointFunFacts.maxPointValue}</td>
                                            <td>{pointFunFacts.maxPointPlayers}</td>
                                        </tr>
                                        <tr>
                                            <td>Low Score</td>
                                            <td className='text-right'>{pointFunFacts.minPointValue}</td>
                                            <td>{pointFunFacts.minPointPlayers}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            )
                            : (
                                <p>
                                    Play a game to see best/worst players!
                                </p>
                            )
                    }
                </div>
            </div>
            <div
                className='card bg-base-100 shadow-xl'
            >
                <div
                    className='card-body overflow-x-hidden p-3'
                >
                    <h2
                        className='card-title text-nowrap'
                    >
                        Notable Nobles
                    </h2>
                    {
                        true
                            ? (
                                <table
                                    className='table'
                                >
                                    <thead>
                                        <tr>
                                            <th>NOBLE/COMBINATION</th>
                                            <th>IN % OF WINS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>King Louis XVI</td>
                                            <td>100%</td>
                                        </tr>
                                        <tr>
                                            <td>Marie Antionette</td>
                                            <td>100%</td>
                                        </tr>
                                        <tr>
                                            <td>King Louis XVI + Marie Antionette</td>
                                            <td>100%</td>
                                        </tr>
                                        <tr>
                                            <td>Count</td>
                                            <td>100%</td>
                                        </tr>
                                        <tr>
                                            <td>Countess</td>
                                            <td>100%</td>
                                        </tr>
                                        <tr>
                                            <td>Count + Countess</td>
                                            <td>100%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            )
                            : (
                                <p>
                                    Lop some heads to see!
                                </p>
                            )
                    }
                </div>
            </div>
        </div>
    );
};
