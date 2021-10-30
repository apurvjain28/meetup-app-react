import classes from "./Card.module.css";

function Card(prop) {
  return <div ClassName={classes.card}>{prop.children}</div>;
}

export default Card;
