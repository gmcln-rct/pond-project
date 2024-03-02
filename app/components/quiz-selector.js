import styles from "./verb-selector.module.scss";

export default function QuizSelector(props) {
  const { verbTense, setVerbTense} = props;

  const handleChange = (event) => {
    const newVerbTense = event.target.value;
    setVerbTense(newVerbTense);
  };

  return (
    <div className={styles.selectContainer}>
      <label className={styles.formLabel} htmlFor="verb">
        Which verb tense do you want to practice?
      </label>
      <select
        className={styles.selectDropdown}
        name="verb"
        id="verb"
        onChange={handleChange}
      >
        <option value="past">Past</option>
        <option value="present">Present</option>
        <option value="future">Future</option>
      </select>
    </div>
  );
}
