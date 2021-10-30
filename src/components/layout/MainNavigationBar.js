import { Link } from "react-router-dom";

import classes from "./MainNavigationBar.module.css";

function MainNavigationBar() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>REACT MEETUPS</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
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
