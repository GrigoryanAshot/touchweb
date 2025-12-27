// Translation system for Touch Web Agency
const translations = {
    en: {
        // Navigation
        nav: {
            home: "Home",
            about: "About",
            gallery: "Portfolio",
            services: "Services",
            testimonials: "Testimonials",
            clients: "Clients",
            pricing: "Services and Pricing",
            contact: "Contact"
        },
        // Banner
        banner: {
            title: "TOUCH WEB AGENCY",
            subtitle: "Professional Web Development Services",
            cta: "START YOUR PROJECT TODAY"
        },
        // About Section
        about: {
            title: "ABOUT US",
            heading: "How We Help You Build Your Digital Presence",
            subtitle: "We are a leading web development agency based in Armenia, specializing in creating modern, responsive, and high-performance websites and web applications.",
            html5: {
                title: "Modern Technologies",
                desc: "We use the latest web technologies including HTML5, CSS3, JavaScript, and modern frameworks to build cutting-edge solutions."
            },
            easy: {
                title: "User-Friendly Design",
                desc: "Our designs are intuitive and user-friendly, ensuring your visitors have the best experience possible."
            },
            responsive: {
                title: "Fully Responsive",
                desc: "All our websites are fully responsive and work perfectly on all devices - desktop, tablet, and mobile."
            },
            rocket: {
                title: "Fast Performance",
                desc: "We optimize every website for speed and performance, ensuring fast loading times and excellent user experience."
            },
            techStack: {
                title: "TECH STACK",
                heading: "The technologies we use to build from scratch",
                subtitle: "No WordPress, no page builders. We write hand-crafted code using modern frontend and backend technologies tailored to each project.",
                frontend: {
                    title: "Frontend",
                    desc: "HTML5, CSS3, modern JavaScript (ES6+), React, Vue.js, Angular, Next.js and other leading UI frameworks and libraries."
                },
                backend: {
                    title: "Backend",
                    desc: "Node.js (Express, NestJS), Python (Django, Flask, FastAPI), PHP (Laravel, Symfony) and REST/GraphQL APIs for scalable, secure applications."
                },
                data: {
                    title: "Data & Infrastructure",
                    desc: "Relational and NoSQL databases, authentication, caching, and cloud hosting setups on platforms like AWS, Azure, and others."
                },
                quality: {
                    title: "Quality & Performance",
                    desc: "Responsive design, accessibility best practices, performance optimization, SEO-friendly HTML, and long-term maintainability."
                }
            },
            ourStory: {
                title: "OUR STORY",
                heading: "From a small studio to a full-service web agency",
                subtitle: "Touch Web Agency started as a small team of passionate developers and designers. Today, we are a full-service web agency helping businesses of all sizes build modern, fast, and user-focused digital products.",
                paragraph1: "Over the years, we have worked with startups, local businesses, and international companies. Our mission is simple: to combine clean design, modern technology, and a deep understanding of your business to create websites and web applications that actually move the needle.",
                paragraph2: "Every project is handled by a dedicated team that guides you from the first idea to launch and beyond. We focus on long-term partnerships, transparent communication, and measurable results."
            },
            ourValues: {
                title: "OUR VALUES",
                heading: "What drives the way we work",
                care: {
                    title: "Care for your business",
                    desc: "We treat every project as if it were our own brand, paying attention to details that make a real difference for your customers."
                },
                smart: {
                    title: "Smart, simple solutions",
                    desc: "We prefer clear, maintainable solutions over unnecessary complexity, so your website stays easy to grow and improve."
                },
                teamwork: {
                    title: "Teamwork & transparency",
                    desc: "You are part of the process. We share progress, gather feedback, and build together instead of disappearing until launch day."
                },
                results: {
                    title: "Focus on results",
                    desc: "Design and code are only the beginning. We focus on conversions, performance, and long-term value for your business."
                }
            },
            ourProcess: {
                title: "OUR PROCESS",
                heading: "How we bring your project to life",
                subtitle: "A clear and simple process that keeps you informed and involved at every step.",
                discover: {
                    title: "1. Discover",
                    desc: "We start with a deep dive into your goals, audience, and competitors to understand exactly what you need."
                },
                design: {
                    title: "2. Design",
                    desc: "Our designers create clean, modern interfaces that match your brand and make it easy for users to take action."
                },
                develop: {
                    title: "3. Develop",
                    desc: "We build fast, secure, and responsive websites using modern technologies and best coding practices."
                },
                launch: {
                    title: "4. Launch & support",
                    desc: "After launch, we stay with you to monitor, optimize, and support your website as your business grows."
                }
            },
            inNumbers: {
                title: "IN NUMBERS",
                heading: "What we can do for you",
                projectsNumber: "10+",
                projects: "Services we offer",
                clientsNumber: "10+",
                clients: "Satisfied customers",
                yearsNumber: "24/7",
                years: "Support available",
                focus: "Focus on quality & support"
            }
        },
        // Services Section
        services: {
            testimonial: "Touch Web Agency transformed our online presence. Their expertise and professionalism exceeded our expectations.",
            author: "— Client Name, Satisfied Customer",
            title: "BELIEVING",
            heading: "Focusing On What Matters Most",
            subtitle: "We believe in creating digital solutions that not only look great but also drive results for your business.",
            text1: "Our team of experienced developers and designers work together to create websites and web applications that are both beautiful and functional.",
            text2: "We understand that every business is unique, which is why we take the time to understand your needs and create custom solutions tailored to your goals.",
            watchVideo: "WATCH OUR WORK"
        },
        // Testimonials
        testimonials: {
            title: "FEEDBACK",
            heading: "What our clients are saying",
            testimonial1: {
                quote: "Touch Web Agency delivered an outstanding website for our company. The team was professional, responsive, and delivered on time.",
                author: "John Smith - Business Owner"
            },
            testimonial2: {
                quote: "Working with Touch Web Agency was a pleasure. They understood our vision and brought it to life beautifully.",
                author: "Sarah Johnson - Marketing Director"
            },
            testimonial3: {
                quote: "The best web development agency in Armenia. Highly recommended for anyone looking for quality web solutions.",
                author: "Michael Brown - CEO"
            }
        },
        // Clients
        clients: {
            title: "TRUST",
            heading: "Companies who trust our services",
            subtitle: "We are proud to work with businesses of all sizes, from startups to established enterprises."
        },
        // Pricing
        pricing: {
            title: "YOUR CHOICE",
            heading: "We have the right package for you",
            subtitle: "Choose the perfect solution for your business",
            startingFrom: "Starting from",
            landing: {
                name: "Landing Pages",
                subtitle: "High-converting single page websites",
                price: "֏",
                amount: "50,000",
                description: "Perfect for campaigns, product launches, and lead generation",
                features: [
                    "Single page design",
                    "Mobile responsive",
                    "Contact/Lead forms",
                    "Social media integration",
                    "Basic SEO optimization",
                    "Fast loading speed",
                    "6 months support"
                ],
                cta: "GET STARTED"
            },
            business: {
                name: "Business Website",
                subtitle: "Complete online presence for your business",
                price: "֏",
                amount: "200,000",
                description: "Professional multi-page website with CMS",
                features: [
                    "Up to 15 pages",
                    "Custom design & branding",
                    "Content Management System",
                    "Advanced SEO optimization",
                    "Multi-language support",
                    "Blog section",
                    "Contact forms & integrations",
                    "1 year support & maintenance"
                ],
                cta: "GET STARTED"
            },
            ecommerce: {
                name: "E-Commerce",
                subtitle: "Full online store solution",
                price: "֏",
                amount: "450,000",
                description: "Complete e-commerce platform with payment integration",
                features: [
                    "Product catalog & categories",
                    "Shopping cart & checkout",
                    "Payment gateway integration",
                    "Order management system",
                    "Inventory management",
                    "Customer accounts",
                    "Admin dashboard",
                    "1 year support & updates"
                ],
                cta: "GET STARTED"
            }
        },
        // Footer
        footer: {
            copyright: "Made with ❤️ by Touch Web Agency, Armenia",
            companyName: "Touch Web Agency",
            companyDescription: "Professional web development services. We create modern, responsive websites and web applications that help your business grow.",
            quickLinks: "Quick Links",
            ourServices: "Our Services",
            getInTouch: "Get In Touch",
            services: {
                webDevelopment: "Web Development",
                webDesign: "Web Design",
                ecommerce: "E-Commerce",
                mobileResponsive: "Mobile Responsive",
                seoOptimization: "SEO Optimization",
                maintenanceSupport: "Maintenance & Support"
            },
            location: "Yerevan, Armenia",
            allRightsReserved: "Touch Web Agency. All rights reserved."
        },
        // Contact Form
        contact: {
            getInTouch: "GET IN TOUCH",
            heading: "Let's Start Your Project",
            subtitle: "We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
            namePlaceholder: "Your Name",
            emailPlaceholder: "Your Email",
            subjectPlaceholder: "Subject",
            messagePlaceholder: "Your Message",
            sendButton: "SEND MESSAGE",
            address: "Address",
            phone: "Phone",
            email: "Email"
        }
    },
    hy: {
        // Navigation
        nav: {
            home: "Գլխավոր",
            about: "Մեր մասին",
            gallery: "Պորտֆոլիո",
            services: "Ծառայություններ",
            testimonials: "Կարծիքներ",
            clients: "Հաճախորդներ",
            pricing: "Ծառայություններ և Գներ",
            contact: "Կապ"
        },
        // Banner
        banner: {
            title: "TOUCH WEB AGENCY",
            subtitle: "Պրոֆեսիոնալ վեբ մշակման ծառայություններ",
            cta: "ՍԿՍԵՔ ՁԵՐ ՆԱԽԱԳԾԸ ԱՅՍՕՐ"
        },
        // About Section
        about: {
            title: "ՄԵՐ ՄԱՍԻՆ",
            heading: "Ինչպես ենք մենք օգնում ձեզ ստեղծել ձեր թվային ներկայությունը",
            subtitle: "Մենք առաջատար վեբ մշակման գործակալություն ենք Հայաստանում, մասնագիտանում ենք ժամանակակից, ադապտիվ և բարձր արտադրողականությամբ կայքերի և վեբ հավելվածների ստեղծման մեջ:",
            html5: {
                title: "Ժամանակակից տեխնոլոգիաներ",
                desc: "Մենք օգտագործում ենք վեբ տեխնոլոգիաների վերջին նվաճումները, ներառյալ HTML5, CSS3, JavaScript և ժամանակակից շրջանակներ՝ նորարարական լուծումներ ստեղծելու համար:"
            },
            easy: {
                title: "Օգտագործողի համար հարմար դիզայն",
                desc: "Մեր դիզայնները ինտուիտիվ են և օգտագործողի համար հարմար, ապահովելով ձեր այցելուների լավագույն փորձը:"
            },
            responsive: {
                title: "Ամբողջությամբ ադապտիվ",
                desc: "Մեր բոլոր կայքերը ամբողջությամբ ադապտիվ են և հիանալի աշխատում են բոլոր սարքերի վրա՝ աշխատասեղան, պլանշետ և բջջային:"
            },
            rocket: {
                title: "Արագ աշխատանք",
                desc: "Մենք օպտիմալացնում ենք յուրաքանչյուր կայք արագության և արտադրողականության համար, ապահովելով արագ բեռնման ժամանակներ և գերազանց օգտագործողի փորձ:"
            },
            techStack: {
                title: "ՏԵԽՆՈԼՈԳԻԱՆԵՐ",
                heading: "Տեխնոլոգիաները, որոնք մենք օգտագործում ենք զրոյից կառուցելու համար",
                subtitle: "Ոչ WordPress, ոչ էջերի կառուցիչներ: Մենք գրում ենք ձեռքով գրված կոդ՝ օգտագործելով ժամանակակից frontend և backend տեխնոլոգիաներ՝ հարմարեցված յուրաքանչյուր նախագծի համար:",
                frontend: {
                    title: "Frontend",
                    desc: "HTML5, CSS3, ժամանակակից JavaScript (ES6+), React, Vue.js, Angular, Next.js և այլ առաջատար UI շրջանակներ և գրադարաններ:"
                },
                backend: {
                    title: "Backend",
                    desc: "Node.js (Express, NestJS), Python (Django, Flask, FastAPI), PHP (Laravel, Symfony) և REST/GraphQL API-ներ մասշտաբավորվող, անվտանգ հավելվածների համար:"
                },
                data: {
                    title: "Տվյալներ և ենթակառուցվածք",
                    desc: "Ռելացիոն և NoSQL տվյալների բազաներ, ավտենտիֆիկացիա, քեշավորում և ամպային հոստինգի կարգավորումներ AWS, Azure և այլ հարթակների վրա:"
                },
                quality: {
                    title: "Որակ և արտադրողականություն",
                    desc: "Ադապտիվ դիզայն, մատչելիության լավագույն պրակտիկաներ, արտադրողականության օպտիմալացում, SEO-համատեղելի HTML և երկարաժամկետ պահպանելիություն:"
                }
            },
            ourStory: {
                title: "ՄԵՐ ՊԱՏՄՈՒԹՅՈՒՆԸ",
                heading: "Փոքր ստուդիայից մինչև լիարժեք վեբ գործակալություն",
                subtitle: "Touch Web Agency-ն սկսվել է որպես փոքր թիմ՝ բաղկացած նվիրված մշակողներից և դիզայներներից: Այսօր մենք լիարժեք վեբ գործակալություն ենք, որն օգնում է բոլոր չափերի բիզնեսներին ստեղծել ժամանակակից, արագ և օգտագործողի վրա կենտրոնացած թվային արտադրանքներ:",
                paragraph1: "Տարիների ընթացքում մենք աշխատել ենք ստարտափների, տեղական բիզնեսների և միջազգային ընկերությունների հետ: Մեր առաքելությունը պարզ է. համատեղել մաքուր դիզայն, ժամանակակից տեխնոլոգիա և ձեր բիզնեսի խորը ըմբռնում՝ կայքեր և վեբ հավելվածներ ստեղծելու համար, որոնք իրականում արդյունք են բերում:",
                paragraph2: "Յուրաքանչյուր նախագիծ իրականացվում է նվիրված թիմի կողմից, որը ձեզ ուղղորդում է առաջին գաղափարից մինչև թողարկում և դրանից հետո: Մենք կենտրոնանում ենք երկարաժամկետ գործընկերությունների, թափանցիկ հաղորդակցության և չափելի արդյունքների վրա:"
            },
            ourValues: {
                title: "ՄԵՐ ԱՐԺԵՔՆԵՐԸ",
                heading: "Ինչն է առաջնորդում մեր աշխատանքի ձևը",
                care: {
                    title: "Մտահոգություն ձեր բիզնեսի համար",
                    desc: "Մենք ամեն նախագիծ վերաբերվում ենք այնպես, կարծես դա մեր սեփական բրենդն է, ուշադրություն դարձնելով մանրուքներին, որոնք իրական տարբերություն են անում ձեր հաճախորդների համար:"
                },
                smart: {
                    title: "Խելացի, պարզ լուծումներ",
                    desc: "Մենք նախընտրում ենք պարզ, պահպանելի լուծումներ անհրաժեշտ բարդությունից, որպեսզի ձեր կայքը մնա հեշտ աճելու և բարելավելու համար:"
                },
                teamwork: {
                    title: "Թիմային աշխատանք և թափանցիկություն",
                    desc: "Դուք գործընթացի մասն եք: Մենք կիսում ենք առաջընթացը, հավաքում ենք արձագանքներ և միասին կառուցում ենք, քան անհետանալ մինչև թողարկման օրը:"
                },
                results: {
                    title: "Կենտրոնացում արդյունքների վրա",
                    desc: "Դիզայնը և կոդը միայն սկիզբն են: Մենք կենտրոնանում ենք փոխակերպումների, արտադրողականության և ձեր բիզնեսի երկարաժամկետ արժեքի վրա:"
                }
            },
            ourProcess: {
                title: "ՄԵՐ ԳՈՐԾԱՆՑՈՒՄԸ",
                heading: "Ինչպես ենք մենք ձեր նախագիծը կյանքի կոչում",
                subtitle: "Պարզ և հասկանալի գործընթաց, որը ձեզ տեղեկացնում և ներգրավում է ամեն քայլին:",
                discover: {
                    title: "1. Բացահայտում",
                    desc: "Մենք սկսում ենք ձեր նպատակների, լսարանի և մրցակիցների խորը ուսումնասիրությամբ՝ հասկանալու համար, թե ինչ է ձեզ հարկավոր:"
                },
                design: {
                    title: "2. Դիզայն",
                    desc: "Մեր դիզայներները ստեղծում են մաքուր, ժամանակակից ինտերֆեյսներ, որոնք համապատասխանում են ձեր բրենդին և հեշտացնում են օգտագործողների համար գործողություններ կատարելը:"
                },
                develop: {
                    title: "3. Մշակում",
                    desc: "Մենք կառուցում ենք արագ, անվտանգ և ադապտիվ կայքեր՝ օգտագործելով ժամանակակից տեխնոլոգիաներ և լավագույն կոդավորման պրակտիկաներ:"
                },
                launch: {
                    title: "4. Թողարկում և աջակցություն",
                    desc: "Թողարկումից հետո մենք մնում ենք ձեզ հետ՝ մոնիտորինգ, օպտիմալացում և աջակցություն ցուցաբերելու ձեր կայքին, քանի որ ձեր բիզնեսը աճում է:"
                }
            },
            inNumbers: {
                title: "ԹՎԵՐՈՎ",
                heading: "Ինչ կարող ենք անել ձեզ համար",
                projectsNumber: "10+",
                projects: "Ծառայություններ, որոնք մենք առաջարկում ենք",
                clientsNumber: "10+",
                clients: "Գոհ հաճախորդներ",
                yearsNumber: "24/7",
                years: "Աջակցություն հասանելի է",
                focus: "Կենտրոնացում որակի և աջակցության վրա"
            }
        },
        // Services Section
        services: {
            testimonial: "Touch Web Agency-ն փոխակերպեց մեր առցանց ներկայությունը: Նրանց փորձառությունը և պրոֆեսիոնալիզմը գերազանցեցին մեր ակնկալիքները:",
            author: "— Հաճախորդի Անուն, Գոհ Հաճախորդ",
            title: "ՀԱՎԱՏԱԼ",
            heading: "Կենտրոնանալով ամենակարևորի վրա",
            subtitle: "Մենք հավատում ենք թվային լուծումների ստեղծմանը, որոնք ոչ միայն գեղեցիկ են, այլև արդյունքներ են բերում ձեր բիզնեսի համար:",
            text1: "Մեր փորձառու մշակողների և դիզայներների թիմը միասին աշխատում է գեղեցիկ և ֆունկցիոնալ կայքեր և վեբ հավելվածներ ստեղծելու համար:",
            text2: "Մենք հասկանում ենք, որ յուրաքանչյուր բիզնես եզակի է, այդ իսկ պատճառով մենք ժամանակ ենք հատկացնում ձեր կարիքները հասկանալու և ձեր նպատակներին համապատասխան հատուկ լուծումներ ստեղծելու համար:",
            watchVideo: "ԴԻՏԵՔ ՄԵՐ ԱՇԽԱՏԱՆՔԸ"
        },
        // Testimonials
        testimonials: {
            title: "ԿԱՐծԻՔՆԵՐ",
            heading: "Ինչ են ասում մեր հաճախորդները",
            testimonial1: {
                quote: "Touch Web Agency-ն մեր ընկերության համար ստեղծեց արտակարգ կայք: Թիմը պրոֆեսիոնալ էր, արձագանքող և ժամանակին ավարտեց:",
                author: "Ջոն Սմիթ - Բիզնեսի սեփականատեր"
            },
            testimonial2: {
                quote: "Touch Web Agency-ի հետ աշխատելը հաճելի էր: Նրանք հասկացան մեր տեսլականը և այն գեղեցիկ կերպով կյանքի կոչեցին:",
                author: "Սարա Ջոնսոն - Մարքեթինգի տնօրեն"
            },
            testimonial3: {
                quote: "Ամենալավ վեբ մշակման գործակալությունը Հայաստանում: Բարձր խորհուրդ է տրվում բոլոր նրանց, ովքեր փնտրում են որակյալ վեբ լուծումներ:",
                author: "Մայքլ Բրաուն - Գլխավոր տնօրեն"
            }
        },
        // Clients
        clients: {
            title: "ՎՍՏԱՀԱՏՈՒԹՅՈՒՆ",
            heading: "Ընկերություններ, որոնք վստահում են մեր ծառայություններին",
            subtitle: "Մենք հպարտ ենք աշխատել բոլոր չափերի բիզնեսների հետ՝ սկսած ստարտափներից մինչև հաստատված ձեռնարկություններ:"
        },
        // Pricing
        pricing: {
            title: "ՁԵՐ ԸՆՏՐՈՒԹՅՈՒՆԸ",
            heading: "Մենք ունենք ձեզ համար ճիշտ փաթեթ",
            startingFrom: "Սկսած",
            landing: {
                name: "Լենդինգ էջեր",
                subtitle: "Բարձր փոխակերպման մեկ էջանի կայքեր",
                price: "֏",
                amount: "50,000",
                description: "Իդեալական արշավների, արտադրանքի թողարկումների և հաճախորդների ներգրավման համար",
                features: [
                    "Մեկ էջանի դիզայն",
                    "Բջջային ադապտիվ",
                    "Կապի/Հաճախորդների ձևեր",
                    "Սոցիալական ցանցերի ինտեգրացիա",
                    "Հիմնական SEO օպտիմալացում",
                    "Արագ բեռնման արագություն",
                    "6 ամիս աջակցություն"
                ],
                cta: "ՍԿՍԵՔ"
            },
            business: {
                name: "Բիզնես կայք",
                subtitle: "Ձեր բիզնեսի համար ամբողջական առցանց ներկայություն",
                price: "֏",
                amount: "200,000",
                description: "Պրոֆեսիոնալ բազմաէջ կայք CMS-ով",
                features: [
                    "Մինչև 15 էջ",
                    "Հատուկ դիզայն և բրենդինգ",
                    "Բովանդակության կառավարման համակարգ",
                    "Ընդլայնված SEO օպտիմալացում",
                    "Բազմալեզու աջակցություն",
                    "Բլոգի բաժին",
                    "Կապի ձևեր և ինտեգրացիաներ",
                    "1 տարվա աջակցություն և պահպանում"
                ],
                cta: "ՍԿՍԵՔ"
            },
            ecommerce: {
                name: "Էլեկտրոնային առևտուր",
                subtitle: "Ամբողջական առցանց խանութի լուծում",
                price: "֏",
                amount: "450,000",
                description: "Ամբողջական էլեկտրոնային առևտրի հարթակ վճարման ինտեգրացիայով",
                features: [
                    "Արտադրանքի կատալոգ և կատեգորիաներ",
                    "Գնումների զամբյուղ և վճարում",
                    "Վճարման դարպասի ինտեգրացիա",
                    "Պատվերների կառավարման համակարգ",
                    "Պահեստի կառավարում",
                    "Հաճախորդների հաշիվներ",
                    "Ադմինիստրատորի վահանակ",
                    "1 տարվա աջակցություն և թարմացումներ"
                ],
                cta: "ՍԿՍԵՔ"
            }
        },
        // Footer
        footer: {
            copyright: "Ստեղծված ❤️-ով Touch Web Agency-ի կողմից, Հայաստան",
            companyName: "Touch Web Agency",
            companyDescription: "Պրոֆեսիոնալ վեբ մշակման ծառայություններ: Մենք ստեղծում ենք ժամանակակից, ադապտիվ կայքեր և վեբ հավելվածներ, որոնք օգնում են ձեր բիզնեսին աճել:",
            quickLinks: "Արագ հղումներ",
            ourServices: "Մեր ծառայությունները",
            getInTouch: "Կապ մեզ հետ",
            services: {
                webDevelopment: "Վեբ մշակում",
                webDesign: "Վեբ դիզայն",
                ecommerce: "Էլեկտրոնային առևտուր",
                mobileResponsive: "Բջջային ադապտիվ",
                seoOptimization: "SEO օպտիմալացում",
                maintenanceSupport: "Պահպանում և աջակցություն"
            },
            location: "Երևան, Հայաստան",
            allRightsReserved: "Touch Web Agency. Բոլոր իրավունքները պաշտպանված են:"
        },
        // Contact Form
        contact: {
            getInTouch: "ԿԱՊ ՄԵԶ ՀԵՏ",
            heading: "Սկսենք ձեր նախագիծը",
            subtitle: "Մենք ուրախ կլինենք ձեզանից լսել: Ուղարկեք մեզ հաղորդագրություն, և մենք կպատասխանենք հնարավորինս շուտ:",
            namePlaceholder: "Ձեր անունը",
            emailPlaceholder: "Ձեր էլ. փոստը",
            subjectPlaceholder: "Թեմա",
            messagePlaceholder: "Ձեր հաղորդագրությունը",
            sendButton: "ՈՒՂԱՐԿԵԼ ՀԱՂՈՐԴԱԳՐՈՒԹՅՈՒՆ",
            address: "Հասցե",
            phone: "Հեռախոս",
            email: "Էլ. փոստ"
        }
    },
    ru: {
        // Navigation
        nav: {
            home: "Главная",
            about: "О нас",
            gallery: "Портфолио",
            services: "Услуги",
            testimonials: "Отзывы",
            clients: "Клиенты",
            pricing: "Услуги и Цены",
            contact: "Контакты"
        },
        // Banner
        banner: {
            title: "TOUCH WEB AGENCY",
            subtitle: "Создаем современные веб-решения для вашего бизнеса",
            cta: "НАЧНИТЕ СВОЙ ПРОЕКТ СЕГОДНЯ"
        },
        // About Section
        about: {
            title: "О НАС",
            heading: "Как мы помогаем вам создать ваше цифровое присутствие",
            subtitle: "Мы ведущее агентство веб-разработки в Армении, специализирующееся на создании современных, адаптивных и высокопроизводительных веб-сайтов и веб-приложений.",
            html5: {
                title: "Современные технологии",
                desc: "Мы используем новейшие веб-технологии, включая HTML5, CSS3, JavaScript и современные фреймворки для создания передовых решений."
            },
            easy: {
                title: "Удобный дизайн",
                desc: "Наши дизайны интуитивно понятны и удобны для пользователя, обеспечивая вашим посетителям лучший опыт."
            },
            responsive: {
                title: "Полностью адаптивный",
                desc: "Все наши веб-сайты полностью адаптивны и отлично работают на всех устройствах - настольных компьютерах, планшетах и мобильных телефонах."
            },
            rocket: {
                title: "Быстрая производительность",
                desc: "Мы оптимизируем каждый веб-сайт для скорости и производительности, обеспечивая быстрое время загрузки и отличный пользовательский опыт."
            },
            techStack: {
                title: "ТЕХНОЛОГИИ",
                heading: "Технологии, которые мы используем для создания с нуля",
                subtitle: "Никакого WordPress, никаких конструкторов страниц. Мы пишем код вручную, используя современные frontend и backend технологии, адаптированные для каждого проекта.",
                frontend: {
                    title: "Frontend",
                    desc: "HTML5, CSS3, современный JavaScript (ES6+), React, Vue.js, Angular, Next.js и другие ведущие UI фреймворки и библиотеки."
                },
                backend: {
                    title: "Backend",
                    desc: "Node.js (Express, NestJS), Python (Django, Flask, FastAPI), PHP (Laravel, Symfony) и REST/GraphQL API для масштабируемых, безопасных приложений."
                },
                data: {
                    title: "Данные и инфраструктура",
                    desc: "Реляционные и NoSQL базы данных, аутентификация, кэширование и настройки облачного хостинга на платформах, таких как AWS, Azure и других."
                },
                quality: {
                    title: "Качество и производительность",
                    desc: "Адаптивный дизайн, лучшие практики доступности, оптимизация производительности, SEO-дружественный HTML и долгосрочная поддерживаемость."
                }
            },
            ourStory: {
                title: "НАША ИСТОРИЯ",
                heading: "От небольшой студии до полноценного веб-агентства",
                subtitle: "Touch Web Agency началась как небольшая команда увлеченных разработчиков и дизайнеров. Сегодня мы полноценное веб-агентство, помогающее предприятиям всех размеров создавать современные, быстрые и ориентированные на пользователя цифровые продукты.",
                paragraph1: "За годы работы мы сотрудничали со стартапами, местными предприятиями и международными компаниями. Наша миссия проста: объединить чистый дизайн, современные технологии и глубокое понимание вашего бизнеса для создания веб-сайтов и веб-приложений, которые действительно приносят результаты.",
                paragraph2: "Каждый проект выполняется специальной командой, которая направляет вас от первой идеи до запуска и далее. Мы фокусируемся на долгосрочном партнерстве, прозрачном общении и измеримых результатах."
            },
            ourValues: {
                title: "НАШИ ЦЕННОСТИ",
                heading: "Что движет нашим подходом к работе",
                care: {
                    title: "Забота о вашем бизнесе",
                    desc: "Мы относимся к каждому проекту как к собственному бренду, уделяя внимание деталям, которые действительно важны для ваших клиентов."
                },
                smart: {
                    title: "Умные, простые решения",
                    desc: "Мы предпочитаем четкие, поддерживаемые решения ненужной сложности, чтобы ваш веб-сайт оставался легким для роста и улучшения."
                },
                teamwork: {
                    title: "Командная работа и прозрачность",
                    desc: "Вы являетесь частью процесса. Мы делимся прогрессом, собираем обратную связь и строим вместе, вместо того чтобы исчезать до дня запуска."
                },
                results: {
                    title: "Фокус на результатах",
                    desc: "Дизайн и код - это только начало. Мы фокусируемся на конверсиях, производительности и долгосрочной ценности для вашего бизнеса."
                }
            },
            ourProcess: {
                title: "НАШ ПРОЦЕСС",
                heading: "Как мы воплощаем ваш проект в жизнь",
                subtitle: "Четкий и простой процесс, который держит вас в курсе и вовлекает на каждом этапе.",
                discover: {
                    title: "1. Исследование",
                    desc: "Мы начинаем с глубокого погружения в ваши цели, аудиторию и конкурентов, чтобы точно понять, что вам нужно."
                },
                design: {
                    title: "2. Дизайн",
                    desc: "Наши дизайнеры создают чистые, современные интерфейсы, которые соответствуют вашему бренду и облегчают пользователям выполнение действий."
                },
                develop: {
                    title: "3. Разработка",
                    desc: "Мы создаем быстрые, безопасные и адаптивные веб-сайты, используя современные технологии и лучшие практики программирования."
                },
                launch: {
                    title: "4. Запуск и поддержка",
                    desc: "После запуска мы остаемся с вами, чтобы отслеживать, оптимизировать и поддерживать ваш веб-сайт по мере роста вашего бизнеса."
                }
            },
            inNumbers: {
                title: "В ЦИФРАХ",
                heading: "Что мы можем сделать для вас",
                projectsNumber: "10+",
                projects: "Услуги, которые мы предлагаем",
                clientsNumber: "10+",
                clients: "Довольных клиентов",
                yearsNumber: "24/7",
                years: "Поддержка доступна",
                focus: "Фокус на качестве и поддержке"
            }
        },
        // Services Section
        services: {
            testimonial: "Touch Web Agency преобразила наше онлайн-присутствие. Их опыт и профессионализм превзошли наши ожидания.",
            author: "— Имя клиента, Довольный клиент",
            title: "ВЕРА",
            heading: "Фокусируясь на самом важном",
            subtitle: "Мы верим в создание цифровых решений, которые не только выглядят великолепно, но и приносят результаты для вашего бизнеса.",
            text1: "Наша команда опытных разработчиков и дизайнеров работает вместе, чтобы создавать красивые и функциональные веб-сайты и веб-приложения.",
            text2: "Мы понимаем, что каждый бизнес уникален, поэтому мы уделяем время пониманию ваших потребностей и созданию индивидуальных решений, адаптированных к вашим целям.",
            watchVideo: "СМОТРЕТЬ НАШИ РАБОТЫ"
        },
        // Testimonials
        testimonials: {
            title: "ОТЗЫВЫ",
            heading: "Что говорят наши клиенты",
            testimonial1: {
                quote: "Touch Web Agency создала выдающийся веб-сайт для нашей компании. Команда была профессиональной, отзывчивой и выполнила работу вовремя.",
                author: "Джон Смит - Владелец бизнеса"
            },
            testimonial2: {
                quote: "Работать с Touch Web Agency было удовольствием. Они поняли наше видение и красиво воплотили его в жизнь.",
                author: "Сара Джонсон - Директор по маркетингу"
            },
            testimonial3: {
                quote: "Лучшее агентство веб-разработки в Армении. Настоятельно рекомендуется всем, кто ищет качественные веб-решения.",
                author: "Майкл Браун - Генеральный директор"
            }
        },
        // Clients
        clients: {
            title: "ДОВЕРИЕ",
            heading: "Компании, которые доверяют нашим услугам",
            subtitle: "Мы гордимся тем, что работаем с предприятиями всех размеров, от стартапов до устоявшихся компаний."
        },
        // Pricing
        pricing: {
            title: "ВАШ ВЫБОР",
            heading: "У нас есть подходящий пакет для вас",
            subtitle: "Выберите идеальное решение для вашего бизнеса",
            startingFrom: "От",
            landing: {
                name: "Лендинг страницы",
                subtitle: "Высококонверсионные одностраничные сайты",
                price: "֏",
                amount: "50,000",
                description: "Идеально для кампаний, запуска продуктов и привлечения клиентов",
                features: [
                    "Одностраничный дизайн",
                    "Мобильная адаптивность",
                    "Формы контакта/лидов",
                    "Интеграция с социальными сетями",
                    "Базовая SEO оптимизация",
                    "Быстрая загрузка",
                    "Поддержка 6 месяцев"
                ],
                cta: "НАЧАТЬ"
            },
            business: {
                name: "Бизнес сайт",
                subtitle: "Полное онлайн присутствие для вашего бизнеса",
                price: "֏",
                amount: "200,000",
                description: "Профессиональный многостраничный сайт с CMS",
                features: [
                    "До 15 страниц",
                    "Индивидуальный дизайн и брендинг",
                    "Система управления контентом",
                    "Продвинутая SEO оптимизация",
                    "Многоязычная поддержка",
                    "Блог секция",
                    "Формы обратной связи и интеграции",
                    "Поддержка и обслуживание 1 год"
                ],
                cta: "НАЧАТЬ"
            },
            ecommerce: {
                name: "Электронная коммерция",
                subtitle: "Полное решение для интернет-магазина",
                price: "֏",
                amount: "450,000",
                description: "Полная платформа электронной коммерции с интеграцией платежей",
                features: [
                    "Каталог товаров и категории",
                    "Корзина и оформление заказа",
                    "Интеграция платежного шлюза",
                    "Система управления заказами",
                    "Управление складом",
                    "Аккаунты клиентов",
                    "Административная панель",
                    "Поддержка и обновления 1 год"
                ],
                cta: "НАЧАТЬ"
            }
        },
        // Footer
        footer: {
            copyright: "Сделано с ❤️ Touch Web Agency, Армения",
            companyName: "Touch Web Agency",
            companyDescription: "Профессиональные услуги веб-разработки. Мы создаем современные, адаптивные веб-сайты и веб-приложения, которые помогают вашему бизнесу расти.",
            quickLinks: "Быстрые ссылки",
            ourServices: "Наши услуги",
            getInTouch: "Свяжитесь с нами",
            services: {
                webDevelopment: "Веб-разработка",
                webDesign: "Веб-дизайн",
                ecommerce: "Электронная коммерция",
                mobileResponsive: "Мобильная адаптивность",
                seoOptimization: "SEO оптимизация",
                maintenanceSupport: "Обслуживание и поддержка"
            },
            location: "Ереван, Армения",
            allRightsReserved: "Touch Web Agency. Все права защищены."
        },
        // Contact Form
        contact: {
            getInTouch: "СВЯЗАТЬСЯ С НАМИ",
            heading: "Давайте начнем ваш проект",
            subtitle: "Мы будем рады услышать от вас. Отправьте нам сообщение, и мы ответим как можно скорее.",
            namePlaceholder: "Ваше имя",
            emailPlaceholder: "Ваш email",
            subjectPlaceholder: "Тема",
            messagePlaceholder: "Ваше сообщение",
            sendButton: "ОТПРАВИТЬ СООБЩЕНИЕ",
            address: "Адрес",
            phone: "Телефон",
            email: "Email"
        }
    }
};

