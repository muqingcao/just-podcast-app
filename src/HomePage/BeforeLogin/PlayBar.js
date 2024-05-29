import './PlayBar.css';
import { Fapause,FaBackwardStep, FaForwardStep, FaRegCirclePlay } from "react-icons/fa6";
import { LiaUndoAltSolid } from "react-icons/lia";
import { LiaRedoAltSolid } from "react-icons/lia";
import { MdOutlinePlayCircle } from "react-icons/md";
import { MdOutlinePauseCircleOutline } from "react-icons/md";
const PlayBar = () => {
  return (
    <div className="play-bar">
      <div className="play-bar-center">
        <span className="play-bar-speed">1x</span>
        <button className="play-bar-button"><LiaUndoAltSolid/><span className="skip-time">15</span></button>
        <button className="play-bar-button"><FaBackwardStep /></button>
        <button className="play-bar-button play-pause"><MdOutlinePauseCircleOutline  /></button>
        <button className="play-bar-button"><FaForwardStep /></button>
        <button className="play-bar-button"><LiaRedoAltSolid /><span className="skip-time">15</span></button>
      </div>
      <div className="play-bar-center">
        <div className="play-bar-timeline">
          <span className="play-bar-time">0:00</span>
          <div className="timeline">
          <div className="progress"></div>
        </div>
          <span className="play-bar-time">39:49</span>
        </div>
      </div>
    </div>

  );
}

export default PlayBar;
