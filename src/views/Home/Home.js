import { Link } from 'react-router-dom';

import './Home.css'

import { cardsData } from '../../data';

import cardsHeader from '../../assets/principal.jpg'

import Card from "../../components/Card/Card";
import ImageSlider from "../../components/ImageSlider/ImageSlider";


export default function Home () {
  return (
    <>
      {/* <ImageSlider /> */}
      <section className="cards">
        <div className="cards__header">
          <img src={cardsHeader} alt='' className="cards__image" />
          <div className="cards__header-info">
            <h2>Que la fuerza te acompañe.</h2>
            {/* <Link to='#!'>Explore</Link> */}
          </div>
        </div>
        <div className="cards__body">
          {
            cardsData.map((card, index) => {
              return (
                <Link to={card.link} key={index}>
                  <Card text={card.text} image={card.image} />
                </Link>
              )
            })
          }
        </div>
      </section>
    </>
  )
}
