import React from 'react';
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";

export default function AboutAccordion() {
    return (
      <Accordion defaultActiveKey='0'>
        <Card>
          <Card.Header>
            <Accordion.Toggle className="about__button" as={Button} variant='link' eventKey='1'>
              <b>Defeat your Opponent</b>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey='1'>
            <Card.Body>
                Each player starts the game with 20 life. Knock your opponent
                down to 0 life, and you win. The most common way to do this is
                to summon creatures and attack with them.
              <br />
              <br />
                Creature cards are the most important part of many Magic decks.
                They’re really easy to spot—just look at the lower right of a
                card. If you see a pair of numbers separated by a slash, you’ve
                got a creature card. Once it’s on the battlefield, a creature
                continues to attack and defend for you until your opponent can
                find a way to take it out.
              <br />
                Most games become a race to see who can deal the most damage
                first. Summoning the best creatures will help you win that race
                every time. Check out the section on casting creature spells.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
}