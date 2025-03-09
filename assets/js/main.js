

// Navbar 

document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        let navbar = document.querySelector(".navbar");
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled"); // يضيف الكلاس عند التمرير
        } else {
            navbar.classList.remove("scrolled"); // يزيل الكلاس عندما يكون في الأعلى
        }
    });
});



// play video
function playVideo() {
    let videoContainer = document.getElementById("videoContainer");
    let videoElement = document.getElementById("videoElement");
    let navbar = document.querySelector(".navbar");

    videoContainer.classList.add("show"); // إظهار الفيديو
    navbar.style.zIndex = "-10";
    navbar.style.pointerEvents = "none"; // تعطيل التفاعل مع الـ navbar
    videoElement.play();
}

function closeVideo() {
    let videoContainer = document.getElementById("videoContainer");
    let videoElement = document.getElementById("videoElement");
    let navbar = document.querySelector(".navbar");

    videoElement.pause();
    videoElement.currentTime = 0; // إعادة تشغيل الفيديو من البداية
    navbar.style.zIndex = "1000"; // إعادة الـ navbar إلى وضعه الطبيعي
    navbar.style.pointerEvents = "auto"; // إعادة التفاعل مع الـ navbar
    videoContainer.classList.remove("show"); // إخفاء الفيديو
}



// Zoom-In flavors section

document.addEventListener("DOMContentLoaded", function () {
    let collItems = document.querySelectorAll(".flavors .coll");

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    collItems.forEach(item => {
        observer.observe(item);
    });
});







// carts section 

document.addEventListener("DOMContentLoaded", function () {
    // Initialize Swiper Sliders
    document.querySelectorAll(".cart-slider").forEach(slider => {
        new Swiper(slider, {
            loop: true,
            pagination: { el: ".swiper-pagination", clickable: true },
            autoplay: { delay: 3000 }
        });
    });

    // Number Animation Function
    function animateNumbers() {
        document.querySelectorAll(".counter").forEach(el => {
            let target = +el.getAttribute("data-target");
            let count = 0;
            let step = Math.ceil(target / 50);
            let interval = setInterval(() => {
                count += step;
                if (count >= target) {
                    count = target;
                    clearInterval(interval);
                }
                el.textContent = count;
            }, 50);
        });
    }

    // Observer to trigger animation on scroll
    let section = document.querySelector(".cart-text-important");
    let observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            animateNumbers();
            observer.disconnect();
        }
    }, { threshold: 0.5 });

    observer.observe(section);
});




// Icons

window.addEventListener("scroll", function () {
    let floatingIcons = document.getElementById("floatingIcons");
    let contactSection = document.getElementById("contact");
    let contactPosition = contactSection.getBoundingClientRect().top;
    let windowHeight = window.innerHeight;

    if (contactPosition < windowHeight && contactPosition > 0) {
        floatingIcons.classList.add("hidden"); // إخفاء الأيقونات
    } else {
        floatingIcons.classList.remove("hidden"); // إظهارها عند التمرير لأعلى
    }
});







// translations

