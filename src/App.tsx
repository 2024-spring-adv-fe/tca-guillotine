import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

import { Home, AppTitle } from './Home';
import { Setup } from './Setup';
import { Play } from './Play';
import {
  GameResult
  , getLeaderboard
  , getGeneralFacts
  , getPreviousPlayers
  , getPissBoyLeaderboard
  , getPointFunFacts
  , getNotableNobleFunFacts
} from './GameResults';

const dummyGameResults: GameResult[] = [
  {
    winner: "Tom"
    , players: [
      "Tom"
      , "Batu"
      , "Julia"
      , "Melisa"
      , "John"
    ]
    , start: "2024-02-28T18:10:32.123Z"
    , end: "2024-02-28T18:15:34.123Z"
    , notableNoblesWithPlayers: [
      {
        nobleName: "King Louis XVI"
        , playerName: "Batu"
      }
      , {
        nobleName: "Piss Boy"
        , playerName: "Tom"
      }
      , {
        nobleName: "Marie Antionette"
        , playerName: "Tom"
      }
    ]
    , playerPoints: [
      ["Tom", 25]
      , ["Batu", 3]
      , ["Julia", 3]
      , ["Melisa", 10]
      , ["John", 10]
    ]
  }
  , {
    winner: "John"
    , players: [
      "Batu"
      , "Julia"
      , "Melisa"
      , "John"
    ]
    , start: "2024-02-28T18:20:32.123Z"
    , end: "2024-02-28T18:47:34.123Z"
    , notableNoblesWithPlayers: [
      {
        nobleName: "Piss Boy"
        , playerName: "John"
      }
      , {
        nobleName: "King Louis XVI"
        , playerName: "John"
      }
      , {
        nobleName: "Marie Antionette"
        , playerName: "John"
      }
    ]
    , playerPoints: [
      ["Batu", 3]
      , ["Julia", 10]
      , ["Melisa", 10]
      , ["John", 20]
    ]
  }
];

const App = () => {

  // Uncomment this line to see app running without any game results...
  // const [gameResults, setGameResults] = useState<GameResult[]>([]);
  const [gameResults, setGameResults] = useState<GameResult[]>(dummyGameResults);

  const [title, setTitle] = useState(AppTitle);

  const [chosenPlayers, setChosenPlayers] = useState<string[]>([]);

  const addNewGameResult = (result: GameResult) => setGameResults(
    [
      ...gameResults
      , result
    ]
  );

  const router = createHashRouter([
    {
      path: "/",
      element: <Home
        leaderboardData={getLeaderboard(gameResults)}
        generalFacts={getGeneralFacts(gameResults)}
        setTitle={setTitle}
        pissBoyLeaderboard={getPissBoyLeaderboard(gameResults)}
        pointFunFacts={getPointFunFacts(gameResults)}
        notableNobleFunFacts={getNotableNobleFunFacts(gameResults)}
      />
    },
    {
      path: "/setup",
      element: <Setup
        setTitle={setTitle}
        previousPlayers={getPreviousPlayers(gameResults)}
        setChosenPlayers={setChosenPlayers}
      />
    },
    {
      path: "/play",
      element: <Play
        addNewGameResult={addNewGameResult}
        setTitle={setTitle}
        chosenPlayers={chosenPlayers}
      />
    },
  ]);


  return (
    <div
      className="App"
    >
      <div
        className='navbar bg-base-300 text-nowrap overflow-x-hidden'
      >
        {
          title === AppTitle &&
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" />
          </svg>
        }
        <span
          className='text-lg font-bold ml-3'
        >
          {title}
        </span>
      </div>
      <div
        className='p-3'
      >
        <RouterProvider
          router={router}
        />
      </div>
    </div>
  );
}

export default App;
