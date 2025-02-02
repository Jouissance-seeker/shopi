import { TProduct } from '@/types/product';

export const productsData: TProduct[] = (() => {
  const data: TProduct[] = [];
  for (let i = 1; i <= 12; i++) {
    data.push({
      id: i,
      quantity: 22970,
      colors: ['#3c62ea', '#fc282f', '#00A651'],
      path: '/product/1',
      attributes: [
        { key: 'رنگ', value: 'سبز' },
        { key: 'برند', value: 'اپل' },
        { key: 'دسته بندی', value: 'موبایل' },
        { key: 'اقلام همراه', value: 'شارژر' },
      ],
      discount: 10,
      priceWithoutDiscount: 76530000,
      priceWithDiscount: 75530000,
      title: {
        fa: 'هدست پلی استیشن سونی اسلیم مدل پالس لایت وایرلس',
        en: 'Sony PlayStation 4 Headset Model PULSD',
      },
      category: {
        text: 'گیمینگ و لوازم',
        path: '/explore',
        image: 'https://shopi.codisa.ir/wp-content/uploads/2024/10/Cat10-1.png',
      },
      images: [
        'https://shopi.codisa.ir/wp-content/uploads/2024/10/13-2.png',
        'https://shopi.codisa.ir/wp-content/uploads/2024/10/2-5.png',
        'https://shopi.codisa.ir/wp-content/uploads/2024/10/4-7.jpg',
        'https://shopi.codisa.ir/wp-content/uploads/2024/10/3-7.jpg',
        'https://shopi.codisa.ir/wp-content/uploads/2024/10/5-7.jpg',
      ],
      description: `مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.`,
    });
  }
  return data;
})();
