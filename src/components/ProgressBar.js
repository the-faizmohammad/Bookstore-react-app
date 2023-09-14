import { CircularProgressbar } from 'react-circular-progressbar';
import '../styles/ProgressBar.css';
import 'react-circular-progressbar/dist/styles.css';

const ProgressBar = () => {
  const value = 0.67;
  return (
    <div className="progress-container">
      <div className="progress-wrap">
        <div className="progressbar">
          <CircularProgressbar value={value} maxValue={1} />
        </div>
        <p className="progress-status">
          {`${value * 100}%`}
          {' '}
          <br />
          <span className="completed-action">Completed</span>
        </p>
      </div>
      <div className="current-chapter">
        <p>CURRENT CHAPTER</p>
        <h3>
          Chapter
          {` ${value}`}
        </h3>
        <button type="button" className="update-progress">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

export default ProgressBar;
