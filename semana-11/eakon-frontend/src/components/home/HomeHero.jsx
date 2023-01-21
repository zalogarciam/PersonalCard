import { Link } from "react-router-dom";
import { Navigation, Pagination, Autoplay, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const HomeHero = ({ heroProducts }) => {
  return (
    <Swiper
      tag="section"
      wrapperTag="div"
      // className="hero"
      modules={[A11y, Autoplay, Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      loop
      preloadImages={false}
    >
      {heroProducts.map((element) => {
        const { nombre, slug, subcategoria, marca, imagen } =
          element.attributes;
        return (
          <SwiperSlide
            key={element.id}
            tag="section"
            zoom={true}
            className="hero"
            style={
              {
                // backgroundImage: `url(${imagen.data[0].attributes.url}`,
                // height: "100vh",
              }
            }
          >
            <div className="container">
              <div className="card card--hero">
                <h2 className="card__title card__title--hero">{nombre}</h2>
                <h3 className="card__subtitle card__subtitle--hero">
                  {marca.data[0].attributes.nombre} I{" "}
                  {subcategoria.data.attributes.nombre}
                </h3>
                <Link
                  to={`/productos/${slug}`}
                  className="button button--primary"
                >
                  Ver más
                </Link>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HomeHero;
