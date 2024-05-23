import React from 'react';
import { CiPlay1 } from "react-icons/ci";

export default function EpisodeDetail() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <div className="container mt-4" style={{ flex: '10%', display: 'flex' }}>
                <div className="podcast-cover" style={{ flex: 1 }}>
                    <img src="images/detailpage/cover.jpeg" alt="Podcast Cover" className="img-fluid" width="300" height="300" />
                </div>
                <div className="ms-3" style={{ flex: 2, alignItems: 'flex-end' }}>
                    <h1 className="podcast-name" style={{ fontSize: '4rem' }}>After Hours</h1>
                    <p className="podcast-rating">Rating: ★★★★☆</p>
                    <p className="latest-episode-info">
                        <span className="latest-episode-name fw-bold">
                            Mar 26: Magnificent Markets and Conflict on Campus
                        </span><br />
                        <span>
                            Felix and Mihir discuss the meaning and impact of the increasing concentration of stock market performance via the “Magnificent 7” and the source and resolution of conflicts on campuses.
                            <button className="btn btn-sm btn-light border p-1 m-1" >
                                <CiPlay1 style={{ marginRight: '0.3em' }} />Latest episode
                            </button>
                        </span>
                    </p>
                    <button className="btn btn-primary">Follow</button>
                </div>
            </div>


        </div>
    );
}