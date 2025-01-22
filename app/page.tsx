import ProductSlider from '@/containers/routes/global/product-slider';
import Banners from '@/containers/routes/home/banners';
import CategorySlider from '@/containers/routes/home/category-slider';
import HeroOfferSlider from '@/containers/routes/home/hero-offer-slider';
import HeroSlider from '@/containers/routes/home/hero-slider';
import ProductSliderWithBanner from '@/containers/routes/home/product-slider-with-banner';

export default function Home() {
  return (
    <div className="flex size-full flex-col gap-6">
      <div className="container grid grid-cols-4 gap-5">
        <HeroSlider />
        <HeroOfferSlider />
      </div>
      <CategorySlider />
      <ProductSliderWithBanner
        category="لپ تاپ"
        position="right"
        path="/"
        image="/images/routes/home/product-slider-with-banner-laptop.png"
      />
      <Banners />
      <ProductSliderWithBanner
        category="کنسول بازی"
        position="left"
        path="/"
        image="/images/routes/home/product-slider-with-banner-play-station.png"
      />
      <Banners />
      <ProductSlider title="جدیدترین محصولات" path="/" />
      <ProductSlider title="پرفروش ترین محصولات" path="/" />
      <ProductSlider title="ارزان ترین محصولات" path="/" />
    </div>
  );
}
