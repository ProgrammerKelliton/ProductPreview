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
                <h1 className="info__name">Gabrielle Essence Eau De Parfum</h1>
                <p className="info__desc">
                    Mussum Ipsum, cacilds vidis litro abertis. Posuere libero
                    varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit
                    amet nisi.Aenean aliquam molestie leo, vitae iaculis
                    nisl.Mais vale um bebadis conhecidiss, que um alcoolatra
                    anonimis.A ordem dos tratores não altera o pão duris.
                </p>

                <div className="info__price">
                    <h1 className="price__current">$149.99</h1>
                    <h2 className="price__preview">169.99</h2>
                </div>

                <button className="info__add">
                    <img src="" alt="" />
                    <span>Add to Cart</span>
                </button>
            </div>
        </div>
    );
}
