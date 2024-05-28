import { CiPlay1 } from "react-icons/ci";

export default function EpisodeDetail() {
    return (
        <div className="container mt-3">
            <div className="mt-3" >
                <div className="row mt-3">
                    <div className="col-md-4 col-lg-3 col-xl-2 d-none d-md-block ">
                        <img src="images/detailpage/cover.jpeg" alt="Podcast Cover" width="180" height="180" />
                    </div>
                    <div className="col-md-8 col-lg-9 col-xl-10 col-sm-12">
                        <span className="latest-episode-time fw-bold" style={{ marginRight: '10px' }}>
                            03/26/2024
                        </span>
                        <h2 className="episode-name fw-bold">
                            Magnificent Markets and Conflict on Campus
                        </h2>
                        <p className="show-name">
                            After Hours
                        </p>
                        <button className="btn btn-sm btn-light border" >
                            <CiPlay1 style={{ marginRight: '0.3em' }} />Play
                        </button>
                        <button className="btn btn-sm btn-light border" >
                            Collect
                        </button>
                    </div>
                </div>
            </div>

            <div className="mt-3" >
                <h4 className="latest-episode-name fw-bold">
                    Episode notes
                </h4>
                <span className="episode-notes">
                    Mihir, Felix and NYU’s Dolly Chugh discuss the pressure on business leaders to conform to the demands of woke capitalism. Should you give in? Push back? What are the risks and rewards? Also: Feeling low lately? Chances are you are just getting older. We speculate why most people go through some sort of midlife crisis and talk about ways to better cope with life’s seemingly inevitable ups and downs. (Originally aired Nov. 2, 2022)
                </span>
                <h4 className="mt-3 fw-bold">Rate this podcast: ☆☆☆☆☆</h4>
            </div>

            <div className="mt-4">
                <h3 className="mb-3">
                    Comments
                </h3>

                <form className="mb-3">
                    <div className="row mb-1">
                        <div className="col-sm-2 col-lg-1 d-none d-sm-block mb-3">
                            <img src="images/searchpage/pdcst1.jpeg" width="75" height="75" style={{ borderRadius: '50%' }} />
                        </div>
                        <div className="col-sm-10 col-lg-11 col-12">
                            <textarea
                                className="form-control mb-1"
                                contentEditable={true}
                                placeholder="What do you think of this episode?"
                                rows={2}
                            ></textarea>
                            <div className="col text-end">
                                <button type="submit" className="btn btn-sm border">
                                    cancel
                                </button>
                                <button type="submit" className="btn btn-sm border">
                                    submit
                                </button>
                            </div>
                        </div>
                    </div>
                </form>

                <div className="row">
                    <div className="col-sm-2 col-lg-1 d-none d-sm-block mb-3">
                        <img src="images/searchpage/user1.jpeg" width="75" height="75" style={{ borderRadius: '50%' }} />
                    </div>
                    <div className="col-sm-10 col-lg-11 col-12">
                        <span style={{ color: '#808080' }}>
                            dkjf gdsfsa
                        </span><br />
                        <span style={{ color: '#A9A9A9', fontSize: "11px" }}>
                            May 20 2024
                        </span><br />
                        <span>
                            Great podcast! Really enjoyed the insightful discussions.
                        </span>
                        <br /><br />
                    </div>

                    <div className="col-sm-2 col-lg-1 d-none d-sm-block mb-3">
                        <img src="images/searchpage/user2.jpeg" width="75" height="75" style={{ borderRadius: '50%' }} />
                    </div>
                    <div className="col-sm-10 col-lg-11 col-12">
                        <span style={{ color: '#808080' }}>
                            Abcd Efg
                        </span><br />
                        <span style={{ color: '#A9A9A9', fontSize: "11px" }}>
                            May 09 2024
                        </span><br />
                        <span>
                            Great podcast! Really enjoyed the insightful discussions. I found the guests' perspectives very enlightening. Keep up the good work! The hosts have a great chemistry. Always a pleasure to listen to their banter.
                        </span>
                        <br /><br />
                    </div>

                    <div className="col-sm-2 col-lg-1 d-none d-sm-block mb-3">
                        <img src="images/searchpage/user3.jpeg" width="75" height="75" style={{ borderRadius: '50%' }} />
                    </div>
                    <div className="col-sm-10 col-lg-11 col-12">
                        <span style={{ color: '#808080' }}>
                            deasjk hsak
                        </span><br />
                        <span style={{ color: '#A9A9A9', fontSize: "11px" }}>
                            April 26 2024
                        </span><br />
                        <span>
                            Interesting topics covered in this episode. Can't wait for the next one! This episode was very informative. Looking forward to more content like this.
                        </span>
                        <br /><br />
                    </div>

                    <div className="col-sm-2 col-lg-1 d-none d-sm-block mb-3">
                        <img src="images/searchpage/user4.jpeg" width="75" height="75" style={{ borderRadius: '50%' }} />
                    </div>
                    <div className="col-sm-10 col-lg-11 col-12">
                        <span style={{ color: '#808080' }}>
                            dsqgahj gsjha
                        </span><br />
                        <span style={{ color: '#A9A9A9', fontSize: "11px" }}>
                            April 26 2024
                        </span><br />
                        <span>
                            Interesting topics covered in this episode. Looking forward to more content like this.
                        </span>
                        <br />
                    </div>
                </div>

                <div className="col text-end mt-1 mb-4">
                    <button className="btn btn-sm border">See all comments</button>
                </div>
            </div>


            <div className="row mb-2">
                <div className="col">
                    <h3>More episodes like this</h3>
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

