import styles from "./brands.module.css";

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
      </div>
    </section>
  );
};

export default Brands;
