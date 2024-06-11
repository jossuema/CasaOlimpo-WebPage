import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardProduct from './CardProduct';
import type { Producto } from "../services/fetchData";

interface CategoryCarruselProps {
    Key: number;
    Products: Producto[];
}

export default function CategoryCarrusel({ Products, Key}: CategoryCarruselProps) {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Slider {...settings}>
            <div key={Key}>
                {Products.map((item) => (
                    <CardProduct key={item.id} producto={item} />
                ))}
            </div>
        </Slider>
    );
};
