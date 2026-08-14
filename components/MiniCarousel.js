import Slider from "react-slick";
import Image from 'next/image'
import "../node_modules/slick-carousel/slick/slick-theme.css"
import "../node_modules/slick-carousel/slick/slick.css"
import styles from '../styles/Minicarousel.module.scss'

const settings = {
  dots: false,
  fade: true,
  infinite: true,
  lazyLoad: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnHover: false,
  autoPlaySpeed: 4000,
  arrows: false,
  adaptiveHeight: true
};

const MiniCarousel = ({ slideImages }) => {

  if (!slideImages?.length) {
    return "";
  }

  return (
      <Slider {...settings}>
        {slideImages?.map((link, linkIndex) => (
          <div key={link?.toString()} 
            className={styles['carousel--mini__slide']}>
            <Image 
              src={`https:${link}`} 
              width={570}
              height={310}
              className={ styles['carousel--mini__slide__image']} 
              alt={`Project snapshot ${linkIndex + 1} of ${slideImages?.length}`} />
          </div>
        ))}
      </Slider>
  )
}

export default MiniCarousel
