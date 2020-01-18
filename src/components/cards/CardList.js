import React, {useState, useEffect} from "react";
import fetchMock from "fetch-mock";
import {BASE_URL} from "../../constants/API";
import mockCards from "../../constants/cards";
import "./CardList.scss";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardItem from "./CardItem";
import Search from "./Search"

export default function CardList() {
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);

  // useEffect(() => {
  //   fetchMock.mock(BASE_URL, {cards: mockCards});

  //   fetch(BASE_URL)
  //     .then(response => response.json())
  //     .then(json => {
  //       setCards(json.cards));
  //       setFilteredCards(json.cards);
  //     })
  //     .catch(error => console.log(error));
  // }, []);

    useEffect(() => {
    fetch(BASE_URL)
      .then(response => response.json())
      .then(json => {
        setCards(json.cards);
        setFilteredCards(json.cards);
      })
      .catch(error => console.error(error));
  }, []);


  const filterCards = function(e) {
   const searchValue = e.target.value.toLowerCase();

    const filteredArray = cards.filter(function(card) {
      const lowerCaseName = card.name.toLowerCase();

      if (lowerCaseName.startsWith(searchValue)) {
        return true;
      }
      return false;
    });

    setFilteredCards(filteredArray);
  };


  return (
    <>
      <Search handleSearch={filterCards} />
      <Row>
        {filteredCards.map(card => {
          const {id, name, imageUrl} = card;

          return (
            <>     
              <Col sm={6} md={3} key={id}>
                <CardItem
                  className='card-title'
                  id={id}
                  name={name}
                  imageUrl={imageUrl}
                />
              </Col>
            </>
          );
        })}
      </Row>
      </>
  );
}
