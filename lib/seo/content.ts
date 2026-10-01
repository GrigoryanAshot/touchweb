import type { Locale } from "@/lib/seo/site";

export type FaqItem = { question: string; answer: string };

export type PageCopy = {
  title: string;
  description: string;
  keywords: string[];
  eyebrow: string;
  h1: string;
  lead: string;
  points: { id?: string; title: string; text: string }[];
  faqs: FaqItem[];
};

export type ServiceCopy = {
  key: "webDevelopment" | "ecommerce" | "uiux" | "seo";
  path: string;
  name: string;
  description: string;
  alternateName?: string[];
};

export type LocaleContent = {
  languageLabel: string;
  navLabel: string;
  faqTitle: string;
  cta: string;
  contactTitle: string;
  footerBlurb: string;
  rights: string;
  status: { completed: string; pending: string };
  pages: {
    home: PageCopy;
    webDevelopment: PageCopy;
    ecommerce: PageCopy;
    seo: PageCopy;
    portfolio: PageCopy;
  };
  services: ServiceCopy[];
};

export const marketKeywords: Record<Locale, string[]> = {
  hy: [
    "կայքերի պատրաստում",
    "վեբ կայքերի պատրաստում",
    "կայքերի պատվեր",
    "kayqeri patrastum Yerevan",
    "web kayqeri patrastum",
    "kayqeri patver",
  ],
  ru: ["создание сайтов ереван", "разработка веб сайтов армения"],
  en: ["web development agency yerevan", "website design armenia"],
};

const projects = [
  { name: "My Office", url: "https://my-office.am", status: "completed" as const },
  { name: "Dommi", url: "https://dommi.am", status: "completed" as const },
  { name: "GAOS", url: "https://gaos.am", status: "completed" as const },
  { name: "Gmind Partners", url: "https://gmind.am", status: "completed" as const },
  { name: "Jan Pho", status: "pending" as const },
  { name: "Armonia Clinic", status: "pending" as const },
];

export function getProjects() {
  return projects;
}

