import { useState, useRef, useCallback } from "react";
import Clicked from "../components/Clicked";
import PortalPopup from "../components/PortalPopup";
import styles from "./Desktop.module.css";

const Desktop = () => {
  const visualSearchSvgrepoCom1Ref = useRef(null);
  const [isClickedPopupOpen, setClickedPopupOpen] = useState(false);

  const openClickedPopup = useCallback(() => {
    setClickedPopupOpen(true);
  }, []);

  const closeClickedPopup = useCallback(() => {
    setClickedPopupOpen(false);
  }, []);

  return (
    <>
      <div className={styles.desktop1}>
        <div className={styles.desktop1Child} />
        <div className={styles.desktop1Item} />
        <div className={styles.enterDesiredProductContainer}>
          <span className={styles.enterDesiredProductContainer1}>
            <span>Enter desired pro</span>
            <span className={styles.ductDetails}>duct details:</span>
          </span>
        </div>
        <div className={styles.header}>
          <div className={styles.items} />
          <div className={styles.novaa}>Novaa</div>
          <div className={styles.divider} />
        </div>
        <div className={styles.footer}>
          <div className={styles.novaa1}>Novaa</div>
          <div className={styles.socialIcons}>
            <div className={styles.buttonsIcon}>
              <img className={styles.icon} alt="" src="/icon@2x.png" />
            </div>
            <div className={styles.buttonsIcon}>
              <img className={styles.icon} alt="" src="/icon1@2x.png" />
            </div>
            <img
              className={styles.buttonsIcon2}
              alt=""
              src="/buttons--icon@2x.png"
            />
            <img
              className={styles.buttonsIcon2}
              alt=""
              src="/buttons--icon1@2x.png" 
            />
          </div>
          <div className={styles.divider1} />
        </div>
        <img
          className={styles.pexelsJenniferEnujiugha1125Icon}
          alt=""
          src="/pexelsjenniferenujiugha1125328-1@2x.png"
        />
        <div className={styles.searchButtonWrapper}>
          <button className={styles.searchButton}>
            <div className={styles.searchButtonChild} />
            <div className={styles.search}>Search</div>
          </button>
        </div>
        <button className={styles.maleWrapper}>
          <div className={styles.male}>Male</div>
        </button>
        <button className={styles.femaleWrapper}>
          <div className={styles.female}>Female</div>
        </button>
        <button className={styles.trendsWrapper}>
          <div className={styles.trends}>Trends</div>
        </button>
        <div className={styles.photo}>
          <img
            className={styles.pexelsArshamHaghani3536991Icon}
            alt=""
            src="/pexelsarshamhaghani3536991-1@2x.png"
          />
          <div className={styles.photoChild} />
          <img
            className={styles.fe73801efbaa937692ea0f0826b756Icon}
            alt=""
            src="/fe73801efbaa937692ea0f0826b756ba-1@2x.png"
          />
        </div>
        <div className={styles.searchBar}>
          <div className={styles.searchBarChild} />
          <img className={styles.searchIcon} alt="" src="/search.svg" />
          <input className={styles.search1} placeholder="Search" type="text" />
          <div className={styles.visualSearchSvgrepoCom1Wrapper}>
            <button
              className={styles.visualSearchSvgrepoCom1}
              ref={visualSearchSvgrepoCom1Ref}
              onClick={openClickedPopup}
            >
              <img className={styles.vectorIcon} alt="" src="/visual-1.svg" />
              
            </button>
          </div>
        </div>
      </div>
      {isClickedPopupOpen && (
        <PortalPopup
          placement="Top left"
          top={-420}
          left={-300}
          relativeLayerRef={visualSearchSvgrepoCom1Ref}
          onOutsideClick={closeClickedPopup}
        >
          <Clicked onClose={closeClickedPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default Desktop;
