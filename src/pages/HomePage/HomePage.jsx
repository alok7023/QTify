import React, { useEffect } from "react";
import { fetchTopAlbums, fetchNewAlbums, fetchSongs } from "../../api/api.js";
import { useState } from "react";
import styles from "./HomePage.module.css";
import HeroSection from "../../components/HeroSection/HeroSection.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Section from "../../components/Section/Section.jsx";
import Footer from "../../components/Footer/Footer.jsx";
//Accordion Data.(Sending as a props).

function LandingPage() {
  const [topAlbumData, setTopAlbumData] = useState([]);
  const [newAlbumData, setNewAlbumData] = useState([]);
  const [allSongsData, setAllSongsData] = useState([]);
  const [loadingState, setLoadingState] = useState({
    topAlbum: true,
    newAlbum: true,
    allSongs: true,
  });

  const generateTopAlbumData = async () => {
    try {
      const data = await fetchTopAlbums();
      setTopAlbumData(data);
    } catch (error) {
      return null;
    }
  };

  const generateNewAlbumData = async () => {
    try {
      const data = await fetchNewAlbums();
      setNewAlbumData(data);
    } catch (error) {
      return null;
    }
  };
  const generateAllSongsData = async () => {
    try {
      const data = await fetchSongs();
      setAllSongsData(data);
    } catch (error) {
      return null;
    }
  };

  useEffect(() => {
    generateTopAlbumData();
    generateNewAlbumData();
    generateAllSongsData();
  }, []);

  return (
    <>
      <Navbar />
      <HeroSection />
      <div className={styles.sectionWrapper}>
        <Section
          title="Top Albums"
          data={topAlbumData}
          type="album"
          loadingState={loadingState.topAlbum}
        />
        <Section
          title="New Albums"
          data={newAlbumData}
          type="album"
          loadingState={loadingState.newAlbum}
        />
      </div>
      <hr className={styles.line}></hr>
      

      <div className={styles.filter_songs_wrapper}>
        <div>
          <h3 className={styles.tabsTitle}>Songs</h3>
        </div>
        <Section
          title="Songs"
          data={allSongsData}
          type="song"
          loadingState={loadingState.allSongs}
        />
      </div>
      <Footer />
    </>
  );
}

export default LandingPage;
