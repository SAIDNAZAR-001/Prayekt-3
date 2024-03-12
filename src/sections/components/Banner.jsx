function Button(){
    return (
        <button className="banner-button">
            <p className="banner-button-text">Join the Waitlist</p>
        </button>
    )
}

function Banner(){
    return(
        <main className="main">
            <div className="container">
                <div className="banner">
                    <div className="banner-content">
                        <h1 className="banner-content__title">Take <br/> Care <br/>of You</h1>
                        <p className="banner-content__subtitle">
                        Meet the modern finance platform created for physicians, <br/> by physicians. Your path to financial independence is here.
                        </p>
                        <Button/>
                    </div>
                    <div className="banner-imge">
                        <img src="src/img/banner-imge/banner-imge 1.png" alt="banner-imge 1.png" id="banner-imge1"/>
                        <img src="src/img/banner-imge/banner-imge 2.png" alt="banner-imge 2.png" id="banner-imge2"/>
                    </div>
                </div>
            </div>
        </main>
    )    
}

export default Banner;