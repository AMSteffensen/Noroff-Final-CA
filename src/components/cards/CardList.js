import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../constants/API";

export default function CardList() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
      fetch(BASE_URL)
        .then(response => response.json())
        .then(json => setCards(json))
        .catch(error => console.log(error));
    }, []);
  
    return (
        <ul>
            {/* {cards.map(c => (
                <li key={c.id}>{c.name}</li>
            ))} */}
        </ul>
    )
}