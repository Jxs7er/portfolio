import styles from "./Promotion.module.css";

const PromotionSection = () => {
  return (
    <div className={styles.container}>
      <div>
        {/* TEXT */}
        <div className={styles.text_container}>
          <h4>
            Start <span>streaming</span> games differently
          </h4>

          <p>
            Gamor now has a real-time stream party platform for gamers who want
            to play, watch and connect instantly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PromotionSection;
