import { APIgetProductById } from '@/actions/routes/product/get-product-by-id';
import { BreadCrumb } from '@/components/bread-crumb';
import { ProductCardFooter } from '@/components/product-card-footer';
import { Attributes } from '@/containers/routes/single-product/attributes';
import { Category } from '@/containers/routes/single-product/category';
import { Description } from '@/containers/routes/single-product/description';
import { Images } from '@/containers/routes/single-product/images';
import { Price } from '@/containers/routes/single-product/price';
import { Quantity } from '@/containers/routes/single-product/quantity';
import { Title } from '@/containers/routes/single-product/title';
import { fixUrl } from '@/utils/fix-url';

interface IPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function Page(props: IPageProps) {
  const { id } = await props.params;
  const data = await APIgetProductById({
    path: {
      id,
    },
  });

  return (
    <div className="container">
      <div className="mb-2 flex size-full items-center gap-3">
        <BreadCrumb
          title={data.nameFa}
          link={{
            path: fixUrl(`/explore?category=${data.categoryName}`),
            text: data.categoryName,
          }}
        />
        <span className="h-px grow bg-[#e6e9ee]" />
      </div>
      <div className="gap-5 xl:flex">
        <div className="flex flex-col gap-3">
          <Images images={data.images} title={data.nameFa} />
          <Category
            category={{
              name: data.categoryName,
              image: data.categoryImage,
            }}
          />
        </div>
        <div>
          <Title en={data.nameEn} fa={data.nameFa} />
          <div className="gap-5 md:flex md:flex-row-reverse">
            <div className="relative z-10 h-fit min-w-[300px] rounded-xl border p-3">
              <Price
                discount={data.discount!}
                priceWithDiscount={data.priceOff || data.price}
                priceWithoutDiscount={data.price}
              />
              <Quantity quantity={data.quantity} />
              <ProductCardFooter type="single-product" data={data} />
            </div>
            <div className="mt-5 flex w-full flex-col gap-5 sm:flex-row-reverse md:mt-0 xl:gap-5">
              <Attributes
                attributes={Object.entries(data.attributes).map(
                  ([key, value]) => ({ key: value, value: key }),
                )}
              />
              <Description description={data.description} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
