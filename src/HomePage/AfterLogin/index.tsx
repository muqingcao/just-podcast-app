import "./index.css";
import { FaBookmark, FaPlay, FaRegClock, FaSearch, FaShareAlt } from "react-icons/fa";
import { GrHomeRounded } from "react-icons/gr";
import { CgPlayButtonO } from "react-icons/cg";
import { HiOutlineMail } from "react-icons/hi";
import { FaPlus } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
export default function AfterLogin() {
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
                <b>Profile</b>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <b>My PlayList</b>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <b>Browse More</b>
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
            <HiOutlineMail style={{
                    marginRight: "20px",
                    fontSize: "35px",
                  }}/>
            <a className="btn btn-dark me-2" href="#"><b>Logout</b></a>
        </div>
      </nav>
      <div className="trending-episodes mt-4">
        <h6><b>Your shows 🖤</b></h6>
        <div className="row">
          <div className="col-2">
            <div className="episode p-2">
              <img src="images/episode18.jpg" alt="Episode 1" className="episode-image"/>
              <p className="episode-description">Voice Hugs <br/></p>
            </div>
          </div>
          <div className="col-2">
            <div className="episode p-2">
              <img src="images/episode19.jpg" alt="Episode 2" className="episode-image"/>
              <p className="episode-description">Gals On The Go <br/></p>
            </div>
          </div>
          <div className="col-2">
            <div className="episode p-2">
              <img src="images/episode20.jpg" alt="Episode 3" className="episode-image"/>
              <p className="episode-description">Already Friends <br/></p>
            </div>
          </div>
          <div className="col-2">
            <div className="episode p-2">
              <img src="images/episode21.jpg" alt="Episode 4" className="episode-image"/>
              <p className="episode-description">Suburb Talks <br/></p>
            </div>
          </div>
          <div className="col-2">
            <div className="episode p-2">
              <img src="images/episode22.jpg" alt="Episode 5" className="episode-image"/>
              <p className="episode-description">How I Work <br/></p>
            </div>
          </div>
          <div className="col-2">
            <div className="episode p-2">
              <img src="images/episode23.jpg" alt="Episode 6" className="episode-image"/>
              <p className="episode-description">Modern Love <br/></p>
            </div>
          </div>
        </div>
      </div>
      <div className="trending-episodes mt-4">
        <h6><b>You Might Like</b></h6>
        <div className="row">
          <div className="col-2">
            <div className="episode p-2">
              <img src="images/episode1.jpg" alt="Episode 1" className="episode-image"/>
              <p className="episode-description">The Daily <br/>The New York Times</p>
              <button className="btn follow-button">Follow</button>
            </div>
          </div>
          <div className="col-2">
            <div className="episode p-2">
              <img src="images/episode2.jpg" alt="Episode 2" className="episode-image"/>
              <p className="episode-description">The Daily <br/>The New York Times</p>
              <button className="btn follow-button">Follow</button>
            </div>
          </div>
          <div className="col-2">
            <div className="episode p-2">
              <img src="images/episode3.jpg" alt="Episode 3" className="episode-image"/>
              <p className="episode-description">The Daily <br/>The New York Times</p>
              <button className="btn follow-button">Follow</button>
            </div>
          </div>
          <div className="col-2">
            <div className="episode p-2">
              <img src="images/episode4.jpg" alt="Episode 4" className="episode-image"/>
              <p className="episode-description">The Daily <br/>The New York Times</p>
              <button className="btn follow-button">Follow</button>
            </div>
          </div>
          <div className="col-2">
            <div className="episode p-2">
              <img src="images/episode5.jpg" alt="Episode 5" className="episode-image"/>
              <p className="episode-description">The Daily <br/>The New York Times</p>
              <button className="btn follow-button">Follow</button>
            </div>
          </div>
          <div className="col-2">
            <div className="episode p-2">
              <img src="images/episode11.jpg" alt="Episode 6" className="episode-image"/>
              <p className="episode-description">The Daily <br/>The New York Times</p>
              <button className="btn follow-button">Follow</button>
            </div>
          </div>
        </div>
      </div>
      <div className="trending-episodes">
        <h6><b>Popular Now</b></h6>
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
      <h5><b>Continue Listening... 🖤</b></h5><br/>
        <div className="d-flex">
          <img src="images/episode23.jpg" alt="Episode 9" className="episode-detail-image"/>
          <div className="episode-detail-content ms-3">
            <h6><b>Modern Love</b></h6>
            <h5><b>Reflections in 2024</b></h5>
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
                <FaBookmark className="me-3" />
                <FaPlus className="me-3" />
                <CgPlayButtonO className="play-button" />
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex">
          <img src="images/episode18.jpg" alt="Episode 9" className="episode-detail-image"/>
          <div className="episode-detail-content ms-3">
            <h6><b>Voice Hugs</b></h6>
            <h5><b>Spilling relationship tea</b></h5>
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
                <FaBookmark className="me-3" />
                <FaPlus className="me-3" />
                <CgPlayButtonO className="play-button" />
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex">
          <img src="images/episode20.jpg" alt="Episode 9" className="episode-detail-image"/>
          <div className="episode-detail-content ms-3">
            <h6><b>Already Friends</b></h6>
            <h5><b>Making Friends in a New City</b></h5>
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
                <FaBookmark className="me-3" />
                <FaPlus className="me-3" />
                <CgPlayButtonO className="play-button" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
