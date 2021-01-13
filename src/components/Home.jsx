import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';



function Home() {
    return (
        <div className="home">
      <div className="container">
      <div className="row">
      <div className="col">
<Splide options={ {
  type: 'loop',
autoplay: true,
interval: 2000,
  } }>
  <SplideSlide>
    <img className="img-fluid" src="https://placeimg.com/1110/300/animals" alt="Görsel 1"/>
  </SplideSlide>
  <SplideSlide>
    <img className="img-fluid" src="https://placeimg.com/1110/300/arch" alt="Görsel 2"/>
  </SplideSlide>
  <SplideSlide>
    <img className="img-fluid" src="https://placeimg.com/1110/300/tech" alt="Görsel 3"/>
  </SplideSlide>
</Splide>
      </div>
      </div>
        <div className="row align-items-center my-5">
          <div className="col">
          <h3>Öne Çıkanlar</h3>
<p>Popüler film ve dizileri istediğin yerde izle!</p>

<main className="page-content">
  <div className="card">
    <div className="content">
      <h2 className="title">The Undoing</h2>
      <p className="copy">James McBride'ın aynı isimli romanından uyarlanan mini dizi "The Good Lord Bird" </p>
      <a href="/detay" className="btn">Detayları Gör</a>
    </div>
  </div>
  <div className="card">
    <div className="content">
      <h2 className="title">The Good Lord Bird</h2>
      <p className="copy">James McBride'ın aynı isimli romanından uyarlanan mini dizi "The Good Lord Bird" </p>
      <a href="/detay" className="btn">Detayları Gör</a>
    </div>
  </div>
  <div className="card">
    <div className="content">
      <h2 className="title">I Hate Suzie</h2>
      <p className="copy">James McBride'ın aynı isimli romanından uyarlanan mini dizi "The Good Lord Bird" </p>
      <a href="/detay" className="btn">Detayları Gör</a>
    </div>
  </div>
  <div className="card">
    <div className="content">
      <h2 className="title">The Great</h2>
      <p className="copy">James McBride'ın aynı isimli romanından uyarlanan mini dizi "The Good Lord Bird" </p>
      <a href="/detay" className="btn">Detayları Gör</a>
    </div>
  </div>
</main>
<div className="row align-items-center my-5">
          <div className="col">
          <h3>Diziler</h3>
<p>Sevilen yerli ve yabancı dizileri istediğin yerde izle!</p>
        <Splide options={ {
  type: 'loop',
autoplay: true,
interval: 3000,
  perPage: 3,
gap: 10,
  perMove: 1,
breakpoints: {
    800: {
      perPage: 2,
    },
    576: {
      perPage: 1,
    },
  }
  } }>
  <SplideSlide className="pb-5">
    <div className="property-card">
    <a href="/detay">
      <div className="property-image">
        <div className="property-image-title">
        </div>
      </div></a>
    <div className="property-description">
      <h5> Card Title </h5>
      <p>Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. More Bingo. Lorem Ipum doth be hard.</p>
    </div>
    <a href="/detay">
      <span className="property-social-icons btn btn-success">
       Detay
      </span>
    </a>
  </div>
  </SplideSlide>
  <SplideSlide className="pb-5">
    <div className="property-card">
    <a href="/detay">
      <div className="property-image">
        <div className="property-image-title">
        </div>
      </div></a>
    <div className="property-description">
      <h5> Card Title </h5>
      <p>Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. More Bingo. Lorem Ipum doth be hard.</p>
    </div>
    <a href="/detay">
      <span className="property-social-icons btn btn-success">
       Detay
      </span>
    </a>
  </div>
  </SplideSlide>
  <SplideSlide className="pb-5">
   <div className="property-card">
    <a href="/detay">
      <div className="property-image">
        <div className="property-image-title">
        </div>
      </div></a>
    <div className="property-description">
      <h5> Card Title </h5>
      <p>Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. More Bingo. Lorem Ipum doth be hard.</p>
    </div>
    <a href="/detay">
      <span className="property-social-icons btn btn-success">
       Detay
      </span>
    </a>
  </div>
  </SplideSlide>
  <SplideSlide className="pb-5">
    <div className="property-card">
    <a href="/detay">
      <div className="property-image">
        <div className="property-image-title">
        </div>
      </div></a>
    <div className="property-description">
      <h5> Card Title </h5>
      <p>Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. More Bingo. Lorem Ipum doth be hard.</p>
    </div>
    <a href="/detay">
      <span className="property-social-icons btn btn-success">
       Detay
      </span>
    </a>
  </div>
  </SplideSlide>
  <SplideSlide className="pb-5">
    <div className="property-card">
    <a href="/detay">
      <div className="property-image">
        <div className="property-image-title">
        </div>
      </div></a>
    <div className="property-description">
      <h5> Card Title </h5>
      <p>Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. More Bingo. Lorem Ipum doth be hard.</p>
    </div>
    <a href="/detay">
      <span className="property-social-icons btn btn-success">
       Detay
      </span>
    </a>
  </div>
  </SplideSlide>
  <SplideSlide className="pb-5">
    <div className="property-card">
    <a href="/detay">
      <div className="property-image">
        <div className="property-image-title">
        </div>
      </div></a>
    <div className="property-description">
      <h5> Card Title </h5>
      <p>Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. More Bingo. Lorem Ipum doth be hard.</p>
    </div>
    <a href="/detay">
      <span className="property-social-icons btn btn-success">
       Detay
      </span>
    </a>
  </div>
  </SplideSlide>
</Splide>
</div> </div>
          </div>
        </div>
      </div>
    </div>
    );
}

export default Home;