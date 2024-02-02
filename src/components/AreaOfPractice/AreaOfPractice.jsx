import React from "react";
import styles from "./AreaOfPractice.module.css";
import ImageCard from "../ImageCard/ImageCard";
import ImageCard2 from "../ImageCard2/ImageCard2";

import img1 from "../../assets/Rectangle 3651.png";
import img2 from "../../assets/Rectangle 3652.png";
import img3 from "../../assets/Rectangle 3653.png";
import img4 from "../../assets/Rectangle 3654.png";
import img5 from "../../assets/Rectangle 3655.png";
import img6 from "../../assets/Rectangle 3656.png";

const AreaOfPractice = () => {
  return <div className={styles.wrapper}>
    <h1>Area of Practices</h1>
    {/* =========== grid or flex of cards =============  */}
    {/* =========== choose library or do from pure css as per choice  =========== */}

    <div className={styles.cardWrapper}>
      <ImageCard image1={img2} title1={'BUSINESS LAW'} image2={img1} title2={'PARTNERSHIP LAW'}/>
      <ImageCard2 image1={img3} title1={'REAL ESTATE LAW'} image2={img4} title2={'BUSINESS LAW'}/>
      <ImageCard image1={img6} title1={'LANDLORD DISPUTES'} image2={img5} title2={'ELDER ABUSE'}/>
    </div>
  </div>;
};

export default AreaOfPractice;
