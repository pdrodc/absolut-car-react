import styles from "./brands.module.css";
import Mercedes from "../../assets/mercedes.png";
import BMW from "../../assets/BMW.png";
import Audi from "../../assets/audi.png";
import Nissan from "../../assets/nissan.png";
import Porsche from "../../assets/porsche.png";
import Citroen from "../../assets/citroen.png";
import BYD from "../../assets/BYD.png";
import Fiat from "../../assets/fiat.png";
import Ford from "../../assets/ford.png";
import Peugeot from "../../assets/peugeot.png";
import Toyota from "../../assets/toyota.png";
import Honda from "../../assets/honda.png";
import Hyundai from "../../assets/hyundai.png";
import Volkswagen from "../../assets/volkswagen.png";
import Mitsubishi from "../../assets/mitsubishi.png";
import Renault from "../../assets/renault.png";
import KIA from "../../assets/kia.png";
import Jeep from "../../assets/jeep.png";

const Brands = () => {
  return (
    <section className={styles.brands}>
      <div className={styles.wrapperBrands}>
        <div className={styles.brandsContent}>
          <h2>Conheça as marcas que fazem parte da Absolut Car</h2>
          <p>
            Aqui na Absolut Car, você encontra as melhores marcas do mercado.
          </p>
        </div>
        <div className={styles.brandsList}>
          <img src={Mercedes} alt="" />
          <img src={BMW} alt="" />
          <img src={Audi} alt="" />
          <img src={Nissan} alt="" />
          <img src={Porsche} alt="" />
          <img src={Citroen} alt="" />
        </div>
        <div className={styles.brandsList}>
          <img src={Fiat} alt="" />
          <img src={BYD} alt="" />
          <img src={Toyota} alt="" />
          <img src={Ford} alt="" />
          <img src={Peugeot} alt="" />
          <img src={Honda} alt="" />
        </div>
        <div className={styles.brandsList}>
          <img src={Hyundai} alt="" />
          <img src={Volkswagen} alt="" />
          <img src={Mitsubishi} alt="" />
          <img src={Renault} alt="" />
          <img src={KIA} alt="" />
          <img src={Jeep} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Brands;
