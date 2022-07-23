import "./style.css";
import ImageProduct from "../../assets/images/image-product-desktop.jpg";
import CartImage from "../../assets/icons/icon-cart.svg";

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
                <h1 className="info__name">Gabrielle Essence Eau De Parfum</h1>
                <p className="info__desc">
                    A floral, solar and voluptuous interpretation composed by
                    Olivier Polge, Perfumer-Creator for the House of CHANEL.
                </p>

                <div className="info__price">
                    <h1 className="price__current">$149.99</h1>
                    <h2 className="price__preview">$169.99</h2>
                </div>

                <button className="info__add">
                    <img
                        className="add__icon"
                        src={CartImage}
                        alt="Cart image"
                    />
                    Add to Cart
                </button>
            </div>
        </div>
    );
}
