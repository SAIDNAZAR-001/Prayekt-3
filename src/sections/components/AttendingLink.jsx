function AttendingLink(attending){
    return(
        <div className="attending-link__content">
            <input className="attending-link__content__input" placeholder={attending.text}>
            </input>
            <button className="attending-link__content__button">
                <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    style={{
      fill: "#000",
    }}
  >
    <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z" />
                </svg>
            </button>
        </div>
    )
}

export default AttendingLink