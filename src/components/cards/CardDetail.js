import React from "react";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import DetailList from "./DetailList";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import "./CardDetail.scss";

export default function CardDetail({details}) {
  const {name, imageUrl, text, rarity, colors} = details;
  return (
    <>
      <Breadcrumb name={name} />{" "}
      <Row>
        <Col md={6} className='detail-image'>
          <Image src={imageUrl} />{" "}
        </Col>{" "}
        <Col className='detail-text'>
          <h1> {name} </h1>{" "}
          <DetailList text={text} rarity={rarity} colors={colors} />{" "}
        </Col>{" "}
      </Row>
    </>
  );
}

CardDetail.propTypes = {
  details: PropTypes.object.isRequired
};
