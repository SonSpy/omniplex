"use client";
import styles from "@/styles/Home.module.css";
import AuthWrapper from "./AuthWrapper";
import MainPrompt from "../components/MainPrompt/MainPrompt";

const Home = () => {
  return (
    <div className={styles.main}>
      <AuthWrapper>
        <MainPrompt />
      </AuthWrapper>
    </div>
  );
};

export default Home;