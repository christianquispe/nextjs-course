import styles from "./DarkLayout.module.css";

export const DarkLayout: React.FC<WithChild> = ({ children }) => {
  return (
    <div className={styles["container--dark"]}>
      <h1>Dark mode</h1>
      {children}
    </div>
  );
};
