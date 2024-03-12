import AttendingLink from "./AttendingLink";

function Attending(attending){
    return(
        <main className="mainAttending">
            <div className="container">
                <div className="attending">
                    <div className="attending-content">
                        <p className="attending-content-power">Financial Power</p>
                        <h1 className="attending-content__title">Attending to Your <br /> Financial Life</h1>
                        <p className="attending-content__subtitle">
                        Physicians shouldn't have to choose between meaning and money — you <br /> deserve both. Attend gives you the power to easily manage your finances <br /> anytime, anywhere no sacrifice necessary.
                        </p>
                    </div>
                    <div className="attending-banner">
                        <div className="attending-banner__content">
                            <h1 className="attending-banner__content__text">A Financial Solutions Platform that is...</h1>
                            <div className="attending-banner__content__link">
                                <AttendingLink text="Tailored"/>
                                <AttendingLink text="Empowering"/>
                                <AttendingLink text="Convenient"/>
                            </div>
                            <button className="attending-banner__content__button">
                                <p>Learn More</p>
                            </button>
                        </div>
                        <img src="http://localhost:5173/src/img/Attending%20imge/attending%20imge%201.png" alt="attending imge 1.png" />
                    </div>
                </div>
            </div>
        </main>
    )    
}

export default Attending;