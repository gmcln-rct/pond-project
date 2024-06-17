import styles from "./info.module.scss";

export default function InfoUnitList(props) {
  const { infoUnitListData } = props;
  return (
    <ul className={styles.infounit__servicelist}>
      {infoUnitListData.map((service, index) => (
        <li key={index}>{service}</li>
      ))}
    </ul>
  );
}