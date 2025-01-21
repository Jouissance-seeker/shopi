import HeroOfferSlider from '@/containers/routes/home/hero-offer-slider';
import HeroSlider from '@/containers/routes/home/hero-slider';

export default function Home() {
  return (
    <div>
      <section className="container grid grid-cols-4 gap-6">
        <HeroSlider />
        <HeroOfferSlider />
      </section>
    </div>
  );
}
