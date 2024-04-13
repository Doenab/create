import styles from "./Clicked.module.css";

const Clicked = ({ onClose }) => {
  return (
    <div className={styles.clicked}>
      <div className={styles.clickedChild} />
      <div className={styles.searchAnyImage}>Search any image</div>
      <div className={styles.clickedItem} />
      <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      <div className={styles.divider} />
      <div className={styles.clickedInner} />
      <input
        className={styles.pasteImageLink}
        placeholder="Paste image link here"
        type="text"
      />
      <div className={styles.searchInside}>
        <button className={styles.searchInsideChild} />
        <b className={styles.search}>Search</b>
      </div>
      <input className={styles.frameInput} type="file" />
    </div>
  );
};

export default Clicked;
