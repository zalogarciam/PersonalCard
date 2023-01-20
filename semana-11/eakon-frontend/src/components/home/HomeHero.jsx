import { Navigation, Pagination, Autoplay, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const HomeHero = ({ heroProducts }) => {
  return (
    <Swiper
      tag="section"
      wrapperTag="div"
      className="hero"
      modules={[A11y, Autoplay, Navigation, Pagination]}
      autoplay={{ delay: 5000 }}
      navigation
      pagination={{ clickable: true }}
      loop
      preloadImages={false}
    >
      {heroProducts.map((element) => {
        const { nombre, imagen } = element.attributes;
        return (
          <SwiperSlide
            key={element.id}
            tag="section"
            style={{
              backgroundImage: `url(${imagen.data[0].attributes.url}`,
              height: "100vh",
            }}
          >
            {nombre}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HomeHero;
