import { CiPlay1, CiSearch } from "react-icons/ci";

export default function SearchResults() {
    return (
        <div className="container mt-4">
            <div className="row justify-content-center mb-4">
                <div className="input-group" style={{ width: '60%' }}>
                    <span className="input-group-text" style={{ backgroundColor: 'transparent' }}>
                        <CiSearch />
                    </span>
                    <input id="wd-search-assignment"
                        className="form-control"
                        placeholder="Find your next favorite..." />
                </div>
            </div>
            <div>
                <p>
                    Showing results for "finance":
                </p>
            </div>
            <div className="mb-4">
                <div className="row mb-2">
                    <div className="col">
                        <h3>Shows</h3>
                    </div>
                    <div className="col text-end">
                        <button className="btn" style={{ fontSize: '14px' }}>See All</button>
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

                <div className="row mb-4">
                    <div className="col">
                        <h3>Episodes</h3>
                    </div>
                    <div className="col text-end">
                        <button className="btn" style={{ fontSize: '14px' }}>See All</button>
                    </div>


                    <div className="row">
                        <div className="col-sm-2 col-lg-1 d-none d-sm-block mb-3">
                            <img src="images/searchpage/ex1.png" width="75" height="75" />
                        </div>
                        <div className="col-sm-9 col-lg-10 col-11">
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
                        <div className="col-sm-2 col-lg-1 d-none d-sm-block mb-3">
                            <img src="images/searchpage/ex2.png" width="75" height="75" />
                        </div>
                        <div className="col-sm-9 col-lg-10 col-11">
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
                        <div className="col-sm-2 col-lg-1 d-none d-sm-block mb-3">
                            <img src="images/searchpage/ex3.png" width="75" height="75" />
                        </div>
                        <div className="col-sm-9 col-lg-10 col-11">
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
                        <div className="col-sm-2 col-lg-1 d-none d-sm-block mb-3">
                            <img src="images/searchpage/ex4.png" width="75" height="75" />
                        </div>
                        <div className="col-sm-9 col-lg-10 col-11">
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
                        <div className="col-sm-2 col-lg-1 d-none d-sm-block mb-3">
                            <img src="images/searchpage/ex1.png" width="75" height="75" />
                        </div>
                        <div className="col-sm-9 col-lg-10 col-11">
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
                        <div className="col-sm-2 col-lg-1 d-none d-sm-block mb-3">
                            <img src="images/searchpage/ex1.png" width="75" height="75" />
                        </div>
                        <div className="col-sm-9 col-lg-10 col-11">
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
                </div>


                <div className="row mb-2">
                    <div className="col">
                        <h3>Podcasters</h3>
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
                        <h3>Users</h3>
                    </div>
                    <div className="col text-end">
                        <button className="btn" style={{ fontSize: '14px' }}>See All</button>
                    </div>
                </div>

                <div className="row mb-4">
                    <div className="col-3 card rounded-3 overflow-hidden" style={{ border: 'none' }}>
                        <img src="images/searchpage/user1.jpeg" style={{ width: '100%', borderRadius: '50%' }} />
                        <div className="card-body d-flex align-items-center justify-content-center" style={{ padding: '0px' }}>
                            <p className="card-text" style={{ fontSize: '10px' }}>
                                Jeffery Lee
                            </p>
                        </div>
                    </div>

                    <div className="col-3 card rounded-3 overflow-hidden" style={{ border: 'none' }}>
                        <img src="images/searchpage/user2.jpeg" style={{ width: '100%', borderRadius: '50%' }} />
                        <div className="card-body d-flex align-items-center justify-content-center" style={{ padding: '0px' }}>
                            <p className="card-text" style={{ fontSize: '10px' }}>
                                Jenny Miller
                            </p>
                        </div>
                    </div>

                    <div className="col-3 card rounded-3 overflow-hidden" style={{ border: 'none' }}>
                        <img src="images/searchpage/user3.jpeg" style={{ width: '100%', borderRadius: '50%' }} />
                        <div className="card-body d-flex align-items-center justify-content-center" style={{ padding: '0px' }}>
                            <p className="card-text" style={{ fontSize: '10px' }}>
                                Abcd Efg
                            </p>
                        </div>
                    </div>

                    <div className="col-3 card rounded-3 overflow-hidden" style={{ border: 'none' }}>
                        <img src="images/searchpage/user4.jpeg" style={{ width: '100%', borderRadius: '50%' }} />
                        <div className="card-body d-flex align-items-center justify-content-center" style={{ padding: '0px' }}>
                            <p className="card-text" style={{ fontSize: '10px' }}>
                                Jklm Opq
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}