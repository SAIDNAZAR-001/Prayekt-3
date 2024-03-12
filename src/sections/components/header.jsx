function Button(){
    return (
        <button className="header-button">
            <p className="header-button-text">Join the Waitlist</p>
        </button>
    )
}

function Header(){
    return (
    <header className="header">
        <div className="container">
            <div className="header-row">
                <div className="header-link">
                    <a href="#">Solutions</a>
                    <a href="#">Learn</a>
                    <a href="#">Our Mission</a>
                </div>
                <Button/>
            </div>
        </div>
    </header>)
}

export default Header;