import HeroSlider from '@/containers/routes/home/hero-slider';

export default function Home() {
  return (
    <div className="container grid size-full grid-cols-4 gap-6">
      <HeroSlider />
      <div className="col-span-full lg:col-span-1">
        <p className="bg-red">slider</p>
      </div>
    </div>
  );
}
