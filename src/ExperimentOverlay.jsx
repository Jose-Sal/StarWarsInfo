import { Children } from "react";
import { motion } from "framer-motion";
// import { Logo } from '@pmndrs/branding'
import { useStore } from "./store";
import { Center } from "@react-three/drei";
import React, { useState, useEffect } from "react";

// if the object is not clicked on then it will stay hidden but once it's clicked then the opacity will show the text
const item = {
  hidden: { opacity: 0, y: "100%" },
  show: { opacity: 1, y: 0 },
};

// this will check if the state is open through clicking the children mesh
function List({ children, open }) {
  return (
    // this will be the animation once the block is clicked
    <motion.ul initial="hidden" animate={open ? "show" : "hidden"}>
      {Children.map(children, (child) => (
        <li>
          {/* animate the child after the statement */}
          <motion.div variants={item}>{child}</motion.div>
        </li>
      ))}
    </motion.ul>
  );
}

// what will be returned
export function Overlay() {
  const state = useStore();
  /////////////////////////////////////////////////////
  // followed the tutorial for useState
  const [filmData, setFilmData] = useState(null);
  // fetch the data from the api
  useEffect(() => {
    fetch("https://swapi.dev/api/films/")
      .then((response) => response.json())
      .then((data) => {
        const films = data.results;
        const latestFilm = films[films.length - 1];
        const { title, release_date, opening_crawl } = latestFilm;
        // send the data we gained from the fetch
        setFilmData({
          title,
          releaseDate: release_date,
          openingCrawl: opening_crawl,
        });
      });
  }, []);
  /////////////////////////////////////////////////////

  return (
    <>
      {/* <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script> */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <div
          style={{ position: "absolute", top: 20, left: 25, fontSize: "25px" }}
        >
          <a href="index.html" >Go back</a>
        </div>
        <div
          style={{ position: "absolute", top: 40, left: 100, fontSize: "25px" }}
        >
          Click on the Film
        </div>
      </div>
      <div className="info">
        <List open={state.open}>
          {/* ---------------------------------------------------- */}
          {filmData && (
            <>
              <p>Title: {filmData.title}</p>
              <p>Release Date: {filmData.releaseDate}</p>
              <p>Opening Crawl: {filmData.openingCrawl}</p>
            </>
          )}
          {/* ---------------------------------------------------- */}
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/5UnjrG_N8hU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </List>
      </div>
    </>
  );
}
