import classes from "./MeetupForm.module.css";
import Card from "../ui/Card";
import { useRef } from "react";

function MeetupForm(prop) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    prop.onAddMeetup(meetupData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" id="title" ref={titleInputRef} required></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" id="image" ref={imageInputRef} required></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input
            type="address"
            id="address"
            ref={addressInputRef}
            required
          ></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            type="text"
            rows="5"
            id="description"
            ref={descriptionInputRef}
            required
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default MeetupForm;
