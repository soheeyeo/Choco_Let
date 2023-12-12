const chocolates = [
    {
        name: "킨더 초콜릿 4개입",
        brand: "킨더",
        price: 1700,
        recommendation: 5,
        country: "이탈리아",
        flavor: "플레인",
        type: "밀크",
        description: `킨더 초콜릿은 부드러운 우유와 달콤한 밀크 초콜릿의 조화로 오랜 기간 아이들에게 사랑받고 있는 초콜릿입니다. \n낱개 포장으로 휴대가 간편하고, 나누어 먹기 좋은 작은 패키지로 구성되어 있습니다. \n어린 아이들 선물이나 간식용으로 추천드립니다.`,
        image: "/assets/chocolate/kinder.webp",
        url: "https://www.lotteon.com/p/product/LM0000080177609",
    },
    {
        name: "킨더 초콜릿 맥시 T-6",
        brand: "킨더",
        price: 4000,
        recommendation: 5,
        country: "이탈리아",
        flavor: "플레인",
        type: "밀크",
        description: `킨더 초콜릿은 부드러운 우유와 달콤한 밀크 초콜릿의 조화로 오랜 기간 아이들에게 사랑받고 있는 초콜릿입니다. \n킨더 초콜릿 맥시는 낱개 포장의 빅 사이즈 초콜릿으로 맛과 양적인 만족감을 제공합니다. \n어린 아이들 선물이나 간식용으로 추천드립니다.`,
        image: "/assets/chocolate/kinder_maxi.webp",
        url: "https://www.ssg.com/item/itemView.ssg?itemId=0000009027397",
    },
    {
        name: "킨더 초콜릿 미니 T-20",
        brand: "킨더",
        price: 4180,
        recommendation: 4,
        country: "이탈리아",
        flavor: "플레인",
        type: "밀크",
        description: `킨더 초콜릿은 부드러운 우유와 달콤한 밀크 초콜릿의 조화로 오랜 기간 아이들에게 사랑받고 있는 초콜릿입니다. \n킨더 초콜릿 미니는 한 입에 쏙 들어가는 미니 사이즈의 초콜릿으로 낱개 포장되어 있습니다. \n어린 아이들 선물이나 간식용으로 추천드립니다.`,
        image: "/assets/chocolate/kinder_mini.webp",
        url: "https://www.ssg.com/item/itemView.ssg?itemId=1000055827176",
    },
    {
        name: "킨더 조이 걸",
        brand: "킨더",
        price: 2100,
        recommendation: 6,
        country: "이탈리아",
        flavor: "헤이즐넛",
        type: "밀크",
        description: `킨더 조이는 달콤한 초콜릿과 장난감을 동시에 즐길 수 있는 초콜릿입니다. \n부드러운 우유 크림과 헤이즐넛 맛의 코코아 크림 속의 코코아 볼으로 달콤함과 식감까지 동시에 즐길 수 있습니다.\n어린 아이들 선물으로 추천드립니다.`,
        image: "/assets/chocolate/kinder_joy_girl.webp",
        url: "https://www.ssg.com/item/itemView.ssg?itemId=1000024919989",
    },
    {
        name: "킨더 조이 보이",
        brand: "킨더",
        price: 2100,
        recommendation: 6,
        country: "이탈리아",
        flavor: "헤이즐넛",
        type: "밀크",
        description: `킨더 조이는 달콤한 초콜릿과 장난감을 동시에 즐길 수 있는 초콜릿입니다. \n부드러운 우유 크림과 헤이즐넛 맛의 코코아 크림 속의 코코아 볼으로 달콤함과 식감까지 동시에 즐길 수 있습니다.\n어린 아이들 선물으로 추천드립니다.`,
        image: "/assets/chocolate/kinder_joy_boy.webp",
        url: "https://www.ssg.com/item/itemView.ssg?itemId=1000024920056",
    },
    {
        name: "밀카 알프스 밀크 초콜릿",
        brand: "밀카",
        price: 3200,
        recommendation: 5,
        country: "독일",
        flavor: "플레인",
        type: "밀크",
        description: "",
        image: "/assets/chocolate/milka_milk.webp",
        url: "https://www.ssg.com/item/itemView.ssg?itemId=1000031903349",
    },
    {
        name: "밀카 스트로베리",
        brand: "밀카",
        price: 3200,
        recommendation: 7,
        country: "독일",
        flavor: "딸기",
        type: "밀크",
        description: "",
        image: "/assets/chocolate/milka_strawberry.webp",
        url: "https://www.ssg.com/item/itemView.ssg?itemId=1000031903346",
    },
    {
        name: "밀카 오레오",
        brand: "밀카",
        price: 3200,
        recommendation: 7,
        country: "독일",
        flavor: "오레오",
        type: "밀크",
        description: "",
        image: "/assets/chocolate/milka_oreo.webp",
        url: "https://www.ssg.com/item/itemView.ssg?itemId=1000031903347",
    },
    {
        name: "밀카 버블리",
        brand: "밀카",
        price: 3200,
        recommendation: 6,
        country: "독일",
        flavor: "플레인",
        type: "밀크",
        description: "",
        image: "/assets/chocolate/milka_bubbly.webp",
        url: "https://front.homeplus.co.kr/item?itemNo=053612474&storeType=HYPER",
    },
    {
        name: "페레로 로쉐 3개입",
        brand: "페레로",
        price: 2700,
        recommendation: 4,
        country: "이탈리아",
        flavor: "헤이즐넛",
        type: "프랄린",
        description: "",
        image: "/assets/chocolate/ferrero_rocher_3.webp",
        url: "https://www.ssg.com/item/itemView.ssg?itemId=1000036668250",
    },
    {
        name: "페레로 콜렉션 T-9",
        brand: "페레로",
        price: 10600,
        recommendation: 5,
        country: "이탈리아",
        flavor: "헤이즐넛",
        type: "프랄린",
        description: "",
        image: "/assets/chocolate/ferrero_collection_t9.webp",
        url: "https://www.ssg.com/item/itemView.ssg?itemId=0000010370470",
    },
    {
        name: "노브랜드 다크 초콜릿",
        brand: "노브랜드",
        price: 980,
        recommendation: 5,
        country: "대한민국",
        flavor: "플레인",
        type: "다크",
        description: "",
        image: "/assets/chocolate/nobrand_dark.webp",
        url: "https://www.ssg.com/item/itemView.ssg?itemId=1000532501706",
    },
    {
        name: "노브랜드 밀크 초콜릿",
        brand: "노브랜드",
        price: 980,
        recommendation: 5,
        country: "대한민국",
        flavor: "플레인",
        type: "밀크",
        description: "",
        image: "/assets/chocolate/nobrand_milk.webp",
        url: "",
    },
    {
        name: "노브랜드 카라멜 아몬드 초콜릿",
        brand: "노브랜드",
        price: 1480,
        recommendation: 6,
        country: "대한민국",
        flavor: "아몬드",
        type: "밀크",
        description: "",
        image: "/assets/chocolate/nobrand_caramel.webp",
        url: "https://www.ssg.com/item/itemView.ssg?itemId=1000054980769",
    },
    {
        name: "토니스 밀크 초콜릿 헤이즐넛",
        brand: "토니스",
        price: 3400,
        recommendation: 6,
        country: "네덜란드",
        flavor: "헤이즐넛",
        type: "밀크",
        description: "",
        image: "/assets/chocolate/tonny's_hazelnut.webp",
        url: "https://emart.ssg.com/item/itemView.ssg?itemId=1000564930839",
    },
    {
        name: "토니스 다크 초콜릿",
        brand: "토니스",
        price: 3400,
        recommendation: 6,
        country: "네덜란드",
        flavor: "플레인",
        type: "다크",
        description: "",
        image: "/assets/chocolate/tonny's_dark.webp",
        url: "https://emart.ssg.com/item/itemView.ssg?itemId=1000564930832",
    },
    {
        name: "토니스 다크 아몬드 초콜릿",
        brand: "토니스",
        price: 3400,
        recommendation: 6,
        country: "네덜란드",
        flavor: "아몬드",
        type: "다크",
        description: "",
        image: "/assets/chocolate/tonny's_dark_almond.webp",
        url: "https://emart.ssg.com/item/itemDtl.ssg?itemId=1000564930834",
    },
    {
        name: "토니스 허니 아몬드 누가 밀크 초콜릿",
        brand: "토니스",
        price: 8900,
        recommendation: 7,
        country: "네덜란드",
        flavor: "누가",
        type: "밀크",
        description: "",
        image: "/assets/chocolate/tonny's_honey_almond_nougat.webp",
        url: "https://www.oliveyoung.co.kr/store/goods/getGoodsDetail.do?goodsNo=A000000178949",
    },
    {
        name: "토니스 카라멜 씨솔트 밀크 초콜릿",
        brand: "토니스",
        price: 8900,
        recommendation: 7,
        country: "네덜란드",
        flavor: "카라멜",
        type: "다크",
        description: "",
        image: "/assets/chocolate/tonny's_caramel_seasalt.webp",
        url: "https://www.oliveyoung.co.kr/store/goods/getGoodsDetail.do?goodsNo=A000000178954",
    },
    {
        name: "토니스 밀크 초콜릿",
        brand: "토니스",
        price: 8900,
        recommendation: 6,
        country: "네덜란드",
        flavor: "플레인",
        type: "밀크",
        description: "",
        image: "/assets/chocolate/tonny's_milk.webp",
        url: "https://www.oliveyoung.co.kr/store/goods/getGoodsDetail.do?goodsNo=A000000178946",
    },
    {
        name: "부샤드 밀크 초콜릿",
        brand: "부샤드",
        price: 6300,
        recommendation: 5,
        country: "벨기에",
        flavor: "플레인",
        type: "다크",
        description: "",
        image: "/assets/chocolate/bouchard_milk.webp",
        url: "https://www.ssg.com/item/itemView.ssg?itemId=1000520910032",
    },
    {
        name: "부샤드 다크 초콜릿 72%",
        brand: "부샤드",
        price: 6300,
        recommendation: 4,
        country: "벨기에",
        flavor: "플레인",
        type: "밀크",
        description: "",
        image: "/assets/chocolate/bouchard_dark.webp",
        url: "https://front.homeplus.co.kr/item?itemNo=069579223",
    },
    {
        name: "부샤드 카라멜&씨솔트 밀크 초콜릿",
        brand: "부샤드",
        price: 6300,
        recommendation: 8,
        country: "벨기에",
        flavor: "카라멜",
        type: "밀크",
        description: "",
        image: "/assets/chocolate/bouchard_seasalt.webp",
        url: "https://www.ssg.com/item/itemView.ssg?itemId=1000520910039",
    },
    {
        name: "린트 린도볼 어쏘티드",
        brand: "린트",
        price: 18000,
        recommendation: 9,
        country: "스위스",
        flavor: "믹스",
        type: "믹스",
        description: "",
        image: "/assets/chocolate/lindt_lindor_assorted.webp",
        url: "https://www.ssg.com/item/itemView.ssg?itemId=1000520910039",
    },
    {
        name: "린트 린도볼 밀크",
        brand: "린트",
        price: 18000,
        recommendation: 8,
        country: "스위스",
        flavor: "플레인",
        type: "밀크",
        description: "",
        image: "/assets/chocolate/lindt_lindor_milk.webp",
        url: "https://www.ssg.com/item/itemView.ssg?itemId=1000520910039",
    },
    {
        name: "린트 린도볼 헤이즐넛",
        brand: "린트",
        price: 18000,
        recommendation: 8,
        country: "스위스",
        flavor: "헤이즐넛",
        type: "밀크",
        description: "",
        image: "/assets/chocolate/lindt_lindor_hazelnut.webp",
        url: "https://www.ssg.com/item/itemView.ssg?itemId=1000520910039",
    },
    {
        name: "리터 스포트 알파인 밀크 초콜릿",
        brand: "리터 스포트",
        price: 4500,
        recommendation: 6,
        country: "독일",
        flavor: "플레인",
        type: "밀크",
        description: "",
        image: "/assets/chocolate/rittersport_milk.webp",
        url: "https://www.ssg.com/item/itemView.ssg?itemId=1000055970654",
    },
    {
        name: "리터 스포트 딸기 요거트",
        brand: "리터 스포트",
        price: 4500,
        recommendation: 6,
        country: "독일",
        flavor: "딸기",
        type: "밀크",
        description: "",
        image: "/assets/chocolate/rittersport_strawberry_yogurt.webp",
        url: "https://www.ssg.com/item/itemView.ssg?itemId=1000037012601",
    },
    {
        name: "리터 스포트 버터 비스킷",
        brand: "리터 스포트",
        price: 4500,
        recommendation: 7,
        country: "독일",
        flavor: "비스킷",
        type: "밀크",
        description: "",
        image: "/assets/chocolate/rittersport_biscuit.webp",
        url: "https://www.ssg.com/item/itemView.ssg?itemId=1000520910039",
    },
    {
        name: "리터 스포트 콘플레이크",
        brand: "리터 스포트",
        price: 4500,
        recommendation: 7,
        country: "독일",
        flavor: "콘플레이크",
        type: "밀크",
        description: "",
        image: "/assets/chocolate/rittersport_cornflakes.webp",
        url: "https://www.ssg.com/item/itemView.ssg?itemId=1000040249541",
    },
    {
        name: "리터 미니 초콜릿 믹스 8p",
        brand: "리터 스포트",
        price: 7500,
        recommendation: 6,
        country: "독일",
        flavor: "믹스",
        type: "믹스",
        description: "",
        image: "/assets/chocolate/rittersport_mini.webp",
        url: "https://www.ssg.com/item/itemView.ssg?itemId=1000518329649",
    },
    {
        name: "리터 초코큐브 요거트 러브",
        brand: "리터 스포트",
        price: 9900,
        recommendation: 7,
        country: "독일",
        flavor: "요거트",
        type: "믹스",
        description: "",
        image: "/assets/chocolate/rittersport_love.webp",
        url: "https://front.homeplus.co.kr/item?itemNo=127794260",
    },
    {
        name: "리터 초코큐브 초콜릿 포유",
        brand: "리터 스포트",
        price: 9900,
        recommendation: 7,
        country: "독일",
        flavor: "믹스",
        type: "믹스",
        description: "",
        image: "/assets/chocolate/rittersport_foryou.webp",
        url: "https://front.homeplus.co.kr/item?itemNo=127794438",
    },
    {
        name: "리터 초코큐브 땡큐",
        brand: "리터 스포트",
        price: 9900,
        recommendation: 7,
        country: "독일",
        flavor: "믹스",
        type: "믹스",
        description: "",
        image: "/assets/chocolate/rittersport_thank.webp",
        url: "https://www.ssg.com/item/itemView.ssg?itemId=2097001525814",
    },
    {
        name: "몰티져스 밀크",
        brand: "몰티져스",
        price: 1500,
        recommendation: 4,
        country: "영국",
        flavor: "플레인",
        type: "밀크",
        description: "",
        image: "/assets/chocolate/maltesers_milk.webp",
        url: "https://www.ssg.com/item/itemView.ssg?itemId=1000040900989",
    },
    {
        name: "몰티져스 다크",
        brand: "몰티져스",
        price: 1500,
        recommendation: 4,
        country: "영국",
        flavor: "플레인",
        type: "다크",
        description: "",
        image: "/assets/chocolate/maltesers_dark.webp",
        url: "https://www.ssg.com/item/itemView.ssg?itemId=1000040901013",
    },
    {
        name: "휘태커스 씨쏠트&카라멜 밀크 초콜릿",
        brand: "휘태커스",
        price: 6500,
        recommendation: 6,
        country: "뉴질랜드",
        flavor: "카라멜",
        type: "밀크",
        description: "",
        image: "/assets/chocolate/whittaker's_seasalt.webp",
        url: "https://www.ssg.com/item/itemView.ssg?itemId=1000031039680",
    },
    {
        name: "휘태커스 페어&마누카꿀 밀크 초콜릿",
        brand: "휘태커스",
        price: 6500,
        recommendation: 6,
        country: "뉴질랜드",
        flavor: "배",
        type: "밀크",
        description: "",
        image: "/assets/chocolate/whittaker's_pear.webp",
        url: "https://www.ssg.com/item/itemView.ssg?itemId=1000031039676",
    },
    {
        name: "휘태커스 로스티드 슈프림 커피 다크 초콜릿",
        brand: "휘태커스",
        price: 6500,
        recommendation: 5,
        country: "뉴질랜드",
        flavor: "커피",
        type: "다크",
        description: "",
        image: "/assets/chocolate/whittaker's_roasted_supreme_coffee.webp",
        url: "https://www.ssg.com/item/itemView.ssg?itemId=1000280759122",
    },
    {
        name: "칼파제르 셀렉션",
        brand: "칼파제르",
        price: 7000,
        recommendation: 5,
        country: "핀란드",
        flavor: "믹스",
        type: "밀크",
        description: "",
        image: "/assets/chocolate/karl_fazer_selection.webp",
        url: "https://www.ssg.com/item/itemView.ssg?itemId=1000521594820",
    },
    {
        name: "칼파제르 밀크 초콜릿",
        brand: "칼파제르",
        price: 7000,
        recommendation: 4,
        country: "핀란드",
        flavor: "플레인",
        type: "밀크",
        description: "",
        image: "/assets/chocolate/karl_fazer_milk.webp",
        url: "https://www.ssg.com/item/itemView.ssg?itemId=1000524075862",
    },
    {
        name: "칼파제르 다크 초콜릿",
        brand: "칼파제르",
        price: 7000,
        recommendation: 4,
        country: "핀란드",
        flavor: "플레인",
        type: "다크",
        description: "",
        image: "/assets/chocolate/karl_fazer_dark.webp",
        url: "https://www.ssg.com/item/itemView.ssg?itemId=1000521594036",
    },
    {
        name: "칼파제르 민트 필링 다크 초콜릿",
        brand: "칼파제르",
        price: 7000,
        recommendation: 4,
        country: "핀란드",
        flavor: "민트",
        type: "다크",
        description: "",
        image: "/assets/chocolate/karl_fazer_mint.webp",
        url: "https://www.ssg.com/item/itemView.ssg?itemId=1000521593546",
    },
    {
        name: "칼파제르 스트로베리",
        brand: "칼파제르",
        price: 7000,
        recommendation: 6,
        country: "핀란드",
        flavor: "딸기",
        type: "밀크",
        description: "",
        image: "/assets/chocolate/karl_fazer_strawberry.webp",
        url: "https://www.ssg.com/item/itemView.ssg?itemId=1000521594820",
    },
    {
        name: "기라델리 인텐스 다크 72% 스퀘어백",
        brand: "기라델리",
        price: 13800,
        recommendation: 7,
        country: "미국",
        flavor: "플레인",
        type: "다크",
        description: "",
        image: "/assets/chocolate/ghirardelli_dark_intense.webp",
        url: "https://www.ssg.com/item/itemView.ssg?itemId=1000055827174",
    },
    {
        name: "기라델리 다크&카라멜 씨솔트 스퀘어백",
        brand: "기라델리",
        price: 13800,
        recommendation: 9,
        country: "미국",
        flavor: "카라멜",
        type: "다크",
        description: "",
        image: "/assets/chocolate/ghirardelli_dark_caramel_seasalt.webp",
        url: "https://www.ssg.com/item/itemView.ssg?itemId=1000518329653",
    },
    {
        name: "기라델리 밀크&카라멜 스퀘어백",
        brand: "기라델리",
        price: 13800,
        recommendation: 9,
        country: "미국",
        flavor: "카라멜",
        type: "밀크",
        description: "",
        image: "/assets/chocolate/ghirardelli_milk_caramel.webp",
        url: "https://www.ssg.com/item/itemView.ssg?itemId=1000518329656",
    },
    {
        name: "기라델리 인텐스 다크 씨솔트 아몬드바",
        brand: "기라델리",
        price: 8000,
        recommendation: 7,
        country: "미국",
        flavor: "아몬드",
        type: "다크",
        description: "",
        image: "/assets/chocolate/ghirardelli_almond.webp",
        url: "https://www.ssg.com/item/itemView.ssg?itemId=1000040645833",
    },
    {
        name: "기라델리 인텐스 다크 솔티드 카라멜바",
        brand: "기라델리",
        price: 8000,
        recommendation: 8,
        country: "미국",
        flavor: "카라멜",
        type: "다크",
        description: "",
        image: "/assets/chocolate/ghirardelli_salted_caramel.webp",
        url: "https://www.ssg.com/item/itemView.ssg?itemId=1000040645702",
    },
    {
        name: "쇼게튼 알파인 밀크 초콜릿",
        brand: "쇼게튼",
        price: 3800,
        recommendation: 6,
        country: "독일",
        flavor: "플레인",
        type: "밀크",
        description: "",
        image: "/assets/chocolate/schogetten_milk.webp",
        url: "https://www.ssg.com/item/itemView.ssg?itemId=2097001076538",
    },
    {
        name: "쇼게튼 요거트 스트로베리 초콜릿",
        brand: "쇼게튼",
        price: 3800,
        recommendation: 7,
        country: "독일",
        flavor: "딸기",
        type: "밀크",
        description: "",
        image: "/assets/chocolate/schogetten_strawberry.webp",
        url: "https://www.ssg.com/item/itemView.ssg?itemId=2097001235591",
    },
    {
        name: "쇼게튼 블랙&화이트 초콜릿",
        brand: "쇼게튼",
        price: 3800,
        recommendation: 7,
        country: "독일",
        flavor: "쿠키",
        type: "밀크",
        description: "",
        image: "/assets/chocolate/schogetten_cookie.webp",
        url: "https://www.ssg.com/item/itemView.ssg?itemId=2097001745526",
    },
    {
        name: "쇼게튼 포 키즈 위드 밀크 초콜릿",
        brand: "쇼게튼",
        price: 3800,
        recommendation: 6,
        country: "독일",
        flavor: "플레인",
        type: "밀크",
        description: "",
        image: "/assets/chocolate/schogetten_kids.webp",
        url: "https://www.ssg.com/item/itemView.ssg?itemId=1000280143063",
    },
    {
        name: "쇼게튼 다크 초콜릿 위드 헤이즐넛 초콜릿",
        brand: "쇼게튼",
        price: 3800,
        recommendation: 6,
        country: "독일",
        flavor: "헤이즐넛",
        type: "다크",
        description: "",
        image: "/assets/chocolate/schogetten_hazelnuts.webp",
        url: "https://front.homeplus.co.kr/item?itemNo=069698738",
    },
    {
        name: "오설록 제주섬 녹차 초콜릿 바",
        brand: "오설록",
        price: 9900,
        recommendation: 6,
        country: "대한민국",
        flavor: "녹차",
        type: "다크",
        description: "",
        image: "/assets/chocolate/osulloc_chocolate_bar.webp",
        url: "https://www.osulloc.com/kr/ko/shop/item/bakery/6063",
    },
    {
        name: "오설록 제주섬 녹차 라즈베리 트러플",
        brand: "오설록",
        price: 13000,
        recommendation: 6,
        country: "대한민국",
        flavor: "녹차",
        type: "화이트",
        description: "",
        image: "/assets/chocolate/osulloc_rasberry.webp",
        url: "https://www.osulloc.com/kr/ko/shop/item/bakery/18783",
    },
    {
        name: "오설록 제주섬 녹차 아몬드볼",
        brand: "오설록",
        price: 9000,
        recommendation: 5,
        country: "대한민국",
        flavor: "녹차",
        type: "화이트",
        description: "",
        image: "/assets/chocolate/osulloc_almond_ball.webp",
        url: "https://www.osulloc.com/kr/ko/shop/item/bakery/17803",
    },
    {
        name: "엠앤엠즈 피넛",
        brand: "엠앤엠즈",
        price: 1500,
        recommendation: 3,
        country: "미국",
        flavor: "피넛",
        type: "밀크",
        description: "",
        image: "/assets/chocolate/m&m's_peanut.webp",
        url: "https://www.ssg.com/item/itemView.ssg?itemId=1000010706913",
    },
    {
        name: "엠앤엠즈 밀크",
        brand: "엠앤엠즈",
        price: 1500,
        recommendation: 2,
        country: "미국",
        flavor: "플레인",
        type: "밀크",
        description: "",
        image: "/assets/chocolate/m&m's_milk.webp",
        url: "https://www.ssg.com/item/itemView.ssg?itemId=1000010706915",
    },
    {
        name: "엠앤엠즈 크리스피",
        brand: "엠앤엠즈",
        price: 1500,
        recommendation: 3,
        country: "미국",
        flavor: "플레인",
        type: "밀크",
        description: "",
        image: "/assets/chocolate/m&m's_crispy.webp",
        url: "https://www.ssg.com/item/itemView.ssg?itemId=1000022024030",
    },
    {
        name: "엠앤엠즈 초콜릿 바 밀크",
        brand: "엠앤엠즈",
        price: 1500,
        recommendation: 2,
        country: "미국",
        flavor: "플레인",
        type: "밀크",
        description: "",
        image: "/assets/chocolate/m&m's_bar_milk.webp",
        url: "https://www.ssg.com/item/itemView.ssg?itemId=1000252587908",
    },
    {
        name: "엠앤엠즈 초콜릿 바 아몬드",
        brand: "엠앤엠즈",
        price: 1500,
        recommendation: 3,
        country: "미국",
        flavor: "아몬드",
        type: "밀크",
        description: "",
        image: "/assets/chocolate/m&m's_bar_almond.webp",
        url: "https://www.ssg.com/item/itemView.ssg?itemId=1000252587920",
    },
    {
        name: "엠앤엠즈 초콜릿 바 크리스피",
        brand: "엠앤엠즈",
        price: 1500,
        recommendation: 3,
        country: "미국",
        flavor: "플레인",
        type: "밀크",
        description: "",
        image: "/assets/chocolate/m&m's_bar_crispy.webp",
        url: "https://www.ssg.com/item/itemView.ssg?itemId=1000252587927",
    },
    {
        name: "앤디스 크림드 민트 초콜릿",
        brand: "앤디스",
        price: 4900,
        recommendation: 5,
        country: "미국",
        flavor: "민트",
        type: "다크",
        description: "",
        image: "/assets/chocolate/andes_creme_de_mint.webp",
        url: "https://www.ssg.com/item/itemView.ssg?itemId=1000004456287",
    },
    {
        name: "앤디스 민트 파르페 초콜릿",
        brand: "앤디스",
        price: 4900,
        recommendation: 5,
        country: "미국",
        flavor: "민트",
        type: "다크",
        description: "",
        image: "/assets/chocolate/andes_mint_parfait.webp",
        url: "https://www.ssg.com/item/itemView.ssg?itemId=1000004456287",
    },
    {
        name: "앤디스 토피 크런치 초콜릿",
        brand: "앤디스",
        price: 4900,
        recommendation: 6,
        country: "미국",
        flavor: "토피넛",
        type: "밀크",
        description: "",
        image: "/assets/chocolate/andes_toffee_crunch.webp",
        url: "https://www.oliveyoung.co.kr/store/goods/getGoodsDetail.do?goodsNo=A000000015859",
    },
    {
        name: "캐드베리 버블리 밀크 초콜릿",
        brand: "캐드베리",
        price: 6000,
        recommendation: 6,
        country: "영국",
        flavor: "플레인",
        type: "밀크",
        description: "",
        image: "/assets/chocolate/cadbury_bubbly.webp",
        url: "https://www.ssg.com/item/itemView.ssg?itemId=1000038260018",
    },
    {
        name: "피코크 리얼 다크 초콜릿 아몬드 바크씬",
        brand: "피코크",
        price: 7480,
        recommendation: 4,
        country: "대한민국",
        flavor: "아몬드",
        type: "다크",
        description: "",
        image: "/assets/chocolate/peacock_almond_bark.webp",
        url: "https://www.ssg.com/item/itemView.ssg?itemId=1000010746553",
    },
    {
        name: "피코크 리얼 다크 초콜릿 쿠키 크런치 바크씬",
        brand: "피코크",
        price: 7480,
        recommendation: 5,
        country: "대한민국",
        flavor: "쿠키",
        type: "다크",
        description: "",
        image: "/assets/chocolate/peacock_cookie.webp",
        url: "https://www.ssg.com/item/itemView.ssg?itemId=1000038571762",
    },
    {
        name: "피코크 리얼 밀크 초콜릿 헤이즐넛 모카 바크씬",
        brand: "피코크",
        price: 7480,
        recommendation: 4,
        country: "대한민국",
        flavor: "헤이즐넛",
        type: "밀크",
        description: "",
        image: "/assets/chocolate/peacock_hazelnut.webp",
        url: "https://www.ssg.com/item/itemView.ssg?itemId=1000023360416",
    },
    {
        name: "피코크 리얼 밀크 초콜릿 카라멜 초코볼",
        brand: "피코크",
        price: 7480,
        recommendation: 6,
        country: "대한민국",
        flavor: "카라멜",
        type: "밀크",
        description: "",
        image: "/assets/chocolate/peacock_caramel.webp",
        url: "https://www.ssg.com/item/itemView.ssg?itemId=1000051029055",
    },
    {
        name: "피코크 리얼 밀크 초콜릿 아몬드 크런치 초코볼",
        brand: "피코크",
        price: 8980,
        recommendation: 5,
        country: "대한민국",
        flavor: "아몬드",
        type: "밀크",
        description: "",
        image: "/assets/chocolate/peacock_almond_ball.webp",
        url: "https://www.ssg.com/item/itemView.ssg?itemId=1000549087412",
    },
    {
        name: "피코크 리얼 초콜릿 아몬드 민트 초코볼",
        brand: "피코크",
        price: 8980,
        recommendation: 4,
        country: "대한민국",
        flavor: "민트",
        type: "화이트",
        description: "",
        image: "/assets/chocolate/peacock_mint.webp",
        url: "https://www.ssg.com/item/itemView.ssg?itemId=1000200912199",
    },
    {
        name: "피코크 리얼 화이트 초콜릿 딸기",
        brand: "피코크",
        price: 7480,
        recommendation: 7,
        country: "대한민국",
        flavor: "딸기",
        type: "화이트",
        description: "",
        image: "/assets/chocolate/peacock_strawberry.webp",
        url: "https://www.ssg.com/item/itemView.ssg?itemId=1000053392894",
    },
    {
        name: "피코크 무설탕 다크70% 초코볼",
        brand: "피코크",
        price: 1980,
        recommendation: 2,
        country: "대한민국",
        flavor: "플레인",
        type: "다크",
        description: "",
        image: "/assets/chocolate/peacock_no_sugar.webp",
        url: "https://www.ssg.com/item/itemView.ssg?itemId=1000036685034",
    },
    {
        name: "피코크 로우 슈거 아몬드 초코볼",
        brand: "피코크",
        price: 2380,
        recommendation: 2,
        country: "대한민국",
        flavor: "아몬드",
        type: "다크",
        description: "",
        image: "/assets/chocolate/peacock_low_sugar.webp",
        url: "https://www.ssg.com/item/itemView.ssg?itemId=1000560499338",
    },
    {
        name: "지 큐브 다크 랩트 초콜릿 8개입",
        brand: "고디바",
        price: 17000,
        recommendation: 7,
        country: "벨기에",
        flavor: "플레인",
        type: "다크",
        description:
            "세계 3대 초콜릿 브랜드 중 하나인 고디바 초콜릿을 캐주얼하게 즐길 수 있는 제품입니다. \n지 큐브 다크 랩트 초콜릿은 다크 초콜릿 쉘 안에 진한 다크 초콜릿 가나슈 필링이 들어있는 초콜릿입니다. \n낱개 포장이 되어있어 가족이나 친구와 함께 나눠먹기 좋고, 나를 위한 선물으로도 추천드립니다.",
        image: "/assets/chocolate/godiva_gcube_dark.webp",
        url: "https://www.godiva.kr/item/7121208",
    },
    {
        name: "지 큐브 밀크 랩트 초콜릿 8개입",
        brand: "고디바",
        price: 17000,
        recommendation: 7,
        country: "벨기에",
        flavor: "플레인",
        type: "밀크",
        description:
            "세계 3대 초콜릿 브랜드 중 하나인 고디바 초콜릿을 캐주얼하게 즐길 수 있는 제품입니다. \n지 큐브 밀크 랩트 초콜릿은 부드러운 밀크 초콜릿 쉘 안에 밀크 초콜릿 가나슈 필링이 들어있는 초콜릿입니다. \n낱개 포장이 되어있어 가족이나 친구와 함께 나눠먹기 좋고, 나를 위한 선물으로도 추천드립니다.",
        image: "/assets/chocolate/godiva_gcube_milk.webp",
        url: "https://www.godiva.kr/item/7121108",
    },
    {
        name: "지 큐브 솔티드 캐러멜 랩트 초콜릿 8개입",
        brand: "고디바",
        price: 17000,
        recommendation: 7,
        country: "벨기에",
        flavor: "카라멜",
        type: "밀크",
        description:
            "세계 3대 초콜릿 브랜드 중 하나인 고디바 초콜릿을 캐주얼하게 즐길 수 있는 제품입니다. \n지 큐브 밀크 랩트 초콜릿은 부드러운 밀크 초콜릿 쉘 안에 달콤 짭짤한 솔티드 캐러멜 가나슈 필링이 들어있는 초콜릿입니다. \n낱개 포장이 되어있어 가족이나 친구와 함께 나눠먹기 좋고, 나를 위한 선물으로도 추천드립니다.",
        image: "/assets/chocolate/godiva_gcube_salted_caramel.webp",
        url: "https://www.godiva.kr/item/7121408",
    },
    {
        name: "지 큐브 밀크 헤이즐넛 랩트 초콜릿 8개입",
        brand: "고디바",
        price: 17000,
        recommendation: 7,
        country: "벨기에",
        flavor: "헤이즐넛",
        type: "밀크",
        description:
            "세계 3대 초콜릿 브랜드 중 하나인 고디바 초콜릿을 캐주얼하게 즐길 수 있는 제품입니다. \n지 큐브 밀크 랩트 초콜릿은 부드러운 밀크 초콜릿 쉘 안에 고소한 헤이즐넛 밀크 초콜릿 가나슈 필링이 들어있는 초콜릿입니다. \n낱개 포장이 되어있어 가족이나 친구와 함께 나눠먹기 좋고, 나를 위한 선물으로도 추천드립니다.",
        image: "/assets/chocolate/godiva_gcube_hazelnut.webp",
        url: "https://www.godiva.kr/item/7121308",
    },
    {
        name: "골드 컬렉션 8개입",
        brand: "고디바",
        price: 30000,
        recommendation: 9,
        country: "벨기에",
        flavor: "믹스",
        type: "프랄린",
        description:
            "세계 3대 초콜릿 브랜드 중 하나인 고디바의 시그니처 초콜릿입니다. \n다양한 필링으로 채워진 밀크, 다크, 화이트 초콜릿을 즐길 수 있습니다. \n고급스러운 패키지로 수험생 선물으로 인기있고, 특별한 날 소중한 사람을 위한 선물으로 추천드립니다.",
        image: "/assets/chocolate/godiva_gold_8.webp",
        url: "https://www.godiva.kr/item/3211108",
    },
    {
        name: "골드 컬렉션 12개입",
        brand: "고디바",
        price: 45000,
        recommendation: 10,
        country: "벨기에",
        flavor: "믹스",
        type: "프랄린",
        description:
            "세계 3대 초콜릿 브랜드 중 하나인 고디바의 시그니처 초콜릿입니다. \n다양한 필링으로 채워진 밀크, 다크, 화이트 초콜릿을 즐길 수 있습니다. \n고급스러운 패키지로 수험생 선물으로 인기있고, 특별한 날 소중한 사람을 위한 선물으로 추천드립니다.",
        image: "/assets/chocolate/godiva_gold_collection_12.webp",
        url: "https://www.godiva.kr/item/3211112",
    },
    {
        name: "골드 컬렉션 20개입",
        brand: "고디바",
        price: 73000,
        recommendation: 10,
        country: "벨기에",
        flavor: "믹스",
        type: "프랄린",
        description:
            "세계 3대 초콜릿 브랜드 중 하나인 고디바의 시그니처 초콜릿입니다. \n다양한 필링으로 채워진 밀크, 다크, 화이트 초콜릿을 즐길 수 있습니다. \n고급스러운 패키지로 수험생 선물으로 인기있고, 특별한 날 소중한 사람을 위한 선물으로 추천드립니다.",
        image: "/assets/chocolate/godiva_gold_20.webp",
        url: "https://www.godiva.kr/item/3211120",
    },
    {
        name: "골드 디스커버리 6개입",
        brand: "고디바",
        price: 32000,
        recommendation: 8,
        country: "벨기에",
        flavor: "믹스",
        type: "프랄린",
        description:
            "세계 3대 초콜릿 브랜드 중 하나인 고디바의 시그니처 초콜릿을 더욱 모던하게 즐길 수 있는 초콜릿입니다. \n더욱 풍부하고 다양한 필링으로 채워진 밀크, 다크, 화이트 초콜릿을 즐길 수 있습니다. \n화려하고 고급진 패키지로 수험생 선물으로 인기있고, 특별한 날 소중한 사람을 위한 선물으로 추천드립니다.",
        image: "/assets/chocolate/godiva_discovery_6.webp",
        url: "https://www.godiva.kr/item/3211306",
    },
    {
        name: "골드 디스커버리 9개입",
        brand: "고디바",
        price: 42000,
        recommendation: 9,
        country: "벨기에",
        flavor: "믹스",
        type: "프랄린",
        description:
            "세계 3대 초콜릿 브랜드 중 하나인 고디바의 시그니처 초콜릿을 더욱 모던하게 즐길 수 있는 초콜릿입니다. \n더욱 풍부하고 다양한 필링으로 채워진 밀크, 다크, 화이트 초콜릿을 즐길 수 있습니다. \n화려하고 고급진 패키지로 수험생 선물으로 인기있고, 특별한 날 소중한 사람을 위한 선물으로 추천드립니다.",
        image: "/assets/chocolate/godiva_discovery_9.webp",
        url: "https://www.godiva.kr/item/3211309",
    },
    {
        name: "골드 디스커버리 15개입",
        brand: "고디바",
        price: 65000,
        recommendation: 10,
        country: "벨기에",
        flavor: "믹스",
        type: "프랄린",
        description:
            "세계 3대 초콜릿 브랜드 중 하나인 고디바의 시그니처 초콜릿을 더욱 모던하게 즐길 수 있는 초콜릿입니다. \n더욱 풍부하고 다양한 필링으로 채워진 밀크, 다크, 화이트 초콜릿을 즐길 수 있습니다. \n화려하고 고급진 패키지로 수험생 선물으로 인기있고, 특별한 날 소중한 사람을 위한 선물으로 추천드립니다.",
        image: "/assets/chocolate/godiva_discovery_15.webp",
        url: "https://www.godiva.kr/item/3211315",
    },
    {
        name: "레더라 컬렉션 18P",
        brand: "레더라",
        price: 67000,
        recommendation: 10,
        country: "스위스",
        flavor: "믹스",
        type: "프랄린",
        description:
            "스위스 대표 최고급 수제 초콜릿 브랜드인 레더라의 대표 제품인 프랄린 초콜릿 컬렉션입니다. \n화려한 모양과 견과류, 누가, 트러플 필링으로 다채로운 맛을 즐길 수 있습니다. \n고급스러운 패키지와 맛으로 특별한 날 연인, 가족, 어른들을 위한 선물으로 추천드립니다.",
        image: "/assets/chocolate/laderah_collection_18.webp",
        url: "https://kr.laderach.com/shop/item.php?it_id=L18",
    },
    {
        name: "레더라 컬렉션 24P",
        brand: "레더라",
        price: 88000,
        recommendation: 9,
        country: "스위스",
        flavor: "믹스",
        type: "프랄린",
        description:
            "스위스 대표 최고급 수제 초콜릿 브랜드인 레더라의 대표 제품인 프랄린 초콜릿 컬렉션입니다. \n화려한 모양과 견과류, 누가, 트러플 필링으로 다채로운 맛을 즐길 수 있습니다. \n고급스러운 패키지와 맛으로 특별한 날 연인, 가족, 어른들을 위한 선물으로 추천드립니다.",
        image: "/assets/chocolate/laderah_collection_24.webp",
        url: "https://kr.laderach.com/shop/item.php?it_id=L24",
    },
    {
        name: "레더라 컬렉션 4P",
        brand: "레더라",
        price: 17000,
        recommendation: 9,
        country: "스위스",
        flavor: "믹스",
        type: "프랄린",
        description:
            "스위스 대표 최고급 수제 초콜릿 브랜드인 레더라의 대표 제품인 프랄린 초콜릿 컬렉션입니다. \n화려한 모양과 견과류, 누가, 트러플 필링으로 다채로운 맛을 즐길 수 있습니다. \n작은 패키지로 소중한 사람을 위한 선물이나 나를 위한 선물으로 추천드립니다.",
        image: "/assets/chocolate/laderah_collection_4.webp",
        url: "https://kr.laderach.com/shop/item.php?it_id=L4",
    },
    {
        name: "레더라 후리쉬쇼기 어쏘티드 박스",
        brand: "레더라",
        price: 45000,
        recommendation: 10,
        country: "스위스",
        flavor: "믹스",
        type: "믹스",
        description:
            "스위스 대표 최고급 수제 초콜릿 브랜드인 레더라의 특별한 레시피로 제공되는 인기 제품입니다. \n캐러멜 라이즈드 된 통 견과류와 초콜릿이 절묘한 하모니를 이루며 다양한 식감과 맛을 선사합니다. \n특별한 날 연인, 친구, 가족들을 위한 선물으로 추천드립니다.",
        image: "/assets/chocolate/laderach_assorted.webp",
        url: "https://kr.laderach.com/shop/item.php?it_id=1696406916",
    },
    {
        name: "후레쉬 초콜릿 모음 세트 320g",
        brand: "레더라",
        price: 56000,
        recommendation: 10,
        country: "스위스",
        flavor: "믹스",
        type: "믹스",
        description:
            "스위스 대표 최고급 수제 초콜릿 브랜드인 레더라의 특별한 레시피로 제공되는 인기 제품입니다. \n캐러멜 라이즈드 된 통 견과류와 초콜릿이 절묘한 하모니를 이루며 다양한 식감과 맛을 선사합니다. \n특별한 날 연인, 친구, 가족들을 위한 선물으로 추천드립니다.",
        image: "/assets/chocolate/laderah_fresh_320.webp",
        url: "https://kr.laderach.com/shop/item.php?it_id=1577432185",
    },
    {
        name: "후레쉬 초콜릿 모음 세트 220g",
        brand: "레더라",
        price: 40000,
        recommendation: 9,
        country: "스위스",
        flavor: "믹스",
        type: "믹스",
        description:
            "스위스 대표 최고급 수제 초콜릿 브랜드인 레더라의 특별한 레시피로 제공되는 인기 제품입니다. \n캐러멜 라이즈드 된 통 견과류와 초콜릿이 절묘한 하모니를 이루며 다양한 식감과 맛을 선사합니다. \n특별한 날 연인, 친구, 가족들을 위한 선물으로 추천드립니다.",
        image: "/assets/chocolate/laderah_fresh_220.webp",
        url: "https://kr.laderach.com/shop/item.php?it_id=1663654378",
    },
    {
        name: "프랄린 6P",
        brand: "레더라",
        price: 25000,
        recommendation: 8,
        country: "스위스",
        flavor: "믹스",
        type: "프랄린",
        description:
            "스위스 대표 최고급 수제 초콜릿 브랜드인 레더라의 프랄린 초콜릿을 즐길 수 있는 제품입니다. \n견과류, 누가, 트러플 필링으로 다채로운 맛을 경험할 수 있습니다. \n작은 패키지로 소중한 사람을 위한 선물이나 나를 위한 선물으로 추천드립니다.",
        image: "/assets/chocolate/laderah_praline.webp",
        url: "https://kr.laderach.com/shop/item.php?it_id=L6",
    },
    {
        name: "파베 6P",
        brand: "레더라",
        price: 21000,
        recommendation: 7,
        country: "스위스",
        flavor: "플레인",
        type: "다크",
        description:
            "스위스 대표 최고급 수제 초콜릿 브랜드인 레더라의 파베 초콜릿 세트입니다. \n부드러운 아몬드 잔두야 가나슈를 코코아 파우더로 감싼 초콜릿으로 입안에서 녹아내리는 생 초콜릿입니다. \n소중한 사람을 위한 선물이나 나를 위한 선물으로 추천드립니다.",
        image: "/assets/chocolate/laderah_pave.webp",
        url: "https://kr.laderach.com/shop/item.php?it_id=P6",
    },
    // {
    //     name: "노이하우스 프리미엄 히스토리 컬렉션 28P",
    //     brand: "노이하우스",
    //     price: 120000,
    //     recommendation: 10,
    //     country: "벨기에",
    //     flavor: "믹스",
    //     type: "프랄린",
    //     description:
    //         "세계 3대 초콜릿 중 하나인 노이하우스가 만들어 온 플라린 중 가장 대표적인 14가지의 프랄린을 모두 맛볼 수 있는 컬렉션입니다. \n누가틴, 지안두자 등을 감싼 다양한 밀크, 다크, 화이트 프랄린 초콜릿으로 다채로운 풍미와 식감을 경험할 수 있습니다. \n160년 동안 사랑을 받은 초콜릿의 스토리가 소개되어 있으며, 고급스러운 발로틴 상자에 담겨있어 특별한 날 연인, 가족, 어른들 선물으로 추천드립니다.",
    //     image: "/assets/chocolate/.webp",
    //     url: "https://smartstore.naver.com/neuhauschocolate_kr/products/8867195162",
    // },
    {
        name: "노이하우스 밀크&다크&화이트 초콜릿 컬렉션 믹스 12P",
        brand: "노이하우스",
        price: 69000,
        recommendation: 10,
        country: "벨기에",
        flavor: "믹스",
        type: "프랄린",
        description:
            "세계 3대 초콜릿 중 하나인 노이하우스에서 꾸준히 인기를 이어온 컬렉션입니다. \n누가틴, 지안두자 등을 감싼 다양한 밀크, 다크, 화이트 프랄린 초콜릿으로 다채로운 풍미와 식감을 경험할 수 있습니다. \n고급스럽고 화려한 패키지로 특별한 날 연인, 가족, 어른들 선물으로 추천드립니다.",
        image: "/assets/chocolate/neuhaus_collection.webp",
        url: "https://smartstore.naver.com/neuhauschocolate_kr/products/8867194748",
    },
    {
        name: "노이하우스 듀엣 슬라이더 박스 36P",
        brand: "노이하우스",
        price: 93000,
        recommendation: 10,
        country: "벨기에",
        flavor: "믹스",
        type: "프랄린",
        description:
            "세계 3대 초콜릿 중 하나인 노이하우스의 초콜릿을 커스터마이징 하여 즐길 수 있는 제품입니다. \n6가지 초콜릿 베이스와 6가지 토핑 중 하나씩 골라 믹스하여 맛과 재미를 선사합니다. \n고급스러운 패키지와 재미있는 조화로 가족 선물으로 추천드립니다.",
        image: "/assets/chocolate/neuhaus_duets.webp",
        url: "https://smartstore.naver.com/neuhauschocolate_kr/products/8867194204",
    },
    {
        name: "노이하우스 디스커버리 이리지스터블 초콜릿 5P",
        brand: "노이하우스",
        price: 35000,
        recommendation: 10,
        country: "벨기에",
        flavor: "믹스",
        type: "프랄린",
        description:
            "세계 3대 초콜릿 중 하나인 노이하우스만의 특별한 초콜릿입니다. \n생크림과 가나슈를 누가틴으로 감싸 밀크, 다크, 화이트 초콜릿으로 코팅하여 바삭한 식감까지 느낄 수 있는 초콜릿입니다. \n고급스러운 패키지와 새로운 맛으로 특별한 날 연인, 가족, 어른들 선물으로 추천드립니다.",
        image: "/assets/chocolate/neuhaus_irresistibles.webp",
        url: "https://smartstore.naver.com/neuhauschocolate_kr/products/8867192910",
    },
    {
        name: "노이하우스 디스커버리 클래식 초콜릿 세트 6P",
        brand: "노이하우스",
        price: 35000,
        recommendation: 9,
        country: "벨기에",
        flavor: "믹스",
        type: "프랄린",
        description:
            "세계 3대 초콜릿 중 하나인 노이하우스에서 꾸준히 인기를 이어온 프랄린 초콜릿입니다. \n누가틴, 견과류 등을 감싼 다양한 밀크, 다크, 화이트 프랄린 초콜릿으로 달콤하고 부드러운 맛을 경험할 수 있습니다. \n고급스럽고 화려한 패키지로 특별한 날 연인, 가족, 어른들 선물으로 추천드립니다.",
        image: "/assets/chocolate/neuhaus_classic.webp",
        url: "https://smartstore.naver.com/neuhauschocolate_kr/products/8867192703",
    },
    {
        name: "노이하우스 까레(CARRE) 다크&밀크 10가지 맛 60P",
        brand: "노이하우스",
        price: 75000,
        recommendation: 9,
        country: "벨기에",
        flavor: "믹스",
        type: "프랄린",
        description:
            "세계 3대 초콜릿 중 하나인 노이하우스의 얇은 판 초콜릿 세트입니다. \n커피, 참깨, 라즈베리, 오렌지 등 10가지 맛의 초콜릿으로 다양한 풍미를 골라 즐길 수 있습니다. \n특별한 날 연인, 가족, 어른들 선물으로 추천드립니다.",
        image: "/assets/chocolate/neuhaus_carre.webp",
        url: "https://smartstore.naver.com/neuhauschocolate_kr/products/8867193589",
    },
];

export default chocolates;
