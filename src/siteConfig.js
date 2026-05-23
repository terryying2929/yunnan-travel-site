export const resolveAsset = (name) => `${import.meta.env.BASE_URL}assets/${name}.png`;

export const siteConfig = {
  contact: {
    whatsappUrl: 'https://wa.me/000000000000',
    email: 'hello@yunnantravel.example',
    phone: '+86 000 0000 0000',
    address: 'Kunming, Yunnan, China',
  },
  media: {
    hero: 'hero-yunnan-travel',
  },
  content: {
    en: {
      meta: {
        brand: 'Yunnan Travel',
        tagline: 'Private Routes & Custom China Tours',
        language: '中文',
      },
      nav: ['Home', 'Tours', 'Destinations', 'Travel Services', 'About Yunnan', 'Contact'],
      labels: {
        quote: 'Get Quote',
        tourProducts: 'Tour Products',
        askAbout: 'Ask about this',
        destinations: 'Destinations',
        process: 'Process',
        servicePanelTitle: 'Travel Service Support',
        selectOption: 'Select an option',
        emailAddress: 'Email address',
      },
      hero: {
        eyebrow: 'Private Yunnan tours across mountains, old towns, lakes, and culture',
        title: 'Yunnan Travel & Custom Tours',
        body:
          'Plan a refined journey through Kunming, Dali, Lijiang, Shangri-La, Xishuangbanna, and Yuanyang with clear routing, local travel support, and flexible private itineraries.',
        primary: 'Plan My Trip',
        secondary: 'Explore Tours',
        stats: [
          ['6', 'Route styles'],
          ['24/7', 'Trip support'],
          ['100%', 'Tailor-made'],
        ],
      },
      categoriesTitle: 'Popular Yunnan Travel Experiences',
      categoriesIntro:
        'Choose a classic route or combine mountains, old towns, ethnic culture, food, rainforest, and photography stops into a private itinerary.',
      categories: [
        {
          title: 'Classic Yunnan Routes',
          body: 'Balanced first-time routes connecting Kunming, Dali, Lijiang, and Shangri-La with practical pacing.',
          image: 'destination-classic-yunnan',
        },
        {
          title: 'Dali & Lijiang',
          body: 'Old towns, lakes, courtyards, cafes, mountain views, and relaxed highland travel days.',
          image: 'destination-dali-lijiang',
        },
        {
          title: 'Shangri-La Highlands',
          body: 'Tibetan-style towns, grasslands, monasteries, snow mountains, and slower altitude-aware routing.',
          image: 'destination-shangrila',
        },
        {
          title: 'Xishuangbanna Rainforest',
          body: 'Tropical rainforest, Dai culture, tea landscapes, night markets, and warm winter escapes.',
          image: 'destination-xishuangbanna',
        },
        {
          title: 'Culture & Food Tours',
          body: 'Markets, minority villages, tea, local cooking, crafts, festivals, and city food walks.',
          image: 'destination-yuanyang-culture',
        },
        {
          title: 'Private Custom Trips',
          body: 'Flexible plans for families, photographers, couples, senior travelers, and small groups.',
          image: 'hero-yunnan-travel',
        },
      ],
      about: {
        eyebrow: 'Why travel with us',
        title: 'A Yunnan journey shaped around altitude, season, distance, and local rhythm.',
        lead:
          'Yunnan is one of China’s most rewarding travel regions, but the best trip depends on careful routing. Highways, altitude, seasonal scenery, festival dates, old-town crowds, and flight or rail connections all influence how comfortable and memorable the journey feels.',
        paragraphs: [
          'We help travelers connect Kunming, Dali, Lijiang, Shangri-La, Xishuangbanna, Yuanyang Rice Terraces, and smaller cultural stops into realistic private itineraries. Instead of rushing every famous place into one loop, we compare routes, balance driving time, and recommend the right sequence for your season and travel style.',
          'For domestic and international guests, the service can include airport or rail pickup, hotels, local drivers, guides, family-friendly pacing, food experiences, photography timing, business travel support, and custom trip planning. The goal is simple: a beautiful Yunnan route that is practical on the ground.',
        ],
        highlights: ['Altitude-aware route planning', 'Private and small-group trips', 'Nature, culture, food, and family support'],
      },
      services: [
        'Custom routing and quote guidance',
        'Airport, rail station, and city transfers',
        'Local guides, drivers, and interpreter coordination',
        'Family, photography, food, and small-group arrangements',
      ],
      destinations: {
        title: 'Destination Focus',
        items: [
          ['Kunming', 'Spring City arrival hub, gardens, food, Stone Forest access, and easy connections.'],
          ['Dali & Lijiang', 'Old towns, Erhai Lake, Naxi culture, courtyards, and mountain scenery.'],
          ['Shangri-La', 'Highland grasslands, Tibetan-style culture, monasteries, and snow mountain views.'],
          ['Xishuangbanna & Yuanyang', 'Rainforest warmth, Dai culture, tea routes, and sunrise rice terrace photography.'],
        ],
      },
      processTitle: 'How Your Trip Comes Together',
      process: [
        ['Inquiry', 'Share your dates, group size, arrival city, interests, and comfort level.'],
        ['Route Planning', 'We shape a practical route and compare transport, season, and hotel options.'],
        ['Confirmation', 'Finalize itinerary, hotels, transfers, guide needs, and contact details.'],
        ['Travel Support', 'Receive local assistance for pickups, timing changes, and route questions.'],
      ],
      inquiry: {
        eyebrow: 'Start a custom quote',
        title: 'Tell us what kind of Yunnan trip you want.',
        body:
          'Send a quick WhatsApp message for faster replies, or use the form to outline dates, route ideas, group size, and preferred experiences.',
        whatsapp: 'Chat on WhatsApp',
        submit: 'Send Inquiry',
        success: 'Thanks. Your inquiry is ready for follow-up. Replace the placeholder contact details to receive real submissions.',
        fields: {
          name: 'Name',
          contact: 'Email or phone',
          dates: 'Travel dates',
          group: 'Group size',
          interests: 'Interests',
          message: 'Message',
        },
      },
      footer: {
        quick: 'Quick Links',
        experiences: 'Experiences',
        contact: 'Contact',
        newsletter: 'Yunnan Notes',
        newsletterBody: 'Receive seasonal Yunnan route ideas and custom travel updates.',
        subscribe: 'Subscribe',
        copyright: 'Yunnan Travel. Static preview site.',
      },
    },
    zh: {
      meta: {
        brand: '云南旅行',
        tagline: '私人路线与定制国内游',
        language: 'EN',
      },
      nav: ['首页', '线路', '目的地', '旅游服务', '关于云南', '联系'],
      labels: {
        quote: '获取报价',
        tourProducts: '旅行产品',
        askAbout: '咨询该路线',
        destinations: '目的地',
        process: '流程',
        servicePanelTitle: '旅行服务支持',
        selectOption: '请选择',
        emailAddress: '邮箱地址',
      },
      hero: {
        eyebrow: '雪山、古城、湖泊与民族文化的云南私人旅行',
        title: '云南旅行与定制行程',
        body:
          '从昆明、大理、丽江、香格里拉，到西双版纳和元阳梯田，为你规划清晰、舒适、有当地支持的云南私人路线。',
        primary: '咨询定制行程',
        secondary: '查看线路',
        stats: [
          ['6', '路线主题'],
          ['24/7', '旅途支持'],
          ['100%', '私人定制'],
        ],
      },
      categoriesTitle: '热门云南旅行体验',
      categoriesIntro:
        '可以选择经典路线，也可以把雪山古城、民族文化、美食、热带雨林和摄影点组合成适合你节奏的私人行程。',
      categories: [
        {
          title: '云南经典环线',
          body: '串联昆明、大理、丽江、香格里拉，适合第一次来云南的平衡型路线。',
          image: 'destination-classic-yunnan',
        },
        {
          title: '大理与丽江',
          body: '古城、洱海、院落、咖啡、雪山远景与慢节奏高原旅行。',
          image: 'destination-dali-lijiang',
        },
        {
          title: '香格里拉高原',
          body: '藏式城镇、草原、寺院、雪山和更适合海拔适应的慢行路线。',
          image: 'destination-shangrila',
        },
        {
          title: '西双版纳雨林',
          body: '热带雨林、傣族文化、茶山、夜市和温暖的冬季度假体验。',
          image: 'destination-xishuangbanna',
        },
        {
          title: '文化与美食游',
          body: '市集、民族村寨、茶文化、当地烹饪、手工艺、节庆和城市美食漫步。',
          image: 'destination-yuanyang-culture',
        },
        {
          title: '私人定制路线',
          body: '适合家庭、摄影师、情侣、长辈出行和小团体的灵活私人行程。',
          image: 'hero-yunnan-travel',
        },
      ],
      about: {
        eyebrow: '为什么选择我们',
        title: '根据海拔、季节、距离和当地节奏来规划云南。',
        lead:
          '云南非常适合深度旅行，但好不好玩往往取决于路线是否合理。高原海拔、季节景观、节庆时间、古城人流、车程长短和航班高铁衔接，都会影响整个旅程的舒适度。',
        paragraphs: [
          '我们帮助你把昆明、大理、丽江、香格里拉、西双版纳、元阳梯田和更小众的人文停留点组合成真正能落地的私人路线。不是把所有热门地点硬塞进一个行程，而是比较路线顺序、控制车程，并根据季节和旅行风格安排节奏。',
          '无论是国内家庭出行、摄影旅行、情侣假期、朋友小团，还是商务接待，我们都可以协助机场或高铁接送、酒店建议、当地司机、向导、翻译、美食体验、拍摄时间和定制路线规划。目标很简单：路线漂亮，也真的好走。',
        ],
        highlights: ['考虑海拔的路线规划', '私人及小团旅行', '自然、人文、美食与家庭支持'],
      },
      services: ['定制路线与报价建议', '机场、高铁站与市内接送', '当地向导、司机与翻译协调', '家庭、摄影、美食和小团安排'],
      destinations: {
        title: '重点目的地',
        items: [
          ['昆明', '春城抵达枢纽、园林、美食、石林周边与便捷交通连接。'],
          ['大理与丽江', '古城、洱海、纳西文化、院落住宿与雪山景观。'],
          ['香格里拉', '高原草地、藏式文化、寺院和雪山视野。'],
          ['西双版纳与元阳', '热带雨林、傣族文化、茶山路线和梯田日出摄影。'],
        ],
      },
      processTitle: '行程如何落地',
      process: [
        ['咨询', '告诉我们日期、人数、抵达城市、兴趣点和舒适度需求。'],
        ['路线规划', '根据交通、季节、酒店和车程设计实际可行的路线。'],
        ['确认', '确认行程、酒店、接送、向导需求和联系方式。'],
        ['旅途支持', '提供接送、时间调整和路线问题的当地协助。'],
      ],
      inquiry: {
        eyebrow: '开始获取定制报价',
        title: '告诉我们你想要怎样的云南旅行。',
        body: '想快速沟通可以直接发 WhatsApp，也可以用表单留下日期、路线想法、人数和感兴趣的体验。',
        whatsapp: 'WhatsApp 咨询',
        submit: '发送咨询',
        success: '已生成咨询信息。请替换占位联系方式，以便接收真实提交。',
        fields: {
          name: '姓名',
          contact: '邮箱或电话',
          dates: '旅行日期',
          group: '人数',
          interests: '感兴趣的体验',
          message: '留言',
        },
      },
      footer: {
        quick: '快速链接',
        experiences: '旅行体验',
        contact: '联系方式',
        newsletter: '云南旅行灵感',
        newsletterBody: '获取云南季节路线建议和定制行程更新。',
        subscribe: '订阅',
        copyright: '云南旅行。静态预览站点。',
      },
    },
  },
};
