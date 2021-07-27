import Carousel from 'react-bootstrap/Carousel'
import cyber from '../assets/cyber.jpg'
import witcher from '../assets/witcher.jpg'
import gta from '../assets/gta.jpg'

export const Slider = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={cyber}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Cyberpunk here</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={witcher}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Witcher 3 Wild hunt</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={gta}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>GTA V</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}