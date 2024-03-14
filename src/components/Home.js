import { useSearchParams } from "react-router-dom";
import React, { useState } from "react";

export default function Home(props) {
  const [course, setCourse] = useState();
  const [filterCourse, setFilterCourse] = useSearchParams();
  const searchCourse = () => {
    setFilterCourse({ filter: course });
  };
  const showCourse = () => {
    switch (filterCourse.get("filter")) {
      case "java":
        return (
          <div className="text-start">
            <h2>Java Playlist</h2>
            <ol>
              <li>Core java</li>
              <li>Java File Handling</li>
              <li>Java Scoket Programming</li>
              <li>Android with Java</li>
            </ol>
          </div>
        );
      case "kotlin":
        return (
          <div className="text-start">
            <h2>Kotlin Playlist</h2>
            <ol>
              <li>Kotlin Fundmental</li>
              <li>Android with Kotlin</li>
              <li>Jetpack Compose</li>
            </ol>
          </div>
        );
      case "react":
        return (
          <div className="text-start">
            <h2>React Playlist</h2>
            <ol>
              <li>React Tutorial</li>
              <li>React Hooks</li>
              <li>React Routers</li>
              <li>React Projects</li>
            </ol>
          </div>
        );
      default:
        return (
          <h2>
            Welcome to online learning class for {filterCourse.get("filter")}
          </h2>
        );
    }
  };
  return (
    <div style={{ height: "460px" }}>
      <h2>{props.title}</h2>
      <input
        type="text"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />
      <button className="btn btn-primary ms-2" onClick={searchCourse}>
        Fetch Course
      </button>
      {filterCourse.get("filter") ? showCourse() : ""}
    </div>
  );
}
