import { Line } from "rc-progress";
import styles from "./styles.module.scss";

interface IProgressProps {
  title: string;
  value: number;
  color: string;
}

export default function ProgressBarSkills({
  title,
  value,
  color,
}: IProgressProps) {
  return (
    <div className={styles.containerProgress}>
      <div className={styles.text}>
        <span>
          {title} {value}%{" "}
        </span>
      </div>
      <div className={styles.progress}>
        <Line
          trailWidth={4}
          strokeWidth={4}
          percent={value}
          strokeColor={color}
        />
      </div>
    </div>
  );
}
