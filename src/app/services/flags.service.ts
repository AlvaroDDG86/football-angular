import { Injectable } from '@angular/core';
const COUNTRIES = {
  "Andorra": "ad",
  "United Arab Emirates": "ae",
  "Afghanistan": "af",
  "Antigua and Barbuda": "ag",
  "Anguilla": "ai",
  "Albania": "al",
  "Armenia": "am",
  "Angola": "ao",
  "Antarctica": "aq",
  "Argentina": "ar",
  "American Samoa": "as",
  "Austria": "at",
  "Australia": "au",
  "Aruba": "aw",
  "Åland Islands": "ax",
  "Azerbaijan": "az",
  "Bosnia and Herzegovina": "ba",
  "Barbados": "bb",
  "Bangladesh": "bd",
  "Belgium": "be",
  "Burkina Faso": "bf",
  "Bulgaria": "bg",
  "Bahrain": "bh",
  "Burundi": "bi",
  "Benin": "bj",
  "Saint Barthélemy": "bl",
  "Bermuda": "bm",
  "Brunei": "bn",
  "Bolivia": "bo",
  "Caribbean Netherlands": "bq",
  "Brazil": "br",
  "Bahamas": "bs",
  "Bhutan": "bt",
  "Bouvet Island": "bv",
  "Botswana": "bw",
  "Belarus": "by",
  "Belize": "bz",
  "Canada": "ca",
  "Cocos (Keeling) Islands": "cc",
  "DR Congo": "cd",
  "Central African Republic": "cf",
  "Republic of the Congo": "cg",
  "Switzerland": "ch",
  "Côte d’Ivoire": "ci",
  "Cook Islands": "ck",
  "Chile": "cl",
  "Cameroon": "cm",
  "China": "cn",
  "Colombia": "co",
  "Costa Rica": "cr",
  "Cuba": "cu",
  "Cape Verde": "cv",
  "Curaçao": "cw",
  "Christmas Island": "cx",
  "Cyprus": "cy",
  "Czechia": "cz",
  "Germany": "de",
  "Djibouti": "dj",
  "Denmark": "dk",
  "Dominica": "dm",
  "Dominican Republic": "do",
  "Algeria": "dz",
  "Ecuador": "ec",
  "Estonia": "ee",
  "Egypt": "eg",
  "Western Sahara": "eh",
  "Eritrea": "er",
  "Spain": "es",
  "Ethiopia": "et",
  "European Union": "eu",
  "Finland": "fi",
  "Fiji": "fj",
  "Falkland Islands": "fk",
  "Micronesia": "fm",
  "Faroe Islands": "fo",
  "France": "fr",
  "Gabon": "ga",
  "United Kingdom": "gb",
  "England": "gb-eng",
  "Northern Ireland": "gb-nir",
  "Scotland": "gb-sct",
  "Wales": "gb-wls",
  "Grenada": "gd",
  "Georgia": "ge",
  "French Guiana": "gf",
  "Guernsey": "gg",
  "Ghana": "gh",
  "Gibraltar": "gi",
  "Greenland": "gl",
  "Gambia": "gm",
  "Guinea": "gn",
  "Guadeloupe": "gp",
  "Equatorial Guinea": "gq",
  "Greece": "gr",
  "South Georgia": "gs",
  "Guatemala": "gt",
  "Guam": "gu",
  "Guinea-Bissau": "gw",
  "Guyana": "gy",
  "Hong Kong": "hk",
  "Heard Island and McDonald Islands": "hm",
  "Honduras": "hn",
  "Croatia": "hr",
  "Haiti": "ht",
  "Hungary": "hu",
  "Indonesia": "id",
  "Ireland": "ie",
  "Republic of Ireland": "ie",
  "Israel": "il",
  "Isle of Man": "im",
  "India": "in",
  "British Indian Ocean Territory": "io",
  "Iraq": "iq",
  "Iran": "ir",
  "Iceland": "is",
  "Italy": "it",
  "Jersey": "je",
  "Jamaica": "jm",
  "Jordan": "jo",
  "Japan": "jp",
  "Kenya": "ke",
  "Kyrgyzstan": "kg",
  "Cambodia": "kh",
  "Kiribati": "ki",
  "Comoros": "km",
  "Saint Kitts and Nevis": "kn",
  "North Korea": "kp",
  "South Korea": "kr",
  "Kuwait": "kw",
  "Cayman Islands": "ky",
  "Kazakhstan": "kz",
  "Laos": "la",
  "Lebanon": "lb",
  "Saint Lucia": "lc",
  "Liechtenstein": "li",
  "Sri Lanka": "lk",
  "Liberia": "lr",
  "Lesotho": "ls",
  "Lithuania": "lt",
  "Luxembourg": "lu",
  "Latvia": "lv",
  "Libya": "ly",
  "Morocco": "ma",
  "Monaco": "mc",
  "Moldova": "md",
  "Montenegro": "me",
  "Saint Martin": "mf",
  "Madagascar": "mg",
  "Marshall Islands": "mh",
  "North Macedonia": "mk",
  "Mali": "ml",
  "Myanmar": "mm",
  "Mongolia": "mn",
  "Macau": "mo",
  "Northern Mariana Islands": "mp",
  "Martinique": "mq",
  "Mauritania": "mr",
  "Montserrat": "ms",
  "Malta": "mt",
  "Mauritius": "mu",
  "Maldives": "mv",
  "Malawi": "mw",
  "Mexico": "mx",
  "Malaysia": "my",
  "Mozambique": "mz",
  "Namibia": "na",
  "New Caledonia": "nc",
  "Niger": "ne",
  "Norfolk Island": "nf",
  "Nigeria": "ng",
  "Nicaragua": "ni",
  "Netherlands": "nl",
  "Norway": "no",
  "Nepal": "np",
  "Nauru": "nr",
  "Niue": "nu",
  "New Zealand": "nz",
  "Oman": "om",
  "Panama": "pa",
  "Peru": "pe",
  "French Polynesia": "pf",
  "Papua New Guinea": "pg",
  "Philippines": "ph",
  "Pakistan": "pk",
  "Poland": "pl",
  "Saint Pierre and Miquelon": "pm",
  "Pitcairn Islands": "pn",
  "Puerto Rico": "pr",
  "Palestine": "ps",
  "Portugal": "pt",
  "Palau": "pw",
  "Paraguay": "py",
  "Qatar": "qa",
  "Réunion": "re",
  "Romania": "ro",
  "Serbia": "rs",
  "Russia": "ru",
  "Rwanda": "rw",
  "Saudi Arabia": "sa",
  "Solomon Islands": "sb",
  "Seychelles": "sc",
  "Sudan": "sd",
  "Sweden": "se",
  "Singapore": "sg",
  "Saint Helena, Ascension and Tristan da Cunha": "sh",
  "Slovenia": "si",
  "Svalbard and Jan Mayen": "sj",
  "Slovakia": "sk",
  "Sierra Leone": "sl",
  "San Marino": "sm",
  "Senegal": "sn",
  "Somalia": "so",
  "Suriname": "sr",
  "South Sudan": "ss",
  "São Tomé and Príncipe": "st",
  "El Salvador": "sv",
  "Sint Maarten": "sx",
  "Syria": "sy",
  "Eswatini (Swaziland)": "sz",
  "Turks and Caicos Islands": "tc",
  "Chad": "td",
  "French Southern and Antarctic Lands": "tf",
  "Togo": "tg",
  "Thailand": "th",
  "Tajikistan": "tj",
  "Tokelau": "tk",
  "Timor-Leste": "tl",
  "Turkmenistan": "tm",
  "Tunisia": "tn",
  "Tonga": "to",
  "Turkey": "tr",
  "Trinidad and Tobago": "tt",
  "Tuvalu": "tv",
  "Taiwan": "tw",
  "Tanzania": "tz",
  "Ukraine": "ua",
  "Uganda": "ug",
  "United States Minor Outlying Islands": "um",
  "United Nations": "un",
  "United States": "us",
  "Alaska": "us-a",
  "Alabama": "us-a",
  "Arkansas": "us-a",
  "Arizona": "us-a",
  "California": "us-c",
  "Colorado": "us-c",
  "Connecticut": "us-c",
  "Delaware": "us-d",
  "Florida": "us-f",
  "Hawaii": "us-h",
  "Iowa": "us-i",
  "Idaho": "us-i",
  "Illinois": "us-i",
  "Indiana": "us-i",
  "Kansas": "us-k",
  "Kentucky": "us-k",
  "Louisiana": "us-l",
  "Massachusetts": "us-m",
  "Maryland": "us-m",
  "Maine": "us-m",
  "Michigan": "us-m",
  "Minnesota": "us-m",
  "Missouri": "us-m",
  "Mississippi": "us-m",
  "Montana": "us-m",
  "North Carolina": "us-n",
  "North Dakota": "us-n",
  "Nebraska": "us-n",
  "New Hampshire": "us-n",
  "New Jersey": "us-n",
  "New Mexico": "us-n",
  "Nevada": "us-n",
  "New York": "us-n",
  "Ohio": "us-o",
  "Oklahoma": "us-o",
  "Oregon": "us-o",
  "Pennsylvania": "us-p",
  "Rhode Island": "us-r",
  "South Carolina": "us-s",
  "South Dakota": "us-s",
  "Tennessee": "us-t",
  "Texas": "us-t",
  "Utah": "us-u",
  "Virginia": "us-v",
  "Vermont": "us-v",
  "Washington": "us-w",
  "Wisconsin": "us-w",
  "West Virginia": "us-w",
  "Wyoming": "us-w",
  "Uruguay": "uy",
  "Uzbekistan": "uz",
  "Vatican City (Holy See)": "va",
  "Saint Vincent and the Grenadines": "vc",
  "Venezuela": "ve",
  "British Virgin Islands": "vg",
  "United States Virgin Islands": "vi",
  "Vietnam": "vn",
  "Vanuatu": "vu",
  "Wallis and Futuna": "wf",
  "Samoa": "ws",
  "Kosovo": "xk",
  "Yemen": "ye",
  "Mayotte": "yt",
  "South Africa": "za",
  "Zambia": "zm",
  "Zimbabwe": "zw"
}
@Injectable({
  providedIn: 'root'
})
export class FlagsService {

  constructor() { }

  getCountryKey(name: string) {
    return COUNTRIES[name];
  }
}
