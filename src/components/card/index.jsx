import "./style.css";
import ImageProduct from "../../assets/images/image-product-desktop.jpg";

export default function Card() {
    return (
        <div className="Card">
            <img
                className="Card__image"
                src={ImageProduct}
                alt="image product"
            />
            <div className="Card__info">
                <span className="info__type">Perfume</span>
                <h1 className="info__name"></h1>
                <p className="info__desc"></p>

                <div className="info__price">
                    <h1 className="price__current"></h1>
                    <h2 className="price__preview"></h2>
                </div>

                <button className="info__add"></button>
            </div>
        </div>
    );
}
