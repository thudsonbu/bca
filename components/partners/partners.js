import styles from "./partners.module.scss";

const Partners = (props) => {
  const partners = props.partners.map((partner) => {
    return (
      <div
        key={partner.src}
        className={styles[partner.style]}
        style={{
          backgroundImage: "url(" + partner.src + ")",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
    );
  });

  return (
    <div className={styles.container}>
      <div className={styles.content}>{partners}</div>
    </div>
  );
};

export default Partners;
