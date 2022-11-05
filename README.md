# CPNT 262 : Individual Project - Fetching API Data
Author: Rustu Mesut Eser
Live site: [silentchallenger.github.io/cpnt262-individual-project](https://silentchallenger.github.io/cpnt262-individual-project)

## Above and Beyond
I chose the following
- Higher Order Function (forEach)
  - See line 69 in `client.js`
- Use an event listener to load your gallery
  - See line 8 and 78 in `client.js`
- Use a template element
  - See line 6 and 34-65 in `client.js`

## Example API Sample
```
"data": [
    {
      "mal_id": 5114,
      "url": "https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood",
      "images": {
        "jpg": {
          "image_url": "https://cdn.myanimelist.net/images/anime/1208/94745.jpg",
          "small_image_url": "https://cdn.myanimelist.net/images/anime/1208/94745t.jpg",
          "large_image_url": "https://cdn.myanimelist.net/images/anime/1208/94745l.jpg"
        },
        "webp": {
          "image_url": "https://cdn.myanimelist.net/images/anime/1208/94745.webp",
          "small_image_url": "https://cdn.myanimelist.net/images/anime/1208/94745t.webp",
          "large_image_url": "https://cdn.myanimelist.net/images/anime/1208/94745l.webp"
        }
      },
      "trailer": {
        "youtube_id": "--IcmZkvL0Q",
        "url": "https://www.youtube.com/watch?v=--IcmZkvL0Q",
        "embed_url": "https://www.youtube.com/embed/--IcmZkvL0Q?enablejsapi=1&wmode=opaque&autoplay=1",
        "images": {
          "image_url": "https://img.youtube.com/vi/--IcmZkvL0Q/default.jpg",
          "small_image_url": "https://img.youtube.com/vi/--IcmZkvL0Q/sddefault.jpg",
          "medium_image_url": "https://img.youtube.com/vi/--IcmZkvL0Q/mqdefault.jpg",
          "large_image_url": "https://img.youtube.com/vi/--IcmZkvL0Q/hqdefault.jpg",
          "maximum_image_url": "https://img.youtube.com/vi/--IcmZkvL0Q/maxresdefault.jpg"
        }
      },
      "approved": true,
      "titles": [
        {
          "type": "Default",
          "title": "Fullmetal Alchemist: Brotherhood"
        },
        {
          "type": "Synonym",
          "title": "Hagane no Renkinjutsushi: Fullmetal Alchemist"
        },
        {
          "type": "Synonym",
          "title": "Fullmetal Alchemist (2009)"
        },
        {
          "type": "Synonym",
          "title": "FMA"
        },
        {
          "type": "Synonym",
          "title": "FMAB"
        },
        {
          "type": "Japanese",
          "title": "鋼の錬金術師 FULLMETAL ALCHEMIST"
        },
        {
          "type": "English",
          "title": "Fullmetal Alchemist: Brotherhood"
        },
        {
          "type": "French",
          "title": "Fullmetal Alchemist Brotherhood"
        }
      ],
      "title": "Fullmetal Alchemist: Brotherhood",
      "title_english": "Fullmetal Alchemist: Brotherhood",
      "title_japanese": "鋼の錬金術師 FULLMETAL ALCHEMIST",
      "title_synonyms": [
        "Hagane no Renkinjutsushi: Fullmetal Alchemist",
        "Fullmetal Alchemist (2009)",
        "FMA",
        "FMAB"
      ],
      "type": "TV",
      "source": "Manga",
      "episodes": 64,
      "status": "Finished Airing",
      "airing": false,
      "aired": {
        "from": "2009-04-05T00:00:00+00:00",
        "to": "2010-07-04T00:00:00+00:00",
        "prop": {
          "from": {
            "day": 5,
            "month": 4,
            "year": 2009
          },
          "to": {
            "day": 4,
            "month": 7,
            "year": 2010
          }
        },
        "string": "Apr 5, 2009 to Jul 4, 2010"
      },
      "duration": "24 min per ep",
      "rating": "R - 17+ (violence & profanity)",
      "score": 9.12,
      "scored_by": 1924692,
      "rank": 1,
      "popularity": 3,
      "members": 3015346,
      "favorites": 209690,
      "synopsis": "After a horrific alchemy experiment goes wrong in the Elric household, brothers Edward and Alphonse are left in a catastrophic new reality. Ignoring the alchemical principle banning human transmutation, the boys attempted to bring their recently deceased mother back to life. Instead, they suffered brutal personal loss: Alphonse's body disintegrated while Edward lost a leg and then sacrificed an arm to keep Alphonse's soul in the physical realm by binding it to a hulking suit of armor. The brothers are rescued by their neighbor Pinako Rockbell and her granddaughter Winry. Known as a bio-mechanical engineering prodigy, Winry creates prosthetic limbs for Edward by utilizing \"automail,\" a tough, versatile metal used in robots and combat armor. After years of training, the Elric brothers set off on a quest to restore their bodies by locating the Philosopher's Stone—a powerful gem that allows an alchemist to defy the traditional laws of Equivalent Exchange. As Edward becomes an infamous alchemist and gains the nickname \"Fullmetal,\" the boys' journey embroils them in a growing conspiracy that threatens the fate of the world. [Written by MAL Rewrite]",
      "background": null,
      "season": "spring",
      "year": 2009,
      "broadcast": {
        "day": "Sundays",
        "time": "17:00",
        "timezone": "Asia/Tokyo",
        "string": "Sundays at 17:00 (JST)"
      },
      "producers": [
        {
          "mal_id": 17,
          "type": "anime",
          "name": "Aniplex",
          "url": "https://myanimelist.net/anime/producer/17/Aniplex"
        },
        {
          "mal_id": 58,
          "type": "anime",
          "name": "Square Enix",
          "url": "https://myanimelist.net/anime/producer/58/Square_Enix"
        },
        {
          "mal_id": 143,
          "type": "anime",
          "name": "Mainichi Broadcasting System",
          "url": "https://myanimelist.net/anime/producer/143/Mainichi_Broadcasting_System"
        },
        {
          "mal_id": 1155,
          "type": "anime",
          "name": "Studio Moriken",
          "url": "https://myanimelist.net/anime/producer/1155/Studio_Moriken"
        }
      ],
      "licensors": [
        {
          "mal_id": 102,
          "type": "anime",
          "name": "Funimation",
          "url": "https://myanimelist.net/anime/producer/102/Funimation"
        },
        {
          "mal_id": 493,
          "type": "anime",
          "name": "Aniplex of America",
          "url": "https://myanimelist.net/anime/producer/493/Aniplex_of_America"
        }
      ],
      "studios": [
        {
          "mal_id": 4,
          "type": "anime",
          "name": "Bones",
          "url": "https://myanimelist.net/anime/producer/4/Bones"
        }
      ],
      "genres": [
        {
          "mal_id": 1,
          "type": "anime",
          "name": "Action",
          "url": "https://myanimelist.net/anime/genre/1/Action"
        },
        {
          "mal_id": 2,
          "type": "anime",
          "name": "Adventure",
          "url": "https://myanimelist.net/anime/genre/2/Adventure"
        },
        {
          "mal_id": 8,
          "type": "anime",
          "name": "Drama",
          "url": "https://myanimelist.net/anime/genre/8/Drama"
        },
        {
          "mal_id": 10,
          "type": "anime",
          "name": "Fantasy",
          "url": "https://myanimelist.net/anime/genre/10/Fantasy"
        }
      ],
      "explicit_genres": [

      ],
      "themes": [
        {
          "mal_id": 38,
          "type": "anime",
          "name": "Military",
          "url": "https://myanimelist.net/anime/genre/38/Military"
        }
      ],
      "demographics": [
        {
          "mal_id": 27,
          "type": "anime",
          "name": "Shounen",
          "url": "https://myanimelist.net/anime/genre/27/Shounen"
        }
      ]
    },
  ```

## Attributions
- [Validation for null/undefined](https://stackoverflow.com/questions/6003884/how-do-i-check-for-null-values-in-javascript)
- [Jikan API](https://jikan.moe/)
- [Template HTML Tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template)
- [Google Fonts](https://fonts.google.com/)
    - [Roboto](https://fonts.google.com/specimen/Roboto)