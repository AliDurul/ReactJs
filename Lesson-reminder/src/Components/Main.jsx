import Card from "./Card"
import html from "../img/html.png"
import CSS from "../img/CSS3.png"
import JS from "../img/JavaScript.png"
import Muai from "../img/Muai.png"
import React from "../img/React.png"
import Bootstrap from "../img/Bootstrap.png"


const cards = [
  {
    id: 1,
    image: html,
    lName: "HTML",
    lHour: "10:00 AM",
  },
  {
    id: 2,
    image: CSS,
    lName: "CSS",
    lHour: "11:15 AM",
  },
  {
    id: 3,
    image: JS,
    lName: "JS",
    lHour: "13:00 PM",
  },
  {
    id: 4,
    image: Muai,
    lName: "Muai",
    lHour: "16:015 PM",
  },
  {
    id: 5,
    image: React,
    lName: "React",
    lHour: "14:15 PM",
  },
  {
    id: 6,
    image: Bootstrap,
    lName: "Bootstrap",
    lHour: "16:15 PM",
  },
];



const Main = () => {
  return (
    <section>
      <h1>Lesson Reminder</h1>
      <div className="cards">
        {cards.map((item) => {
          return <Card cards = {item}/>
        })}
      </div>
    </section>
  )
}

export default Main