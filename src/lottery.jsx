import { useState } from "react";
import "./lottery.css";
import { genRandomNumber, sumArr } from "./helper.js";

export default function Lottery() {
  let [ticket, setTicket] = useState(genRandomNumber(3));
  let isWining = sumArr(ticket) === 15;
  let buyTicket = () => {
    setTicket(genRandomNumber(3));
  };
  return (
    <div>
      <h1>Lottery Game!</h1>
      <div className="ticket">
        <span>{ticket[0]}</span>
        <span>{ticket[1]}</span>
        <span>{ticket[2]}</span>
      </div>
      <br />
      <button onClick={buyTicket}>Buy Ticket</button>
      <h2>{isWining && "Congratulation, you won!"}</h2>
    </div>
  );
}
