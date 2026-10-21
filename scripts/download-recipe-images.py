#!/usr/bin/env python3
"""Download appetizing food photos into public/recipes/ (Unsplash + Wikimedia)."""

from __future__ import annotations

import ssl
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "recipes"
OUT.mkdir(parents=True, exist_ok=True)

# Curated free-to-use photos (Unsplash / Wikimedia Commons).
# Each maps slug -> direct image URL.
IMAGES: dict[str, str] = {
    "kimchi-jjigae": "https://images.unsplash.com/photo-1583224994877-6c9f4f6f3f0e?auto=format&fit=crop&w=1200&q=80",
    "bulgogi": "https://images.unsplash.com/photo-1580651315530-69c8e0026370?auto=format&fit=crop&w=1200&q=80",
    "japchae": "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=1200&q=80",
    "tteokbokki": "https://images.unsplash.com/photo-1609501676725-7186f017a4b7?auto=format&fit=crop&w=1200&q=80",
    "mapo-tofu": "https://images.unsplash.com/photo-1582878826623-ff84f1aa7e5a?auto=format&fit=crop&w=1200&q=80",
    "kung-pao-chicken": "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=1200&q=80",
    "egg-fried-rice": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=1200&q=80",
    "pork-dumplings": "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=1200&q=80",
    "hot-and-sour-soup": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1200&q=80",
    "spaghetti-carbonara": "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=1200&q=80",
    "ratatouille": "https://images.unsplash.com/photo-1572451479139-6a308211d8be?auto=format&fit=crop&w=1200&q=80",
    "moussaka": "https://images.unsplash.com/photo-1625944233570-0d8f6f5c0c3e?auto=format&fit=crop&w=1200&q=80",
    "seafood-paella": "https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&w=1200&q=80",
    "beef-stroganoff": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=1200&q=80",
    "classic-cheeseburger": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80",
    "macaroni-and-cheese": "https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?auto=format&fit=crop&w=1200&q=80",
    "southern-fried-chicken": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=1200&q=80",
    "chili-con-carne": "https://images.unsplash.com/photo-1625938145744-e380515399b7?auto=format&fit=crop&w=1200&q=80",
    "buttermilk-pancakes": "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=1200&q=80",
    "pad-thai": "https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=1200&q=80",
    "chicken-tikka-masala": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=1200&q=80",
    "street-tacos": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=1200&q=80",
    "miso-ramen": "https://images.unsplash.com/photo-1569718212165-3a8278d4ff0c?auto=format&fit=crop&w=1200&q=80",
    "shakshuka": "https://images.unsplash.com/photo-1590412200988-a436970781fa?auto=format&fit=crop&w=1200&q=80",
    "strawberry-banana-smoothie": "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=1200&q=80",
    "green-detox-smoothie": "https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&fit=crop&w=1200&q=80",
    "mango-smoothie": "https://images.unsplash.com/photo-1623065428148-8f0b0b0b0b0b?auto=format&fit=crop&w=1200&q=80",
    "mixed-berry-smoothie": "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=1200&q=80",
    "peanut-butter-banana-smoothie": "https://images.unsplash.com/photo-1623065428148-8f0b0b0b0b0b?auto=format&fit=crop&w=1200&q=80",
    "mushroom-risotto": "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=1200&q=80",
    "chickpea-curry": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=80",
}

