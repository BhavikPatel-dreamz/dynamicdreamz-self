export type Country = {
  name: string;
  iso2: string;
  dialCode: string;
  priority: number;
  areaCodes: readonly string[] | null;
  exampleNumber: string;
  flagWidth: number;
  flagHeight: number;
  flagOffsetX: number;
};

export const COUNTRY_FLAG_SPRITE = {
  src: "/assets/icons/country-flags.png",
  width: 5652,
  height: 15,
} as const;

export const PREFERRED_COUNTRY_ISO2S = ["us", "gb"] as const;

export const DEFAULT_COUNTRY_ISO2 = "in" as const;

export const defaultCountry: Country = {
  "name": "India (भारत)",
  "iso2": "in",
  "dialCode": "91",
  "priority": 0,
  "areaCodes": null,
  "exampleNumber": "81234 56789",
  "flagWidth": 20,
  "flagHeight": 14,
  "flagOffsetX": -2413
};

export const countries: Country[] = [
  {
    "name": "Afghanistan (افغانستان)",
    "iso2": "af",
    "dialCode": "93",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "70 123 4567",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -66
  },
  {
    "name": "Albania (Shqipëri)",
    "iso2": "al",
    "dialCode": "355",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "67 212 3456",
    "flagWidth": 20,
    "flagHeight": 15,
    "flagOffsetX": -132
  },
  {
    "name": "Algeria (الجزائر)",
    "iso2": "dz",
    "dialCode": "213",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "551 23 45 67",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -1401
  },
  {
    "name": "American Samoa",
    "iso2": "as",
    "dialCode": "1",
    "priority": 5,
    "areaCodes": [
      "684"
    ],
    "exampleNumber": "684-733-1234",
    "flagWidth": 20,
    "flagHeight": 10,
    "flagOffsetX": -242
  },
  {
    "name": "Andorra",
    "iso2": "ad",
    "dialCode": "376",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "312 345",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -22
  },
  {
    "name": "Angola",
    "iso2": "ao",
    "dialCode": "244",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "923 123 456",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -176
  },
  {
    "name": "Anguilla",
    "iso2": "ai",
    "dialCode": "1",
    "priority": 6,
    "areaCodes": [
      "264"
    ],
    "exampleNumber": "264-235-1234",
    "flagWidth": 20,
    "flagHeight": 10,
    "flagOffsetX": -110
  },
  {
    "name": "Antigua and Barbuda",
    "iso2": "ag",
    "dialCode": "1",
    "priority": 7,
    "areaCodes": [
      "268"
    ],
    "exampleNumber": "268-464-1234",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -88
  },
  {
    "name": "Argentina",
    "iso2": "ar",
    "dialCode": "54",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "9 11 2345-6789",
    "flagWidth": 20,
    "flagHeight": 13,
    "flagOffsetX": -220
  },
  {
    "name": "Armenia (Հայաստան)",
    "iso2": "am",
    "dialCode": "374",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "77 123456",
    "flagWidth": 20,
    "flagHeight": 10,
    "flagOffsetX": -154
  },
  {
    "name": "Aruba",
    "iso2": "aw",
    "dialCode": "297",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "560 1234",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -308
  },
  {
    "name": "Ascension Island",
    "iso2": "ac",
    "dialCode": "247",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "40123",
    "flagWidth": 20,
    "flagHeight": 10,
    "flagOffsetX": 0
  },
  {
    "name": "Australia",
    "iso2": "au",
    "dialCode": "61",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "412 345 678",
    "flagWidth": 20,
    "flagHeight": 10,
    "flagOffsetX": -286
  },
  {
    "name": "Austria (Österreich)",
    "iso2": "at",
    "dialCode": "43",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "664 123456",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -264
  },
  {
    "name": "Azerbaijan (Azərbaycan)",
    "iso2": "az",
    "dialCode": "994",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "40 123 45 67",
    "flagWidth": 20,
    "flagHeight": 10,
    "flagOffsetX": -352
  },
  {
    "name": "Bahamas",
    "iso2": "bs",
    "dialCode": "1",
    "priority": 8,
    "areaCodes": [
      "242"
    ],
    "exampleNumber": "242-359-1234",
    "flagWidth": 20,
    "flagHeight": 10,
    "flagOffsetX": -702
  },
  {
    "name": "Bahrain (البحرين)",
    "iso2": "bh",
    "dialCode": "973",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "3600 1234",
    "flagWidth": 20,
    "flagHeight": 12,
    "flagOffsetX": -504
  },
  {
    "name": "Bangladesh (বাংলাদেশ)",
    "iso2": "bd",
    "dialCode": "880",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "1812-345678",
    "flagWidth": 20,
    "flagHeight": 12,
    "flagOffsetX": -418
  },
  {
    "name": "Barbados",
    "iso2": "bb",
    "dialCode": "1",
    "priority": 9,
    "areaCodes": [
      "246"
    ],
    "exampleNumber": "246-250-1234",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -396
  },
  {
    "name": "Belarus (Беларусь)",
    "iso2": "by",
    "dialCode": "375",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "29 491-19-11",
    "flagWidth": 20,
    "flagHeight": 10,
    "flagOffsetX": -790
  },
  {
    "name": "Belgium (België)",
    "iso2": "be",
    "dialCode": "32",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "470 12 34 56",
    "flagWidth": 18,
    "flagHeight": 15,
    "flagOffsetX": -440
  },
  {
    "name": "Belize",
    "iso2": "bz",
    "dialCode": "501",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "622-1234",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -812
  },
  {
    "name": "Benin (Bénin)",
    "iso2": "bj",
    "dialCode": "229",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "90 01 12 34",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -548
  },
  {
    "name": "Bermuda",
    "iso2": "bm",
    "dialCode": "1",
    "priority": 10,
    "areaCodes": [
      "441"
    ],
    "exampleNumber": "441-370-1234",
    "flagWidth": 20,
    "flagHeight": 10,
    "flagOffsetX": -592
  },
  {
    "name": "Bhutan (འབྲུག)",
    "iso2": "bt",
    "dialCode": "975",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "17 12 34 56",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -724
  },
  {
    "name": "Bolivia",
    "iso2": "bo",
    "dialCode": "591",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "71234567",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -636
  },
  {
    "name": "Bosnia and Herzegovina (Босна и Херцеговина)",
    "iso2": "ba",
    "dialCode": "387",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "61 123 456",
    "flagWidth": 20,
    "flagHeight": 10,
    "flagOffsetX": -374
  },
  {
    "name": "Botswana",
    "iso2": "bw",
    "dialCode": "267",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "71 123 456",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -768
  },
  {
    "name": "Brazil (Brasil)",
    "iso2": "br",
    "dialCode": "55",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "11 96123-4567",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -680
  },
  {
    "name": "British Indian Ocean Territory",
    "iso2": "io",
    "dialCode": "246",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "380 1234",
    "flagWidth": 20,
    "flagHeight": 10,
    "flagOffsetX": -2435
  },
  {
    "name": "British Virgin Islands",
    "iso2": "vg",
    "dialCode": "1",
    "priority": 11,
    "areaCodes": [
      "284"
    ],
    "exampleNumber": "284-300-1234",
    "flagWidth": 20,
    "flagHeight": 10,
    "flagOffsetX": -5390
  },
  {
    "name": "Brunei",
    "iso2": "bn",
    "dialCode": "673",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "712 3456",
    "flagWidth": 20,
    "flagHeight": 10,
    "flagOffsetX": -614
  },
  {
    "name": "Bulgaria (България)",
    "iso2": "bg",
    "dialCode": "359",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "48 123 456",
    "flagWidth": 20,
    "flagHeight": 12,
    "flagOffsetX": -482
  },
  {
    "name": "Burkina Faso",
    "iso2": "bf",
    "dialCode": "226",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "70 12 34 56",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -460
  },
  {
    "name": "Burundi (Uburundi)",
    "iso2": "bi",
    "dialCode": "257",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "79 56 12 34",
    "flagWidth": 20,
    "flagHeight": 12,
    "flagOffsetX": -526
  },
  {
    "name": "Cambodia (កម្ពុជា)",
    "iso2": "kh",
    "dialCode": "855",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "91 234 567",
    "flagWidth": 20,
    "flagHeight": 13,
    "flagOffsetX": -2677
  },
  {
    "name": "Cameroon (Cameroun)",
    "iso2": "cm",
    "dialCode": "237",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "6 71 23 45 67",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -1027
  },
  {
    "name": "Canada",
    "iso2": "ca",
    "dialCode": "1",
    "priority": 1,
    "areaCodes": [
      "204",
      "226",
      "236",
      "249",
      "250",
      "289",
      "306",
      "343",
      "365",
      "387",
      "403",
      "416",
      "418",
      "431",
      "437",
      "438",
      "450",
      "506",
      "514",
      "519",
      "548",
      "579",
      "581",
      "587",
      "604",
      "613",
      "639",
      "647",
      "672",
      "705",
      "709",
      "742",
      "778",
      "780",
      "782",
      "807",
      "819",
      "825",
      "867",
      "873",
      "902",
      "905"
    ],
    "exampleNumber": "506-234-5678",
    "flagWidth": 20,
    "flagHeight": 10,
    "flagOffsetX": -834
  },
  {
    "name": "Cape Verde (Kabu Verdi)",
    "iso2": "cv",
    "dialCode": "238",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "991 12 34",
    "flagWidth": 20,
    "flagHeight": 12,
    "flagOffsetX": -1159
  },
  {
    "name": "Caribbean Netherlands",
    "iso2": "bq",
    "dialCode": "599",
    "priority": 1,
    "areaCodes": [
      "3",
      "4",
      "7"
    ],
    "exampleNumber": "318 1234",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -658
  },
  {
    "name": "Cayman Islands",
    "iso2": "ky",
    "dialCode": "1",
    "priority": 12,
    "areaCodes": [
      "345"
    ],
    "exampleNumber": "345-323-1234",
    "flagWidth": 20,
    "flagHeight": 10,
    "flagOffsetX": -2831
  },
  {
    "name": "Central African Republic (République centrafricaine)",
    "iso2": "cf",
    "dialCode": "236",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "70 01 23 45",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -900
  },
  {
    "name": "Chad (Tchad)",
    "iso2": "td",
    "dialCode": "235",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "63 01 23 45",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -4845
  },
  {
    "name": "Chile",
    "iso2": "cl",
    "dialCode": "56",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "2 2123 4567",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -1005
  },
  {
    "name": "China (中国)",
    "iso2": "cn",
    "dialCode": "86",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "131 2345 6789",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -1049
  },
  {
    "name": "Christmas Island",
    "iso2": "cx",
    "dialCode": "61",
    "priority": 2,
    "areaCodes": [
      "89164"
    ],
    "exampleNumber": "412 345 678",
    "flagWidth": 20,
    "flagHeight": 10,
    "flagOffsetX": -1203
  },
  {
    "name": "Cocos (Keeling) Islands",
    "iso2": "cc",
    "dialCode": "61",
    "priority": 1,
    "areaCodes": [
      "89162"
    ],
    "exampleNumber": "412 345 678",
    "flagWidth": 20,
    "flagHeight": 10,
    "flagOffsetX": -856
  },
  {
    "name": "Colombia",
    "iso2": "co",
    "dialCode": "57",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "321 1234567",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -1071
  },
  {
    "name": "Comoros (جزر القمر)",
    "iso2": "km",
    "dialCode": "269",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "321 23 45",
    "flagWidth": 20,
    "flagHeight": 12,
    "flagOffsetX": -2721
  },
  {
    "name": "Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)",
    "iso2": "cd",
    "dialCode": "243",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "991 234 567",
    "flagWidth": 20,
    "flagHeight": 15,
    "flagOffsetX": -878
  },
  {
    "name": "Congo (Republic) (Congo-Brazzaville)",
    "iso2": "cg",
    "dialCode": "242",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "06 123 4567",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -922
  },
  {
    "name": "Cook Islands",
    "iso2": "ck",
    "dialCode": "682",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "71 234",
    "flagWidth": 20,
    "flagHeight": 10,
    "flagOffsetX": -983
  },
  {
    "name": "Costa Rica",
    "iso2": "cr",
    "dialCode": "506",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "8312 3456",
    "flagWidth": 20,
    "flagHeight": 12,
    "flagOffsetX": -1115
  },
  {
    "name": "Côte d’Ivoire",
    "iso2": "ci",
    "dialCode": "225",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "01 23 45 67",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -961
  },
  {
    "name": "Croatia (Hrvatska)",
    "iso2": "hr",
    "dialCode": "385",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "92 123 4567",
    "flagWidth": 20,
    "flagHeight": 10,
    "flagOffsetX": -2237
  },
  {
    "name": "Cuba",
    "iso2": "cu",
    "dialCode": "53",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "5 1234567",
    "flagWidth": 20,
    "flagHeight": 10,
    "flagOffsetX": -1137
  },
  {
    "name": "Curaçao",
    "iso2": "cw",
    "dialCode": "599",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "9 518 1234",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -1181
  },
  {
    "name": "Cyprus (Κύπρος)",
    "iso2": "cy",
    "dialCode": "357",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "96 123456",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -1225
  },
  {
    "name": "Czech Republic (Česká republika)",
    "iso2": "cz",
    "dialCode": "420",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "601 123 456",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -1247
  },
  {
    "name": "Denmark (Danmark)",
    "iso2": "dk",
    "dialCode": "45",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "32 12 34 56",
    "flagWidth": 20,
    "flagHeight": 15,
    "flagOffsetX": -1335
  },
  {
    "name": "Djibouti",
    "iso2": "dj",
    "dialCode": "253",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "77 83 10 01",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -1313
  },
  {
    "name": "Dominica",
    "iso2": "dm",
    "dialCode": "1",
    "priority": 13,
    "areaCodes": [
      "767"
    ],
    "exampleNumber": "767-225-1234",
    "flagWidth": 20,
    "flagHeight": 10,
    "flagOffsetX": -1357
  },
  {
    "name": "Dominican Republic (República Dominicana)",
    "iso2": "do",
    "dialCode": "1",
    "priority": 2,
    "areaCodes": [
      "809",
      "829",
      "849"
    ],
    "exampleNumber": "809-234-5678",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -1379
  },
  {
    "name": "Ecuador",
    "iso2": "ec",
    "dialCode": "593",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "99 123 4567",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -1445
  },
  {
    "name": "Egypt (مصر)",
    "iso2": "eg",
    "dialCode": "20",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "100 123 4567",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -1489
  },
  {
    "name": "El Salvador",
    "iso2": "sv",
    "dialCode": "503",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "7012 3456",
    "flagWidth": 20,
    "flagHeight": 12,
    "flagOffsetX": -4713
  },
  {
    "name": "Equatorial Guinea (Guinea Ecuatorial)",
    "iso2": "gq",
    "dialCode": "240",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "222 123 456",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -2017
  },
  {
    "name": "Eritrea",
    "iso2": "er",
    "dialCode": "291",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "7 123 456",
    "flagWidth": 20,
    "flagHeight": 10,
    "flagOffsetX": -1533
  },
  {
    "name": "Estonia (Eesti)",
    "iso2": "ee",
    "dialCode": "372",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "5123 4567",
    "flagWidth": 20,
    "flagHeight": 13,
    "flagOffsetX": -1467
  },
  {
    "name": "Eswatini",
    "iso2": "sz",
    "dialCode": "268",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "7612 3456",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -4779
  },
  {
    "name": "Ethiopia",
    "iso2": "et",
    "dialCode": "251",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "91 123 4567",
    "flagWidth": 20,
    "flagHeight": 10,
    "flagOffsetX": -1577
  },
  {
    "name": "Falkland Islands (Islas Malvinas)",
    "iso2": "fk",
    "dialCode": "500",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "51234",
    "flagWidth": 20,
    "flagHeight": 10,
    "flagOffsetX": -1665
  },
  {
    "name": "Faroe Islands (Føroyar)",
    "iso2": "fo",
    "dialCode": "298",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "211234",
    "flagWidth": 20,
    "flagHeight": 15,
    "flagOffsetX": -1709
  },
  {
    "name": "Fiji",
    "iso2": "fj",
    "dialCode": "679",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "701 2345",
    "flagWidth": 20,
    "flagHeight": 10,
    "flagOffsetX": -1643
  },
  {
    "name": "Finland (Suomi)",
    "iso2": "fi",
    "dialCode": "358",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "41 2345678",
    "flagWidth": 20,
    "flagHeight": 12,
    "flagOffsetX": -1621
  },
  {
    "name": "France",
    "iso2": "fr",
    "dialCode": "33",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "6 12 34 56 78",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -1731
  },
  {
    "name": "French Guiana (Guyane française)",
    "iso2": "gf",
    "dialCode": "594",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "694 20 12 34",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -1841
  },
  {
    "name": "French Polynesia (Polynésie française)",
    "iso2": "pf",
    "dialCode": "689",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "87 12 34 56",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -3943
  },
  {
    "name": "Gabon",
    "iso2": "ga",
    "dialCode": "241",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "06 03 12 34",
    "flagWidth": 20,
    "flagHeight": 15,
    "flagOffsetX": -1753
  },
  {
    "name": "Gambia",
    "iso2": "gm",
    "dialCode": "220",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "301 2345",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -1951
  },
  {
    "name": "Georgia (საქართველო)",
    "iso2": "ge",
    "dialCode": "995",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "555 12 34 56",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -1819
  },
  {
    "name": "Germany (Deutschland)",
    "iso2": "de",
    "dialCode": "49",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "1512 3456789",
    "flagWidth": 20,
    "flagHeight": 12,
    "flagOffsetX": -1269
  },
  {
    "name": "Ghana (Gaana)",
    "iso2": "gh",
    "dialCode": "233",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "23 123 4567",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -1885
  },
  {
    "name": "Gibraltar",
    "iso2": "gi",
    "dialCode": "350",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "57123456",
    "flagWidth": 20,
    "flagHeight": 10,
    "flagOffsetX": -1907
  },
  {
    "name": "Greece (Ελλάδα)",
    "iso2": "gr",
    "dialCode": "30",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "691 234 5678",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -2039
  },
  {
    "name": "Greenland (Kalaallit Nunaat)",
    "iso2": "gl",
    "dialCode": "299",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "22 12 34",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -1929
  },
  {
    "name": "Grenada",
    "iso2": "gd",
    "dialCode": "1",
    "priority": 14,
    "areaCodes": [
      "473"
    ],
    "exampleNumber": "473-403-1234",
    "flagWidth": 20,
    "flagHeight": 12,
    "flagOffsetX": -1797
  },
  {
    "name": "Guadeloupe",
    "iso2": "gp",
    "dialCode": "590",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "690 00 12 34",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -1995
  },
  {
    "name": "Guam",
    "iso2": "gu",
    "dialCode": "1",
    "priority": 15,
    "areaCodes": [
      "671"
    ],
    "exampleNumber": "671-300-1234",
    "flagWidth": 20,
    "flagHeight": 11,
    "flagOffsetX": -2105
  },
  {
    "name": "Guatemala",
    "iso2": "gt",
    "dialCode": "502",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "5123 4567",
    "flagWidth": 20,
    "flagHeight": 13,
    "flagOffsetX": -2083
  },
  {
    "name": "Guernsey",
    "iso2": "gg",
    "dialCode": "44",
    "priority": 1,
    "areaCodes": [
      "1481",
      "7781",
      "7839",
      "7911"
    ],
    "exampleNumber": "7781 123456",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -1863
  },
  {
    "name": "Guinea (Guinée)",
    "iso2": "gn",
    "dialCode": "224",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "601 12 34 56",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -1973
  },
  {
    "name": "Guinea-Bissau (Guiné Bissau)",
    "iso2": "gw",
    "dialCode": "245",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "955 012 345",
    "flagWidth": 20,
    "flagHeight": 10,
    "flagOffsetX": -2127
  },
  {
    "name": "Guyana",
    "iso2": "gy",
    "dialCode": "592",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "609 1234",
    "flagWidth": 20,
    "flagHeight": 12,
    "flagOffsetX": -2149
  },
  {
    "name": "Haiti",
    "iso2": "ht",
    "dialCode": "509",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "34 10 1234",
    "flagWidth": 20,
    "flagHeight": 12,
    "flagOffsetX": -2259
  },
  {
    "name": "Honduras",
    "iso2": "hn",
    "dialCode": "504",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "9123-4567",
    "flagWidth": 20,
    "flagHeight": 10,
    "flagOffsetX": -2215
  },
  {
    "name": "Hong Kong (香港)",
    "iso2": "hk",
    "dialCode": "852",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "5123 4567",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -2171
  },
  {
    "name": "Hungary (Magyarország)",
    "iso2": "hu",
    "dialCode": "36",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "20 123 4567",
    "flagWidth": 20,
    "flagHeight": 10,
    "flagOffsetX": -2281
  },
  {
    "name": "Iceland (Ísland)",
    "iso2": "is",
    "dialCode": "354",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "611 1234",
    "flagWidth": 20,
    "flagHeight": 15,
    "flagOffsetX": -2501
  },
  {
    "name": "India (भारत)",
    "iso2": "in",
    "dialCode": "91",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "81234 56789",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -2413
  },
  {
    "name": "Indonesia",
    "iso2": "id",
    "dialCode": "62",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "812-345-678",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -2325
  },
  {
    "name": "Iran (ایران)",
    "iso2": "ir",
    "dialCode": "98",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "912 345 6789",
    "flagWidth": 20,
    "flagHeight": 12,
    "flagOffsetX": -2479
  },
  {
    "name": "Iraq (العراق)",
    "iso2": "iq",
    "dialCode": "964",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "791 234 5678",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -2457
  },
  {
    "name": "Ireland",
    "iso2": "ie",
    "dialCode": "353",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "85 012 3456",
    "flagWidth": 20,
    "flagHeight": 10,
    "flagOffsetX": -2347
  },
  {
    "name": "Isle of Man",
    "iso2": "im",
    "dialCode": "44",
    "priority": 2,
    "areaCodes": [
      "1624",
      "74576",
      "7524",
      "7924",
      "7624"
    ],
    "exampleNumber": "7924 123456",
    "flagWidth": 20,
    "flagHeight": 10,
    "flagOffsetX": -2391
  },
  {
    "name": "Israel (ישראל)",
    "iso2": "il",
    "dialCode": "972",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "50-234-5678",
    "flagWidth": 20,
    "flagHeight": 15,
    "flagOffsetX": -2369
  },
  {
    "name": "Italy (Italia)",
    "iso2": "it",
    "dialCode": "39",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "312 345 6789",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -2523
  },
  {
    "name": "Jamaica",
    "iso2": "jm",
    "dialCode": "1",
    "priority": 4,
    "areaCodes": [
      "876",
      "658"
    ],
    "exampleNumber": "876-210-1234",
    "flagWidth": 20,
    "flagHeight": 10,
    "flagOffsetX": -2567
  },
  {
    "name": "Japan (日本)",
    "iso2": "jp",
    "dialCode": "81",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "90-1234-5678",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -2611
  },
  {
    "name": "Jersey",
    "iso2": "je",
    "dialCode": "44",
    "priority": 3,
    "areaCodes": [
      "1534",
      "7509",
      "7700",
      "7797",
      "7829",
      "7937"
    ],
    "exampleNumber": "7797 712345",
    "flagWidth": 20,
    "flagHeight": 12,
    "flagOffsetX": -2545
  },
  {
    "name": "Jordan (الأردن)",
    "iso2": "jo",
    "dialCode": "962",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "7 9012 3456",
    "flagWidth": 20,
    "flagHeight": 10,
    "flagOffsetX": -2589
  },
  {
    "name": "Kazakhstan (Казахстан)",
    "iso2": "kz",
    "dialCode": "7",
    "priority": 1,
    "areaCodes": [
      "33",
      "7"
    ],
    "exampleNumber": "771 000 9998",
    "flagWidth": 20,
    "flagHeight": 10,
    "flagOffsetX": -2853
  },
  {
    "name": "Kenya",
    "iso2": "ke",
    "dialCode": "254",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "712 123456",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -2633
  },
  {
    "name": "Kiribati",
    "iso2": "ki",
    "dialCode": "686",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "72001234",
    "flagWidth": 20,
    "flagHeight": 10,
    "flagOffsetX": -2699
  },
  {
    "name": "Kosovo",
    "iso2": "xk",
    "dialCode": "383",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "43 201 234",
    "flagWidth": 20,
    "flagHeight": 15,
    "flagOffsetX": -5522
  },
  {
    "name": "Kuwait (الكويت)",
    "iso2": "kw",
    "dialCode": "965",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "500 12345",
    "flagWidth": 20,
    "flagHeight": 10,
    "flagOffsetX": -2809
  },
  {
    "name": "Kyrgyzstan (Кыргызстан)",
    "iso2": "kg",
    "dialCode": "996",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "700 123 456",
    "flagWidth": 20,
    "flagHeight": 12,
    "flagOffsetX": -2655
  },
  {
    "name": "Laos (ລາວ)",
    "iso2": "la",
    "dialCode": "856",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "20 23 123 456",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -2875
  },
  {
    "name": "Latvia (Latvija)",
    "iso2": "lv",
    "dialCode": "371",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "21 234 567",
    "flagWidth": 20,
    "flagHeight": 10,
    "flagOffsetX": -3073
  },
  {
    "name": "Lebanon (لبنان)",
    "iso2": "lb",
    "dialCode": "961",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "71 123 456",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -2897
  },
  {
    "name": "Lesotho",
    "iso2": "ls",
    "dialCode": "266",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "5012 3456",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -3007
  },
  {
    "name": "Liberia",
    "iso2": "lr",
    "dialCode": "231",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "77 012 3456",
    "flagWidth": 20,
    "flagHeight": 11,
    "flagOffsetX": -2985
  },
  {
    "name": "Libya (ليبيا)",
    "iso2": "ly",
    "dialCode": "218",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "91-2345678",
    "flagWidth": 20,
    "flagHeight": 10,
    "flagOffsetX": -3095
  },
  {
    "name": "Liechtenstein",
    "iso2": "li",
    "dialCode": "423",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "660 234 567",
    "flagWidth": 20,
    "flagHeight": 12,
    "flagOffsetX": -2941
  },
  {
    "name": "Lithuania (Lietuva)",
    "iso2": "lt",
    "dialCode": "370",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "612 34567",
    "flagWidth": 20,
    "flagHeight": 12,
    "flagOffsetX": -3029
  },
  {
    "name": "Luxembourg",
    "iso2": "lu",
    "dialCode": "352",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "628 123 456",
    "flagWidth": 20,
    "flagHeight": 12,
    "flagOffsetX": -3051
  },
  {
    "name": "Macau (澳門)",
    "iso2": "mo",
    "dialCode": "853",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "6612 3456",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -3358
  },
  {
    "name": "Macedonia (FYROM) (Македонија)",
    "iso2": "mk",
    "dialCode": "389",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "72 345 678",
    "flagWidth": 20,
    "flagHeight": 10,
    "flagOffsetX": -3270
  },
  {
    "name": "Madagascar (Madagasikara)",
    "iso2": "mg",
    "dialCode": "261",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "32 12 345 67",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -3226
  },
  {
    "name": "Malawi",
    "iso2": "mw",
    "dialCode": "265",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "991 23 45 67",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -3534
  },
  {
    "name": "Malaysia",
    "iso2": "my",
    "dialCode": "60",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "12-345 6789",
    "flagWidth": 20,
    "flagHeight": 10,
    "flagOffsetX": -3578
  },
  {
    "name": "Maldives",
    "iso2": "mv",
    "dialCode": "960",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "771-2345",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -3512
  },
  {
    "name": "Mali",
    "iso2": "ml",
    "dialCode": "223",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "65 01 23 45",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -3292
  },
  {
    "name": "Malta",
    "iso2": "mt",
    "dialCode": "356",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "9696 1234",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -3468
  },
  {
    "name": "Marshall Islands",
    "iso2": "mh",
    "dialCode": "692",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "235-1234",
    "flagWidth": 20,
    "flagHeight": 11,
    "flagOffsetX": -3248
  },
  {
    "name": "Martinique",
    "iso2": "mq",
    "dialCode": "596",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "696 20 12 34",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -3402
  },
  {
    "name": "Mauritania (موريتانيا)",
    "iso2": "mr",
    "dialCode": "222",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "22 12 34 56",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -3424
  },
  {
    "name": "Mauritius (Moris)",
    "iso2": "mu",
    "dialCode": "230",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "5251 2345",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -3490
  },
  {
    "name": "Mayotte",
    "iso2": "yt",
    "dialCode": "262",
    "priority": 1,
    "areaCodes": [
      "269",
      "639"
    ],
    "exampleNumber": "639 01 23 45",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -5566
  },
  {
    "name": "Mexico (México)",
    "iso2": "mx",
    "dialCode": "52",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "222 123 4567",
    "flagWidth": 20,
    "flagHeight": 12,
    "flagOffsetX": -3556
  },
  {
    "name": "Micronesia",
    "iso2": "fm",
    "dialCode": "691",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "350 1234",
    "flagWidth": 20,
    "flagHeight": 11,
    "flagOffsetX": -1687
  },
  {
    "name": "Moldova (Republica Moldova)",
    "iso2": "md",
    "dialCode": "373",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "621 12 345",
    "flagWidth": 20,
    "flagHeight": 10,
    "flagOffsetX": -3160
  },
  {
    "name": "Monaco",
    "iso2": "mc",
    "dialCode": "377",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "6 12 34 56 78",
    "flagWidth": 19,
    "flagHeight": 15,
    "flagOffsetX": -3139
  },
  {
    "name": "Mongolia (Монгол)",
    "iso2": "mn",
    "dialCode": "976",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "8812 3456",
    "flagWidth": 20,
    "flagHeight": 10,
    "flagOffsetX": -3336
  },
  {
    "name": "Montenegro (Crna Gora)",
    "iso2": "me",
    "dialCode": "382",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "67 622 901",
    "flagWidth": 20,
    "flagHeight": 10,
    "flagOffsetX": -3182
  },
  {
    "name": "Montserrat",
    "iso2": "ms",
    "dialCode": "1",
    "priority": 16,
    "areaCodes": [
      "664"
    ],
    "exampleNumber": "664-492-3456",
    "flagWidth": 20,
    "flagHeight": 10,
    "flagOffsetX": -3446
  },
  {
    "name": "Morocco (المغرب)",
    "iso2": "ma",
    "dialCode": "212",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "650-123456",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -3117
  },
  {
    "name": "Mozambique (Moçambique)",
    "iso2": "mz",
    "dialCode": "258",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "82 123 4567",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -3600
  },
  {
    "name": "Myanmar (Burma) (မြန်မာ)",
    "iso2": "mm",
    "dialCode": "95",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "9 212 3456",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -3314
  },
  {
    "name": "Namibia (Namibië)",
    "iso2": "na",
    "dialCode": "264",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "81 123 4567",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -3622
  },
  {
    "name": "Nauru",
    "iso2": "nr",
    "dialCode": "674",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "555 1234",
    "flagWidth": 20,
    "flagHeight": 10,
    "flagOffsetX": -3811
  },
  {
    "name": "Nepal (नेपाल)",
    "iso2": "np",
    "dialCode": "977",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "984-1234567",
    "flagWidth": 13,
    "flagHeight": 15,
    "flagOffsetX": -3796
  },
  {
    "name": "Netherlands (Nederland)",
    "iso2": "nl",
    "dialCode": "31",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "6 12345678",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -3752
  },
  {
    "name": "New Caledonia (Nouvelle-Calédonie)",
    "iso2": "nc",
    "dialCode": "687",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "75.12.34",
    "flagWidth": 20,
    "flagHeight": 10,
    "flagOffsetX": -3644
  },
  {
    "name": "New Zealand",
    "iso2": "nz",
    "dialCode": "64",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "21 123 4567",
    "flagWidth": 20,
    "flagHeight": 10,
    "flagOffsetX": -3855
  },
  {
    "name": "Nicaragua",
    "iso2": "ni",
    "dialCode": "505",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "8123 4567",
    "flagWidth": 20,
    "flagHeight": 12,
    "flagOffsetX": -3730
  },
  {
    "name": "Niger (Nijar)",
    "iso2": "ne",
    "dialCode": "227",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "93 12 34 56",
    "flagWidth": 18,
    "flagHeight": 15,
    "flagOffsetX": -3666
  },
  {
    "name": "Nigeria",
    "iso2": "ng",
    "dialCode": "234",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "802 123 4567",
    "flagWidth": 20,
    "flagHeight": 10,
    "flagOffsetX": -3708
  },
  {
    "name": "Niue",
    "iso2": "nu",
    "dialCode": "683",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "888 4012",
    "flagWidth": 20,
    "flagHeight": 10,
    "flagOffsetX": -3833
  },
  {
    "name": "Norfolk Island",
    "iso2": "nf",
    "dialCode": "672",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "3 81234",
    "flagWidth": 20,
    "flagHeight": 10,
    "flagOffsetX": -3686
  },
  {
    "name": "North Korea (조선 민주주의 인민 공화국)",
    "iso2": "kp",
    "dialCode": "850",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "192 123 4567",
    "flagWidth": 20,
    "flagHeight": 10,
    "flagOffsetX": -2765
  },
  {
    "name": "Northern Mariana Islands",
    "iso2": "mp",
    "dialCode": "1",
    "priority": 17,
    "areaCodes": [
      "670"
    ],
    "exampleNumber": "670-234-5678",
    "flagWidth": 20,
    "flagHeight": 10,
    "flagOffsetX": -3380
  },
  {
    "name": "Norway (Norge)",
    "iso2": "no",
    "dialCode": "47",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "406 12 345",
    "flagWidth": 20,
    "flagHeight": 15,
    "flagOffsetX": -3774
  },
  {
    "name": "Oman (عُمان)",
    "iso2": "om",
    "dialCode": "968",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "9212 3456",
    "flagWidth": 20,
    "flagHeight": 10,
    "flagOffsetX": -3877
  },
  {
    "name": "Pakistan (پاکستان)",
    "iso2": "pk",
    "dialCode": "92",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "301 2345678",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -4009
  },
  {
    "name": "Palau",
    "iso2": "pw",
    "dialCode": "680",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "620 1234",
    "flagWidth": 20,
    "flagHeight": 13,
    "flagOffsetX": -4163
  },
  {
    "name": "Palestine (فلسطين)",
    "iso2": "ps",
    "dialCode": "970",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "599 123 456",
    "flagWidth": 20,
    "flagHeight": 10,
    "flagOffsetX": -4119
  },
  {
    "name": "Panama (Panamá)",
    "iso2": "pa",
    "dialCode": "507",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "6123-4567",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -3899
  },
  {
    "name": "Papua New Guinea",
    "iso2": "pg",
    "dialCode": "675",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "7012 3456",
    "flagWidth": 20,
    "flagHeight": 15,
    "flagOffsetX": -3965
  },
  {
    "name": "Paraguay",
    "iso2": "py",
    "dialCode": "595",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "961 456789",
    "flagWidth": 20,
    "flagHeight": 11,
    "flagOffsetX": -4185
  },
  {
    "name": "Peru (Perú)",
    "iso2": "pe",
    "dialCode": "51",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "912 345 678",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -3921
  },
  {
    "name": "Philippines",
    "iso2": "ph",
    "dialCode": "63",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "905 123 4567",
    "flagWidth": 20,
    "flagHeight": 10,
    "flagOffsetX": -3987
  },
  {
    "name": "Poland (Polska)",
    "iso2": "pl",
    "dialCode": "48",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "512 345 678",
    "flagWidth": 20,
    "flagHeight": 13,
    "flagOffsetX": -4031
  },
  {
    "name": "Portugal",
    "iso2": "pt",
    "dialCode": "351",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "912 345 678",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -4141
  },
  {
    "name": "Puerto Rico",
    "iso2": "pr",
    "dialCode": "1",
    "priority": 3,
    "areaCodes": [
      "787",
      "939"
    ],
    "exampleNumber": "787-234-5678",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -4097
  },
  {
    "name": "Qatar (قطر)",
    "iso2": "qa",
    "dialCode": "974",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "3312 3456",
    "flagWidth": 20,
    "flagHeight": 8,
    "flagOffsetX": -4207
  },
  {
    "name": "Réunion (La Réunion)",
    "iso2": "re",
    "dialCode": "262",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "692 12 34 56",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -4229
  },
  {
    "name": "Romania (România)",
    "iso2": "ro",
    "dialCode": "40",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "712 034 567",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -4251
  },
  {
    "name": "Russia (Россия)",
    "iso2": "ru",
    "dialCode": "7",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "912 345-67-89",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -4295
  },
  {
    "name": "Rwanda",
    "iso2": "rw",
    "dialCode": "250",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "720 123 456",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -4317
  },
  {
    "name": "Saint Barthélemy",
    "iso2": "bl",
    "dialCode": "590",
    "priority": 1,
    "areaCodes": null,
    "exampleNumber": "690 00 12 34",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -570
  },
  {
    "name": "Saint Helena",
    "iso2": "sh",
    "dialCode": "290",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "51234",
    "flagWidth": 20,
    "flagHeight": 10,
    "flagOffsetX": -4471
  },
  {
    "name": "Saint Kitts and Nevis",
    "iso2": "kn",
    "dialCode": "1",
    "priority": 18,
    "areaCodes": [
      "869"
    ],
    "exampleNumber": "869-765-2917",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -2743
  },
  {
    "name": "Saint Lucia",
    "iso2": "lc",
    "dialCode": "1",
    "priority": 19,
    "areaCodes": [
      "758"
    ],
    "exampleNumber": "758-284-5678",
    "flagWidth": 20,
    "flagHeight": 10,
    "flagOffsetX": -2919
  },
  {
    "name": "Saint Martin (Saint-Martin (partie française))",
    "iso2": "mf",
    "dialCode": "590",
    "priority": 2,
    "areaCodes": null,
    "exampleNumber": "690 00 12 34",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -3204
  },
  {
    "name": "Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)",
    "iso2": "pm",
    "dialCode": "508",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "55 12 34",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -4053
  },
  {
    "name": "Saint Vincent and the Grenadines",
    "iso2": "vc",
    "dialCode": "1",
    "priority": 20,
    "areaCodes": [
      "784"
    ],
    "exampleNumber": "784-430-1234",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -5346
  },
  {
    "name": "Samoa",
    "iso2": "ws",
    "dialCode": "685",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "72 12345",
    "flagWidth": 20,
    "flagHeight": 10,
    "flagOffsetX": -5500
  },
  {
    "name": "San Marino",
    "iso2": "sm",
    "dialCode": "378",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "66 66 12 12",
    "flagWidth": 20,
    "flagHeight": 15,
    "flagOffsetX": -4581
  },
  {
    "name": "São Tomé and Príncipe (São Tomé e Príncipe)",
    "iso2": "st",
    "dialCode": "239",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "981 2345",
    "flagWidth": 20,
    "flagHeight": 10,
    "flagOffsetX": -4691
  },
  {
    "name": "Saudi Arabia (المملكة العربية السعودية)",
    "iso2": "sa",
    "dialCode": "966",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "51 234 5678",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -4339
  },
  {
    "name": "Senegal (Sénégal)",
    "iso2": "sn",
    "dialCode": "221",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "70 123 45 67",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -4603
  },
  {
    "name": "Serbia (Србија)",
    "iso2": "rs",
    "dialCode": "381",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "60 1234567",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -4273
  },
  {
    "name": "Seychelles",
    "iso2": "sc",
    "dialCode": "248",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "2 510 123",
    "flagWidth": 20,
    "flagHeight": 10,
    "flagOffsetX": -4383
  },
  {
    "name": "Sierra Leone",
    "iso2": "sl",
    "dialCode": "232",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "25 123456",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -4559
  },
  {
    "name": "Singapore",
    "iso2": "sg",
    "dialCode": "65",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "8123 4567",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -4449
  },
  {
    "name": "Sint Maarten",
    "iso2": "sx",
    "dialCode": "1",
    "priority": 21,
    "areaCodes": [
      "721"
    ],
    "exampleNumber": "721-520-5678",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -4735
  },
  {
    "name": "Slovakia (Slovensko)",
    "iso2": "sk",
    "dialCode": "421",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "912 123 456",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -4537
  },
  {
    "name": "Slovenia (Slovenija)",
    "iso2": "si",
    "dialCode": "386",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "31 234 567",
    "flagWidth": 20,
    "flagHeight": 10,
    "flagOffsetX": -4493
  },
  {
    "name": "Solomon Islands",
    "iso2": "sb",
    "dialCode": "677",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "74 21234",
    "flagWidth": 20,
    "flagHeight": 10,
    "flagOffsetX": -4361
  },
  {
    "name": "Somalia (Soomaaliya)",
    "iso2": "so",
    "dialCode": "252",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "7 1123456",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -4625
  },
  {
    "name": "South Africa",
    "iso2": "za",
    "dialCode": "27",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "71 123 4567",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -5588
  },
  {
    "name": "South Korea (대한민국)",
    "iso2": "kr",
    "dialCode": "82",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "10-2000-0000",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -2787
  },
  {
    "name": "South Sudan (جنوب السودان)",
    "iso2": "ss",
    "dialCode": "211",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "977 123 456",
    "flagWidth": 20,
    "flagHeight": 10,
    "flagOffsetX": -4669
  },
  {
    "name": "Spain (España)",
    "iso2": "es",
    "dialCode": "34",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "612 34 56 78",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -1555
  },
  {
    "name": "Sri Lanka (ශ්‍රී ලංකාව)",
    "iso2": "lk",
    "dialCode": "94",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "71 234 5678",
    "flagWidth": 20,
    "flagHeight": 10,
    "flagOffsetX": -2963
  },
  {
    "name": "Sudan (السودان)",
    "iso2": "sd",
    "dialCode": "249",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "91 123 1234",
    "flagWidth": 20,
    "flagHeight": 10,
    "flagOffsetX": -4405
  },
  {
    "name": "Suriname",
    "iso2": "sr",
    "dialCode": "597",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "741-2345",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -4647
  },
  {
    "name": "Svalbard and Jan Mayen",
    "iso2": "sj",
    "dialCode": "47",
    "priority": 1,
    "areaCodes": [
      "79"
    ],
    "exampleNumber": "412 34 567",
    "flagWidth": 20,
    "flagHeight": 15,
    "flagOffsetX": -4515
  },
  {
    "name": "Sweden (Sverige)",
    "iso2": "se",
    "dialCode": "46",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "70 123 45 67",
    "flagWidth": 20,
    "flagHeight": 13,
    "flagOffsetX": -4427
  },
  {
    "name": "Switzerland (Schweiz)",
    "iso2": "ch",
    "dialCode": "41",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "78 123 45 67",
    "flagWidth": 15,
    "flagHeight": 15,
    "flagOffsetX": -944
  },
  {
    "name": "Syria (سوريا)",
    "iso2": "sy",
    "dialCode": "963",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "944 567 890",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -4757
  },
  {
    "name": "Taiwan (台灣)",
    "iso2": "tw",
    "dialCode": "886",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "912 345 678",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -5131
  },
  {
    "name": "Tajikistan",
    "iso2": "tj",
    "dialCode": "992",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "917 12 3456",
    "flagWidth": 20,
    "flagHeight": 10,
    "flagOffsetX": -4933
  },
  {
    "name": "Tanzania",
    "iso2": "tz",
    "dialCode": "255",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "621 234 567",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -5153
  },
  {
    "name": "Thailand (ไทย)",
    "iso2": "th",
    "dialCode": "66",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "81 234 5678",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -4911
  },
  {
    "name": "Timor-Leste",
    "iso2": "tl",
    "dialCode": "670",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "7721 2345",
    "flagWidth": 20,
    "flagHeight": 10,
    "flagOffsetX": -4977
  },
  {
    "name": "Togo",
    "iso2": "tg",
    "dialCode": "228",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "90 11 23 45",
    "flagWidth": 20,
    "flagHeight": 13,
    "flagOffsetX": -4889
  },
  {
    "name": "Tokelau",
    "iso2": "tk",
    "dialCode": "690",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "7290",
    "flagWidth": 20,
    "flagHeight": 10,
    "flagOffsetX": -4955
  },
  {
    "name": "Tonga",
    "iso2": "to",
    "dialCode": "676",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "771 5123",
    "flagWidth": 20,
    "flagHeight": 10,
    "flagOffsetX": -5043
  },
  {
    "name": "Trinidad and Tobago",
    "iso2": "tt",
    "dialCode": "1",
    "priority": 22,
    "areaCodes": [
      "868"
    ],
    "exampleNumber": "868-291-1234",
    "flagWidth": 20,
    "flagHeight": 12,
    "flagOffsetX": -5087
  },
  {
    "name": "Tunisia (تونس)",
    "iso2": "tn",
    "dialCode": "216",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "20 123 456",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -5021
  },
  {
    "name": "Turkey (Türkiye)",
    "iso2": "tr",
    "dialCode": "90",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "501 234 56 78",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -5065
  },
  {
    "name": "Turkmenistan",
    "iso2": "tm",
    "dialCode": "993",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "66 123456",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -4999
  },
  {
    "name": "Turks and Caicos Islands",
    "iso2": "tc",
    "dialCode": "1",
    "priority": 23,
    "areaCodes": [
      "649"
    ],
    "exampleNumber": "649-231-1234",
    "flagWidth": 20,
    "flagHeight": 10,
    "flagOffsetX": -4823
  },
  {
    "name": "Tuvalu",
    "iso2": "tv",
    "dialCode": "688",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "90 1234",
    "flagWidth": 20,
    "flagHeight": 10,
    "flagOffsetX": -5109
  },
  {
    "name": "U.S. Virgin Islands",
    "iso2": "vi",
    "dialCode": "1",
    "priority": 24,
    "areaCodes": [
      "340"
    ],
    "exampleNumber": "340-642-1234",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -5412
  },
  {
    "name": "Uganda",
    "iso2": "ug",
    "dialCode": "256",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "712 345678",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -5197
  },
  {
    "name": "Ukraine (Україна)",
    "iso2": "ua",
    "dialCode": "380",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "50 123 4567",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -5175
  },
  {
    "name": "United Arab Emirates (الإمارات العربية المتحدة)",
    "iso2": "ae",
    "dialCode": "971",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "50 123 4567",
    "flagWidth": 20,
    "flagHeight": 10,
    "flagOffsetX": -44
  },
  {
    "name": "United Kingdom",
    "iso2": "gb",
    "dialCode": "44",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "7400 123456",
    "flagWidth": 20,
    "flagHeight": 10,
    "flagOffsetX": -1775
  },
  {
    "name": "United States",
    "iso2": "us",
    "dialCode": "1",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "201-555-0123",
    "flagWidth": 20,
    "flagHeight": 11,
    "flagOffsetX": -5263
  },
  {
    "name": "Uruguay",
    "iso2": "uy",
    "dialCode": "598",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "94 231 234",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -5285
  },
  {
    "name": "Uzbekistan (Oʻzbekiston)",
    "iso2": "uz",
    "dialCode": "998",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "91 234 56 78",
    "flagWidth": 20,
    "flagHeight": 10,
    "flagOffsetX": -5307
  },
  {
    "name": "Vanuatu",
    "iso2": "vu",
    "dialCode": "678",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "591 2345",
    "flagWidth": 20,
    "flagHeight": 12,
    "flagOffsetX": -5456
  },
  {
    "name": "Vatican City (Città del Vaticano)",
    "iso2": "va",
    "dialCode": "39",
    "priority": 1,
    "areaCodes": [
      "06698"
    ],
    "exampleNumber": "312 345 6789",
    "flagWidth": 15,
    "flagHeight": 15,
    "flagOffsetX": -5329
  },
  {
    "name": "Venezuela",
    "iso2": "ve",
    "dialCode": "58",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "412-1234567",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -5368
  },
  {
    "name": "Vietnam (Việt Nam)",
    "iso2": "vn",
    "dialCode": "84",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "91 234 56 78",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -5434
  },
  {
    "name": "Wallis and Futuna (Wallis-et-Futuna)",
    "iso2": "wf",
    "dialCode": "681",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "82 12 34",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -5478
  },
  {
    "name": "Western Sahara (الصحراء الغربية)",
    "iso2": "eh",
    "dialCode": "212",
    "priority": 1,
    "areaCodes": [
      "5288",
      "5289"
    ],
    "exampleNumber": "650-123456",
    "flagWidth": 20,
    "flagHeight": 10,
    "flagOffsetX": -1511
  },
  {
    "name": "Yemen (اليمن)",
    "iso2": "ye",
    "dialCode": "967",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "712 345 678",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -5544
  },
  {
    "name": "Zambia",
    "iso2": "zm",
    "dialCode": "260",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "95 5123456",
    "flagWidth": 20,
    "flagHeight": 14,
    "flagOffsetX": -5610
  },
  {
    "name": "Zimbabwe",
    "iso2": "zw",
    "dialCode": "263",
    "priority": 0,
    "areaCodes": null,
    "exampleNumber": "71 234 5678",
    "flagWidth": 20,
    "flagHeight": 10,
    "flagOffsetX": -5632
  },
  {
    "name": "Åland Islands",
    "iso2": "ax",
    "dialCode": "358",
    "priority": 1,
    "areaCodes": [
      "18"
    ],
    "exampleNumber": "41 2345678",
    "flagWidth": 20,
    "flagHeight": 13,
    "flagOffsetX": -330
  }
];

export const preferredCountries: Country[] = PREFERRED_COUNTRY_ISO2S
  .map((iso2) => countries.find((c) => c.iso2 === iso2))
  .filter((country): country is Country => Boolean(country));

export const countrySelectOptions: readonly string[] = countries.map(
  (country) => country.name,
);
