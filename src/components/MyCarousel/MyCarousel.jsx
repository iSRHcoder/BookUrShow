import { Carousel } from "react-bootstrap";
import styles from "./MyCarousel.module.css";

const MyCarousel = () => {
  return (
    <Carousel className={styles.Carousel}>
      <Carousel.Item className={styles.Image}>
        <img src="/images/car1.avif" alt="Second slide" />
      </Carousel.Item>

      <Carousel.Item className={styles.Image}>
        <img src="/images/car2.avif" alt="Second slide" />
      </Carousel.Item>

      <Carousel.Item className={styles.Image}>
        <img src="/images/car3.avif" alt="Second slide" />
      </Carousel.Item>

      <Carousel.Item className={styles.Image}>
        <img src="/images/car4.avif" alt="Second slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;
