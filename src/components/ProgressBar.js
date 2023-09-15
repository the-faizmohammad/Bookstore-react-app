import { CircularProgressbar } from 'react-circular-progressbar';
import '../styles/ProgressBar.css';
import 'react-circular-progressbar/dist/styles.css';

const ProgressBar = () => {
  const value = 0.67;
  return (
    <div className="progress-container">
      <div className="circular-progress-container">
        <div className="circular-progress">
          <CircularProgressbar value={value} maxValue={1} />
        </div>
      </div>
      <div className="progress-stat">
        <p className="percent-complete">{`${value * 100}%`}</p>
        <p className="completed">Completed</p>
      </div>

      <div className="progress-divider" />
      <div className="current-chapter-container">
        <p className="current-chapter-label">CURRENT CHAPTER</p>
        <p className="current-chapter">
          Chapter 17
        </p>
        <button type="button" className="primary-button">
          UPDATE PROGRESS
        </button>
      </div>
    </div>
  );
};

export default ProgressBar;
