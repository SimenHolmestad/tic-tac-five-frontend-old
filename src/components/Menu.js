import React, { useEffect, useState } from 'react';
import MenuItem from './MenuItem';
import { fetchActiveGames, createNewGame } from './../actions/ActiveGamesActions';
import { useSelector, useDispatch } from 'react-redux';

function Menu(props) {
  const dispatch = useDispatch();

  // Fetch active games when component is loaded and every 1 second.
  useEffect(() => {
    dispatch(fetchActiveGames());
    const interval = setInterval(() => dispatch(fetchActiveGames()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, [dispatch]);

  const [newGameName, setNewGameName] = useState( '' );

  const activeGames = useSelector((state) => state.activeGames);
  if (activeGames === []) {
    return <div>There are no active games</div>;
  }

  const menuItems = activeGames.map(game => {
    return <MenuItem game={ game } key={ game._id }/>;
  });

  return <div>
           { menuItems }
           <h1>Create new game</h1>
           <input
             type="text"
             value={newGameName}
             placeholder="Name of game"
             onChange={e => setNewGameName(e.target.value)}
           />
           <button onClick={() => dispatch(createNewGame(newGameName))}>Create game</button>
         </div>;
}

export default Menu;
