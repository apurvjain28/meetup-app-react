import { Link } from "react-router-dom";
import classes from "./MainNavigationBar.module.css";

import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";

function MainNavigationBar() {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>REACT MEETUPS</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/favorites">
              My Favorites
              <span className={classes.badge}>
                {favoritesCtx.totalFavorites}
              </span>
            </Link>
          </li>
          <li>
            <Link to="/new-meetups">Add new Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigationBar;
