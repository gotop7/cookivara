/** Batch A — 60 new bilingual Cookivara recipes (Korean, Chinese, European). */
export const newRecipesA = [
  // ——— KOREAN ———
  {
    slug: "kimbap",
    title: { ko: "김밥", en: "Kimbap" },
    description: {
      ko: "김에 밥과 단무지·시금치·계란을 말아 한입씩 즐기는 소풍 김밥.",
      en: "Seaweed rolls filled with seasoned rice, pickled radish, spinach, and egg.",
    },
    categories: ["korean"],
    servings: 4,
    prepMinutes: 35,
    cookMinutes: 20,
    level: { ko: "보통", en: "Medium" },
    image: "/recipes/kimbap.jpg",
    ingredients: [
      { amount: { ko: "3컵", en: "3 cups" }, name: { ko: "밥", en: "cooked short-grain rice" } },
      { amount: { ko: "4장", en: "4 sheets" }, name: { ko: "김", en: "gim (nori)" } },
      { amount: { ko: "1개", en: "1" }, name: { ko: "단무지", en: "danmuji (pickled radish)" } },
      { amount: { ko: "2컵", en: "2 cups" }, name: { ko: "시금치", en: "spinach" } },
      { amount: { ko: "2개", en: "2" }, name: { ko: "계란", en: "eggs" } },
      { amount: { ko: "큰술 1", en: "1 tbsp" }, name: { ko: "참기름", en: "sesame oil" } },
      { amount: { ko: "작은술 1/2", en: "1/2 tsp" }, name: { ko: "소금", en: "salt" } },
    ],
    steps: [
      {
        ko: "따뜻한 밥에 참기름과 소금을 넣고 고루 섞어 김밥용 밥을 만듭니다. 너무 뜨거우면 김이 눅눅해지니 살짝 식힙니다.",
        en: "Season warm rice with sesame oil and salt; cool slightly so the gim stays crisp.",
      },
      {
        ko: "시금치는 끓는 물에 30초 데쳐 찬물에 헹군 뒤 물기를 짜고 참기름·소금으로 무칩니다.",
        en: "Blanch spinach 30 seconds, rinse in cold water, squeeze dry, and dress with sesame oil and salt.",
      },
      {
        ko: "계란은 약한 불에서 얇은 지단으로 부쳐 긴 채 썰기합니다. 단무지도 김밥 길이에 맞게 길게 썹니다.",
        en: "Cook thin egg omelets over low heat and slice into strips; cut danmuji into long matchsticks.",
      },
      {
        ko: "김의 거친 면을 위로 두고 밥을 얇게 펴되, 위쪽 2cm는 비워 둡니다. 단무지·시금치·계란을 중앙에 나란히 올립니다.",
        en: "Place gim rough-side up, spread a thin rice layer leaving a 2 cm top margin, then line fillings across the center.",
      },
      {
        ko: "김발 끝을 잡고 앞으로 단단히 말아 끝부분을 물로 살짝 적셔 붙입니다. 5분 둔 뒤 1.5cm 두께로 썹니다.",
        en: "Roll tightly with a bamboo mat, seal the edge with a dab of water, rest 5 minutes, then slice 1.5 cm thick.",
      },
      {
        ko: "칼날에 참기름을 바르면 밥이 덜 붙습니다. 참기름을 살짝 발라 냅니다.",
        en: "Wipe the knife with sesame oil between cuts; brush rolls lightly with sesame oil before serving.",
      },
    ],
  },
  {
    slug: "jjajangmyeon",
    title: { ko: "짜장면", en: "Jjajangmyeon" },
    description: {
      ko: "춘장으로 볶아 낸 달콤짭짤 소스에 면을 비벼 먹는 중식 스타일 짜장면.",
      en: "Chewy noodles coated in a savory-sweet black bean (chunjang) sauce with pork and vegetables.",
    },
    categories: ["korean"],
    servings: 2,
    prepMinutes: 20,
    cookMinutes: 25,
    level: { ko: "보통", en: "Medium" },
    image: "/recipes/jjajangmyeon.jpg",
    ingredients: [
      { amount: { ko: "2인분", en: "2 servings" }, name: { ko: "중화면", en: "fresh wheat noodles" } },
      { amount: { ko: "200g", en: "7 oz" }, name: { ko: "돼지고기 다짐육", en: "ground pork" } },
      { amount: { ko: "큰술 3", en: "3 tbsp" }, name: { ko: "춘장", en: "chunjang (black bean paste)" } },
      { amount: { ko: "1개", en: "1" }, name: { ko: "양파", en: "onion" } },
      { amount: { ko: "1개", en: "1" }, name: { ko: "애호박", en: "zucchini" } },
      { amount: { ko: "큰술 1", en: "1 tbsp" }, name: { ko: "설탕", en: "sugar" } },
      { amount: { ko: "큰술 1", en: "1 tbsp" }, name: { ko: "전분", en: "cornstarch" } },
    ],
    steps: [
      {
        ko: "양파와 애호박은 1cm 깍둑썰기합니다. 전분은 물 3큰술과 섞어 전분물을 준비합니다.",
        en: "Dice onion and zucchini into 1 cm cubes; mix cornstarch with 3 tbsp water for slurry.",
      },
      {
        ko: "팬에 기름을 두르고 중불에서 춘장을 2–3분 볶아 쓴맛을 날립니다. 따로 덜어 둡니다.",
        en: "Fry chunjang in oil over medium heat 2–3 minutes to toast out bitterness; set aside.",
      },
      {
        ko: "같은 팬에 돼지고기를 넣고 고기가 갈색이 될 때까지 볶은 뒤 양파·애호박을 넣고 3분 더 볶습니다.",
        en: "Brown the pork in the same pan, then add onion and zucchini and cook 3 minutes more.",
      },
      {
        ko: "볶아 둔 춘장과 설탕, 물 1컵을 넣고 중약불에서 8–10분 끓여 채소가 투명해지게 합니다.",
        en: "Return chunjang with sugar and 1 cup water; simmer 8–10 minutes until vegetables soften.",
      },
      {
        ko: "전분물을 저으며 넣어 소스가 윤기 나게 농축되면 불을 끕니다.",
        en: "Stir in the slurry until the sauce turns glossy and thick; turn off the heat.",
      },
      {
        ko: "면은 끓는 물에 포장 지시대로 삶아 찬물에 헹군 뒤 그릇에 담고 소스를 듬뿍 올립니다.",
        en: "Boil noodles per package, rinse under cold water, drain well, and ladle sauce generously over top.",
      },
    ],
  },
  {
    slug: "kimchi-fried-rice",
    title: { ko: "김치볶음밥", en: "Kimchi Fried Rice" },
    description: {
      ko: "잘 익은 김치와 밥으로 빠르게 볶아 내는 집밥의 정석.",
      en: "A fast weeknight fried rice punched up with aged kimchi and a fried egg.",
    },
    categories: ["korean"],
    servings: 2,
    prepMinutes: 10,
    cookMinutes: 15,
    level: { ko: "쉬움", en: "Easy" },
    image: "/recipes/kimchi-fried-rice.jpg",
    ingredients: [
      { amount: { ko: "2컵", en: "2 cups" }, name: { ko: "찬밥", en: "day-old cooked rice" } },
      { amount: { ko: "1컵", en: "1 cup" }, name: { ko: "묵은 김치", en: "aged kimchi" } },
      { amount: { ko: "큰술 1", en: "1 tbsp" }, name: { ko: "고추장", en: "gochujang" } },
      { amount: { ko: "큰술 1", en: "1 tbsp" }, name: { ko: "김치 국물", en: "kimchi brine" } },
      { amount: { ko: "2개", en: "2" }, name: { ko: "계란", en: "eggs" } },
      { amount: { ko: "큰술 1", en: "1 tbsp" }, name: { ko: "참기름", en: "sesame oil" } },
      { amount: { ko: "1대", en: "1" }, name: { ko: "대파", en: "scallion" } },
    ],
    steps: [
      {
        ko: "김치는 가위로 한입 크기로 썹니다. 대파는 송송 썰어 둡니다.",
        en: "Chop kimchi into bite-size pieces; thinly slice the scallion.",
      },
      {
        ko: "팬에 식용유를 두르고 중강불에서 김치를 3–4분 볶아 신맛이 부드러워지게 합니다.",
        en: "Stir-fry kimchi in oil over medium-high heat 3–4 minutes until the sharp sourness mellows.",
      },
      {
        ko: "고추장과 김치 국물을 넣고 30초 볶아 팬에 양념이 퍼지게 합니다.",
        en: "Add gochujang and kimchi brine; cook 30 seconds so the paste coats the pan.",
      },
      {
        ko: "찬밥을 넣고 주걱으로 덩어리를 풀며 2–3분 볶아 밥알이 분리되고 붉게 물들게 합니다.",
        en: "Add cold rice, breaking clumps with a spatula, and fry 2–3 minutes until grains are separate and coated red.",
      },
      {
        ko: "참기름과 대파를 넣고 불을 끕니다. 다른 팬에 계란을 반숙으로 프라이합니다.",
        en: "Finish with sesame oil and scallion off heat; fry eggs sunny-side up in a second pan.",
      },
      {
        ko: "볶음밥 위에 계란을 올리고 기호에 따라 김가루나 참깨를 뿌려 냅니다.",
        en: "Top each bowl with a fried egg and optional roasted seaweed flakes or sesame seeds.",
      },
    ],
  },
  {
    slug: "galbi-jjim",
    title: { ko: "갈비찜", en: "Galbi Jjim" },
    description: {
      ko: "소갈비를 달콤짭짤 양념에 오래 조려 고기가 뼈에서 떨어지는 명절 갈비찜.",
      en: "Braised short ribs in a sweet-savory soy glaze until the meat falls from the bone.",
    },
    categories: ["korean"],
    servings: 4,
    prepMinutes: 30,
    cookMinutes: 90,
    level: { ko: "보통", en: "Medium" },
    image: "/recipes/galbi-jjim.jpg",
    ingredients: [
      { amount: { ko: "1.2kg", en: "2.6 lb" }, name: { ko: "소갈비", en: "beef short ribs" } },
      { amount: { ko: "큰술 6", en: "6 tbsp" }, name: { ko: "간장", en: "soy sauce" } },
      { amount: { ko: "큰술 3", en: "3 tbsp" }, name: { ko: "설탕", en: "sugar" } },
      { amount: { ko: "큰술 2", en: "2 tbsp" }, name: { ko: "맛술", en: "mirin" } },
      { amount: { ko: "1개", en: "1" }, name: { ko: "배(또는 사과)", en: "Asian pear (or apple)" } },
      { amount: { ko: "6쪽", en: "6 cloves" }, name: { ko: "마늘", en: "garlic" } },
      { amount: { ko: "2개", en: "2" }, name: { ko: "당근", en: "carrots" } },
      { amount: { ko: "8개", en: "8" }, name: { ko: "밤(선택)", en: "chestnuts (optional)" } },
    ],
    steps: [
      {
        ko: "갈비는 찬물에 30분 담가 핏물을 빼고, 끓는 물에 5분 데쳐 거품을 걷어 낸 뒤 씻습니다.",
        en: "Soak ribs in cold water 30 minutes, then blanch 5 minutes, skim foam, and rinse.",
      },
      {
        ko: "배·마늘을 믹서에 갈고 간장·설탕·맛술과 섞어 양념장을 만듭니다.",
        en: "Blend pear and garlic, then mix with soy sauce, sugar, and mirin for the braising sauce.",
      },
      {
        ko: "냄비에 갈비와 양념장, 물 2컵을 넣고 센 불에서 끓인 뒤 중약불로 줄여 뚜껑을 덮고 60분 조립니다.",
        en: "Combine ribs, sauce, and 2 cups water; bring to a boil, then cover and simmer gently 60 minutes.",
      },
      {
        ko: "당근은 큰 토막으로, 밤은 껍질을 벗겨 넣습니다. 뚜껑을 연 채 20–25분 더 조려 국물이 반으로 줄게 합니다.",
        en: "Add large carrot chunks and peeled chestnuts; uncover and reduce 20–25 minutes until sauce halves.",
      },
      {
        ko: "고기가 뼈에서 쉽게 떨어지고 양념이 윤기 나게 배면 불을 끕니다. 기호에 따라 대파채를 올립니다.",
        en: "When meat pulls easily from the bone and the glaze is shiny, rest off heat; garnish with scallion if desired.",
      },
      {
        ko: "식기 전에 국물을 고기에 여러 번 끼얹으면 윤기가 더 납니다. 밥과 함께 따뜻하게 냅니다.",
        en: "Baste ribs with the reduced sauce a few times before serving hot with rice.",
      },
    ],
  },
  {
    slug: "jeyuk-bokkeum",
    title: { ko: "제육볶음", en: "Jeyuk Bokkeum" },
    description: {
      ko: "고추장·고춧가루 양념에 재운 돼지고기를 센 불에 빠르게 볶은 매콤한 제육.",
      en: "Spicy gochujang-marinated pork stir-fried hot and fast until caramelized.",
    },
    categories: ["korean"],
    servings: 3,
    prepMinutes: 25,
    cookMinutes: 12,
    level: { ko: "쉬움", en: "Easy" },
    image: "/recipes/jeyuk-bokkeum.jpg",
    ingredients: [
      { amount: { ko: "500g", en: "1.1 lb" }, name: { ko: "돼지고기 앞다리/목살", en: "pork shoulder, thinly sliced" } },
      { amount: { ko: "큰술 2", en: "2 tbsp" }, name: { ko: "고추장", en: "gochujang" } },
      { amount: { ko: "큰술 1", en: "1 tbsp" }, name: { ko: "고춧가루", en: "gochugaru" } },
      { amount: { ko: "큰술 1", en: "1 tbsp" }, name: { ko: "간장", en: "soy sauce" } },
      { amount: { ko: "큰술 1", en: "1 tbsp" }, name: { ko: "설탕", en: "sugar" } },
      { amount: { ko: "1개", en: "1" }, name: { ko: "양파", en: "onion" } },
      { amount: { ko: "2대", en: "2" }, name: { ko: "대파", en: "scallions" } },
    ],
    steps: [
      {
        ko: "고추장·고춧가루·간장·설탕·다진 마늘(작은술 1)을 섞어 양념을 만듭니다.",
        en: "Mix gochujang, gochugaru, soy sauce, sugar, and 1 tsp minced garlic into a paste.",
      },
      {
        ko: "돼지고기에 양념을 버무려 최소 20분(가능하면 1시간) 재웁니다.",
        en: "Coat the pork thoroughly and marinate at least 20 minutes (ideally 1 hour).",
      },
      {
        ko: "양파와 대파는 굵게 채 썹니다. 팬을 센 불로 예열하고 기름을 두릅니다.",
        en: "Cut onion and scallions into thick strips; preheat a wok or skillet over high heat with oil.",
      },
      {
        ko: "고기를 펼쳐 넣고 1–2분 동안 건드리지 않아 표면이 살짝 그을리게 한 뒤 볶습니다.",
        en: "Spread pork in a single layer and leave undisturbed 1–2 minutes for light char, then stir.",
      },
      {
        ko: "양파를 넣고 3–4분 더 볶아 고기가 익고 양념이 팬에 달라붙기 시작하면 대파를 넣습니다.",
        en: "Add onion and cook 3–4 minutes until pork is cooked through and sauce sticky; toss in scallions.",
      },
      {
        ko: "30초 더 볶아 대파가 숨이 죽으면 바로 냅니다. 상추쌈이나 밥과 함께 먹습니다.",
        en: "Cook 30 seconds more until scallions wilt; serve immediately with rice or lettuce wraps.",
      },
    ],
  },
  {
    slug: "kimchi-jeon",
    title: { ko: "김치전", en: "Kimchi Jeon" },
    description: {
      ko: "잘 익은 김치와 부침가루로 바삭하게 부친 비 오는 날 별미 전.",
      en: "Crispy kimchi pancakes—savory, tangy, and perfect for a rainy-day snack.",
    },
    categories: ["korean", "vegetarian"],
    servings: 2,
    prepMinutes: 15,
    cookMinutes: 15,
    level: { ko: "쉬움", en: "Easy" },
    image: "/recipes/kimchi-jeon.jpg",
    ingredients: [
      { amount: { ko: "1컵", en: "1 cup" }, name: { ko: "잘게 썬 김치", en: "chopped kimchi" } },
      { amount: { ko: "큰술 2", en: "2 tbsp" }, name: { ko: "김치 국물", en: "kimchi brine" } },
      { amount: { ko: "1컵", en: "1 cup" }, name: { ko: "부침가루", en: "Korean pancake mix (buchim garu)" } },
      { amount: { ko: "3/4컵", en: "3/4 cup" }, name: { ko: "찬물", en: "cold water" } },
      { amount: { ko: "1대", en: "1" }, name: { ko: "대파", en: "scallion" } },
      { amount: { ko: "큰술 3", en: "3 tbsp" }, name: { ko: "식용유", en: "neutral oil" } },
    ],
    steps: [
      {
        ko: "부침가루·찬물·김치 국물을 섞어 약간 된 반죽을 만듭니다. 덩어리가 없도록 저어 줍니다.",
        en: "Whisk pancake mix, cold water, and kimchi brine into a slightly thick batter with no lumps.",
      },
      {
        ko: "잘게 썬 김치와 송송 썬 대파를 넣고 고루 섞습니다. 김치 물기가 많으면 살짝 짜 줍니다.",
        en: "Fold in chopped kimchi and sliced scallion; squeeze kimchi lightly if very wet.",
      },
      {
        ko: "팬에 기름을 넉넉히 두르고 중강불로 예열합니다. 반죽을 얇게 펴 지름 20cm 원형으로 만듭니다.",
        en: "Heat ample oil over medium-high; pour batter and spread into a thin ~20 cm round.",
      },
      {
        ko: "가장자리가 바삭해지고 기포가 올라오면(약 3분) 뒤집어 2–3분 더 굽습니다.",
        en: "When edges crisp and bubbles appear (~3 minutes), flip and cook 2–3 minutes more.",
      },
      {
        ko: "기름을 조금 더 두르고 눌러 가며 구우면 더 바삭해집니다. 황금빛 갈색이 되면 꺼냅니다.",
        en: "Add a touch more oil and press gently for extra crunch; remove when deep golden.",
      },
      {
        ko: "삼각으로 잘라 간장·식초·고춧가루 찍먹과 함께 바로 냅니다.",
        en: "Cut into wedges and serve hot with a soy–vinegar–gochugaru dipping sauce.",
      },
    ],
  },
  {
    slug: "budae-jjigae",
    title: { ko: "부대찌개", en: "Budae Jjigae" },
    description: {
      ko: "햄·소시지·김치·라면이 한데 끓는 얼큰한 부대찌개.",
      en: "Spicy “army stew” bubbling with kimchi, spam, sausage, and instant noodles.",
    },
    categories: ["korean"],
    servings: 4,
    prepMinutes: 20,
    cookMinutes: 25,
    level: { ko: "쉬움", en: "Easy" },
    image: "/recipes/budae-jjigae.jpg",
    ingredients: [
      { amount: { ko: "1컵", en: "1 cup" }, name: { ko: "김치", en: "kimchi" } },
      { amount: { ko: "200g", en: "7 oz" }, name: { ko: "스팸/햄", en: "spam or canned ham" } },
      { amount: { ko: "2개", en: "2" }, name: { ko: "프랑크 소시지", en: "frankfurter sausages" } },
      { amount: { ko: "큰술 1", en: "1 tbsp" }, name: { ko: "고춧가루", en: "gochugaru" } },
      { amount: { ko: "큰술 1", en: "1 tbsp" }, name: { ko: "고추장", en: "gochujang" } },
      { amount: { ko: "4컵", en: "4 cups" }, name: { ko: "육수 또는 물", en: "stock or water" } },
      { amount: { ko: "1봉지", en: "1 pack" }, name: { ko: "라면 사리", en: "instant ramen noodles" } },
      { amount: { ko: "1/2컵", en: "1/2 cup" }, name: { ko: "슬라이스 치즈", en: "American cheese slices" } },
    ],
    steps: [
      {
        ko: "전골냄비에 김치·햄·소시지를 구역별로 보기 좋게 깔고 고춧가루·고추장을 가운데에 올립니다.",
        en: "Arrange kimchi, spam, and sausages in a shallow pot; mound gochugaru and gochujang in the center.",
      },
      {
        ko: "육수를 재료가 잠길 만큼 붓고 센 불에서 끓입니다. 끓기 시작하면 양념을 풀어 줍니다.",
        en: "Pour in enough stock to nearly cover; bring to a hard boil and stir the pastes into the broth.",
      },
      {
        ko: "중불로 줄여 10분 끓여 김치가 부드럽고 국물이 붉게 우러나게 합니다.",
        en: "Reduce to medium and simmer 10 minutes until kimchi softens and broth turns deep red.",
      },
      {
        ko: "라면 사리를 넣고 포장 시간보다 1분 짧게 삶아 면이 국물을 덜 흡수하게 합니다.",
        en: "Add ramen noodles and cook 1 minute less than package time so they stay springy in the broth.",
      },
      {
        ko: "치즈를 올려 녹을 때까지 30초–1분 둡니다. 기호에 따라 두부와 대파를 추가합니다.",
        en: "Lay cheese on top to melt 30–60 seconds; add tofu or scallion if you like.",
      },
      {
        ko: "불 위에서 함께 떠먹습니다. 밥에 국물을 비벼 먹으면 더 맛있습니다.",
        en: "Eat communally from the pot; leftover broth is excellent poured over rice.",
      },
    ],
  },
  {
    slug: "seolleongtang",
    title: { ko: "설렁탕", en: "Seolleongtang" },
    description: {
      ko: "소뼈를 오래 고아 낸 뽀얀 국물에 소면을 말아 먹는 설렁탕.",
      en: "Milky ox-bone broth served with thin noodles, scallion, and a sprinkle of salt.",
    },
    categories: ["korean"],
    servings: 4,
    prepMinutes: 20,
    cookMinutes: 240,
    level: { ko: "보통", en: "Medium" },
    image: "/recipes/seolleongtang.jpg",
    ingredients: [
      { amount: { ko: "1.5kg", en: "3.3 lb" }, name: { ko: "소사골·도가니", en: "beef leg bones / knuckle" } },
      { amount: { ko: "300g", en: "10 oz" }, name: { ko: "양지머리", en: "brisket" } },
      { amount: { ko: "1개", en: "1" }, name: { ko: "대파(흰 부분)", en: "scallion whites" } },
      { amount: { ko: "6쪽", en: "6 cloves" }, name: { ko: "마늘", en: "garlic" } },
      { amount: { ko: "200g", en: "7 oz" }, name: { ko: "소면", en: "somyeon (thin wheat noodles)" } },
      { amount: { ko: "기호껏", en: "to taste" }, name: { ko: "소금·후추", en: "salt and black pepper" } },
    ],
    steps: [
      {
        ko: "뼈와 양지를 찬물에 1시간 담가 핏물을 뺍니다. 끓는 물에 10분 데쳐 거품과 불순물을 걷어 냅니다.",
        en: "Soak bones and brisket 1 hour; blanch 10 minutes and rinse away foam and scum.",
      },
      {
        ko: "큰 냄비에 뼈·양지·대파·마늘과 물 4L를 넣고 센 불에서 끓입니다. 끓으면 중약불로 줄입니다.",
        en: "Cover bones, brisket, scallion, and garlic with 4 L water; boil hard, then reduce to a gentle simmer.",
      },
      {
        ko: "뚜껑을 살짝 연 채 3–4시간 고아 국물이 뽀얗게 우러날 때까지 줍니다. 물을 보충해 뼈가 잠기게 유지합니다.",
        en: "Simmer partially covered 3–4 hours until the broth turns milky, topping up water to keep bones covered.",
      },
      {
        ko: "양지는 2시간쯤에 꺼내 얇게 썰어 둡니다. 뼈는 더 고아 국물만 체에 거릅니다.",
        en: "Remove brisket around the 2-hour mark and slice thin; strain the finished bone broth.",
      },
      {
        ko: "소면은 별도로 삶아 그릇에 담고 국물과 양지 편을 올립니다.",
        en: "Cook somyeon separately, place in bowls, and ladle over hot broth with brisket slices.",
      },
      {
        ko: "식탁에서 소금·후추·다진 대파로 간합니다. 깍두기와 함께 냅니다.",
        en: "Season at the table with salt, pepper, and chopped scallion; serve with kkakdugi if available.",
      },
    ],
  },
  {
    slug: "mul-naengmyeon",
    title: { ko: "물냉면", en: "Mul Naengmyeon" },
    description: {
      ko: "시원한 동치미·육수 국물에 메밀면을 말아 먹는 여름 물냉면.",
      en: "Icy buckwheat noodles in a tangy cold broth—summer’s classic cool-down bowl.",
    },
    categories: ["korean"],
    servings: 2,
    prepMinutes: 25,
    cookMinutes: 10,
    level: { ko: "보통", en: "Medium" },
    image: "/recipes/mul-naengmyeon.jpg",
    ingredients: [
      { amount: { ko: "2인분", en: "2 servings" }, name: { ko: "냉면 사리", en: "naengmyeon (buckwheat) noodles" } },
      { amount: { ko: "3컵", en: "3 cups" }, name: { ko: "차가운 육수/동치미 국물", en: "chilled beef or dongchimi broth" } },
      { amount: { ko: "큰술 1", en: "1 tbsp" }, name: { ko: "식초", en: "vinegar" } },
      { amount: { ko: "작은술 1", en: "1 tsp" }, name: { ko: "설탕", en: "sugar" } },
      { amount: { ko: "1개", en: "1" }, name: { ko: "오이", en: "cucumber" } },
      { amount: { ko: "1개", en: "1" }, name: { ko: "삶은 계란", en: "hard-boiled egg" } },
      { amount: { ko: "4쪽", en: "4 slices" }, name: { ko: "배", en: "Asian pear" } },
    ],
    steps: [
      {
        ko: "육수에 식초·설탕·소금으로 새콤달콤하게 간하고 냉장고에서 충분히 차갑게 식힙니다. 얼음 몇 조각을 넣어도 됩니다.",
        en: "Season broth with vinegar, sugar, and salt; chill thoroughly (add ice cubes if needed).",
      },
      {
        ko: "오이는 채 썰고 배는 얇게 편 썰기합니다. 계란은 반으로 가릅니다.",
        en: "Julienne cucumber, thinly slice pear, and halve the egg.",
      },
      {
        ko: "냉면은 끓는 물에 포장 시간대로 삶아 바로 찬물에 여러 번 비벼 헹궈 전분을 씻어 냅니다.",
        en: "Boil noodles per package, then rub-rinse repeatedly in cold water to remove starch and chill.",
      },
      {
        ko: "면의 물기를 잘 빼고 그릇에 가지런히 담습니다. 면이 길면 가위로 한두 번 자릅니다.",
        en: "Drain well and mound in bowls; snip once or twice with scissors if the strands are very long.",
      },
      {
        ko: "차가운 국물을 면이 잠기도록 붓고 오이·배·계란을 올립니다.",
        en: "Pour cold broth to cover, then top with cucumber, pear, and egg.",
      },
      {
        ko: "식탁에 식초·겨자·설탕을 두고 취향껏 더합니다. 바로 시원하게 먹습니다.",
        en: "Offer extra vinegar, mustard, and sugar at the table; eat immediately while ice-cold.",
      },
    ],
  },
  {
    slug: "yukgaejang",
    title: { ko: "육개장", en: "Yukgaejang" },
    description: {
      ko: "고사리·대파·숙주와 찢은 소고기가 들어간 얼큰한 육개장.",
      en: "Spicy shredded-beef soup with fernbrake, scallion, and bean sprouts.",
    },
    categories: ["korean"],
    servings: 4,
    prepMinutes: 25,
    cookMinutes: 60,
    level: { ko: "보통", en: "Medium" },
    image: "/recipes/yukgaejang.jpg",
    ingredients: [
      { amount: { ko: "400g", en: "14 oz" }, name: { ko: "소고기 양지/사태", en: "beef brisket or shank" } },
      { amount: { ko: "큰술 2", en: "2 tbsp" }, name: { ko: "고춧가루", en: "gochugaru" } },
      { amount: { ko: "1컵", en: "1 cup" }, name: { ko: "불린 고사리", en: "soaked fernbrake (gosari)" } },
      { amount: { ko: "2컵", en: "2 cups" }, name: { ko: "숙주", en: "mung bean sprouts" } },
      { amount: { ko: "4대", en: "4" }, name: { ko: "대파", en: "scallions" } },
      { amount: { ko: "큰술 1", en: "1 tbsp" }, name: { ko: "국간장", en: "soup soy sauce" } },
      { amount: { ko: "큰술 1", en: "1 tbsp" }, name: { ko: "들기름", en: "perilla oil" } },
    ],
    steps: [
      {
        ko: "소고기를 물 6컵에 넣고 거품을 걷으며 40분 삶아 건집니다. 육수는 남깁니다.",
        en: "Simmer beef in 6 cups water 40 minutes, skimming foam; reserve the broth.",
      },
      {
        ko: "고기는 식혀 결대로 찢습니다. 고사리와 대파는 5cm 길이로 썹니다.",
        en: "Shred cooled beef along the grain; cut fernbrake and scallions into 5 cm lengths.",
      },
      {
        ko: "냄비에 들기름을 두르고 고춧가루를 약불에서 30초 볶아 붉은 기름을 냅니다(타지 않게).",
        en: "Gently fry gochugaru in perilla oil 30 seconds over low heat to bloom red oil—do not scorch.",
      },
      {
        ko: "찢은 고기·고사리·대파를 넣고 2분 볶은 뒤 육수와 국간장을 붓습니다.",
        en: "Add shredded beef, fernbrake, and scallion; sauté 2 minutes, then pour in broth and soup soy.",
      },
      {
        ko: "중불에서 15분 끓이다가 숙주를 넣고 3–4분 더 끓여 숨이 죽게 합니다.",
        en: "Simmer 15 minutes, add bean sprouts, and cook 3–4 minutes more until just wilted.",
      },
      {
        ko: "소금으로 간을 맞추고 한소끔 더 끓여 냅니다. 밥과 함께 뜨겁게 먹습니다.",
        en: "Adjust salt, bring to one more boil, and serve piping hot with rice.",
      },
    ],
  },
  {
    slug: "gamjatang",
    title: { ko: "감자탕", en: "Gamjatang" },
    description: {
      ko: "돼지등뼈와 감자를 얼큰하게 푹 끓인 감자탕.",
      en: "Hearty pork-spine stew with potatoes in a spicy, bone-rich broth.",
    },
    categories: ["korean"],
    servings: 4,
    prepMinutes: 30,
    cookMinutes: 90,
    level: { ko: "보통", en: "Medium" },
    image: "/recipes/gamjatang.jpg",
    ingredients: [
      { amount: { ko: "1.2kg", en: "2.6 lb" }, name: { ko: "돼지등뼈", en: "pork neck/spine bones" } },
      { amount: { ko: "3개", en: "3" }, name: { ko: "감자", en: "potatoes" } },
      { amount: { ko: "큰술 2", en: "2 tbsp" }, name: { ko: "고춧가루", en: "gochugaru" } },
      { amount: { ko: "큰술 1", en: "1 tbsp" }, name: { ko: "된장", en: "doenjang" } },
      { amount: { ko: "큰술 1", en: "1 tbsp" }, name: { ko: "국간장", en: "soup soy sauce" } },
      { amount: { ko: "1컵", en: "1 cup" }, name: { ko: "깻잎", en: "perilla leaves" } },
      { amount: { ko: "2대", en: "2" }, name: { ko: "대파", en: "scallions" } },
    ],
    steps: [
      {
        ko: "등뼈는 찬물에 1시간 담가 핏물을 빼고 끓는 물에 10분 데친 뒤 씻습니다.",
        en: "Soak bones 1 hour, blanch 10 minutes, and rinse thoroughly.",
      },
      {
        ko: "감자는 큰 덩어리로, 깻잎과 대파는 채 썰어 둡니다.",
        en: "Cut potatoes into large chunks; chiffonade perilla leaves and slice scallions.",
      },
      {
        ko: "냄비에 등뼈·물 8컵·된장·국간장을 넣고 센 불에서 끓인 뒤 중불로 50분 삶습니다.",
        en: "Simmer bones with 8 cups water, doenjang, and soup soy: boil, then medium heat 50 minutes.",
      },
      {
        ko: "감자와 고춧가루를 넣고 25–30분 더 끓여 감자가 포슬포슬해질 때까지 익힙니다.",
        en: "Add potatoes and gochugaru; cook 25–30 minutes until potatoes are fluffy and tender.",
      },
      {
        ko: "깻잎과 대파를 넣고 2–3분 더 끓여 향을 냅니다. 국물이 걸쭉해지면 불을 끕니다.",
        en: "Stir in perilla and scallion for 2–3 minutes; turn off when broth tastes rich and slightly thick.",
      },
      {
        ko: "뼈에서 살을 발라 먹으며 뜨겁게 냅니다. 기호에 따라 들깨가루를 뿌립니다.",
        en: "Serve hot and pick meat from the bones; dust with ground perilla seeds if desired.",
      },
    ],
  },
  {
    slug: "yangnyeom-chicken",
    title: { ko: "양념치킨", en: "Yangnyeom Chicken" },
    description: {
      ko: "바삭한 닭튀김에 달콤매콤 양념을 버무린 한국식 양념치킨.",
      en: "Double-fried chicken tossed in a sticky sweet-spicy gochujang glaze.",
    },
    categories: ["korean"],
    servings: 3,
    prepMinutes: 25,
    cookMinutes: 30,
    level: { ko: "보통", en: "Medium" },
    image: "/recipes/yangnyeom-chicken.jpg",
    ingredients: [
      { amount: { ko: "800g", en: "1.8 lb" }, name: { ko: "닭날개/다리", en: "chicken wings or drumettes" } },
      { amount: { ko: "1/2컵", en: "1/2 cup" }, name: { ko: "감자 전분", en: "potato starch" } },
      { amount: { ko: "큰술 3", en: "3 tbsp" }, name: { ko: "고추장", en: "gochujang" } },
      { amount: { ko: "큰술 2", en: "2 tbsp" }, name: { ko: "케첩", en: "ketchup" } },
      { amount: { ko: "큰술 2", en: "2 tbsp" }, name: { ko: "설탕 또는 물엿", en: "sugar or corn syrup" } },
      { amount: { ko: "큰술 1", en: "1 tbsp" }, name: { ko: "간장", en: "soy sauce" } },
      { amount: { ko: "튀김유", en: "for frying" }, name: { ko: "식용유", en: "neutral oil" } },
    ],
    steps: [
      {
        ko: "닭은 키친타월로 물기를 완전히 닦고 소금·후추로 가볍게 간한 뒤 전분을 고루 묻힙니다.",
        en: "Pat chicken very dry, season lightly with salt and pepper, and coat evenly in potato starch.",
      },
      {
        ko: "기름을 170°C로 달궈 닭을 8–10분 1차 튀긴 뒤 꺼내 5분 식힙니다.",
        en: "Fry at 170°C / 340°F for 8–10 minutes; drain and rest 5 minutes.",
      },
      {
        ko: "기름을 180°C로 올려 3–4분 2차 튀겨 껍질이 깊게 바삭해지게 합니다.",
        en: "Raise oil to 180°C / 355°F and fry again 3–4 minutes until deeply crisp.",
      },
      {
        ko: "팬에 고추장·케첩·설탕·간장·다진 마늘을 넣고 중불에서 2분 끓여 윤기 나는 양념을 만듭니다.",
        en: "Simmer gochujang, ketchup, sugar, soy, and minced garlic 2 minutes into a glossy glaze.",
      },
      {
        ko: "뜨거운 닭을 양념에 넣고 재빨리 버무려 코팅합니다. 양념이 식기 전에 섞어야 잘 붙습니다.",
        en: "Toss hot chicken in the glaze quickly so it clings before the sauce cools.",
      },
      {
        ko: "참깨나 다진 땅콩을 뿌려 바로 냅니다. 절인 무와 함께 먹으면 좋습니다.",
        en: "Scatter sesame seeds or crushed peanuts; serve immediately with pickled radish.",
      },
    ],
  },
  {
    slug: "bossam",
    title: { ko: "보쌈", en: "Bossam" },
    description: {
      ko: "부드럽게 삶은 수육을 배추·새우젓과 함께 싸 먹는 보쌈.",
      en: "Tender boiled pork belly wrapped in napa leaves with salty shrimp sauce.",
    },
    categories: ["korean"],
    servings: 4,
    prepMinutes: 20,
    cookMinutes: 70,
    level: { ko: "쉬움", en: "Easy" },
    image: "/recipes/bossam.jpg",
    ingredients: [
      { amount: { ko: "1kg", en: "2.2 lb" }, name: { ko: "삼겹살/목살 통덩이", en: "pork belly or shoulder slab" } },
      { amount: { ko: "1덩이", en: "1 knob" }, name: { ko: "생강", en: "ginger" } },
      { amount: { ko: "1개", en: "1" }, name: { ko: "양파", en: "onion" } },
      { amount: { ko: "큰술 2", en: "2 tbsp" }, name: { ko: "된장 또는 커피/된장", en: "doenjang" } },
      { amount: { ko: "1/2통", en: "1/2 head" }, name: { ko: "배추", en: "napa cabbage leaves" } },
      { amount: { ko: "큰술 2", en: "2 tbsp" }, name: { ko: "새우젓", en: "saeujeot (salted shrimp)" } },
      { amount: { ko: "기호껏", en: "to taste" }, name: { ko: "마늘·고추·파", en: "garlic, chili, scallion" } },
    ],
    steps: [
      {
        ko: "냄비에 돼지고기가 잠길 물을 붓고 생강·양파·된장·통후추를 넣습니다.",
        en: "Cover pork with water and add ginger, onion, doenjang, and a few peppercorns.",
      },
      {
        ko: "센 불에서 끓인 뒤 중불로 줄여 60–70분 삶습니다. 젓가락이 쉽게 들어가면 익은 것입니다.",
        en: "Boil, then simmer 60–70 minutes until a chopstick slides in easily.",
      },
      {
        ko: "고기를 꺼내 10분 식힌 뒤 0.5cm 두께로 썹니다. 너무 식히면 굳으니 따뜻할 때 썹니다.",
        en: "Rest 10 minutes, then slice 0.5 cm thick while still warm so it stays tender.",
      },
      {
        ko: "배추잎은 소금물에 살짝 절이거나 생배추·상추를 준비합니다.",
        en: "Briefly salt napa leaves or set out fresh lettuce and raw napa for wrapping.",
      },
      {
        ko: "새우젓에 다진 마늘·청양고추·대파를 섞어 양념 새우젓을 만듭니다.",
        en: "Mix saeujeot with minced garlic, chili, and scallion for the dipping sauce.",
      },
      {
        ko: "배추에 수육과 새우젓·김치를 올려 싸 먹습니다. 뜨거울 때 가장 맛있습니다.",
        en: "Wrap pork with saeujeot and kimchi in cabbage; best eaten while the meat is still warm.",
      },
    ],
  },
  {
    slug: "mandu",
    title: { ko: "만두", en: "Mandu" },
    description: {
      ko: "돼지고기·두부·숙주 소를 넣어 찌거나 굽는 한국식 만두.",
      en: "Korean dumplings stuffed with pork, tofu, and bean sprouts—steam or pan-fry.",
    },
    categories: ["korean"],
    servings: 4,
    prepMinutes: 45,
    cookMinutes: 15,
    level: { ko: "보통", en: "Medium" },
    image: "/recipes/mandu.jpg",
    ingredients: [
      { amount: { ko: "30장", en: "30 wrappers" }, name: { ko: "만두피", en: "dumpling wrappers" } },
      { amount: { ko: "300g", en: "10 oz" }, name: { ko: "돼지고기 다짐육", en: "ground pork" } },
      { amount: { ko: "1/2모", en: "1/2 block" }, name: { ko: "두부", en: "tofu" } },
      { amount: { ko: "1컵", en: "1 cup" }, name: { ko: "숙주", en: "mung bean sprouts" } },
      { amount: { ko: "큰술 1", en: "1 tbsp" }, name: { ko: "간장", en: "soy sauce" } },
      { amount: { ko: "큰술 1", en: "1 tbsp" }, name: { ko: "참기름", en: "sesame oil" } },
      { amount: { ko: "2대", en: "2" }, name: { ko: "대파", en: "scallions" } },
    ],
    steps: [
      {
        ko: "숙주는 데쳐 물기를 짜고 거칠게 다집니다. 두부는 면보에 싸 물기를 꼭 짭니다.",
        en: "Blanch sprouts, squeeze dry, and chop; wrap tofu in a towel and wring out moisture.",
      },
      {
        ko: "돼지고기·두부·숙주·대파·간장·참기름·후추를 한 방향으로 치대듯 섞어 소를 만듭니다.",
        en: "Mix pork, tofu, sprouts, scallion, soy, sesame oil, and pepper in one direction until sticky.",
      },
      {
        ko: "만두피 중앙에 소 한 큰술을 올리고 가장자리에 물을 바른 뒤 반달 모양으로 꼭 누릅니다.",
        en: "Place 1 tbsp filling in each wrapper, wet the rim, and seal into a half-moon, pressing firmly.",
      },
      {
        ko: "찜기에 김이 오르면 만두를 넣고 8–10분 찝니다. 피가 반투명해지면 익은 것입니다.",
        en: "Steam over boiling water 8–10 minutes until wrappers turn translucent.",
      },
      {
        ko: "군만두로 하려면 팬에 기름을 두르고 바닥을 3분 구운 뒤 물 1/4컵을 넣고 뚜껑을 덮어 5분 찹니다.",
        en: "For pan-fried: sear bottoms 3 minutes, add 1/4 cup water, cover, and steam-fry 5 minutes.",
      },
      {
        ko: "간장·식초·고춧가루 찍먹과 함께 뜨겁게 냅니다.",
        en: "Serve hot with a soy–vinegar–chili dipping sauce.",
      },
    ],
  },
  {
    slug: "dakbokkeumtang",
    title: { ko: "닭볶음탕", en: "Dakbokkeumtang" },
    description: {
      ko: "감자와 당근을 넣고 매콤하게 조린 닭볶음탕(닭도리탕).",
      en: "Spicy braised chicken with potatoes and carrots in a gochujang-gochugaru sauce.",
    },
    categories: ["korean"],
    servings: 4,
    prepMinutes: 20,
    cookMinutes: 40,
    level: { ko: "쉬움", en: "Easy" },
    image: "/recipes/dakbokkeumtang.jpg",
    ingredients: [
      { amount: { ko: "1kg", en: "2.2 lb" }, name: { ko: "닭볶음탕용 닭", en: "bone-in chicken pieces" } },
      { amount: { ko: "2개", en: "2" }, name: { ko: "감자", en: "potatoes" } },
      { amount: { ko: "1개", en: "1" }, name: { ko: "당근", en: "carrot" } },
      { amount: { ko: "큰술 2", en: "2 tbsp" }, name: { ko: "고추장", en: "gochujang" } },
      { amount: { ko: "큰술 2", en: "2 tbsp" }, name: { ko: "고춧가루", en: "gochugaru" } },
      { amount: { ko: "큰술 2", en: "2 tbsp" }, name: { ko: "간장", en: "soy sauce" } },
      { amount: { ko: "1개", en: "1" }, name: { ko: "양파", en: "onion" } },
      { amount: { ko: "2대", en: "2" }, name: { ko: "대파", en: "scallions" } },
    ],
    steps: [
      {
        ko: "닭은 찬물에 헹궈 핏물을 빼고, 감자·당근·양파는 큰 덩어리로 썹니다.",
        en: "Rinse chicken; cut potatoes, carrot, and onion into large chunks.",
      },
      {
        ko: "고추장·고춧가루·간장·설탕 큰술 1·다진 마늘을 섞어 양념장을 만듭니다.",
        en: "Mix gochujang, gochugaru, soy, 1 tbsp sugar, and minced garlic into a sauce.",
      },
      {
        ko: "냄비에 닭과 양념장, 물 1.5컵을 넣고 센 불에서 끓입니다.",
        en: "Combine chicken, sauce, and 1.5 cups water in a pot; bring to a boil.",
      },
      {
        ko: "중불로 줄여 15분 끓인 뒤 감자와 당근을 넣고 15–20분 더 조립니다.",
        en: "Simmer 15 minutes, add potatoes and carrot, and braise 15–20 minutes more.",
      },
      {
        ko: "양파와 대파를 넣고 5분 더 끓여 양념이 걸쭉하고 닭에 배게 합니다.",
        en: "Add onion and scallion; cook 5 minutes until sauce thickens and coats the chicken.",
      },
      {
        ko: "감자가 포슬하고 닭이 뼈에서 살짝 벌어지면 완성입니다. 밥과 함께 냅니다.",
        en: "Done when potatoes are fluffy and chicken pulls slightly from the bone; serve with rice.",
      },
    ],
  },
  {
    slug: "ojingeo-bokkeum",
    title: { ko: "오징어볶음", en: "Ojingeo Bokkeum" },
    description: {
      ko: "신선한 오징어를 매콤달콤 양념에 빠르게 볶아 낸 오징어볶음.",
      en: "Quick-seared squid in a sweet-spicy gochujang sauce with onions and scallion.",
    },
    categories: ["korean"],
    servings: 3,
    prepMinutes: 20,
    cookMinutes: 10,
    level: { ko: "보통", en: "Medium" },
    image: "/recipes/ojingeo-bokkeum.jpg",
    ingredients: [
      { amount: { ko: "500g", en: "1.1 lb" }, name: { ko: "오징어", en: "cleaned squid" } },
      { amount: { ko: "큰술 2", en: "2 tbsp" }, name: { ko: "고추장", en: "gochujang" } },
      { amount: { ko: "큰술 1", en: "1 tbsp" }, name: { ko: "고춧가루", en: "gochugaru" } },
      { amount: { ko: "큰술 1", en: "1 tbsp" }, name: { ko: "설탕", en: "sugar" } },
      { amount: { ko: "큰술 1", en: "1 tbsp" }, name: { ko: "간장", en: "soy sauce" } },
      { amount: { ko: "1개", en: "1" }, name: { ko: "양파", en: "onion" } },
      { amount: { ko: "2대", en: "2" }, name: { ko: "대파", en: "scallions" } },
    ],
    steps: [
      {
        ko: "오징어는 몸통에 칼집을 넣고 고리 모양으로 썹니다. 물기를 키친타월로 닦습니다.",
        en: "Score squid bodies, cut into rings, and pat very dry with paper towels.",
      },
      {
        ko: "고추장·고춧가루·설탕·간장·다진 마늘·참기름을 섞어 양념을 만듭니다.",
        en: "Mix gochujang, gochugaru, sugar, soy, minced garlic, and a drizzle of sesame oil.",
      },
      {
        ko: "양파와 대파는 굵게 채 썹니다. 팬을 센 불로 예열합니다.",
        en: "Cut onion and scallion into thick strips; get a skillet screaming hot.",
      },
      {
        ko: "기름을 두르고 오징어를 1–2분 빠르게 볶아 반투명해지면 꺼냅니다(질겨지기 전).",
        en: "Stir-fry squid 1–2 minutes until just opaque; remove immediately to avoid toughness.",
      },
      {
        ko: "같은 팬에 양파를 2분 볶고 양념을 넣어 30초 볶은 뒤 오징어를 돌려 넣고 버무립니다.",
        en: "Sauté onion 2 minutes, fry the sauce 30 seconds, return squid, and toss to coat.",
      },
      {
        ko: "대파를 넣고 30초 더 볶아 바로 냅니다. 통깨를 뿌리면 고소합니다.",
        en: "Add scallion for 30 seconds and serve at once; finish with toasted sesame seeds.",
      },
    ],
  },
  {
    slug: "galbitang",
    title: { ko: "갈비탕", en: "Galbitang" },
    description: {
      ko: "맑은 국물에 소갈비를 푹 삶은 담백한 갈비탕.",
      en: "Clear, comforting short-rib soup simmered with radish, garlic, and scallion.",
    },
    categories: ["korean"],
    servings: 4,
    prepMinutes: 30,
    cookMinutes: 120,
    level: { ko: "보통", en: "Medium" },
    image: "/recipes/galbitang.jpg",
    ingredients: [
      { amount: { ko: "1kg", en: "2.2 lb" }, name: { ko: "갈비탕용 소갈비", en: "beef short ribs for soup" } },
      { amount: { ko: "1/2개", en: "1/2" }, name: { ko: "무", en: "Korean radish (mu)" } },
      { amount: { ko: "6쪽", en: "6 cloves" }, name: { ko: "마늘", en: "garlic" } },
      { amount: { ko: "2대", en: "2" }, name: { ko: "대파", en: "scallions" } },
      { amount: { ko: "큰술 1", en: "1 tbsp" }, name: { ko: "국간장", en: "soup soy sauce" } },
      { amount: { ko: "기호껏", en: "to taste" }, name: { ko: "소금·후추", en: "salt and pepper" } },
    ],
    steps: [
      {
        ko: "갈비는 찬물에 1–2시간 담가 핏물을 빼고 끓는 물에 10분 데쳐 씻습니다.",
        en: "Soak ribs 1–2 hours, blanch 10 minutes, and rinse clean.",
      },
      {
        ko: "냄비에 갈비와 물 3L, 마늘·대파 흰 부분을 넣고 센 불에서 끓입니다.",
        en: "Cover ribs with 3 L water plus garlic and scallion whites; bring to a boil.",
      },
      {
        ko: "거품을 걷어 내며 중약불로 90분 삶습니다. 국물이 맑고 고기가 부드러워집니다.",
        en: "Skim foam and simmer gently 90 minutes until broth is clear and meat tender.",
      },
      {
        ko: "무는 두툼한 반달썰기로 넣어 20분 더 끓여 투명해지게 합니다.",
        en: "Add thick radish half-moons and cook 20 minutes until translucent.",
      },
      {
        ko: "국간장과 소금으로 간하고 대파 초록 부분을 넣습니다. 후추를 살짝 뿌립니다.",
        en: "Season with soup soy and salt; add green scallion tops and a pinch of pepper.",
      },
      {
        ko: "기름기를 걷어 내고 뜨겁게 냅니다. 파김치나 깍두기가 잘 어울립니다.",
        en: "Skim excess fat and serve hot with kimchi or kkakdugi.",
      },
    ],
  },
  {
    slug: "hobak-jeon",
    title: { ko: "호박전", en: "Hobak Jeon" },
    description: {
      ko: "애호박을 밀가루·계란 옷을 입혀 노릇하게 부친 담백한 호박전.",
      en: "Pan-fried zucchini coins in a light flour-and-egg coating.",
    },
    categories: ["korean", "vegetarian"],
    servings: 3,
    prepMinutes: 15,
    cookMinutes: 15,
    level: { ko: "쉬움", en: "Easy" },
    image: "/recipes/hobak-jeon.jpg",
    ingredients: [
      { amount: { ko: "1개", en: "1" }, name: { ko: "애호박", en: "Korean zucchini (hobak)" } },
      { amount: { ko: "1/2컵", en: "1/2 cup" }, name: { ko: "밀가루", en: "all-purpose flour" } },
      { amount: { ko: "2개", en: "2" }, name: { ko: "계란", en: "eggs" } },
      { amount: { ko: "작은술 1/2", en: "1/2 tsp" }, name: { ko: "소금", en: "salt" } },
      { amount: { ko: "큰술 3", en: "3 tbsp" }, name: { ko: "식용유", en: "neutral oil" } },
      { amount: { ko: "기호껏", en: "for dipping" }, name: { ko: "간장·식초", en: "soy sauce and vinegar" } },
    ],
    steps: [
      {
        ko: "애호박은 0.7cm 두께로 둥글게 썰어 소금으로 살짝 절여 5분 둡니다.",
        en: "Slice zucchini into 0.7 cm rounds and salt lightly; rest 5 minutes.",
      },
      {
        ko: "키친타월로 물기를 닦고 밀가루를 얇게 묻힙니다. 여분의 가루는 털어 냅니다.",
        en: "Pat dry, dust thinly with flour, and shake off excess.",
      },
      {
        ko: "계란에 약간의 소금을 풀어 계란물을 만듭니다.",
        en: "Beat eggs with a pinch of salt for the egg wash.",
      },
      {
        ko: "중불 팬에 기름을 두르고 호박을 계란물에 담근 뒤 올려 2–3분 굽습니다.",
        en: "Dip floured rounds in egg and fry over medium heat 2–3 minutes per side.",
      },
      {
        ko: "뒤집어 노릇해질 때까지 구워 켜켜이 접시에 담습니다. 기름이 부족하면 보충합니다.",
        en: "Flip until golden; stack on a plate, adding oil as needed between batches.",
      },
      {
        ko: "간장·식초 찍먹과 함께 따뜻할 때 냅니다.",
        en: "Serve warm with a simple soy–vinegar dipping sauce.",
      },
    ],
  },
  {
    slug: "kongguksu",
    title: { ko: "콩국수", en: "Kongguksu" },
    description: {
      ko: "고소한 콩물을 갈아 차갑게 말아 먹는 여름 콩국수.",
      en: "Chilled soy-milk noodle soup—nutty, creamy, and refreshing.",
    },
    categories: ["korean", "vegetarian"],
    servings: 2,
    prepMinutes: 15,
    cookMinutes: 15,
    level: { ko: "쉬움", en: "Easy" },
    image: "/recipes/kongguksu.jpg",
    ingredients: [
      { amount: { ko: "1컵", en: "1 cup" }, name: { ko: "불린 흰콩(대두)", en: "soaked soybeans" } },
      { amount: { ko: "2인분", en: "2 servings" }, name: { ko: "소면", en: "somyeon noodles" } },
      { amount: { ko: "큰술 2", en: "2 tbsp" }, name: { ko: "깨", en: "toasted sesame seeds" } },
      { amount: { ko: "1/2개", en: "1/2" }, name: { ko: "오이", en: "cucumber" } },
      { amount: { ko: "기호껏", en: "to taste" }, name: { ko: "소금", en: "salt" } },
      { amount: { ko: "약간의", en: "a few" }, name: { ko: "얼음", en: "ice cubes" } },
    ],
    steps: [
      {
        ko: "불린 콩을 끓는 물에 10–12분 삶아 부드러워지면 건져 찬물에 헹굽니다.",
        en: "Boil soaked soybeans 10–12 minutes until soft; drain and rinse in cold water.",
      },
      {
        ko: "콩·깨·찬물 2.5컵을 블렌더에 곱게 갈아 콩물을 만듭니다. 체에 밭쳐도 됩니다.",
        en: "Blend beans, sesame, and 2.5 cups cold water until smooth; strain for silkier texture if desired.",
      },
      {
        ko: "소금으로 간하고 냉장고에서 차갑게 식힙니다.",
        en: "Season with salt and chill thoroughly in the fridge.",
      },
      {
        ko: "소면은 삶아 찬물에 헹궈 전분을 씻고 물기를 뺍니다.",
        en: "Cook somyeon, rinse in cold water until no longer sticky, and drain.",
      },
      {
        ko: "그릇에 면을 담고 콩물을 부은 뒤 오이채와 얼음을 올립니다.",
        en: "Mound noodles, pour soy broth over, and top with julienned cucumber and ice.",
      },
      {
        ko: "기호에 따라 설탕이나 소금을 더해 냅니다. 바로 시원하게 먹습니다.",
        en: "Adjust salt or a pinch of sugar at the table; eat immediately while cold.",
      },
    ],
  },
  {
    slug: "andong-jjimdak",
    title: { ko: "안동찜닭", en: "Andong Jjimdak" },
    description: {
      ko: "당면과 채소를 넣고 달콤짭짤하게 조린 안동식 찜닭.",
      en: "Soy-braised chicken with glass noodles, potatoes, and vegetables from Andong.",
    },
    categories: ["korean"],
    servings: 4,
    prepMinutes: 25,
    cookMinutes: 40,
    level: { ko: "보통", en: "Medium" },
    image: "/recipes/andong-jjimdak.jpg",
    ingredients: [
      { amount: { ko: "1kg", en: "2.2 lb" }, name: { ko: "닭볶음탕용 닭", en: "bone-in chicken pieces" } },
      { amount: { ko: "큰술 5", en: "5 tbsp" }, name: { ko: "간장", en: "soy sauce" } },
      { amount: { ko: "큰술 2", en: "2 tbsp" }, name: { ko: "설탕 또는 물엿", en: "sugar or corn syrup" } },
      { amount: { ko: "2개", en: "2" }, name: { ko: "감자", en: "potatoes" } },
      { amount: { ko: "1개", en: "1" }, name: { ko: "당근", en: "carrot" } },
      { amount: { ko: "100g", en: "3.5 oz" }, name: { ko: "당면", en: "sweet potato noodles (dangmyeon)" } },
      { amount: { ko: "10개", en: "10" }, name: { ko: "건고추·마늘", en: "dried chilies and garlic cloves" } },
    ],
    steps: [
      {
        ko: "간장·설탕·다진 마늘·후추·물 2컵을 섞어 양념 국물을 만듭니다.",
        en: "Mix soy sauce, sugar, minced garlic, pepper, and 2 cups water for the braising liquid.",
      },
      {
        ko: "냄비에 닭과 양념 국물을 넣고 센 불에서 끓인 뒤 중불로 15분 삶습니다.",
        en: "Simmer chicken in the sauce: boil hard, then medium heat 15 minutes.",
      },
      {
        ko: "감자와 당근 큰 토막, 통마늘·건고추를 넣고 15분 더 조립니다.",
        en: "Add potato and carrot chunks, whole garlic, and dried chilies; braise 15 minutes more.",
      },
      {
        ko: "불린 당면을 넣고 국물이 자작해질 때까지 5–8분 더 끓여 당면이 국물을 흡수하게 합니다.",
        en: "Add soaked glass noodles and cook 5–8 minutes until they soak up the glossy sauce.",
      },
      {
        ko: "대파와 통깨를 넣고 불을 끕니다. 국물이 닭과 당면에 윤기 있게 배어야 완성입니다.",
        en: "Finish with scallion and sesame seeds off heat; the glaze should coat chicken and noodles.",
      },
      {
        ko: "큰 접시에 모아 가족 단위로 나눠 먹습니다. 매콤함을 원하면 청양고추를 추가합니다.",
        en: "Serve family-style on a large platter; add fresh chili for extra heat if desired.",
      },
    ],
  },

  // ——— CHINESE ———
  {
    slug: "general-tsos-chicken",
    title: { ko: "제너럴 쏘 치킨", en: "General Tso's Chicken" },
    description: {
      ko: "바삭한 닭고기와 새콤달콤 매콤 소스가 만난 중식 레스토랑식 치킨.",
      en: "Crispy fried chicken tossed in a sweet, tangy, lightly spicy glaze.",
    },
    categories: ["chinese"],
    servings: 3,
    prepMinutes: 25,
    cookMinutes: 20,
    level: { ko: "보통", en: "Medium" },
    image: "/recipes/general-tsos-chicken.jpg",
    ingredients: [
      { amount: { ko: "500g", en: "1.1 lb" }, name: { ko: "닭가슴살/허벅지", en: "chicken thigh, cubed" } },
      { amount: { ko: "1/2컵", en: "1/2 cup" }, name: { ko: "전분", en: "cornstarch" } },
      { amount: { ko: "큰술 3", en: "3 tbsp" }, name: { ko: "간장", en: "soy sauce" } },
      { amount: { ko: "큰술 3", en: "3 tbsp" }, name: { ko: "설탕", en: "sugar" } },
      { amount: { ko: "큰술 2", en: "2 tbsp" }, name: { ko: "쌀식초", en: "rice vinegar" } },
      { amount: { ko: "작은술 1", en: "1 tsp" }, name: { ko: "고추 후레이크", en: "chili flakes" } },
      { amount: { ko: "2쪽", en: "2 cloves" }, name: { ko: "마늘·생강", en: "garlic and ginger" } },
    ],
    steps: [
      {
        ko: "닭에 간장 큰술 1과 계란 흰자·전분을 버무려 10분 재웁니다.",
        en: "Toss chicken with 1 tbsp soy, egg white, and cornstarch; rest 10 minutes.",
      },
      {
        ko: "기름 170°C에서 닭을 황금빛이 될 때까지 4–5분 튀겨 건집니다.",
        en: "Deep-fry at 170°C / 340°F for 4–5 minutes until golden; drain.",
      },
      {
        ko: "간장·설탕·식초·물 1/4컵·전분 작은술 1을 섞어 소스를 만듭니다.",
        en: "Whisk remaining soy, sugar, vinegar, 1/4 cup water, and 1 tsp cornstarch for the sauce.",
      },
      {
        ko: "팬에 마늘·생강·고추를 30초 볶고 소스를 부어 걸쭉해질 때까지 1분 끓입니다.",
        en: "Sauté garlic, ginger, and chili 30 seconds; add sauce and simmer 1 minute until glossy.",
      },
      {
        ko: "튀긴 닭을 넣고 빠르게 버무려 코팅합니다.",
        en: "Toss fried chicken in the sauce until every piece is coated.",
      },
      {
        ko: "쪽파를 뿌려 밥과 함께 바로 냅니다.",
        en: "Garnish with scallion greens and serve immediately over rice.",
      },
    ],
  },
  {
    slug: "beef-broccoli",
    title: { ko: "브로콜리 소고기 볶음", en: "Beef and Broccoli" },
    description: {
      ko: "부드러운 소고기와 아삭한 브로콜리를 굴소스로 볶은 집밥 중식.",
      en: "Tender beef and crisp broccoli in a savory oyster-soy stir-fry sauce.",
    },
    categories: ["chinese"],
    servings: 3,
    prepMinutes: 20,
    cookMinutes: 12,
    level: { ko: "쉬움", en: "Easy" },
    image: "/recipes/beef-broccoli.jpg",
    ingredients: [
      { amount: { ko: "400g", en: "14 oz" }, name: { ko: "소고기 등심(얇게)", en: "flank or sirloin, thinly sliced" } },
      { amount: { ko: "1포기", en: "1 head" }, name: { ko: "브로콜리", en: "broccoli" } },
      { amount: { ko: "큰술 2", en: "2 tbsp" }, name: { ko: "굴소스", en: "oyster sauce" } },
      { amount: { ko: "큰술 1", en: "1 tbsp" }, name: { ko: "간장", en: "soy sauce" } },
      { amount: { ko: "큰술 1", en: "1 tbsp" }, name: { ko: "전분", en: "cornstarch" } },
      { amount: { ko: "2쪽", en: "2 cloves" }, name: { ko: "마늘", en: "garlic" } },
      { amount: { ko: "작은술 1", en: "1 tsp" }, name: { ko: "참기름", en: "sesame oil" } },
    ],
    steps: [
      {
        ko: "소고기에 전분·간장 작은술 1·기름을 버무려 15분 재웁니다(벨벳팅).",
        en: "Velvet beef with cornstarch, 1 tsp soy, and a little oil for 15 minutes.",
      },
      {
        ko: "브로콜리는 작은 송이로 나눠 끓는 물에 1분 데쳐 찬물에 담급니다.",
        en: "Cut broccoli into florets, blanch 1 minute, and shock in cold water.",
      },
      {
        ko: "굴소스·간장·물 1/4컵·설탕 작은술을 섞어 소스를 준비합니다.",
        en: "Mix oyster sauce, soy, 1/4 cup water, and a pinch of sugar for the sauce.",
      },
      {
        ko: "센 불 팬에 소고기를 펼쳐 1–2분 빠르게 볶아 반쯤 익혀 꺼냅니다.",
        en: "Sear beef in a hot wok 1–2 minutes until just shy of done; remove.",
      },
      {
        ko: "마늘을 볶고 브로콜리·소스·고기를 넣어 2분 볶아 소스가 윤기 나게 코팅되게 합니다.",
        en: "Fry garlic, return broccoli and beef with sauce, and toss 2 minutes until glossy.",
      },
      {
        ko: "참기름을 둘러 불을 끄고 밥과 함께 냅니다.",
        en: "Finish with sesame oil off heat; serve over steamed rice.",
      },
    ],
  },
  {
    slug: "chow-mein",
    title: { ko: "차오멘", en: "Chow Mein" },
    description: {
      ko: "바삭하거나 부드러운 볶음면에 야채와 간장소스를 입힌 차오멘.",
      en: "Stir-fried noodles with vegetables in a savory soy-sesame sauce.",
    },
    categories: ["chinese"],
    servings: 3,
    prepMinutes: 15,
    cookMinutes: 12,
    level: { ko: "쉬움", en: "Easy" },
    image: "/recipes/chow-mein.jpg",
    ingredients: [
      { amount: { ko: "300g", en: "10 oz" }, name: { ko: "중화 볶음면", en: "fresh chow mein noodles" } },
      { amount: { ko: "1컵", en: "1 cup" }, name: { ko: "양배추", en: "cabbage" } },
      { amount: { ko: "1개", en: "1" }, name: { ko: "당근", en: "carrot" } },
      { amount: { ko: "큰술 2", en: "2 tbsp" }, name: { ko: "간장", en: "soy sauce" } },
      { amount: { ko: "큰술 1", en: "1 tbsp" }, name: { ko: "굴소스", en: "oyster sauce" } },
      { amount: { ko: "작은술 1", en: "1 tsp" }, name: { ko: "참기름", en: "sesame oil" } },
      { amount: { ko: "2대", en: "2" }, name: { ko: "대파", en: "scallions" } },
    ],
    steps: [
      {
        ko: "면은 포장 지시대로 데쳐 찬물에 헹군 뒤 참기름을 둘러 달라붙지 않게 합니다.",
        en: "Parboil noodles, rinse, and toss with sesame oil so they don’t clump.",
      },
      {
        ko: "양배추·당근·대파는 채 썹니다. 간장·굴소스·후추를 섞어 소스를 만듭니다.",
        en: "Julienne cabbage, carrot, and scallion; mix soy, oyster sauce, and pepper.",
      },
      {
        ko: "센 불 팬에 기름을 두르고 채소를 2분 볶아 숨이 살짝 죽게 합니다.",
        en: "Stir-fry vegetables over high heat 2 minutes until just wilted.",
      },
      {
        ko: "면을 넣고 소스와 함께 2–3분 볶아 면이 소스를 흡수하게 합니다.",
        en: "Add noodles and sauce; toss 2–3 minutes until noodles drink up the seasoning.",
      },
      {
        ko: "팬 바닥에 면이 살짝 눌어 바삭한 부분이 생기면 불을 끕니다.",
        en: "Let some noodles sit against the pan for light crispy bits, then turn off heat.",
      },
      {
        ko: "대파 초록 부분을 섞어 바로 냅니다.",
        en: "Fold in scallion greens and serve immediately.",
      },
    ],
  },
  {
    slug: "vegetable-spring-rolls",
    title: { ko: "야채 춘권", en: "Vegetable Spring Rolls" },
    description: {
      ko: "양배추·당근 소를 얇은 피에 말아 바삭하게 튀긴 야채 춘권.",
      en: "Crispy fried rolls filled with seasoned cabbage, carrot, and mushrooms.",
    },
    categories: ["chinese", "vegetarian"],
    servings: 4,
    prepMinutes: 35,
    cookMinutes: 15,
    level: { ko: "보통", en: "Medium" },
    image: "/recipes/vegetable-spring-rolls.jpg",
    ingredients: [
      { amount: { ko: "12장", en: "12 wrappers" }, name: { ko: "춘권피", en: "spring roll wrappers" } },
      { amount: { ko: "2컵", en: "2 cups" }, name: { ko: "양배추", en: "cabbage" } },
      { amount: { ko: "1개", en: "1" }, name: { ko: "당근", en: "carrot" } },
      { amount: { ko: "4개", en: "4" }, name: { ko: "표고버섯", en: "shiitake mushrooms" } },
      { amount: { ko: "큰술 1", en: "1 tbsp" }, name: { ko: "간장", en: "soy sauce" } },
      { amount: { ko: "작은술 1", en: "1 tsp" }, name: { ko: "참기름", en: "sesame oil" } },
      { amount: { ko: "튀김유", en: "for frying" }, name: { ko: "식용유", en: "neutral oil" } },
    ],
    steps: [
      {
        ko: "양배추·당근·버섯을 채 썰어 센 불에 2–3분 볶고 간장·참기름으로 간합니다. 완전히 식힙니다.",
        en: "Stir-fry shredded cabbage, carrot, and mushrooms 2–3 minutes; season with soy and sesame oil, then cool completely.",
      },
      {
        ko: "춘권피 모서리가 마주 보게 두고 소 2큰술을 올린 뒤 양쪽을 접고 단단히 말아 풀로 끝을 붙입니다.",
        en: "Place filling near one corner, fold sides in, roll tightly, and seal the edge with a cornstarch slurry.",
      },
      {
        ko: "기름을 180°C로 달궈 춘권을 넣고 2–3분 돌려 가며 튀깁니다.",
        en: "Fry at 180°C / 355°F for 2–3 minutes, turning, until deep golden.",
      },
      {
        ko: "기름을 빼고 랙에 올려 바삭함을 유지합니다.",
        en: "Drain on a rack (not paper alone) so the bottoms stay crisp.",
      },
      {
        ko: "달콤한 칠리소스나 식초 간장과 함께 바로 냅니다.",
        en: "Serve hot with sweet chili sauce or a soy–vinegar dip.",
      },
      {
        ko: "남긴 것은 에어프라이어 180°C 5분으로 재가열하면 바삭함이 돌아옵니다.",
        en: "Reheat leftovers in a 180°C / 355°F air fryer for 5 minutes to restore crunch.",
      },
    ],
  },
  {
    slug: "peking-duck",
    title: { ko: "베이징덕(홈스타일)", en: "Peking Duck (Home-Style)" },
    description: {
      ko: "집에서 오븐으로 바삭한 껍질을 낸 홈스타일 베이징덕.",
      en: "Home-oven roast duck with crisp skin, scallion, cucumber, and pancakes.",
    },
    categories: ["chinese"],
    servings: 4,
    prepMinutes: 40,
    cookMinutes: 90,
    level: { ko: "보통", en: "Medium" },
    image: "/recipes/peking-duck.jpg",
    ingredients: [
      { amount: { ko: "1마리(약 2kg)", en: "1 duck (~4 lb)" }, name: { ko: "통오리", en: "whole duck" } },
      { amount: { ko: "큰술 2", en: "2 tbsp" }, name: { ko: "꿀 또는 물엿", en: "honey or maltose" } },
      { amount: { ko: "큰술 1", en: "1 tbsp" }, name: { ko: "간장", en: "soy sauce" } },
      { amount: { ko: "작은술 1", en: "1 tsp" }, name: { ko: "오향분", en: "five-spice powder" } },
      { amount: { ko: "10장", en: "10" }, name: { ko: "밀전병", en: "Mandarin pancakes" } },
      { amount: { ko: "1개", en: "1" }, name: { ko: "오이", en: "cucumber" } },
      { amount: { ko: "4대", en: "4" }, name: { ko: "대파", en: "scallions" } },
      { amount: { ko: "큰술 4", en: "4 tbsp" }, name: { ko: "호이신 소스", en: "hoisin sauce" } },
    ],
    steps: [
      {
        ko: "오리 껍질을 키친타월로 닦고 소금·오향분을 안팎에 문지릅니다. 냉장고에서 1시간 이상 겉을 말립니다.",
        en: "Pat duck dry, rub with salt and five-spice, and air-dry uncovered in the fridge at least 1 hour.",
      },
      {
        ko: "꿀·간장·뜨거운 물을 섞어 껍질에 두세 번 발라 윤기를 냅니다.",
        en: "Brush skin with honey–soy–hot water glaze two or three times.",
      },
      {
        ko: "오븐 190°C에서 랙 위에 올려 75–90분 굽습니다. 중간중간 기름을 걷어 냅니다.",
        en: "Roast on a rack at 190°C / 375°F for 75–90 minutes, draining fat as needed.",
      },
      {
        ko: "껍질이 짙은 호박색이 되면 꺼내 15분 휴지시킵니다.",
        en: "When skin is deep amber, rest 15 minutes before carving.",
      },
      {
        ko: "껍질과 살을 얇게 저며 전병에 호이신·오이채·파채와 함께 싸 먹습니다.",
        en: "Carve crisp skin and meat; wrap in pancakes with hoisin, cucumber, and scallion.",
      },
      {
        ko: "남은 뼈는 물에 끓여 간단한 오리 수프로 활용할 수 있습니다.",
        en: "Simmer the carcass for a quick duck soup if you like.",
      },
    ],
  },
  {
    slug: "lo-mein",
    title: { ko: "로멘", en: "Lo Mein" },
    description: {
      ko: "부드러운 계란면에 간장·참깨 소스를 버무린 로멘.",
      en: "Soft egg noodles tossed with vegetables in a soy-sesame sauce.",
    },
    categories: ["chinese"],
    servings: 3,
    prepMinutes: 15,
    cookMinutes: 10,
    level: { ko: "쉬움", en: "Easy" },
    image: "/recipes/lo-mein.jpg",
    ingredients: [
      { amount: { ko: "300g", en: "10 oz" }, name: { ko: "로멘/계란면", en: "lo mein or egg noodles" } },
      { amount: { ko: "큰술 2", en: "2 tbsp" }, name: { ko: "간장", en: "soy sauce" } },
      { amount: { ko: "큰술 1", en: "1 tbsp" }, name: { ko: "굴소스", en: "oyster sauce" } },
      { amount: { ko: "작은술 1", en: "1 tsp" }, name: { ko: "설탕", en: "sugar" } },
      { amount: { ko: "1컵", en: "1 cup" }, name: { ko: "숙주", en: "bean sprouts" } },
      { amount: { ko: "1개", en: "1" }, name: { ko: "피망", en: "bell pepper" } },
      { amount: { ko: "2대", en: "2" }, name: { ko: "대파", en: "scallions" } },
    ],
    steps: [
      {
        ko: "면을 삶아 알덴테로 건진 뒤 찬물에 살짝 헹굽니다.",
        en: "Cook noodles until just al dente; drain and rinse briefly.",
      },
      {
        ko: "간장·굴소스·설탕·참기름·흰후추를 섞어 소스를 만듭니다.",
        en: "Whisk soy, oyster sauce, sugar, sesame oil, and white pepper.",
      },
      {
        ko: "센 불에 피망·대파를 1분 볶고 숙주를 넣어 30초 더 볶습니다.",
        en: "Stir-fry pepper and scallion 1 minute; add sprouts for 30 seconds.",
      },
      {
        ko: "면과 소스를 넣고 2분 동안 고루 버무립니다.",
        en: "Add noodles and sauce; toss 2 minutes until evenly coated and hot.",
      },
      {
        ko: "면이 윤기 나고 소스가 거의 흡수되면 불을 끕니다.",
        en: "Turn off heat when noodles look glossy and little sauce remains in the pan.",
      },
      {
        ko: "통깨를 뿌려 바로 냅니다.",
        en: "Finish with toasted sesame seeds and serve at once.",
      },
    ],
  },
  {
    slug: "orange-chicken",
    title: { ko: "오렌지 치킨", en: "Orange Chicken" },
    description: {
      ko: "바삭한 닭에 오렌지 제스트 소스를 입힌 달콤상큼 오렌지 치킨.",
      en: "Crispy chicken bites glazed in a bright, citrusy orange sauce.",
    },
    categories: ["chinese"],
    servings: 3,
    prepMinutes: 20,
    cookMinutes: 20,
    level: { ko: "보통", en: "Medium" },
    image: "/recipes/orange-chicken.jpg",
    ingredients: [
      { amount: { ko: "500g", en: "1.1 lb" }, name: { ko: "닭가슴살 큐브", en: "chicken breast, cubed" } },
      { amount: { ko: "1/2컵", en: "1/2 cup" }, name: { ko: "전분", en: "cornstarch" } },
      { amount: { ko: "1/2컵", en: "1/2 cup" }, name: { ko: "오렌지 주스", en: "orange juice" } },
      { amount: { ko: "큰술 2", en: "2 tbsp" }, name: { ko: "설탕", en: "sugar" } },
      { amount: { ko: "큰술 1", en: "1 tbsp" }, name: { ko: "간장", en: "soy sauce" } },
      { amount: { ko: "큰술 1", en: "1 tbsp" }, name: { ko: "쌀식초", en: "rice vinegar" } },
      { amount: { ko: "1개", en: "1" }, name: { ko: "오렌지 제스트", en: "orange zest" } },
    ],
    steps: [
      {
        ko: "닭에 소금·후추를 치고 전분을 두껍게 묻힙니다.",
        en: "Season chicken and dredge generously in cornstarch.",
      },
      {
        ko: "170°C 기름에서 황금빛이 될 때까지 4–5분 튀깁니다.",
        en: "Fry at 170°C / 340°F for 4–5 minutes until golden and crisp.",
      },
      {
        ko: "주스·설탕·간장·식초·제스트·전분 작은술을 섞어 소스를 만듭니다.",
        en: "Combine juice, sugar, soy, vinegar, zest, and 1 tsp cornstarch for the sauce.",
      },
      {
        ko: "팬에 마늘을 볶고 소스를 부어 1–2분 끓여 시럽처럼 농축합니다.",
        en: "Sauté garlic briefly, add sauce, and simmer 1–2 minutes until syrupy.",
      },
      {
        ko: "닭을 넣고 재빨리 버무려 코팅합니다.",
        en: "Toss chicken to coat evenly in the sticky orange glaze.",
      },
      {
        ko: "오렌지 슬라이스와 쪽파를 올려 밥과 함께 냅니다.",
        en: "Garnish with orange slices and scallion; serve over rice.",
      },
    ],
  },
  {
    slug: "xiao-long-bao",
    title: { ko: "샤오롱바오", en: "Xiao Long Bao" },
    description: {
      ko: "육즙 가득한 소를 얇은 피에 싼 상하이식 소룡포(홈 버전).",
      en: "Soup dumplings with a juicy pork filling and delicate steamed wrappers.",
    },
    categories: ["chinese"],
    servings: 4,
    prepMinutes: 90,
    cookMinutes: 10,
    level: { ko: "보통", en: "Medium" },
    image: "/recipes/xiao-long-bao.jpg",
    ingredients: [
      { amount: { ko: "300g", en: "10 oz" }, name: { ko: "돼지고기 다짐육", en: "ground pork" } },
      { amount: { ko: "1컵", en: "1 cup" }, name: { ko: "굳힌 돼지뼈 육수(아스픽)", en: "set pork stock aspic, diced" } },
      { amount: { ko: "큰술 1", en: "1 tbsp" }, name: { ko: "생강즙", en: "ginger juice" } },
      { amount: { ko: "큰술 1", en: "1 tbsp" }, name: { ko: "간장", en: "soy sauce" } },
      { amount: { ko: "24장", en: "24" }, name: { ko: "얇은 만두피", en: "thin dumpling wrappers" } },
      { amount: { ko: "기호껏", en: "for dipping" }, name: { ko: "식초·생강채", en: "black vinegar and ginger slivers" } },
    ],
    steps: [
      {
        ko: "전날 돼지뼈 육수를 졸여 냉장고에서 굳혀 아스픽을 만듭니다. 작게 썹니다.",
        en: "Reduce pork stock the day before and chill into aspic; dice small.",
      },
      {
        ko: "돼지고기에 생강즙·간장·참기름·후추를 넣고 한 방향으로 치댄 뒤 아스픽을 섞습니다.",
        en: "Beat pork with ginger juice, soy, sesame oil, and pepper; fold in aspic cubes.",
      },
      {
        ko: "피 중앙에 소를 올리고 주름을 잡으며 꼭대기를 모아 봉합니다(국물이 새지 않게).",
        en: "Pleat wrappers tightly around filling, sealing the top so soup cannot leak.",
      },
      {
        ko: "찜기에 배추잎을 깔고 강불에서 8분 찝니다. 피가 반투명해지면 완성입니다.",
        en: "Steam on cabbage leaves over high heat 8 minutes until wrappers turn translucent.",
      },
      {
        ko: "집게로 조심스럽게 그릇에 옮깁니다. 먼저 껍질에 구멍을 내 국물을 마신 뒤 먹습니다.",
        en: "Lift gently onto a spoon; nibble a hole, sip the soup, then eat the dumpling.",
      },
      {
        ko: "흑초와 생강채 찍먹과 함께 냅니다.",
        en: "Serve with black vinegar and ginger slivers for dipping.",
      },
    ],
  },
  {
    slug: "char-siu",
    title: { ko: "차슈", en: "Char Siu" },
    description: {
      ko: "달콤한 꿀·호이신 양념에 구운 광둥식 차슈 돼지고기.",
      en: "Cantonese barbecued pork with a sticky honey-hoisin glaze.",
    },
    categories: ["chinese"],
    servings: 4,
    prepMinutes: 20,
    cookMinutes: 40,
    level: { ko: "보통", en: "Medium" },
    image: "/recipes/char-siu.jpg",
    ingredients: [
      { amount: { ko: "800g", en: "1.8 lb" }, name: { ko: "돼지 목살/앞다리", en: "pork shoulder or neck" } },
      { amount: { ko: "큰술 3", en: "3 tbsp" }, name: { ko: "호이신 소스", en: "hoisin sauce" } },
      { amount: { ko: "큰술 2", en: "2 tbsp" }, name: { ko: "간장", en: "soy sauce" } },
      { amount: { ko: "큰술 2", en: "2 tbsp" }, name: { ko: "꿀", en: "honey" } },
      { amount: { ko: "큰술 1", en: "1 tbsp" }, name: { ko: "중국 요리술", en: "Shaoxing wine" } },
      { amount: { ko: "작은술 1", en: "1 tsp" }, name: { ko: "오향분", en: "five-spice powder" } },
    ],
    steps: [
      {
        ko: "고기를 긴 막대 모양으로 나누고 호이신·간장·꿀·요리술·오향분 양념에 최소 4시간 재웁니다.",
        en: "Cut pork into long strips and marinate at least 4 hours in hoisin, soy, honey, wine, and five-spice.",
      },
      {
        ko: "오븐 200°C, 랙 위에 올려 20분 굽고 뒤집어 15분 더 굽습니다.",
        en: "Roast on a rack at 200°C / 400°F for 20 minutes, flip, and roast 15 minutes more.",
      },
      {
        ko: "남은 양념에 꿀을 조금 더해 바르고 5분 더 구워 캐러멜빛 광택을 냅니다.",
        en: "Brush with leftover marinade plus extra honey; roast 5 minutes more for a lacquered finish.",
      },
      {
        ko: "가장자리가 살짝 그을리면 꺼내 10분 휴지합니다.",
        en: "When edges are lightly charred, rest 10 minutes before slicing.",
      },
      {
        ko: "결 반대 방향으로 얇게 썹니다. 밥이나 국수 위에 올립니다.",
        en: "Slice against the grain; serve over rice or noodles.",
      },
      {
        ko: "남은 것은 밀폐해 냉장 3일, 또는 볶음밥에 활용합니다.",
        en: "Refrigerate leftovers up to 3 days—excellent diced into fried rice.",
      },
    ],
  },
  {
    slug: "salt-pepper-shrimp",
    title: { ko: "소금후추 새우", en: "Salt and Pepper Shrimp" },
    description: {
      ko: "껍질째 튀긴 새우에 소금·흰후추·고추·마늘을 볶아 입힌 광둥식 요리.",
      en: "Crispy shell-on shrimp tossed with salt, white pepper, chili, and garlic.",
    },
    categories: ["chinese"],
    servings: 3,
    prepMinutes: 20,
    cookMinutes: 12,
    level: { ko: "보통", en: "Medium" },
    image: "/recipes/salt-pepper-shrimp.jpg",
    ingredients: [
      { amount: { ko: "500g", en: "1.1 lb" }, name: { ko: "중하(껍질 유지)", en: "medium shrimp, shell-on" } },
      { amount: { ko: "1/2컵", en: "1/2 cup" }, name: { ko: "전분 또는 감자전분", en: "cornstarch or potato starch" } },
      { amount: { ko: "작은술 1", en: "1 tsp" }, name: { ko: "소금", en: "salt" } },
      { amount: { ko: "작은술 1", en: "1 tsp" }, name: { ko: "흰후추", en: "white pepper" } },
      { amount: { ko: "3쪽", en: "3 cloves" }, name: { ko: "마늘", en: "garlic" } },
      { amount: { ko: "2개", en: "2" }, name: { ko: "홍고추·청고추", en: "red and green chilies" } },
      { amount: { ko: "2대", en: "2" }, name: { ko: "대파", en: "scallions" } },
    ],
    steps: [
      {
        ko: "새우는 등쪽을 살짝 갈라 내장을 제거하고 물기를 완전히 닦습니다.",
        en: "Butterfly shrimp lightly along the back, devein, and pat bone-dry.",
      },
      {
        ko: "전분을 묻혀 180°C 기름에서 2–3분 튀겨 껍질이 바삭해지면 건집니다.",
        en: "Dust with starch and fry at 180°C / 355°F for 2–3 minutes until shells crisp; drain.",
      },
      {
        ko: "팬에 약간의 기름으로 마늘·고추·대파를 30초 볶아 향을 냅니다.",
        en: "In a clean wok, flash-fry garlic, chilies, and scallion 30 seconds.",
      },
      {
        ko: "새우를 넣고 소금·흰후추를 뿌려 1분 빠르게 볶아 고루 묻힙니다.",
        en: "Return shrimp, sprinkle salt and white pepper, and toss 1 minute to coat.",
      },
      {
        ko: "향신채가 타기 전에 바로 접시에 담습니다.",
        en: "Plate immediately before the aromatics scorch.",
      },
      {
        ko: "껍질째 손으로 집어 먹습니다. 레몬을 살짝 뿌려도 좋습니다.",
        en: "Eat shell-on with your fingers; a squeeze of lemon is optional.",
      },
    ],
  },
  {
    slug: "egg-drop-soup",
    title: { ko: "계란탕", en: "Egg Drop Soup" },
    description: {
      ko: "맑은 육수에 계란을 천천히 흘려 넣는 부드러운 계란탕.",
      en: "Silky ribbons of egg in a light, ginger-scented chicken broth.",
    },
    categories: ["chinese"],
    servings: 3,
    prepMinutes: 5,
    cookMinutes: 10,
    level: { ko: "쉬움", en: "Easy" },
    image: "/recipes/egg-drop-soup.jpg",
    ingredients: [
      { amount: { ko: "4컵", en: "4 cups" }, name: { ko: "닭육수", en: "chicken stock" } },
      { amount: { ko: "2개", en: "2" }, name: { ko: "계란", en: "eggs" } },
      { amount: { ko: "큰술 1", en: "1 tbsp" }, name: { ko: "전분", en: "cornstarch" } },
      { amount: { ko: "큰술 1", en: "1 tbsp" }, name: { ko: "간장", en: "soy sauce" } },
      { amount: { ko: "얇은 조각", en: "a few slices" }, name: { ko: "생강", en: "ginger" } },
      { amount: { ko: "2대", en: "2" }, name: { ko: "쪽파", en: "scallions" } },
      { amount: { ko: "기호껏", en: "to taste" }, name: { ko: "흰후추·참기름", en: "white pepper and sesame oil" } },
    ],
    steps: [
      {
        ko: "육수에 생강과 간장을 넣고 중불에서 끓입니다.",
        en: "Simmer stock with ginger and soy sauce over medium heat.",
      },
      {
        ko: "전분을 찬물 2큰술과 섞어 저으며 넣어 국물을 살짝 걸쭉하게 합니다.",
        en: "Stir in cornstarch mixed with 2 tbsp cold water until the broth lightly thickens.",
      },
      {
        ko: "계란을 풀어 두고, 국물을 나무젓가락으로 한방향으로 저으며 천천히 흘려 넣습니다.",
        en: "Beat eggs; stir broth in one direction while slowly drizzling eggs to form ribbons.",
      },
      {
        ko: "10초 뒤 불을 끄면 계란이 부드럽게 익습니다. 너무 오래 끓이면 질겨집니다.",
        en: "Kill the heat after 10 seconds so ribbons stay silky—overcooking makes them rubbery.",
      },
      {
        ko: "흰후추·참기름·쪽파를 더해 냅니다.",
        en: "Finish with white pepper, sesame oil, and scallion greens.",
      },
      {
        ko: "바로 뜨겁게 먹습니다. 간단 전채나 밥반찬으로 좋습니다.",
        en: "Serve immediately as a starter or light side with rice.",
      },
    ],
  },
  {
    slug: "garlic-eggplant",
    title: { ko: "마늘 가지 볶음", en: "Garlic Eggplant" },
    description: {
      ko: "부드러운 가지를 마늘·간장 소스에 볶아 낸 중식 가지 요리.",
      en: "Silky eggplant stir-fried in a fragrant garlic-soy sauce.",
    },
    categories: ["chinese", "vegetarian"],
    servings: 3,
    prepMinutes: 15,
    cookMinutes: 15,
    level: { ko: "쉬움", en: "Easy" },
    image: "/recipes/garlic-eggplant.jpg",
    ingredients: [
      { amount: { ko: "2개", en: "2" }, name: { ko: "긴 가지(중국가지)", en: "Chinese eggplants" } },
      { amount: { ko: "4쪽", en: "4 cloves" }, name: { ko: "마늘", en: "garlic" } },
      { amount: { ko: "큰술 2", en: "2 tbsp" }, name: { ko: "간장", en: "soy sauce" } },
      { amount: { ko: "큰술 1", en: "1 tbsp" }, name: { ko: "굴소스(채식은 버섯소스)", en: "oyster or mushroom sauce" } },
      { amount: { ko: "작은술 1", en: "1 tsp" }, name: { ko: "설탕", en: "sugar" } },
      { amount: { ko: "큰술 1", en: "1 tbsp" }, name: { ko: "전분", en: "cornstarch" } },
      { amount: { ko: "큰술 3", en: "3 tbsp" }, name: { ko: "식용유", en: "neutral oil" } },
    ],
    steps: [
      {
        ko: "가지는 길게 토막 낸 뒤 소금에 10분 절여 쓴물과 수분을 빼고 닦습니다.",
        en: "Cut eggplant into batons, salt 10 minutes, then pat dry to reduce bitterness and oil absorption.",
      },
      {
        ko: "전분을 얇게 묻혀 중강불에서 노릇해질 때까지 볶거나 에어프라이어로 익힙니다.",
        en: "Lightly dust with cornstarch and pan-fry until golden (or air-fry).",
      },
      {
        ko: "간장·굴소스·설탕·물 1/4컵을 섞어 소스를 만듭니다.",
        en: "Mix soy, oyster/mushroom sauce, sugar, and 1/4 cup water.",
      },
      {
        ko: "팬에 마늘을 약불에서 30초 볶아 향을 낸 뒤 소스를 붓고 끓입니다.",
        en: "Gently fry garlic 30 seconds, pour in sauce, and bring to a simmer.",
      },
      {
        ko: "가지를 넣고 2분 버무려 소스가 스며들게 합니다.",
        en: "Return eggplant and toss 2 minutes until the sauce soaks in.",
      },
      {
        ko: "쪽파를 뿌려 밥과 함께 냅니다.",
        en: "Scatter scallion and serve hot with rice.",
      },
    ],
  },
  {
    slug: "mongolian-beef",
    title: { ko: "몽골리안 비프", en: "Mongolian Beef" },
    description: {
      ko: "달콤짭짤 간장 소스에 버무린 바삭한 소고기 볶음.",
      en: "Crispy-edged beef in a sticky brown-sugar soy sauce with scallions.",
    },
    categories: ["chinese"],
    servings: 3,
    prepMinutes: 20,
    cookMinutes: 12,
    level: { ko: "쉬움", en: "Easy" },
    image: "/recipes/mongolian-beef.jpg",
    ingredients: [
      { amount: { ko: "400g", en: "14 oz" }, name: { ko: "소고기 등심(얇게)", en: "flank steak, thinly sliced" } },
      { amount: { ko: "1/3컵", en: "1/3 cup" }, name: { ko: "전분", en: "cornstarch" } },
      { amount: { ko: "큰술 3", en: "3 tbsp" }, name: { ko: "간장", en: "soy sauce" } },
      { amount: { ko: "큰술 3", en: "3 tbsp" }, name: { ko: "황설탕", en: "brown sugar" } },
      { amount: { ko: "3쪽", en: "3 cloves" }, name: { ko: "마늘", en: "garlic" } },
      { amount: { ko: "4대", en: "4" }, name: { ko: "대파", en: "scallions" } },
      { amount: { ko: "큰술 1", en: "1 tbsp" }, name: { ko: "생강", en: "ginger" } },
    ],
    steps: [
      {
        ko: "소고기에 전분을 고루 묻혀 10분 둡니다.",
        en: "Coat beef thoroughly in cornstarch and rest 10 minutes.",
      },
      {
        ko: "센 불에서 고기를 한 겹으로 펴 1–2분씩 양면을 바삭하게 볶아 꺼냅니다.",
        en: "Sear beef in a single layer 1–2 minutes per side until crispy at the edges; remove.",
      },
      {
        ko: "같은 팬에 마늘·생강을 볶고 간장·설탕·물 1/4컵을 넣어 1분 끓입니다.",
        en: "Sauté garlic and ginger, then simmer soy, brown sugar, and 1/4 cup water 1 minute.",
      },
      {
        ko: "고기를 넣고 소스가 끈적해질 때까지 버무립니다.",
        en: "Return beef and toss until the sauce turns thick and sticky.",
      },
      {
        ko: "대파 큰 토막을 넣고 30초 볶아 숨이 죽게 합니다.",
        en: "Add scallion lengths and cook 30 seconds until just wilted.",
      },
      {
        ko: "밥 위에 올려 바로 냅니다.",
        en: "Serve immediately over steamed rice.",
      },
    ],
  },
  {
    slug: "shrimp-fried-rice",
    title: { ko: "새우 볶음밥", en: "Shrimp Fried Rice" },
    description: {
      ko: "통통한 새우와 계란이 들어간 고소한 중식 볶음밥.",
      en: "Wok-fried rice with plump shrimp, scrambled egg, and scallion.",
    },
    categories: ["chinese"],
    servings: 3,
    prepMinutes: 15,
    cookMinutes: 12,
    level: { ko: "쉬움", en: "Easy" },
    image: "/recipes/shrimp-fried-rice.jpg",
    ingredients: [
      { amount: { ko: "3컵", en: "3 cups" }, name: { ko: "찬밥", en: "day-old cooked rice" } },
      { amount: { ko: "200g", en: "7 oz" }, name: { ko: "새우", en: "shrimp, peeled" } },
      { amount: { ko: "2개", en: "2" }, name: { ko: "계란", en: "eggs" } },
      { amount: { ko: "큰술 2", en: "2 tbsp" }, name: { ko: "간장", en: "soy sauce" } },
      { amount: { ko: "큰술 1", en: "1 tbsp" }, name: { ko: "굴소스", en: "oyster sauce" } },
      { amount: { ko: "1컵", en: "1 cup" }, name: { ko: "완두콩/혼합야채", en: "peas or mixed veg" } },
      { amount: { ko: "2대", en: "2" }, name: { ko: "대파", en: "scallions" } },
    ],
    steps: [
      {
        ko: "새우에 소금·후추를 치고 센 불에서 1–2분 볶아 분홍빛이 되면 꺼냅니다.",
        en: "Season shrimp and sear 1–2 minutes until just pink; remove.",
      },
      {
        ko: "같은 팬에 계란을 스크램블해 덩어리로 익혀 한쪽으로 밉니다.",
        en: "Scramble eggs in the same wok until just set; push aside.",
      },
      {
        ko: "찬밥을 넣고 주걱으로 풀어 가며 2분 볶습니다.",
        en: "Add cold rice, breaking clumps, and fry 2 minutes.",
      },
      {
        ko: "간장·굴소스·야채를 넣고 2분 더 볶아 밥알이 고루 착색되게 합니다.",
        en: "Add soy, oyster sauce, and vegetables; toss 2 minutes until evenly colored.",
      },
      {
        ko: "새우와 대파를 넣고 1분 볶아 마무리합니다.",
        en: "Return shrimp with scallion and toss 1 minute more.",
      },
      {
        ko: "흰후추를 살짝 뿌려 바로 냅니다.",
        en: "Dust with white pepper and serve hot.",
      },
    ],
  },
  {
    slug: "steamed-bao-buns",
    title: { ko: "찐빵(바오)", en: "Steamed Bao Buns" },
    description: {
      ko: "폭신한 흰 찐빵—접어 만든 바오번 홈메이드 버전.",
      en: "Fluffy folded steamed buns ready to fill with pork, tofu, or pickles.",
    },
    categories: ["chinese"],
    servings: 4,
    prepMinutes: 90,
    cookMinutes: 12,
    level: { ko: "보통", en: "Medium" },
    image: "/recipes/steamed-bao-buns.jpg",
    ingredients: [
      { amount: { ko: "300g", en: "2 1/2 cups" }, name: { ko: "박력분 또는 중력분", en: "cake or all-purpose flour" } },
      { amount: { ko: "작은술 1", en: "1 tsp" }, name: { ko: "인스턴트 이스트", en: "instant yeast" } },
      { amount: { ko: "큰술 2", en: "2 tbsp" }, name: { ko: "설탕", en: "sugar" } },
      { amount: { ko: "작은술 1/2", en: "1/2 tsp" }, name: { ko: "베이킹파우더", en: "baking powder" } },
      { amount: { ko: "160ml", en: "2/3 cup" }, name: { ko: "따뜻한 물·우유", en: "warm water or milk" } },
      { amount: { ko: "큰술 1", en: "1 tbsp" }, name: { ko: "식용유", en: "neutral oil" } },
    ],
    steps: [
      {
        ko: "가루 재료에 따뜻한 물·기름을 넣고 부드러운 반죽이 될 때까지 8분 치댑니다.",
        en: "Mix dry ingredients with warm liquid and oil; knead 8 minutes until smooth and soft.",
      },
      {
        ko: "그릇에 담아 덮고 따뜻한 곳에서 1시간 발효해 2배로 부풀립니다.",
        en: "Cover and proof in a warm spot 1 hour until doubled.",
      },
      {
        ko: "가스를 빼고 원통으로 밀어 8등분한 뒤 타원으로 밀어 펴고 기름을 바른 뒤 반으로 접습니다.",
        en: "Deflate, divide into 8, roll into ovals, brush with oil, and fold into half-moons.",
      },
      {
        ko: "유산지에 올려 15분 더 발효합니다. 살짝 부풀면 준비된 것입니다.",
        en: "Rest on parchment 15 minutes more until slightly puffy.",
      },
      {
        ko: "끓는 찜기에서 10–12분 찐 뒤 불을 끄고 2분 기다려 뚜껑을 엽니다(수축 방지).",
        en: "Steam 10–12 minutes over boiling water; wait 2 minutes before opening the lid to prevent collapse.",
      },
      {
        ko: "차슈·오이·호이신 등을 넣어 싸 먹습니다.",
        en: "Fill with char siu, cucumber, and hoisin, or any savory filling you like.",
      },
    ],
  },
  {
    slug: "chicken-congee",
    title: { ko: "닭죽(콘지)", en: "Chicken Congee" },
    description: {
      ko: "쌀을 오래 끓여 만든 부드러운 닭죽—생강과 쪽파가 포인트.",
      en: "Silky rice porridge simmered with chicken, ginger, and scallion.",
    },
    categories: ["chinese"],
    servings: 4,
    prepMinutes: 10,
    cookMinutes: 60,
    level: { ko: "쉬움", en: "Easy" },
    image: "/recipes/chicken-congee.jpg",
    ingredients: [
      { amount: { ko: "1컵", en: "1 cup" }, name: { ko: "쌀", en: "jasmine or short-grain rice" } },
      { amount: { ko: "8컵", en: "8 cups" }, name: { ko: "물 또는 닭육수", en: "water or chicken stock" } },
      { amount: { ko: "300g", en: "10 oz" }, name: { ko: "닭다리살", en: "boneless chicken thigh" } },
      { amount: { ko: "두툼한 조각", en: "a few slices" }, name: { ko: "생강", en: "ginger" } },
      { amount: { ko: "큰술 1", en: "1 tbsp" }, name: { ko: "생선 소스 또는 간장", en: "fish sauce or soy sauce" } },
      { amount: { ko: "2대", en: "2" }, name: { ko: "쪽파", en: "scallions" } },
      { amount: { ko: "기호껏", en: "to taste" }, name: { ko: "흰후추·참기름", en: "white pepper and sesame oil" } },
    ],
    steps: [
      {
        ko: "쌀을 헹궈 냄비에 물(육수)·생강과 함께 넣고 센 불에서 끓입니다.",
        en: "Rinse rice; combine with stock/water and ginger and bring to a boil.",
      },
      {
        ko: "중약불로 줄여 가끔 저으며 40분 끓여 쌀알이 퍼지게 합니다.",
        en: "Reduce to a gentle simmer, stirring occasionally, for 40 minutes until grains break down.",
      },
      {
        ko: "닭을 넣고 15–20분 더 끓여 익힌 뒤 건져 찢습니다.",
        en: "Add chicken and cook 15–20 minutes; remove and shred.",
      },
      {
        ko: "찢은 닭을 죽에 돌리고 생선 소스(또는 간장)로 간합니다.",
        en: "Return shredded chicken; season with fish sauce or soy.",
      },
      {
        ko: "농도는 취향에 맞게 물로 조절합니다. 너무 되직하면 물을 추가합니다.",
        en: "Thin with water if needed—congee should be spoonable and silky.",
      },
      {
        ko: "쪽파·흰후추·참기름을 올려 뜨겁게 냅니다.",
        en: "Top with scallion, white pepper, and sesame oil; serve hot.",
      },
    ],
  },
  {
    slug: "chinese-broccoli-garlic",
    title: { ko: "마늘 게이란", en: "Chinese Broccoli with Garlic" },
    description: {
      ko: "아삭한 중국 브로콜리(게이란)를 마늘 간장에 볶아 낸 간단 야채 요리.",
      en: "Blanched gai lan finished in a sizzling garlic-soy glaze.",
    },
    categories: ["chinese", "vegetarian"],
    servings: 3,
    prepMinutes: 10,
    cookMinutes: 8,
    level: { ko: "쉬움", en: "Easy" },
    image: "/recipes/chinese-broccoli-garlic.jpg",
    ingredients: [
      { amount: { ko: "400g", en: "14 oz" }, name: { ko: "게이란(중국 브로콜리)", en: "Chinese broccoli (gai lan)" } },
      { amount: { ko: "4쪽", en: "4 cloves" }, name: { ko: "마늘", en: "garlic" } },
      { amount: { ko: "큰술 1", en: "1 tbsp" }, name: { ko: "간장", en: "soy sauce" } },
      { amount: { ko: "큰술 1", en: "1 tbsp" }, name: { ko: "굴소스(채식 대체 가능)", en: "oyster or mushroom sauce" } },
      { amount: { ko: "작은술 1/2", en: "1/2 tsp" }, name: { ko: "설탕", en: "sugar" } },
      { amount: { ko: "큰술 1", en: "1 tbsp" }, name: { ko: "식용유", en: "neutral oil" } },
    ],
    steps: [
      {
        ko: "게이란은 줄기를 비스듬히 썰고 잎은 크게 撕습니다. 줄기가 두꺼우면 반으로 가릅니다.",
        en: "Angle-cut stems and tear leaves; halve thick stems lengthwise.",
      },
      {
        ko: "끓는 소금물에 줄기부터 1분, 잎을 넣고 30초 더 데쳐 찬물에 담급니다.",
        en: "Blanch stems 1 minute, add leaves 30 seconds more, then shock in cold water.",
      },
      {
        ko: "물기를 털고, 간장·굴소스·설탕·물 2큰술을 섞어 소스를 만듭니다.",
        en: "Drain well; mix soy, oyster/mushroom sauce, sugar, and 2 tbsp water.",
      },
      {
        ko: "팬에 기름을 두르고 마늘을 약불에서 30초 볶아 향을 냅니다(태우지 않기).",
        en: "Gently fry garlic in oil 30 seconds—do not brown.",
      },
      {
        ko: "게이란과 소스를 넣고 1–2분 볶아 윤기 나게 코팅합니다.",
        en: "Add gai lan and sauce; toss 1–2 minutes until glossy and hot.",
      },
      {
        ko: "접시에 가지런히 담아 밥 반찬으로 냅니다.",
        en: "Plate neatly as a side dish with rice.",
      },
    ],
  },
  {
    slug: "honey-walnut-shrimp",
    title: { ko: "허니 월넛 슈림프", en: "Honey Walnut Shrimp" },
    description: {
      ko: "바삭한 새우에 마요·꿀 소스를 입히고 캔디 호두를 올린 레스토랑식 요리.",
      en: "Crispy shrimp in a creamy honey sauce topped with candied walnuts.",
    },
    categories: ["chinese"],
    servings: 3,
    prepMinutes: 25,
    cookMinutes: 20,
    level: { ko: "보통", en: "Medium" },
    image: "/recipes/honey-walnut-shrimp.jpg",
    ingredients: [
      { amount: { ko: "400g", en: "14 oz" }, name: { ko: "중하", en: "medium shrimp, peeled" } },
      { amount: { ko: "1/2컵", en: "1/2 cup" }, name: { ko: "전분", en: "cornstarch" } },
      { amount: { ko: "큰술 3", en: "3 tbsp" }, name: { ko: "마요네즈", en: "mayonnaise" } },
      { amount: { ko: "큰술 2", en: "2 tbsp" }, name: { ko: "꿀", en: "honey" } },
      { amount: { ko: "큰술 1", en: "1 tbsp" }, name: { ko: "연유(선택)", en: "sweetened condensed milk (optional)" } },
      { amount: { ko: "1/2컵", en: "1/2 cup" }, name: { ko: "호두", en: "walnut halves" } },
      { amount: { ko: "큰술 3", en: "3 tbsp" }, name: { ko: "설탕", en: "sugar" } },
    ],
    steps: [
      {
        ko: "설탕과 물 2큰술을 중불에서 녹여 호두를 버무린 뒤 유산지에 펼쳐 식혀 캔디 호두를 만듭니다.",
        en: "Melt sugar with 2 tbsp water, toss walnuts, and cool on parchment for candied nuts.",
      },
      {
        ko: "새우 물기를 닦고 전분을 묻혀 170°C에서 2–3분 튀깁니다.",
        en: "Pat shrimp dry, dredge in cornstarch, and fry at 170°C / 340°F for 2–3 minutes.",
      },
      {
        ko: "마요·꿀·연유·레몬즙 몇 방울을 섞어 크림 소스를 만듭니다.",
        en: "Whisk mayo, honey, condensed milk, and a few drops of lemon into a cream sauce.",
      },
      {
        ko: "따뜻한 새우를 소스에 살살 버무립니다(너무 세게 섞으면 튀김옷이 벗겨집니다).",
        en: "Gently fold warm shrimp into the sauce so the crust stays intact.",
      },
      {
        ko: "캔디 호두를 올리고 바로 냅니다.",
        en: "Top with candied walnuts and serve immediately.",
      },
      {
        ko: "밥이나 상추와 함께 먹으면 단맛이 균형 잡힙니다.",
        en: "Balance the sweetness with rice or crisp lettuce leaves.",
      },
    ],
  },
  {
    slug: "twice-cooked-pork",
    title: { ko: "회과육(두 번 익힌 돼지고기)", en: "Twice-Cooked Pork" },
    description: {
      ko: "삶은 삼겹을 다시 볶아 두반장 향을 입힌 사천식 회과육.",
      en: "Sichuan classic: boiled pork belly re-stir-fried with doubanjiang and leeks.",
    },
    categories: ["chinese"],
    servings: 3,
    prepMinutes: 20,
    cookMinutes: 40,
    level: { ko: "보통", en: "Medium" },
    image: "/recipes/twice-cooked-pork.jpg",
    ingredients: [
      { amount: { ko: "400g", en: "14 oz" }, name: { ko: "삼겹살 통덩이", en: "pork belly slab" } },
      { amount: { ko: "큰술 1.5", en: "1.5 tbsp" }, name: { ko: "두반장", en: "doubanjiang (chili bean paste)" } },
      { amount: { ko: "큰술 1", en: "1 tbsp" }, name: { ko: "톈몐장 또는 호이신", en: "tianmianjiang or hoisin" } },
      { amount: { ko: "1대", en: "1" }, name: { ko: "대파 또는 리크", en: "leek or scallion" } },
      { amount: { ko: "1개", en: "1" }, name: { ko: "피망 또는 청피망", en: "green bell pepper" } },
      { amount: { ko: "작은술 1", en: "1 tsp" }, name: { ko: "설탕", en: "sugar" } },
      { amount: { ko: "2쪽", en: "2 cloves" }, name: { ko: "마늘", en: "garlic" } },
    ],
    steps: [
      {
        ko: "삼겹을 생강·파와 함께 30분 삶아 건진 뒤 식혀 0.3cm 얇게 썹니다.",
        en: "Simmer pork belly with ginger and scallion 30 minutes; cool and slice 0.3 cm thin.",
      },
      {
        ko: "팬에 고기 조각을 넣어 자체 기름이 나오며 가장자리가 말릴 때까지 2–3분 볶습니다.",
        en: "Render the slices in a dry wok 2–3 minutes until edges curl and fat releases.",
      },
      {
        ko: "두반장·톈몐장·마늘을 넣고 1분 볶아 붉은 기름과 향을 냅니다.",
        en: "Add doubanjiang, sweet bean paste, and garlic; fry 1 minute until red oil blooms.",
      },
      {
        ko: "피망·대파를 넣고 설탕·간장 약간을 더해 2분 볶습니다.",
        en: "Toss in pepper and leek with a pinch of sugar and splash of soy; cook 2 minutes.",
      },
      {
        ko: "채소가 아삭하고 고기에 양념이 배면 불을 끕니다.",
        en: "Stop when vegetables are crisp-tender and pork is well coated.",
      },
      {
        ko: "밥과 함께 매콤하게 냅니다.",
        en: "Serve hot and spicy with plenty of rice.",
      },
    ],
  },
  {
    slug: "dry-fried-cauliflower",
    title: { ko: "건볶음 콜리플라워", en: "Dry-Fried Cauliflower" },
    description: {
      ko: "사천식 건볶음처럼 콜리플라워를 바삭하게 볶아 향신채와 버무린 요리.",
      en: "High-heat dry-fried cauliflower with chili, garlic, and soy—no heavy sauce.",
    },
    categories: ["chinese", "vegetarian"],
    servings: 3,
    prepMinutes: 15,
    cookMinutes: 15,
    level: { ko: "쉬움", en: "Easy" },
    image: "/recipes/dry-fried-cauliflower.jpg",
    ingredients: [
      { amount: { ko: "1포기", en: "1 head" }, name: { ko: "콜리플라워", en: "cauliflower" } },
      { amount: { ko: "3쪽", en: "3 cloves" }, name: { ko: "마늘", en: "garlic" } },
      { amount: { ko: "4개", en: "4" }, name: { ko: "건고추", en: "dried red chilies" } },
      { amount: { ko: "큰술 1", en: "1 tbsp" }, name: { ko: "간장", en: "soy sauce" } },
      { amount: { ko: "작은술 1", en: "1 tsp" }, name: { ko: "식초", en: "Chinkiang or rice vinegar" } },
      { amount: { ko: "작은술 1/2", en: "1/2 tsp" }, name: { ko: "설탕", en: "sugar" } },
      { amount: { ko: "큰술 2", en: "2 tbsp" }, name: { ko: "식용유", en: "neutral oil" } },
    ],
    steps: [
      {
        ko: "콜리플라워를 작은 송이로 나눠 물기를 완전히 닦습니다.",
        en: "Break cauliflower into small florets and dry thoroughly.",
      },
      {
        ko: "팬을 센 불로 달궈 기름을 두르고 콜리플라워를 5–7분 볶아 가장자리가 갈변하게 합니다.",
        en: "In a smoking-hot wok with oil, dry-fry florets 5–7 minutes until edges char.",
      },
      {
        ko: "가운데를 비워 마늘·건고추를 20초 볶아 향을 냅니다.",
        en: "Clear a space and fry garlic and dried chilies 20 seconds until fragrant.",
      },
      {
        ko: "간장·식초·설탕을 둘러 30초 빠르게 버무립니다. 국물이 고이지 않게 합니다.",
        en: "Splash soy, vinegar, and sugar; toss 30 seconds—sauce should cling, not pool.",
      },
      {
        ko: "쪽파를 넣고 불을 끕니다.",
        en: "Add scallion greens and kill the heat.",
      },
      {
        ko: "바삭할 때 바로 밥 반찬으로 냅니다.",
        en: "Serve at once while still toasty as a rice side.",
      },
    ],
  },

  // ——— EUROPEAN ———
  {
    slug: "lasagna-bolognese",
    title: { ko: "라자냐 볼로네제", en: "Lasagna Bolognese" },
    description: {
      ko: "고기 소스와 베샤멜을 켜켜이 쌓아 구운 이탈리아식 라자냐.",
      en: "Layered pasta with rich meat ragù, béchamel, and bubbling cheese.",
    },
    categories: ["european"],
    servings: 6,
    prepMinutes: 40,
    cookMinutes: 60,
    level: { ko: "보통", en: "Medium" },
    image: "/recipes/lasagna-bolognese.jpg",
    ingredients: [
      { amount: { ko: "12장", en: "12 sheets" }, name: { ko: "라자냐 면", en: "lasagna sheets" } },
      { amount: { ko: "500g", en: "1.1 lb" }, name: { ko: "소고기 다짐육", en: "ground beef" } },
      { amount: { ko: "400g", en: "14 oz" }, name: { ko: "토마토 통조림", en: "canned tomatoes" } },
      { amount: { ko: "2컵", en: "2 cups" }, name: { ko: "베샤멜 소스", en: "béchamel sauce" } },
      { amount: { ko: "1컵", en: "1 cup" }, name: { ko: "모차렐라", en: "mozzarella" } },
      { amount: { ko: "1/2컵", en: "1/2 cup" }, name: { ko: "파르미지아노", en: "Parmigiano" } },
      { amount: { ko: "1개", en: "1" }, name: { ko: "양파", en: "onion" } },
    ],
    steps: [
      {
        ko: "양파를 볶다 다짐육을 넣고 갈색이 될 때까지 볶은 뒤 토마토·소금·후추·오레가노를 넣어 25분 졸입니다.",
        en: "Sauté onion, brown beef, then simmer with tomatoes, salt, pepper, and oregano 25 minutes.",
      },
      {
        ko: "버터·밀가루·우유로 베샤멜을 만들어 소금·넛메그로 간합니다.",
        en: "Cook butter-flour-milk béchamel; season with salt and nutmeg.",
      },
      {
        ko: "오븐 용기 바닥에 고기 소스→면→베샤멜→치즈 순으로 3–4겹 쌓습니다.",
        en: "Layer meat sauce, pasta, béchamel, and cheese 3–4 times in a baking dish.",
      },
      {
        ko: "맨 위는 베샤멜과 모차렐라·파르미지아노를 두툼하게 올립니다.",
        en: "Finish with a generous top layer of béchamel and both cheeses.",
      },
      {
        ko: "180°C 오븐에서 35–40분 굽고, 표면이 황금빛이 되면 10분 휴지합니다.",
        en: "Bake at 180°C / 350°F for 35–40 minutes; rest 10 minutes once golden.",
      },
      {
        ko: "네모나게 잘라 바질을 올려 냅니다.",
        en: "Cut into squares and garnish with basil before serving.",
      },
    ],
  },
  {
    slug: "chicken-parmesan",
    title: { ko: "치킨 파마산", en: "Chicken Parmesan" },
    description: {
      ko: "바삭한 치킨컷릿에 토마토 소스와 모차렐라를 올려 구운 치킨 파마산.",
      en: "Breaded chicken cutlets baked under marinara and melted mozzarella.",
    },
    categories: ["european"],
    servings: 4,
    prepMinutes: 25,
    cookMinutes: 25,
    level: { ko: "보통", en: "Medium" },
    image: "/recipes/chicken-parmesan.jpg",
    ingredients: [
      { amount: { ko: "4장", en: "4" }, name: { ko: "닭가슴살 편", en: "chicken breasts, pounded thin" } },
      { amount: { ko: "1컵", en: "1 cup" }, name: { ko: "빵가루", en: "breadcrumbs" } },
      { amount: { ko: "1/2컵", en: "1/2 cup" }, name: { ko: "파르미지아노", en: "Parmesan" } },
      { amount: { ko: "2개", en: "2" }, name: { ko: "계란", en: "eggs" } },
      { amount: { ko: "1.5컵", en: "1.5 cups" }, name: { ko: "마리나라 소스", en: "marinara sauce" } },
      { amount: { ko: "1컵", en: "1 cup" }, name: { ko: "모차렐라", en: "mozzarella" } },
      { amount: { ko: "큰술 4", en: "4 tbsp" }, name: { ko: "올리브유", en: "olive oil" } },
    ],
    steps: [
      {
        ko: "닭을 1.5cm 두께로 두드리고 소금·후추로 간합니다.",
        en: "Pound chicken to 1.5 cm thickness and season with salt and pepper.",
      },
      {
        ko: "밀가루→계란→빵가루·파르미지아노 순으로 옷을 입힙니다.",
        en: "Dredge in flour, dip in egg, then coat with breadcrumbs mixed with Parmesan.",
      },
      {
        ko: "중강불 팬에 올리브유를 두르고 한 면당 3–4분 노릇하게 굽습니다.",
        en: "Pan-fry in olive oil 3–4 minutes per side until deep golden.",
      },
      {
        ko: "오븐 용기에 담고 소스를 올린 뒤 모차렐라를 덮습니다.",
        en: "Transfer to a baking dish, spoon marinara over, and top with mozzarella.",
      },
      {
        ko: "200°C에서 10–12분 구워 치즈가 녹고 기포가 오르게 합니다.",
        en: "Bake at 200°C / 400°F for 10–12 minutes until cheese melts and bubbles.",
      },
      {
        ko: "파슬리와 파르미지아노를 뿌려 파스타나 샐러드와 냅니다.",
        en: "Finish with parsley and more Parmesan; serve with pasta or salad.",
      },
    ],
  },
  {
    slug: "fish-and-chips",
    title: { ko: "피시 앤 칩스", en: "Fish and Chips" },
    description: {
      ko: "맥주 반죽으로 바삭하게 튀긴 생선과 두툼한 감자튀김.",
      en: "Beer-battered white fish with thick-cut fries and tartar sauce.",
    },
    categories: ["european"],
    servings: 3,
    prepMinutes: 25,
    cookMinutes: 30,
    level: { ko: "보통", en: "Medium" },
    image: "/recipes/fish-and-chips.jpg",
    ingredients: [
      { amount: { ko: "500g", en: "1.1 lb" }, name: { ko: "흰살생선(코덕/명태)", en: "cod or haddock fillets" } },
      { amount: { ko: "1컵", en: "1 cup" }, name: { ko: "박력분", en: "flour" } },
      { amount: { ko: "1컵", en: "1 cup" }, name: { ko: "차가운 맥주", en: "cold beer" } },
      { amount: { ko: "작은술 1", en: "1 tsp" }, name: { ko: "베이킹파우더", en: "baking powder" } },
      { amount: { ko: "3개", en: "3" }, name: { ko: "감자", en: "russet potatoes" } },
      { amount: { ko: "튀김유", en: "for frying" }, name: { ko: "식용유", en: "neutral oil" } },
      { amount: { ko: "기호껏", en: "to serve" }, name: { ko: "레몬·타르타르", en: "lemon and tartar sauce" } },
    ],
    steps: [
      {
        ko: "감자를 두툼한 스틱으로 썰어 찬물에 20분 담가 전분을 빼고 물기를 닦습니다.",
        en: "Cut thick fries, soak in cold water 20 minutes, then dry well.",
      },
      {
        ko: "기름 150°C에서 감자를 6–7분 1차 튀겨 건져 식힙니다.",
        en: "Blanch fries at 150°C / 300°F for 6–7 minutes; drain and cool.",
      },
      {
        ko: "밀가루·베이킹파우더·소금에 차가운 맥주를 섞어 약간 된 반죽을 만듭니다.",
        en: "Whisk flour, baking powder, and salt with cold beer into a thick batter.",
      },
      {
        ko: "생선에 밀가루를 살짝 묻힌 뒤 반죽을 입혀 180°C에서 4–5분 튀깁니다.",
        en: "Dust fish with flour, dip in batter, and fry at 180°C / 355°F for 4–5 minutes.",
      },
      {
        ko: "감자를 180°C에서 3–4분 2차 튀겨 바삭하게 만듭니다.",
        en: "Refry chips at 180°C / 355°F for 3–4 minutes until crisp.",
      },
      {
        ko: "소금·식초를 뿌리고 레몬·타르타르와 함께 냅니다.",
        en: "Salt and vinegar the chips; serve fish with lemon and tartar sauce.",
      },
    ],
  },
  {
    slug: "wiener-schnitzel",
    title: { ko: "비너 슈니첼", en: "Wiener Schnitzel" },
    description: {
      ko: "얇게 두드린 송아지(또는 돼지고기)에 빵가루 옷을 입혀 황금빛으로 튀긴 오스트리아 슈니첼.",
      en: "Paper-thin breaded cutlets fried until golden—Austria’s classic with lemon.",
    },
    categories: ["european"],
    servings: 3,
    prepMinutes: 20,
    cookMinutes: 15,
    level: { ko: "보통", en: "Medium" },
    image: "/recipes/wiener-schnitzel.jpg",
    ingredients: [
      { amount: { ko: "4장", en: "4" }, name: { ko: "송아지 또는 돼지 등심", en: "veal or pork cutlets" } },
      { amount: { ko: "1컵", en: "1 cup" }, name: { ko: "밀가루", en: "flour" } },
      { amount: { ko: "2개", en: "2" }, name: { ko: "계란", en: "eggs" } },
      { amount: { ko: "1.5컵", en: "1.5 cups" }, name: { ko: "고운 빵가루", en: "fine breadcrumbs" } },
      { amount: { ko: "큰술 6", en: "6 tbsp" }, name: { ko: "버터 또는 라드", en: "clarified butter or lard" } },
      { amount: { ko: "1개", en: "1" }, name: { ko: "레몬", en: "lemon" } },
    ],
    steps: [
      {
        ko: "고기를 비닐 사이에 두고 0.5cm 이하로 얇게 두드립니다. 소금·후추로 간합니다.",
        en: "Pound cutlets under plastic to under 0.5 cm; season with salt and pepper.",
      },
      {
        ko: "밀가루→푼 계란→빵가루 순으로 옷을 입히되, 빵가루는 누르지 않고 느슨하게 묻힙니다.",
        en: "Dredge flour → egg → breadcrumbs without pressing hard so the crust stays airy.",
      },
      {
        ko: "팬에 버터를 넉넉히 녹여 중강불로 달굽니다(고기가 거의 잠길 정도).",
        en: "Heat a generous layer of clarified butter over medium-high—enough to nearly shallow-fry.",
      },
      {
        ko: "슈니첼을 넣고 팬을 흔들어 기름이 위로 넘어가게 하며 한 면당 2–3분 굽습니다.",
        en: "Fry 2–3 minutes per side, swirling the pan so fat washes over the top for a puffed crust.",
      },
      {
        ko: "황금빛이 되면 랙에 올려 기름을 빼고 바로 냅니다.",
        en: "Drain on a rack when deep golden; serve immediately.",
      },
      {
        ko: "레몬 웨지와 감자 샐러드 또는 파슬리가 뿌려진 감자와 함께 냅니다.",
        en: "Serve with lemon wedges and potato salad or parsley potatoes.",
      },
    ],
  },
  {
    slug: "coq-au-vin",
    title: { ko: "코코뱅", en: "Coq au Vin" },
    description: {
      ko: "적포도주에 닭·베이컨·버섯을 천천히 조린 프랑스 코코뱅.",
      en: "Chicken braised in red wine with bacon, mushrooms, and pearl onions.",
    },
    categories: ["european"],
    servings: 4,
    prepMinutes: 30,
    cookMinutes: 75,
    level: { ko: "보통", en: "Medium" },
    image: "/recipes/coq-au-vin.jpg",
    ingredients: [
      { amount: { ko: "1kg", en: "2.2 lb" }, name: { ko: "뼈 있는 닭조각", en: "bone-in chicken pieces" } },
      { amount: { ko: "2컵", en: "2 cups" }, name: { ko: "적포도주", en: "red wine" } },
      { amount: { ko: "100g", en: "3.5 oz" }, name: { ko: "베이컨", en: "bacon lardons" } },
      { amount: { ko: "200g", en: "7 oz" }, name: { ko: "버섯", en: "mushrooms" } },
      { amount: { ko: "1컵", en: "1 cup" }, name: { ko: "진주 양파", en: "pearl onions" } },
      { amount: { ko: "2쪽", en: "2 cloves" }, name: { ko: "마늘", en: "garlic" } },
      { amount: { ko: "큰술 1", en: "1 tbsp" }, name: { ko: "토마토 페이스트", en: "tomato paste" } },
      { amount: { ko: "큰술 2", en: "2 tbsp" }, name: { ko: "밀가루", en: "flour" } },
    ],
    steps: [
      {
        ko: "베이컨을 볶아 바삭하게 건지고, 같은 팬에 닭을 노릇하게 굽습니다.",
        en: "Render bacon until crisp; brown chicken in the fat and set both aside.",
      },
      {
        ko: "버섯·양파·마늘을 볶고 토마토 페이스트와 밀가루를 넣어 1분 볶습니다.",
        en: "Sauté mushrooms, onions, and garlic; stir in tomato paste and flour 1 minute.",
      },
      {
        ko: "포도주를 부어 팬 바닥의 갈색 부분을 긁어 낸 뒤 닭·베이컨을 돌립니다.",
        en: "Deglaze with wine, scraping browned bits; return chicken and bacon.",
      },
      {
        ko: "뚜껑을 덮고 160°C 오븐 또는 약불에서 50–60분 조립니다.",
        en: "Cover and braise at 160°C / 325°F (or low stovetop) for 50–60 minutes.",
      },
      {
        ko: "소스가 윤기 나게 줄면 소금·후추로 간하고 파슬리를 뿌립니다.",
        en: "When sauce is glossy and reduced, season and finish with parsley.",
      },
      {
        ko: "매시드 포테이토나 크러스티 빵과 함께 냅니다.",
        en: "Serve with mashed potatoes or crusty bread.",
      },
    ],
  },
  {
    slug: "pesto-pasta",
    title: { ko: "페스토 파스타", en: "Pesto Pasta" },
    description: {
      ko: "바질·잣·파르미지아노 페스토를 뜨거운 면에 버무린 간단한 제노바식 파스타.",
      en: "Tossed pasta with fresh basil pesto, pine nuts, and Parmesan.",
    },
    categories: ["european", "vegetarian"],
    servings: 3,
    prepMinutes: 15,
    cookMinutes: 12,
    level: { ko: "쉬움", en: "Easy" },
    image: "/recipes/pesto-pasta.jpg",
    ingredients: [
      { amount: { ko: "300g", en: "10 oz" }, name: { ko: "트로피에/스파게티", en: "trofie or spaghetti" } },
      { amount: { ko: "2컵", en: "2 cups" }, name: { ko: "바질 잎", en: "fresh basil leaves" } },
      { amount: { ko: "1/3컵", en: "1/3 cup" }, name: { ko: "잣", en: "pine nuts" } },
      { amount: { ko: "1/2컵", en: "1/2 cup" }, name: { ko: "파르미지아노", en: "Parmigiano" } },
      { amount: { ko: "1/2컵", en: "1/2 cup" }, name: { ko: "엑스트라 버진 올리브유", en: "extra-virgin olive oil" } },
      { amount: { ko: "1쪽", en: "1 clove" }, name: { ko: "마늘", en: "garlic" } },
    ],
    steps: [
      {
        ko: "바질·잣·마늘·파르미지아노를 푸드프로세서에 갈며 올리브유를 천천히 넣어 페스토를 만듭니다.",
        en: "Pulse basil, pine nuts, garlic, and Parmesan while streaming in olive oil to make pesto.",
      },
      {
        ko: "소금·후추로 간하고, 너무 되직하면 올리브유를 조금 더합니다.",
        en: "Season with salt and pepper; loosen with more oil if needed.",
      },
      {
        ko: "면을 소금물에 알덴테로 삶아 건지되, 면수 1컵을 남깁니다.",
        en: "Boil pasta in salted water until al dente; reserve 1 cup pasta water.",
      },
      {
        ko: "뜨거운 면에 페스토와 면수 몇 큰술을 넣어 크림처럼 유화시킵니다(불 사용 최소화).",
        en: "Toss hot pasta with pesto and splashes of pasta water off heat until emulsified and creamy.",
      },
      {
        ko: "페스토를 직접 끓이면 색이 어두워지니 잔열만 이용합니다.",
        en: "Avoid boiling the pesto—residual heat keeps it bright green.",
      },
      {
        ko: "파르미지아노와 잣을 더 뿌려 바로 냅니다.",
        en: "Finish with extra Parmesan and pine nuts; serve immediately.",
      },
    ],
  },
  {
    slug: "spanish-tortilla",
    title: { ko: "스패니시 토르티야", en: "Spanish Tortilla" },
    description: {
      ko: "감자와 양파를 올리브유에 익혀 계란과 함께 두툼하게 부친 스페인 토르티야.",
      en: "Thick potato-and-onion omelette cooked slowly in olive oil.",
    },
    categories: ["european", "vegetarian"],
    servings: 4,
    prepMinutes: 20,
    cookMinutes: 35,
    level: { ko: "보통", en: "Medium" },
    image: "/recipes/spanish-tortilla.jpg",
    ingredients: [
      { amount: { ko: "4개", en: "4" }, name: { ko: "감자", en: "waxy potatoes" } },
      { amount: { ko: "1개", en: "1" }, name: { ko: "양파", en: "onion" } },
      { amount: { ko: "6개", en: "6" }, name: { ko: "계란", en: "eggs" } },
      { amount: { ko: "1컵", en: "1 cup" }, name: { ko: "올리브유", en: "olive oil (for poaching)" } },
      { amount: { ko: "작은술 1", en: "1 tsp" }, name: { ko: "소금", en: "salt" } },
    ],
    steps: [
      {
        ko: "감자와 양파는 얇게 썰어 중약불 올리브유에서 15–20분 부드럽게 익힙니다(갈색 나지 않게).",
        en: "Gently cook thin potato and onion slices in olive oil 15–20 minutes until tender, not browned.",
      },
      {
        ko: "기름을 빼고(일부 남김) 감자를 식힌 뒤 푼 계란·소금과 섞어 10분 둡니다.",
        en: "Drain (reserve some oil), cool slightly, and soak with beaten salted eggs 10 minutes.",
      },
      {
        ko: "팬에 기름을 얇게 두르고 중약불에서 혼합물을 부어 8–10분 익힙니다.",
        en: "Heat a thin film of oil and cook the mixture over low-medium heat 8–10 minutes.",
      },
      {
        ko: "접시로 뒤집어 다시 팬에 넣어 반대면도 5–7분 익힙니다.",
        en: "Invert onto a plate and slide back to cook the other side 5–7 minutes.",
      },
      {
        ko: "가운데는 약간 촉촉해도 됩니다. 식혀 실온에서 네모/부채꼴로 썹니다.",
        en: "A slightly custardy center is traditional; cool and slice into wedges.",
      },
      {
        ko: "타파스처럼 내거나 샐러드와 함께 냅니다.",
        en: "Serve at room temperature as a tapa or with a simple salad.",
      },
    ],
  },
  {
    slug: "shepherds-pie",
    title: { ko: "셰퍼스 파이", en: "Shepherd's Pie" },
    description: {
      ko: "양고기(또는 소고기) 스튜 위에 매시드 포테이토를 올려 구운 영국식 파이.",
      en: "Savory lamb (or beef) filling topped with golden mashed potatoes.",
    },
    categories: ["european"],
    servings: 5,
    prepMinutes: 30,
    cookMinutes: 45,
    level: { ko: "쉬움", en: "Easy" },
    image: "/recipes/shepherds-pie.jpg",
    ingredients: [
      { amount: { ko: "500g", en: "1.1 lb" }, name: { ko: "양고기 또는 소고기 다짐육", en: "ground lamb or beef" } },
      { amount: { ko: "1개", en: "1" }, name: { ko: "양파", en: "onion" } },
      { amount: { ko: "1개", en: "1" }, name: { ko: "당근", en: "carrot" } },
      { amount: { ko: "큰술 1", en: "1 tbsp" }, name: { ko: "토마토 페이스트", en: "tomato paste" } },
      { amount: { ko: "1컵", en: "1 cup" }, name: { ko: "비프 스톡", en: "beef stock" } },
      { amount: { ko: "1kg", en: "2.2 lb" }, name: { ko: "감자", en: "potatoes" } },
      { amount: { ko: "1/2컵", en: "1/2 cup" }, name: { ko: "우유·버터", en: "milk and butter" } },
    ],
    steps: [
      {
        ko: "감자를 삶아 버터·우유·소금으로 부드러운 매시드를 만듭니다.",
        en: "Boil potatoes and mash with butter, milk, and salt until smooth.",
      },
      {
        ko: "양파·당근을 볶다 다짐육을 넣고 갈색이 될 때까지 볶습니다.",
        en: "Sauté onion and carrot, then brown the ground meat thoroughly.",
      },
      {
        ko: "토마토 페이스트를 볶고 스톡·완두콩·우스터셔를 넣어 15분 졸입니다.",
        en: "Stir in tomato paste, stock, peas, and Worcestershire; simmer 15 minutes.",
      },
      {
        ko: "오븐 용기에 고기 소를 담고 매시드를 올려 포크로 결을 냅니다.",
        en: "Spread filling in a dish, top with mash, and rake with a fork for browning ridges.",
      },
      {
        ko: "200°C에서 20–25분 구워 표면이 노릇해지게 합니다.",
        en: "Bake at 200°C / 400°F for 20–25 minutes until the top is golden.",
      },
      {
        ko: "5분 휴지 후 떠서 냅니다.",
        en: "Rest 5 minutes, then scoop into bowls.",
      },
    ],
  },
  {
    slug: "gazpacho",
    title: { ko: "가스파초", en: "Gazpacho" },
    description: {
      ko: "잘 익은 토마토와 오이를 갈아 차갑게 마시는 안달루시아식 가스파초.",
      en: "Chilled Andalusian tomato soup blended with cucumber, pepper, and olive oil.",
    },
    categories: ["european", "vegetarian"],
    servings: 4,
    prepMinutes: 20,
    cookMinutes: 0,
    level: { ko: "쉬움", en: "Easy" },
    image: "/recipes/gazpacho.jpg",
    ingredients: [
      { amount: { ko: "1kg", en: "2.2 lb" }, name: { ko: "잘 익은 토마토", en: "ripe tomatoes" } },
      { amount: { ko: "1개", en: "1" }, name: { ko: "오이", en: "cucumber" } },
      { amount: { ko: "1개", en: "1" }, name: { ko: "빨간 피망", en: "red bell pepper" } },
      { amount: { ko: "2쪽", en: "2 cloves" }, name: { ko: "마늘", en: "garlic" } },
      { amount: { ko: "큰술 3", en: "3 tbsp" }, name: { ko: "엑스트라 버진 올리브유", en: "extra-virgin olive oil" } },
      { amount: { ko: "큰술 1", en: "1 tbsp" }, name: { ko: "셰리 식초", en: "sherry vinegar" } },
      { amount: { ko: "1장", en: "1 slice" }, name: { ko: "하룻밤 지난 빵", en: "stale bread" } },
    ],
    steps: [
      {
        ko: "토마토·오이·피망·마늘·불린 빵을 블렌더에 넣고 곱게 갑니다.",
        en: "Blend tomatoes, cucumber, pepper, garlic, and soaked bread until very smooth.",
      },
      {
        ko: "올리브유를 천천히 넣으며 유화시키고 식초·소금으로 간합니다.",
        en: "Stream in olive oil to emulsify; season with vinegar and salt.",
      },
      {
        ko: "체에 밭치면 더 부드러운 식감이 됩니다(선택).",
        en: "Optional: strain for a silkier café-style texture.",
      },
      {
        ko: "냉장고에서 최소 2시간 차갑게 식힙니다.",
        en: "Chill at least 2 hours so flavors meld and the soup is ice-cold.",
      },
      {
        ko: "그릇에 담고 다진 오이·피망·올리브유 한 줄을 올립니다.",
        en: "Serve topped with diced cucumber, pepper, and a ribbon of olive oil.",
      },
      {
        ko: "뜨겁지 않은 날에 전채나 가벼운 점심으로 냅니다.",
        en: "Ideal as a starter or light lunch on warm days.",
      },
    ],
  },
  {
    slug: "potato-gnocchi",
    title: { ko: "감자 뇨키", en: "Potato Gnocchi" },
    description: {
      ko: "포슬한 감자로 만든 부드러운 뇨키—버터 세이지 소스와 잘 어울립니다.",
      en: "Pillowy homemade potato dumplings finished in brown butter and sage.",
    },
    categories: ["european"],
    servings: 4,
    prepMinutes: 40,
    cookMinutes: 25,
    level: { ko: "보통", en: "Medium" },
    image: "/recipes/potato-gnocchi.jpg",
    ingredients: [
      { amount: { ko: "1kg", en: "2.2 lb" }, name: { ko: "거서 감자", en: "russet potatoes" } },
      { amount: { ko: "1.5컵", en: "1.5 cups" }, name: { ko: "박력분(가감)", en: "flour, as needed" } },
      { amount: { ko: "1개", en: "1" }, name: { ko: "계란노른자", en: "egg yolk" } },
      { amount: { ko: "작은술 1", en: "1 tsp" }, name: { ko: "소금", en: "salt" } },
      { amount: { ko: "큰술 4", en: "4 tbsp" }, name: { ko: "버터", en: "butter" } },
      { amount: { ko: "8장", en: "8 leaves" }, name: { ko: "세이지", en: "sage leaves" } },
      { amount: { ko: "1/2컵", en: "1/2 cup" }, name: { ko: "파르미지아노", en: "Parmesan" } },
    ],
    steps: [
      {
        ko: "감자를 껍질째 찔 하거나 구워 속살이 포슬해지면 껍질을 벗기고 리서로 곱게 으깹니다.",
        en: "Bake or steam potatoes whole; peel and rice while hot for a fluffy mash.",
      },
      {
        ko: "약간 식힌 감자에 노른자·소금·밀가루를 넣어 최소한만 치대 부드러운 반죽을 만듭니다.",
        en: "Work in yolk, salt, and just enough flour—knead minimally to keep gnocchi tender.",
      },
      {
        ko: "로프로 밀어 2cm 간격으로 자르고 포크 등으로 줄무늬를 냅니다.",
        en: "Roll into ropes, cut 2 cm pieces, and roll over a fork for ridges.",
      },
      {
        ko: "끓는 소금물에 넣어 떠오르면 30초 더 삶아 건집니다.",
        en: "Boil in salted water; cook 30 seconds after they float, then lift out.",
      },
      {
        ko: "팬에 버터와 세이지를 중불에서 노릇한 버터 향이 날 때까지 볶고 뇨키를 굴려 코팅합니다.",
        en: "Brown butter with sage, then toss gnocchi to coat.",
      },
      {
        ko: "파르미지아노를 뿌려 바로 냅니다.",
        en: "Shower with Parmesan and serve at once.",
      },
    ],
  },
  {
    slug: "swedish-meatballs",
    title: { ko: "스웨덴 미트볼", en: "Swedish Meatballs" },
    description: {
      ko: "부드러운 미트볼에 크림 그레이비를 끼얹은 스웨덴식 미트볼.",
      en: "Tender spiced meatballs in a silky cream gravy with lingonberry if you have it.",
    },
    categories: ["european"],
    servings: 4,
    prepMinutes: 25,
    cookMinutes: 25,
    level: { ko: "쉬움", en: "Easy" },
    image: "/recipes/swedish-meatballs.jpg",
    ingredients: [
      { amount: { ko: "400g", en: "14 oz" }, name: { ko: "소·돼지 혼합 다짐육", en: "mixed ground beef and pork" } },
      { amount: { ko: "1/2컵", en: "1/2 cup" }, name: { ko: "빵가루·우유", en: "breadcrumbs soaked in milk" } },
      { amount: { ko: "1개", en: "1" }, name: { ko: "계란", en: "egg" } },
      { amount: { ko: "작은술 1/4", en: "1/4 tsp" }, name: { ko: "올스파이스·넛메그", en: "allspice and nutmeg" } },
      { amount: { ko: "2컵", en: "2 cups" }, name: { ko: "비프 스톡", en: "beef stock" } },
      { amount: { ko: "1/2컵", en: "1/2 cup" }, name: { ko: "생크림", en: "heavy cream" } },
      { amount: { ko: "큰술 2", en: "2 tbsp" }, name: { ko: "버터·밀가루", en: "butter and flour" } },
    ],
    steps: [
      {
        ko: "불린 빵가루·계란·향신료·다진 양파를 고기에 섞어 지름 2.5cm 볼을 만듭니다.",
        en: "Mix soaked crumbs, egg, spices, and minced onion into the meat; roll 2.5 cm balls.",
      },
      {
        ko: "버터를 두른 팬에서 미트볼을 돌려 가며 8–10분 노릇하게 익혀 꺼냅니다.",
        en: "Brown meatballs in butter 8–10 minutes, turning; remove.",
      },
      {
        ko: "같은 팬에 버터·밀가루로 루를 만들고 스톡을 저으며 넣어 그레이비를 만듭니다.",
        en: "Make a roux in the pan, whisk in stock, and simmer into gravy.",
      },
      {
        ko: "생크림을 넣고 간한 뒤 미트볼을 돌려 5분 더 끓입니다.",
        en: "Stir in cream, season, return meatballs, and simmer 5 minutes.",
      },
      {
        ko: "소스가 미트볼을 코팅할 정도로 농도 잡히면 불을 끕니다.",
        en: "Stop when gravy coats the back of a spoon and clings to the meatballs.",
      },
      {
        ko: "매시드 포테이토·링곤베리 잼과 함께 냅니다.",
        en: "Serve with mashed potatoes and lingonberry jam if available.",
      },
    ],
  },
  {
    slug: "cacio-e-pepe",
    title: { ko: "카초에페페", en: "Cacio e Pepe" },
    description: {
      ko: "페코리노와 흑후추만으로 면수와 유화시킨 로마식 파스타.",
      en: "Roman pasta emulsified with pecorino Romano and lots of black pepper.",
    },
    categories: ["european", "vegetarian"],
    servings: 2,
    prepMinutes: 5,
    cookMinutes: 15,
    level: { ko: "보통", en: "Medium" },
    image: "/recipes/cacio-e-pepe.jpg",
    ingredients: [
      { amount: { ko: "200g", en: "7 oz" }, name: { ko: "톤나렐리/스파게티", en: "tonnarelli or spaghetti" } },
      { amount: { ko: "1컵", en: "1 cup" }, name: { ko: "페코리노 로마노(강판)", en: "finely grated pecorino Romano" } },
      { amount: { ko: "작은술 1.5", en: "1.5 tsp" }, name: { ko: "굵게 간 흑후추", en: "coarsely ground black pepper" } },
      { amount: { ko: "기호껏", en: "as needed" }, name: { ko: "굵은 소금", en: "kosher salt" } },
    ],
    steps: [
      {
        ko: "후추를 팬에 약불에서 1분 볶아 향을 피웁니다.",
        en: "Toast black pepper in a dry pan over low heat 1 minute to bloom aroma.",
      },
      {
        ko: "면을 다소 적은 소금물에 알덴테보다 1분 덜 삶고 면수 1컵을 남깁니다.",
        en: "Cook pasta in well-salted water 1 minute shy of al dente; reserve 1 cup water.",
      },
      {
        ko: "페코리노에 면수 몇 큰술을 넣어 페이스트처럼 풀어 둡니다.",
        en: "Mix pecorino with a few spoons of pasta water into a smooth paste.",
      },
      {
        ko: "면을 후추 팬으로 옮기고 면수를 조금 넣으며 불을 끕니다.",
        en: "Transfer pasta to the pepper pan with a splash of water; kill the heat.",
      },
      {
        ko: "치즈 페이스트를 넣고 빠르게 저어 크림 소스로 유화시킵니다. 너무 뜨거우면 뭉치니 불에서 작업합니다.",
        en: "Off heat, toss in the cheese paste until a creamy emulsion forms—heat clumps cheese.",
      },
      {
        ko: "농도를 면수로 맞추고 후추·페코리노를 더 뿌려 바로 냅니다.",
        en: "Adjust with pasta water, finish with more pepper and pecorino, and serve at once.",
      },
    ],
  },
  {
    slug: "bouillabaisse",
    title: { ko: "부야베스", en: "Bouillabaisse" },
    description: {
      ko: "프로방스 향신 해산물 스튜—사프란과 회향이 포인트인 마르세유식 수프.",
      en: "Provençal fish stew fragrant with saffron, fennel, tomato, and shellfish.",
    },
    categories: ["european"],
    servings: 4,
    prepMinutes: 30,
    cookMinutes: 40,
    level: { ko: "보통", en: "Medium" },
    image: "/recipes/bouillabaisse.jpg",
    ingredients: [
      { amount: { ko: "800g", en: "1.8 lb" }, name: { ko: "흰살생선 토막", en: "firm white fish chunks" } },
      { amount: { ko: "300g", en: "10 oz" }, name: { ko: "홍합 또는 새우", en: "mussels or shrimp" } },
      { amount: { ko: "1개", en: "1" }, name: { ko: "회향 구근", en: "fennel bulb" } },
      { amount: { ko: "2개", en: "2" }, name: { ko: "토마토", en: "tomatoes" } },
      { amount: { ko: "한 꼬집", en: "a pinch" }, name: { ko: "사프란", en: "saffron" } },
      { amount: { ko: "4컵", en: "4 cups" }, name: { ko: "생선 육수", en: "fish stock" } },
      { amount: { ko: "큰술 2", en: "2 tbsp" }, name: { ko: "올리브유", en: "olive oil" } },
      { amount: { ko: "2쪽", en: "2 cloves" }, name: { ko: "마늘", en: "garlic" } },
    ],
    steps: [
      {
        ko: "올리브유에 회향·마늘·양파를 부드럽게 볶고 토마토를 넣어 5분 조립니다.",
        en: "Sweat fennel, garlic, and onion in olive oil; add tomato and cook 5 minutes.",
      },
      {
        ko: "육수와 사프란·타임·월계수 잎을 넣고 15분 끓여 향을 우려 냅니다.",
        en: "Add stock, saffron, thyme, and bay; simmer 15 minutes to infuse.",
      },
      {
        ko: "단단한 생선부터 넣고 5분, 이어서 홍합·새우를 넣어 껍질이 열릴 때까지 끓입니다.",
        en: "Poach firm fish 5 minutes, then add mussels/shrimp until shells open.",
      },
      {
        ko: "소금·후추·레몬즙으로 간합니다. 과하게 저으면 생선이 부서집니다.",
        en: "Season with salt, pepper, and lemon; stir gently so fish stays in pieces.",
      },
      {
        ko: "그릇에 생선과 국물을 담고 루이 소스·바게트와 함께 냅니다.",
        en: "Ladle into bowls with toasted baguette and rouille if you have it.",
      },
      {
        ko: "열지 않은 홍합은 버리고 뜨겁게 먹습니다.",
        en: "Discard any unopened mussels; serve immediately.",
      },
    ],
  },
  {
    slug: "croque-monsieur",
    title: { ko: "크르크 무슈", en: "Croque Monsieur" },
    description: {
      ko: "햄과 치즈를 넣고 베샤멜을 올려 구운 프랑스식 토스트 샌드위치.",
      en: "Baked ham-and-cheese sandwich blanketed in béchamel and Gruyère.",
    },
    categories: ["european"],
    servings: 2,
    prepMinutes: 15,
    cookMinutes: 15,
    level: { ko: "쉬움", en: "Easy" },
    image: "/recipes/croque-monsieur.jpg",
    ingredients: [
      { amount: { ko: "4장", en: "4 slices" }, name: { ko: "식빵", en: "sturdy white bread" } },
      { amount: { ko: "4장", en: "4 slices" }, name: { ko: "햄", en: "ham" } },
      { amount: { ko: "1컵", en: "1 cup" }, name: { ko: "그뤼예르 치즈", en: "Gruyère" } },
      { amount: { ko: "1컵", en: "1 cup" }, name: { ko: "베샤멜", en: "béchamel" } },
      { amount: { ko: "큰술 2", en: "2 tbsp" }, name: { ko: "버터", en: "butter" } },
      { amount: { ko: "작은술 1", en: "1 tsp" }, name: { ko: "디종 머스터드", en: "Dijon mustard" } },
    ],
    steps: [
      {
        ko: "버터·밀가루·우유로 베샤멜을 만들고 넛메그·소금으로 간합니다.",
        en: "Cook a quick béchamel; season with nutmeg and salt.",
      },
      {
        ko: "빵 한쪽에 머스터드를 바르고 햄과 그뤼예르를 올려 샌드위치를 만듭니다.",
        en: "Spread Dijon on bread, layer ham and Gruyère, and close the sandwiches.",
      },
      {
        ko: "팬에 버터를 녹여 양면을 가볍게 토스트합니다.",
        en: "Butter-toast both sides in a skillet until lightly golden.",
      },
      {
        ko: "베이킹 시트에 올리고 베샤멜과 남은 치즈를 듬뿍 덮습니다.",
        en: "Transfer to a sheet pan and smother with béchamel and more cheese.",
      },
      {
        ko: "220°C 오븐 또는 브로일러에서 3–5분 구워 표면이 그을리게 합니다.",
        en: "Broil or bake at 220°C / 425°F for 3–5 minutes until blistered and bubbling.",
      },
      {
        ko: "바로 잘라 샐러드와 함께 냅니다.",
        en: "Slice and serve immediately with a simple green salad.",
      },
    ],
  },
  {
    slug: "quiche-lorraine",
    title: { ko: "키슈 로렌", en: "Quiche Lorraine" },
    description: {
      ko: "베이컨과 크림·계란 커스터드를 파이 껍질에 구운 고전 키슈 로렌.",
      en: "Savory custard tart with bacon and Gruyère in a flaky pastry shell.",
    },
    categories: ["european"],
    servings: 6,
    prepMinutes: 30,
    cookMinutes: 40,
    level: { ko: "보통", en: "Medium" },
    image: "/recipes/quiche-lorraine.jpg",
    ingredients: [
      { amount: { ko: "1장", en: "1" }, name: { ko: "파이 시트", en: "pie crust / shortcrust" } },
      { amount: { ko: "150g", en: "5 oz" }, name: { ko: "베이컨", en: "bacon lardons" } },
      { amount: { ko: "3개", en: "3" }, name: { ko: "계란", en: "eggs" } },
      { amount: { ko: "1컵", en: "1 cup" }, name: { ko: "생크림", en: "heavy cream" } },
      { amount: { ko: "1/2컵", en: "1/2 cup" }, name: { ko: "우유", en: "milk" } },
      { amount: { ko: "1컵", en: "1 cup" }, name: { ko: "그뤼예르", en: "Gruyère" } },
      { amount: { ko: "기호껏", en: "to taste" }, name: { ko: "넛메그·후추", en: "nutmeg and pepper" } },
    ],
    steps: [
      {
        ko: "파이 시트를 틀에 깔고 포크로 구멍을 낸 뒤 180°C에서 10분 Blind bake합니다.",
        en: "Line a tart tin, dock the crust, and blind-bake at 180°C / 350°F for 10 minutes.",
      },
      {
        ko: "베이컨을 바삭하게 볶아 기름을 뺍니다.",
        en: "Cook bacon until crisp and drain on paper towels.",
      },
      {
        ko: "계란·크림·우유·넛메그·후추·약간의 소금을 풀어 커스터드를 만듭니다.",
        en: "Whisk eggs, cream, milk, nutmeg, pepper, and a pinch of salt.",
      },
      {
        ko: "껍질에 베이컨과 치즈를 깔고 커스터드를 붓습니다.",
        en: "Scatter bacon and Gruyère in the shell; pour custard over.",
      },
      {
        ko: "180°C에서 30–35분 구워 가운데가 살짝 흔들릴 정도면 꺼냅니다.",
        en: "Bake 30–35 minutes at 180°C / 350°F until just set with a slight wobble.",
      },
      {
        ko: "10분 식힌 뒤 잘라 따뜻하게 냅니다.",
        en: "Rest 10 minutes, slice, and serve warm.",
      },
    ],
  },
  {
    slug: "bangers-and-mash",
    title: { ko: "뱅어스 앤 매시", en: "Bangers and Mash" },
    description: {
      ko: "영국식 소시지와 부드러운 매시드 포테이토, 양파 그레이비.",
      en: "British sausages with creamy mash and rich onion gravy.",
    },
    categories: ["european"],
    servings: 3,
    prepMinutes: 15,
    cookMinutes: 30,
    level: { ko: "쉬움", en: "Easy" },
    image: "/recipes/bangers-and-mash.jpg",
    ingredients: [
      { amount: { ko: "6개", en: "6" }, name: { ko: "영국식 소시지", en: "pork bangers / sausages" } },
      { amount: { ko: "1kg", en: "2.2 lb" }, name: { ko: "감자", en: "potatoes" } },
      { amount: { ko: "2개", en: "2" }, name: { ko: "양파", en: "onions" } },
      { amount: { ko: "1컵", en: "1 cup" }, name: { ko: "비프 스톡", en: "beef stock" } },
      { amount: { ko: "큰술 2", en: "2 tbsp" }, name: { ko: "버터", en: "butter" } },
      { amount: { ko: "1/2컵", en: "1/2 cup" }, name: { ko: "우유", en: "milk" } },
      { amount: { ko: "큰술 1", en: "1 tbsp" }, name: { ko: "밀가루", en: "flour" } },
    ],
    steps: [
      {
        ko: "감자를 삶아 버터·우유·소금으로 크리미하게 매시합니다.",
        en: "Boil potatoes and mash with butter, milk, and salt until creamy.",
      },
      {
        ko: "팬에 소시지를 중불에서 12–15분 돌려 가며 노릇하게 굽습니다.",
        en: "Brown sausages over medium heat 12–15 minutes, turning often.",
      },
      {
        ko: "같은 팬에 양파를 넣고 8–10분 캐러멜라이즈합니다.",
        en: "In the same pan, caramelize sliced onions 8–10 minutes.",
      },
      {
        ko: "밀가루를 볶고 스톡을 저으며 넣어 5분 끓여 그레이비를 만듭니다.",
        en: "Stir in flour, whisk in stock, and simmer 5 minutes into gravy.",
      },
      {
        ko: "매시를 담고 소시지를 올린 뒤 그레이비를 끼얹습니다.",
        en: "Plate mash, top with sausages, and ladle onion gravy over.",
      },
      {
        ko: "완두콩을 곁들이면 정석입니다.",
        en: "Classic with a side of garden peas.",
      },
    ],
  },
  {
    slug: "pasta-puttanesca",
    title: { ko: "파스타 푸타네스카", en: "Pasta Puttanesca" },
    description: {
      ko: "토마토·올리브·케이퍼·앤초비로 빠르게 만든 나폴리식 푸타네스카.",
      en: "Bold tomato pasta with olives, capers, anchovy, and chili—weeknight fast.",
    },
    categories: ["european"],
    servings: 3,
    prepMinutes: 10,
    cookMinutes: 20,
    level: { ko: "쉬움", en: "Easy" },
    image: "/recipes/pasta-puttanesca.jpg",
    ingredients: [
      { amount: { ko: "300g", en: "10 oz" }, name: { ko: "스파게티", en: "spaghetti" } },
      { amount: { ko: "400g", en: "14 oz" }, name: { ko: "토마토 통조림", en: "canned tomatoes" } },
      { amount: { ko: "4필렛", en: "4 fillets" }, name: { ko: "앤초비", en: "anchovies" } },
      { amount: { ko: "1/3컵", en: "1/3 cup" }, name: { ko: "블랙 올리브", en: "black olives" } },
      { amount: { ko: "큰술 1", en: "1 tbsp" }, name: { ko: "케이퍼", en: "capers" } },
      { amount: { ko: "2쪽", en: "2 cloves" }, name: { ko: "마늘", en: "garlic" } },
      { amount: { ko: "작은술 1/2", en: "1/2 tsp" }, name: { ko: "고추 후레이크", en: "chili flakes" } },
    ],
    steps: [
      {
        ko: "올리브유에 마늘·앤초비·고추를 약불에서 녹이듯 볶습니다.",
        en: "Gently melt garlic, anchovy, and chili in olive oil over low heat.",
      },
      {
        ko: "토마토·올리브·케이퍼를 넣고 중불에서 12–15분 졸입니다.",
        en: "Add tomatoes, olives, and capers; simmer 12–15 minutes.",
      },
      {
        ko: "면을 알덴테로 삶아 건지고 면수를 조금 남깁니다.",
        en: "Cook pasta al dente; reserve a splash of pasta water.",
      },
      {
        ko: "면을 소스에 넣고 면수로 농도 맞추며 1–2분 버무립니다.",
        en: "Toss pasta in the sauce with pasta water 1–2 minutes to marry.",
      },
      {
        ko: "파슬리를 뿌리고 치즈는 생략하는 편이 정석에 가깝습니다.",
        en: "Finish with parsley; traditionally served without cheese.",
      },
      {
        ko: "바로 뜨겁게 냅니다.",
        en: "Serve immediately while piping hot.",
      },
    ],
  },
  {
    slug: "risotto-milanese",
    title: { ko: "리스토 밀라네제", en: "Risotto Milanese" },
    description: {
      ko: "사프란으로 노란빛을 낸 크리미한 밀라노식 리스토.",
      en: "Creamy saffron risotto finished with butter and Parmigiano.",
    },
    categories: ["european"],
    servings: 3,
    prepMinutes: 10,
    cookMinutes: 30,
    level: { ko: "보통", en: "Medium" },
    image: "/recipes/risotto-milanese.jpg",
    ingredients: [
      { amount: { ko: "1.5컵", en: "1.5 cups" }, name: { ko: "아보리오 쌀", en: "Arborio rice" } },
      { amount: { ko: "4컵", en: "4 cups" }, name: { ko: "따뜻한 닭/채수", en: "warm chicken or vegetable stock" } },
      { amount: { ko: "한 꼬집", en: "a pinch" }, name: { ko: "사프란", en: "saffron threads" } },
      { amount: { ko: "1/2개", en: "1/2" }, name: { ko: "양파", en: "onion" } },
      { amount: { ko: "1/2컵", en: "1/2 cup" }, name: { ko: "화이트 와인", en: "dry white wine" } },
      { amount: { ko: "큰술 3", en: "3 tbsp" }, name: { ko: "버터", en: "butter" } },
      { amount: { ko: "1/2컵", en: "1/2 cup" }, name: { ko: "파르미지아노", en: "Parmigiano" } },
    ],
    steps: [
      {
        ko: "사프란을 따뜻한 육수 한 국자에 우려 둡니다. 육수 전체는 약불에 따뜻하게 유지합니다.",
        en: "Steep saffron in a ladle of warm stock; keep remaining stock hot on a back burner.",
      },
      {
        ko: "버터에 양파를 투명해질 때까지 볶고 쌀을 넣어 2분 토스트합니다.",
        en: "Sweat onion in butter, then toast rice 2 minutes until edges look translucent.",
      },
      {
        ko: "와인을 부어 거의 증발할 때까지 저습니다.",
        en: "Add wine and stir until nearly evaporated.",
      },
      {
        ko: "육수를 한 국자씩 넣으며 18–20분 저어 가며 익힙니다. 사프란 육수는 마지막쯤 넣습니다.",
        en: "Add stock ladle by ladle, stirring 18–20 minutes; add saffron liquid near the end.",
      },
      {
        ko: "불이 꺼지기 직전 버터와 파르미지아노로 만테카투레(유화)합니다. 흐름 있는 all'onda 농도가 목표입니다.",
        en: "Mantecato off heat with butter and Parmesan to a flowing all'onda consistency.",
      },
      {
        ko: "바로 접시에 펼쳐 냅니다. 식으면 되직해집니다.",
        en: "Spread on warm plates immediately—risotto tightens as it cools.",
      },
    ],
  },
  {
    slug: "pepperoni-pizza",
    title: { ko: "페퍼로니 피자", en: "Pepperoni Pizza" },
    description: {
      ko: "바삭한 도우 위에 토마토 소스·모차렐라·페퍼로니를 올린 홈메이드 피자.",
      en: "Homemade pizza with tomato sauce, mozzarella, and crisp pepperoni cups.",
    },
    categories: ["european"],
    servings: 3,
    prepMinutes: 90,
    cookMinutes: 15,
    level: { ko: "보통", en: "Medium" },
    image: "/recipes/pepperoni-pizza.jpg",
    ingredients: [
      { amount: { ko: "300g", en: "2 1/2 cups" }, name: { ko: "강력분", en: "bread flour" } },
      { amount: { ko: "작은술 1", en: "1 tsp" }, name: { ko: "인스턴트 이스트", en: "instant yeast" } },
      { amount: { ko: "3/4컵", en: "3/4 cup" }, name: { ko: "미지근한 물", en: "warm water" } },
      { amount: { ko: "1/2컵", en: "1/2 cup" }, name: { ko: "토마토 피자 소스", en: "pizza sauce" } },
      { amount: { ko: "200g", en: "7 oz" }, name: { ko: "모차렐라", en: "low-moisture mozzarella" } },
      { amount: { ko: "40장", en: "40 slices" }, name: { ko: "페퍼로니", en: "pepperoni" } },
      { amount: { ko: "큰술 1", en: "1 tbsp" }, name: { ko: "올리브유", en: "olive oil" } },
    ],
    steps: [
      {
        ko: "밀가루·이스트·소금·물·올리브유로 반죽을 치대 매끄럽게 만든 뒤 1시간 발효합니다.",
        en: "Knead flour, yeast, salt, water, and oil until smooth; proof 1 hour until doubled.",
      },
      {
        ko: "오븐을 250°C(또는 최댓값)로 예열하고 가능하면 피자 스톤/스틸을 함께 달굽니다.",
        en: "Preheat oven to 250°C / 475°F+ with a stone or steel if you have one.",
      },
      {
        ko: "반죽을 손으로 30cm 원형으로 늘입니다. 가장자리는 두툼하게 남깁니다.",
        en: "Stretch dough into a 30 cm round by hand, leaving a thicker rim.",
      },
      {
        ko: "소스→모차렐라→페퍼로니 순으로 올립니다. 소스는 얇게 바릅니다.",
        en: "Spread a thin sauce layer, then mozzarella and pepperoni.",
      },
      {
        ko: "10–12분 구워 가장자리가 갈변하고 페퍼로니가 컵처럼 말리면 꺼냅니다.",
        en: "Bake 10–12 minutes until the crust browns and pepperoni cups crisp.",
      },
      {
        ko: "올리브유와 오레가노를 살짝 뿌려 잘라 냅니다.",
        en: "Finish with a drizzle of olive oil and oregano; slice and serve.",
      },
    ],
  },
  {
    slug: "herb-roast-chicken",
    title: { ko: "허브 로스트 치킨", en: "Herb Roast Chicken" },
    description: {
      ko: "로즈메리·타임·마늘을 넣고 통닭을 바삭하게 구운 허브 로스트 치킨.",
      en: "Whole chicken roasted with rosemary, thyme, garlic, and lemon until juicy.",
    },
    categories: ["european"],
    servings: 4,
    prepMinutes: 20,
    cookMinutes: 75,
    level: { ko: "쉬움", en: "Easy" },
    image: "/recipes/herb-roast-chicken.jpg",
    ingredients: [
      { amount: { ko: "1마리(약 1.8kg)", en: "1 whole chicken (~4 lb)" }, name: { ko: "통닭", en: "whole chicken" } },
      { amount: { ko: "큰술 3", en: "3 tbsp" }, name: { ko: "버터 또는 올리브유", en: "butter or olive oil" } },
      { amount: { ko: "4쪽", en: "4 cloves" }, name: { ko: "마늘", en: "garlic" } },
      { amount: { ko: "몇 줄기", en: "a few sprigs" }, name: { ko: "로즈메리·타임", en: "rosemary and thyme" } },
      { amount: { ko: "1개", en: "1" }, name: { ko: "레몬", en: "lemon" } },
      { amount: { ko: "기호껏", en: "to taste" }, name: { ko: "소금·후추", en: "salt and black pepper" } },
      { amount: { ko: "2개", en: "2" }, name: { ko: "양파(받침용)", en: "onions for roasting bed" } },
    ],
    steps: [
      {
        ko: "닭을 키친타월로 닦고 실온에 20분 둡니다. 안팎에 소금·후추를 넉넉히 문지릅니다.",
        en: "Pat chicken dry and temper 20 minutes; season generously inside and out with salt and pepper.",
      },
      {
        ko: "버터에 다진 마늘·허브를 섞어 껍질 아래와 표면에 바릅니다. 캐비티에 레몬·허브 줄기를 넣습니다.",
        en: "Rub herb butter under and over the skin; stuff cavity with lemon and herb sprigs.",
      },
      {
        ko: "양파 슬라이스를 깐 팬에 닭을 올리고 220°C에서 20분 구워 껍질에 색을 냅니다.",
        en: "Set on a bed of onions; roast at 220°C / 425°F for 20 minutes to start browning.",
      },
      {
        ko: "190°C로 낮춰 45–55분 더 굽습니다. 허벅지 두꺼운 부분이 74°C에 도달해야 합니다.",
        en: "Reduce to 190°C / 375°F for 45–55 minutes until thickest thigh hits 74°C / 165°F.",
      },
      {
        ko: "꺼내 15분 휴지해 육즙이 재분배되게 합니다. 이 때 자르면 즙이 흘러나갑니다.",
        en: "Rest 15 minutes before carving so juices redistribute.",
      },
      {
        ko: "팬 드립핑으로 간단한 주스를 만들어 곁들입니다. 구운 양파도 함께 냅니다.",
        en: "Deglaze pan drippings for a quick jus; serve with the roasted onions.",
      },
    ],
  },
];
