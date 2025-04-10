import { APIgetProductsForSlider } from '@/actions/routes/home/get-products-for-slider';
import { CategorySlider } from '@/containers/routes/global/category-slider';
import { ProductSlider } from '@/containers/routes/global/product-slider';
import { Banners } from '@/containers/routes/home/banners';
import { BrandSlider } from '@/containers/routes/home/brand-slider';
import { HeroSlider } from '@/containers/routes/home/hero-slider';
import { ProductSliderWithBanner } from '@/containers/routes/home/product-slider-with-banner';

export default async function Page() {
  const productsForSliderOrderByLowestPrice = await APIgetProductsForSlider({
    query: {
      orderBy: 'lowest_price',
    },
  });
  const productsForSliderOrderByHighestPrice = await APIgetProductsForSlider({
    query: {
      orderBy: 'highest_price',
    },
  });
  const productsForSliderOrderByMostPopular = await APIgetProductsForSlider({
    query: {
      orderBy: 'name',
    },
  });
  return (
    <div className="flex size-full flex-col gap-6">
      <div className="container grid grid-cols-4 gap-5">
        <HeroSlider />
        {/* <HeroOfferSlider /> */}
      </div>
      <CategorySlider />
      <Banners />
      <ProductSliderWithBanner
        text="ارزان ترین"
        position="right"
        path="/"
        image="/images/routes/home/product-slider-with-banner-laptop.png"
        data={productsForSliderOrderByLowestPrice}
      />
      <ProductSlider
        title="محبوب ترین محصولات"
        path="/"
        data={productsForSliderOrderByMostPopular}
      />
      <ProductSliderWithBanner
        text="گران ترین"
        position="left"
        path="/"
        image="/images/routes/home/product-slider-with-banner-play-station.png"
        data={productsForSliderOrderByHighestPrice}
      />
      <BrandSlider />
    </div>
  );
}
