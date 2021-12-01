import { createContext, useState } from "react";

const FavoriteContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: () => {},
  removeFavorite: () => {},
  itemIsFavorite: () => {},
});

export function FavoritesContextProvider(prop) {
  const [userFavorite, setUserFavorite] = useState([]);

  function addFavoriteHandler(favMeetup) {
    setUserFavorite((prevUserFavorite) => {
      return prevUserFavorite.concat(favMeetup);
    });
  }

  function removeFavoriteHandler(meetupId) {
    setUserFavorite((prevUserFavorite) => {
      return prevUserFavorite.filter((meetup) => meetup.id !== meetupId);
    });
  }

  function itemIsFavoriteHandler(meetupId) {
    return userFavorite.some((meetup) => meetup.id === meetupId);
  }

  const context = {
    favorites: userFavorite,
    totalFavorites: userFavorite.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoriteContext.Provider value={context}>
      {prop.children}
    </FavoriteContext.Provider>
  );
}

export default FavoriteContext;
