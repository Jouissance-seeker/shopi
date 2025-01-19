export const CATEGORIES = [
  {
    text: 'موبایل',
    path: '/shop/mobile',
    children: [
      {
        text: 'براساس برند',
        link: '/shop/mobile/brand',
        children: [
          {
            text: 'سامسونگ',
            link: '/shop/mobile/brand/samsung',
          },
          {
            text: 'اپل',
            link: '/shop/mobile/brand/apple',
          },
          {
            text: 'شیائومی',
            link: '/shop/mobile/brand/xiaomi',
          },
        ],
      },
      {
        text: 'براساس قیمت',
        link: '/shop/mobile/price',
        children: [
          {
            text: 'تا 3 میلیون',
            link: '/shop/mobile/prices/?min=0&max=3000000',
          },
          {
            text: 'تا 5 میلیون',
            link: '/shop/mobile/prices/?min=0&max=5000000',
          },
          {
            text: 'تا 10 میلیون',
            link: '/shop/mobile/prices/?min=0&max=10000000',
          },
        ],
      },
    ],
  },
  {
    text: 'لپ تاپ',
    path: '/shop/laptop',
    children: [
      {
        text: 'براساس برند',
        link: '/shop/laptop/brand',
        children: [
          {
            text: 'اپل',
            link: '/shop/laptop/brand/apple',
          },
          {
            text: 'سامسونگ',
            link: '/shop/laptop/brand/samsung',
          },
          {
            text: 'شیائومی',
            link: '/shop/laptop/brand/xiaomi',
          },
        ],
      },
      {
        text: 'براساس قیمت',
        link: '/shop/shop/price',
        children: [
          {
            text: 'تا 3 میلیون',
            link: '/shop/shop/laptop/?min=0&max=3000000',
          },
          {
            text: 'تا 10 میلیون',
            link: '/shop/shop/laptop/?min=0&max=10000000',
          },
          {
            text: 'تا 5 میلیون',
            link: '/shop/shop/laptop/?min=0&max=5000000',
          },
        ],
      },
    ],
  },
  {
    text: 'ساعت',
    path: '/shop/watch',
    children: [
      {
        text: 'براساس برند',
        link: '/shop/watch/brand',
        children: [
          {
            text: 'سامسونگ',
            link: '/shop/watch/brand/samsung',
          },
          {
            text: 'شیائومی',
            link: '/shop/watch/brand/xiaomi',
          },
          {
            text: 'اپل',
            link: '/shop/watch/brand/apple',
          },
        ],
      },
      {
        text: 'براساس قیمت',
        link: '/shop/watch/price',
        children: [
          {
            text: 'تا 10 میلیون',
            link: '/shop/watch/prices/?min=0&max=10000000',
          },
          {
            text: 'تا 3 میلیون',
            link: '/shop/watch/prices/?min=0&max=3000000',
          },
          {
            text: 'تا 5 میلیون',
            link: '/shop/watch/prices/?min=0&max=5000000',
          },
        ],
      },
    ],
  },
  {
    text: 'اسپیکر',
    path: '/shop/speaker',
    children: [
      {
        text: 'براساس برند',
        link: '/shop/speaker/brand',
        children: [
          {
            text: 'اپل',
            link: '/shop/speaker/brand/apple',
          },
          {
            text: 'شیائومی',
            link: '/shop/speaker/brand/xiaomi',
          },
          {
            text: 'سامسونگ',
            link: '/shop/speaker/brand/samsung',
          },
        ],
      },
      {
        text: 'براساس قیمت',
        link: '/shop/speaker/price',
        children: [
          {
            text: 'تا 5 میلیون',
            link: '/shop/speaker/laptop/?min=0&max=5000000',
          },
          {
            text: 'تا 3 میلیون',
            link: '/shop/speaker/laptop/?min=0&max=3000000',
          },
          {
            text: 'تا 10 میلیون',
            link: '/shop/speaker/laptop/?min=0&max=10000000',
          },
        ],
      },
    ],
  },
  {
    text: 'پاوربانک',
    path: '/shop/powerbank',
    children: [
      {
        text: 'براساس برند',
        link: '/shop/powerbank/brand',
        children: [
          {
            text: 'اپل',
            link: '/shop/powerbank/brand/apple',
          },
          {
            text: 'سامسونگ',
            link: '/shop/powerbank/brand/samsung',
          },
          {
            text: 'شیائومی',
            link: '/shop/powerbank/brand/xiaomi',
          },
        ],
      },
      {
        text: 'براساس قیمت',
        link: '/shop/powerbank/price',
        children: [
          {
            text: 'تا 3 میلیون',
            link: '/shop/powerbank/laptop/?min=0&max=3000000',
          },
          {
            text: 'تا 10 میلیون',
            link: '/shop/powerbank/laptop/?min=0&max=10000000',
          },
          {
            text: 'تا 5 میلیون',
            link: '/shop/powerbank/laptop/?min=0&max=5000000',
          },
        ],
      },
    ],
  },
];
