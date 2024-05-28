import React from 'react';
import { CiPlay1 } from "react-icons/ci";
import './styles.css';

export default function EpisodeDetail() {
    return (
        <div className="container mt-3">
            <div className="row mt-3">
                <div className=" col-xl-3 col-lg-4 d-none d-lg-block ">
                    <img src="images/detailpage/cover.jpeg" alt="Podcast Cover" width="245" height="245" />
                </div>
                <div className="col-xl-9 col-lg-8 col-md-12">
                    <h1 className="podcast-name" style={{ fontSize: '4rem' }}>After Hours</h1>
                    <p className="latest-episode-info">
                        <span className="latest-episode-time fw-bold" style={{ marginRight: '10px' }}>
                            03/26/2024
                        </span>
                        <span className="latest-episode-name fw-bold">
                            Magnificent Markets and Conflict on Campus
                        </span><br />
                        <span className="episode-description">
                            Felix and Mihir discuss the meaning and impact of the increasing concentration of stock market performance via the “Magnificent 7” and the source and resolution of conflicts on campuses.
                        </span>
                        <button className="btn btn-sm btn-light border p-1 m-1" >
                            <CiPlay1 style={{ marginRight: '0.3em' }} />Latest episode
                        </button>
                    </p>
                    <button className="btn btn-primary">Follow</button>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-md-8 col-12">
                    <h3>Episodes</h3>
                    <div className="row">
                        <div className="col-11 mb-2">
                            <span className="episode-time" style={{ fontSize: "12px" }}>
                                03/26/2024
                            </span><br />
                            <span className="latest-episode-name fw-bold">
                                The Best Of Recommendations
                            </span><br />
                            <span className="episode-description">
                                Revisit some of Felix and Mihir's recommendations.
                            </span>
                        </div>
                        <div className="col-1 mt-3">
                            <button className="btn border" style={{ width: '30px', height: '30px', borderRadius: '50%', display: 'flex', padding: '0', justifyContent: 'center', alignItems: 'center' }}>
                                <CiPlay1 />
                            </button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-11 mb-2">
                            <span className="episode-time" style={{ fontSize: "12px" }}>
                                03/20/2024
                            </span><br />
                            <span className="latest-episode-name fw-bold">
                                The Best Of After Hours - TikTok & Sports
                            </span><br />
                            <span className="episode-description">
                                Revisit Felix and Mihir's discussion about TikTok bans and why sports have become so valuable.
                            </span>
                        </div>
                        <div className="col-1 mt-4">
                            <button className="btn border" style={{ width: '30px', height: '30px', borderRadius: '50%', display: 'flex', padding: '0', justifyContent: 'center', alignItems: 'center' }}>
                                <CiPlay1 />
                            </button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-11 mb-2">
                            <span className="episode-time" style={{ fontSize: "12px" }}>
                                03/12/2023
                            </span><br />
                            <span className="latest-episode-name fw-bold">
                                ICYMI: Who Is Afraid of Woke Capitalism?
                            </span><br />
                            <span className="episode-description">
                                Mihir, Felix and NYU's Dolly Chugh discuss the pressure on business leaders to conform to the demands of woke capitalism. Should you give in? Push back? What are the risks and rewards? Also: Feeling low lately? Chances are you are just getting older. We speculate why most people go through some sort of midlife crisis and talk about ways to better cope with life's seemingly inevitable ups and downs. (Originally aired Nov. 2, 2022)
                            </span>
                        </div>
                        <div className="col-1 mt-4">
                            <button className="btn border" style={{ width: '30px', height: '30px', borderRadius: '50%', display: 'flex', padding: '0', justifyContent: 'center', alignItems: 'center' }}>
                                <CiPlay1 />
                            </button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-11 mb-2">
                            <span className="episode-time" style={{ fontSize: "12px" }}>
                                03/05/2024
                            </span><br />
                            <span className="latest-episode-name fw-bold">
                                ICYMI: The Promise and Peril of Al
                            </span><br />
                            <span className="episode-description">
                                In case you missed it: In this episode, Felix, Sarah and Mihir discuss Chat GPT, if Al is truly transformational, the future of search, and how to digitally detox from all this Al talk. (Originally aired March 1, 2023).
                            </span>
                        </div>
                        <div className="col-1 mt-3">
                            <button className="btn border" style={{ width: '30px', height: '30px', borderRadius: '50%', display: 'flex', padding: '0', justifyContent: 'center', alignItems: 'center' }}>
                                <CiPlay1 />
                            </button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-11 mb-2">
                            <span className="episode-time" style={{ fontSize: "12px" }}>
                                12/26/2023
                            </span><br />
                            <span className="latest-episode-name fw-bold">
                                Our Predictions for 2024
                            </span><br />
                            <span className="episode-description">
                                What's in store for 2024? Mihir and Felix are back with their celebrated predictions episode. Will OPEC implode? Are quant funds in trouble? What's Argentina's future? Can inflation in the U.S. really sink to 2%? Is plastic the new asbestos? Who will acquire Electronic Arts? Is AIML a verb? Listen in as the hosts (foolishly) predict what the new year will bring.
                            </span>
                        </div>
                        <div className="col-1 mt-4">
                            <button className="btn border" style={{ width: '30px', height: '30px', borderRadius: '50%', display: 'flex', padding: '0', justifyContent: 'center', alignItems: 'center' }}>
                                <CiPlay1 />
                            </button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-11 mb-2">
                            <span className="episode-time" style={{ fontSize: "12px" }}>
                                12/12/2023
                            </span><br />
                            <span className="latest-episode-name fw-bold">
                                Appreciating Late Bloomers and a Big Bank
                            </span><br />
                            <span className="episode-description">
                                Felix and Mihir discuss how JPMorgan has managed to succeed where others fail and how late bloomers manage to succeed after sometimes failing.
                            </span>
                        </div>
                        <div className="col-1 mt-4">
                            <button className="btn border" style={{ width: '30px', height: '30px', borderRadius: '50%', display: 'flex', padding: '0', justifyContent: 'center', alignItems: 'center' }}>
                                <CiPlay1 />
                            </button>
                        </div>
                    </div>



                    <div>
                        <button className="btn btn-sm border">See all episodes</button>
                    </div>

                </div>

                <div className="col-4 d-none d-md-block">
                    <span className="latest-episode-name fw-bold">
                        About
                    </span><br />
                    <span className="about-description">
                        Harvard Business School professors discuss and debate current events that sit at the crossroads of business and culture. Youngme Moon, Mihir Desai, and Felix Oberholzer-Gee engage in a spirited discussion on a range of topics torn from the headlines - from Facebook, to free trade, to the #MeToo movement. Informed by their unique expertise as professors at one of the world's leading business schools, their takes are always surprising, unconventional, and insightful.
                    </span><br />
                    <label className="podcast-rating border rounded-3 p-1">Rating: ★★★★☆</label>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col">
                    <h3>Hosts & guests</h3>
                </div>
                <div className="col text-end">
                    <button className="btn" style={{ fontSize: '14px' }}>See All</button>
                </div>
            </div>

            <div className="row mb-4">
                <div className="col-3 card rounded-3 overflow-hidden" style={{ border: 'none' }}>
                    <img src="images/searchpage/pdcst1.jpeg" style={{ width: '100%', borderRadius: '50%' }} />
                    <div className="card-body d-flex align-items-center justify-content-center" style={{ padding: '0px' }}>
                        <p className="card-text" style={{ fontSize: '10px' }}>
                            Jeffery Lee
                        </p>
                    </div>
                </div>

                <div className="col-3 card rounded-3 overflow-hidden" style={{ border: 'none' }}>
                    <img src="images/searchpage/pdcst2.jpeg" style={{ width: '100%', borderRadius: '50%' }} />
                    <div className="card-body d-flex align-items-center justify-content-center" style={{ padding: '0px' }}>
                        <p className="card-text" style={{ fontSize: '10px' }}>
                            Jenny Miller
                        </p>
                    </div>
                </div>

                <div className="col-3 card rounded-3 overflow-hidden" style={{ border: 'none' }}>
                    <img src="images/searchpage/pdcst3.jpeg" style={{ width: '100%', borderRadius: '50%' }} />
                    <div className="card-body d-flex align-items-center justify-content-center" style={{ padding: '0px' }}>
                        <p className="card-text" style={{ fontSize: '10px' }}>
                            Abcd Efg
                        </p>
                    </div>
                </div>

                <div className="col-3 card rounded-3 overflow-hidden" style={{ border: 'none' }}>
                    <img src="images/searchpage/pdcst4.jpeg" style={{ width: '100%', borderRadius: '50%' }} />
                    <div className="card-body d-flex align-items-center justify-content-center" style={{ padding: '0px' }}>
                        <p className="card-text" style={{ fontSize: '10px' }}>
                            Jklm Opq
                        </p>
                    </div>
                </div>
            </div>

            <div className="row mb-2">
                <div className="col">
                    <h3>You might also like</h3>
                </div>
                <div className="col text-end">
                    <button className="btn" style={{ fontSize: '14px' }}>See More</button>
                </div>
            </div>

            <div className="row mb-4">
                <div className="col-3 card rounded-3 overflow-hidden" style={{ border: 'none' }}>
                    <img src="images/searchpage/ex1.png" />
                    <div className="card-body" style={{ padding: '0px' }}>
                        <p className="card-text" style={{ fontSize: '10px' }}>
                            Masters in Business
                        </p>
                    </div>
                </div>
                <div className="col-3 card rounded-3 overflow-hidden" style={{ border: 'none' }}>
                    <img src="images/searchpage/ex5.png" />
                    <div className="card-body" style={{ padding: '0px' }}>
                        <p className="card-text" style={{ fontSize: '10px' }}>
                            The Investing for Beginners Podcast - Your Path to Financial Freedom
                        </p>
                    </div>
                </div>
                <div className="col-3 card rounded-3 overflow-hidden" style={{ border: 'none' }}>
                    <img src="images/searchpage/ex2.png" />
                    <div className="card-body" style={{ padding: '0px' }}>
                        <p className="card-text" style={{ fontSize: '10px' }}>
                            Behind the Money
                        </p>
                    </div>
                </div>
                <div className="col-3 card rounded-3 overflow-hidden" style={{ border: 'none' }}>
                    <img src="images/searchpage/ex3.png" />
                    <div className="card-body" style={{ padding: '0px' }}>
                        <p className="card-text" style={{ fontSize: '10px' }}>
                            We Study Billionaires - The Investor's Podcast Network
                        </p>
                    </div>
                </div>
            </div>
        </div >
    );
}

