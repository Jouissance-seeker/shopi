import { APIgetCategorySlider } from '@/actions/routes/global/get-category-slider';
import { APIgetHeroSlider } from '@/actions/routes/home/get-hero-slider';
import { APIgetProductsForSlider } from '@/actions/routes/home/get-products-for-slider';
import { CategorySlider } from '@/containers/routes/global/category-slider';
import { ProductSlider } from '@/containers/routes/global/product-slider';
import { Banners } from '@/containers/routes/home/banners';
import { BrandSlider } from '@/containers/routes/home/brand-slider';
import { HeroOfferSlider } from '@/containers/routes/home/hero-offer-slider';
import { HeroSlider } from '@/containers/routes/home/hero-slider';
import { ProductSliderWithBanner } from '@/containers/routes/home/product-slider-with-banner';

export default async function Page() {
  const productsForSliderOrderByLowestPriceData = await APIgetProductsForSlider(
    {
      query: {
        orderBy: 'lowest_price',
      },
    },
  );
  const productsForSliderOrderByHighestPriceData =
    await APIgetProductsForSlider({
      query: {
        orderBy: 'highest_price',
      },
    });
  const productsForSliderOrderByMostPopularData = await APIgetProductsForSlider(
    {
      query: {
        orderBy: 'name',
      },
    },
  );
  const heroSliderData = await APIgetHeroSlider();
  const categorySliderData = await APIgetCategorySlider();

  return (
    <div className="flex size-full flex-col gap-6">
      <div className="container grid grid-cols-4 gap-5">
        <HeroSlider data={heroSliderData} />
        <HeroOfferSlider data={productsForSliderOrderByHighestPriceData} />
      </div>
      <CategorySlider data={categorySliderData} />
      <Banners />
      <ProductSliderWithBanner
        text="ارزان ترین"
        position="right"
        path="/"
        image="/images/routes/home/product-slider-with-banner-laptop.png"
        data={productsForSliderOrderByLowestPriceData}
      />
      <ProductSlider
        title="محبوب ترین محصولات"
        path="/"
        data={productsForSliderOrderByMostPopularData}
      />
      <ProductSliderWithBanner
        text="گران ترین"
        position="left"
        path="/"
        image="/images/routes/home/product-slider-with-banner-play-station.png"
        data={productsForSliderOrderByHighestPriceData}
      />
      <BrandSlider />
    </div>
  );
}