# Better verified fallbacks (Unsplash / Wikimedia) keyed by slug if primary fails.
FALLBACKS: dict[str, list[str]] = {
    "kimchi-jjigae": [
        "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=1200&q=80",
        "https://upload.wikimedia.org/wikipedia/commons/0/0a/Kimchi_Jjigae.jpg",
    ],
    "bulgogi": [
        "https://upload.wikimedia.org/wikipedia/commons/1/15/Bulgogi_1.jpg",
        "https://images.unsplash.com/photo-1625938144755-652e08e0f8b1?auto=format&fit=crop&w=1200&q=80",
    ],
    "japchae": [
        "https://upload.wikimedia.org/wikipedia/commons/4/4b/Japchae_3.jpg",
        "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80",
    ],
    "tteokbokki": [
        "https://upload.wikimedia.org/wikipedia/commons/4/4d/Tteokbokki.jpg",
        "https://images.unsplash.com/photo-1635363638580-c2809d049eee?auto=format&fit=crop&w=1200&q=80",
    ],
    "mapo-tofu": [
        "https://upload.wikimedia.org/wikipedia/commons/2/2c/Mapo_dofu.jpg",
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80",
    ],
    "kung-pao-chicken": [
        "https://upload.wikimedia.org/wikipedia/commons/2/2a/Kung_Pao_chicken.jpg",
        "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80",
    ],
    "egg-fried-rice": [
        "https://upload.wikimedia.org/wikipedia/commons/4/4a/Fried_rice.jpg",
        "https://images.unsplash.com/photo-1516684669134-de6f7c473a2a?auto=format&fit=crop&w=1200&q=80",
    ],
    "pork-dumplings": [
        "https://upload.wikimedia.org/wikipedia/commons/8/8c/Jiaozi_dumpling.jpg",
        "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1200&q=80",
    ],
    "hot-and-sour-soup": [
        "https://images.unsplash.com/photo-1604908178453-47ad74b2b2e4?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?auto=format&fit=crop&w=1200&q=80",
    ],
    "spaghetti-carbonara": [
        "https://upload.wikimedia.org/wikipedia/commons/3/3f/Spaghetti_alla_Carbonara_%28cropped%29.jpg",
        "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=1200&q=80",
    ],
    "ratatouille": [
        "https://upload.wikimedia.org/wikipedia/commons/1/1b/Ratatouille.jpg",
        "https://images.unsplash.com/photo-1572441713132-51c75654db73?auto=format&fit=crop&w=1200&q=80",
    ],
    "moussaka": [
        "https://upload.wikimedia.org/wikipedia/commons/4/4e/Moussaka.jpg",
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=80",
    ],
    "seafood-paella": [
        "https://upload.wikimedia.org/wikipedia/commons/e/ed/Paella_de_marisco_01.jpg",
        "https://images.unsplash.com/photo-1515443961218-a37486895d55?auto=format&fit=crop&w=1200&q=80",
    ],
    "beef-stroganoff": [
        "https://upload.wikimedia.org/wikipedia/commons/9/9c/Beef_Stroganoff.jpg",
        "https://images.unsplash.com/photo-1432139509613-5c4255815697?auto=format&fit=crop&w=1200&q=80",
    ],
    "classic-cheeseburger": [
        "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=80",
        "https://upload.wikimedia.org/wikipedia/commons/4/4d/Cheeseburger.jpg",
    ],
    "macaroni-and-cheese": [
        "https://upload.wikimedia.org/wikipedia/commons/4/44/Original_Mac_n_Cheese_.jpg",
        "https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?auto=format&fit=crop&w=1200&q=80",
    ],
    "southern-fried-chicken": [
        "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=1200&q=80",
        "https://upload.wikimedia.org/wikipedia/commons/2/2c/Fried-Chicken-Set.jpg",
    ],
    "chili-con-carne": [
        "https://upload.wikimedia.org/wikipedia/commons/0/0f/Chili_con_carne.jpg",
        "https://images.unsplash.com/photo-1612874682852-29b945f0b6e4?auto=format&fit=crop&w=1200&q=80",
    ],
    "buttermilk-pancakes": [
        "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=1200&q=80",
        "https://upload.wikimedia.org/wikipedia/commons/6/6d/Pancakes_with_syrup.jpg",
    ],
    "pad-thai": [
        "https://upload.wikimedia.org/wikipedia/commons/3/3a/Pad_Thai_kung_2.jpg",
        "https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=1200&q=80",
    ],
    "chicken-tikka-masala": [
        "https://upload.wikimedia.org/wikipedia/commons/1/1e/Chicken_tikka_masala.jpg",
        "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=1200&q=80",
    ],
    "street-tacos": [
        "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=1200&q=80",
        "https://upload.wikimedia.org/wikipedia/commons/7/73/001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg",
    ],
    "miso-ramen": [
        "https://images.unsplash.com/photo-1557872943-16a5ac26437e?auto=format&fit=crop&w=1200&q=80",
        "https://upload.wikimedia.org/wikipedia/commons/d/dc/Shoyu_Ramen.jpg",
    ],
    "shakshuka": [
        "https://upload.wikimedia.org/wikipedia/commons/1/1e/Shakshuka_by_Jennifer_May.jpg",
        "https://images.unsplash.com/photo-1590412200988-a436970781fa?auto=format&fit=crop&w=1200&q=80",
    ],
    "strawberry-banana-smoothie": [
        "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=1200&q=80",
    ],
    "green-detox-smoothie": [
        "https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&w=1200&q=80",
    ],
    "mango-smoothie": [
        "https://images.unsplash.com/photo-1525385133512-2f4bdd9adf53?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1623065428148-8f0b0b0b0b0b?auto=format&fit=crop&w=1200&q=80",
    ],
    "mixed-berry-smoothie": [
        "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1200&q=80",
    ],
    "peanut-butter-banana-smoothie": [
        "https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1623065428148-8f0b0b0b0b0b?auto=format&fit=crop&w=1200&q=80",
    ],
    "mushroom-risotto": [
        "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=1200&q=80",
        "https://upload.wikimedia.org/wikipedia/commons/8/8f/Risotto_ai_funghi.jpg",
    ],
    "chickpea-curry": [
        "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=80",
        "https://upload.wikimedia.org/wikipedia/commons/0/0c/Chole_%28chickpea_curry%29.jpg",
    ],
}


