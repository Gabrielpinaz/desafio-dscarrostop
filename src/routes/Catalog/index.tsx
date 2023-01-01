import "./styles.css";
import Header from "../../components/Header";
import CardCar from "../../components/CardCar";
import Comments from "../../components/Comments";
import Footer from "../../components/Footer";

export default function Catalog() {
  return (
    <>
      <Header />
      <main>
        <section id="dsct-car-section" className="dsct-card-car-container">
          <h2>Venha nos visitar</h2>
          <CardCar />
          <CardCar />
        </section>
        <section id="dsct-comments-section" className="dsct-comments-container">
          <h2>O que estão dizendo</h2>
          <Comments />
          <Comments />
          <Comments />
          <Comments />
          <Comments />
          <Comments />
        </section>
      </main>
      <Footer />
    </>
  );
}
