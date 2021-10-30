import MeetupForm from "../components/meetups/MeetupForm";
import { useHistory } from "react-router-dom";

function NewMeetupsPage(prop) {
  const history = useHistory();

  function addMeetupHandler(meetupData) {
    fetch("https://react-app-e10d4-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/JSON",
      },
    }).then(() => {
      history.replace("/");
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <MeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupsPage;
