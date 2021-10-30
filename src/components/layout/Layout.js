import classes from "./Layout.module.css";
import MainNavigationBar from "./MainNavigationBar";

function Layout(prop) {
  return (
    <div>
      <MainNavigationBar />
      <main className={classes.main}>{prop.children}</main>
    </div>
  );
}

export default Layout;
