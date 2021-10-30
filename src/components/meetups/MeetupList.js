import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

function MeetupList(prop) {
  return (
    <ul className={classes.list}>
      {prop.dummyData.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        ></MeetupItem>
      ))}
    </ul>
  );
}

export default MeetupList;
