import type { LocalizedString } from "@/i18n/types";
import type { RecipeEnrichment } from "./recipe-enrichments";

const L = (ko: string, en: string): LocalizedString => ({ ko, en });

/**
 * Deep original enrichment for 15 flagship recipes (audit upgrade).
 * Merged on top of base recipeEnrichments — adds why-this-version detail,
 * tested notes, common mistakes, timing cues, and plating.
 */
export const recipeFlagships: Record<string, RecipeEnrichment> = {
  "gochujang-tofu-bibimbap": {
    intro: L(
      "이 버전은 고기를 빼고도 포만감이 남도록 두부를 고추장에 10분 재운 뒤 팬에서 캐러멜화하는 집밥형 비빔밥입니다. 채소는 한꺼번에 볶지 않고 당근·숙주·시금치를 1–2분씩 따로 볶아 색과 아삭함을 지킵니다. 밥 2컵(생쌀 기준, 약 4인분)·두부 400g(14oz)·고추장 3큰술이 기준 분량이며, 주말 브런치에도 그릇만 구역별로 담으면 손님용으로 통합니다.",
      "This home version skips meat but stays filling: tofu marinates 10 minutes in gochujang, then sears until the edges caramelize. Vegetables cook in separate 1–2 minute batches (carrot, sprouts, spinach) so colors stay bright. Baseline: 2 cups rice (uncooked, ~4 servings), 400 g / 14 oz tofu, 3 tbsp gochujang. Plated in sections, it also works as weekend brunch for guests.",
    ),
    tips: [
      L("두부는 키친타월로 2–3분 눌러 물기를 뺀 뒤 구워야 부서지지 않고 갈변이 납니다.", "Press tofu 2–3 minutes in towels before searing so it browns instead of steaming."),
      L("고추장 소스가 너무 되면 물 1작은술, 너무 짜면 꿀 ½큰술로 균형을 맞춥니다.", "If the glaze is pasty, loosen with 1 tsp water; if harsh, round with ½ tbsp honey."),
      L("타이밍: 밥이 뜸 들 때 두부 재우기 → 두부 굽기(6–8분) → 채소 볶기(합 6분) → 담기.", "Timing cue: while rice rests, marinate tofu → sear 6–8 min → veg ~6 min total → plate."),
      L("달걀프라이는 그릇에 담기 직전에 구워 노른자가 흐르는 상태를 유지하세요.", "Fry the egg last so the yolk stays runny for mixing."),
    ],
    commonMistakes: [
      L("젖은 두부를 바로 굽기 — 팬에 물이 고여 양념이 벗겨집니다.", "Searing wet tofu — water pools and the glaze slides off."),
      L("채소를 한 팬에 몰아넣기 — 색이 탁해지고 숨이 과하게 죽습니다.", "Crowding all vegetables at once — colors dull and textures turn soggy."),
      L("뜨거운 밥 위에 바로 비비기 — 채소가 숨이 죽어 아삭함이 사라집니다. 밥은 살짝 식힌 뒤.", "Mixing on piping-hot rice — vegetables wilt. Let rice steam off first."),
    ],
    plating: L(
      "넓은 그릇에 밥을 낮게 깔고, 시금치·당근·숙주·두부를 시계방향으로 구역을 나눠 올립니다. 가운데에 달걀프라이, 가장자리에 참기름 ½작은술과 통깨. 비비기 전에 사진 찍기 좋은 구성입니다.",
      "Spread rice low in a wide bowl; arrange spinach, carrot, sprouts, and tofu in clock-face sections. Center a fried egg; finish with ½ tsp sesame oil and sesame seeds at the rim. Mix only after you’ve shown off the colors.",
    ),
    substitutions: [
      L("두부 대신 느타리·새송이 200g 또는 템페.", "Swap tofu for 200 g oyster/king oyster mushrooms or tempeh."),
      L("현미밥·퀴노아로 바꿔도 비빔 질감이 잘 나옵니다.", "Brown rice or quinoa also mix well."),
      L("달걀 대신 아보카도 ½개를 슬라이스해 올립니다.", "Half an avocado, sliced, instead of a fried egg."),
    ],
    storage: L(
      "밥·채소·두부를 따로 밀폐용기에 담아 냉장 2일. 먹을 때 밥만 데워 비빕니다. 냉동은 비추천(두부와 채소 식감이 무너짐).",
      "Store rice, vegetables, and tofu separately up to 2 days refrigerated. Reheat only the rice before mixing. Freezing is not recommended — tofu and veg textures collapse.",
    ),
  },
  "kimchi-jjigae": {
    intro: L(
      "묵은김치의 산미가 국물에 녹아야 하는 집밥 찌개입니다. 이 버전은 돼지고기 200g을 먼저 2–3분 볶아 기름을 내고, 김치 2컵과 고춧가루 1큰술을 5분 더 볶아 신내를 날린 뒤 육수 3컵으로 12–15분 끓입니다. 두부는 마지막 3–4분에만 넣어 형태를 지킵니다.",
      "This stew needs aged kimchi’s acidity in the broth. Our home method: sauté 200 g pork 2–3 minutes, fry 2 cups kimchi with 1 tbsp gochugaru for 5 minutes to soften the sharp smell, then simmer in 3 cups stock 12–15 minutes. Tofu goes in only for the last 3–4 minutes so it stays intact.",
    ),
    tips: [
      L("김치는 최소 2주 이상 익은 묵은김치. 겉절이로는 국물이 약합니다.", "Use well-fermented kimchi (2+ weeks); fresh kimchi makes a weak broth."),
      L("김치국물 2–3큰술을 볶을 때 넣으면 감칠맛이 진해집니다.", "Add 2–3 tbsp kimchi brine while frying for deeper flavor."),
      L("타이밍: 볶기 8분 → 끓이기 12–15분 → 두부 3–4분. 총 약 30분.", "Timing: fry ~8 min → simmer 12–15 → tofu 3–4. About 30 minutes total."),
    ],
    commonMistakes: [
      L("생김치를 그대로 끓이기 — 국물이 밋밋하고 신맛이 거칠습니다.", "Boiling fresh kimchi as-is — thin broth and harsh sourness."),
      L("두부를 처음부터 넣기 — 오래 끓이면 부서집니다.", "Adding tofu at the start — it falls apart after a long simmer."),
      L("센 불만 유지하기 — 국물이 줄고 짜집니다. 끓인 뒤엔 중약불.", "Staying on high heat — broth reduces and turns salty. Drop to a gentle simmer."),
    ],
    plating: L(
      "뚝배기나 낮은 냄비 그대로 상에 올리고, 대파를 마지막에 뿌려 보글보글하는 상태로 냅니다. 밥·계란후라이·김치를 곁들이면 한 상입니다.",
      "Serve bubbling in a ttukbaegi or low pot with scallion scattered at the end. Pair with rice, a fried egg, and extra kimchi.",
    ),
    substitutions: [
      L("돼지고기 대신 참치캔 1개, 스팸 150g, 또는 버섯 200g.", "Use 1 can tuna, 150 g spam, or 200 g mushrooms instead of pork."),
      L("육수 대신 물 3컵 + 다시다 ½작은술.", "Water 3 cups plus ½ tsp dashida if you lack stock."),
    ],
    storage: L(
      "식혀 밀폐 후 냉장 3일. 다시 끓여 데웁니다. 두부는 데울 때 살살.",
      "Cool, refrigerate up to 3 days, and reboil to reheat. Handle tofu gently so it doesn’t fall apart.",
    ),
  },
  "bulgogi": {
    intro: L(
      "얇은 등심 500g(약 1.1lb)을 간장 4큰술·설탕 2큰술·참기름 1큰술·마늘·양파에 최소 30분(가능하면 2시간) 재워 센 불에 1–2분씩 나눠 굽는 집밥 BBQ입니다. 배나 양파의 단맛이 육질을 부드럽게 하고, 팬에 한꺼번에 넣지 않는 것이 이 버전의 핵심입니다.",
      "Thin ribeye (500 g / 1.1 lb) marinates at least 30 minutes (up to 2 hours) in 4 tbsp soy, 2 tbsp sugar, 1 tbsp sesame oil, garlic, and onion, then sears hot in 1–2 minute batches. Pear or onion sugar tenderizes; cooking in batches — not crowding — is what makes this version brown instead of stew.",
    ),
    tips: [
      L("고기는 살짝 언 상태(15–20분 냉동)에서 썰면 2–3mm로 균일하게 썰립니다.", "Slice beef after 15–20 minutes in the freezer for even 2–3 mm cuts."),
      L("양념에 간 배 2큰술을 넣으면 육질이 더 부드러워집니다.", "2 tbsp grated pear in the marinade makes the beef especially tender."),
      L("타이밍: 재우기 30분+ → 배치당 1–2분 볶기 → 양념 줄이기 1분.", "Timing: marinate 30+ min → 1–2 min per batch → 1 min to glaze."),
    ],
    commonMistakes: [
      L("고기를 한 번에 몰아넣기 — 물이 나와 삶아지듯 익습니다.", "Crowding the pan — meat stews in its own liquid."),
      L("두꺼운 고기 — 양념이 안 배이고 질겨집니다. 얇게.", "Thick slices — marinade won’t penetrate and chew toughens."),
      L("약한 불 — 캐러멜이 안 생깁니다. 팬이 뜨거울 때 넣으세요.", "Low heat — no caramelization. Wait until the pan is ripping hot."),
    ],
    plating: L(
      "접시에 고기를 얇게 펼치고 통깨·대파를 뿌립니다. 상추·깻잎·쌈장·밥을 옆에 두면 가족 식탁의 주인공이 됩니다.",
      "Fan the beef thinly; finish with sesame seeds and scallion. Set lettuce, perilla, ssamjang, and rice beside it for wraps.",
    ),
    substitutions: [
      L("소고기 대신 닭 허벅지살 500g 또는 포토벨로 4개.", "Chicken thigh 500 g or 4 portobello caps."),
      L("설탕 대신 꿀 1½큰술 또는 메이플 시럽.", "Honey 1½ tbsp or maple instead of sugar."),
    ],
    storage: L(
      "익힌 불고기 냉장 3일. 재운 생고기 냉장 1일 또는 양념과 함께 냉동 1개월.",
      "Cooked bulgogi keeps 3 days refrigerated. Raw marinated beef: 1 day fridge or 1 month frozen in marinade.",
    ),
  },
  "japchae": {
    intro: L(
      "당면 200g을 6–8분 삶아 찬물에 헹군 뒤, 시금치·당근·버섯을 각각 볶아 간장 3큰술·참기름 1큰술로 버무리는 잔치·도시락용 잡채입니다. 면을 과하게 익히지 않고, 채소를 마지막에 합치는 것이 이 버전의 식감 비결입니다.",
      "Japchae for celebrations and lunchboxes: boil 200 g sweet-potato noodles 6–8 minutes, rinse cold, then toss with separately sautéed spinach, carrot, and mushrooms plus 3 tbsp soy and 1 tbsp sesame oil. Slightly undercooked noodles and late mixing keep the chew and color.",
    ),
    tips: [
      L("당면은 ‘살짝 덜 익은’ 느낌이 알맞습니다. 양념 후 조금 더 불습니다.", "Undercook noodles slightly — they swell after dressing."),
      L("채소는 숨만 죽이고(각 2–3분), 당면과 큰 볼에서 손으로 살살.", "Wilt vegetables lightly (2–3 min each); toss gently by hand in a large bowl."),
      L("차게 먹을 때는 참기름 ½큰술을 더 둘러 주세요.", "For cold servings, add an extra ½ tbsp sesame oil."),
    ],
    commonMistakes: [
      L("당면을 푹 삶기 — 버무리면 퍼져 끈적해집니다.", "Overboiling noodles — they turn gluey once dressed."),
      L("뜨거울 때 간장만 들이붓기 — 면이 서로 붙습니다. 참기름을 먼저.", "Pouring soy onto hot bare noodles — they clump. Oil first."),
      L("채소를 면과 오래 볶기 — 색이 탁해집니다. 버무리기만.", "Long stir-frying veg with noodles — colors dull. Toss only."),
    ],
    plating: L(
      "긴 접시에 면을 느슨히 담고 채소 색이 보이게 펼칩니다. 통깨는 살짝만 뿌리고, 필요하면 계란지단 채를 올립니다.",
      "Loosen noodles on a long platter so vegetable colors show. Sprinkle sesame seeds lightly; optional egg strips on top.",
    ),
    substitutions: [
      L("소고기 없이 버섯·두부만으로 채식 잡채.", "Skip beef; use mushrooms or tofu for a vegetarian version."),
      L("당면 대신 쌀국수(식감은 달라짐).", "Rice noodles work in a pinch with a different chew."),
    ],
    storage: L(
      "밀폐 냉장 3일. 전자레인지에 살짝 데우거나 팬에 참기름과 함께 볶아 데웁니다.",
      "Airtight in the fridge 3 days. Reheat gently in the microwave or a skillet with sesame oil.",
    ),
  },
  "tteokbokki": {
    intro: L(
      "가래떡 400g을 미지근한 물에 10분 불린 뒤, 육수 2컵·고추장 2큰술·고춧가루 1큰술로 8–10분 조리는 집밥 떡볶이입니다. 국물이 ‘자작하게 떡에 붙는’ 농도까지 줄이는 것이 목표이며, 어묵은 마지막 2–3분에 넣습니다.",
      "Home tteokbokki: soak 400 g rice cakes 10 minutes, then simmer in 2 cups stock with 2 tbsp gochujang and 1 tbsp gochugaru for 8–10 minutes until the sauce clings. Fish cakes join only for the last 2–3 minutes.",
    ),
    tips: [
      L("떡이 단단하면 반드시 불려 사용. 냉동 떡도 동일.", "Always soak hard or frozen cakes until pliable."),
      L("국물이 너무 줄면 물 2–3큰술씩 추가해 농도만 맞춥니다.", "If the sauce reduces too far, splash in 2–3 tbsp water."),
      L("마지막에 버터 ½작은술을 넣으면 국물이 윤기 납니다.", "½ tsp butter at the end adds gloss."),
    ],
    commonMistakes: [
      L("불리지 않은 떡 — 겉만 익고 속은 딱딱합니다.", "Unsoaked cakes — soft outside, hard inside."),
      L("처음부터 어묵·라면을 넣기 — 국물이 탁하고 밀가루 맛이 납니다.", "Adding fish cake or ramen from the start — cloudy, starchy sauce."),
      L("뚜껑을 닫고 방치 — 떡이 서로 붙습니다. 가끔 저어 주세요.", "Covering and walking away — cakes stick. Stir occasionally."),
    ],
    plating: L(
      "깊은 그릇에 떡과 국물을 함께 담고 대파·참깨를 올립니다. 치열한 분식 느낌보다 ‘윤기 나는 한 그릇’이 목표입니다.",
      "Serve cakes and sauce together in a deep bowl with scallion and sesame. Aim for a glossy one-bowl look, not a dried-out street-stall pile.",
    ),
    substitutions: [
      L("고추장 대신 칠리페이스트 1½큰술 + 된장 ½큰술.", "1½ tbsp chili paste plus ½ tbsp doenjang can approximate gochujang."),
      L("떡 대신 당면이나 우동면.", "Glass noodles or udon can stand in for rice cakes."),
    ],
    storage: L(
      "식후 바로 먹는 게 최선. 남으면 냉장 1일, 데울 때 물을 조금 넣어 풀어 줍니다.",
      "Best eaten immediately. Leftovers: 1 day fridge; reheat with a splash of water. Cakes firm up quickly.",
    ),
  },
  "kung-pao-chicken": {
    intro: L(
      "전분으로 코팅한 닭을 센 불에 빠르게 볶고, 마른 고추·산초·땅콩으로 마감하는 집밥형 쿵파오입니다. 소스는 달콤·짭짤·살짝 신맛의 균형을 맞추며, 평일 저녁 밥 위에 올리기 좋게 한 팬으로 끝냅니다.",
      "Home kung pao: starch-velveted chicken seared hot and fast, finished with dried chilies, Sichuan peppercorn, and peanuts. The sauce balances sweet, salty, and lightly tart — a one-wok weeknight rice bowl.",
    ),
    tips: [
      L("산초는 너무 오래 볶으면 써지니 향만 내고 약하게.", "Don’t burn Sichuan pepper — toast briefly for aroma."),
      L("팬이 충분히 뜨거울 때 닭을 넣어 물기가 생기지 않게 합니다.", "Use a ripping-hot wok so the chicken sears."),
      L("땅콩은 마지막 30초에 넣어 바삭함을 유지하세요.", "Add peanuts in the last 30 seconds so they stay crunchy."),
    ],
    commonMistakes: [
      L("약한 불에서 오래 볶기 — 닭이 질기고 소스가 물려집니다.", "Low-and-slow stir-fry — tough chicken and watery sauce."),
      L("산초를 태우기 — 쓴맛만 남습니다.", "Burning peppercorns — only bitterness left."),
      L("땅콩을 처음부터 넣기 — 불리거나 타기 쉽습니다.", "Peanuts from the start — soggy or scorched."),
    ],
    plating: L(
      "흰 밥 위에 볶음을 올리고 대파·땅콩이 보이게 합니다. 마른 고추는 먹어도 되지만 장식처럼 올려도 됩니다.",
      "Spoon over white rice so scallion and peanuts show. Dried chilies can be eaten or left as garnish.",
    ),
    substitutions: [
      L("닭 대신 두부·새우.", "Tofu or shrimp work well."),
      L("산초가 없으면 후추+칠리플레이크(맛은 달라짐).", "No Sichuan pepper? Black pepper + chili flakes (different heat)."),
    ],
    storage: L(
      "냉장 2일. 팬에 빠르게 데우거나 전자레인지. 땅콩은 따로 보관하면 더 바삭합니다.",
      "Fridge 2 days. Reheat in a hot pan or microwave. Store peanuts separately for crunch.",
    ),
  },
  "mapo-tofu": {
    intro: L(
      "부드러운 두부와 두반장·산초의 얼얼함을 밥에 비벼 먹는 쓰촨 집밥입니다. 매운맛은 두반장 양으로 조절하고, 마지막 산초가루가 ‘마(麻)’를 완성합니다. 국물처럼 자작한 소스가 목표입니다.",
      "Silky tofu in doubanjiang sauce with Sichuan tingle — mapo meant for rice. Dial heat with the bean paste; finish with ground Sichuan pepper for the classic ‘ma’. Aim for a saucy, spoonable consistency.",
    ),
    tips: [
      L("두부는 중불에서 살살 저어 형태를 유지합니다.", "Stir gently over medium heat so tofu stays intact."),
      L("전분물로 농도를 맞춘 뒤 산초를 뿌립니다.", "Thicken with slurry, then finish with Sichuan pepper."),
      L("타이밍: 고기 볶기 3분 → 소스 2분 → 두부 4–5분.", "Timing: meat 3 min → sauce 2 → tofu 4–5."),
    ],
    commonMistakes: [
      L("두부를 격하게 저어 으깨기.", "Stirring tofu hard until it crumbles."),
      L("산초를 볶음 초반에 넣기 — 향이 날아갑니다.", "Adding peppercorn early — aroma cooks off."),
      L("소스 없이 바싹 졸이기 — 밥과 안 어울립니다.", "Reducing dry — it needs sauce for rice."),
    ],
    plating: L(
      "깊은 그릇에 담고 산초가루·대파·고추기름을 점처럼 올립니다. 밥은 옆에 따로.",
      "Serve in a deep bowl with Sichuan pepper, scallion, and a few drops of chili oil. Rice on the side.",
    ),
    substitutions: [
      L("고기 없이 표고·팽이로 채식 마파.", "Shiitake and enoki for a meatless mapo."),
      L("순두부 대신 부침용 연두부를 쓰면 형태가 더 잘 유지됩니다.", "Soft (not silken) tofu holds shape better."),
    ],
    storage: L(
      "냉장 2일. 약불에 살살 데웁니다. 산초는 먹기 직전에 다시 조금 뿌리면 좋습니다.",
      "Fridge 2 days. Reheat gently. A fresh pinch of Sichuan pepper at the table helps.",
    ),
  },
  "spaghetti-carbonara": {
    intro: L(
      "계란·치즈·구운 구안찰레(또는 판체타)의 유화 소스로 면을 코팅하는 로마식 집밥입니다. 불 위에서 계란을 익히지 않고, 면수 전분으로 크림처럼 만드는 것이 이 버전의 핵심입니다. 생크림은 쓰지 않습니다.",
      "Roman-style carbonara coats pasta in an emulsion of egg, cheese, and rendered guanciale or pancetta — no cream. The trick is off-heat emulsifying with starchy pasta water so the sauce turns silky, not scrambled.",
    ),
    tips: [
      L("면수 ½컵을 미리 남겨 두고, 불을 끈 팬에서 소스를 만듭니다.", "Reserve ½ cup pasta water; build the sauce off heat."),
      L("계란+페코리노를 미리 섞어 두면 실패가 줄어듭니다.", "Whisk eggs and pecorino ahead to reduce scrambling risk."),
      L("타이밍: 구안찰레 5–7분 → 면 삶기 → 불 끄고 30초 유화.", "Timing: render meat 5–7 min → boil pasta → kill heat and emulsify ~30 sec."),
    ],
    commonMistakes: [
      L("센 불에서 계란 섞기 — 스크램블이 됩니다.", "Mixing eggs over high heat — scrambled eggs."),
      L("생크림 추가 — 정통 질감과 다릅니다.", "Adding cream — different dish entirely."),
      L("면수만 부족 — 소스가 덩어립니다. 조금씩 추가.", "Too little pasta water — sauce clumps. Add gradually."),
    ],
    plating: L(
      "따뜻한 접시에 말고 후추를 두껍게, 페코리노를 얇게 더 뿌립니다. 바로 먹습니다.",
      "Twirl onto a warm plate; crack plenty of black pepper and a last shower of pecorino. Eat immediately.",
    ),
    substitutions: [
      L("구안찰레 대신 판체타 또는 두꺼운 베이컨(연기 향은 달라짐).", "Pancetta or thick bacon instead of guanciale (smokier)."),
      L("페코리노 대신 파마산 일부 혼합 가능.", "Part Parmesan can stand in for some pecorino."),
    ],
    storage: L(
      "바로 먹는 요리. 남으면 냉장 1일, 면수·물을 조금 넣어 약불에 풀며 데우되 질감은 떨어집니다.",
      "Best fresh. Leftovers 1 day fridge; loosen with water over low heat — texture will suffer.",
    ),
  },
  "pizza-margherita": {
    intro: L(
      "토마토·모차렐라·바질만으로 토핑을 단순화한 나폴리 감성 집 피자입니다. 도우를 너무 두껍게 올리지 않고, 오븐을 가능한 한 뜨겁게(가정용 최대) 예열하는 것이 바삭한 가장자리의 비결입니다.",
      "Margherita keeps toppings to tomato, mozzarella, and basil. Don’t overload the dough, and preheat the oven as hot as your home oven allows — that’s how you get blistered edges at home.",
    ),
    tips: [
      L("모차렐라는 물기를 짜고 크게 찢어 올립니다.", "Drain mozzarella well and tear into large pieces."),
      L("바질은 오븐 직후 올려 향을 지킵니다.", "Add basil right after baking to keep aroma."),
      L("스톤·스틸이 있으면 45분 이상 예열.", "Preheat a stone or steel at least 45 minutes."),
    ],
    commonMistakes: [
      L("토핑을 두껍게 — 가운데가 질척해집니다.", "Heavy toppings — soggy center."),
      L("차가운 오븐 — 도우가 빵처럼 부풉니다.", "Cold oven — bread-like rise instead of blister."),
      L("소스에 설탕을 과하게 — 밸런스가 무너집니다.", "Over-sweetening sauce — balance collapses."),
    ],
    plating: L(
      "도마나 판에 올려 바로 자르고, 올리브오일 한 바퀴와 바질 잎을 올립니다.",
      "Slide onto a board, cut immediately, finish with a loop of olive oil and fresh basil.",
    ),
    substitutions: [
      L("신선한 모차렐라 대신 저수분 모차렐라(물기 적음).", "Low-moisture mozzarella if fresh is too wet."),
      L("산 마르자노 대신 잘 익은 통토마토를 으깨어 사용.", "Crushed ripe canned tomatoes if San Marzano aren’t available."),
    ],
    storage: L(
      "실온 반나절. 냉장 시 팬이나 에어프라이어로 재바삭. 냉동 가능(소스·치즈는 질감 변화).",
      "Room temp half a day. Re-crisp in a skillet or air fryer from the fridge. Freezing works with some texture loss.",
    ),
  },
  "classic-cheeseburger": {
    intro: L(
      "소고기 패티를 두껍게 뭉치지 않고, 가운데를 살짝 눌러 굽는 집밥 치즈버거입니다. 소금은 굽기 직전에, 치즈는 불 끄기 직전 30초에 올려 녹입니다. 번을 가볍게 토스트하는 것이 완성도를 가릅니다.",
      "A home cheeseburger with a lightly pressed center so the patty cooks evenly. Salt just before the pan; melt cheese in the last 30 seconds. Toasting the bun is what separates ‘fine’ from ‘done’.",
    ),
    tips: [
      L("패티는 차갑게, 팬은 뜨겁게.", "Cold patty, hot pan."),
      L("뒤집기는 한 번만. 누르지 말고 가운데만 살짝 딤플.", "Flip once. Don’t press — just a light center dimple."),
      L("타이밍: 면당 3–4분(중간 두께) · 번 토스트 1분.", "Timing: 3–4 min per side (medium thickness) · bun toast 1 min."),
    ],
    commonMistakes: [
      L("고기를 과하게 반죽 — 질긴 패티.", "Overworking the meat — tough patty."),
      L("차가운 번에 패티 — 빵이 찐득해집니다.", "Cold bun under hot patty — steamy, limp bread."),
      L("치즈를 너무 일찍 — 흘러내려 탑핑이 무너집니다.", "Cheese too early — it slides and collapses the stack."),
    ],
    plating: L(
      "하단 번 · 소스 · 패티+치즈 · 피클·양파 · 상추·토마토 · 상단 번. 이쑤시개로 고정해 반으로 자릅니다.",
      "Bottom bun · sauce · patty+cheese · pickle/onion · lettuce/tomato · top bun. Skewer and halve.",
    ),
    substitutions: [
      L("소고기 대신 칠면조·식물성 패티.", "Turkey or plant-based patties."),
      L("아메리칸 치즈 대신 체다·스위스.", "Cheddar or Swiss instead of American."),
    ],
    storage: L(
      "조립 전 패티만 냉장 2일. 조립된 버거는 바로 먹는 게 최선.",
      "Cooked patties alone: 2 days fridge. Assembled burgers are best immediately.",
    ),
  },
  "pad-thai": {
    intro: L(
      "쌀국수를 타마린드·피시소스·팜슈가(또는 설탕) 소스에 빠르게 볶는 태국 집밥형 팟타이입니다. 면을 미리 불려 두고, 센 불에서 소스·숙주·땅콩 순으로 넣는 타이밍이 핵심입니다.",
      "Home pad Thai tosses soaked rice noodles in a tamarind–fish sauce–palm sugar glaze over high heat. Soak noodles ahead; the order — sauce, then sprouts, then peanuts — keeps chew and crunch.",
    ),
    tips: [
      L("면은 패키지대로 불리되 ‘아직 심이 있는’ 상태가 좋습니다.", "Soak until pliable but still with a core — they finish in the wok."),
      L("소스를 미리 한 컵에 섞어 두면 볶는 동안 헤매지 않습니다.", "Mix the sauce in a cup before you start."),
      L("숙주·파·땅콩은 불 끄기 직전에.", "Sprouts, scallion, and peanuts go in at the end."),
    ],
    commonMistakes: [
      L("면을 푹 불려 볶기 — 끊어지고 죽처럼 됩니다.", "Oversoaking noodles — they break into mush."),
      L("약한 불 — 볶음이 아닌 찜이 됩니다.", "Low heat — steaming instead of stir-frying."),
      L("라임을 안 짜기 — 단짠만 남고 균형이 없습니다.", "Skipping lime — only sweet-salty, no lift."),
    ],
    plating: L(
      "접시에 면을 담고 땅콩·숙주·라임 웨지·고수를 올립니다. 고추 플레이크는 테이블에.",
      "Plate noodles with peanuts, sprouts, lime wedges, and cilantro. Chili flakes on the table.",
    ),
    substitutions: [
      L("새우·두부·닭 중 선호 단백질.", "Shrimp, tofu, or chicken."),
      L("타마린드 대신 라임+황설탕으로 비슷하게(맛은 다름).", "Lime + brown sugar approximates tamarind (different)."),
    ],
    storage: L(
      "냉장 1–2일. 팬에 물 한 스푼과 함께 빠르게 데웁니다. 숙주는 따로.",
      "Fridge 1–2 days. Reheat fast in a pan with a spoon of water. Keep sprouts separate.",
    ),
  },
  "chicken-tikka-masala": {
    intro: L(
      "요거트에 재운 닭을 구운 뒤, 토마토·크림 소스에 담그는 인도-영국식 집밥 커리입니다. 재우기 시간(최소 1시간, 가능하면 하룻밤)과 소스의 은은한 단맛·산미 균형이 이 버전의 포인트입니다.",
      "Yogurt-marinated chicken is grilled or broiled, then simmered in a tomato-cream sauce — Anglo-Indian comfort. Marinate at least 1 hour (overnight better); balance the sauce gently sweet and acidic.",
    ),
    tips: [
      L("닭은 허벅지살이 촉촉합니다. 가슴살이면 재우기를 길게.", "Thighs stay juicier; if using breast, marinate longer."),
      L("가람마살라는 마지막에 넣어 향을 살립니다.", "Add garam masala at the end for aroma."),
      L("타이밍: 재우기 1h+ → 굽기 12–15분 → 소스 15분.", "Timing: marinate 1h+ → broil/grill 12–15 → sauce 15."),
    ],
    commonMistakes: [
      L("재우기 생략 — 향이 겉에만 남습니다.", "Skipping marinade — spices stay superficial."),
      L("크림을 팔팔 끓이기 — 분리될 수 있습니다. 약불.", "Boiling cream hard — it can split. Keep gentle."),
      L("소금 없이 토마토만 — 싱겁고 텁텁합니다.", "Tomato without enough salt — dull and pasty."),
    ],
    plating: L(
      "깊은 그릇에 소스와 닭을 담고 고수·생크림 스월·난/밥을 곁들입니다.",
      "Serve in a deep bowl with cilantro, a cream swirl, and naan or rice.",
    ),
    substitutions: [
      L("생크림 대신 코코넛밀크(맛은 달라짐).", "Coconut milk instead of cream (different profile)."),
      L("닭 대신 판니어·콜리플라워.", "Paneer or cauliflower instead of chicken."),
    ],
    storage: L(
      "냉장 3일, 소스와 함께 냉동 1개월. 약불에 데웁니다.",
      "Fridge 3 days; freeze in sauce 1 month. Reheat gently.",
    ),
  },
  "mushroom-risotto": {
    intro: L(
      "아르보리오 쌀에 따뜻한 육수를 한 국자씩 넣어가며 저어 크림 질감을 만드는 이탈리아 집밥입니다. 버섯은 따로 센 불에 구워 마지막에 합치고, 파마산·버터로 마네카투라(유화)합니다.",
      "Home mushroom risotto: warm stock ladle by ladle into arborio until creamy. Brown mushrooms separately on high heat and fold in at the end with Parmesan and butter (mantecatura).",
    ),
    tips: [
      L("육수는 항상 따뜻하게 유지하세요. 차가운 육수는 쌀을 멈춥니다.", "Keep stock hot — cold stock stalls the rice."),
      L("쌀을 먼저 양파·와인에 투명해질 때까지 볶습니다(토스타투라).", "Toast rice in onion and wine until translucent first."),
      L("타이밍: 합 18–22분 저어 주기. 알덴테에서 불 끄고 치즈.", "Timing: 18–22 minutes stirring. Kill heat at al dente, then cheese."),
    ],
    commonMistakes: [
      L("육수를 한 번에 붓기 — 죽처럼 됩니다.", "Dumping all stock at once — porridge."),
      L("버섯을 쌀과 처음부터 — 수분이 나와 볶힘이 없습니다.", "Mushrooms with rice from the start — they steam, not brown."),
      L("파마산을 끓이며 넣기 — 끈적하고 분리됩니다. 불 끈 뒤.", "Cheese while boiling — gluey. Off heat only."),
    ],
    plating: L(
      "따뜻한 접시에 ‘파도’가 생기도록 담고, 버섯·파마산·후추·파슬리를 올립니다. 바로 먹습니다.",
      "Plate on a warm dish so it still ‘waves’; top with mushrooms, Parmesan, pepper, parsley. Serve at once.",
    ),
    substitutions: [
      L("아르보리오 대신 카르나롤리.", "Carnaroli instead of arborio."),
      L("치킨 스톡 대신 채소 스톡으로 채식.", "Vegetable stock for a vegetarian version."),
    ],
    storage: L(
      "냉장 2일. 데울 때 육수나 물을 넣어 풀며 약불. 냉동은 질감이 떨어집니다.",
      "Fridge 2 days. Reheat gently with stock or water. Freezing hurts texture.",
    ),
  },
  "strawberry-banana-smoothie": {
    intro: L(
      "딸기·바나나·요거트(또는 우유)를 기본으로 하는 가장 정직한 스무디입니다. 얼린 과일을 쓰면 각빙 없이도 걸쭉하고, 단맛은 바나나 숙성도로 먼저 조절합니다. 아침 5분 레시피입니다.",
      "The honest strawberry-banana baseline: fruit plus yogurt or milk. Frozen fruit thickens without watering down with ice; ripeness of the banana sets sweetness first. A five-minute breakfast.",
    ),
    tips: [
      L("액체는 적게 시작해 원하는 농도까지 추가합니다.", "Start with less liquid; thin to taste."),
      L("바나나가 반점이 있을수록 덜 달게 추가 설탕이 필요 없습니다.", "Spotty bananas rarely need extra sweetener."),
      L("단백질을 높이려면 그릭 요거트 120g(약 ½컵).", "For more protein, use 120 g / ½ cup Greek yogurt."),
    ],
    commonMistakes: [
      L("처음부터 물·우유를 많이 붓기 — 물처럼 됩니다.", "Too much liquid up front — thin as water."),
      L("실온 과일만 사용 — 묽고 미지근합니다. 일부는 얼려 두기.", "Only room-temp fruit — thin and lukewarm. Freeze some."),
      L("오래 방치 — 분리됩니다. 마시기 직전 블렌딩.", "Sitting too long — separates. Blend just before drinking."),
    ],
    plating: L(
      "차가운 글라스에 붓고 딸기 슬라이스·바나나 칩을 올립니다. 빨대와 함께 바로.",
      "Pour into a cold glass; top with a strawberry slice or banana chip. Serve immediately with a straw.",
    ),
    substitutions: [
      L("유제품 대신 아몬드·오트 밀크.", "Almond or oat milk instead of dairy."),
      L("딸기 대신 냉동 베리 믹스.", "Frozen mixed berries instead of strawberries."),
    ],
    storage: L(
      "바로 마시는 게 최선. 밀폐 냉장 24시간, 마시기 전 다시 흔들거나 짧게 블렌딩.",
      "Best immediate. Airtight fridge 24 hours; shake or blitz briefly before drinking.",
    ),
  },
  "kimbap": {
    intro: L(
      "참기름·소금으로 간한 밥에 단무지·당근·시금치·계란·햄(또는 두부)을 올려 단단히 마는 소풍용 김밥입니다. 재료를 너무 두껍게 넣지 않고, 밥이 미지근할 때 마는 것이 단면이 예쁜 비결입니다.",
      "Picnic kimbap: sesame-salt seasoned rice with pickled radish, carrot, spinach, egg, and ham or tofu, rolled tight. Avoid overfilling, and roll while rice is just warm for clean cross-sections.",
    ),
    tips: [
      L("밥은 뜨거울 때 간하고, 미지근할 때 말아야 김이 찢기지 않습니다.", "Season rice while hot; roll when just warm so nori doesn’t tear."),
      L("칼날에 참기름을 바르면 밥이 덜 붙습니다.", "Oil the knife between cuts for clean slices."),
      L("재료는 물기를 꼭 짜서 밥이 질지 않게 합니다.", "Squeeze fillings dry so the rice stays fluffy."),
    ],
    commonMistakes: [
      L("속을 과하게 넣기 — 김이 터지고 단면이 흐트러집니다.", "Overfilling — nori splits and slices smear."),
      L("뜨거운 밥으로 말기 — 김이 축축해지고 찢깁니다.", "Rolling with hot rice — soggy, tearing nori."),
      L("재료 물기 미제거 — 밥이 질척해집니다.", "Wet fillings — mushy rice."),
    ],
    plating: L(
      "2cm 두께로 썰어 단면이 보이게 접시에 엇갈려 담습니다. 통깨를 살짝.",
      "Slice ~2 cm thick and stagger on a plate so the spiral shows. A light sesame sprinkle.",
    ),
    substitutions: [
      L("햄 대신 불고기·참치·크림치즈.", "Bulgogi, tuna, or cream cheese fillings."),
      L("현미밥·퀴노아로 건강식.", "Brown rice or quinoa for a lighter roll."),
    ],
    storage: L(
      "실온 반나절. 냉장 시 밥이 굳으니 먹기 전 상온 10분. 냉동 후 전자레인지 해동 가능.",
      "Room temp half a day. Refrigeration hardens rice — rest 10 minutes before eating. Freeze and microwave if needed.",
    ),
  },
};

export const FLAGSHIP_SLUGS = Object.keys(recipeFlagships);
