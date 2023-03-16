import React from 'react'
import '../styles/home.css'
import {Container,Row,Col} from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import Subtitle from '../shared/Subtitle'
import SearchBar from '../shared/SearchBar'
import ServiceList from '../services/ServiceList'


const Home = () => {
  return <>
  {/* =================HERO Section======================= */}
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center">
                <Subtitle subtitle={'Know Before You GO!'}/>
                <img src = {worldImg} alt='' />

              </div>
              <h1>Traveling Opens the door to creating <span className="highlight">memories</span></h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam delectus dolor, natus ex quos possimus maiores magnam consectetur voluptas nulla, eius illo totam suscipit nostrum hic iure voluptate mollitia quaerat.</p>

            </div>
          </Col>

          <Col lg='2'>
            <div className="hero__img-box">
              <img src={heroImg} alt=""></img>
            </div>
            </Col>
          <Col lg='2'>

            <div className="hero__img-box mt-4">
              <video src={heroVideo} alt="" controls ></video>
            </div>
            </Col>
          <Col lg='2'>
            <div className="hero__img-box mt-5">
              <img src={heroImg02} alt=""></img>
            </div>
          </Col>

          <SearchBar/>

        </Row>
      </Container>
    </section>

    {/* =============Hero Section ==================*/}
    <section>
      <Container>
        <Row>
          <Col lg='3'>
            <h5 className="services__subtitle"> What we Serve</h5>
            <h2 className="services__title">We offer our best services</h2>
          </Col>
          <ServiceList />
        </Row>
      </Container>
    </section>

    {/* *===FEATURED SECTION========== */}
    <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-5'>
            <Subtitle subtitle={"Explore"}></Subtitle>
            <h2 className='featured__tour-title'> Our Featured tours</h2>

          </Col>
        </Row>
      </Container>
    </section>
    
  </>
};
export default Home