let translations = {
    en: {
        en: "انجليزي",
        ar: "عربي",
        home: "Home",
        about: "About",
        product: "Product",
        flavors: "Flavors",
        contact: "Contact",
        name: "Village",
        main_text_hero: "Enjoy Our Delicious <span>ICE CREAM</span>",
        main_text1: "Enjoy unforgettable moments with friends and our delicious ice cream.",
        main_text2: "Discover a variety of flavors at <span>VILLAGE</span>, perfect for every occasion.</p>",
        main_text3: "Every day is the perfect time for ice cream at <span>Ice Cream Village</span>!",
        hero_btn: "View menu",

        // section flavors

        main_text_flavors: "All kind of <span>flavors</span>",
        flavor1: "Mango",
        flavor2: "Vanilla",
        flavor3: "Chocolate",
        View_all_btn: "View all",

        // section carts

        main_text_carts: "Ice Cream Cart",
        info_text_carts: "We present to you our new special service Ice cream cart being sent to cover Parties and events of all kinds",

        name_cart1: "cart 50 cup",
        name_cart2: "cart 100 cup",
        name_cart3: "cart 200 cup",
        name_cart4: "cart 300 cup",
        name_cart5: "cart 400 cup",
        name_cart6: "cart 500 cup",
        service_providers: "Service Providers",
        work_hours: "Work Hours",
        price: "Price",

        // section about

        main_text_about: "About Us",
        info_text_about: "From just an idea to a successful reality, this is our journey",
        text_about_1_h4: "Get to know us up close",
        text_about_1_p: "We are a Saudi brand and we have extensive experience in of offering gelato in the traditional Italian way, and it is available for individuals and companies for various occasions, weddings, and events. We offer different sizes and types of carts according to your preferences.",
        text_about_2_h4: "Availability of all types of Ice Cream",
        text_about_1_li1: "We were keen to provide all international and local ice cream varieties with distinctive flavors",
        text_about_1_li2: "We were also distinguished by providing your order and making it even if it is not available in the item’s menu",

        // section Contact

        main_text_Contact: "Contact Us",
        info_text_Contact: "Have a question? We are here to help!",

        // ------------ Page flavors ------------

        main_text_flavor_page: "<span>Our flavors </span>are more than just taste <br> they are an experience and a story to be told",
        flavor_main_text1: "Blackberry Flavor",
        flavor_info_text1: "An Unforgettable Taste Experience",
        flavor_p_text1: "Blackberry flavor is one of the richest and most distinctive flavors used in the world of desserts and ice cream. This small, deep-purple fruit is known for its unique taste, which perfectly balances mild sweetness with a refreshing tartness. It is an ideal choice for those who appreciate natural flavors and a rich, fruity taste",
        flavor_main_text2: "Mango Flavor",
        flavor_info_text2: "A Tropical Delight in Every Bite",
        flavor_p_text2: "Mango flavor is one of the most luscious and exotic flavors in the world of desserts and ice cream. This golden, sun-kissed fruit is cherished for its naturally sweet and juicy taste, offering a perfect balance of tropical richness and smooth creaminess. It is an ideal choice for those who crave a refreshing, fruity indulgence with a vibrant and irresistible aroma.",
        flavor_main_text3: "Bubblegum Flavor",
        flavor_info_text3: "A Nostalgic and Playful Delight",
        flavor_p_text3: "Bubblegum flavor is a fun and nostalgic treat that brings back childhood memories with every bite. Its sweet, candy-like taste bursts with a playful essence, offering a delightful and exciting experience. Perfect for those who love a vibrant, sugary flavor that never goes out of style.",
        flavor_main_text4: "Blueberry Flavor",
        flavor_info_text4: "A Burst of Sweet and Tart Delight",
        flavor_p_text4: "Blueberry flavor is a delightful combination of natural sweetness and subtle tartness, making it one of the most beloved choices in desserts and ice cream. These small, vibrant blue berries are packed with a juicy, refreshing taste that creates a perfect balance between rich, fruity notes and a smooth, creamy texture. An ideal treat for those who love the taste of nature in every spoonful.",
        flavor_main_text5: "Cheesecake Flavor",
        flavor_info_text5: "A Creamy and Indulgent Delight",
        flavor_p_text5: "Cheesecake flavor is a true classic, bringing together the rich, velvety texture of cream cheese with a perfect balance of sweetness and a hint of tanginess. This indulgent flavor captures the essence of a freshly baked cheesecake, making it an irresistible choice for dessert lovers who crave a smooth and creamy experience.",
        flavor_main_text6: "Chocolate Flavor",
        flavor_info_text6: "A Decadent and Indulgent Experience",
        flavor_p_text6: "Chocolate flavor is one of the most beloved and timeless choices in the world of desserts and ice cream. Made from the finest cocoa, it offers a deep, velvety richness that melts in your mouth. Its perfectly balanced sweetness and creamy texture create an irresistible treat, making it the ultimate indulgence for chocolate lovers.",
        flavor_main_text7: "Mint & Lemon Flavor",
        flavor_info_text7: "A Refreshing and Invigorating Experience",
        flavor_p_text7: "Mint & Lemon flavor is a perfect fusion of cool mint and zesty lemon, offering a refreshing and revitalizing experience. The crisp citrus notes blend harmoniously with the soothing minty freshness, creating a vibrant balance of tanginess and coolness. This invigorating combination is ideal for those who crave a light yet bold taste that awakens the senses with every spoonful.",
        flavor_main_text8: "Oreo Flavor",
        flavor_info_text8: "A Classic Indulgence",
        flavor_p_text8: "Oreo flavor is one of the most beloved and iconic choices in the world of desserts and ice cream. With its rich chocolate cookies blended into a creamy vanilla base, it delivers the perfect balance of crunch and smoothness. This flavor is ideal for those who crave the nostalgic taste of cookies and cream in every bite.",
        flavor_main_text9: "Pineapple Flavor",
        flavor_info_text9: "A Tropical Delight in Every Bite",
        flavor_p_text9: "Pineapple flavor is one of the most refreshing and vibrant choices in the world of desserts and ice cream. This golden tropical fruit is celebrated for its juicy sweetness, perfectly balanced with a hint of tangy citrus zest. It is an ideal option for those who enjoy exotic flavors and a bright, fruity taste that transports you to a sun-kissed paradise.",
        flavor_main_text10: "Pistachio Flavor",
        flavor_info_text10: "A Luxurious and Authentic Delight",
        flavor_p_text10: "Pistachio flavor is a symbol of elegance and indulgence in the world of desserts and ice cream. Known for its rich, nutty essence and velvety smooth texture, this flavor offers a perfect balance between natural sweetness and a delicate roasted taste. It is the ultimate choice for those who appreciate authentic, creamy flavors with a refined touch.",
        flavor_main_text11: "Pomegranate Flavor",
        flavor_info_text11: "An Unforgettable Taste Experience",
        flavor_p_text11: "Pomegranate flavor is one of the most vibrant and distinctive flavors used in the world of desserts and ice cream. This ruby-red fruit is known for its unique taste, perfectly blending natural sweetness with a bold tartness. It is an ideal choice for those who appreciate refreshing, fruity flavors with a rich and authentic essence.",
        flavor_main_text12: "Salted Caramel Flavor",
        flavor_info_text12: "A Perfect Harmony of Sweet and Salty",
        flavor_p_text12: "Salted caramel is one of the most indulgent and well-loved flavors in the world of desserts and ice cream. This golden delight masterfully blends rich, buttery caramel with a subtle touch of sea salt, creating a luxurious taste that balances sweetness with a hint of savory depth. It is an ideal choice for those who enjoy bold flavors and a truly satisfying treat.",
        flavor_main_text13: "Strawberry Flavor",
        flavor_info_text13: "A Sweet and Refreshing Delight",
        flavor_p_text13: "Strawberry flavor is one of the most beloved and classic choices in the world of desserts and ice cream. This bright red fruit is known for its naturally sweet and slightly tangy taste, delivering a perfect balance of freshness and indulgence. A delightful option for those who love fruity, refreshing flavors with a smooth and creamy texture.",
        flavor_main_text14: "Tiramisu Flavor",
        flavor_info_text14: "A Luxurious and Indulgent Delight",
        flavor_p_text14: "Tiramisu flavor is one of the most refined and beloved choices in the world of desserts and ice cream. Inspired by the classic Italian dessert, this flavor masterfully blends the richness of espresso-soaked ladyfingers with the smoothness of mascarpone cream, topped with a hint of cocoa. It is the perfect choice for those who crave a sophisticated, coffee-infused treat with a creamy, velvety finish.",
        flavor_main_text15: "Vanilla Flavor",
        flavor_info_text15: "A Timeless Taste of Elegance",
        flavor_p_text15: "Vanilla flavor is one of the most classic and beloved flavors in the world of desserts and ice cream. This smooth, creamy delight is known for its rich, aromatic essence, delivering a perfect balance of sweetness and warmth. It is an ideal choice for those who appreciate simplicity with a touch of sophistication.",
        flavor_main_text16: "Watermelon Flavor",
        flavor_info_text16: "A Refreshing and Juicy Delight",
        flavor_p_text16: "Watermelon flavor captures the essence of summer with its sweet, juicy, and refreshing taste. This vibrant fruit is loved for its light and hydrating nature, offering a perfectly balanced sweetness with a crisp, cooling sensation. It’s an ideal choice for those who enjoy fresh, fruity flavors that invigorate the senses.",
    },
    ar: {
        en: "EN",
        ar: "AR",
        home: "الرئيسية",
        about: 'معلومات عنا',
        product: 'المنتجات',
        flavors: "النكهات",
        contact: 'اتصل بنا',
        name: "قرية المثلجات",
        main_text_hero: " <br>استمتع بألذ <br><span>آيس كريم</span>",
        main_text1: "أضف أسلوبًا لا يُنسى إلى جلساتك مع الأصدقاء مع الآيس كريم الخاص بنا",
        main_text2: "هناك أصناف في <span> قرية المثلجات </span>, لجميع الأوقات</p>",
        main_text3: "كل يوم هو وقت مثالي للمثلجات في <span>قرية المثلجات</span>",
        hero_btn: "عرض القائمة",

        // section flavors

        main_text_flavors: "جميع أنواع <span>النكهات</span>",
        flavor1: "مانجو",
        flavor2: "فانيلا",
        flavor3: "شوكولا",
        View_all_btn: "عرض المزيد",

        // section carts

        main_text_carts: "عربة المثلجات",
        info_text_carts: "نقدم لكم خدمتنا الجديدة المميزة عربة المثلجات التي يتم ارسالها لتغطية الحفلات والمناسبات بكامل أنواعها",
        name_cart1: "عربة 50 كوب",
        name_cart2: "عربة 100 كوب",
        name_cart3: "عربة 200 كوب",
        name_cart4: "عربة 300 كوب",
        name_cart5: "عربة 400 كوب",
        name_cart6: "عربة 500 كوب",
        service_providers: "مقدم خدمة",
        work_hours: "الساعات",
        price: "السعر",

        // section about

        main_text_about: "معلومات عنا",
        info_text_about: "من مجرد فكرة إلى واقع ناجح، هذه هي رحلتنا",
        text_about_1_h4: "تعرف علينا عن قرب",
        text_about_1_p: "برانـــد سعودي لدينا خبرة طويلة في تقديم المثلجــات بالطريقــه الايطاليــه التقليديـــه بالعر بــات وهي متاحـة للافراد والشركات في المناسبات والزواجــات والفعاليات المختلفة كما يوجد احجام وانواع للعر بة تقدم لكم وفقا لنوع المناسبه",
        text_about_2_h4: "إمكانياتنا في توفير كافة أصناف المثلجات",
        text_about_1_li1: "حرصنـا عـلى توفيـر كافـة أصنـاف المثلجـات العالميـة والمحليـة بنكهات مميزة",
        text_about_1_li2: "كمـا تميزنـا بتوفيـر طلبـك وصناعتـه حتـى فـي حـال عـدم توفـره في منيو الأصناف",

        // section Contact

        main_text_Contact: "تواصل معنا",
        info_text_Contact: "هل لديك سؤال؟ نحن هنا لمساعدتك",

        // ------------ Page flavors ------------
        main_text_flavor_page: "<span>نكهاتنا </span>ليست مجرد طعم <br> بل هي تجربة وقصة تُروى",

        flavor_main_text1: "نكهة التوت الأسود",
        flavor_info_text1: "تجربة طعم لا تُنسى",
        flavor_p_text1: "نكهة التوت الأسود تُعد واحدة من أغنى وأميز النكهات المستخدمة في عالم الحلويات والآيس كريم. يتميز هذا التوت الصغير ذو اللون الأرجواني الداكن بمذاقه الفريد الذي يجمع بين الحلاوة الخفيفة ونكهة لاذعة منعشة، مما يجعله خيارًا مثاليًا لعشاق النكهات الطبيعية والمذاق الفاكهي الغني",

        flavor_main_text2: "نكهة المانجو",
        flavor_info_text2: "متعة استوائية في كل لقمة",
        flavor_p_text2: "تُعتبر نكهة المانجو واحدة من أكثر النكهات اللذيذة والاستوائية في عالم الحلويات والآيس كريم. تتميز هذه الفاكهة الذهبية بنكهتها الحلوة والعصيرية، مقدمة توازنًا مثاليًا بين الغنى الاستوائي والقوام الكريمي الناعم، مما يجعلها الخيار الأمثل لمن يبحثون عن تجربة فاكهية منعشة برائحة جذابة لا تُقاوم",

        flavor_main_text3: "نكهة العلكة",
        flavor_info_text3: "متعة مرحة مليئة بالذكريات",
        flavor_p_text3: "تُعيد نكهة العلكة ذكريات الطفولة في كل لقمة، حيث تمتزج الحلاوة السكرية مع نكهة مرحة تمنحك تجربة ممتعة ومثيرة. إنها الخيار المثالي لعشاق النكهات النابضة بالحياة التي تبقى دائمًا في القمة",

        flavor_main_text4: "نكهة بلوبيري",
        flavor_info_text4: "مزيج رائع من الحلاوة والحموضة",
        flavor_p_text4: "تتميز نكهة البلوبيري بمزيج رائع من الحلاوة الطبيعية والحموضة الخفيفة، مما يجعلها واحدة من أكثر النكهات المحبوبة في عالم الحلويات والآيس كريم. هذه التوتات الصغيرة الزرقاء مليئة بالنكهة الغنية والمنعشة، مما يخلق توازنًا مثاليًا بين الطعم الفاكهي العميق والقوام الكريمي الناعم",

        flavor_main_text5: "نكهة التشيز كيك",
        flavor_info_text5: "متعة كريمية لا تُقاوم",
        flavor_p_text5: "تجمع نكهة التشيز كيك بين القوام المخملي الغني للجبن الكريمي وتوازن مثالي بين الحلاوة ونكهة خفيفة من الحموضة. هذه النكهة الفاخرة تعكس جوهر التشيز كيك الطازج، مما يجعلها خيارًا مثاليًا لعشاق الحلويات الكريمية الناعمة",

        flavor_main_text6: "نكهة شوكولا",
        flavor_info_text6: "تجربة غنية وفاخرة",
        flavor_p_text6: "تُعد نكهة شوكولا واحدة من أكثر النكهات الكلاسيكية والمحبوبة عالميًا في عالم الحلويات والآيس كريم. مصنوعة من أنقى أنواع الكاكاو، تقدم نكهة غنية مخملية تذوب في الفم، بتوازن مثالي بين الحلاوة والقوام الكريمي، مما يجعلها الاختيار الأمثل لعشاق شوكولا",

        flavor_main_text7: "نكهة النعناع والليمون",
        flavor_info_text7: "انتعاش وحيوية في كل لقمة",
        flavor_p_text7: "تمزج نكهة النعناع والليمون بين الانتعاش المنعش للنعناع وحموضة الليمون الزاهية، مما يوفر تجربة حيوية ومنعشة. تمتزج المكونات بتناغم رائع، مما يمنحك توازنًا فريدًا بين الطعم اللاذع والبرودة المنعشة",

        flavor_main_text8: "نكهة الأوريو",
        flavor_info_text8: "استمتاع كلاسيكي لا يُقاوم",
        flavor_p_text8: "تُعد نكهة الأوريو واحدة من أكثر النكهات المحبوبة والأيقونية في عالم الحلويات والآيس كريم. تمتزج قطع البسكويت الغنية بشوكولا مع قاعدة فانيليا كريمية، لتقدم توازنًا مثاليًا بين القوام المقرمش والنعومة الكريمية",

        flavor_main_text9: "نكهة الأناناس",
        flavor_info_text9: "مذاق استوائي منعش في كل لقمة",
        flavor_p_text9: "تُعتبر نكهة الأناناس واحدة من أكثر النكهات المنعشة والنابضة بالحياة في عالم الحلويات والآيس كريم. تتميز هذه الفاكهة الاستوائية الذهبية بحلاوتها العصيرية التي تتوازن مع لمسة خفيفة من الحموضة الحمضية، مما يجعلها خيارًا مثاليًا لعشاق النكهات الفاكهية المنعشة",

        flavor_main_text10: "نكهة الفستق",
        flavor_info_text10: "تجربة فاخرة وأصيلة",
        flavor_p_text10: "ترمز نكهة الفستق إلى الفخامة والتميز في عالم الحلويات والآيس كريم. بنكهتها الغنية والجوزية وقوامها الناعم المخملي، تقدم هذه النكهة توازنًا مثاليًا بين الحلاوة الطبيعية والطعم المحمص الخفيف",

        flavor_main_text11: "نكهة الرمان",
        flavor_info_text11: "تجربة طعم لا تُنسى",
        flavor_p_text11: "تُعد نكهة الرمان من أكثر النكهات المميزة والنابضة بالحياة في عالم الحلويات والآيس كريم. تتميز هذه الفاكهة الياقوتية بمذاقها الفريد الذي يجمع بين الحلاوة الطبيعية والحموضة القوية، مما يجعلها خيارًا مثاليًا لعشاق النكهات الفاكهية المنعشة",

        flavor_main_text12: "نكهة الكراميل المملح",
        flavor_info_text12: "تناغم مثالي بين الحلو والمالح",
        flavor_p_text12: "يُعتبر الكراميل المملح من أكثر النكهات الفاخرة والمحبوبة في عالم الحلويات والآيس كريم. يمتزج الكراميل الغني والزبداني مع لمسة خفيفة من ملح البحر، ليخلق تجربة طعم متوازنة تجمع بين الحلاوة والعمق المالح",

        flavor_main_text13: "نكهة الفراولة",
        flavor_info_text13: "حلاوة وانتعاش في كل لقمة",
        flavor_p_text13: "تُعد نكهة الفراولة من أكثر النكهات الكلاسيكية والمحبوبة في عالم الحلويات والآيس كريم. تتميز هذه الفاكهة الحمراء الزاهية بمذاقها الحلو الطبيعي مع لمسة خفيفة من الحموضة، مما يجعلها خيارًا رائعًا لعشاق النكهات الفاكهية المنعشة",

        flavor_main_text14: "نكهة التيراميسو",
        flavor_info_text14: "رفاهية ومتعة لا تُقاوم",
        flavor_p_text14: "تستلهم نكهة التيراميسو من الحلوى الإيطالية الكلاسيكية، حيث تمتزج غنى الإسبريسو بنعومة كريمة الماسكاربوني، مع لمسة نهائية من الكاكاو، مما يجعلها الخيار المثالي لعشاق النكهات الراقية الغنية بالقهوة",

        flavor_main_text15: "نكهة الفانيليا",
        flavor_info_text15: "مذاق كلاسيكي بأناقة لا تُضاهى",
        flavor_p_text15: "تُعد نكهة الفانيليا واحدة من أكثر النكهات الكلاسيكية والمحبوبة في عالم الحلويات والآيس كريم. تتميز بملمسها الكريمي الناعم ورائحتها العطرية الغنية، مما يجعلها الخيار الأمثل لعشاق البساطة الممزوجة بالفخامة",

        flavor_main_text16: "نكهة الحبحب",
        flavor_info_text16: "انتعاش صيفي بطعم لذيذ",
        flavor_p_text16: "تجسد نكهة الحبحب جوهر الصيف بمذاقها الحلو والمنعش. تُعد هذه الفاكهة النابضة بالحياة خيارًا مثاليًا لمحبي النكهات الخفيفة التي تتميز بالحلاوة الطبيعية والشعور المنعش. يقدم الحبحب مزيجًا مثاليًا بين الطعم السكري والإحساس البارد، مما يجعله تجربة لا تُقاوم لمحبي النكهات الفاكهية الطازجة",

    }

};

