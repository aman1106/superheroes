import React from "react";
import {Card, Button} from "antd";
import Auxiliary from "../../util/Auxiliary";

const Hero = ({hero, onBack}) => (
    <Auxiliary>
      <Card title={<span style={{color: "#fff", fontWeight: 600, textDecoration: "underline"}}>{hero.name}</span>}
      className="Card-header"
      cover={<img alt="example" src={hero.images.md} />}
      >
        <div style={{fontWeight: 600, textDecoration: "underline"}}>Full Name</div>
        <div className="hero__powerstat">{hero.biography.fullName}</div>
        <div style={{fontWeight: 600, textDecoration: "underline"}}>PowerStats</div>
        <div className="hero__powerstat">
        <b className="hero__powerstat--item">combat : </b>{hero.powerstats.combat}<br/>
        <b className="hero__powerstat--item">durability : </b>{hero.powerstats.durability}<br/>
        <b className="hero__powerstat--item">intelligence : </b>{hero.powerstats.intelligence}<br/>
        <b className="hero__powerstat--item">power : </b>{hero.powerstats.power}<br/>
        <b className="hero__powerstat--item">speed : </b>{hero.powerstats.speed}<br/>
        <b className="hero__powerstat--item">strength : </b>{hero.powerstats.strength}<br/>
        </div>
        <div style={{fontWeight: 600, textDecoration: "underline"}}>Occupation</div>
        <div className="hero__powerstat">{hero.work.occupation}</div>

      </Card>
      <Button onClick={onBack} style={{cursor: "pointer", width: "100%", height: "50px", backgroundColor: "#3c4d71", color: "#fff"}}>Go Back</Button>
    </Auxiliary>
  );

export default Hero;
