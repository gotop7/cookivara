#!/usr/bin/env python3
"""Retry missing recipe images with corrected Commons names + Unsplash + delays."""
from __future__ import annotations

import ssl
import time
import urllib.request
from pathlib import Path
from urllib.parse import quote

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "recipes"
UA = "CookivaraRecipeBot/1.1 (personal recipe site)"


def commons(name: str, width: int = 1280) -> str:
    return f"https://commons.wikimedia.org/wiki/Special:FilePath/{quote(name)}?width={width}"


def unsplash(pid: str) -> str:
    return f"https://images.unsplash.com/{pid}?auto=format&fit=crop&w=1200&q=80"


# Only the currently missing slugs — curated dish-matching URLs.
MISSING: dict[str, list[str]] = {
    "kimchi-fried-rice": [
        commons("Gimchi-bokkeum-bap.jpg"),
        commons("Kimchi_Fried_Rice.jpg"),
        unsplash("photo-1498654896293-37aacf113fd9"),
    ],
    "jeyuk-bokkeum": [
        commons("Jeyukbokkeum.jpg"),
        commons("Korean_spicy_pork.jpg"),
        unsplash("photo-1590301157890-4810ed352733"),
    ],
    "kimchi-jeon": [
        commons("Kimchijeon.jpg"),
        commons("Kimchi_pancake.jpg"),
        unsplash("photo-1583224994877-6c9f4f6f3f0e"),
    ],
    "seolleongtang": [
        commons("Seolleongtang.jpg"),
        commons("Seolleongtang_Seoul.jpg"),
        unsplash("photo-1547592166-23ac45744acd"),
    ],
    "mul-naengmyeon": [
        commons("Mul-naengmyeon.jpg"),
        commons("Naengmyeon.jpg"),
        unsplash("photo-1569718212165-3a8278d4ff0c"),
    ],
    "yukgaejang": [
        commons("Yukgaejang.jpg"),
        commons("Yukgyejang.jpg"),
        unsplash("photo-1547592166-23ac45744acd"),
    ],
    "gamjatang": [
        commons("Gamjatang.jpg"),
        commons("Korean_cuisine-Gamjatang-01.jpg"),
        unsplash("photo-1476718406336-bb5a9690ee2a"),
    ],
    "yangnyeom-chicken": [
        commons("Korean_fried_chicken.jpg"),
        commons("Yangnyeom_chicken.jpg"),
        unsplash("photo-1626082927389-6cd097cdc6ec"),
    ],
    "bossam": [
        commons("Bossam.jpg"),
        commons("Bossam_3.jpg"),
        unsplash("photo-1529692236671-f1f6cf9683ba"),
    ],
    "mandu": [
        commons("Mandu.jpg"),
        commons("Korean_mandu.jpg"),
        commons("Jiaozi_dumpling.jpg"),
        unsplash("photo-1496116218417-1a781b1c416c"),
    ],
    "dakbokkeumtang": [
        commons("Dakdoritang.jpg"),
        commons("Dakbokkeumtang.jpg"),
        unsplash("photo-1604908176997-125f25cc6f3d"),
    ],
    "ojingeo-bokkeum": [
        commons("Ojingeo-bokkeum.jpg"),
        commons("Stir_fried_squid.jpg"),
        unsplash("photo-1559339352-11d035aa65de"),
    ],
    "galbitang": [
        commons("Galbi-tang.jpg"),
        commons("Korean_soup-Galbitang-01.jpg"),
        unsplash("photo-1547592166-23ac45744acd"),
    ],
    "hobak-jeon": [
        commons("Hobakjeon.jpg"),
        commons("Hobak_jeon.jpg"),
        unsplash("photo-1482049016688-2d3e1b311543"),
    ],
    "kongguksu": [
        commons("Kongguksu.jpg"),
        commons("Kong-guksu.jpg"),
        unsplash("photo-1569718212165-3a8278d4ff0c"),
    ],
    "andong-jjimdak": [
        commons("Andong_jjimdak.jpg"),
        commons("Jjimdak.jpg"),
        unsplash("photo-1604908176997-125f25cc6f3d"),
    ],
    "peking-duck": [
        commons("Peking_Duck.jpg"),
        commons("Beijing_roast_duck.jpg"),
        unsplash("photo-1518492104633-130d0cc84637"),
    ],
    "lo-mein": [
        commons("Lo_mein.jpg"),
        commons("Beef_lo_mein.jpg"),
        unsplash("photo-1552611052-33e04de081de"),
    ],
    "xiao-long-bao": [
        commons("Xiaolongbao-soup-dumplings.jpg"),
        commons("Xiaolongbao.jpg"),
        unsplash("photo-1496116218417-1a781b1c416c"),
    ],
    "char-siu": [
        commons("Char_siu.jpg"),
        commons("Charsiu.jpg"),
        unsplash("photo-1529692236671-f1f6cf9683ba"),
    ],
    "garlic-eggplant": [
        commons("Yu_xiang_qiezi.jpg"),
        commons("Fish-fragrant_eggplant.jpg"),
        unsplash("photo-1518977822534-7049a61ee0c2"),
    ],
    "shrimp-fried-rice": [
        commons("Yangzhou_fried_rice.jpg"),
        commons("Fried_rice.jpg"),
        unsplash("photo-1603133872878-684f208fb84b"),
    ],
    "steamed-bao-buns": [
        commons("Baozi.jpg"),
        commons("Cha_siu_bao.jpg"),
        unsplash("photo-1563245372-f21724e3856d"),
    ],
    "honey-walnut-shrimp": [
        unsplash("photo-1565680018434-b513d5ea5c76"),
        unsplash("photo-1559339352-11d035aa65de"),
    ],
    "twice-cooked-pork": [
        commons("Twice_cooked_pork.jpg"),
        commons("Huiguorou.jpg"),
        unsplash("photo-1529692236671-f1f6cf9683ba"),
    ],
    "dry-fried-cauliflower": [
        unsplash("photo-1510626176961-4b57d4f0199f"),
        unsplash("photo-1568584711074-2d43eadb8f46"),
    ],
    "lasagna-bolognese": [
        commons("Lasagne_al_forno.jpg"),
        commons("Lasagna.jpg"),
        unsplash("photo-1574894709920-11b28e7367e3"),
    ],
    "coq-au-vin": [
        commons("Coq_au_vin.jpg"),
        unsplash("photo-1598103442097-8b74394b95c6"),
    ],
    "pesto-pasta": [
        commons("Pasta_al_pesto.jpg"),
        commons("Trofie_al_pesto.jpg"),
        unsplash("photo-1621996346565-e3dbc646d9a9"),
    ],
    "spanish-tortilla": [
        commons("Tortilla_de_patatas.jpg"),
        commons("Spanish_omelette.jpg"),
        unsplash("photo-1482049016688-2d3e1b311543"),
    ],
    "shepherds-pie": [
        commons("Shepherd's_pie.jpg"),
        commons("Cottage_pie.jpg"),
        unsplash("photo-1574484284002-952d92456975"),
    ],
    "swedish-meatballs": [
        commons("Köttbullar.jpg"),
        commons("Swedish_meatballs.jpg"),
        unsplash("photo-1529042410759-befb1204b507"),
    ],
    "quiche-lorraine": [
        commons("Quiche_lorraine.jpg"),
        commons("Quiche.jpg"),
        unsplash("photo-1612929632978-63f0a28b2b8b"),
    ],
    "bangers-and-mash": [
        commons("Bangers_and_mash.jpg"),
        unsplash("photo-1529042410759-befb1204b507"),
    ],
    "risotto-milanese": [
        commons("Risotto_alla_milanese.jpg"),
        commons("Risotto.jpg"),
        unsplash("photo-1476124369491-e7addf5db371"),
    ],
    "pepperoni-pizza": [
        commons("Pepperoni_Pizza.jpg"),
        commons("Pizza.jpg"),
        unsplash("photo-1628840042765-356cda07504e"),
    ],
    "bbq-ribs": [
        commons("Barbecue_ribs.jpg"),
        commons("Spare_ribs.jpg"),
        unsplash("photo-1544025162-d76694265947"),
    ],
    "lobster-roll": [
        commons("Lobster_roll.jpg"),
        commons("Lobster_Roll.jpg"),
        unsplash("photo-1559339352-11d035aa65de"),
    ],
    "chicken-pot-pie": [
        commons("Chicken_pot_pie.jpg"),
        commons("Pot_pie.jpg"),
        unsplash("photo-1604908176997-125f25cc6f3d"),
    ],
    "gumbo": [
        commons("Gumbo.jpg"),
        commons("Seafood_gumbo.jpg"),
        unsplash("photo-1547592166-23ac45744acd"),
    ],
    "philly-cheesesteak": [
        commons("Cheesesteak.jpg"),
        commons("Philly_Cheese_Steak.jpg"),
        unsplash("photo-1554433607-66b5ece6c449"),
    ],
    "reuben-sandwich": [
        commons("Reuben_sandwich.jpg"),
        commons("Reuben.jpg"),
        unsplash("photo-1481070414801-51fd732d7184"),
    ],
    "shrimp-and-grits": [
        commons("Shrimp_and_grits.jpg"),
        unsplash("photo-1559339352-11d035aa65de"),
    ],
    "texas-brisket": [
        commons("Brisket.jpg"),
        commons("Smoked_brisket.jpg"),
        unsplash("photo-1529692236671-f1f6cf9683ba"),
    ],
    "cobb-salad": [
        commons("Cobb_salad.jpg"),
        unsplash("photo-1512621776951-a57141f2eefd"),
    ],
    "nachos-supreme": [
        commons("Nachos.jpg"),
        commons("Nachos_with_cheese.jpg"),
        unsplash("photo-1513456852971-30c0b8199d4d"),
    ],
    "key-lime-pie": [
        commons("Key_lime_pie.jpg"),
        unsplash("photo-1464349095431-e9a21285b5f3"),
    ],
    "corn-chowder": [
        commons("Corn_chowder.jpg"),
        unsplash("photo-1547592166-23ac45744acd"),
    ],
    "buffalo-cauliflower": [
        unsplash("photo-1510626176961-4b57d4f0199f"),
        unsplash("photo-1568584711074-2d43eadb8f46"),
    ],
    "nasi-goreng": [
        commons("Nasi_goreng.jpg"),
        commons("Nasi_Goreng_1.jpg"),
        unsplash("photo-1603133872878-684f208fb84b"),
    ],
    "ceviche": [
        commons("Ceviche.jpg"),
        commons("Ceviche_peruano.jpg"),
        unsplash("photo-1559339352-11d035aa65de"),
    ],
    "potato-pierogi": [
        commons("Pierogi.jpg"),
        commons("Pierogi_ruskie.jpg"),
        unsplash("photo-1496116218417-1a781b1c416c"),
    ],
    "massaman-curry": [
        commons("Massaman_curry.jpg"),
        commons("Kaeng_matsaman.jpg"),
        unsplash("photo-1455619452474-d2be8b1e70cd"),
    ],
    "laksa-noodles": [
        commons("Laksa.jpg"),
        commons("Katong_laksa.jpg"),
        unsplash("photo-1569718212165-3a8278d4ff0c"),
    ],
    "moroccan-tagine": [
        commons("Tajine.jpg"),
        commons("Chicken_tagine.jpg"),
        unsplash("photo-1511690656952-34342bb7c2f2"),
    ],
    "lamb-kofta": [
        commons("Kofta.jpg"),
        commons("Köfte.jpg"),
        unsplash("photo-1529042410759-befb1204b507"),
    ],
    "lomo-saltado": [
        commons("Lomo_saltado.jpg"),
        unsplash("photo-1546833999-b9f581a1996d"),
    ],
    "ethiopian-doro-wat": [
        commons("Doro_wat.jpg"),
        commons("Doro_wot.jpg"),
        unsplash("photo-1455619452474-d2be8b1e70cd"),
    ],
    "tonkatsu": [
        commons("Tonkatsu.jpg"),
        commons("Tonkatsu_set_meal.jpg"),
        unsplash("photo-1626082927389-6cd097cdc6ec"),
    ],
    "coconut-lime-smoothie": [
        unsplash("photo-1556881286-fc691da702ba"),
        unsplash("photo-1525385133512-2f4bdd9adf53"),
        unsplash("photo-1623065422902-30a2d299bbe4"),
    ],
    "eggplant-parmesan": [
        commons("Eggplant_parmesan.jpg"),
        commons("Melanzane_alla_parmigiana.jpg"),
        unsplash("photo-1518977822534-7049a61ee0c2"),
    ],
    "spinach-feta-pie": [
        commons("Spanakopita.jpg"),
        commons("Spanakopita_triangles.jpg"),
        unsplash("photo-1612929632978-63f0a28b2b8b"),
    ],
    "paneer-tikka": [
        commons("Paneer_tikka.jpg"),
        commons("Paneer_Tikka.jpg"),
        unsplash("photo-1565557623262-b51c2513a641"),
    ],
    "stuffed-bell-peppers": [
        commons("Stuffed_peppers.jpg"),
        commons("Gefüllte_Paprika.jpg"),
        unsplash("photo-1546069901-ba9599a7e63c"),
    ],
    "miso-glazed-eggplant": [
        commons("Nasu_dengaku.jpg"),
        commons("Miso_eggplant.jpg"),
        unsplash("photo-1518977822534-7049a61ee0c2"),
    ],
}


def fetch(url: str) -> bytes:
    ctx = ssl.create_default_context()
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": "image/*,*/*"})
    with urllib.request.urlopen(req, timeout=60, context=ctx) as resp:
        data = resp.read()
    if len(data) < 5_000:
        raise RuntimeError(f"too small ({len(data)})")
    return data


def main() -> None:
    ok = fail = 0
    for i, (slug, urls) in enumerate(MISSING.items()):
        dest = OUT / f"{slug}.jpg"
        if dest.exists() and dest.stat().st_size > 5_000:
            print(f"SKIP {slug}")
            continue
        saved = False
        for url in urls:
            try:
                time.sleep(0.8)  # rate limit
                data = fetch(url)
                dest.write_bytes(data)
                print(f"OK  {slug} ({len(data)})")
                ok += 1
                saved = True
                break
            except Exception as exc:  # noqa: BLE001
                print(f"TRY {slug}: {exc}")
                time.sleep(1.2)
        if not saved:
            print(f"FAIL {slug}")
            fail += 1
    print(f"\nOK {ok}, FAIL {fail}")
    if fail:
        raise SystemExit(1)


if __name__ == "__main__":
    main()