const content: Record<Locale, LocaleContent> = {
  hy: {
    languageLabel: "Լեզու",
    navLabel: "Գլխավոր նավիգացիա",
    faqTitle: "Հաճախ տրվող հարցեր կայքերի պատրաստման մասին",
    cta: "Սկսել նախագիծը",
    contactTitle: "Կապ",
    footerBlurb: "Վեբ գործակալություն Երևանում։ Կայքեր, խանութներ և SEO՝ գրված զրոյից։",
    rights: "Touch Web Agency։ Բոլոր իրավունքները պաշտպանված են։",
    status: { completed: "Ավարտված", pending: "Ընթացքում" },
    services: [
      {
        key: "webDevelopment",
        path: "services/web-development",
        name: "Վեբ կայքերի պատրաստում",
        description:
          "Բիզնես կայքերի և վեբ հավելվածների պատրաստում Երևանում՝ անհատական դիզայնով, ադապտիվ ծրագրավորմամբ և հիմնական SEO-ով։",
        alternateName: ["կայքերի պատրաստում", "web kayqeri patrastum", "kayqeri patrastum Yerevan"],
      },
      {
        key: "ecommerce",
        path: "services/ecommerce",
        name: "Էլեկտրոնային առևտուր",
        description:
          "Առցանց խանութ՝ կատալոգով, զամբյուղով, վճարման ինտեգրմամբ և պատվերների կառավարմամբ։ Սկսած 450,000 դրամից։",
      },
      {
        key: "uiux",
        path: "services/web-development#ui-ux",
        name: "UI/UX դիզայն",
        description:
          "Ինտերֆեյս և օգտագործողի փորձ, որոնք համապատասխանում են բրենդին և հեշտացնում են դիմումը, զանգը կամ գնումը։",
      },
      {
        key: "seo",
        path: "services/seo-optimization",
        name: "SEO ծառայություններ",
        description:
          "Տեխնիկական SEO, բազմալեզու էջեր և արագություն՝ հայերեն, ռուսերեն և անգլերեն որոնման համար։",
        alternateName: ["kayqeri patver", "կայքերի պատվեր"],
      },
    ],
    pages: {
      home: {
        title: "Կայքերի պատրաստում Երևանում | Touch Web Agency",
        description:
          "Կայքերի պատրաստում Երևանում՝ վեբ կայքերի պատրաստում և կայքերի պատվեր Touch Web Agency-ում։ Kayqeri patrastum Yerevan.",
        keywords: [],
        eyebrow: "Touch Web Agency · Երևան",
        h1: "Կայքերի պատրաստում Երևանում",
        lead: "Պատրաստում ենք բիզնես կայքեր, առցանց խանութներ և վեբ հավելվածներ անհատական կոդով։ Կայքերի պատվերը ներառում է դիզայն, ադապտիվ տարբերակ և հիմնական SEO՝ հայերեն, ռուսերեն և անգլերեն։",
        points: [
          { title: "1. Պարզաբանում", text: "Ֆիքսում ենք նպատակը, լսարանը և էջերի ցանկը, նախքան դիզայնը սկսելը։" },
          { title: "2. Դիզայն", text: "Ինտերֆեյսը համապատասխանում է բրենդին և հեշտացնում է զանգը, նամակը կամ գնումը։" },
          { title: "3. Մշակում", text: "Կայքը գրվում է զրոյից։ Չենք հենվում WordPress թեմաների կամ էջ կառուցողների վրա։" },
          { title: "4. Թողարկում", text: "Մնում ենք թողարկումից հետո՝ արագության, բովանդակության և աջակցության համար։" },
        ],
        faqs: [
          {
            question: "Որքա՞ն արժե կայքերի պատրաստումը Երևանում։",
            answer:
              "Լենդինգ էջը սկսվում է 50,000 դրամից, բիզնես կայքը՝ 200,000 դրամից, իսկ էլեկտրոնային խանութը՝ 450,000 դրամից։ Վերջնական գինը կախված է էջերի քանակից և ինտեգրումներից։",
          },
          {
            question: "Ի՞նչ է ներառում վեբ կայքերի պատրաստումը։",
            answer:
              "Դիզայն, ադապտիվ ծրագրավորում, կապի ձև, հիմնական SEO և աջակցություն թողարկումից հետո։ Կայքերը գրում ենք զրոյից՝ առանց պատրաստի շաբլոնների։",
          },
          {
            question: "Ինչպե՞ս ձևակերպել կայքերի պատվեր։",
            answer:
              "Գրեք touchwebagency@gmail.com կամ զանգահարեք +374 95 147963։ Կքննարկենք նպատակը, լեզուները և ժամկետը, ապա կֆիքսենք աշխատանքի ծավալը։",
          },
          {
            question: "Կայքը կարո՞ղ է լինել հայերեն, ռուսերեն և անգլերեն։",
            answer:
              "Այո։ Յուրաքանչյուր լեզու ստանում է իր հասցեն՝ /hy, /ru և /en, ինքնահղվող canonical և hreflang կապերով։ Լռելյայն տարբերակը հայերենն է։",
          },
          {
            question: "Որքա՞ն ժամանակ է պետք կայք պատրաստելու համար։",
            answer:
              "Լենդինգ էջը սովորաբար տևում է մի քանի շաբաթ։ Բազմաէջ կայքի և խանութի ժամկետը ֆիքսում ենք պատվերից առաջ՝ ըստ էջերի և ինտեգրումների։",
          },
        ],
      },
      webDevelopment: {
        title: "Վեբ կայքերի պատրաստում Երևանում | Touch Web Agency",
        description:
          "Վեբ կայքերի պատրաստում Երևանում՝ բիզնես կայք, UI/UX և ադապտիվ ծրագրավորում։ Կայքերի պատվեր՝ սկսած 50,000 դրամից։",
        keywords: ["վեբ կայք Երևան", "բիզնես կայք", "UI/UX դիզայն"],
        eyebrow: "Ծառայություն",
        h1: "Վեբ կայքերի պատրաստում",
        lead: "Բիզնես կայք մինչև 15 էջ՝ հատուկ դիզայնով, բովանդակության կառավարմամբ և բազմալեզու կառուցվածքով։ Լենդինգ էջերը սկսվում են 50,000 դրամից, բիզնես կայքերը՝ 200,000 դրամից։",
        points: [
          { title: "Բիզնես կայք", text: "Մինչև 15 էջ, կապի ձևեր, բլոգի հնարավորություն և 1 տարվա աջակցություն բիզնես փաթեթում։" },
          { title: "Արագ և ադապտիվ", text: "Էջերը աշխատում են հեռախոսի, պլանշետի և համակարգչի վրա, առանց դասավորության թռիչքի։" },
          {
            id: "ui-ux",
            title: "UI/UX դիզայն",
            text: "Կառուցում ենք պարզ ուղի՝ առաջին էկրանից մինչև զանգ, նամակ կամ հայտ։ Դիզայնը մաս է կայքի պատրաստման, ոչ թե առանձին շաբլոն։",
          },
          { title: "Տեխնոլոգիա", text: "React, Next.js, Node.js, Python կամ PHP՝ ըստ նախագծի։ Տվյալների բազա և հոստինգ ընտրում ենք բեռի տակից ելնելով։" },
        ],
        faqs: [
          {
            question: "Բիզնես կայքը ներառո՞ւմ է բովանդակության կառավարում։",
            answer:
              "Այո։ Բիզնես փաթեթը ներառում է մինչև 15 էջ, հատուկ դիզայն, բովանդակության կառավարում, առաջադեմ SEO և 1 տարվա աջակցություն։",
          },
          {
            question: "Կարո՞ղ եք վերակառուցել արդեն գոյություն ունեցող կայքը։",
            answer:
              "Այո։ Կարող ենք պահել բրենդը և վերակառուցել էջերը այնպես, որ արագությունը, հեռախոսային տարբերակը և որոնումը լինեն կայուն։",
          },
          {
            question: "UI/UX դիզայնը առանձի՞ն է վաճառվում։",
            answer:
              "Դիզայնը մտնում է կայքերի պատրաստման մեջ։ Եթե պետք է միայն ինտերֆեյս, ծավալը և գինը ֆիքսում ենք առանձին քննարկմամբ։",
          },
        ],
      },
      ecommerce: {
        title: "Էլեկտրոնային խանութի պատրաստում Երևանում | Touch Web Agency",
        description:
          "Էլեկտրոնային խանութ Երևանում՝ կատալոգ, զամբյուղ, վճարում և պատվերների վահանակ։ Պատրաստումը սկսվում է 450,000 դրամից։",
        keywords: ["առցանց խանութ", "ինտերնետ խանութ Երևան", "էլեկտրոնային առևտուր"],
        eyebrow: "Ծառայություն",
        h1: "Էլեկտրոնային խանութի պատրաստում",
        lead: "Խանութը ներառում է կատալոգ, զամբյուղ, վճարման դարպաս, պահեստ և հաճախորդի հաշիվ։ Փաթեթը սկսվում է 450,000 դրամից և ներառում է 1 տարվա աջակցություն։",
        points: [
          { title: "Կատալոգ", text: "Կատեգորիաներ, ապրանքի էջեր և որոնում, որը հեշտ է թարմացնել առանց մշակողի։" },
          { title: "Վճարում", text: "Զամբյուղ, պատվերի ձևակերպում և վճարման ինտեգրում Հայաստանում գործող դարպասների հետ։" },
          { title: "Կառավարում", text: "Պատվերներ, պահեստ և ադմինիստրատորի վահանակ՝ ամենօրյա աշխատանքի համար։" },
          { title: "Վաճառք որոնումից", text: "Ապրանքի էջերը ստանում են եզակի վերնագիր, նկարագրություն և արագ բեռնում։" },
        ],
        faqs: [
          {
            question: "Ի՞նչ վճարումներ կարելի է միացնել։",
            answer:
              "Միացնում ենք Հայաստանում հասանելի վճարման դարպասները։ Կոնկրետ մատակարարը ընտրում ենք պատվերի ժամանակ՝ ըստ ձեր բանկի և արժույթի։",
          },
          {
            question: "Քանի՞ ապրանք կարող է լինել կատալոգում։",
            answer:
              "Կատալոգի չափը սահմանափակված չէ ֆիքսված թվով։ Կառուցվածքը ընտրում ենք ըստ կատեգորիաների և զտիչների, որոնք ձեզ իրոք պետք են։",
          },
          {
            question: "Խանութը կլինի՞ նաև հեռախոսի վրա։",
            answer:
              "Այո։ Կատալոգը, զամբյուղը և վճարումը աշխատում են հեռախոսի վրա նույն տվյալներով, առանց առանձին հավելվածի։",
          },
        ],
      },
      seo: {
        title: "SEO օպտիմալացում կայքերի համար | Touch Web Agency",
        description:
          "SEO Երևանում և Հայաստանում՝ տեխնիկական օպտիմալացում, հայերեն, ռուսերեն և անգլերեն էջեր, արագություն և ինդեքսավորում։",
        keywords: ["SEO Երևան", "կայքի օպտիմալացում", "բազմալեզու SEO"],
        eyebrow: "Ծառայություն",
        h1: "SEO օպտիմալացում",
        lead: "Կապում ենք տեխնիկական SEO-ն էջի բովանդակության հետ՝ հայերեն, ռուսերեն և անգլերեն որոնումներում երևալու համար։ Աշխատանքը ներառում է վերնագրեր, canonical, hreflang, քարտեզ և կառուցվածքային տվյալներ։",
        points: [
          { title: "Երեք շուկա", text: "Առանձին հասցեներ /hy, /ru և /en, x-default-ով դեպի հայերեն տարբերակ։" },
          { title: "Տեխնիկական հիմք", text: "Ինդեքսավորում, sitemap, արագ պատկերներ և կայուն դասավորություն՝ առանց շաբլոնային աղմուկի։" },
          { title: "Բովանդակություն", text: "Յուրաքանչյուր ծառայություն ունի իր էջը, վերնագիրը և հարցերը, որպեսզի չմրցի գլխավոր էջի հետ։" },
          { title: "Չափում", text: "Կապում ենք էջերը իրական հայտերի հետ՝ զանգ, նամակ և կայքերի պատվեր, ոչ միայն այցելություն։" },
        ],
        faqs: [
          {
            question: "SEO-ն մտնո՞ւմ է կայքի պատրաստման մեջ։",
            answer:
              "Բազային SEO-ն մտնում է լենդինգի և բիզնես կայքի փաթեթների մեջ։ Առանձին օպտիմալացումը՝ բովանդակություն, կառուցվածք և բազմալեզու էջեր, քննարկվում է որպես առանձին աշխատանք։",
          },
          {
            question: "Կարո՞ղ եք առաջ մղել արդեն գործող կայքը։",
            answer:
              "Այո, եթե կայքը թույլ է տալիս ուղղել վերնագրերը, արագությունը և ինդեքսավորումը։ Եթե հիմքը շաբլոն է, երբեմն ավելի ճիշտ է վերակառուցել էջերը։",
          },
          {
            question: "Որ լեզուն է լռելյայն որոնման համար։",
            answer:
              "x-default-ը ուղղված է հայերեն տարբերակին։ Ռուսերեն և անգլերեն էջերն ունեն իրենց canonical հասցեն և հղվում են միմյանց hreflang-ով։",
          },
        ],
      },
      portfolio: {
        title: "Պորտֆոլիո | Touch Web Agency Երևան",
        description:
          "Touch Web Agency-ի աշխատանքները՝ My Office, Dommi, GAOS և Gmind Partners։ Կայքերի պատրաստում Երևանում՝ անհատական կոդով։",
        keywords: ["պորտֆոլիո", "վեբ նախագծեր Երևան"],
        eyebrow: "Աշխատանքներ",
        h1: "Պորտֆոլիո",
        lead: "Ընտրված կայքեր, որոնք հավաքվել են զրոյից՝ առանց պատրաստի թեմայի։ Ամեն նախագիծ ունի իր կառուցվածքը, ոչ թե ընդհանուր շաբլոն։",
        points: [
          { title: "Անհատական կոդ", text: "Չենք տեղադրում պատրաստի թեմա և չենք թաքցնում այն ձեր բրենդի տակ։" },
          { title: "Գործող կայքեր", text: "Ավարտված աշխատանքներին կարելի է անցնել ուղիղ հղումով և տեսնել կենդանի տարբերակը։" },
        ],
        faqs: [
          {
            question: "Կարո՞ղ եմ տեսնել նմանատիպ կայք իմ ոլորտի համար։",
            answer:
              "Այո։ Գրեք ոլորտը և կուղարկենք մոտ օրինակներ, կամ կքննարկենք, թե պորտֆոլիոյի որ կառուցվածքն է համապատասխանում ձեր խնդրին։",
          },
          {
            question: "Նոր նախագիծը կհայտնվի՞ պորտֆոլիոյում։",
            answer:
              "Միայն ձեր համաձայնությամբ։ Հաճախորդի անունը և հղումը հրապարակում ենք թողարկումից հետո, եթե դա ձեզ հարմար է։",
          },
        ],
      },
    },
  },
  ru: {
    languageLabel: "Язык",
    navLabel: "Основная навигация",
    faqTitle: "Частые вопросы о создании сайтов",
    cta: "Начать проект",
    contactTitle: "Контакты",
    footerBlurb: "Веб-студия в Ереване. Сайты, магазины и SEO на заказ, без шаблонов.",
    rights: "Touch Web Agency. Все права защищены.",
    status: { completed: "Завершён", pending: "В работе" },
    services: [
      {
        key: "webDevelopment",
        path: "services/web-development",
        name: "Разработка веб сайтов",
        description:
          "Создание сайтов в Ереване: бизнес-сайты и веб-приложения с индивидуальным дизайном, адаптивной вёрсткой и базовым SEO.",
      },
      {
        key: "ecommerce",
        path: "services/ecommerce",
        name: "Интернет-магазины",
        description:
          "Интернет-магазин с каталогом, корзиной, оплатой и управлением заказами. Стоимость от 450 000 драмов.",
      },
      {
        key: "uiux",
        path: "services/web-development#ui-ux",
        name: "UI/UX дизайн",
        description:
          "Интерфейс и сценарий, которые ведут к звонку, заявке или покупке и совпадают с брендом.",
      },
      {
        key: "seo",
        path: "services/seo-optimization",
        name: "SEO-услуги",
        description:
          "Техническое SEO, скорость и отдельные страницы на армянском, русском и английском для поиска в Армении.",
      },
    ],
    pages: {
      home: {
        title: "Создание сайтов в Ереване | Touch Web Agency",
        description:
          "Создание сайтов в Ереване и разработка веб сайтов в Армении. Touch Web Agency: дизайн, магазины и SEO на заказ.",
        keywords: [],
        eyebrow: "Touch Web Agency · Ереван",
        h1: "Создание сайтов в Ереване",
        lead: "Делаем бизнес-сайты, интернет-магазины и веб-приложения на заказ. Разработка веб сайтов в Армении включает дизайн, мобильную версию и базовое SEO на армянском, русском и английском.",
        points: [
          { title: "1. Задача", text: "Фиксируем цель, аудиторию и состав страниц до начала дизайна." },
          { title: "2. Дизайн", text: "Интерфейс совпадает с брендом и упрощает звонок, письмо или покупку." },
          { title: "3. Разработка", text: "Пишем сайт с нуля. Не ставим готовые темы WordPress и конструкторы страниц." },
          { title: "4. Запуск", text: "Остаёмся после публикации: скорость, правки и поддержка." },
        ],
        faqs: [
          {
            question: "Сколько стоит создание сайта в Ереване?",
            answer:
              "Лендинг начинается от 50 000 драмов, бизнес-сайт — от 200 000 драмов, интернет-магазин — от 450 000 драмов. Итог зависит от числа страниц и интеграций.",
          },
          {
            question: "Что входит в разработку веб сайтов?",
            answer:
              "Дизайн, адаптивная вёрстка, форма связи, базовое SEO и поддержка после запуска. Сайты пишем с нуля, без готовых шаблонов.",
          },
          {
            question: "Как заказать сайт?",
            answer:
              "Напишите на touchwebagency@gmail.com или позвоните +374 95 147963. Обсудим задачу, языки и срок, затем зафиксируем объём.",
          },
          {
            question: "Сайт будет на армянском, русском и английском?",
            answer:
              "Да. У каждого языка свой адрес: /hy, /ru и /en, со своим canonical и связью hreflang. Версия по умолчанию — армянская.",
          },
          {
            question: "Сколько времени занимает разработка?",
            answer:
              "Лендинг обычно занимает несколько недель. Срок многостраничного сайта и магазина фиксируем до старта, по страницам и интеграциям.",
          },
        ],
      },
      webDevelopment: {
        title: "Разработка веб сайтов в Армении | Touch Web Agency",
        description:
          "Разработка веб сайтов в Армении: бизнес-сайт, UI/UX и адаптивная вёрстка. Создание сайтов в Ереване от 50 000 драмов.",
        keywords: ["бизнес сайт Ереван", "заказать сайт", "UI/UX дизайн"],
        eyebrow: "Услуга",
        h1: "Разработка веб сайтов в Армении",
        lead: "Бизнес-сайт до 15 страниц с собственным дизайном, управлением содержанием и тремя языками. Лендинг — от 50 000 драмов, бизнес-сайт — от 200 000 драмов.",
        points: [
          { title: "Бизнес-сайт", text: "До 15 страниц, формы, возможность блога и год поддержки в бизнес-пакете." },
          { title: "Скорость и телефон", text: "Страницы одинаково работают на телефоне, планшете и компьютере." },
          {
            id: "ui-ux",
            title: "UI/UX дизайн",
            text: "Строим путь от первого экрана до звонка, письма или заявки. Дизайн входит в разработку сайта, а не прикладывается шаблоном.",
          },
          { title: "Стек", text: "React, Next.js, Node.js, Python или PHP — по задаче. Базу и хостинг выбираем под нагрузку." },
        ],
        faqs: [
          {
            question: "В бизнес-сайт входит управление содержанием?",
            answer:
              "Да. Бизнес-пакет включает до 15 страниц, индивидуальный дизайн, систему управления содержанием, расширенное SEO и год поддержки.",
          },
          {
            question: "Можно переделать уже существующий сайт?",
            answer:
              "Да. Можем сохранить бренд и пересобрать страницы так, чтобы скорость, мобильная версия и индексация были устойчивыми.",
          },
          {
            question: "UI/UX заказывается отдельно?",
            answer:
              "Дизайн входит в создание сайта. Если нужен только интерфейс, объём и стоимость фиксируем отдельным обсуждением.",
          },
        ],
      },
      ecommerce: {
        title: "Интернет-магазин в Ереване | Touch Web Agency",
        description:
          "Создание интернет-магазина в Ереване: каталог, корзина, оплата и заказы. Разработка от 450 000 драмов.",
        keywords: ["интернет-магазин Ереван", "создание магазина", "электронная коммерция"],
        eyebrow: "Услуга",
        h1: "Интернет-магазин в Ереване",
        lead: "Магазин включает каталог, корзину, платёжный шлюз, склад и личный кабинет. Пакет начинается от 450 000 драмов и включает год поддержки.",
        points: [
          { title: "Каталог", text: "Категории, карточки товаров и структура, которую можно обновлять без разработчика." },
          { title: "Оплата", text: "Корзина, оформление заказа и подключение платёжного шлюза, доступного в Армении." },
          { title: "Управление", text: "Заказы, склад и панель администратора для ежедневной работы." },
          { title: "Поиск", text: "У карточек свои заголовки, описания и быстрая загрузка." },
        ],
        faqs: [
          {
            question: "Какие оплаты можно подключить?",
            answer:
              "Подключаем платёжные шлюзы, доступные в Армении. Конкретного провайдера выбираем при заказе, по банку и валюте.",
          },
          {
            question: "Есть ли лимит на число товаров?",
            answer:
              "Фиксированного лимита нет. Структуру каталога выбираем по категориям и фильтрам, которые вам действительно нужны.",
          },
          {
            question: "Магазин будет работать на телефоне?",
            answer:
              "Да. Каталог, корзина и оплата работают на телефоне с теми же данными, без отдельного приложения.",
          },
        ],
      },
      seo: {
        title: "SEO-оптимизация сайтов в Армении | Touch Web Agency",
        description:
          "SEO в Ереване и Армении: технические правки, страницы на трёх языках, скорость и индексация для создания сайтов.",
        keywords: ["SEO Ереван", "продвижение сайта Армения", "мультиязычное SEO"],
        eyebrow: "Услуга",
        h1: "SEO-оптимизация сайтов",
        lead: "Связываем техническое SEO с текстом страницы, чтобы сайт находили на армянском, русском и английском. В работу входят заголовки, canonical, hreflang, карта сайта и разметка.",
        points: [
          { title: "Три рынка", text: "Отдельные адреса /hy, /ru и /en. x-default ведёт на армянскую версию." },
          { title: "Техническая база", text: "Индексация, sitemap, быстрые изображения и стабильная вёрстка." },
          { title: "Страницы услуг", text: "У каждой услуги своя страница и свои вопросы, чтобы не конкурировать с главной." },
          { title: "Заявки", text: "Смотрим не только визиты, а звонки, письма и заказы сайта." },
        ],
        faqs: [
          {
            question: "SEO входит в создание сайта?",
            answer:
              "Базовое SEO входит в лендинг и бизнес-сайт. Отдельная оптимизация — структура, тексты и мультиязычные страницы — обсуждается как отдельная работа.",
          },
          {
            question: "Можно продвигать уже работающий сайт?",
            answer:
              "Да, если на сайте можно исправить заголовки, скорость и индексацию. Если основа — тяжёлый шаблон, иногда честнее пересобрать страницы.",
          },
          {
            question: "Какая языковая версия основная?",
            answer:
              "x-default указывает на армянскую версию. Русские и английские страницы имеют свой canonical и связаны через hreflang.",
          },
        ],
      },
      portfolio: {
        title: "Портфолио веб-студии в Ереване | Touch Web Agency",
        description:
          "Работы Touch Web Agency: My Office, Dommi, GAOS и Gmind Partners. Создание сайтов в Ереване на заказ.",
        keywords: ["портфолио", "примеры сайтов Ереван"],
        eyebrow: "Работы",
        h1: "Портфолио",
        lead: "Сайты, собранные с нуля, без готовой темы. У каждого проекта своя структура, а не общий шаблон.",
        points: [
          { title: "Свой код", text: "Не ставим готовую тему и не прячем её под вашим брендом." },
          { title: "Живые сайты", text: "Завершённые работы открываются по прямой ссылке." },
        ],
        faqs: [
          {
            question: "Можно посмотреть пример из моей сферы?",
            answer:
              "Да. Напишите сферу, и мы отправим близкие примеры или обсудим, какая структура из портфолио подходит вашей задаче.",
          },
          {
            question: "Новый проект попадёт в портфолио?",
            answer:
              "Только с вашего согласия. Имя и ссылку публикуем после запуска, если вам это удобно.",
          },
        ],
      },
    },
  },
  en: {
    languageLabel: "Language",
    navLabel: "Primary",
    faqTitle: "Web development questions",
    cta: "Start a project",
    contactTitle: "Contact",
    footerBlurb: "Web development agency in Yerevan. Custom websites, stores, and SEO.",
    rights: "Touch Web Agency. All rights reserved.",
    status: { completed: "Completed", pending: "In progress" },
    services: [
      {
        key: "webDevelopment",
        path: "services/web-development",
        name: "Web Development",
        description:
          "Website design and custom web development in Yerevan: business sites and web apps with responsive pages and baseline SEO.",
      },
      {
        key: "ecommerce",
        path: "services/ecommerce",
        name: "E-commerce Development",
        description:
          "Online stores with a catalog, cart, payment integration, and order management. Projects start at AMD 450,000.",
      },
      {
        key: "uiux",
        path: "services/web-development#ui-ux",
        name: "UI/UX Design",
        description:
          "Interface and user flows that match the brand and make a call, message, or purchase straightforward.",
      },
      {
        key: "seo",
        path: "services/seo-optimization",
        name: "SEO Services",
        description:
          "Technical SEO, page speed, and separate Armenian, Russian, and English URLs for searches in Armenia.",
      },
    ],
    pages: {
      home: {
        title: "Web Development Agency in Yerevan | Touch Web Agency",
        description:
          "Web development agency in Yerevan. Website design in Armenia, online stores, and SEO from Touch Web Agency.",
        keywords: [],
        eyebrow: "Touch Web Agency · Yerevan",
        h1: "Web Development Agency in Yerevan",
        lead: "We design and build business websites, online stores, and web applications in custom code. Website design in Armenia includes a responsive layout and baseline SEO in Armenian, Russian, and English.",
        points: [
          { title: "1. Discover", text: "We lock the goal, audience, and page list before design starts." },
          { title: "2. Design", text: "The interface matches the brand and shortens the path to a call, email, or purchase." },
          { title: "3. Develop", text: "We write the site from scratch. No WordPress theme and no page builder." },
          { title: "4. Launch", text: "We stay after go-live for speed, content edits, and support." },
        ],
        faqs: [
          {
            question: "How much does a website cost in Yerevan?",
            answer:
              "A landing page starts at AMD 50,000, a business website at AMD 200,000, and an online store at AMD 450,000. The final price depends on page count and integrations.",
          },
          {
            question: "What does web development include?",
            answer:
              "Design, responsive build, a contact form, baseline SEO, and support after launch. We write sites from scratch, without a ready-made template.",
          },
          {
            question: "How do I start a project?",
            answer:
              "Email touchwebagency@gmail.com or call +374 95 147963. We confirm the goal, languages, and timeline, then agree the scope.",
          },
          {
            question: "Can the site run in Armenian, Russian, and English?",
            answer:
              "Yes. Each language has its own URL under /hy, /ru, and /en, with a self-referencing canonical and hreflang links. The default version is Armenian.",
          },
          {
            question: "How long does a website take?",
            answer:
              "A landing page usually takes a few weeks. We set the timeline for a multi-page site or store before work starts, based on pages and integrations.",
          },
        ],
      },
      webDevelopment: {
        title: "Website Design in Armenia | Touch Web Agency",
        description:
          "Website design in Armenia and custom web development in Yerevan. Business sites with UI/UX, from AMD 50,000.",
        keywords: ["website design Yerevan", "custom web development", "UI/UX design Armenia"],
        eyebrow: "Service",
        h1: "Website Design in Armenia",
        lead: "A business website of up to 15 pages, with custom design, content management, and a multilingual structure. Landing pages start at AMD 50,000. Business websites start at AMD 200,000.",
        points: [
          { title: "Business website", text: "Up to 15 pages, contact forms, an optional blog, and one year of support on the business package." },
          { title: "Fast on every screen", text: "Pages work on phones, tablets, and desktops with a stable layout." },
          {
            id: "ui-ux",
            title: "UI/UX design",
            text: "We design the path from the first screen to a call, email, or enquiry. Design is part of the build, not a pasted template.",
          },
          { title: "Stack", text: "React, Next.js, Node.js, Python, or PHP, chosen per project. Database and hosting follow the expected load." },
        ],
        faqs: [
          {
            question: "Does a business website include a CMS?",
            answer:
              "Yes. The business package includes up to 15 pages, custom design, content management, stronger SEO, and one year of support.",
          },
          {
            question: "Can you rebuild an existing website?",
            answer:
              "Yes. We can keep the brand and rebuild the pages so speed, the mobile layout, and indexing stay reliable.",
          },
          {
            question: "Is UI/UX sold separately?",
            answer:
              "Design is included in website development. If you only need an interface, we agree the scope and price separately.",
          },
        ],
      },
      ecommerce: {
        title: "E-commerce Development in Yerevan | Touch Web Agency",
        description:
          "E-commerce development in Yerevan: catalog, cart, payments, and orders. Online stores start at AMD 450,000.",
        keywords: ["online store Armenia", "e-commerce Yerevan", "shopping website"],
        eyebrow: "Service",
        h1: "E-commerce Development in Yerevan",
        lead: "The store includes a catalog, cart, payment gateway, inventory, and customer accounts. The package starts at AMD 450,000 and includes one year of support.",
        points: [
          { title: "Catalog", text: "Categories and product pages your team can update without a developer on every edit." },
          { title: "Checkout", text: "Cart, checkout, and a payment gateway available in Armenia." },
          { title: "Operations", text: "Orders, inventory, and an admin dashboard for day-to-day work." },
          { title: "Product pages", text: "Each product can carry its own title, description, and a fast load." },
        ],
        faqs: [
          {
            question: "Which payment methods can you connect?",
            answer:
              "We connect payment gateways available in Armenia. The provider is chosen with the order, based on your bank and currency.",
          },
          {
            question: "Is there a product limit?",
            answer:
              "There is no fixed product cap. We shape the catalog around the categories and filters you actually need.",
          },
          {
            question: "Does the store work on a phone?",
            answer:
              "Yes. Catalog, cart, and checkout work on a phone with the same data, without a separate app.",
          },
        ],
      },
      seo: {
        title: "SEO Services in Armenia | Touch Web Agency",
        description:
          "SEO services in Armenia: technical fixes, Armenian, Russian, and English URLs, speed, and indexation for a Yerevan web agency.",
        keywords: ["SEO Yerevan", "technical SEO Armenia", "multilingual SEO"],
        eyebrow: "Service",
        h1: "SEO Services in Armenia",
        lead: "We connect technical SEO to the page itself so the site can be found in Armenian, Russian, and English search. The work covers titles, canonicals, hreflang, the sitemap, and structured data.",
        points: [
          { title: "Three markets", text: "Separate URLs under /hy, /ru, and /en. x-default points at the Armenian version." },
          { title: "Technical base", text: "Indexation, sitemap, fast images, and a layout that does not jump while loading." },
          { title: "Service pages", text: "Each service has its own URL, title, and questions so it does not compete with the homepage." },
          { title: "Enquiries", text: "We look at calls, emails, and project requests, not visits alone." },
        ],
        faqs: [
          {
            question: "Is SEO included when you build a site?",
            answer:
              "Baseline SEO is included in the landing page and business website packages. A separate engagement covers structure, copy, and the multilingual pages.",
          },
          {
            question: "Can you improve a site that is already live?",
            answer:
              "Yes, when titles, speed, and indexation can be fixed on the current site. If the base is a heavy template, rebuilding the pages is sometimes the sounder path.",
          },
          {
            question: "Which language is the default for search?",
            answer:
              "x-default targets the Armenian version. Russian and English pages keep their own canonical URL and point to each other with hreflang.",
          },
        ],
      },
      portfolio: {
        title: "Web Design Portfolio in Yerevan | Touch Web Agency",
        description:
          "Touch Web Agency portfolio: My Office, Dommi, GAOS, and Gmind Partners. Custom website design in Armenia.",
        keywords: ["web design portfolio", "Yerevan web projects"],
        eyebrow: "Work",
        h1: "Portfolio",
        lead: "Selected websites built from scratch, without a ready-made theme. Each project has its own structure.",
        points: [
          { title: "Custom code", text: "We do not install a theme and restyle the logo on top of it." },
          { title: "Live sites", text: "Finished work is linked directly so you can open the real website." },
        ],
        faqs: [
          {
            question: "Can I see work close to my industry?",
            answer:
              "Yes. Send the industry and we will share the closest examples, or talk through which structure fits the job.",
          },
          {
            question: "Will a new project be listed here?",
            answer:
              "Only with your agreement. We publish the name and link after launch when you are comfortable with that.",
          },
        ],
      },
    },
  },
};

export function getContent(locale: Locale): LocaleContent {
  return content[locale];
}
