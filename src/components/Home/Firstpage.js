import React from "react";
import About from "../About/About";
import Categories from "../Categories/Categories";
import "../css/Firstpage.css";

export default function Firstpage() {
  return (
    <>
      <div className="speaker">
        {/* <img src={require("../images/speaker.jpg")} alt={""} /> */}
        {/* <video height="80%" autoplay muted>
          <source src="./Speakerore Home Page video.mp4" type="video/mp4" />
        </video> */}
        <video
          width="100%"
          loop
          autoplay="autoplay"
          muted
          src="./video1.mp4"
        ></video>
        <div className="fp-text">
          <a href="/events">
            <button className="btn">EXPLORE EVENTS</button>
          </a>
          <p className="one">SpeakerOre</p>
          <p className="two">One Liner from SpeakerOre to the users</p>
        </div>
      </div>
      <About />
      <Categories />
      <div className="fp-addevent">
        <p className="head1">ADD EVENT</p>
        <p className="desc">
          Become a member now, and create an event as a event manager or a
          speaker.
        </p>
        {/* <h1 className="fpae-heading">features</h1> */}
        <div className="speaker">
          <img
            src={require("../images/MaskGroup.png")}
            style={{ height: "100%" }}
            alt={""}
          />
          <div className="fp-text">
            <p className="fpae-imgtext">CREATE NOW</p>
            <p className="two">
              You can fill out the form and create any event.
            </p>
            <a href="/addevent">
              <button className="btn">ADD AN EVENT</button>
            </a>
          </div>
        </div>
      </div>
      <div className="fp-addevent">
        <p className="head1">POPULAR UPCOMING EVENTS</p>
        <p className="desc">
          Subscribe to us and view unlimited number of events.
        </p>
        {/* <h1 className="fpae-heading">features</h1> */}
        <div className="speaker">
          <img
            src={require("../images/EventsPage2.png")}
            style={{ height: "100%" }}
            alt={""}
          />
          <div className="fp-text">
            <p className="fpae-imgtext">POPULAR UPCOMING EVENTS</p>
            <p className="two">
              As a subscriber of SpeakerOre, you can browse through all the
              upcoming events and be a speaker in them too!
            </p>
            <a href="/events">
              <button className="btn">SUBSCRIBE</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
