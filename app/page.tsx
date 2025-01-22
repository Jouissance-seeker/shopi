import ProductSlider from '@/containers/routes/global/product-slider';
import Banners from '@/containers/routes/home/banners';
import CategorySlider from '@/containers/routes/home/category-slider';
import HeroOfferSlider from '@/containers/routes/home/hero-offer-slider';
import HeroSlider from '@/containers/routes/home/hero-slider';

export default function Home() {
  return (
    <div className="flex size-full flex-col gap-6">
      <div className="container grid grid-cols-4 gap-5">
        <HeroSlider />
        <HeroOfferSlider />
      </div>
      <CategorySlider />
      <ProductSlider title="جدیدترین محصولات" path="/" />
      <Banners />
      <ProductSlider title="پرفروش ترین محصولات" path="/" />
      <Banners />
      <ProductSlider title="ارزان ترین محصولات" path="/" />
    </div>
  );
}