def ext_for(url: str, data: bytes) -> str:
    lower = url.lower()
    if ".png" in lower:
        return ".png"
    if ".webp" in lower:
        return ".webp"
    if data[:3] == b"\xff\xd8\xff":
        return ".jpg"
    if data[:8] == b"\x89PNG\r\n\x1a\n":
        return ".png"
    return ".jpg"


def fetch(url: str) -> bytes:
    ctx = ssl.create_default_context()
    req = urllib.request.Request(
        url,
        headers={
            "User-Agent": "CookivaraRecipeBot/1.0 (personal recipe site; +https://localhost)",
            "Accept": "image/*,*/*",
        },
    )
    with urllib.request.urlopen(req, timeout=45, context=ctx) as resp:
        data = resp.read()
    if len(data) < 8_000:
        raise RuntimeError(f"too small ({len(data)} bytes): {url}")
    return data


def main() -> None:
    ok = 0
    fail: list[str] = []
    for slug in sorted(set(IMAGES) | set(FALLBACKS)):
        urls = []
        if slug in IMAGES:
            urls.append(IMAGES[slug])
        urls.extend(FALLBACKS.get(slug, []))
        # de-dupe preserve order
        seen: set[str] = set()
        ordered = []
        for u in urls:
            if u not in seen:
                seen.add(u)
                ordered.append(u)

        saved = False
        for url in ordered:
            try:
                data = fetch(url)
                ext = ext_for(url, data)
                path = OUT / f"{slug}{ext}"
                # remove other extensions for this slug
                for old in OUT.glob(f"{slug}.*"):
                    if old != path:
                        old.unlink()
                path.write_bytes(data)
                print(f"OK  {slug} <- {url[:70]}... ({len(data)} bytes)")
                ok += 1
                saved = True
                break
            except Exception as exc:  # noqa: BLE001
                print(f"TRY {slug}: {exc}")
        if not saved:
            fail.append(slug)

    print(f"\nDownloaded {ok}. Failed: {fail or 'none'}")
    if fail:
        raise SystemExit(1)


if __name__ == "__main__":
    main()
