import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://react-app-e10d4-default-rtdb.firebaseio.com/meetups.json")
      .then((response) => response.json())
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  console.log(loadedMeetups);

  return (
    <section>
      <h1>All Meetup Page </h1>
      <MeetupList dummyData={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
