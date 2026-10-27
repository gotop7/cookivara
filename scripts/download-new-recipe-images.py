#!/usr/bin/env python3
"""Download dish-matched photos for new Cookivara recipes (Wikimedia + Unsplash)."""
from __future__ import annotations

import ssl
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "recipes"
OUT.mkdir(parents=True, exist_ok=True)

UA = "CookivaraRecipeBot/1.0 (personal recipe site; ryan@local)"


def commons(filename: str, width: int = 1280) -> str:
    # Special:FilePath redirects to the actual file; width uses thumb when possible
    from urllib.parse import quote

    return f"https://commons.wikimedia.org/wiki/Special:FilePath/{quote(filename)}?width={width}"


def unsplash(photo_id: str) -> str:
    return f"https://images.unsplash.com/{photo_id}?auto=format&fit=crop&w=1200&q=80"


# Curated slug -> candidate URLs (first success wins). Prefer Wikimedia dish photos.
IMAGES: dict[str, list[str]] = {
    # Korean
    "kimbap": [commons("Gimbap.jpg"), commons("Gimbap_3.jpg")],
    "jjajangmyeon": [commons("Jajangmyeon.jpg"), commons("Jajangmyeon_(mixed).jpg")],
    "kimchi-fried-rice": [commons("Kimchi_fried_rice.jpg"), commons("Kimchi_bokkeumbap.jpg")],
    "galbi-jjim": [commons("Korean_cuisine-Galbijjim-01.jpg"), commons("Galbijjim.jpg")],
    "jeyuk-bokkeum": [commons("Jeyuk_bokkeum.jpg"), commons("Jeyukbokkeum.jpg")],
    "kimchi-jeon": [commons("Kimchijeon.jpg"), commons("Kimchi_jeon.jpg")],
    "budae-jjigae": [commons("Budae-jjigae.jpg"), commons("Budaejjigae.jpg")],
    "seolleongtang": [commons("Seolleongtang.jpg"), commons("Seolleongtang_2.jpg")],
    "mul-naengmyeon": [commons("Mul-naengmyeon.jpg"), commons("Naengmyeon.jpg")],
    "yukgaejang": [commons("Yukgaejang.jpg"), commons("Yukgaejang_2.jpg")],
    "gamjatang": [commons("Gamjatang.jpg"), commons("Gamjatang_2.jpg")],
    "yangnyeom-chicken": [commons("Yangnyeom_chicken.jpg"), commons("Korean_fried_chicken.jpg")],
    "bossam": [commons("Bossam.jpg"), commons("Bossam_3.jpg")],
    "mandu": [commons("Mandu.jpg"), commons("Korean_mandu.jpg")],
    "dakbokkeumtang": [commons("Dakbokkeumtang.jpg"), commons("Dakdoritang.jpg")],
    "ojingeo-bokkeum": [commons("Ojingeo-bokkeum.jpg"), commons("Stir-fried_squid.jpg")],
    "galbitang": [commons("Galbitang.jpg"), commons("Galbi-tang.jpg")],
    "hobak-jeon": [commons("Hobakjeon.jpg"), commons("Hobak_jeon.jpg")],
    "kongguksu": [commons("Kongguksu.jpg"), commons("Kong-guksu.jpg")],
    "andong-jjimdak": [commons("Andong_jjimdak.jpg"), commons("Jjimdak.jpg")],
    # Chinese
    "general-tsos-chicken": [
        commons("General_Tso%27s_chicken.jpg"),
        unsplash("photo-1525755662778-989d0524087e"),
    ],
    "beef-broccoli": [
        commons("Beef_with_broccoli.jpg"),
        unsplash("photo-1604908176997-125f25cc6f3d"),
    ],
    "chow-mein": [commons("Chow_mein_1.jpg"), commons("Chicken_chow_mein.jpg")],
    "vegetable-spring-rolls": [
        commons("Spring_rolls.jpg"),
        commons("Vietnamese_spring_rolls.jpg"),
    ],
    "peking-duck": [commons("Peking_duck.jpg"), commons("Beijing_roast_duck.jpg")],
    "lo-mein": [commons("Lo_mein.jpg"), commons("Chicken_lo_mein.jpg")],
    "orange-chicken": [
        commons("Orange_chicken.jpg"),
        unsplash("photo-1525755662778-989d0524087e"),
    ],
    "xiao-long-bao": [commons("Xiaolongbao.jpg"), commons("Xiaolongbao_soup_dumpling.jpg")],
    "char-siu": [commons("Char_siu.jpg"), commons("Char_siu_rice.jpg")],
    "salt-pepper-shrimp": [
        commons("Salt_and_pepper_shrimp.jpg"),
        unsplash("photo-1559339352-11d035aa65de"),
    ],
    "egg-drop-soup": [commons("Egg_drop_soup.jpg"), commons("Chinese_egg_drop_soup.jpg")],
    "garlic-eggplant": [commons("Yu_xiang_qiezi.jpg"), commons("Garlic_eggplant.jpg")],
    "mongolian-beef": [
        commons("Mongolian_beef.jpg"),
        unsplash("photo-1546833999-b9f581a1996d"),
    ],
    "shrimp-fried-rice": [
        commons("Shrimp_fried_rice.jpg"),
        commons("Yangzhou_fried_rice.jpg"),
    ],
    "steamed-bao-buns": [commons("Baozi.jpg"), commons("Cha_siu_bao.jpg")],
    "chicken-congee": [commons("Congee.jpg"), commons("Chicken_congee.jpg")],
    "chinese-broccoli-garlic": [
        commons("Gai_lan.jpg"),
        commons("Chinese_broccoli.jpg"),
    ],
    "honey-walnut-shrimp": [
        commons("Honey_walnut_shrimp.jpg"),
        unsplash("photo-1565680018434-b513d5ea5c76"),
    ],
    "twice-cooked-pork": [commons("Twice_cooked_pork.jpg"), commons("Huiguo_rou.jpg")],
    "dry-fried-cauliflower": [
        commons("Dry_fried_cauliflower.jpg"),
        unsplash("photo-1510626176961-4b57d4f0199f"),
    ],
    # European
    "lasagna-bolognese": [commons("Lasagne_Bolognese.jpg"), commons("Lasagna.jpg")],
    "chicken-parmesan": [commons("Chicken_parmigiana.jpg"), commons("Chicken_parmesan.jpg")],
    "fish-and-chips": [commons("Fish_and_chips.jpg"), commons("Fish_and_chips_2.jpg")],
    "wiener-schnitzel": [commons("Wiener_Schnitzel.jpg"), commons("Wienerschnitzel.jpg")],
    "coq-au-vin": [commons("Coq_au_vin.jpg"), commons("Coq_au_vin_01.jpg")],
    "pesto-pasta": [commons("Pasta_al_pesto.jpg"), commons("Trofie_al_pesto.jpg")],
    "spanish-tortilla": [commons("Tortilla_de_patatas.jpg"), commons("Spanish_omelette.jpg")],
    "shepherds-pie": [commons("Shepherd%27s_pie.jpg"), commons("Cottage_pie.jpg")],
    "gazpacho": [commons("Gazpacho.jpg"), commons("Gazpacho_andaluz.jpg")],
    "potato-gnocchi": [commons("Gnocchi.jpg"), commons("Gnocchi_di_patate.jpg")],
    "swedish-meatballs": [commons("Swedish_meatballs.jpg"), commons("Köttbullar.jpg")],
    "cacio-e-pepe": [commons("Cacio_e_pepe.jpg"), commons("Spaghetti_cacio_e_pepe.jpg")],
    "bouillabaisse": [commons("Bouillabaisse.jpg"), commons("Bouillabaisse_marseille.jpg")],
    "croque-monsieur": [commons("Croque-monsieur.jpg"), commons("Croque_monsieur.jpg")],
    "quiche-lorraine": [commons("Quiche_lorraine.jpg"), commons("Quiche.jpg")],
    "bangers-and-mash": [commons("Bangers_and_mash.jpg"), commons("Sausage_and_mash.jpg")],
    "pasta-puttanesca": [commons("Pasta_alla_puttanesca.jpg"), commons("Puttanesca.jpg")],
    "risotto-milanese": [commons("Risotto_alla_Milanese.jpg"), commons("Risotto_milanese.jpg")],
    "pepperoni-pizza": [commons("Pepperoni_pizza.jpg"), commons("Pizza_pepperoni.jpg")],
    "herb-roast-chicken": [
        commons("Roast_chicken.jpg"),
        unsplash("photo-1598103442097-8b74394b95c6"),
    ],
    # American
    "bbq-ribs": [commons("Barbecue_ribs.jpg"), commons("Baby_back_ribs.jpg")],
    "lobster-roll": [commons("Lobster_roll.jpg"), commons("Lobster_roll_2.jpg")],
    "chicken-pot-pie": [commons("Chicken_pot_pie.jpg"), commons("Pot_pie.jpg")],
    "caesar-salad": [commons("Caesar_salad.jpg"), commons("Caesar_salad_1.jpg")],
    "gumbo": [commons("Gumbo.jpg"), commons("Seafood_gumbo.jpg")],
    "jambalaya": [commons("Jambalaya.jpg"), commons("Chicken_jambalaya.jpg")],
    "philly-cheesesteak": [commons("Cheesesteak.jpg"), commons("Philly_cheesesteak.jpg")],
    "reuben-sandwich": [commons("Reuben_sandwich.jpg"), commons("Reuben.jpg")],
    "shrimp-and-grits": [commons("Shrimp_and_grits.jpg"), commons("Shrimp_grits.jpg")],
    "texas-brisket": [commons("Brisket.jpg"), commons("Beef_brisket.jpg")],
    "biscuits-and-gravy": [commons("Biscuits_and_gravy.jpg"), commons("Sausage_gravy.jpg")],
    "cobb-salad": [commons("Cobb_salad.jpg"), commons("Cobb_salad_2.jpg")],
    "nachos-supreme": [commons("Nachos.jpg"), commons("Nachos_supreme.jpg")],
    "key-lime-pie": [commons("Key_lime_pie.jpg"), commons("Key_lime_pie_slice.jpg")],
    "banana-bread": [commons("Banana_bread.jpg"), commons("Banana_bread_loaf.jpg")],
    "club-sandwich": [commons("Club_sandwich.jpg"), commons("Club_sandwich_2.jpg")],
    "corn-chowder": [commons("Corn_chowder.jpg"), commons("Corn_chowder_soup.jpg")],
    "buffalo-cauliflower": [
        commons("Buffalo_cauliflower.jpg"),
        unsplash("photo-1510626176961-4b57d4f0199f"),
    ],
    "sweet-potato-casserole": [
        commons("Sweet_potato_casserole.jpg"),
        unsplash("photo-1574484284002-952d92456975"),
    ],
    "chicken-fried-steak": [
        commons("Chicken_fried_steak.jpg"),
        commons("Chicken-fried_steak.jpg"),
    ],
    # World
    "tom-yum-soup": [commons("Tom_yum.jpg"), commons("Tom_yum_kung.jpg")],
    "nasi-goreng": [commons("Nasi_goreng.jpg"), commons("Nasi_Goreng.jpg")],
    "ceviche": [commons("Ceviche.jpg"), commons("Ceviche_mixto.jpg")],
    "beef-empanadas": [commons("Empanada.jpg"), commons("Empanadas.jpg")],
    "hummus-plate": [commons("Hummus.jpg"), commons("Hummus_from_The_Nile.jpg")],
    "chicken-biryani": [commons("Chicken_Biryani.jpg"), commons("Biryani_Hyderabad.jpg")],
    "greek-gyros": [commons("Gyros.jpg"), commons("Gyros_pita.jpg")],
    "baklava": [commons("Baklava.jpg"), commons("Baklava_1.jpg")],
    "brazilian-feijoada": [commons("Feijoada.jpg"), commons("Feijoada_completa.jpg")],
    "potato-pierogi": [commons("Pierogi.jpg"), commons("Pierogi_ruskie.jpg")],
    "cheese-arepas": [commons("Arepa.jpg"), commons("Arepas.jpg")],
    "massaman-curry": [commons("Massaman_curry.jpg"), commons("Kaeng_matsaman.jpg")],
    "laksa-noodles": [commons("Laksa.jpg"), commons("Katong_laksa.jpg")],
    "moroccan-tagine": [commons("Tajine.jpg"), commons("Chicken_tagine.jpg")],
    "gado-gado": [commons("Gado-gado.jpg"), commons("Gado_gado.jpg")],
    "lamb-kofta": [commons("Kofta.jpg"), commons("Lamb_kofta.jpg")],
    "sushi-nigiri": [commons("Nigiri_sushi.jpg"), commons("Sushi_platter.jpg")],
    "lomo-saltado": [commons("Lomo_saltado.jpg"), commons("Lomo_saltado_1.jpg")],
    "ethiopian-doro-wat": [commons("Doro_wat.jpg"), commons("Doro_wot.jpg")],
    "tonkatsu": [commons("Tonkatsu.jpg"), commons("Tonkatsu_set.jpg")],
    # Smoothies — Unsplash drink photos (Wikimedia often sparse)
    "tropical-green-smoothie": [
        unsplash("photo-1622597467836-f3285f2131b8"),
        unsplash("photo-1610970881699-44a5587cabec"),
    ],
    "watermelon-mint-smoothie": [
        unsplash("photo-1587049352846-4a222e784d38"),
        unsplash("photo-1568909344668-6f14a26fba59"),
    ],
    "coffee-banana-smoothie": [
        unsplash("photo-1577805947697-89e18249d767"),
        unsplash("photo-1461023058943-07fcbe16d735"),
    ],
    "kale-apple-smoothie": [
        unsplash("photo-1610970881699-44a5587cabec"),
        unsplash("photo-1622597467836-f3285f2131b8"),
    ],
    "raspberry-lemon-smoothie": [
        unsplash("photo-1502741338009-cac2772e18bc"),
        unsplash("photo-1488477181946-6428a0291777"),
    ],
    "carrot-ginger-smoothie": [
        unsplash("photo-1623065422902-30a2d299bbe4"),
        unsplash("photo-1600271886742-f049cd451bba"),
    ],
    "cherry-almond-smoothie": [
        unsplash("photo-1579954115545-a955111f7e55"),
        unsplash("photo-1553530666-ba11a7da3888"),
    ],
    "dragon-fruit-smoothie": [
        unsplash("photo-1525385133512-2f4bdd9adf53"),
        unsplash("photo-1600271886742-f049cd451bba"),
    ],
    "oat-date-smoothie": [
        unsplash("photo-1577805947697-89e18249d767"),
        unsplash("photo-1553530666-ba11a7da3888"),
    ],
    "cucumber-celery-smoothie": [
        unsplash("photo-1622597467836-f3285f2131b8"),
        unsplash("photo-1610970881699-44a5587cabec"),
    ],
    "papaya-lime-smoothie": [
        unsplash("photo-1525385133512-2f4bdd9adf53"),
        unsplash("photo-1623065422902-30a2d299bbe4"),
    ],
    "matcha-mango-smoothie": [
        unsplash("photo-1536256263959-770b48d82b0a"),
        unsplash("photo-1525385133512-2f4bdd9adf53"),
    ],
    "protein-berry-smoothie": [
        unsplash("photo-1502741338009-cac2772e18bc"),
        unsplash("photo-1553530666-ba11a7da3888"),
    ],
    "fig-honey-smoothie": [
        unsplash("photo-1577805947697-89e18249d767"),
        unsplash("photo-1488477181946-6428a0291777"),
    ],
    "beet-berry-smoothie": [
        unsplash("photo-1579954115545-a955111f7e55"),
        unsplash("photo-1502741338009-cac2772e18bc"),
    ],
    "coconut-lime-smoothie": [
        unsplash("photo-1556881286-fc691da702ba"),
        unsplash("photo-1525385133512-2f4bdd9adf53"),
    ],
    "pumpkin-spice-smoothie": [
        unsplash("photo-1577805947697-89e18249d767"),
        unsplash("photo-1546173159-315724a31696"),
    ],
    "grape-spinach-smoothie": [
        unsplash("photo-1610970881699-44a5587cabec"),
        unsplash("photo-1622597467836-f3285f2131b8"),
    ],
    "kiwi-kale-smoothie": [
        unsplash("photo-1622597467836-f3285f2131b8"),
        unsplash("photo-1610970881699-44a5587cabec"),
    ],
    "almond-butter-berry-smoothie": [
        unsplash("photo-1553530666-ba11a7da3888"),
        unsplash("photo-1577805947697-89e18249d767"),
    ],
    # Vegetarian dedicated
    "tofu-stir-fry": [
        commons("Tofu_stir_fry.jpg"),
        unsplash("photo-1546069901-ba9599a7e63c"),
    ],
    "black-bean-tacos": [
        commons("Black_bean_tacos.jpg"),
        unsplash("photo-1565299585323-38d6b0865b47"),
    ],
    "eggplant-parmesan": [commons("Eggplant_parmesan.jpg"), commons("Melanzane_alla_parmigiana.jpg")],
    "lentil-soup": [commons("Lentil_soup.jpg"), commons("Mercimek_çorbası.jpg")],
    "veggie-buddha-bowl": [
        commons("Buddha_bowl.jpg"),
        unsplash("photo-1512621776951-a57141f2eefd"),
    ],
    "spinach-feta-pie": [commons("Spanakopita.jpg"), commons("Spinach_pie.jpg")],
    "roasted-cauliflower-tacos": [
        unsplash("photo-1565299585323-38d6b0865b47"),
        unsplash("photo-1510626176961-4b57d4f0199f"),
    ],
    "paneer-tikka": [commons("Paneer_tikka.jpg"), commons("Paneer_Tikka_Kabob.jpg")],
    "zucchini-noodles-pesto": [
        unsplash("photo-1623428187969-5da2dcea5ebf"),
        commons("Zucchini_noodles.jpg"),
    ],
    "stuffed-bell-peppers": [
        commons("Stuffed_peppers.jpg"),
        commons("Stuffed_bell_peppers.jpg"),
    ],
    "miso-glazed-eggplant": [
        commons("Nasu_dengaku.jpg"),
        commons("Miso_eggplant.jpg"),
    ],
    "sweet-potato-black-bean-bowl": [
        unsplash("photo-1512621776951-a57141f2eefd"),
        unsplash("photo-1540420773420-3366772f4999"),
    ],
}


def fetch(url: str) -> bytes:
    ctx = ssl.create_default_context()
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": "image/*,*/*"})
    with urllib.request.urlopen(req, timeout=60, context=ctx) as resp:
        data = resp.read()
    if len(data) < 5_000:
        raise RuntimeError(f"too small ({len(data)}): {url}")
    return data


def main() -> None:
    # Only download missing jpgs for listed slugs
    ok = 0
    fail: list[str] = []
    skip = 0
    for slug, urls in sorted(IMAGES.items()):
        dest = OUT / f"{slug}.jpg"
        if dest.exists() and dest.stat().st_size > 5_000:
            skip += 1
            continue
        saved = False
        for url in urls:
            try:
                data = fetch(url)
                dest.write_bytes(data)
                print(f"OK  {slug} ({len(data)} bytes)")
                ok += 1
                saved = True
                break
            except Exception as exc:  # noqa: BLE001
                print(f"TRY {slug}: {exc}")
        if not saved:
            fail.append(slug)
    print(f"\nDownloaded {ok}, skipped existing {skip}, failed {len(fail)}: {fail or 'none'}")
    if fail:
        raise SystemExit(1)


if __name__ == "__main__":
    main()
