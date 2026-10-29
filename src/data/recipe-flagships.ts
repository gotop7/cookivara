import type { LocalizedString } from "@/i18n/types";
import type { RecipeEnrichment } from "./recipe-enrichments";

const L = (ko: string, en: string): LocalizedString => ({ ko, en });

/**
 * Deep original enrichment for 15 flagship recipes (AdSense readiness).
 * Each dish gets technique unique to THIS recipe, ingredient selection,
 * finished look/taste, common mistakes + fixes, and honest timing/units.
 * Merged over base recipeEnrichments in getRecipe / getAllRecipes.
 */
export const recipeFlagships: Record<string, RecipeEnrichment> = {
  "gochujang-tofu-bibimbap": {
    intro: L(
      "이 비빔밥은 ‘고기 없이도 한 그릇이 성립’하도록 두부만 고추장에 제대로 입히는 집밥형입니다. 핵심 기법은 두부 400g(14oz)을 키친타월로 2–3분 누른 뒤 고추장 3큰술·간장 1큰술·참기름 1큰술에 10분 재우고, 중강불에서 면당 3–4분(합 6–8분) 구워 가장자리만 캐러멜화하는 것입니다. 채소(당근·숙주·시금치)는 절대 한 팬에 몰지 않고 각 1–2분씩 따로 볶아 색을 지킵니다. 밥은 생쌀 2컵(약 4인분) 기준이며, 비빌 때는 밥의 김을 뺀 뒤가 맞습니다.",
      "This bibimbap is built so one bowl feels complete without meat: 400 g / 14 oz tofu is pressed 2–3 minutes, marinated 10 minutes in 3 tbsp gochujang + 1 tbsp soy + 1 tbsp sesame oil, then seared 3–4 minutes per side (6–8 minutes total) until only the edges caramelize. Carrot, sprouts, and spinach each get their own 1–2 minute sauté — never one crowded pan. Baseline rice is 2 cups uncooked (~4 servings); mix only after steam has left the rice.",
    ),
    ingredientSelect: L(
      "두부는 ‘단단한(firm)’만 — 순두부는 부서집니다. 고추장은 단맛이 있는 시판 제품이 집밥에 맞고, 너무 짠 제품이면 꿀 ½큰술을 준비하세요. 시금치는 줄기가 연한 것, 숙주는 뿌리가 싱싱하고 냄새 없는 것, 당근은 심이 하얗지 않은 중간 굵기. 쌀은 흰 멥쌀(단립)이 비빔에 가장 잘 붙습니다.",
      "Use firm tofu only — silken falls apart. Choose a gochujang with some sweetness for home cooking; if yours is harsh, keep ½ tbsp honey ready. Spinach with tender stems, sprouts that smell clean, carrots without a woody white core. Short-grain white rice clings best when mixed.",
    ),
    doneness: L(
      "완성 그릇은 구역별 색이 선명해야 하고, 두부는 겉면이 짙은 호박색·속은 아직 촉촉해야 합니다. 비빈 뒤에는 밥알이 윤기 있고 매콤달콤하며, 채소 아삭함이 살아 있어야 합니다. 고추장 향만 자극적으로 치고 단맛이 없으면 꿀·물을 ½작은술씩 더해 맞추세요.",
      "Before mixing, colors should read in clean sections; tofu edges deep amber, centers still moist. After mixing, rice should look glossy, taste sweet-heat, and keep vegetable crunch. If you only get raw chili burn, balance with ½ tsp honey or water at a time.",
    ),
    tips: [
      L("타이밍: 밥 뜸 들 때 두부 재우기 → 두부 굽기 6–8분 → 채소 합 ~6분 → 달걀프라이는 담기 직전.", "Timing: marinate tofu while rice rests → sear 6–8 min → veg ~6 min total → fry the egg last."),
      L("팬에 물이 고이면 불을 잠시 높여 물기를 날린 뒤 계속 굽습니다.", "If water pools in the pan, spike the heat briefly to drive it off, then keep searing."),
      L("참기름 ½작은술은 ‘비비기 전’ 가장자리에만 — 많으면 느끼해집니다.", "Finish with only ½ tsp sesame oil at the rim before mixing — more turns greasy."),
    ],
    commonMistakes: [
      L("젖은 두부를 바로 굽기 → 양념이 벗겨짐. 고치기: 2–3분 눌러 물기 제거.", "Searing wet tofu → glaze slides off. Fix: press 2–3 minutes first."),
      L("채소 몰아 볶기 → 색 탁해짐. 고치기: 종류별로 팬을 비우고 볶기.", "Crowding vegetables → muddy colors. Fix: empty the pan between batches."),
      L("뜨거운 밥에 바로 비비기 → 채소 숨 죽음. 고치기: 주걱으로 풀어 1–2분 식히기.", "Mixing on piping-hot rice → wilted veg. Fix: fluff and rest rice 1–2 minutes."),
    ],
    plating: L(
      "넓은 그릇에 밥을 낮게 깔고 시금치·당근·숙주·두부를 시계방향으로 올립니다. 가운데 달걀프라이, 가장자리에 참기름·통깨. 비비기 전 구성이 ‘완성 사진’입니다.",
      "Spread rice low; arrange spinach, carrot, sprouts, and tofu clock-face style. Center the egg; sesame oil and seeds at the rim. The unmixed bowl is the hero shot.",
    ),
    substitutions: [
      L("두부 대신 느타리·새송이 200g 또는 템페.", "Swap tofu for 200 g oyster/king oyster mushrooms or tempeh."),
      L("현미밥·퀴노아로 바꿔도 비빔 질감이 잘 나옵니다.", "Brown rice or quinoa also mix well."),
      L("달걀 대신 아보카도 ½개 슬라이스.", "Half an avocado, sliced, instead of a fried egg."),
    ],
    storage: L(
      "밥·채소·두부를 따로 밀폐해 냉장 2일. 먹을 때 밥만 데워 비빕니다. 냉동 비추천(두부·채소 식감 붕괴).",
      "Store rice, vegetables, and tofu separately up to 2 days refrigerated. Reheat only the rice before mixing. Freezing collapses tofu and veg textures.",
    ),
  },
  "kimchi-jjigae": {
    intro: L(
      "김치찌개의 성패는 ‘묵은김치를 볶아 신내를 날린 뒤’ 국물을 붓는지에 달립니다. 이 버전: 돼지고기 200g(7oz)을 2–3분 볶아 기름을 내고, 김치 2컵(~300g)과 고춧가루 1큰술을 5분 더 볶은 다음 육수 3컵(720ml)으로 12–15분 끓입니다. 두부 300g(10oz)은 마지막 3–4분에만 넣습니다. 총 약 30분, 밥과 함께 4인분입니다.",
      "Kimchi jjigae succeeds when you fry aged kimchi before the broth. This version: sauté 200 g / 7 oz pork 2–3 minutes, fry 2 cups kimchi (~300 g) with 1 tbsp gochugaru for 5 minutes, then simmer in 3 cups / 720 ml stock for 12–15 minutes. Add 300 g / 10 oz tofu only for the last 3–4 minutes. About 30 minutes total; serves 4 with rice.",
    ),
    ingredientSelect: L(
      "김치는 최소 2주 익어 시큼하고 국물이 붉은 묵은김치 — 겉절이·생김치는 국물이 얕습니다. 돼지는 목살·앞다리처럼 살짝 지방 있는 부위가 국물에 고소함을 줍니다. 두부는 부침용·중간 경도(연두부가 형태 유지에 유리). 육수는 멸치·다시마 또는 담백한 닭육수; 물만 쓸 때는 다시다 ½작은술.",
      "Kimchi must be well fermented (2+ weeks), sour, with red brine — fresh kimchi makes a thin stew. Pork with a little fat (shoulder/belly trim) enriches the broth. Soft-to-medium tofu holds better than silken. Stock: anchovy-kelp or light chicken; if using water, add ½ tsp dashida.",
    ),
    doneness: L(
      "국물은 탁하지 않게 붉고, 김치 잎은 투명해질 정도로 익었으며, 고기는 씹을 때 질기지 않아야 합니다. 맛은 신맛 위에 감칠맛·고소한 돼지 기름이 깔리고, 매운맛은 목 뒤에서 천천히 올라옵니다. 짜면 물 ¼컵, 싱거우면 김치국물 1큰술로 맞춥니다.",
      "Broth should be clear-red (not muddy); kimchi leaves soft and translucent; pork tender. Taste: sourness first, then savoriness and pork fat, with heat that builds slowly. Too salty → ¼ cup water; too mild → 1 tbsp kimchi brine.",
    ),
    tips: [
      L("김치 볶을 때 김치국물 2–3큰술을 넣으면 감칠맛이 진해집니다.", "Add 2–3 tbsp kimchi brine while frying for deeper flavor."),
      L("타이밍: 볶기 ~8분 → 끓이기 12–15분 → 두부 3–4분.", "Timing: fry ~8 min → simmer 12–15 → tofu 3–4."),
      L("센 불로만 두면 국물이 줄고 짜집니다. 끓인 뒤 중약불.", "High heat the whole time reduces and oversalts — drop to a gentle simmer."),
    ],
    commonMistakes: [
      L("생김치를 그대로 끓이기 → 밋밋·거친 신맛. 고치기: 반드시 5분 볶기.", "Boiling fresh kimchi as-is → thin, harsh sourness. Fix: fry 5 minutes first."),
      L("두부 처음부터 → 부서짐. 고치기: 마지막 3–4분만.", "Tofu from the start → crumbles. Fix: last 3–4 minutes only."),
      L("뚜껑 없이 팔팔 → 국물 과다 증발. 고치기: 반쯤 덮고 중약불.", "Hard boil uncovered → broth vanishes. Fix: partial lid, gentle simmer."),
    ],
    plating: L(
      "뚝배기나 낮은 냄비 그대로 상에 올리고 대파를 마지막에 뿌려 보글보글한 상태로 냅니다. 밥·계란후라이·여분 김치가 한 상입니다.",
      "Serve bubbling in a ttukbaegi or low pot; scallion at the end. Rice, a fried egg, and extra kimchi complete the table.",
    ),
    substitutions: [
      L("돼지고기 대신 참치캔 1개, 스팸 150g, 또는 버섯 200g.", "1 can tuna, 150 g spam, or 200 g mushrooms instead of pork."),
      L("육수 대신 물 3컵 + 다시다 ½작은술.", "Water 3 cups plus ½ tsp dashida if you lack stock."),
    ],
    storage: L(
      "식혀 밀폐 후 냉장 3일. 다시 끓여 데웁니다. 두부는 살살.",
      "Cool, refrigerate up to 3 days, and reboil to reheat. Handle tofu gently.",
    ),
  },
  "bulgogi": {
    intro: L(
      "집밥 불고기의 기술은 ‘얇게 + 배치 굽기’입니다. 등심 500g(1.1lb)을 2–3mm로 썰어 간장 4큰술·설탕 2큰술·참기름 1큰술·마늘·양파(선택 배 2큰술)에 최소 30분(가능하면 2시간) 재운 뒤, 센 불 팬에 한꺼번에 넣지 말고 1–2분씩 나눠 구워 캐러멜만 남깁니다. 삶아지듯 익히면 불고기가 아닙니다.",
      "Home bulgogi is thin slices + batch searing. Slice 500 g / 1.1 lb ribeye 2–3 mm, marinate at least 30 minutes (up to 2 hours) in 4 tbsp soy, 2 tbsp sugar, 1 tbsp sesame oil, garlic, onion (optional 2 tbsp grated pear), then sear hot in 1–2 minute batches. If it stews in its own liquid, it is no longer bulgogi.",
    ),
    ingredientSelect: L(
      "등심·차돌처럼 결이 곱고 지방이 얇게 박힌 부위. 미리 썰린 ‘불고기용’도 가능하되 두께가 5mm 넘으면 직접 더 썰거나 두드려 주세요. 간장은 양조간장, 배는 무른 배(또는 사과) — 아삭한 배는 당분이 덜합니다.",
      "Choose finely grained ribeye or similar with thin fat seams. Store-sliced ‘bulgogi cut’ works if under ~5 mm; thicker pieces need another pass. Brewed soy sauce; soft ripe pear (or apple) — crisp underripe fruit sweetens less.",
    ),
    doneness: L(
      "고기는 겉면이 밤색으로 그을리고 윤기 있는 양념이 얇게 붙어야 합니다. 식감은 질기지 않고 단짠이 먼저, 참기름 향이 뒤에 옵니다. 육즙이 팬에 흥건하면 덜 줄인 상태 — 자작한 글레이즈까지 30–60초 더.",
      "Beef should be chestnut-brown with a thin glossy glaze. Tender chew; sweet-salty first, sesame after. If juice floods the pan, cook 30–60 seconds more until it clings.",
    ),
    tips: [
      L("15–20분 살짝 얼리면 2–3mm로 균일하게 썰립니다.", "15–20 minutes in the freezer makes even 2–3 mm slices easy."),
      L("타이밍: 재우기 30분+ → 배치당 1–2분 → 글레이즈 1분.", "Timing: marinate 30+ min → 1–2 min per batch → 1 min to glaze."),
      L("양파를 고기와 같이 재우면 단맛·수분이 함께 나옵니다.", "Marinating onion with the beef adds sweetness and moisture together."),
    ],
    commonMistakes: [
      L("한 번에 몰아넣기 → 삶아짐. 고치기: 팬 면적의 절반만 채우기.", "Crowding → stewing. Fix: fill only half the pan each batch."),
      L("두꺼운 고기 → 양념 안 배임. 고치기: 2–3mm 또는 고기망치.", "Thick slices → marinade stays surface-level. Fix: 2–3 mm or pound thin."),
      L("약한 불 → 회색빛. 고치기: 팬이 연기가 나기 직전일 때 투입.", "Low heat → gray meat. Fix: wait until the pan is nearly smoking."),
    ],
    plating: L(
      "접시에 얇게 펼치고 통깨·대파. 상추·깻잎·쌈장·밥을 옆에 두면 가족 식탁 중심이 됩니다.",
      "Fan thinly; sesame and scallion on top. Lettuce, perilla, ssamjang, and rice turn it into the table centerpiece.",
    ),
    substitutions: [
      L("소고기 대신 닭 허벅지살 500g 또는 포토벨로 4개.", "Chicken thigh 500 g or 4 portobello caps."),
      L("설탕 대신 꿀 1½큰술 또는 메이플.", "Honey 1½ tbsp or maple instead of sugar."),
    ],
    storage: L(
      "익힌 것 냉장 3일. 재운 생고기 냉장 1일 또는 양념과 냉동 1개월.",
      "Cooked: 3 days fridge. Raw marinated: 1 day fridge or 1 month frozen in marinade.",
    ),
  },
  "japchae": {
    intro: L(
      "잡채의 식감은 ‘당면을 덜 익히고, 채소는 따로, 마지막에만 버무림’에서 나옵니다. 당면 200g을 6–8분 삶아 찬물 헹군 뒤, 시금치·당근·버섯을 각 2–3분 볶고 간장 3큰술·참기름 1큰술로 큰 볼에서 살살 섞습니다. 면과 채소를 오래 함께 볶으면 색이 탁해지고 면이 붙습니다.",
      "Japchae chew comes from slightly undercooked noodles, separate vegetable sautés, and a late toss. Boil 200 g sweet-potato noodles 6–8 minutes, rinse cold, sauté spinach/carrot/mushrooms 2–3 minutes each, then gently dress with 3 tbsp soy and 1 tbsp sesame oil in a large bowl. Long stir-frying noodles with veg dulls color and clumps the strands.",
    ),
    ingredientSelect: L(
      "당면은 굵기가 중간인 고구마 전분면(투명해지는 것). 너무 가는 면은 쉽게 퍼집니다. 시금치는 어린잎, 표고는 갓이 두툼한 것. 간장은 왜간장·양조간장 모두 가능하되 진한 국간장이면 양을 ⅔로.",
      "Medium-width sweet-potato starch noodles that turn translucent — ultra-thin ones overcook fast. Tender spinach; thick-capped shiitake. Brewed soy is fine; if using dark soup soy, start at ⅔ the amount.",
    ),
    doneness: L(
      "면은 투명하고 탄력 있으며 이빨에 살짝 걸려야 합니다. 채소는 숨만 죽고 선명한 색. 맛은 간장·참기름이 고르게 배되 짜지 않고, 식혀도 면이 한 덩어리로 굳지 않아야 합니다.",
      "Noodles translucent with bounce and a slight bite; vegetables wilted but vivid. Soy-sesame should coat evenly without salt shock; cooled noodles should still separate, not cement.",
    ),
    tips: [
      L("당면은 ‘살짝 덜 익은’ 느낌이 정답 — 양념 후 조금 더 붑니다.", "Undercook noodles slightly — they swell after dressing."),
      L("뜨거울 때 참기름을 먼저, 간장 나중 — 면 붙음 방지.", "Oil first while warm, soy second — prevents clumping."),
      L("차게 낼 때는 참기름 ½큰술을 더 둘러 주세요.", "For cold servings, add an extra ½ tbsp sesame oil."),
    ],
    commonMistakes: [
      L("당면 푹 삶기 → 끈적. 고치기: 패키지보다 1분 일찍 건지기.", "Overboiling → glue. Fix: drain 1 minute early."),
      L("뜨거운 면에 간장만 → 뭉침. 고치기: 참기름 선코팅.", "Soy on bare hot noodles → clumps. Fix: oil coat first."),
      L("채소·면 장시간 볶음 → 탁한 색. 고치기: 볼에서 버무리기만.", "Long wok time with veg → dull color. Fix: toss only in a bowl."),
    ],
    plating: L(
      "긴 접시에 면을 느슨히 펼쳐 채소 색이 보이게. 통깨는 살짝, 선택으로 계란지단 채.",
      "Loosen on a long platter so colors show. Light sesame; optional egg strips.",
    ),
    substitutions: [
      L("소고기 없이 버섯·두부만으로 채식 잡채.", "Skip beef; mushrooms or tofu for vegetarian japchae."),
      L("당면 대신 쌀국수(식감은 달라짐).", "Rice noodles work in a pinch with a different chew."),
    ],
    storage: L(
      "밀폐 냉장 3일. 전자레인지 또는 팬에 참기름과 함께 살짝 데움.",
      "Airtight fridge 3 days. Reheat gently in microwave or skillet with sesame oil.",
    ),
  },
  "tteokbokki": {
    intro: L(
      "집 떡볶이는 ‘떡을 불린 뒤, 국물이 떡에 자작하게 붙을 때까지’가 기술입니다. 가래떡 400g을 미지근한 물에 10분 불리고, 육수 2컵(480ml)·고추장 2큰술·고춧가루 1큰술로 8–10분 조립니다. 어묵은 마지막 2–3분. 국물이 국처럼 남으면 덜 졸인 것이고, 떡만 타고 국물이 없으면 과하게 졸인 것입니다.",
      "Home tteokbokki technique: soak, then reduce until sauce clings. Soak 400 g rice cakes 10 minutes in lukewarm water; simmer in 2 cups / 480 ml stock with 2 tbsp gochujang and 1 tbsp gochugaru for 8–10 minutes. Fish cakes join only for the last 2–3 minutes. Broth-like liquid means under-reduced; dry scorched cakes mean you went too far.",
    ),
    ingredientSelect: L(
      "가래떡은 냉장·냉동 모두 가능하되 단단하면 반드시 불리기. 너무 가는 ‘궁중 떡’은 빨리 퍼지니 일반 분식용 굵기가 다루기 쉽습니다. 고추장은 단맛 있는 제품, 고춧가루는 보통 매운맛. 육수는 멸치·다시마가 분식 맛에 가깝습니다.",
      "Cylinder rice cakes (fridge or frozen) — always soak if hard. Ultra-thin ‘royal’ cakes overcook fast; standard snack-shop thickness is easier. Sweet-leaning gochujang; medium gochugaru. Anchovy-kelp stock tastes closest to street stalls.",
    ),
    doneness: L(
      "떡은 겉이 윤기 있고 속까지 말랑하며, 소스는 숟가락을 따라 천천히 흐를 농도. 맛은 매콤달콤하고 약간의 감칠맛; 쓴맛·탄 맛이 나면 불을 줄이고 물 2큰술을 넣어 풀어요.",
      "Cakes glossy outside and soft through the center; sauce should ribbon slowly off a spoon. Sweet-heat with savoriness — bitterness or scorch means lower heat and loosen with 2 tbsp water.",
    ),
    tips: [
      L("국물이 너무 줄면 물 2–3큰술씩 추가해 농도만 맞춥니다.", "If sauce reduces too far, splash in 2–3 tbsp water."),
      L("마지막 버터 ½작은술은 선택 — 윤기와 부드러운 끝맛.", "Optional ½ tsp butter at the end for gloss and a softer finish."),
      L("가끔 저어 떡이 바닥에 눌어붙지 않게 합니다.", "Stir occasionally so cakes don’t stick and scorch."),
    ],
    commonMistakes: [
      L("불리지 않은 떡 → 겉만 익고 속 딱딱. 고치기: 10분 불리기.", "Unsoaked cakes → hard cores. Fix: soak 10 minutes."),
      L("처음부터 어묵·라면 → 국물 탁해짐. 고치기: 마지막 2–3분.", "Fish cake/ramen from the start → cloudy starch. Fix: last 2–3 minutes."),
      L("뚜껑 닫고 방치 → 떡 뭉침. 고치기: 열어 두고 저어 주기.", "Covered and ignored → stuck cakes. Fix: lid off, stir."),
    ],
    plating: L(
      "깊은 그릇에 떡과 소스를 함께, 대파·참깨. ‘윤기 나는 한 그릇’이 목표입니다.",
      "Deep bowl with cakes and sauce together; scallion and sesame. Aim for glossy one-bowl, not a dried pile.",
    ),
    substitutions: [
      L("고추장 대신 칠리페이스트 1½큰술 + 된장 ½큰술.", "1½ tbsp chili paste + ½ tbsp doenjang approximates gochujang."),
      L("떡 대신 당면이나 우동면.", "Glass noodles or udon can stand in for rice cakes."),
    ],
    storage: L(
      "바로 먹는 게 최선. 남으면 냉장 1일, 데울 때 물을 조금 넣어 풉니다.",
      "Best immediate. Leftovers: 1 day fridge; reheat with a splash of water.",
    ),
  },
  "kimbap": {
    intro: L(
      "김밥 단면이 예쁜 이유는 ‘속 재료를 얇고 물기 없이, 밥은 미지근할 때’ 말기 때문입니다. 밥은 뜨거울 때 참기름·소금으로 간하고, 김이 빠질 때까지 기다린 뒤 단무지·당근·시금치·계란·햄(또는 두부)을 과하게 넣지 말고 말아 2cm 두께로 썹니다. 뜨거운 밥으로 말면 김이 찢깁니다.",
      "Clean kimbap spirals come from thin, dry fillings and rolling while rice is only warm. Season rice with sesame oil and salt while hot, wait until steam fades, then roll without overfilling pickled radish, carrot, spinach, egg, and ham or tofu. Slice ~2 cm. Hot rice tears the nori.",
    ),
    ingredientSelect: L(
      "김은 구운 김밥용(두껍고 향이 고소한 것). 밥은 식은 후에도 찰진 흰 멥쌀. 단무지는 시판 노란 단무지가 수분을 예측하기 쉽고, 시금치·당근은 볶은 뒤 꼭 짜서 물기를 제거하세요.",
      "Use roasted kimbap nori (thicker, toasty). Short-grain rice that stays sticky when cool. Store-bought danmuji is predictable; squeeze spinach and carrot dry after cooking.",
    ),
    doneness: L(
      "말은 김이 팽팽하고 밥이 밖으로 삐져나오지 않아야 합니다. 썰면 속이 중심으로 모인 나선형. 맛은 참기름·단무지 단짠이 먼저, 채소 아삭함이 뒤에. 김이 축축하면 밥이 너무 뜨거웠거나 속 물기가 남은 것입니다.",
      "Rolls should feel taut with no rice leaking. Cross-sections show a centered spiral. Taste: sesame and pickle first, crunch after. Soggy nori means rice was too hot or fillings too wet.",
    ),
    tips: [
      L("칼날에 참기름을 바르면 밥이 덜 붙습니다.", "Oil the knife between cuts for clean slices."),
      L("김발에 랩을 씌우면 청소가 쉽고 압력이 고릅니다.", "Line the bamboo mat with plastic wrap for even pressure and easy cleanup."),
      L("재료는 길이를 김 폭에 맞춰 미리 잘라 두면 말이 단단해집니다.", "Pre-cut fillings to nori width so the roll stays tight."),
    ],
    commonMistakes: [
      L("속 과다 → 김 터짐. 고치기: 재료를 김 면적의 ⅔만.", "Overfilling → split nori. Fix: fill only ⅔ of the sheet width."),
      L("뜨거운 밥 → 김 축축·찢김. 고치기: 미지근할 때까지 대기.", "Hot rice → soggy/tearing nori. Fix: wait until just warm."),
      L("물기 미제거 → 질척한 밥. 고치기: 채소를 면보로 짜기.", "Wet fillings → mushy rice. Fix: wring vegetables in a towel."),
    ],
    plating: L(
      "2cm로 썰어 단면이 보이게 엇갈려 담고 통깨를 살짝.",
      "Slice ~2 cm, stagger so spirals show, light sesame sprinkle.",
    ),
    substitutions: [
      L("햄 대신 불고기·참치·크림치즈.", "Bulgogi, tuna, or cream cheese fillings."),
      L("현미밥·퀴노아로 건강식(찰기가 덜함).", "Brown rice or quinoa for a lighter roll (less sticky)."),
    ],
    storage: L(
      "실온 반나절. 냉장 시 밥이 굳으니 먹기 전 상온 10분. 냉동 후 전자레인지 해동 가능.",
      "Room temp half a day. From the fridge, rest 10 minutes before eating. Freeze and microwave if needed.",
    ),
  },
  "kung-pao-chicken": {
    intro: L(
      "쿵파오의 집밥 기술은 ‘전분 벨벳팅 + 센 불 짧은 볶음’입니다. 닭을 전분·약간 간장에 재워 표면을 보호한 뒤, 마른 고추·산초 향만 낸 웍에서 빠르게 볶고 달콤·짭짤·살짝 신 소스로 30–60초 코팅합니다. 땅콩은 마지막 30초 — 처음부터 넣으면 불리거나 탑니다. 평일 저녁 한 팬, 밥 위에 올리기 좋은 분량입니다.",
      "Home kung pao is starch velveting plus a short, ripping-hot stir-fry. Velvet chicken in starch and a splash of soy, flash-fry in a wok perfumed with dried chilies and Sichuan pepper, then coat 30–60 seconds in a sweet-salty-tart sauce. Peanuts only in the last 30 seconds. One-wok weeknight rice-bowl portions.",
    ),
    ingredientSelect: L(
      "닭은 허벅지살이 촉촉합니다(가슴살이면 재우기를 정확히). 산초는 향이 살아 있는 통알 — 가루만 있으면 맨 마지막에. 마른 고추는 씨 일부를 털어 매운맛 조절. 땅콩은 이미 구운·무염이 다루기 쉽습니다.",
      "Thigh meat stays juicier (breast needs precise velveting). Whole Sichuan peppercorns with aroma — if only powder, add at the very end. Shake seeds from dried chilies to dial heat. Roasted unsalted peanuts are easiest.",
    ),
    doneness: L(
      "닭은 겉면이 살짝 그을리고 속은 분홍 없이 촉촉. 소스는 팬에 흥건하지 않고 재료에 붙어 윤기가 납니다. 맛은 단짠 뒤 산초의 얼얼함, 땅콩 고소함. 쓴맛이 나면 산초·고추를 태운 것입니다.",
      "Chicken lightly browned outside, moist and opaque inside. Sauce clings glossy, not puddled. Sweet-salty first, then peppercorn tingle and peanut. Bitterness means scorched chili or pepper.",
    ),
    tips: [
      L("팬이 충분히 뜨거울 때 닭을 넣어 물이 생기지 않게 합니다.", "Wait for a ripping-hot wok so chicken sears, not steams."),
      L("소스는 미리 컵에 섞어 두고 볶는 동안 계량하지 않습니다.", "Premix sauce in a cup — no measuring mid-stir-fry."),
      L("산초는 향만 내고 건져도 됩니다 — 오래 볶으면 씁니다.", "Toast peppercorns briefly for aroma; pull them if they risk burning."),
    ],
    commonMistakes: [
      L("약한 불 긴 볶음 → 질긴 닭·물은 소스. 고치기: 불 높이고 배치.", "Low-and-slow → tough chicken, watery sauce. Fix: higher heat, batches."),
      L("산초 태움 → 쓴맛. 고치기: 10–15초만 향 피우기.", "Burning peppercorns → bitter. Fix: 10–15 seconds aroma only."),
      L("땅콩 초반 투입 → 축축/탄맛. 고치기: 마지막 30초.", "Peanuts early → soggy or scorched. Fix: last 30 seconds."),
    ],
    plating: L(
      "흰 밥 위에 볶음을 올리고 대파·땅콩이 보이게. 마른 고추는 먹거나 장식으로.",
      "Spoon over white rice so scallion and peanuts show. Dried chilies are edible or garnish.",
    ),
    substitutions: [
      L("닭 대신 두부·새우.", "Tofu or shrimp work well."),
      L("산초 없으면 후추+칠리플레이크(맛은 다름).", "No Sichuan pepper? Black pepper + chili flakes (different heat)."),
    ],
    storage: L(
      "냉장 2일. 팬에 빠르게 데우기. 땅콩은 따로 두면 더 바삭.",
      "Fridge 2 days. Reheat in a hot pan. Store peanuts separately for crunch.",
    ),
  },
  "mapo-tofu": {
    intro: L(
      "마파두부는 ‘두반장으로 베이스를 만들고, 두부는 중불에서 살살, 산초는 마지막’이 기술입니다. 다진 돼지고기 150g을 3분 볶아 두반장 1½큰술·고춧가루로 붉은 소를 만든 뒤 육수 1컵(240ml)을 더하고, 두부 400g을 큰 덩어리로 넣어 4–5분 자작하게 익힙니다. 전분물 1큰술로 농도를 맞춘 다음 산초가루 ½작은술로 ‘마(麻)’를 올립니다. 국물 없이 바싹 졸이면 밥과 안 맞습니다.",
      "Mapo technique: build a doubanjiang base, handle tofu gently on medium heat, finish with Sichuan pepper. Brown 150 g minced pork 3 minutes, fry 1½ tbsp bean paste and chili, add 1 cup / 240 ml stock, then simmer 400 g large tofu cubes 4–5 minutes. Thicken with 1 tbsp slurry, then ½ tsp ground pepper for ‘ma’. A dry reduction will not hug rice.",
    ),
    ingredientSelect: L(
      "두반장은 郫县(비현) 스타일처럼 발효 향이 있는 제품이 깊습니다. 두부는 연두부·순두부보다 부침용 연한 두부가 형태 유지에 유리 — 한 모(약 400g)를 2cm 큐브로. 산초는 갓 간 가루가 향이 셉니다. 고기는 지방 있는 돼지 다짐이 정석.",
      "Doubanjiang with real fermented depth (Pixian-style if you can find it). Soft tofu that still holds 2 cm cubes (~400 g block) beats silken. Freshly ground Sichuan pepper is louder than pre-ground. Fatty pork mince is classic.",
    ),
    doneness: L(
      "소스는 숟가락으로 떠서 밥 위에 흐를 정도의 자작함 — 국물처럼 얇으면 전분물을 ½큰술 더. 두부는 형태를 유지하되 입에서 바로 부셔집니다. 맛은 짠매움 위에 산초 얼얼함이 혀끝을 감돌고, 기름 붉은 점이 표면에 보여야 합니다. 두반장 발효 향이 느껴지지 않으면 베이스를 30초 더 볶았어야 합니다.",
      "Sauce should be spoonable and flow over rice — if brothy, add ½ tbsp more slurry. Tofu holds shape but collapses on the tongue. Salty heat first, then numbing tingle; red oil dots on the surface are a good sign. If you taste no fermented depth, the doubanjiang needed 30 more seconds in the oil.",
    ),
    tips: [
      L("타이밍: 고기 3분 → 소스 2분 → 두부 4–5분 → 전분·산초.", "Timing: meat 3 min → sauce 2 → tofu 4–5 → slurry and pepper."),
      L("두부는 뒤집기보다 팬을 흔들어 움직입니다.", "Shake the pan instead of stirring hard."),
      L("산초는 불 끈 뒤 또는 아주 약불에서.", "Add Sichuan pepper off heat or on the lowest flame."),
      L("두반장은 기름에 30–60초 ‘볶아 향을 피운’ 뒤 육수를 붓습니다 — 생으로 넣으면 날것입니다.", "Bloom doubanjiang 30–60 seconds in oil before stock — raw paste tastes harsh."),
    ],
    commonMistakes: [
      L("두부 격하게 저음 → 으깨짐. 고치기: 주걱으로 밀지 말기.", "Hard stirring → crumbled tofu. Fix: don’t push with a spatula."),
      L("산초 초반 → 향 소실. 고치기: 맨 마지막.", "Pepper early → aroma gone. Fix: very end."),
      L("바싹 졸임 → 밥과 안 맞음. 고치기: 육수 조금 더.", "Cooking dry → won’t coat rice. Fix: splash more stock."),
      L("두반장 미볶음 → 날것 콩 냄새. 고치기: 기름에서 향이 날 때까지.", "Unbloomed paste → raw bean smell. Fix: fry until fragrant in oil."),
    ],
    plating: L(
      "깊은 그릇에 담고 산초·대파·고추기름을 점처럼. 밥은 옆에 따로.",
      "Deep bowl; Sichuan pepper, scallion, chili-oil dots. Rice on the side.",
    ),
    substitutions: [
      L("고기 없이 표고·팽이로 채식 마파.", "Shiitake and enoki for meatless mapo."),
      L("순두부 대신 부침용 연두부 — 형태가 더 잘 유지됩니다.", "Soft (not silken) tofu holds shape better."),
    ],
    storage: L(
      "냉장 2일. 약불에 살살 데움. 산초는 먹기 직전 한 꼬집 더.",
      "Fridge 2 days. Reheat gently. A fresh pinch of Sichuan pepper at the table helps.",
    ),
  },
  "spaghetti-carbonara": {
    intro: L(
      "카르보나라의 유일한 기술은 ‘불 위에서 계란을 익히지 않는 유화’입니다. 구안찰레(또는 판체타)를 5–7분 렌더링하고, 면을 삶아 면수 ½컵을 남긴 뒤, 불을 끈 팬에서 계란+페코리노를 면수 전분으로 30초 안에 크림처럼 만듭니다. 생크림은 쓰지 않습니다. 스크램블이 되는 순간 실패입니다.",
      "Carbonara’s technique is one move: emulsify egg and cheese off heat. Render guanciale or pancetta 5–7 minutes, boil pasta, reserve ½ cup water, kill the heat, and turn eggs + pecorino into silk with starchy water in about 30 seconds. No cream. Scrambled eggs mean the pan was still too hot.",
    ),
    ingredientSelect: L(
      "구안찰레가 정석(향이 진함). 없으면 판체타, 그다음이 두꺼운 베이컨(연기 향은 달라짐). 치즈는 페코리노 로마노 — 파마산만 쓰면 덜 짭짤하고 덜 양젖 향. 계란은 신선하고 실온에 가까운 것이 유화에 유리합니다.",
      "Guanciale is classic; pancetta next; thick bacon last (smokier). Pecorino Romano beats Parmesan alone for salt and sheepy bite. Room-temperature fresh eggs emulsify more reliably.",
    ),
    doneness: L(
      "소스는 면에 코팅되어 흐르지 않고, 노란빛이 균일하며 알갱이(스크램블)가 없어야 합니다. 맛은 후추·소금 치즈·돼지지방이 동시에. 너무 되직하면 면수 1큰술, 너무 묽으면 치즈를 조금 더.",
      "Sauce should coat strands without puddling; even yellow, zero scrambled bits. Pepper, salty cheese, and pork fat at once. Too thick → 1 tbsp pasta water; too thin → a little more cheese.",
    ),
    tips: [
      L("계란+페코리노를 미리 섞어 두면 실패가 줄어듭니다.", "Whisk eggs and pecorino ahead to reduce scrambling risk."),
      L("팬이 아직도 지글거리면 10–20초 더 기다렸다가 섞으세요.", "If the pan is still sizzling, wait 10–20 seconds before adding egg."),
      L("타이밍: 렌더 5–7분 → 면 삶기 → 불 끄고 30초 유화.", "Timing: render 5–7 → boil pasta → off heat, emulsify ~30 sec."),
    ],
    commonMistakes: [
      L("센 불에서 계란 → 스크램블. 고치기: 불 완전 OFF.", "Eggs on high heat → scramble. Fix: heat fully off."),
      L("생크림 추가 → 다른 요리. 고치기: 면수+치즈만.", "Adding cream → different dish. Fix: pasta water + cheese only."),
      L("면수 부족 → 덩어리. 고치기: 한 큰술씩 추가하며 흔들기.", "Too little water → clumps. Fix: add tbsp by tbsp while tossing."),
    ],
    plating: L(
      "따뜻한 접시에 말고 후추를 두껍게, 페코리노를 한 번 더. 바로 먹습니다.",
      "Twirl onto a warm plate; heavy black pepper and a last shower of pecorino. Eat at once.",
    ),
    substitutions: [
      L("구안찰레 → 판체타 또는 두꺼운 베이컨.", "Pancetta or thick bacon instead of guanciale."),
      L("페코리노 일부를 파마산으로 혼합 가능.", "Part Parmesan can stand in for some pecorino."),
    ],
    storage: L(
      "바로 먹는 요리. 남으면 냉장 1일, 물·면수로 약불에 풀되 질감은 떨어집니다.",
      "Best fresh. Leftovers 1 day fridge; loosen with water over low heat — texture suffers.",
    ),
  },
  "pizza-margherita": {
    intro: L(
      "집 마르게리타의 기술은 ‘토핑을 얇게, 오븐을 최대로’입니다. 도우 250g(1장)에 으깬 토마토 3–4큰술·모차렐라 125g·바질만 쓰고, 모차렐라 물기를 10분 이상 짠 뒤, 가정용 오븐 최고 온도(가능하면 스톤·스틸 45분+ 예열, 목표 250–290°C)에서 6–10분 가장자리가 블리스터날 때까지 굽습니다. 토핑이 두꺼우면 가운데가 질척해집니다.",
      "Home Margherita technique: light toppings, maximum heat. One 250 g dough round gets 3–4 tbsp crushed tomato, 125 g mozzarella, and basil — mozzarella drained 10+ minutes — baked as hot as the home oven allows (stone/steel preheated 45+ minutes, aim 250–290°C) for 6–10 minutes until the rim blisters. Heavy toppings guarantee a soggy center.",
    ),
    ingredientSelect: L(
      "도우 단백질이 너무 낮은 밀가루는 힘이 약합니다(강력·피자용 추천). 토마토는 산마르자노 또는 잘 익은 통조림을 손으로 으깬 것 — 설탕을 많이 넣은 피자소스는 밸런스가 무너집니다. 모차렐라는 신선한 것(체에 올려 물기 제거) 또는 저수분. 바질은 큰 잎·향 있는 것만.",
      "Strong or pizza flour beats low-protein all-purpose for rim structure. Tomatoes: San Marzano or good canned whole, crushed by hand — sugary jar sauce throws the balance. Fresh mozzarella drained on a sieve, or low-moisture. Basil: large fragrant leaves only.",
    ),
    doneness: L(
      "가장자리는 호랑무늬·블리스터, 가운데는 유연하지만 물에 젖지 않음 — 집으면 가운데가 늘어지지 않고 탄력. 치즈는 녹아 얼룩덜룩하고 바질은 선명해야 합니다(오븐 직후 올리기). 맛은 토마토 산미·우유 지방·바질 향의 단순함. 가운데가 축축하면 토핑이 과했거나 예열이 부족합니다.",
      "Rim leopard-spotted and blistered; center flexible, not wet — it should spring, not sag, when lifted. Cheese mottled and melted; basil vivid (add after baking). Taste is simple: tomato acid, dairy fat, basil. A wet center means too much topping or a weak preheat.",
    ),
    tips: [
      L("모차렐라는 물기를 짜고 크게 찢어 올립니다.", "Drain mozzarella well and tear into large pieces."),
      L("바질은 오븐 직후 — 일찍 넣으면 검게 집니다.", "Basil right after baking — earlier and it blackens."),
      L("도우를 냉장고에서 천천히 발효하면 풍미가 깊어집니다.", "A slow cold ferment deepens flavor and chew."),
      L("소스는 가장자리에서 2cm 안쪽만 — 테두리를 비워야 블리스터가 납니다.", "Keep sauce 2 cm inside the edge so the rim can blister."),
    ],
    commonMistakes: [
      L("토핑 두껍게 → 질척한 가운데. 고치기: 소스 큰술 단위로.", "Heavy toppings → soggy center. Fix: sauce by the spoon, not ladle floods."),
      L("차가운 오븐 → 빵처럼 부풂. 고치기: 예열을 타협하지 말기.", "Cold oven → bread-like rise. Fix: don’t short the preheat."),
      L("소스 과당 → 밸런스 붕괴. 고치기: 소금·올리브오일만.", "Over-sweet sauce → collapse. Fix: salt and olive oil only."),
      L("도우를 밀대로 과하게 → 가스 소실. 고치기: 손가락으로 가운데만 밀어 림을 남기기.", "Rolling flat kills gas. Fix: fingertip-press the center and leave a rim."),
    ],
    plating: L(
      "도마에 올려 바로 자르고 올리브오일 한 바퀴와 바질 잎.",
      "Board, cut immediately, loop of olive oil and fresh basil.",
    ),
    substitutions: [
      L("신선 모차렐라 대신 저수분(물기 적음).", "Low-moisture mozzarella if fresh is too wet."),
      L("산 마르자노 대신 잘 익은 통토마토를 으깨어 사용.", "Crushed ripe canned tomatoes if San Marzano aren’t available."),
    ],
    storage: L(
      "실온 반나절. 냉장 시 팬·에어프라이어로 재바삭. 냉동은 질감 변화.",
      "Room temp half a day. Re-crisp in skillet or air fryer from fridge. Freezing changes texture.",
    ),
  },
  "classic-cheeseburger": {
    intro: L(
      "집버거의 기술은 ‘고기를 과하게 반죽하지 않고, 가운데 딤플, 번 토스트’입니다. 패티 1개(약 150–180g, 두께 2cm)는 차갑게·팬은 뜨겁게, 소금·후추는 굽기 직전, 치즈는 마지막 30초. 면당 약 3–4분(미디엄). 누르면서 굽면 육즙이 빠져 건조해지고, ‘스매시’가 아닌 이상 주걱으로 누르지 않습니다.",
      "Home burger technique: don’t overwork the meat, dimple the center, toast the bun. One patty (~150–180 g, 2 cm thick) stays cold; pan ripping hot; salt/pepper only just before cooking; cheese in the last 30 seconds. About 3–4 minutes per side for medium. Pressing squeezes out juices — this is not a smash burger.",
    ),
    ingredientSelect: L(
      "소고기는 지방 15–20%(80/20)가 집팬에 맞습니다. 너무 リーン하면 건조합니다. 신선 갈은 날(또는 전날)이 단맛이 살아 있습니다. 번은 감자번·브리오슈처럼 살짝 단면이 잘 토스트됩니다. 치즈는 아메리칸이 잘 녹고, 체다는 풍미가 강합니다. 피클은 얇고 신맛이 선명한 것.",
      "Beef at 15–20% fat (80/20) suits a home skillet — leaner dries out. Grind the same day (or day before) for sweetness. Potato or brioche buns toast well. American melts cleanly; cheddar brings sharper flavor. Pickles: thin, bright-acid slices.",
    ),
    doneness: L(
      "겉면은 진한 갈색 마이야르 크러스트, 속은 선택한 굽기에 맞게(미디엄은 연분홍·육즙이 맑은 분홍). 치즈는 패티 가장자리까지 덮이듯 녹고, 번 컷팅면은 바삭·속은 폭신. 맛은 고기 풍미가 먼저, 피클·소스 산미가 뒤를 잘라 줍니다. 회색빛·건조하면 불을 낮췄거나 너무 오래 눌렀던 것입니다.",
      "Deep-brown Maillard crust; interior to preference (medium stays rosy with clear pink juices). Cheese draped to the edges; bun cut faces crisp, crumb soft. Beef first, then pickle/sauce acidity. Gray and dry means the pan was too cool or you pressed too long.",
    ),
    tips: [
      L("뒤집기는 한 번만. 가운데만 살짝 딤플(가장자리보다 2–3mm 얇게).", "Flip once. Light center dimple 2–3 mm thinner than the rim — don’t smash."),
      L("타이밍: 면당 3–4분 · 번 토스트 1분 · 치즈 마지막 30초.", "Timing: 3–4 min per side · bun toast 1 min · cheese last 30 sec."),
      L("조립 전에 소스·피클을 준비해 패티가 식지 않게.", "Have sauce and pickles ready so the patty doesn’t cool."),
      L("팬에 기름은 얇게 — 소고기 지방이 곧 나옵니다. 연기가 나기 직전에 패티 투입.", "Barely oil the pan — beef fat follows. Add the patty just as the pan nearly smokes."),
    ],
    commonMistakes: [
      L("고기 과반죽 → 질긴 패티. 고치기: 가법게 모아만.", "Overworking → tough patty. Fix: just gather into shape."),
      L("차가운 번 → 찐득. 고치기: 컷팅면 토스트 필수.", "Cold bun → steamy limp bread. Fix: always toast cut faces."),
      L("치즈 너무 일찍 → 흘러내림. 고치기: 불 끄기 30초 전.", "Cheese too early → slides off. Fix: last 30 seconds."),
      L("소금 미리 뿌려 두기 → 수분 배출·건조. 고치기: 팬 들어가기 직전만.", "Salting early → weep and dry. Fix: season only as it hits the pan."),
    ],
    plating: L(
      "하단 번 · 소스 · 패티+치즈 · 피클·양파 · 상추·토마토 · 상단 번. 이쑤시개로 고정 후 반으로.",
      "Bottom bun · sauce · patty+cheese · pickle/onion · lettuce/tomato · top. Skewer and halve.",
    ),
    substitutions: [
      L("소고기 대신 칠면조·식물성 패티.", "Turkey or plant-based patties."),
      L("아메리칸 대신 체다·스위스.", "Cheddar or Swiss instead of American."),
    ],
    storage: L(
      "조립 전 패티만 냉장 2일. 조립된 버거는 바로.",
      "Cooked patties alone: 2 days fridge. Assembled burgers are best immediately.",
    ),
  },
  "pad-thai": {
    intro: L(
      "팟타이 기술은 ‘면 불림 정도와 웍 순서’입니다. 쌀국수 200g을 심이 남게 20–30분 불려 두고, 타마린드 2큰술·피시소스 2큰술·팜슈가(또는 설탕) 1½큰술 소스를 미리 섞은 뒤 센 불에서 단백질 → 면·소스 → 숙주·파·땅콩 순으로 넣습니다(합 볶음 4–6분). 면을 푹 불리면 죽처럼 끊어집니다. 라임은 생략하지 마세요.",
      "Pad Thai technique is soak level + wok order. Soak 200 g rice noodles 20–30 minutes with a firm core; premix 2 tbsp tamarind, 2 tbsp fish sauce, 1½ tbsp palm sugar (or sugar); then on high heat: protein → noodles + sauce → sprouts, scallion, peanuts (4–6 minutes total stir-fry). Oversoaked noodles break into mush. Do not skip the lime.",
    ),
    ingredientSelect: L(
      "면은 팟타이용 중평면(약 3–5mm). 타마린드 페이스트(물로 희석)가 병당 소스보다 신맛 조절이 쉽습니다. 피시소스는 향이 깨끗한 제품. 숙주는 뿌리가 싱싱한 것 — 시들면 볶을 때 물만 나옵니다. 새우를 쓰면 중하 사이즈 12–16마리(2인분).",
      "Medium flat rice noodles (~3–5 mm). Tamarind paste thinned with water is easier to balance than bottled pad Thai sauce. Clean-tasting fish sauce. Fresh crisp sprouts — wilted ones only water the wok. For shrimp: 12–16 medium for 2 portions.",
    ),
    doneness: L(
      "면은 부드럽지만 심이 완전히 사라지지 않은 탄력 — 집으면 늘어지지 않고 탄력. 소스는 면에 묻고 팬에 국물처럼 남지 않음. 맛은 신·단·짠이 동시에, 땅콩 고소함과 라임으로 끝. 단맛만 남으면 라임·피시소스를 ½작은술씩 더. 계란은 살짝 익은 스크램블 조각으로 면에 붙어야 합니다.",
      "Noodles tender with a hint of core — they should spring, not stretch limp. Sauce clinging, not soupy. Sour, sweet, and salty at once, finished with peanut and lime. If only sweet remains, add ½ tsp lime juice or fish sauce at a time. Egg should cling as soft scramble bits.",
    ),
    tips: [
      L("소스를 미리 한 컵에 섞어 두면 볶는 동안 헤매지 않습니다.", "Mix the sauce in a cup before you start."),
      L("숙주·파·땅콩은 불 끄기 직전.", "Sprouts, scallion, and peanuts at the very end."),
      L("한 번에 2인분만 — 과하면 찐 면이 됩니다.", "Cook for 2 portions max per wok — more becomes steamed noodles."),
      L("면이 붙으면 소스 1큰술·물 1큰술을 둘러 웍을 흔들어 풉니다 — 저어 부수지 마세요.", "If noodles stick, splash 1 tbsp sauce + 1 tbsp water and toss — don’t stir-break them."),
    ],
    commonMistakes: [
      L("면 과불리기 → 끊어짐. 고치기: 아직 심이 있을 때 건지기.", "Oversoaking → breakage. Fix: stop while a core remains."),
      L("약한 불 → 찜. 고치기: 연기 직전 온도.", "Low heat → steaming. Fix: nearly smoking wok."),
      L("라임 생략 → 단짠만. 고치기: 웨지 필수.", "Skipping lime → only sweet-salty. Fix: wedges on every plate."),
      L("숙주를 너무 일찍 → 숨 죽고 물 생김. 고치기: 마지막 15–20초만.", "Sprouts early → wilt and water. Fix: last 15–20 seconds only."),
    ],
    plating: L(
      "면에 땅콩·숙주·라임·고수. 고추 플레이크는 테이블에.",
      "Plate with peanuts, sprouts, lime, cilantro. Chili flakes on the table.",
    ),
    substitutions: [
      L("새우·두부·닭 중 선호 단백질.", "Shrimp, tofu, or chicken."),
      L("타마린드 대신 라임+황설탕(맛은 다름).", "Lime + brown sugar approximates tamarind (different)."),
    ],
    storage: L(
      "냉장 1–2일. 팬에 물 한 스푼과 함께 빠르게 데움. 숙주는 따로.",
      "Fridge 1–2 days. Reheat fast with a spoon of water. Keep sprouts separate.",
    ),
  },
  "chicken-tikka-masala": {
    intro: L(
      "티카 마살라는 ‘요거트 재운 닭을 따로 구운 뒤 소스에 합치는’ 2단 기술입니다. 최소 1시간(가능하면 하룻밤) 재우고, 그릴·브로일로 12–15분 구운 다음, 토마토·크림 소스를 약불로 15분 조려 담급니다. 재우기를 건너뛰면 향이 겉에만 남고, 크림을 팔팔 끓이면 분리될 수 있습니다.",
      "Tikka masala is a two-stage technique: yogurt-marinated chicken cooked separately, then finished in sauce. Marinate at least 1 hour (overnight better), broil/grill 12–15 minutes, simmer tomato-cream sauce gently 15 minutes, then combine. Skip the marinade and spices stay superficial; hard-boil cream and it can split.",
    ),
    ingredientSelect: L(
      "닭 허벅지살이 촉촉합니다. 요거트는 플레인 전지·그릭(물기 약간 있는 것). 가람마살라는 향이 살아 있는 비교적 신선한 가루. 토마토는 패티드 또는 잘 익은 통조림 — 생토마토만 쓰면 신맛이 거칠 수 있습니다.",
      "Thighs stay juicier. Plain full-fat or lightly drained Greek yogurt. Fresh-smelling garam masala. Tomato purée or good canned tomatoes — raw tomatoes alone can taste harsh.",
    ),
    doneness: L(
      "닭은 겉에 약간의 그을림, 속은 촉촉. 소스는 주황색·분홍빛으로 윤기 있고 너무 묽지 않음. 맛은 토마토 산미·크림 부드러움·따뜻한 향신료. 가루 맛이 날면 향신료를 오일에서 더 볶았어야 합니다.",
      "Chicken lightly charred outside, moist inside. Sauce glossy orange-pink, not watery. Tomato acid, cream softness, warm spice. Raw spice powder taste means you needed a longer bloom in oil.",
    ),
    tips: [
      L("가람마살라는 마지막에 넣어 향을 살립니다.", "Add garam masala at the end for aroma."),
      L("타이밍: 재우기 1h+ → 굽기 12–15분 → 소스 15분.", "Timing: marinate 1h+ → broil/grill 12–15 → sauce 15."),
      L("크림은 약불에서 — 분리되면 불을 끄고 저어 회복을 시도.", "Keep cream on low heat; if it splits, kill heat and stir to recover."),
      L("브로일 시 팬을 오븐 상단에서 15cm 정도 — 더 가까우면 겉만 타고 속은 덜 익습니다.", "Broil ~15 cm from the element — closer chars the outside before the center cooks."),
    ],
    commonMistakes: [
      L("재우기 생략 → 향이 겉만. 고치기: 최소 1시간.", "Skipping marinade → surface spices only. Fix: at least 1 hour."),
      L("크림 팔팔 끓임 → 분리. 고치기: 약불·마지막 투입.", "Boiling cream hard → split. Fix: low heat, add late."),
      L("소금 부족 → 텁텁. 고치기: 소스 간을 닭과 따로 보기.", "Under salting → pasty. Fix: season sauce on its own."),
      L("재운 닭을 소스에만 넣고 삶기 → 그을림·요거트 향 없음. 고치기: 반드시 따로 구운 뒤 합치기.", "Simmering marinated chicken only in sauce → no char. Fix: broil/grill first, then combine."),
    ],
    plating: L(
      "깊은 그릇에 소스·닭, 고수·생크림 스월, 난/밥.",
      "Deep bowl with cilantro, cream swirl, naan or rice.",
    ),
    substitutions: [
      L("생크림 대신 코코넛밀크(맛은 달라짐).", "Coconut milk instead of cream (different profile)."),
      L("닭 대신 판니어·콜리플라워.", "Paneer or cauliflower instead of chicken."),
    ],
    storage: L(
      "냉장 3일, 소스와 냉동 1개월. 약불에 데움.",
      "Fridge 3 days; freeze in sauce 1 month. Reheat gently.",
    ),
  },
  "mushroom-risotto": {
    intro: L(
      "리소토 기술은 ‘따뜻한 육수를 한 국자씩, 버섯은 따로 구워 마지막에’입니다. 아르보리오를 양파·와인에 투명해질 때까지 볶은(토스타투라) 뒤 18–22분 저어 알덴테에서 불을 끄고 버터·파마산으로 마네카투라합니다. 육수를 한 번에 붓거나 버섯을 처음부터 넣으면 죽·찐 버섯이 됩니다.",
      "Risotto technique: hot stock ladle by ladle, mushrooms browned separately and folded in last. Toast arborio in onion and wine, stir 18–22 minutes to al dente, kill heat, then mantecatura with butter and Parmesan. Dumping all stock or adding mushrooms at the start yields porridge and steamed fungi.",
    ),
    ingredientSelect: L(
      "쌀은 아르보리오 또는 카르나롤리 — 일반 햇반용 쌀은 전분 구조가 다릅니다. 버섯은 표고·크레미니·혼합, 물기가 과도하게 씻기지 않은 것. 육수는 담백한 닭 또는 채소, 항상 냄비에 따뜻하게 유지.",
      "Arborio or carnaroli only — table rice has the wrong starch. Mushrooms: shiitake, cremini, or mixed, not waterlogged from washing. Light chicken or vegetable stock kept hot in a separate pot.",
    ),
    doneness: L(
      "리소토는 접시에 ‘파도(all’onda)’가 생겨야 하고, 쌀은 중심에 아주 작은 흰 심. 맛은 버섯 구운 향·파마산·후추. 죽처럼 퍼지면 과하게 저었거나 육수가 많았던 것입니다.",
      "It should still ‘wave’ (all’onda) on the plate; grains with a tiny white core. Taste: roasted mushroom, Parmesan, pepper. If it spreads like porridge, you overstocked or over-stirred.",
    ),
    tips: [
      L("육수는 항상 따뜻하게 — 차가운 육수는 쌀을 멈춥니다.", "Keep stock hot — cold stock stalls the rice."),
      L("타이밍: 합 18–22분. 알덴테에서 불 끄고 치즈.", "Timing: 18–22 minutes. Kill heat at al dente, then cheese."),
      L("버섯은 센 불에 한 겹으로 구워 수분을 날립니다.", "Brown mushrooms in a single layer on high heat to drive off water."),
      L("와인은 쌀이 거의 마른 뒤 넣고 알코올 향이 날아갈 때까지 30–60초 저어 줍니다.", "Add wine when the rice looks nearly dry; stir 30–60 seconds until the alcohol smell lifts."),
    ],
    commonMistakes: [
      L("육수 한 번에 → 죽. 고치기: 국자 단위, 흡수 후 다음.", "All stock at once → porridge. Fix: ladle, wait, repeat."),
      L("버섯 처음부터 → 찐 식감. 고치기: 따로 구워 마지막 합치기.", "Mushrooms from the start → steamed. Fix: brown separately, fold in last."),
      L("끓이며 파마산 → 끈적. 고치기: 불 끈 뒤 마네카투라.", "Cheese while boiling → gluey. Fix: mantecatura off heat."),
      L("알덴테 지나침 → 죽. 고치기: 18분부터 30초마다 씹어 보고 심이 남을 때 불 끄기.", "Past al dente → porridge. Fix: taste from minute 18; kill heat while a tiny core remains."),
    ],
    plating: L(
      "따뜻한 접시에 파도가 보이게 담고 버섯·파마산·후추·파슬리. 바로.",
      "Warm plate so it waves; mushrooms, Parmesan, pepper, parsley. Serve at once.",
    ),
    substitutions: [
      L("아르보리오 대신 카르나롤리.", "Carnaroli instead of arborio."),
      L("치킨 스톡 대신 채소 스톡으로 채식.", "Vegetable stock for vegetarian risotto."),
    ],
    storage: L(
      "냉장 2일. 데울 때 육수·물을 넣어 약불. 냉동은 질감 하락.",
      "Fridge 2 days. Reheat gently with stock or water. Freezing hurts texture.",
    ),
  },
  "strawberry-banana-smoothie": {
    intro: L(
      "이 스무디의 기술은 ‘액체는 최소로 시작, 얼린 과일로 농도’입니다. 딸기 1½컵(약 200g)·반점 바나나 1개·요거트 ½컵(120g)을 블렌딩하되, 우유는 2–4큰술부터만 넣고 원하는 점도까지 추가합니다. 단맛은 반점 있는 바나나로 먼저 맞추고, 아침 5분 분량입니다. 실온 과일만 쓰면 묽고 미지근합니다.",
      "Smoothie technique: start with minimal liquid and let frozen fruit set the body. Blend 1½ cups / ~200 g strawberries, 1 spotty banana, and ½ cup / 120 g yogurt — add milk only 2–4 tbsp at a time. Spotty bananas set sweetness before any added sugar. Five-minute breakfast. Room-temp fruit alone goes thin and lukewarm.",
    ),
    ingredientSelect: L(
      "딸기는 향이 있는 익은 것(또는 냉동 — 냉동이면 액체를 더 줄이세요). 바나나는 반점 있는 숙성 과일(초록 바나나는 떫고 풀립니다). 요거트는 플레인 — 가당 요거트면 추가 단맛을 줄이세요. 우유가 필요하면 소량부터.",
      "Ripe fragrant strawberries (or frozen — use even less liquid if frozen). Spotty ripe bananas (green ones taste starchy). Plain yogurt — if sweetened, skip extra sugar. Add milk only in small splashes.",
    ),
    doneness: L(
      "빨대로 천천히 올라올 농도(유리잔을 기울여도 바로 흐르지 않음), 분리되지 않은 분홍·연한 균일 색. 맛은 딸기 향이 먼저, 바나나 단맛·요거트 산미가 뒤를 받칩니다. 물처럼 묽으면 얼린 과일·요거트를 더하고, 씨·덩어리가 남으면 10–15초 더 블렌딩. 거품만 많으면 액체가 과한 신호입니다.",
      "Should climb a straw slowly (not pour off a tilted glass instantly) with an even pink color, no separation. Strawberry aroma first, then banana sweetness and yogurt tang. Too thin → more frozen fruit or yogurt; seeds/grain → blend 10–15 seconds more. Excess foam usually means too much liquid.",
    ),
    tips: [
      L("단백질을 높이려면 그릭 요거트 120g(약 ½컵).", "For more protein, use 120 g / ½ cup Greek yogurt."),
      L("일부를 전날 얼려 두면 각빙 없이 걸쭉합니다.", "Freeze some fruit the night before for thickness without ice dilution."),
      L("마시기 직전 블렌딩 — 두면 분리됩니다.", "Blend just before drinking — it separates if it sits."),
      L("재료 순서: 액체·요거트 → 바나나 → 딸기 — 칼날이 먼저 액을 잡아야 막히지 않습니다.", "Load liquid/yogurt → banana → strawberries so the blade catches liquid first."),
    ],
    commonMistakes: [
      L("액체 과다 → 물 스무디. 고치기: 최소량으로 시작.", "Too much liquid → watery. Fix: start minimal."),
      L("실온 과일만 → 미지근·묽음. 고치기: 일부 냉동.", "Only room-temp fruit → lukewarm and thin. Fix: freeze some."),
      L("가당 재료 중복 → 과도한 단맛. 고치기: 플레인 요거트+숙성 바나나.", "Stacked sweeteners → cloying. Fix: plain yogurt + ripe banana."),
      L("각빙만으로 농도 → 녹으면 묽어짐. 고치기: 얼린 과일로 바디를 만들기.", "Ice-only thickness → watery as it melts. Fix: build body with frozen fruit."),
    ],
    plating: L(
      "차가운 글라스에 붓고 딸기 슬라이스·바나나 칩. 빨대와 바로.",
      "Cold glass; strawberry slice or banana chip; straw; serve immediately.",
    ),
    substitutions: [
      L("유제품 대신 아몬드·오트 밀크.", "Almond or oat milk instead of dairy."),
      L("딸기 대신 냉동 베리 믹스.", "Frozen mixed berries instead of strawberries."),
    ],
    storage: L(
      "바로 마시는 게 최선. 밀폐 냉장 24시간, 전 흔들거나 짧게 블렌딩.",
      "Best immediate. Airtight fridge 24 hours; shake or blitz briefly before drinking.",
    ),
  },
};

export const FLAGSHIP_SLUGS = Object.keys(recipeFlagships);
