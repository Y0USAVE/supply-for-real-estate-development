// projects-data.js
// This file acts as a mini database for all projects.
// It allows easy addition of new projects with complex media without editing HTML/CSS.

const projectsData = {
    // Project 1 (Naya Hotels)
    "proj1": {
        id: "proj1",
        title: {
            ar: "فنادق نايا",
            en: "Naya Hotels"
        },
        badge: {
            ar: "فندقي",
            en: "Hospitality"
        },
        client: {
            ar: "مجموعة نايا للضيافة",
            en: "Naya Hospitality Group"
        },
        duration: {
            ar: "تم التنفيذ",
            en: "Completed"
        },
        description: {
            ar: "مشروع متكامل لتنفيذ وتشطيب أرقى الغرف الفندقية والمرافق العامة لفنادق نايا، مع التركيز على استخدام أفضل مواد العزل العصرية، والإضاءة الذكية، والتشطيبات الخشبية والرخامية الفاخرة التي تعكس الرفاهية والهدوء لتجربة ضيافة استثنائية.",
            en: "An integrated project for the execution and finishing of the finest hotel rooms and public facilities for Naya Hotels, focusing on modern insulation materials, smart lighting, and luxurious wood and marble finishes that reflect luxury and tranquility for an exceptional hospitality experience."
        },
        // Array of image paths for the masonry gallery
        gallery: [
            "naya/naya-1.jpeg",
            "naya/naya-2.jpeg",
            "naya/naya-3.jpeg",
            "naya/naya-4.jpeg",
            "naya/naya-5.jpeg",
            "naya/naya-6.jpeg",
            "naya/naya-7.jpeg"
        ]
    },

    // Project 2 (HB Shop - Maxim Mall)
    "proj2": {
        id: "proj2",
        title: {
            ar: "أعمال تشطيب HB Shop",
            en: "HB Shop Finishing Works"
        },
        badge: {
            ar: "تجاري",
            en: "Commercial"
        },
        client: {
            ar: "مكسيم مول",
            en: "Maxim Mall"
        },
        duration: {
            ar: "مكتمل",
            en: "Completed"
        },
        description: {
            ar: "أعمال تشطيب ميكانيكا وكهرباء متكاملة لمحل HB Shop في مكسيم مول، مع التركيز على أدق التفاصيل لضمان أعلى مستويات الجودة والأمان.",
            en: "Integrated mechanical and electrical finishing works for HB Shop at Maxim Mall, focusing on the finest details to ensure the highest levels of quality and safety."
        },
        rawVideos: [
            { url: "hb-shop/hb-shop-before.mp4", caption: {ar: "قبل التشطيب", en: "Before Finishing"} },
            { url: "hb-shop/hb-shop-during.mp4", caption: {ar: "أثناء العمل", en: "During Work"} },
            { url: "hb-shop/hb-shop-after.mp4", caption: {ar: "بعد التشطيب", en: "After Finishing"} }
        ]
    },

    // Project 3 (Building Construction & Savito Facades)
    "proj3": {
        id: "proj3",
        title: {
            ar: "بناء وتطوير واجهات سافيتو",
            en: "Building Construction & Saveto Facades"
        },
        badge: {
            ar: "تطوير عمراني",
            en: "Urban Development"
        },
        client: {
            ar: "استثمار خاص",
            en: "Private Investment"
        },
        description: {
            ar: "تنفيذ أعمال بناء عمارة سكنية وتشطيب الواجهات الخارجية باستخدام مادة سافيتو (Saveto) الإسمنتية عالية الجودة. تضمن هذه المادة المتطورة مقاومة فائقة للعوامل الجوية، وعمر افتراضي طويل، مع لمسة جمالية راقية تحاكي الفخامة بفضل مرونة تصاميمها.",
            en: "Construction of a residential building and exterior facade finishing using high-quality Saveto cementitious materials. This advanced material ensures superior weather resistance, a long lifespan, and a refined aesthetic touch that mimics luxury through its design flexibility."
        },
        // Using multiple sliders to show before/after of the facades/construction
        multiBeforeAfter: [
            { before: "savito-project/before-1.jpeg", after: "savito-project/after-1.jpeg" },
            { before: "savito-project/before-2.jpeg", after: "savito-project/after-2.jpeg" },
            { before: "savito-project/before-3.jpeg", after: "savito-project/after-3.jpeg" },
            { before: "savito-project/before-4.jpeg", after: "savito-project/after-4.jpeg" }
        ],
        gallery: [
            "savito-project/single-5.jpeg"
        ]
    },
    // Project 4 (Civil Registry Finishing & Furnishing)
    "proj4": {
        id: "proj4",
        title: {
            ar: "تجهيز وفرش قاعة الأحوال المدنية",
            en: "Civil Registry Hall Furnishing & Finishing"
        },
        badge: {
            ar: "مؤسسات حكومية",
            en: "Government Facilities"
        },
        client: {
            ar: "وزارة الداخلية",
            en: "Ministry of Interior"
        },
        description: {
            ar: "مشروع متكامل لتشطيب وتجهيز قاعة الأحوال المدنية وفق أعلى المعايير القياسية للمؤسسات الحكومية. يشمل المشروع تنفيذ أعمال الديكورات، التأسيسات الكهربائية والميكانيكية، وتوريد أثاث مصمم خصيصاً لتحمل الكثافة العالية وتوفير أقصى درجات الراحة للمواطنين وللكوادر العاملة.",
            en: "An integrated project for finishing and furnishing the Civil Registry hall according to the highest standards for government institutions. The project includes interior design works, MEP installations, and supplying custom furniture designed for high durability to provide maximum comfort for citizens and staff."
        },
        videoUrl: "civil-registry/civil-registry-vid.webm",
        gallery: []
    },
    // Project 5 (Eastshire Compound)
    "proj5": {
        id: "proj5",
        title: {
            ar: "واجهات كمبوند إيست شاير",
            en: "Eastshire Compound Facades"
        },
        badge: {
            ar: "تطوير عمراني",
            en: "Urban Development"
        },
        client: {
            ar: "القمزي للتطوير العقاري",
            en: "Al Qamzi Developments"
        },
        description: {
            ar: "تنفيذ أعمال تشطيب وتجليد الواجهات الخارجية لكمبوند إيست شاير الراقي (Eastshire) بالتجمع الخامس لصالح شركة القمزي للتطوير العقاري. تضمنت الأعمال تركيب ألواح العزل المتطورة (جلاس روك Glassrock) لضمان أعلى درجات العزل الحراري والصوتي، بالإضافة إلى أعمال المحارة والتشطيبات الخارجية بدقة هندسية تليق بمستوى المشروع.",
            en: "Executing exterior facade finishing and cladding works for the prestigious Eastshire Compound in New Cairo for Al Qamzi Developments. The project included the installation of advanced insulation panels (Glassrock) to ensure the highest levels of thermal and acoustic insulation, in addition to exterior plastering and finishes with engineering precision befitting the project's standard."
        },
        gallery: [
            "eastshire-project/east-1.jpeg",
            "eastshire-project/east-2.jpeg",
            "eastshire-project/east-3.jpeg"
        ]
    },
    // Project 6 (Abstract Shop Maxim Mall)
    "proj6": {
        id: "proj6",
        title: {
            ar: "تشطيب محل Abstract",
            en: "Abstract Shop Finishing"
        },
        badge: {
            ar: "تجاري",
            en: "Commercial"
        },
        client: {
            ar: "محل Abstract",
            en: "Abstract Shop"
        },
        description: {
            ar: "تنفيذ أعمال التشطيبات الداخلية المتكاملة للعلامة التجارية «Abstract» داخل مكسيم مول التجاري. شمل نطاق العمل التأسيسات الكهروميكانيكية (MEP) بأعلى درجات الدقة لتلبية الأحمال المطلوبة، بالإضافة إلى تنفيذ الديكورات المكانية المعقدة، وتركيب واجهات العرض الزجاجية، وتوزيّع أنظمة الإضاءة المسارية (Track Lighting) المتطورة التي تبرز هوية وتفاصيل المعروضات وفق أرقى المعايير الهندسية لقطاع التجزئة الفاخر.",
            en: "Comprehensive interior fit-out execution for the 'Abstract' brand located within Maxim Mall. The scope of work encompassed high-precision electromechanical (MEP) installations to accommodate required loads, in addition to executing intricate spatial decorations, installing glass storefronts, and distributing advanced track lighting systems designed to highlight the brand's identity and product details in accordance with the highest engineering standards for luxury retail."
        },
        rawVideos: [
            {
                url: "abstract-project/abstract-vid.webm",
                caption: { ar: "تشطيب المحل التجاري", en: "Shop Finishing" },
                rotate: true
            }
        ],
        gallery: []
    },
    // Project 7 (Eastshire Insulation & Glassrock)
    "proj7": {
        id: "proj7",
        title: {
            ar: "واجهات كمبوند إيست شاير الراقي",
            en: "Eastshire Compound Elite Facades"
        },
        badge: {
            ar: "تطوير عمراني",
            en: "Urban Development"
        },
        client: {
            ar: "شركة القمزي للتطوير العقاري",
            en: "Al Qamzi Developments"
        },
        description: {
            ar: "أعمال العزل الحراري والصوتي المتطورة للواجهات الخارجية في كمبوند إيست شاير (Eastshire) بالتجمع الخامس، التابع لشركة القمزي للتطوير العقاري. تم التنفيذ باستخدام أحدث تقنيات وأنظمة العزل من شركة جلاس روك (Glassrock) العالمية لضمان أعلى درجات الكفاءة البيئية والعزل التام ضد العوامل الخارجية، مما يزيد من العمر الافتراضي للمباني ويحقق معايير الاستدامة العالية.",
            en: "Advanced thermal and acoustic insulation works for the exterior facades of the Eastshire Compound in New Cairo, owned by Al Qamzi Developments. The execution utilized state-of-the-art insulation systems and technologies from the globally renowned Glassrock company, ensuring maximum environmental efficiency, complete insulation against external factors, and significantly increasing the buildings' lifespan while meeting high sustainability standards."
        },
        gallery: [
            "eastshire-glassrock/eastshire-insulation-1.jpeg",
            "eastshire-glassrock/eastshire-insulation-2.jpeg",
            "eastshire-glassrock/eastshire-insulation-3.jpeg"
        ]
    },
    // Project 8 (Maxim Classic Museum)
    "proj8": {
        id: "proj8",
        title: {
            ar: "تشطيب متحف العربيات Maxim Classic",
            en: "Maxim Classic Cars Museum Finishing"
        },
        badge: {
            ar: "متاحف فاخرة",
            en: "Luxury Museums"
        },
        client: {
            ar: "Maxim Group",
            en: "Maxim Group"
        },
        description: {
            ar: "مشروع تشطيب متكامل لمتحف السيارات الكلاسيكية «Maxim Classic» حيث تجتمع العراقة مع الحداثة. شمل نطاق العمل تصميم وتنفيذ أرقى الديكورات المكانية وتأسيس أنظمة الإضاءة المعمارية المتطورة (Architectural Lighting) التي تبرز التحف الفنية والمقتنيات الكلاسيكية، بالإضافة للتشطيبات الميكانيكية والكهربائية المتطورة لضمان التحكم الحراري الأمثل داخل مساحات العرض.",
            en: "An integrated finishing project for the 'Maxim Classic' cars museum where heritage meets modernity. The scope of work included designing and executing premium spatial decorations and establishing advanced architectural lighting systems to highlight the classic automotive masterpieces. It also included sophisticated MEP installations to ensure optimal thermal control within the exhibition spaces."
        },
        rawVideos: [
            {
                url: "متحف العربيات/maxim-classic/before.webm",
                caption: { ar: "حالة المشروع قبل التشطيب", en: "Condition Before Finishing" },
                rotate: true
            },
            {
                url: "متحف العربيات/maxim-classic/after.webm",
                caption: { ar: "روعة المشروع بعد التنفيذ والتسليم", en: "The Masterpiece After Execution" },
                rotate: true
            }
        ],
        gallery: []
    }
};
