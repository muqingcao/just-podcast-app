import "./index.css";
import { FaBackward, FaBookmark, FaForward, FaPause, FaPlay, FaRedoAlt, FaRegClock, FaSearch, FaShareAlt, FaUndoAlt } from "react-icons/fa";
import { GrHomeRounded } from "react-icons/gr";
import { CgPlayButtonO } from "react-icons/cg";
import "bootstrap/dist/css/bootstrap.min.css";
import PlayBar from "./PlayBar";
export default function BeforeLogin() {
  return (
    <div className="container-md">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid d-flex justify-content-start">
          <img
            src="images/logo1.jpg"
            alt="Just Podcast Logo"
            className="small-icon"
          />
          <ul className="nav ms-3">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                <GrHomeRounded
                  style={{
                    marginRight: "8px",
                    fontSize: "24px",
                    fontWeight: "bold",
                  }}
                />{" "}
                <b>Home</b>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <b>Podcasts</b>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <b>Episodes</b>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/ByCategory">
                <b>By Categories 🖤</b>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/AfterLogin">
                <b>🤍</b>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <FaSearch
                  style={{
                    marginRight: "8px",
                    fontSize: "24px",
                    fontWeight: "bold",
                  }}
                />{" "}
                <b>Search</b>
              </a>
            </li>
          </ul>
        </div>
        <div className="d-flex align-items-center">
            <a className="btn btn-signup me-2" href="#"><b>Sign up</b></a>
            <a className="btn btn-dark me-2" href="#"><b>Login</b></a>
        </div>
      </nav>
      <div className="trending-episodes mt-4">
        <h5><b>Trending Podcasts</b></h5>
        <div className="row">
          <div className="col-2">
            <div className="episode p-2">
              <img src="images/episode1.jpg" alt="Episode 1" className="episode-image"/>
              <p className="episode-description">The Daily <br/>The New York Times</p>
            </div>
          </div>
          <div className="col-2">
            <div className="episode p-2">
              <img src="images/episode2.jpg" alt="Episode 2" className="episode-image"/>
              <p className="episode-description">The Daily <br/>The New York Times</p>
            </div>
          </div>
          <div className="col-2">
            <div className="episode p-2">
              <img src="images/episode3.jpg" alt="Episode 3" className="episode-image"/>
              <p className="episode-description">The Daily <br/>The New York Times</p>
            </div>
          </div>
          <div className="col-2">
            <div className="episode p-2">
              <img src="images/episode4.jpg" alt="Episode 4" className="episode-image"/>
              <p className="episode-description">The Daily <br/>The New York Times</p>
            </div>
          </div>
          <div className="col-2">
            <div className="episode p-2">
              <img src="images/episode5.jpg" alt="Episode 5" className="episode-image"/>
              <p className="episode-description">The Daily <br/>The New York Times</p>
            </div>
          </div>
          <div className="col-2">
            <div className="episode p-2">
              <img src="images/episode11.jpg" alt="Episode 6" className="episode-image"/>
              <p className="episode-description">The Daily <br/>The New York Times</p>
            </div>
          </div>
        </div>
      </div>
      <div className="trending-episodes">
        <h5><b>Trending Episodes</b></h5>
        <div className="row">
          <div className="col-2">
            <div className="episode p-2">
              <img src="images/episode12.jpg" alt="Episode 1" className="episode-image"/>
              <p className="episode-description">Ep. 109: We Need To Talk About These Ancient Creatures For A Minute</p>
            </div>
          </div>
          <div className="col-2">
            <div className="episode p-2">
              <img src="images/episode13.jpg" alt="Episode 2" className="episode-image"/>
              <p className="episode-description">Ep. 109: We Need To Talk About These Ancient Creatures For A Minute</p>
            </div>
          </div>
          <div className="col-2">
            <div className="episode p-2">
              <img src="images/episode14.jpg" alt="Episode 3" className="episode-image"/>
              <p className="episode-description">Ep. 109: We Need To Talk About These Ancient Creatures For A Minute</p>
            </div>
          </div>
          <div className="col-2">
            <div className="episode p-2">
              <img src="images/episode15.jpg" alt="Episode 4" className="episode-image"/>
              <p className="episode-description">Ep. 109: We Need To Talk About These Ancient Creatures For A Minute</p>
            </div>
          </div>
          <div className="col-2">
            <div className="episode p-2">
              <img src="images/episode17.jpg" alt="Episode 5" className="episode-image"/>
              <p className="episode-description">Ep. 109: We Need To Talk About These Ancient Creatures For A Minute</p>
            </div>
          </div>
          <div className="col-2">
            <div className="episode p-2">
              <img src="images/episode16.jpg" alt="Episode 6" className="episode-image"/>
              <p className="episode-description">Ep. 109: We Need To Talk About These Ancient Creatures For A Minute</p>
            </div>
          </div>
        </div>
      </div>
      <div className="episode-detail mt-3">
      <h5><b>Episodes that You Won't Want to miss 🖤</b></h5><br/>
        <div className="d-flex">
          <img src="images/episode9.jpg" alt="Episode 9" className="episode-detail-image"/>
          <div className="episode-detail-content ms-3">
            <h6><b>3 Spooked Girls</b></h6>
            <h5><b>May's Listener Encounters 2024</b></h5>
            <div className="d-flex align-items-center">
              <span>15 hours ago</span>
              <FaRegClock className="mx-2" />
              <span>18m 37s</span>
            </div>
            <p className="mt-2">
              Hey Spooksters! It's the last Monday of the month so we are back with another episode of YOUR true paranormal stories!
              Check out the following link for our socials, Patreon, & more https://linktr.ee/3spookedgirls
              Have a personal true crime story or paranormal encounter you'...
            </p>
            <div className="d-flex align-items-center mt-3">
              <div className="ms-auto d-flex align-items-center">
                <FaShareAlt className="me-3" />
                <CgPlayButtonO className="play-button" />
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex">
          <img src="images/episode11.jpg" alt="Episode 9" className="episode-detail-image"/>
          <div className="episode-detail-content ms-3">
            <h6><b>Wellness with Ella</b></h6>
            <h5><b>Caffeine, the untapped potential of plants and intermittent fasting with Michael Pollan</b></h5>
            <div className="d-flex align-items-center">
              <span>4/22/24</span>
              <FaRegClock className="mx-2" />
              <span>42m 57s</span>
            </div>
            <p className="mt-2">
            In Wellness with Ella, entrepreneur Ella Mills and her guests candidly reveal their personal journeys of transforming times of great difficulty into times of enormous personal growth...
            </p>
            <div className="d-flex align-items-center mt-3">
              <div className="ms-auto d-flex align-items-center">
                <FaShareAlt className="me-3" />
                <CgPlayButtonO className="play-button" />
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex">
          <img src="images/episode10.jpg" alt="Episode 9" className="episode-detail-image"/>
          <div className="episode-detail-content ms-3">
            <h6><b>The Imperfects</b></h6>
            <h5><b>Dr Emily - Who Do You Desire?</b></h5>
            <div className="d-flex align-items-center">
              <span>5/23/24</span>
              <FaRegClock className="mx-2" />
              <span>59m 12s</span>
            </div>
            <p className="mt-2">
            We know, we know. 'Who Do You Desire?' is a very click-baity title. But we’re pretty confident that if you DO take the bait (come onnnn), you'll be nicely rewarded....
            </p>
            <div className="d-flex align-items-center mt-3">
              <div className="ms-auto d-flex align-items-center">
                <FaShareAlt className="me-3" />
                <CgPlayButtonO className="play-button" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <PlayBar/>
    </div>
  );
}
