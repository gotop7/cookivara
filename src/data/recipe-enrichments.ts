import type { LocalizedString } from "@/i18n/types";

const L = (ko: string, en: string): LocalizedString => ({ ko, en });

export type RecipeEnrichment = {
  intro: LocalizedString;
  tips: LocalizedString[];
  substitutions: LocalizedString[];
  storage: LocalizedString;
};

/**
 * Deep bilingual enrichment for ~40 flagship recipes (AdSense quality pass).
 * Merged onto base recipes in getRecipe / getAllRecipes.
 */
export const recipeEnrichments: Record<string, RecipeEnrichment> = {
  "gochujang-tofu-bibimbap": {
    intro: L("비빔밥은 남은 반찬을 밥 위에 올려 비벼 먹던 집밥에서 출발했지만, 고추장 두부 버전은 채식 식탁에서도 충분히 포만감이 있습니다. 두부를 먼저 양념에 재워 구우면 가장자리가 달콤짭짤하게 캐러멜처럼 익고, 채소는 각각 짧게 볶아 색과 아삭함을 살립니다. 주말 브런치나 손님 초대용으로도 그릇만 예쁘게 담으면 근사해 보이는 한 끼입니다.", "Bibimbap began as a thrifty way to finish banchan over rice, and this gochujang-tofu version still feels complete for a vegetarian table. Marinating and searing the tofu builds a sweet-savory glaze, while quick vegetable sautés keep color and crunch. It also plates beautifully for weekend brunch or guests."),
    tips: [
      L("두부는 반드시 키친타월로 물기를 뺀 뒤 구워야 부서지지 않습니다.", "Pat tofu very dry before searing so it browns instead of steaming."),
      L("채소는 한 팬에 한꺼번에 넣지 말고 종류별로 볶아 색이 섞이지 않게 하세요.", "Cook vegetables in separate batches so colors stay bright."),
      L("고추장이 너무 매우면 꿀이나 올리고당을 ½큰술 더해 균형을 맞춥니다.", "If gochujang tastes harsh, round it with ½ tbsp honey or rice syrup."),
    ],
    substitutions: [
      L("두부 대신 버섯이나 템페를 써도 좋습니다.", "Swap tofu for mushrooms or tempeh."),
      L("현미밥·퀴노아로 바꿔도 비빔 질감이 잘 나옵니다.", "Brown rice or quinoa also mix well."),
      L("달걀프라이 대신 아보카도 슬라이스를 올려도 됩니다.", "Avocado slices work instead of a fried egg."),
    ],
    storage: L("밥·채소·두부를 따로 밀폐용기에 담아 냉장 2일. 먹을 때 밥만 데워 비빕니다. 냉동은 비추천.", "Store rice, vegetables, and tofu separately up to 2 days refrigerated. Reheat only the rice before mixing. Freezing is not recommended."),
  },
  "kimchi-jjigae": {
    intro: L("김치찌개는 묵은김치의 신맛이 국물에 녹아들어야 제맛이 납니다. 돼지고기를 먼저 볶아 기름을 내고 김치를 함께 볶으면 신내가 날아가고 깊은 감칠맛이 생깁니다. 밥 한 공기와 계란후라이만 있어도 완성되는, 한국 가정에서 가장 자주 끓이는 찌개입니다.", "Kimchi jjigae shines when aged kimchi’s acidity melts into the broth. Sautéing pork first, then frying the kimchi, softens the sharp smell and builds savoriness. With rice—and maybe a fried egg—it is one of the most-cooked home stews in Korea."),
    tips: [
      L("김치는 최소 2주 이상 익은 묵은김치를 쓰세요. 겉절이로는 국물이 약합니다.", "Use well-fermented kimchi (2+ weeks); fresh kimchi makes a weak broth."),
      L("김치를 볶을 때 김치국물도 조금 넣으면 더 진해집니다.", "Add a splash of kimchi brine while frying for deeper flavor."),
      L("두부는 마지막에 넣어 형태가 부서지지 않게 합니다.", "Add tofu at the end so it stays intact."),
    ],
    substitutions: [
      L("돼지고기 대신 참치캔이나 스팸, 또는 버섯만으로도 가능합니다.", "Use canned tuna, spam, or mushrooms instead of pork."),
      L("육수 대신 물+다시다를 써도 됩니다.", "Water plus a dash of dashida works if you lack stock."),
    ],
    storage: L("식혀 밀폐 후 냉장 3일. 끓여 다시 데워 먹습니다. 두부는 데울 때 으깨질 수 있으니 조심스럽게.", "Cool, refrigerate up to 3 days, and reboil to reheat. Handle tofu gently so it doesn’t fall apart."),
  },
  "bulgogi": {
    intro: L("불고기는 얇게 썬 소고기를 달콤짭짤 양념에 재워 센 불에 빠르게 익히는 한국식 BBQ입니다. 배나 양파의 단맛이 고기를 부드럽게 하고, 참기름이 고소한 마무리를 줍니다. 쌈 채소·밥·상추와 함께 내면 가족 식탁의 주인공이 됩니다.", "Bulgogi is thinly sliced beef marinated sweet-savory and seared hot and fast. Pear or onion sugar tenderizes the meat; sesame oil finishes the aroma. Serve with lettuce wraps and rice for a family-table centerpiece."),
    tips: [
      L("고기는 살짝 언 상태에서 썰면 얇게 썰기 쉽습니다.", "Slice beef while slightly frozen for even thin cuts."),
      L("팬에 한꺼번에 넣으면 물이 나옵니다. 나눠 볶으세요.", "Cook in batches so the meat browns instead of stewing."),
      L("양념에 간 배를 넣으면 육질이 더 부드러워집니다.", "Grated pear in the marinade makes the beef especially tender."),
    ],
    substitutions: [
      L("소고기 대신 닭 허벅지살이나 포토벨로 버섯도 잘 맞습니다.", "Chicken thigh or portobello mushrooms also work."),
      L("설탕 대신 꿀·메이플 시럽을 써도 됩니다.", "Honey or maple can replace sugar."),
    ],
    storage: L("익힌 불고기는 냉장 3일. 재운 생고기는 냉장 하루, 또는 양념과 함께 냉동 1개월.", "Cooked bulgogi keeps 3 days refrigerated. Raw marinated beef: 1 day fridge or 1 month frozen in marinade."),
  },
  "japchae": {
    intro: L("잡채는 잔칫상에 빠지지 않는 당면 요리입니다. 당면의 쫀득한 식감과 간장·참기름 양념, 볶은 채소의 색감이 한데 어우러집니다. 미리 만들어 두어도 맛이 크게 변하지 않아 도시락·모임용으로도 인기입니다.", "Japchae is a celebration classic: chewy sweet-potato noodles, soy-sesame seasoning, and colorful stir-fried vegetables. It holds well for lunchboxes and gatherings because the flavor stays steady after cooling."),
    tips: [
      L("당면은 살짝 덜 익혀 찬물에 헹군 뒤 양념하면 불지 않습니다.", "Undercook noodles slightly, rinse cold, then dress so they don’t swell."),
      L("채소는 숨만 죽이고, 당면과 마지막에 버무립니다.", "Wilt vegetables lightly and toss with noodles at the end."),
      L("차게 먹을 때는 참기름을 조금 더 둘러 주세요.", "For cold servings, add an extra drizzle of sesame oil."),
    ],
    substitutions: [
      L("소고기 없이 버섯·두부만으로 채식 잡채를 만들 수 있습니다.", "Skip beef and use mushrooms or tofu for a vegetarian version."),
      L("당면 대신 쌀국수를 쓰면 식감이 달라지지만 가능합니다.", "Rice noodles work in a pinch with a different chew."),
    ],
    storage: L("밀폐 냉장 3일. 전자레인지에 살짝 데우거나 팬에 참기름과 함께 볶아 데웁니다.", "Airtight in the fridge 3 days. Reheat gently in the microwave or a skillet with sesame oil."),
  },
  "tteokbokki": {
    intro: L("떡볶이는 길거리 분식의 상징이자, 집에서도 10분이면 끓일 수 있는 매콤달콤 간식입니다. 떡의 쫄깃함과 고추장·고춧가루 국물의 농도 조절이 핵심입니다. 어묵·계란·라면사리를 더하면 한 끼 식사로도 충분합니다.", "Tteokbokki is Korea’s iconic street snack—and a 10-minute stove project at home. Chewy rice cakes and a balanced gochujang-gochugaru sauce are the heart of it. Add fish cake, egg, or ramen noodles to turn it into a full meal."),
    tips: [
      L("떡이 단단하면 미지근한 물에 10분 불려 사용하세요.", "Soak hard rice cakes in lukewarm water 10 minutes first."),
      L("국물이 너무 줄면 물을 조금씩 추가해 농도만 맞춥니다.", "If the sauce reduces too far, splash in water to loosen."),
      L("마지막에 버터 ½작은술을 넣으면 국물이 윤기 납니다.", "A ½ tsp butter at the end adds gloss."),
    ],
    substitutions: [
      L("고추장 대신 칠리페이스트+된장으로 비슷한 맛을 낼 수 있습니다.", "Chili paste plus a little doenjang can approximate gochujang."),
      L("떡 대신 당면이나 우동면을 넣어도 맛있습니다.", "Glass noodles or udon can stand in for rice cakes."),
    ],
    storage: L("식후 바로 먹는 게 최선. 남으면 냉장 1일, 데울 때 물을 조금 넣어 풀어 줍니다. 떡은 굳기 쉽습니다.", "Best eaten immediately. Leftovers: 1 day fridge; reheat with a splash of water. Cakes firm up quickly."),
  },
  "samgyetang": {
    intro: L("삼계탕은 더운 날 몸을 보한다는 한국의 대표적인 보양 국물 요리입니다. 어린 닭 뱃속에 찹쌀·마늘·대추·인삼을 넣고 천천히 고아 국물이 뽀얗고 고소해질 때까지 끓입니다. 속이 든든하면서도 자극이 적어  conval 중이나 피로할 때 자주 찾게 됩니다.", "Samgyetang is Korea’s classic restorative chicken soup—especially in hot weather. A small chicken is stuffed with sticky rice, garlic, jujube, and ginseng, then simmered until the broth turns milky and fragrant. It is hearty yet gentle when you need comfort."),
    tips: [
      L("찹쌀은 미리 불려야 닭 안에서 제대로 익습니다.", "Soak glutinous rice so it cooks through inside the bird."),
      L("처음엔 센 불로 끓인 뒤 중약불로 오래 고아 국물을 만드세요.", "Boil hard first, then gentle-simmer for a milky broth."),
      L("소금은 상에 낼 때 맞추면 국물이 탁해지지 않습니다.", "Season with salt at the table to keep the broth clear."),
    ],
    substitutions: [
      L("인삼이 없으면 황기·생강으로 향을 보강하세요.", "Without ginseng, add astragalus or extra ginger."),
      L("통닭 대신 닭다리를 여러 개 써도 됩니다.", "Chicken legs can replace a whole small bird."),
    ],
    storage: L("국물과 고기를 분리해 냉장 3일. 국물은 냉동 1개월. 밥(찹쌀)은 따로 데워 담습니다.", "Separate broth and meat; fridge 3 days. Freeze broth up to 1 month. Reheat rice stuffing separately."),
  },
  "kimbap": {
    intro: L("김밥은 소풍·시험·야외 활동의 국민 도시락입니다. 밥을 참기름·소금으로 간하고, 단무지·당근·시금치·계란·햄(또는 두부)을 가지런히 올려 단단히 말아 줍니다. 썰었을 때 단면이 예쁜 것이 자랑거리이니, 재료를 너무 두껍게 넣지 않는 것이 요령입니다.", "Kimbap is Korea’s picnic roll: seasoned rice, pickled radish, carrot, spinach, egg, and ham or tofu, rolled tight in seaweed. Clean cross-sections are the pride of a good roll—so avoid overfilling."),
    tips: [
      L("밥은 뜨거울 때 간하고, 미지근할 때 말아야 김이 찢기지 않습니다.", "Season rice while hot; roll when just warm so nori doesn’t tear."),
      L("칼날에 참기름을 바르면 밥이 덜 붙습니다.", "Oil the knife between cuts for clean slices."),
      L("재료는 물기를 꼭 짜서 밥이 질지 않게 합니다.", "Squeeze fillings dry so the rice stays fluffy."),
    ],
    substitutions: [
      L("햄 대신 불고기·참치·크림치즈도 인기 조합입니다.", "Bulgogi, tuna, or cream cheese are popular fillings."),
      L("현미밥·퀴노아로 건강식으로 바꿀 수 있습니다.", "Brown rice or quinoa make a lighter roll."),
    ],
    storage: L("실온 반나절, 냉장 시 밥이 굳으니 먹기 전 상온에 10분. 냉동 후 전자레인지 해동도 가능합니다.", "Room temp half a day. Refrigeration hardens rice—rest 10 minutes before eating. Freeze and microwave if needed."),
  },
  "yangnyeom-chicken": {
    intro: L("양념치킨은 바삭한 튀김 위에 달콤매콤 소스를 코팅한 한국식 프라이드치킨입니다. 두 번 튀기면 껍질이 오래 바삭하고, 소스는 끈적일 정도로만 줄여  질척해지지 않게 버무립니다. 맥주·치킨무와 함께하면 완벽한 치맥 세팅입니다.", "Yangnyeom chicken is Korean fried chicken lacquered in a sweet-spicy glaze. Double-frying keeps the crust crisp; reduce the sauce just until sticky so it coats without turning soggy. Serve with beer and pickled radish."),
    tips: [
      L("튀김옷은 얇게, 기름 온도는 170–175°C를 유지하세요.", "Keep batter thin and oil at 340–350°F (170–175°C)."),
      L("한 번 튀긴 뒤 5분 쉬었다가 다시 튀기면 수분이 빠집니다.", "Rest 5 minutes between fries to drive off moisture."),
      L("소스는 불을 끄고 버무려야 코팅이 고릅니다.", "Toss off heat so the glaze coats evenly."),
    ],
    substitutions: [
      L("닭 날개·봉 대신 꽃등심(카울리플라워)으로 채식 버전을 만들 수 있습니다.", "Cauliflower florets make a vegetarian version."),
      L("고추장 소스 대신 간장치킨 양념으로 바꿔도 됩니다.", "Use a soy-garlic glaze for a non-spicy ganjang style."),
    ],
    storage: L("바로 먹는 게 최선. 남으면 냉장 1일, 에어프라이어 180°C 5분으로 재바삭.", "Best fresh. Leftovers: 1 day fridge; re-crisp 5 minutes at 350°F in an air fryer."),
  },
  "kung-pao-chicken": {
    intro: L("쿵파오 치킨은 쓰촨의 대표 볶음 요리로, 마른 고추·산초의 얼얼함과 땅콩의 고소함이 특징입니다. 닭은 전분으로 코팅해 빠르게 볶아 촉촉함을 지키고, 소스는 달콤·짭짤·살짝 신맛의 균형을 맞춥니다. 밥 위에 올려 내기 좋은 평일 저녁 메뉴입니다.", "Kung pao chicken is a Sichuan classic: dried chilies, tingling peppercorn, and crunchy peanuts. Velvet the chicken with starch for juiciness, and balance the sauce sweet, salty, and lightly tart. Ideal weeknight rice-bowl food."),
    tips: [
      L("산초는 너무 오래 볶으면 써지니 향만 내고 빼거나 약하게 볶습니다.", "Don’t burn Sichuan pepper—toast briefly for aroma."),
      L("팬이 충분히 뜨거울 때 닭을 넣어 물기가 생기지 않게 합니다.", "Use a ripping-hot wok so the chicken sears."),
      L("땅콩은 마지막에 넣어 바삭함을 유지하세요.", "Add peanuts at the end so they stay crunchy."),
    ],
    substitutions: [
      L("닭 대신 두부·새우도 잘 맞습니다.", "Tofu or shrimp work well."),
      L("산초가 없으면 후추+칠리플레이크로 대체(맛은 달라집니다).", "No Sichuan pepper? Black pepper + chili flakes (different heat)."),
    ],
    storage: L("냉장 2일. 팬에 빠르게 데우거나 전자레인지. 땅콩은 따로 보관하면 더 바삭합니다.", "Fridge 2 days. Reheat in a hot pan or microwave. Store peanuts separately for crunch."),
  },
  "egg-fried-rice": {
    intro: L("계란볶음밥은 남은 밥으로 만드는 가장 정직한 한 그릇입니다. 차가워진 밥알이 서로 붙지 않아야 고슬고슬하고, 계란은 먼저 스크램블해 두었다가 마지막에 섞으면 색이 선명합니다. 파·간장·참기름만으로도 충분하지만, 냉동 채소나 햄을 넣으면 더 든든해집니다.", "Egg fried rice is the honest one-bowl meal for leftover rice. Cold grains stay separate; scramble the egg first and fold it back for bright yellow bits. Scallion, soy, and sesame oil are enough—frozen veg or ham make it heartier."),
    tips: [
      L("갓 지은 뜨거운 밥은 피하세요. 전날 밥이 최고입니다.", "Avoid fresh hot rice; day-old chilled rice is ideal."),
      L("팬을 아주 뜨겁게 달군 뒤 재료를 넣습니다.", "Preheat the pan until smoking-hot."),
      L("간장은 가장자리에 둘러 향을 태우듯 입히면 볶음밥 냄새가 납니다.", "Drizzle soy around the pan edge so it toasts into aroma."),
    ],
    substitutions: [
      L("현미·퀴노아·콜리플라워라이스도 가능합니다.", "Brown rice, quinoa, or cauliflower rice all work."),
      L("계란 없이 두부 스크램블로 비건화할 수 있습니다.", "Tofu scramble makes it vegan."),
    ],
    storage: L("냉장 2일. 팬에 오일 조금과 함께 다시 볶아 데웁니다. 재냉동은 권하지 않습니다.", "Fridge 2 days. Re-fry with a little oil. Avoid refreezing."),
  },
  "mapo-tofu": {
    intro: L("마파두부는 두반장과 산초가 만드는 얼큰한 쓰촨 두부 요리입니다. 부드러운 두부와 다진 고기의 대비, 국물처럼 자작한 소스에 밥을 비벼 먹기 좋습니다. 매운맛은 두반장 양으로 조절하고, 마지막 산초가루가 ‘마(麻)’의 얼얼함을 완성합니다.", "Mapo tofu is silky tofu in a doubanjiang-chili sauce with the signature Sichuan tingle. Soft tofu against minced meat, eaten over rice, is the point. Dial heat with the bean paste; finish with ground Sichuan pepper for the classic ‘ma’ numbness."),
    tips: [
      L("두부는 끓는 소금물에 살짝 데치면 부서짐이 줄어듭니다.", "Briefly blanch tofu in salted water so it holds shape."),
      L("전분물을 조금씩 넣어 소스 농도만 맞추세요.", "Add slurry gradually until the sauce just coats."),
      L("산초는 상에 내기 직전 뿌립니다.", "Dust Sichuan pepper right before serving."),
    ],
    substitutions: [
      L("고기 없이 버섯 다짐으로 채식 마파를 만들 수 있습니다.", "Finely chopped mushrooms replace meat for a vegetarian mapo."),
      L("순두부를 쓰면 더 부드러운 버전이 됩니다.", "Silken tofu makes an even softer bowl."),
    ],
    storage: L("냉장 2일. 약불에 천천히 데우고, 필요하면 물을 조금 추가합니다.", "Fridge 2 days. Reheat gently; loosen with a splash of water if needed."),
  },
  "general-tsos-chicken": {
    intro: L("제너럴 쏘 치킨은 미국 중식당에서 사랑받는 달콤매콤 튀김 닭요리입니다. 바삭한 닭에 감귤빛 소스가 코팅되고, 브로콜리나 흰밥과 함께 내는 경우가 많습니다. 집에서 만들 때는 소스의 당도와 식초의 산미 균형이 레스토랑 맛을 좌우합니다.", "General Tso’s chicken is the American-Chinese sweet-heat fried favorite—crisp chicken in a glossy citrus-tinged sauce, often with broccoli and rice. At home, balancing sugar and vinegar is what makes it taste like takeout."),
    tips: [
      L("닭은 전분 코팅 후 바로 튀겨 바삭함을 살리세요.", "Fry soon after coating so the crust stays crisp."),
      L("소스는 팬에서 끓여 농도를 맞춘 뒤 닭과 빠르게 버무립니다.", "Reduce sauce in the pan, then toss chicken quickly."),
      L("통깨·대파를 마지막에 뿌리면 향이 살아납니다.", "Finish with sesame seeds and scallion."),
    ],
    substitutions: [
      L("닭 대신 콜리플라워로 채식 버전을 만들 수 있습니다.", "Cauliflower makes a strong vegetarian stand-in."),
      L("오렌지 주스 조금을 넣으면 감귤 향이 강해집니다.", "A splash of orange juice boosts citrus notes."),
    ],
    storage: L("바로 섭취 권장. 냉장 1일, 에어프라이어로 재가열하면 비교적 바삭합니다.", "Best immediate. Fridge 1 day; air-fryer reheating restores some crunch."),
  },
  "xiao-long-bao": {
    intro: L("샤오롱바오는 육즙(수프)이 가득한 중국식 작은 찜만두입니다. 젤리처럼 굳힌 육수를 소에 넣어, 찜기에서 녹아 국물이 됩니다. 집에서 도전할 때는 피가 찢기지 않게 얇고 균일하게 밀고, 접을 때 주름을 모아 밀봉하는 연습이 필요합니다.", "Xiao long bao are soup dumplings: aspic melted into broth inside a thin wrapper. At home, roll even wrappers and pleat tightly so the soup stays sealed—practice is part of the pleasure."),
    tips: [
      L("육수 젤리는 충분히 차갑게 굳힌 뒤 소에 섞습니다.", "Chill aspic fully before mixing into the filling."),
      L("찜기 종이나 배추잎을 깔아 달라붙지 않게 합니다.", "Line the steamer with paper or cabbage leaves."),
      L("젓가락으로 집고 수저를 받쳐 국물이 새지 않게 드세요.", "Lift with chopsticks onto a spoon so broth doesn’t spill."),
    ],
    substitutions: [
      L("돼지고기 대신 새우·닭 다짐을 사용할 수 있습니다.", "Shrimp or chicken filling works."),
      L("시판 만두피로 시작해도 좋습니다(두께만 조심).", "Store-bought wrappers are fine for beginners."),
    ],
    storage: L("생만두는 냉동 1개월(김 안 나게 얼리기). 익힌 것은 냉장 1일, 재찜 권장.", "Freeze raw dumplings 1 month. Cooked: fridge 1 day; re-steam to reheat."),
  },
  "pork-dumplings": {
    intro: L("고기만두는 집에서 대량으로 빚어 냉동해 두면 언제든 찌거나 구워 먹을 수 있는 저장 식품입니다. 돼지고기에 배추·부추·생강으로 잡내를 잡고, 피를 단단히 밀봉하는 것이 핵심입니다. 간장·식초·고추기름 찍음 양념과 함께 내면 손님 접대용으로도 손색이 없습니다.", "Pork dumplings are make-ahead gold: fold a big batch, freeze, then steam or pan-fry anytime. Pork with napa, chives, and ginger stays juicy; tight seals matter. Serve with soy-vinegar-chili oil for guests or weeknights."),
    tips: [
      L("배추는 소금을 뿌려 숨 죽인 뒤 물기를 꼭 짜세요.", "Salt and squeeze napa so filling isn’t watery."),
      L("가장자리에 물을 바르고 꼭 눌러 밀봉합니다.", "Wet edges and press firmly to seal."),
      L("군만두는 중불에서 바닥을 먼저 바삭하게 만든 뒤 물을 넣고 뚜껑을 닫습니다.", "For potstickers: crisp the bottoms, then steam with a splash of water."),
    ],
    substitutions: [
      L("돼지고기 대신 닭·새우·두부 다짐을 사용할 수 있습니다.", "Chicken, shrimp, or crumbled tofu fillings work."),
      L("부추 대신 파·시금치도 가능합니다.", "Scallion or spinach can replace chives."),
    ],
    storage: L("생만두 냉동 2개월. 익힌 만두 냉장 2일. 얼린 것은 해동 없이 바로 조리.", "Freeze raw 2 months. Cooked fridge 2 days. Cook from frozen—no thaw needed."),
  },
  "spaghetti-carbonara": {
    intro: L("카르보나라는 계란· Pecorino·후추·구운 돼지고기(구안치알레나 판체타)만으로 만드는 로마의 단순한 파스타입니다. 크림을 넣지 않고, 면수 전분과 계란의 유화로 소스를 만듭니다. 불을 끈 상태에서 섞어야 스크램블이 되지 않습니다.", "Carbonara is Roman simplicity: egg, pecorino, pepper, and cured pork—no cream. Pasta water emulsifies the sauce. Toss off heat so the eggs silk instead of scramble."),
    tips: [
      L("면수 한 국자를 꼭 남겨 소스 농도를 맞추세요.", "Reserve a ladle of pasta water to adjust the sauce."),
      L("팬이 너무 뜨거우면 계란이 익습니다. 불에서 내려 섞으세요.", "If the pan is too hot, eggs scramble—pull off heat."),
      L("후추는 신선하게 갈아 넉넉히 넣습니다.", "Use freshly cracked black pepper generously."),
    ],
    substitutions: [
      L("구안치알레 대신 베이컨·판체타를 써도 됩니다.", "Bacon or pancetta can stand in for guanciale."),
      L("페코리노 대신 파르미지아노를 섞어 써도 좋습니다.", "Parmigiano can mix with or replace pecorino."),
    ],
    storage: L("바로 먹는 요리. 남으면 냉장 1일, 데울 때 면수나 물을 조금 넣어 풀어둡니다(식감은 떨어짐).", "Best immediate. Leftovers 1 day; loosen with water when reheating (texture suffers)."),
  },
  "pizza-margherita": {
    intro: L("마르게리타 피자는 도우·토마토·모차렐라·바질만으로 이탈리아 삼색을 담은 클래식입니다. 좋은 토마토 소스와 높은 오븐 온도가 집피자의 성패를 가릅니다. 도우를 냉장고에서 천천히 발효하면 풍미와 식감이 훨씬 좋아집니다.", "Margherita pizza is dough, tomato, mozzarella, and basil—Italy’s tricolor on a crust. Good sauce and high heat decide home-pizza success. A slow cold ferment deepens flavor and chew."),
    tips: [
      L("오븐·피자스톤을 가능한 한 높게 예열하세요(250°C+).", "Preheat oven/stone as hot as safely possible (480°F+)."),
      L("모차렐라는 물기를 짜고 올려 도우가 질지 않게 합니다.", "Drain mozzarella so the crust doesn’t sog."),
      L("바질은 오븐에서 나온 뒤 올리면 색이 유지됩니다.", "Add basil after baking to keep it green."),
    ],
    substitutions: [
      L("생모차렐라 대신 슈레드 모차렐라도 가능합니다.", "Low-moisture shredded mozzarella works fine."),
      L("글루텐프리 도우나 콜리플라워 크러스트로 대체 가능.", "GF or cauliflower crusts are options."),
    ],
    storage: L("실온 반나절, 냉장 2일. 스킬렛이나 오븐으로 재가열. 도우 생지는 냉동 1개월.", "Room temp half day, fridge 2 days. Reheat in skillet or oven. Freeze raw dough 1 month."),
  },
  "beef-bourguignon": {
    intro: L("뵈프 부르기뇽은 적포도주에 소고기를 오래 조린 프랑스 시골 요리입니다. 시간은 걸리지만 손기술보다 인내가 중요한 요리로, 주말 오후를 투자하면 저녁에 깊은 소스와 부드러운 고기를 얻을 수 있습니다. 으깬 감자나 빵과 잘 어울립니다.", "Beef bourguignon is French country beef braised long in red wine. It asks for patience more than technique—a weekend afternoon yields tender meat and a deep sauce. Serve with mash or crusty bread."),
    tips: [
      L("고기는 한 번에 많이 넣지 말고 겉면을 단단히 갈색으로 굽습니다.", "Brown beef in batches for a proper crust."),
      L("와인은 요리용으로도 마실 수 있는 것을 쓰세요.", "Use wine you’d drink—not ‘cooking wine’."),
      L("전날 만들어 다음날 데우면 맛이 더 깊어집니다.", "It tastes even better reheated the next day."),
    ],
    substitutions: [
      L("소고기 대신 짧은갈비·돼지 어깨살도 가능합니다.", "Short ribs or pork shoulder also braise well."),
      L("와인 없이 소고기 육수+발사믹으로 비슷하게 만들 수 있습니다.", "Beef stock plus balsamic can approximate without wine."),
    ],
    storage: L("냉장 4일, 냉동 3개월. 차갑게 식혀 지방을 걷어낸 뒤 보관하면 더 깔끔합니다.", "Fridge 4 days, freeze 3 months. Chill and skim fat before storing for a cleaner sauce."),
  },
  "lasagna-bolognese": {
    intro: L("볼로네제 라자냐는 고기 소스·베샤멜·파스타를 겹겹이 쌓아 굽는 이탈리아 가정식의 왕입니다. 소스를 충분히 줄여 수분이 과도하지 않게 하고, 베샤멜은 부드럽지만 흐르지 않을 정도로 농도를 맞춥니다. 한 팬으로 여럿이 나누기 좋아 모임·명절에 자주 등장합니다.", "Lasagna bolognese layers meat sauce, béchamel, and pasta—the king of Italian family bakes. Reduce the ragù so it isn’t watery; keep béchamel spoonable, not runny. One pan feeds a crowd for holidays and potlucks."),
    tips: [
      L("면이 생면이 아니면 살짝 데치거나 ‘no-boil’ 면 지침을 따르세요.", "Blanch dried sheets unless using no-boil noodles."),
      L("가장자리에도 소스를 충분히 발라 면이 딱딱해지지 않게 합니다.", "Sauce the edges so noodles don’t dry out."),
      L("오븐에서 꺼낸 뒤 15분 쉬어야 썰기 좋습니다.", "Rest 15 minutes after baking for cleaner slices."),
    ],
    substitutions: [
      L("고기 소스 대신 렌틸·버섯 라구로 채식 라자냐를 만드세요.", "Lentil or mushroom ragù makes a vegetarian lasagna."),
      L("베샤멜 대신 리코타 층을 쌓는 미국식도 가능합니다.", "Ricotta layers are a common American-style swap."),
    ],
    storage: L("냉장 4일, 조각내어 냉동 2개월. 오븐 또는 전자레인지로 데웁니다.", "Fridge 4 days; freeze portions 2 months. Reheat in oven or microwave."),
  },
  "cacio-e-pepe": {
    intro: L("카초에페페는 치즈와 후추, 면수만으로 만드는 로마 파스타의 정수입니다. 재료가 적은 만큼 유화 기술과 타이밍이 전부입니다. 불에서 내려 치즈를 녹이고, 면수로 크림처럼 풀어 후추의 향을 살리면 레스토랑 수준의 한 접시가 됩니다.", "Cacio e pepe is Roman minimalism: cheese, pepper, pasta water. With so few ingredients, emulsifying skill is everything. Off heat, melt cheese into a creamy sauce and let pepper perfume the bowl."),
    tips: [
      L("치즈는 아주 곱게 갈아야 덩어리지지 않습니다.", "Grate cheese ultra-fine so it melts smoothly."),
      L("팬을 너무 뜨겁게 두지 마세요—치즈가 뭉칩니다.", "Too-hot pans make cheese clump."),
      L("토스타한 후추를 면수와 먼저 만나 향을 우려냅니다.", "Bloom toasted pepper in a splash of pasta water first."),
    ],
    substitutions: [
      L("페코리노 없으면 파르미지아노+약간의 소금으로 대체.", "Parmigiano plus a pinch of salt can stand in."),
      L("톤나렐리 대신 스파게티·부카티니도 좋습니다.", "Spaghetti or bucatini work if you lack tonnarelli."),
    ],
    storage: L("즉시 섭취. 보관·재가열 시 소스가 분리되기 쉽습니다.", "Eat immediately—the sauce separates on reheating."),
  },
  "ratatouille": {
    intro: L("라тату이는 프로방스의 여름 채소 스튜로, 가지·주키니·토마토·피망을 올리브오일에 천천히 익힙니다. 굽거나 겹쳐 담으면 비주얼이 살아나고, 그냥 냄비에 끓여도 맛은 충분합니다. 따뜻하게 메인으로, 차게 곁들임으로도 활용도가 높습니다.", "Ratatouille is Provençal summer stew: eggplant, zucchini, tomato, and peppers slowly cooked in olive oil. Fancy layered bakes look beautiful; a simple pot version tastes just as good. Serve warm as a main or chilled as a side."),
    tips: [
      L("가지는 소금을 뿌려 쓴물·수분을 빼고 사용하세요.", "Salt eggplant to draw out bitterness and water."),
      L("채소를 한 번에 넣지 말고 단단한 것부터 익힙니다.", "Start firmer vegetables first."),
      L("허브(타임·바질)는 마지막에 넣어 향을 지킵니다.", "Add thyme and basil at the end for aroma."),
    ],
    substitutions: [
      L("피망 대신 회피망·토마토만으로도 가능합니다.", "Skip peppers and lean on tomato if needed."),
      L("허브 드 프로방스 시즈닝으로 향을 단순화할 수 있습니다.", "Herbes de Provence simplify the seasoning."),
    ],
    storage: L("냉장 5일, 냉동 2개월. 맛은 다음날 더 좋아지는 편입니다.", "Fridge 5 days, freeze 2 months. Flavor often improves overnight."),
  },
  "classic-cheeseburger": {
    intro: L("클래식 치즈버거는 좋은 소고기·녹은 치즈·토스트한 번만 있어도 성립하는 미국 컴포트푸드입니다. 패티는 과하게 만지지 말고, 센 불에서 겉면을 봉한 뒤 치즈를 녹입니다. 피클·양파·소스의 산미가 기름진 맛을 잘라 줍니다.", "A classic cheeseburger needs good beef, melted cheese, and a toasted bun. Handle the patty lightly, sear hard, and melt the cheese under a lid. Pickles, onion, and sauce cut the richness."),
    tips: [
      L("고기는 80/20 지방 비율이 육즙에 유리합니다.", "80/20 beef stays juicier."),
      L("패티 가운데를 살짝 누르면 부풀어 오르는 것을 막습니다.", "Dimple the center so it doesn’t dome."),
      L("번은 버터를 얇게 발라 구워 주세요.", "Butter-toast the buns."),
    ],
    substitutions: [
      L("소고기 대신 터키·식물성 패티도 가능합니다.", "Turkey or plant-based patties work."),
      L("아메리칸 치즈 대신 체다·스위스를 사용하세요.", "Cheddar or Swiss can replace American cheese."),
    ],
    storage: L("조립 전 패티만 냉장 2일·냉동 1개월. 조립된 버거는 바로 먹는 것이 좋습니다.", "Store cooked patties (unassembled) 2 days fridge / 1 month frozen. Assembled burgers are best immediate."),
  },
  "macaroni-and-cheese": {
    intro: L("맥앤치즈는 크림 소스에 파스타를 버무린 미국 가정의 대표 위안 음식입니다. 루(버터+밀가루)로 소스를 안정시키고, 치즈는 불을 낮춘 뒤 녹여 분리되지 않게 합니다. 오븐에 한 번 더 구우면 윗면이 고소하게 갈색이 됩니다.", "Mac and cheese is American comfort in a casserole: pasta in a stable cheese sauce built on a butter-flour roux. Melt cheese off high heat to avoid breaking; a quick bake browns the top."),
    tips: [
      L("치즈는 미리 갈아 두고, 소스 온도가 낮을 때 넣으세요.", "Pre-grate cheese and melt it into a cooler sauce."),
      L("면을 1분 덜 삶아 소스에서 마저 익힙니다.", "Undercook pasta by a minute so it finishes in the sauce."),
      L("머스터드 가루 한 꼬집이 치즈 맛을 살려 줍니다.", "A pinch of mustard powder sharpens cheese flavor."),
    ],
    substitutions: [
      L("체다 대신 그뤼예르·몬터레이잭 조합도 좋습니다.", "Gruyère or Monterey Jack blends beautifully."),
      L("글루텐프리 면·전분으로 루를 대체할 수 있습니다.", "GF pasta and a starch slurry can replace the roux."),
    ],
    storage: L("냉장 4일. 데울 때 우유를 조금 넣어 풀어둡니다. 냉동 가능하나 소스 질감이 달라질 수 있습니다.", "Fridge 4 days; reheat with a splash of milk. Freezes OK but sauce texture may change."),
  },
  "bbq-ribs": {
    intro: L("BBQ 립은 낮은 온도로 오래 익혀 뼈에서 고기가 부드럽게 떨어지는 미국식 바비큐의 하이라이트입니다. 드라이 럽으로 간을 하고, 호일로 감싸 ‘텍사스 스톨’를 넘긴 뒤 소스 글레이즈로 마무리하면 집에서도 스모키한 결과를 낼 수 있습니다.", "BBQ ribs are low-and-slow American barbecue—meat that yields from the bone. A dry rub, a foil wrap through the stall, and a final glaze get you close at home even without a smoker."),
    tips: [
      L("멤브레인(뒷면 막)을 제거해야 양념이 배고 식감이 좋습니다.", "Remove the membrane so rub penetrates and texture improves."),
      L("내부 온도보다 ‘벤드 테스트’로 익음을 확인하세요.", "Use the bend test more than a single temperature number."),
      L("소스는 마지막 20분만 발라 타지 않게 합니다.", "Sauce only in the last 20 minutes so sugar doesn’t burn."),
    ],
    substitutions: [
      L("베이비백 대신 스페어립·비프립도 가능(시간 조정).", "Spare ribs or beef ribs work with time adjusted."),
      L("오븐만으로도 가능—액체훈제액으로 스모크 향을 보강.", "Oven-only works; liquid smoke adds aroma."),
    ],
    storage: L("냉장 4일, 뼈째 또는 발라내어 냉동 2개월. 포일로 감싸 저온 오븐에 데웁니다.", "Fridge 4 days; freeze 2 months. Reheat wrapped in foil in a low oven."),
  },
  "buttermilk-pancakes": {
    intro: L("버터밀크 팬케이크는 산미가 있는 반죽이 베이킹소다와 반응해 폭신하게 부풀어 오르는 아침 메뉴입니다. 반죽을 과하게 섞지 않는 것이 핵심이고, 팬 온도를 일정하게 유지해야 겉면이 고르게 갈색이 됩니다. 메이플 시럽·베리·버터와 함께 일요일 브런치에 잘 맞습니다.", "Buttermilk pancakes rise fluffy when the tangy dairy meets baking soda. Don’t overmix, and keep the griddle steady for even browning. Maple, berries, and butter make an easy Sunday brunch."),
    tips: [
      L("반죽에 작은 덩어리가 남아 있어도 괜찮습니다.", "A few lumps in the batter are fine."),
      L("기포가 표면에서 터지기 시작할 때 뒤집으세요.", "Flip when bubbles break on the surface."),
      L("완성된 팬케이크는 저온 오븐에서 따뜻하게 보관합니다.", "Hold finished pancakes in a low oven."),
    ],
    substitutions: [
      L("버터밀크 대신 우유+식초/레몬즙으로 대체 가능합니다.", "Milk plus vinegar or lemon juice mimics buttermilk."),
      L("통밀가루를 절반 섞으면 고소해집니다.", "Swap half the flour for whole wheat for nuttiness."),
    ],
    storage: L("냉장 2일, 냉동 1개월(사이사이 페이퍼). 토스터·팬에 재가열.", "Fridge 2 days; freeze 1 month with paper between. Reheat in toaster or skillet."),
  },
  "texas-brisket": {
    intro: L("텍사스 브리스킷은 소금·후추 중심의 단순한 시즈닝과 긴 훈연으로 승부하는 바비큐의 정점입니다. 지방면을 위로 두고 낮은 온도로 ‘스톨’을 지나 95°C 근처까지 익히면 슬라이스했을 때 결대로 찢어집니다. 인내와 안정된 화력이 전부입니다.", "Texas brisket wins with salt-and-pepper simplicity and a long smoke. Fat-side management, patience through the stall, and a finish near 205°F yield slices that pull cleanly. Steady heat is the whole game."),
    tips: [
      L("두꺼운 부분의 온도를 기준으로 익힘을 판단하세요.", "Probe the thickest part for doneness."),
      L("호일/부처페이퍼 랩은 스톨을 넘는 데 도움이 됩니다.", "Wrap in foil or butcher paper to push through the stall."),
      L("슬라이스 전 최소 1시간 레스트가 필요합니다.", "Rest at least an hour before slicing."),
    ],
    substitutions: [
      L("훈연기 없으면 오븐+액체훈제액으로 비슷하게 접근할 수 있습니다.", "Oven plus liquid smoke is a workable home path."),
      L("통 브리스킷 대신 플랫만 사용하면 시간이 줄어듭니다.", "A flat-only cut shortens the cook."),
    ],
    storage: L("냉장 4일, 진공·포일 포장 냉동 3개월. 육수나 물을 조금 뿌려 저온 재가열.", "Fridge 4 days; freeze wrapped 3 months. Reheat low with a splash of broth."),
  },
  "pad-thai": {
    intro: L("팟타이는 타마린드·피시소스·パーム슈가의 새콤달콤한 소스에 쌀국수를 볶아 내는 태국의 대표 볶음면입니다. 불 조절과 면의 불림 시간이 중요하고, 숙주·땅콩·라임으로 마지막에 신선함을 더합니다. 집에서 만들 때는 재료를 미리 미장엔 해 두면 웍 타이밍을 놓치지 않습니다.", "Pad Thai tosses rice noodles in a tamarind–fish sauce–palm sugar sauce. Soak time and wok heat matter; sprouts, peanuts, and lime finish fresh. Mise en place keeps the stir-fry from overcooking."),
    tips: [
      L("면은 완전히 익히지 말고 반투명할 때 건져 웍에서 마무리합니다.", "Soak noodles until pliable, finish cooking in the wok."),
      L("소스를 미리 섞어두면 단짠신 균형이 안정됩니다.", "Premix the sauce for consistent sweet-salty-sour."),
      L("숙주는 불을 끄기 직전에 넣어 아삭함을 남기세요.", "Add sprouts off heat so they stay crunchy."),
    ],
    substitutions: [
      L("타마린드 대신 라임즙+황설탕으로 비슷하게 가능합니다.", "Lime juice plus brown sugar can approximate tamarind."),
      L("새우·두부·닭 중 선호 단백질을 고르세요.", "Choose shrimp, tofu, or chicken as you like."),
    ],
    storage: L("냉장 2일. 팬에 물을 조금 넣어 볶아 데웁니다. 숙주·땅콩은 따로 보관.", "Fridge 2 days; re-fry with a splash of water. Keep sprouts and peanuts separate."),
  },
  "chicken-tikka-masala": {
    intro: L("치킨 티카 마살라는 요거트에 재운 닭을 구운 뒤 토마토·크림 커리 소스에 담근, 영국-인도 커리의 대중적 얼굴입니다. 스모키한 티카와 부드러운 소스가 대비되고, 난·쌀과 함께 내면 포만감 있는 저녁이 됩니다. 향신료를 볶아 향을 피우는 단계가 맛의 깊이입니다.", "Chicken tikka masala pairs yogurt-marinated grilled chicken with a tomato-cream curry—the popular British-Indian classic. Smoky tikka meets a silky sauce; serve with naan or rice. Blooming spices in oil builds depth."),
    tips: [
      L("닭은 최소 2시간(가능하면 하룻밤) 재우세요.", "Marinate chicken at least 2 hours, overnight if possible."),
      L("가람마살라는 마지막에 넣어 향을 살립니다.", "Add garam masala at the end for aroma."),
      L("소스가 너무 시면 크림·약간의 설탕으로 맞춥니다.", "If the sauce is sharp, round with cream or a pinch of sugar."),
    ],
    substitutions: [
      L("생크림 대신 코코넛밀크로 유제품 없는 버전이 가능합니다.", "Coconut milk replaces cream for dairy-light versions."),
      L("닭 대신 병아리콩·판니어를 넣어도 좋습니다.", "Chickpeas or paneer make strong swaps."),
    ],
    storage: L("냉장 3일, 냉동 2개월. 약불에 데우며 필요 시 물을 추가합니다.", "Fridge 3 days; freeze 2 months. Reheat gently with a splash of water."),
  },
  "vietnamese-pho": {
    intro: L("쌀국수 포는 뼈를 오래 고아 만든 맑고 향긋한 국물에 쌀국수와 고기를 올린 베트남의 영혼 음식입니다. 스타아니스·계피·생강·양파를 구워 향을 내고, 숙주·허브·라임·칠리로 각자 취향껏 마무리합니다. 국물 시간을 아끼지 않는 것이 집포의 비결입니다.", "Phở is Vietnam’s aromatic bone broth over rice noodles and meat. Char ginger and onion with star anise and cinnamon, then finish bowls with herbs, lime, and chili. Time in the stockpot is the home-phở secret."),
    tips: [
      L("처음 끓을 때 거품을 걷어 국물을 맑게 유지하세요.", "Skim early foam for a clear broth."),
      L("향신료는 볶거나 구워 넣고, 티백·망에 담으면 건지기 쉽습니다.", "Toast spices; keep them in a sachet for easy removal."),
      L("고수는 상에 내기 직전 올립니다.", "Add herbs only at serving."),
    ],
    substitutions: [
      L("소뼈 대신 닭뼈로 포 가(phở gà)를 만들 수 있습니다.", "Chicken bones make phở gà."),
      L("육수 큐브로 시간을 줄이되, 생강·양파 구이는 유지하세요.", "Stock cubes save time—still char ginger and onion."),
    ],
    storage: L("국물만 냉장 4일·냉동 3개월. 면·고명은 따로 보관하고 먹을 때 조립합니다.", "Broth alone: fridge 4 days / freeze 3 months. Store noodles and garnishes separately; assemble to serve."),
  },
  "thai-green-curry": {
    intro: L("타이 그린 커리는 초록 칠리 페이스트와 코코넛밀크가 만드는 향긋하고 매콤한 커리입니다. 페이스트를 코코넛 크림에서 먼저 볶아 향을 피운 뒤 밀크를 더하고, 단백질과 채소를 재빨리 익힙니다. 타이바질과 피시소스가 마지막에 향과 간을 완성합니다.", "Thai green curry blends green chili paste with coconut milk into a fragrant, spicy stew. Fry the paste in coconut cream first, then add milk, protein, and quick-cooking vegetables. Thai basil and fish sauce finish the bowl."),
    tips: [
      L("캔 위쪽의 진한 코코넛 크림으로 페이스트를 볶으세요.", "Fry paste in the thick cream from the top of the can."),
      L("채소는 너무 오래 끓이지 말아 아삭함을 남기세요.", "Don’t overcook vegetables—keep some bite."),
      L("너무 매우면 코코넛밀크·설탕으로 완화합니다.", "Tame heat with more coconut milk or a pinch of sugar."),
    ],
    substitutions: [
      L("시판 그린커리 페이스트로 충분합니다(브랜드별 매운맛 차이).", "Store-bought paste is fine—brands vary in heat."),
      L("피시소스 대신 간장+소금으로 비건화할 수 있습니다.", "Soy plus salt can veganize the seasoning."),
    ],
    storage: L("냉장 3일. 코코넛 소스는 분리될 수 있으니 저어 가며 데웁니다.", "Fridge 3 days. Coconut sauce may separate—stir while reheating."),
  },
  "butter-chicken": {
    intro: L("버터 치킨(무르그 마카니)은 토마토·버터·크림이 어우러진 부드러운 북인도 커리입니다. 티카처럼 재운 닭을 구워 소스에 담그면 레스토랑 풍의 풍미가 납니다. 매운맛보다 고소하고 부드러운 편이라 커리에 입문하기 좋은 요리입니다.", "Butter chicken (murgh makhani) is a silky North Indian tomato-butter-cream curry. Tikka-style grilled chicken dropped into the sauce tastes restaurant-close. Milder and richer than many curries—great for beginners."),
    tips: [
      L("카슈미르 고춧가루가 색을 선명하게 만듭니다.", "Kashmiri chili powder gives bright color without extreme heat."),
      L("버터는 마지막에 넣어 향을 남기세요.", "Mount with butter at the end for aroma."),
      L("핸드블렌더로 소스를 곱게 풀면 식감이 고급스러워집니다.", "Blend the sauce smooth for a restaurant texture."),
    ],
    substitutions: [
      L("생크림 대신 그릭요거트+우유로 가볍게 만들 수 있습니다.", "Greek yogurt plus milk lightens the cream."),
      L("닭 대신 판니어·병아리콩도 잘 맞습니다.", "Paneer or chickpeas are excellent swaps."),
    ],
    storage: L("냉장 3일, 냉동 2개월. 약불에서 저어 가며 데웁니다.", "Fridge 3 days; freeze 2 months. Reheat gently while stirring."),
  },
  "tonkatsu": {
    intro: L("돈카츠는 두툼한 돼지고기에 빵가루를 입혀 바삭하게 튀긴 일본의 대표 돈가스입니다. 고기 가운데를 칼등으로 두드려 두께를 고르게 하고, 계란물·빵가루를 단단히 코팅한 뒤 중간 온도에서 천천히 익힙니다. 양배추 채·소스·밥과 세트로 내면 정식이 완성됩니다.", "Tonkatsu is Japan’s crisp panko-fried pork cutlet. Pound for even thickness, bread firmly, and fry at a moderate temperature so the crust browns as the center cooks. Serve with shredded cabbage, sauce, and rice."),
    tips: [
      L("빵가루는 생빵가루(파anko)가 가장 바삭합니다.", "Fresh panko gives the lightest crunch."),
      L("튀긴 뒤 망 위에 세워 두면 밑면이 축축해지지 않습니다.", "Rest on a wire rack so the bottom doesn’t steam."),
      L("썰기 전 1분 쉬어 육즙을 가둡니다.", "Rest one minute before slicing to keep juices in."),
    ],
    substitutions: [
      L("돼지 대신 닭(치킨카츠)·두부로 만들 수 있습니다.", "Chicken or tofu make fine katsu variations."),
      L("에어프라이어·오븐으로도 가능(오일 스프레이 필수).", "Air fryer or oven works with oil spray."),
    ],
    storage: L("바로 섭취 권장. 냉장 1일, 에어프라이어로 재바삭. 소스·양배추는 따로.", "Best fresh. Fridge 1 day; re-crisp in an air fryer. Keep sauce and cabbage separate."),
  },
  "strawberry-banana-smoothie": {
    intro: L("딸기 바나나 스무디는 가장 실패 없는 블렌드 조합입니다. 냉동 과일을 쓰면 아이스크림처럼 걸쭉해지고, 요거트나 우유가 바디감을 더합니다. 아침 대용이나 운동 후 간식으로 2분이면 준비되는 실질적인 레시피입니다.", "Strawberry-banana is the no-fail smoothie. Frozen fruit makes it milkshake-thick; yogurt or milk adds body. Ready in two minutes for breakfast or a post-workout snack."),
    tips: [
      L("냉동 딸기+덜 익은 바나나가 가장 진한 질감을 냅니다.", "Frozen berries plus a just-ripe banana give the best texture."),
      L("너무 되면 액체는 조금씩만 추가하세요.", "Add liquid sparingly if it’s too thick."),
      L("꿀·메이플은 과일 단맛이 약할 때만 넣습니다.", "Sweeten only if the fruit isn’t sweet enough."),
    ],
    substitutions: [
      L("우유 대신 아몬드·오트밀크를 사용하세요.", "Almond or oat milk works."),
      L("그릭요거트 대신 실큰두부로 단백질을 보강할 수 있습니다.", "Silken tofu boosts protein instead of yogurt."),
    ],
    storage: L("바로 마시는 것이 최선. 밀폐 냉장 24시간, 마시기 전 흔들기. 냉동하면 나중에 재블렌드.", "Best immediate. Fridge 24 hours sealed—shake before drinking. Freeze and re-blend later if needed."),
  },
  "green-detox-smoothie": {
    intro: L("그린 디톡스 스무디는 케일·시금치 같은 잎채소에 과일 단맛과 레몬의 상큼함을 더해 마시기 편하게 만든 블렌드입니다. ‘디톡스’라는 이름보다, 바쁜 날 채소를 한 잔에 챙기는 실용적인 습관에 가깝습니다. 생강·사과가 풀 맛을 부드럽게 가려 줍니다.", "A green ‘detox’ smoothie is really a practical way to drink leafy vegetables with fruit sweetness and lemon. Ginger and apple soften the grassy notes on busy mornings."),
    tips: [
      L("잎채소를 먼저 액체와 블렌드한 뒤 과일을 넣으면 더 곱습니다.", "Blend greens with liquid first, then add fruit."),
      L("케일이 강하면 시금치 비율을 높이세요.", "If kale is strong, increase spinach."),
      L("얼음을 넣으면 희석되니 냉동 과일로 두께를 맞추세요.", "Prefer frozen fruit over ice to avoid dilution."),
    ],
    substitutions: [
      L("케일 대신 로메인·청경채도 가능합니다.", "Romaine or bok choy can replace kale."),
      L("사과 대신 배·파인애플로 단맛을 바꾸세요.", "Pear or pineapple can change the sweetness."),
    ],
    storage: L("산화가 빨라 당일 섭취. 밀폐 냉장 12–24시간, 색이 변해도 흔들어 마십니다.", "Best same day. Sealed fridge 12–24 hours; shake even if color shifts."),
  },
  "matcha-mango-smoothie": {
    intro: L("말차 망고 스무디는 말차의 씁쓸한 녹차 향과 망고의 열대 단맛이 대비되는 조합입니다. 말차는 가루가 뭉치지 않게 먼저 소량 액체에 풀어 넣고, 냉동 망고로 샤벳 같은 질감을 냅니다. 오후의 가벼운 디저트 음료로도 좋습니다.", "Matcha-mango pairs grassy tea bitterness with tropical sweetness. Whisk matcha into a little liquid first to avoid clumps; frozen mango makes a sherbet texture. Lovely as an afternoon dessert drink."),
    tips: [
      L("요리용 말차보다 마실 수 있는 등급이 향이 좋습니다.", "Ceremonial or latte-grade matcha tastes cleaner than cooking grade."),
      L("말차가 강하면 망고·바나나를 늘리세요.", "If matcha is strong, add more mango or banana."),
      L("유제품/두유와 잘 어울립니다.", "Dairy or soy milk both pair well."),
    ],
    substitutions: [
      L("망고 대신 복숭아·파인애플도 잘 맞습니다.", "Peach or pineapple can replace mango."),
      L("말차 대신 녹차 가루+스피룰리나로 색만 비슷하게 낼 수 있습니다(맛은 다름).", "Green tea powder alters flavor if matcha is unavailable."),
    ],
    storage: L("말차 향이 빨리 사라지니 즉시 섭취. 냉장 당일 한함.", "Matcha aroma fades fast—drink immediately; same-day fridge only."),
  },
  "dragon-fruit-smoothie": {
    intro: L("용과(드래곤프루트) 스무디는 비주얼이 먼저 시선을 끄는 분홍·보라빛 블렌드입니다. 과육 자체는 담백해서 바나나·베리·요거트와 함께하면 맛과 질감이 살아납니다. 인스타그래머블한 아침 한 잔을 원할 때 좋은 선택입니다.", "Dragon fruit smoothies win on color first—pink or purple in the glass. The fruit is mild, so banana, berries, and yogurt bring flavor and body. A bright breakfast when you want something photogenic."),
    tips: [
      L("냉동 용과 큐브가 색과 두께를 가장 잘 살립니다.", "Frozen dragon-fruit cubes give the best color and thickness."),
      L("화이트 용과보다 레드/핑크 품종이 색이 선명합니다.", "Pink/red varieties look more vivid than white."),
      L("레몬·라임 조금이 담백함을 잡아 줍니다.", "A squeeze of lemon or lime brightens the mild fruit."),
    ],
    substitutions: [
      L("용과 대신 피타야 분말+얼음으로 색을 보강할 수 있습니다.", "Pitaya powder plus ice can boost color."),
      L("베리 믹스를 넣으면 맛이 더 풍부해집니다.", "Mixed berries deepen flavor."),
    ],
    storage: L("색이 빨리 탁해질 수 있어 즉시 섭취. 밀폐 냉장 12시간.", "Color dulls quickly—drink soon; sealed fridge up to 12 hours."),
  },
  "mushroom-risotto": {
    intro: L("버섯 리조또는 아르보리오 쌀에 육수를 조금씩 더해 크림처럼 저어 가는 이탈리아 북부의 편안한 요리입니다. 버섯을 먼저 강하게 볶아 수분을 날리면 감칠맛이 진해지고, 파르미지아노와 버터로 만테카투라(마무리 유화)를 합니다. 손님 초대용으로도 근사한 채식 메인입니다.", "Mushroom risotto is Northern Italian comfort: arborio rice stirred with ladlefuls of stock until creamy. Hard-sear mushrooms first for savoriness, then finish with butter and Parmigiano. An elegant vegetarian main for guests."),
    tips: [
      L("육수는 항상 뜨거운 상태로 옆에 두세요.", "Keep stock simmering so the rice temperature never drops."),
      L("쌀을 와인으로 먼저 적셔 호분 냄새를 날립니다.", "Toast rice and deglaze with wine before adding stock."),
      L("알덴테에서 불을 끄고 치즈·버터를 넣습니다.", "Stop at al dente, then mount with cheese and butter."),
    ],
    substitutions: [
      L("아르보리오 대신 카나롤리·현미(시간↑)도 가능합니다.", "Carnaroli works; brown rice needs more time."),
      L("채소 육수로 비건화하고 버터 대신 올리브오일을 쓰세요.", "Vegetable stock and olive oil make it vegan-friendly."),
    ],
    storage: L("리조또는 바로 먹을 때 최고. 남으면 냉장 2일—아란치니로 재탄생 추천.", "Best immediate. Leftovers fridge 2 days—excellent turned into arancini."),
  },
  "chickpea-curry": {
    intro: L("병아리콩 커리는 캔 병아리콩과 토마토·향신료만으로도 깊은 맛을 낼 수 있는 채식 주식입니다. 양파를 충분히 캐러멜화하고 향신료를 기름에 볶으면 단순 재료가 레스토랑 커리처럼 변합니다. 쌀·난과 함께 내면 가성비 최고의 한 상입니다.", "Chickpea curry turns canned legumes, tomato, and spices into a hearty vegetarian main. Deeply browned onions and bloomed spices make pantry ingredients taste slow-cooked. Serve with rice or naan."),
    tips: [
      L("양파를 진한 갈색까지 볶는 것이 단맛의 핵심입니다.", "Brown onions deeply—that sweetness is the base."),
      L("토마토를 오일에서 분리될 때까지 볶으면 신맛이 부드러워집니다.", "Cook tomatoes until the oil separates for a rounder sauce."),
      L("마지막에 레몬·고수로 신선함을 더하세요.", "Finish with lemon and cilantro."),
    ],
    substitutions: [
      L("병아리콩 대신 렌틸·강낭콩도 가능합니다.", "Lentils or kidney beans work."),
      L("코코넛밀크를 넣으면 남인도풍으로 부드러워집니다.", "Coconut milk softens it toward a South Indian profile."),
    ],
    storage: L("냉장 4일, 냉동 3개월. 다음날 맛이 더 좋아지는 편입니다.", "Fridge 4 days; freeze 3 months. Often tastes better the next day."),
  },
  "eggplant-parmesan": {
    intro: L("에그플랜트 파마산은 구운(또는 튀긴) 가지에 토마토 소스와 치즈를 겹쳐 구운 이탈리아계 미국 가정식입니다. 가지의 수분을 빼고 굽면 기름이 덜 흡수되고 식감이 탄탄합니다. 파스타 없이 메인으로, 또는 영웅 샌드위치 속으로도 활용됩니다.", "Eggplant Parmesan layers roasted or fried eggplant with tomato sauce and cheese—Italian-American comfort. Salting and roasting reduces oil soak-up. Serve as a main or tuck into a hero sandwich."),
    tips: [
      L("가지에 소금을 뿌려 30분 둔 뒤 물기를 닦으세요.", "Salt eggplant 30 minutes, then pat dry."),
      L("튀김 대신 오븐 구이면 훨씬 가볍습니다.", "Oven-roasting is lighter than frying."),
      L("라자냐처럼 15분 레스트 후 자르면 형태가 유지됩니다.", "Rest 15 minutes like lasagna before slicing."),
    ],
    substitutions: [
      L("모차렐라·파마산 조합이 기본, 프로볼로네를 섞어도 좋습니다.", "Mozzarella and Parmesan are classic; provolone mixes well."),
      L("글루텐프리 빵가루로 코팅할 수 있습니다.", "GF breadcrumbs work for the coating."),
    ],
    storage: L("냉장 4일, 조각 냉동 2개월. 오븐에 데워 치즈를 다시 녹입니다.", "Fridge 4 days; freeze portions 2 months. Reheat in the oven to re-melt cheese."),
  },
  "paneer-tikka": {
    intro: L("판니어 티카는 요거트·향신료에 재운 인도 치즈를 꼬치에 꿰어 구운 전채·안주입니다. 판니어가 단단해 형태가 유지되고, 탄두리 향의 스모키함이 포인트입니다. 민트 처트니와 양파와 함께 내면 맥주·라씨와도 잘 맞습니다.", "Paneer tikka is yogurt-and-spice marinated Indian cheese grilled on skewers. Paneer holds its shape; a touch of smoke makes it sing. Serve with mint chutney and onion alongside beer or lassi."),
    tips: [
      L("요거트는 행주로 물기를 조금 빼면 양념이 잘 붙습니다.", "Hang yogurt briefly so the marinade clings."),
      L("고온 오븐·에어프라이어·그릴 모두 가능합니다.", "Use a hot oven, air fryer, or grill."),
      L("너무 오래 구우면 판니어가 단단해지니 표면만 그을리게 합니다.", "Don’t overcook—just char the exterior."),
    ],
    substitutions: [
      L("판니어 대신 두부를 쓰면 더 부드러운 버전이 됩니다.", "Extra-firm tofu substitutes for paneer."),
      L("고추 가루 양으로 매운맛을 조절하세요.", "Dial chili powder for heat preference."),
    ],
    storage: L("냉장 2일. 에어프라이어·오븐으로 재가열. 소스에 담근 채 보관하지 마세요.", "Fridge 2 days. Reheat in air fryer or oven. Don’t store swimming in sauce."),
  },
  "veggie-buddha-bowl": {
    intro: L("비건·채식 보울의 기본형은 곡물·단백질·구운 채소·생채소·소스를 균형 있게 담는 것입니다. 부처 보울은 남은 냉장고 재료를 예쁘게 소진하는 방법이기도 합니다. 소스(타히니·요거트·간장 베이스)만 확실하면 매주 조합을 바꿔도 질리지 않습니다.", "A Buddha bowl balances grain, protein, roasted veg, raw crunch, and a strong sauce. It’s also the prettiest way to use fridge leftovers. Keep a reliable tahini, yogurt, or soy dressing and remix weekly."),
    tips: [
      L("따뜻한 요소와 차가운 요소를 섞어 식감을 대비시키세요.", "Contrast warm and cold components."),
      L("소스는 너무 되기 전에 물·레몬으로 풀어둡니다.", "Thin thick sauces with water or lemon."),
      L("곡물·콩은 미리 대량으로 준비해 두면 조립이 빠릅니다.", "Batch-cook grains and beans for faster assembly."),
    ],
    substitutions: [
      L("퀴노아·현미·쿠스쿠스 중 선호 곡물을 고르세요.", "Use quinoa, brown rice, or couscous."),
      L("병아리콩 대신 두부·템페·계란도 가능합니다.", "Tofu, tempeh, or egg can replace chickpeas."),
    ],
    storage: L("구성 요소를 따로 냉장 3–4일. 소스는 별도 용기. 먹을 때 조립합니다.", "Store components separately 3–4 days; sauce in its own jar. Assemble when eating."),
  },
};

export const ENRICHED_SLUGS = Object.keys(recipeEnrichments);
