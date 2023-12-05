import { getWeather } from "./getWeather.js";

export async function showCard(data) {
  const cardContainer = document.querySelector(".container");
  cardContainer.textContent = "";
  console.log(data);
  for (let ciudad of data) {
    const cardElement = document.createElement("div");
    cardElement.className = "card m-1";
    cardElement.style.maxWidth = "fit-content";
    let weather = await getWeather(ciudad.lat, ciudad.lon)
      .then((data) => data)
      .catch((error) => showError(error));
    console.log(weather);
    const header = document.createElement("div");
    header.className = "card-header";
    const name = !ciudad.local_names
      ? ciudad.name
      : !ciudad.local_names.es
      ? ciudad.name
      : ciudad.local_names.es;
    header.innerHTML = name + " (" + obtenerNombrePais(ciudad.country) + ")";
    const body = document.createElement("div");
    body.className = "card-body";
    body.innerHTML =
      "<h2>" +
      weather.weather[0].description +
      "</h2>" +
      "<br>" +
      "Temperatura: " +
      weather.main.temp +
      " ºC" +
      "<br>" +
      "Max: " +
      weather.main.temp_max +
      " ºC" +
      " Min: " +
      weather.main.temp_min +
      " ºC" +
      "<br>" +
      "Sensación térmica: " +
      weather.main.feels_like +
      " ºC" +
      "<br>" +
      "Humedad: " +
      weather.main.humidity +
      " %" +
      "<br>" +
      "Presión: " +
      weather.main.pressure +
      " hPa" +
      "<br>" +
      "Porcentaje de nubes: " +
      weather.clouds.all +
      " %";
    if (weather.rain) {
      if (weather.rain["1h"]) {
        body.innerHTML +=
          "<br>" + "Lluvia en la última hora: " + weather.rain["1h"] + " mm";
      }
    }
    if (weather.snow) {
      if (weather.snow["1h"]) {
        body.innerHTML +=
          "<br>" + "Nieve en la última hora: " + weather.snow["1h"] + " mm";
      }
    }
    body.innerHTML +=
      "<br>" +
      "Visibilidad: " +
      (weather.visibility > 1000
        ? (weather.visibility / 1000).toFixed(2) + " km"
        : weather.visibility + " m");
    body.innerHTML +=
      "<br>" +
      "Viento: " +
      weather.wind.speed +
      "m/s" +
      " Dirección: " +
      weather.wind.deg +
      "º";
    const footer = document.createElement("div");
    footer.className = "card-header";
    footer.innerHTML = "Lat: " + ciudad.lat + " Lon: " + ciudad.lon;

    cardElement.appendChild(getImage(weather.weather[0].icon));
    if (weather.weather[0].description !='cielo claro') {
      /* ---------------------------------- nube ---------------------------------- */
      const nubeOverlay = document.createElement("div");
      nubeOverlay.className = "card-img-overlay";
      const delay = (Math.random()*150)/10;
      console.log(delay);
      nubeOverlay.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svg2" viewBox="100 100 300 300" height="256" width="256">
                                <path id="nube"
                                  d="m 185,132 c 0,16 -23,26 -56,26 -32,0 -59,-13 -59,-29 0,-16 34,-47 56,-26 9,-11 37,-3 35,12 8,-7 23,8 23,16 z"
                                  style="opacity:.5;fill:#cbffff;fill-opacity:.5;">
                                  <animateMotion dur="15s" repeatCount="indefinite"
                                    path="m 60,125 c 20,-15 200,-50 125,15 -50,50 -100,-50 -100,-10 0,50 -50,20 -50,5 z"
                                    begin="-${delay}s"/>
                                </path>
                              </svg>`;
      /* -------------------------------------------------------------------------- */
      cardElement.appendChild(nubeOverlay); // nube
    }
    cardElement.appendChild(header);
    cardElement.appendChild(body);
    cardElement.appendChild(footer);
    cardContainer.appendChild(cardElement);
  }
}

function obtenerNombrePais(codigoPais) {
  const paises = {
    AF: "Afganistán",
    AL: "Albania",
    DE: "Alemania",
    AD: "Andorra",
    AO: "Angola",
    AI: "Anguila",
    AG: "Antigua y Barbuda",
    AQ: "Antártida",
    SA: "Arabia Saudita",
    DZ: "Argelia",
    AR: "Argentina",
    AM: "Armenia",
    AW: "Aruba",
    AU: "Australia",
    AT: "Austria",
    AZ: "Azerbaiyán",
    BS: "Bahamas",
    BH: "Bahrein",
    BD: "Bangladesh",
    BB: "Barbados",
    BY: "Belarús",
    BZ: "Belice",
    BJ: "Benín",
    BT: "Bhután",
    BO: "Bolivia",
    BA: "Bosnia y Herzegovina",
    BW: "Botswana",
    BR: "Brasil",
    BN: "Brunei Darussalam",
    BG: "Bulgaria",
    BF: "Burkina Faso",
    BI: "Burundi",
    BE: "Bélgica",
    CV: "Cabo Verde",
    KH: "Camboya",
    CM: "Camerún",
    CA: "Canadá",
    TD: "Chad",
    CZ: "Chequia",
    CL: "Chile",
    CN: "China",
    CY: "Chipre",
    CO: "Colombia",
    KM: "Comoras",
    CG: "Congo",
    CD: "Congo, República Democrática del",
    KP: "Corea del Norte",
    KR: "Corea del Sur",
    CI: "Costa de Marfil",
    CR: "Costa Rica",
    HR: "Croacia",
    CU: "Cuba",
    DK: "Dinamarca",
    DJ: "Djibouti",
    DM: "Dominica",
    EC: "Ecuador",
    EG: "Egipto",
    SV: "El Salvador",
    AE: "Emiratos Árabes Unidos",
    ER: "Eritrea",
    SK: "Eslovaquia",
    SI: "Eslovenia",
    ES: "España",
    US: "Estados Unidos de America",
    EE: "Estonia",
    ET: "Etiopía",
    RU: "Federación Rusa",
    PH: "Filipinas",
    FI: "Finlandia",
    FJ: "Fiyi",
    FR: "Francia",
    GA: "Gabón",
    GM: "Gambia",
    GE: "Georgia",
    GH: "Ghana",
    GI: "Gibraltar",
    GD: "Granada",
    GR: "Grecia",
    GP: "Guadalupe",
    GU: "Guam",
    GT: "Guatemala",
    GY: "Guayana",
    GF: "Guayana Francesa",
    GG: "Guernsey",
    GN: "Guinea",
    GQ: "Guinea Ecuatorial",
    GW: "Guinea-Bissau",
    HT: "Haití",
    HN: "Honduras",
    HU: "Hungría",
    IN: "India",
    ID: "Indonesia",
    IQ: "Irak",
    IE: "Irlanda",
    IR: "Irán",
    BV: "Isla Bouvet",
    CX: "Isla de Navidad",
    IM: "Isla del hombre",
    NF: "Isla Norfolk",
    IS: "Islandia",
    AX: "Islas Aland",
    BM: "islas Bermudas",
    KY: "Islas Caimán",
    CC: "Islas Cocos (Keeling)",
    CK: "Islas Cook",
    FO: "Islas Faroe",
    GS: "Islas Georgias del Sur y Sandwich del Sur",
    HM: "Islas Heard y Mcdonald",
    FK: "Islas Malvinas (Falkland Isl.)",
    MP: "Islas Marianas del Norte",
    MH: "Islas Marshall",
    UM: "Islas menores alejadas de los Estados Unidos",
    PN: "Islas Pitcairn",
    SB: "Islas Salomón",
    SJ: "Islas Svalbard y Jan Mayen",
    TC: "Islas Turcas y Caicos",
    VG: "Islas Vírgenes británicas",
    IV: "Islas Vírgenes, EE.UU.",
    WF: "Islas Wallis y Futuna",
    IL: "Israel",
    IT: "Italia",
    JM: "Jamaica",
    JP: "Japón",
    JE: "Jersey",
    JO: "Jordán",
    QA: "Katar",
    KZ: "Kazakhstan",
    KE: "Kenia",
    KG: "Kirguistán",
    KI: "Kiribati",
    XK: "Kosovo",
    KW: "Kuwait",
    LA: "Laos",
    LS: "Lesoto",
    LV: "Letonia",
    LR: "Liberia",
    LY: "Libia",
    LI: "Liechtenstein",
    LT: "Lituania",
    LU: "Luxemburgo",
    LB: "Líbano",
    MO: "Macao, Región Administrativa Especial de",
    MK: "Macedonia del Norte",
    MG: "Madagascar",
    MY: "Malasia",
    MW: "Malawi",
    MV: "Maldivas",
    ML: "Mali",
    MT: "Malta",
    MA: "Marruecos",
    MQ: "Martinica",
    MU: "Mauricio",
    MR: "Mauritania",
    YT: "Mayotte",
    FM: "Micronesia, Estados Federados de",
    MD: "Moldavia",
    MN: "Mongolia",
    ME: "Montenegro",
    MS: "Montserrat",
    MZ: "Mozambique",
    MM: "Myanmar",
    MX: "Méjico",
    MC: "Mónaco",
    NA: "Namibia",
    NR: "Nauru",
    NP: "Nepal",
    NI: "Nicaragua",
    NG: "Nigeria",
    NU: "Niue",
    NO: "Noruega",
    NC: "Nueva Caledonia",
    NZ: "Nueva Zelanda",
    NE: "Níger",
    OM: "Omán",
    PK: "Pakistán",
    PW: "Palau",
    PS: "Palestina",
    PA: "Panamá",
    PG: "Papúa Nueva Guinea",
    PY: "Paraguay",
    NL: "Países Bajos",
    PE: "Perú",
    PF: "Polinesia Francés",
    PL: "Polonia",
    PT: "Portugal",
    PR: "Puerto Rico",
    HK: "Región Administrativa Especial de Hong Kong",
    GB: "Reino Unido",
    CF: "República Centroafricana",
    DO: "República Dominicana",
    RE: "Reunión",
    RW: "Ruanda",
    RO: "Rumania",
    EH: "Sahara Occidental",
    MF: "Saint-Martin (parte francesa)",
    WS: "Samoa",
    AS: "Samoa Americana",
    BL: "San Bartolomé",
    KN: "San Cristóbal y Nieves",
    SM: "San Marino",
    PM: "San Pedro y Miquelón",
    VC: "San Vicente y las Granadinas",
    SH: "Santa Helena",
    LC: "Santa Lucía",
    ST: "Santo Tomé y Príncipe",
    SN: "Senegal",
    RS: "Serbia",
    SC: "Seychelles",
    SL: "Sierra Leona",
    SG: "Singapur",
    SY: "Siria",
    SO: "Somalia",
    LK: "Sri Lanka",
    ZA: "Sudáfrica",
    SD: "Sudán",
    SS: "Sudán del Sur",
    SE: "Suecia",
    CH: "Suiza",
    SR: "Suriname",
    SZ: "Swazilandia",
    TH: "Tailandia",
    TW: "Taiwán",
    TZ: "Tanzania",
    TJ: "Tayikistán",
    IO: "Territorio Británico del Océano Índico",
    TF: "Territorios Franceses del Sur",
    GL: "Tierra Verde",
    TL: "Timor Oriental",
    TG: "Togo",
    TK: "Tokelau",
    TO: "Tonga",
    TT: "Trinidad y Tobago",
    TM: "Turkmenistán",
    TR: "Turquía",
    TV: "Tuvalu",
    TN: "Túnez",
    UA: "Ucrania",
    UG: "Uganda",
    UY: "Uruguay",
    UZ: "Uzbekistán",
    VU: "Vanuatu",
    VA: "Vaticano",
    VE: "Venezuela",
    VN: "Vietnam",
    YE: "Yemen",
    ZM: "Zambia",
    ZW: "Zimbabue",
  };

  return paises[codigoPais] || "País no encontrado";
}

function getImage(icon) {
  const cardImage = document.createElement("img");
  cardImage.className = "card-img-top mx-auto";
  cardImage.style.maxWidth = "300px";
  cardImage.src = "assets/images/" + icon + ".jpg";
  return cardImage;
}