let rtlLanguages = ['ar']; // قائمة اللغات التي تتطلب الاتجاه من اليمين إلى اليسار
document.getElementById('languageSelector').addEventListener('change', (e) => {
    let selectedLang = e.target.value;
    localStorage.setItem('selectedLanguage', selectedLang);
    applyTranslations(selectedLang);
    applyFont(selectedLang);
});

function applyTranslations(language) {
    document.querySelectorAll('[data-key]').forEach((element) => {
        let key = element.getAttribute('data-key');
        if (translations[language][key]) {
            element.innerHTML = translations[language][key];
        }
    });
    document.querySelectorAll('[data-key]').forEach((element) => {
        let key = element.getAttribute('data-key');
        element.innerHTML = translations[language][key];
    });



    let elements = document.querySelectorAll(".rotat");
    let rotatNot = document.querySelectorAll(".rotatNot");
    let textRightElements = document.querySelectorAll(".text_right");
    let textCenterElements = document.querySelectorAll(".text_center");
    let services1 = document.querySelectorAll("#services1");
    let lists = document.querySelectorAll('.list');
    let text_pp = document.querySelectorAll(".textp_pp");
    let text_hero = document.querySelectorAll(".text_hero");
    let carousel_pp = document.querySelectorAll(".carousel_pp");
    let nav_item = document.querySelectorAll(".nav-link");

    lists.forEach((element) => {
        element.style.direction = rtlLanguages.includes(language) ? 'rtl' : 'ltr';
    });

    elements.forEach((element) => {
        element.style.direction = rtlLanguages.includes(language) ? 'rtl' : 'ltr';
    });

    rotatNot.forEach((element) => {
        if (rtlLanguages.includes(language)) {
            element.style.direction = 'ltr';
        }
    });

    textRightElements.forEach((element) => {
        element.style.textAlign = rtlLanguages.includes(language) ? 'right' : 'left';
    });

    textCenterElements.forEach((element) => {
        element.style.textAlign = rtlLanguages.includes(language) ? 'center' : 'left';
    });

    services1.forEach((element) => {
        element.style.letterSpacing = rtlLanguages.includes(language) ? '0' : '5px';
    });


    text_pp.forEach((element) => {
        if (rtlLanguages.includes(language)) {
            element.style.setProperty("font-size", "22px")
        } else {
            element.style.removeProperty("font-size"); // إزالة أي تخصيص ليعود للوضع الافتراضي في CSS
        }
    });

    text_hero.forEach((element) => {
        if (rtlLanguages.includes(language)) {
            element.style.setProperty("font-size", "90px");
        } else {
            element.style.removeProperty("font-size"); // إزالة أي تخصيص ليعود للوضع الافتراضي في CSS
        }
    });
    carousel_pp.forEach((element) => {
        if (rtlLanguages.includes(language)) {
            element.style.setProperty("font-size", "30px");
        } else {
            element.style.removeProperty("font-size"); // إزالة أي تخصيص ليعود للوضع الافتراضي في CSS
        }
    });

    nav_item.forEach((element) => {
        if (rtlLanguages.includes(language)) {
            element.style.setProperty("font-size", "22px", "important");
        } else {
            element.style.removeProperty("font-size"); // إزالة أي تخصيص ليعود للوضع الافتراضي في CSS
        }
    });



}

function applyFont(language) {
    let body = document.body;
    if (rtlLanguages.includes(language)) {
        body.style.fontFamily = '"Noto Kufi Arabic", serif';
    } else {
        body.style.removeProperty("font-family"); // إزالة الإعداد ليأخذ الخط من CSS
    }
}


document.addEventListener('DOMContentLoaded', function () {
    let savedLanguage = localStorage.getItem('selectedLanguage') || (navigator.language.startsWith('en') ? 'ar' : 'en');
    document.getElementById('languageSelector').value = savedLanguage;
    applyTranslations(savedLanguage);
    applyFont(savedLanguage);

    // تصحيح تعيين الحقل "subject" بناءً على اللغة
    const subjectInput = document.getElementById('subject');
    if (subjectInput) {
        const value = subjectInput.getAttribute(`data-key-${savedLanguage}`);
        if (value) subjectInput.value = value;
    }
});