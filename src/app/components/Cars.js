// components
import Brands from "./Brands";
import CarSlider from "./CarSlider";

export default function Cars() {
  return (
    <section className="flex items-center my-5 xl:my-10" id="cars">
      <div className="container mx-auto">
        <Brands />
        <CarSlider />
      </div>
    </section>
  );
}
