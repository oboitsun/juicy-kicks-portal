import React from "react";
import "./contact-us.scss";

export default function ContactUs() {
  return (
    <div id="contact-us">
      <div className="my-container relative ">
        <form className="contact-form z-10 flex flex-col">
          <div className="contact-grid">
            <input className="form-input" required type="text" placeholder="Name" />
            <input
              className="form-input"
              required
              type="text"
              placeholder="Email /Phone"
            />

            <textarea
              placeholder="Comment"
              className="form-input comment"
              rows={4}
            ></textarea>
          </div>
          <input className="submit" type="submit" value="REQUEST A CALL BACK" />
        </form>
      </div>
    </div>
  );
}
