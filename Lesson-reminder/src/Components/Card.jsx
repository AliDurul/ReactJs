
const Card = ({ cards: { lHour, image, lName } }) => {

  // const {cards:{lName}} = props
  return (
    <div className="Card">

      <div className="imgDiv">
        <img src={image} alt={lName} />
      </div>
      <div className="textDiv">
        <p><span>Lesson Name:</span>{lName}</p>
        <p><span>Lesson Hour:</span>{lHour} </p>
      </div>

    </div>
  )
}

export default Card

