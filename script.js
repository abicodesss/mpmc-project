const CROPS = {
  Rice: { emoji: "🌾", kc: { Seedling: 1.05, Vegetative: 1.15, Flowering: 1.2, Fruiting: 0.9 } },
  Maize: { emoji: "🌽", kc: { Seedling: 0.3, Vegetative: 0.8, Flowering: 1.2, Fruiting: 0.6 } },
  Tomato: { emoji: "🍅", kc: { Seedling: 0.6, Vegetative: 0.9, Flowering: 1.15, Fruiting: 0.8 } },
  Cotton: { emoji: "☁️", kc: { Seedling: 0.35, Vegetative: 0.8, Flowering: 1.15, Fruiting: 0.7 } },
  Sugarcane: { emoji: "🎋", kc: { Seedling: 0.4, Vegetative: 0.8, Flowering: 1.25, Fruiting: 0.75 } },
  Groundnut: { emoji: "🥜", kc: { Seedling: 0.4, Vegetative: 0.8, Flowering: 1.15, Fruiting: 0.6 } }
};

const TEXT = {
  en: {
    heroEyebrow: "FIELD-READY WATER PLANNING", heroTitle: "Grow more.<br />Water wisely.",
    heroSubtitle: "A clear daily irrigation estimate, guided by your crop, weather and field sensors.",
    start: "Start calculating ↓", stepOne: "STEP 01", stepTwo: "STEP 02", stepThree: "STEP 03",
    fieldDetails: "Field details", crop: "Crop", growthStage: "Growth stage", seedling: "Seedling",
    vegetative: "Vegetative", flowering: "Flowering", fruiting: "Fruiting", fieldArea: "Field area",
    efficiency: "Irrigation efficiency", sensorData: "Field sensors", offline: "Offline",
    connected: "Connected", reading: "Reading…", sensorManual: "Manual readings are active. Connect your ESP32 or enter values below.",
    soilMoisture: "Soil moisture", temperature: "Temperature", humidity: "Humidity",
    espUrl: "ESP32 endpoint", readSensor: "Read sensor", autoRefresh: "Auto-refresh · 5s",
    notUpdated: "Not updated yet", updatedNow: "Updated just now", secondsAgo: "Updated {n}s ago",
    weather: "Weather & demand", latitude: "Latitude", longitude: "Longitude",
    todayForecast: "Today’s forecast", rainChance: "Rain chance", et0: "ET₀ (mm/day)",
    rainfall: "Rainfall (mm)", getForecast: "Get 7-day forecast", dailyEstimate: "YOUR DAILY ESTIMATE",
    waterRequirement: "Water requirement", cwr: "CWR mm/day", saveResult: "Save result",
    downloadReport: "Download report", showYourWork: "SHOW YOUR WORK", calculationSteps: "Calculation steps",
    stepKc: "Crop coefficient", stepCwr: "Crop water requirement", stepRain: "Effective rainfall",
    stepSm: "Soil moisture credit", stepFinal: "Final water", irrigationPlan: "IRRIGATION PLAN",
    irrigation: "Irrigation", lightIrrigation: "Light irrigation", irrigateNow: "Irrigate now",
    noIrrigation: "No irrigation needed", fieldWatch: "FIELD WATCH", pesticide: "Pest & disease watch",
    cropCare: "CROP CARE", fertilizer: "Fertilizer", why: "Why?", planAhead: "PLAN AHEAD",
    rainForecast: "7-day rainfall forecast", forecastPrompt: "Load the forecast to see rain by day.",
    savedPlans: "SAVED PLANS", recentCalculations: "Recent calculations",
    historyEmpty: "Your saved calculations will appear here.", footer: "Made for smarter, more water-wise farming",
    invalidArea: "Enter a field area greater than 0 and no more than 100,000 m².",
    invalidEfficiency: "Efficiency must be between 0.1 and 1.", invalidPercent: "Enter a value from 0 to 100.",
    invalidNumber: "Enter a valid number.", validLocation: "Enter valid latitude and longitude values.",
    manualSensor: "Manual readings remain available. Check the ESP32 URL, network and CORS settings.",
    sensorSuccess: "Sensor readings updated.", weatherSuccess: "Forecast loaded successfully.",
    weatherError: "Could not load forecast. Check your connection and try again.",
    sensorError: "Could not read from the sensor.", invalidSensor: "Sensor response needs valid moisture, temperature and humidity numbers.",
    sensorBadJson: "Sensor returned invalid JSON. Check the ESP32 response format.",
    sensorMissingFields: "Sensor response is missing soil_moisture, temperature, or humidity.",
    sensorHttpError: "Sensor request failed (HTTP {status}).",
    timeout: "Request timed out. Check the connection and try again.",
    networkError: "Network request failed. Check the URL, connection and device CORS settings.",
    loadingWeather: "Loading the 7-day forecast…", chartUnavailable: "Charts unavailable while offline.",
    saved: "Calculation saved to history.", saveFailed: "Could not save history in this browser.",
    cwrSummary: "Kc {kc} × ET₀ {et0} mm/day = {cwr} mm/day.",
    waterSummary: "{area} m² × max({cwr} − {sm} − {rain}, 0) mm ÷ {eff} efficiency = {water} L/day.",
    soilSummary: "Measured sensor reading: {moisture}%. No soil-water credit is deducted until sensor and soil calibration provide an mm/day value.",
    urgentMessage: "Irrigate today: the estimated net demand is {net} mm, or about {water} L for this field.",
    lightMessage: "A light irrigation is indicated: estimated net demand is {net} mm ({water} L for this field).",
    skipRain: "No irrigation is estimated today; effective rainfall covers the calculated crop demand.",
    skipSoil: "Sensor moisture is high ({moisture}%). Verify root-zone moisture before irrigating.",
    pestRisk: "Warm, humid conditions can favor fungal disease. Inspect plants; follow local agricultural guidance before treatment.",
    pestHot: "Hot and dry conditions can favor mites and aphids. Scout the crop before taking action.",
    pestLow: "No high-risk weather trigger detected. Continue routine scouting.",
    dryBeforeFertilizer: "Soil reading is dry ({moisture}%). Irrigate first and follow a crop-specific nutrient plan.",
    rainBeforeFertilizer: "Forecast rain is high ({rain} mm). Check local guidance to avoid nutrient loss.",
    fertilizerSeedling: "Seedling stage: follow a soil-test-based starter nutrient recommendation.",
    fertilizerVegetative: "Vegetative stage: follow the crop-specific nitrogen plan and soil-test guidance.",
    fertilizerFlowering: "Flowering stage: use a crop-specific nutrient plan; avoid unverified blanket doses.",
    fertilizerFruiting: "Fruiting stage: follow soil-test and local crop guidance for potassium and other nutrients.",
    invalidForm: "Correct the highlighted fields to see a reliable estimate.",
    forecastLoaded: "Seven-day forecast updated.", statusOffline: "Offline · manual readings available",
    noForecast: "Forecast data was not returned. Try again later."
  },
  ta: {
    heroEyebrow: "வயலுக்கான நீர் திட்டம்", heroTitle: "மேலும் விளைவிக்கவும்.<br />நீரைச் சிக்கனமாகப் பயன்படுத்தவும்.",
    heroSubtitle: "பயிர், வானிலை மற்றும் வயல் சென்சார் தரவின் அடிப்படையில் தினசரி நீர்ப்பாசன மதிப்பீடு.",
    start: "கணக்கிடத் தொடங்கு ↓", stepOne: "படி 01", stepTwo: "படி 02", stepThree: "படி 03",
    fieldDetails: "வயல் விவரங்கள்", crop: "பயிர்", growthStage: "வளர்ச்சி நிலை", seedling: "நாற்று",
    vegetative: "வளர்ச்சி", flowering: "பூக்கும் நிலை", fruiting: "காய்க்கும் நிலை", fieldArea: "வயல் பரப்பளவு",
    efficiency: "நீர்ப்பாசன செயல்திறன்", sensorData: "வயல் சென்சார்கள்", offline: "இணைப்பில்லை",
    connected: "இணைக்கப்பட்டது", reading: "படிக்கிறது…", sensorManual: "கைமுறை அளவீடுகள் செயலில் உள்ளன. ESP32-ஐ இணைக்கவும் அல்லது மதிப்புகளை உள்ளிடவும்.",
    soilMoisture: "மண் ஈரப்பதம்", temperature: "வெப்பநிலை", humidity: "காற்றின் ஈரப்பதம்",
    espUrl: "ESP32 முகவரி", readSensor: "சென்சாரைப் படி", autoRefresh: "தானியங்கு புதுப்பிப்பு · 5வி",
    notUpdated: "இன்னும் புதுப்பிக்கப்படவில்லை", updatedNow: "இப்போது புதுப்பிக்கப்பட்டது", secondsAgo: "{n}வி முன் புதுப்பிக்கப்பட்டது",
    weather: "வானிலை மற்றும் தேவை", latitude: "அட்சரேகை", longitude: "தீர்க்கரேகை",
    todayForecast: "இன்றைய முன்னறிவிப்பு", rainChance: "மழை வாய்ப்பு", et0: "ET₀ (மிமீ/நாள்)",
    rainfall: "மழை (மிமீ)", getForecast: "7 நாள் முன்னறிவிப்பு", dailyEstimate: "தினசரி மதிப்பீடு",
    waterRequirement: "நீர் தேவை", cwr: "CWR மிமீ/நாள்", saveResult: "மதிப்பைச் சேமி",
    downloadReport: "அறிக்கையைப் பதிவிறக்கு", showYourWork: "கணக்கீட்டு விவரம்", calculationSteps: "கணக்கீட்டு படிகள்",
    stepKc: "பயிர் குணகம்", stepCwr: "பயிர் நீர் தேவை", stepRain: "பயனுள்ள மழை",
    stepSm: "மண் ஈரப்பதக் கழிவு", stepFinal: "இறுதி நீர்", irrigationPlan: "நீர்ப்பாசனத் திட்டம்",
    irrigation: "நீர்ப்பாசனம்", lightIrrigation: "குறைந்த நீர்ப்பாசனம்", irrigateNow: "இப்போது நீர்ப்பாசனம்",
    noIrrigation: "நீர்ப்பாசனம் தேவையில்லை", fieldWatch: "வயல் கண்காணிப்பு", pesticide: "பூச்சி மற்றும் நோய் கண்காணிப்பு",
    cropCare: "பயிர் பராமரிப்பு", fertilizer: "உரம்", why: "ஏன்?", planAhead: "முன்கூட்டித் திட்டமிடுங்கள்",
    rainForecast: "7 நாள் மழை முன்னறிவிப்பு", forecastPrompt: "நாள் வாரியான மழையைக் காண முன்னறிவிப்பைப் பெறவும்.",
    savedPlans: "சேமித்த திட்டங்கள்", recentCalculations: "சமீபத்திய கணக்கீடுகள்",
    historyEmpty: "சேமித்த கணக்கீடுகள் இங்கே காட்டப்படும்.", footer: "நீர் சிக்கனமான விவசாயத்திற்காக",
    invalidArea: "வயல் பரப்பளவு 0-ஐ விட அதிகமாகவும் 100,000 மீ²-க்குள் இருக்கவும் வேண்டும்.",
    invalidEfficiency: "செயல்திறன் 0.1 முதல் 1 வரை இருக்க வேண்டும்.", invalidPercent: "0 முதல் 100 வரை உள்ள மதிப்பை உள்ளிடவும்.",
    invalidNumber: "சரியான எண்ணை உள்ளிடவும்.", validLocation: "சரியான அட்சரேகை மற்றும் தீர்க்கரேகையை உள்ளிடவும்.",
    manualSensor: "கைமுறை அளவீடுகளைப் பயன்படுத்தலாம். ESP32 முகவரி, நெட்வொர்க் மற்றும் CORS அமைப்புகளைச் சரிபார்க்கவும்.",
    sensorSuccess: "சென்சார் அளவீடுகள் புதுப்பிக்கப்பட்டன.", weatherSuccess: "முன்னறிவிப்பு வெற்றிகரமாகப் பெறப்பட்டது.",
    weatherError: "முன்னறிவிப்பைப் பெற முடியவில்லை. இணைப்பைச் சரிபார்த்து மீண்டும் முயற்சிக்கவும்.",
    sensorError: "சென்சாரிலிருந்து படிக்க முடியவில்லை.", invalidSensor: "சென்சார் பதிலில் சரியான ஈரப்பதம், வெப்பநிலை மற்றும் காற்று ஈரப்பதம் தேவை.",
    sensorBadJson: "சென்சார் தவறான JSON அனுப்பியது. ESP32 பதில் வடிவத்தைச் சரிபார்க்கவும்.",
    sensorMissingFields: "சென்சார் பதிலில் soil_moisture, temperature அல்லது humidity இல்லை.",
    sensorHttpError: "சென்சார் கோரிக்கை தோல்வி (HTTP {status}).",
    timeout: "கோரிக்கை நேரம் முடிந்தது. இணைப்பைச் சரிபார்த்து மீண்டும் முயற்சிக்கவும்.",
    networkError: "நெட்வொர்க் கோரிக்கை தோல்வியடைந்தது. முகவரி, இணைப்பு மற்றும் CORS அமைப்புகளைச் சரிபார்க்கவும்.",
    loadingWeather: "7 நாள் முன்னறிவிப்பு ஏற்றப்படுகிறது…", chartUnavailable: "இணையமின்றி வரைபடங்கள் கிடைக்காது.",
    saved: "கணக்கீடு சேமிக்கப்பட்டது.", saveFailed: "இந்த உலாவியில் வரலாற்றைச் சேமிக்க முடியவில்லை.",
    cwrSummary: "Kc {kc} × ET₀ {et0} மிமீ/நாள் = {cwr} மிமீ/நாள்.",
    waterSummary: "{area} மீ² × max({cwr} − {sm} − {rain}, 0) மிமீ ÷ {eff} செயல்திறன் = {water} லி/நாள்.",
    soilSummary: "சென்சார் அளவீடு: {moisture}%. சென்சார் மற்றும் மண் அளவுத்திருத்தம் மிமீ/நாள் மதிப்பை வழங்கும் வரை மண் நீர் கழிக்கப்படாது.",
    urgentMessage: "இன்றே நீர்ப்பாசனம் செய்யவும்: நிகரத் தேவை {net} மிமீ; இந்த வயலுக்கு சுமார் {water} லிட்டர்.",
    lightMessage: "குறைந்த நீர்ப்பாசனம் தேவை: நிகரத் தேவை {net} மிமீ ({water} லிட்டர்).",
    skipRain: "பயனுள்ள மழை பயிர் தேவையைப் பூர்த்தி செய்வதால் இன்று நீர்ப்பாசனம் தேவையில்லை.",
    skipSoil: "சென்சார் ஈரப்பதம் அதிகம் ({moisture}%). நீர்ப்பாசனத்திற்கு முன் வேர் பகுதி ஈரப்பதத்தைச் சரிபார்க்கவும்.",
    pestRisk: "வெப்பமும் ஈரப்பதமும் பூஞ்சை நோய்க்கு உகந்ததாக இருக்கலாம். பயிரை ஆய்வு செய்து உள்ளூர் வேளாண் ஆலோசனையைப் பின்பற்றவும்.",
    pestHot: "வெப்பமான வறண்ட சூழல் சிலந்திப் பூச்சி மற்றும் அஃபிட் பூச்சிகளை அதிகரிக்கலாம். முதலில் பயிரை ஆய்வு செய்யவும்.",
    pestLow: "அதிக ஆபத்துள்ள வானிலை அறிகுறி இல்லை. வழக்கமான பயிர் கண்காணிப்பைத் தொடரவும்.",
    dryBeforeFertilizer: "மண் அளவீடு வறண்டுள்ளது ({moisture}%). முதலில் நீர்ப்பாசனம் செய்து மண் பரிசோதனைத் திட்டத்தைப் பின்பற்றவும்.",
    rainBeforeFertilizer: "முன்னறிவிப்பு மழை அதிகம் ({rain} மிமீ). ஊட்டச்சத்து இழப்பைத் தவிர்க்க உள்ளூர் ஆலோசனையைப் பார்க்கவும்.",
    fertilizerSeedling: "நாற்று நிலை: மண் பரிசோதனை அடிப்படையிலான தொடக்க உர ஆலோசனையைப் பின்பற்றவும்.",
    fertilizerVegetative: "வளர்ச்சி நிலை: பயிருக்கு ஏற்ற நைட்ரஜன் திட்டம் மற்றும் மண் பரிசோதனையைப் பின்பற்றவும்.",
    fertilizerFlowering: "பூக்கும் நிலை: பயிருக்கு ஏற்ற உரத் திட்டத்தைப் பின்பற்றவும்; ஆதாரமற்ற பொதுவான அளவுகளைத் தவிர்க்கவும்.",
    fertilizerFruiting: "காய்க்கும் நிலை: பொட்டாசியம் மற்றும் பிற ஊட்டச்சத்துகளுக்கு மண் பரிசோதனை மற்றும் உள்ளூர் ஆலோசனையைப் பின்பற்றவும்.",
    invalidForm: "நம்பகமான மதிப்பீட்டைப் பெற சிவப்பு குறியிட்ட புலங்களைச் சரிசெய்யவும்.",
    forecastLoaded: "ஏழு நாள் முன்னறிவிப்பு புதுப்பிக்கப்பட்டது.", statusOffline: "இணைப்பில்லை · கைமுறை அளவீடுகள் கிடைக்கும்",
    noForecast: "முன்னறிவிப்பு தரவு கிடைக்கவில்லை. பின்னர் மீண்டும் முயற்சிக்கவும்."
  }
};

const CROP_NAMES = {
  en: { Rice: "Rice", Maize: "Maize", Tomato: "Tomato", Cotton: "Cotton", Sugarcane: "Sugarcane", Groundnut: "Groundnut" },
  ta: { Rice: "நெல்", Maize: "மக்காச்சோளம்", Tomato: "தக்காளி", Cotton: "பருத்தி", Sugarcane: "கரும்பு", Groundnut: "நிலக்கடலை" }
};
const $ = (id) => document.getElementById(id);
const STAGES = ["Seedling", "Vegetative", "Flowering", "Fruiting"];
let language = "en";
let displayUnit = "L";
let waterChart;
let forecastChart;
let sensorPoll;
let sensorInFlight = false;
let lastSensorUpdate = 0;
let toastTimer;
let animationFrame;
let currentResult;

function text(key, vars = {}) {
  return (TEXT[language][key] || TEXT.en[key] || key).replace(/\{(\w+)\}/g, (_, name) => vars[name] ?? "");
}

function numeric(id) {
  const value = $(id).value.trim();
  return value === "" ? Number.NaN : Number(value);
}

function showToast(message) {
  $("toast").textContent = message;
  $("toast").classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => $("toast").classList.remove("show"), 3600);
}

function applyLanguage() {
  document.documentElement.lang = language === "ta" ? "ta" : "en";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (TEXT[language][key]) element.innerHTML = text(key);
  });
  $("languageBtn").textContent = language === "en" ? "தமிழ்" : "English";
  $("languageBtn").setAttribute("aria-label", language === "en" ? "தமிழுக்கு மொழியை மாற்று" : "Switch language to English");
  Array.from($("crop").options).forEach((option) => {
    option.textContent = CROP_NAMES[language][option.value] || option.value;
  });
  document.querySelectorAll("#stageStepper button").forEach((button) => {
    button.textContent = text(button.dataset.stage.toLowerCase());
  });
  if (currentResult) updateResults(currentResult);
  updateSensorStatus(lastSensorUpdate ? "connected" : "offline");
  renderHistory();
  updateAgeLabel();
}

function setTheme(theme, persist = true) {
  document.documentElement.dataset.theme = theme;
  $("themeBtn").textContent = theme === "dark" ? "☀️" : "🌙";
  $("themeBtn").setAttribute("aria-label", theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
  if (persist) {
    try {
      localStorage.setItem("uzhavan-theme", theme);
      localStorage.setItem("theme", theme);
    } catch { /* Theme remains active for this page view. */ }
  }
  updateCharts();
}

function getTheme() {
  try {
    const saved = localStorage.getItem("uzhavan-theme") || localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") return saved;
  } catch { /* Use the system preference if storage is unavailable. */ }
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function setFieldError(id, message) {
  const input = $(id);
  const error = $(`${id}Error`);
  if (!input || !error) return;
  input.setAttribute("aria-invalid", message ? "true" : "false");
  error.textContent = message;
}

function validateInputs() {
  const values = {
    area: numeric("area"), eff: numeric("eff"), moisture: numeric("moisture"),
    temp: numeric("temp"), hum: numeric("hum"), et0: numeric("et0"), rain: numeric("rain")
  };
  const errors = {};
  if (!Number.isFinite(values.area) || values.area <= 0 || values.area > 100000) errors.area = text("invalidArea");
  if (!Number.isFinite(values.eff) || values.eff < 0.1 || values.eff > 1) errors.eff = text("invalidEfficiency");
  for (const id of ["moisture", "hum"]) {
    if (!Number.isFinite(values[id]) || values[id] < 0 || values[id] > 100) errors[id] = text("invalidPercent");
  }
  if (!Number.isFinite(values.temp) || values.temp < -50 || values.temp > 70) errors.temp = text("invalidNumber");
  for (const id of ["et0", "rain"]) {
    if (!Number.isFinite(values[id]) || values[id] < 0) errors[id] = text("invalidNumber");
  }
  Object.entries(errors).forEach(([id, message]) => setFieldError(id, message));
  ["area", "eff", "moisture", "temp", "hum", "et0", "rain"].forEach((id) => {
    if (!errors[id]) setFieldError(id, "");
  });
  return { values, errors };
}

function updateGauge(inputId, barId, valueId, value, min, max, suffix, stateForValue) {
  const input = $(inputId);
  const tile = input.closest(".gauge-tile");
  const valid = Number.isFinite(value) && value >= min && value <= max;
  const percent = valid ? ((value - min) / (max - min)) * 100 : 0;
  const bar = $(barId);
  bar.style.width = `${percent}%`;
  bar.setAttribute("role", "progressbar");
  bar.setAttribute("aria-valuemin", String(min));
  bar.setAttribute("aria-valuemax", String(max));
  bar.setAttribute("aria-valuenow", valid ? String(value) : "0");
  $(valueId).textContent = valid ? `${Number(value.toFixed(1))}${suffix}` : "—";
  tile.dataset.state = valid ? stateForValue(value) : "unknown";
}

function updateGauges({ moisture, temp, hum }) {
  updateGauge("moisture", "moistureBar", "moistureValue", moisture, 0, 100, "%", (v) => v < 30 ? "dry" : v > 70 ? "wet" : "optimal");
  updateGauge("temp", "tempBar", "tempValue", temp, -10, 50, "°C", (v) => v > 35 || v < 10 ? "hot" : v >= 18 && v <= 32 ? "optimal" : "caution");
  updateGauge("hum", "humBar", "humValue", hum, 0, 100, "%", (v) => v > 80 ? "wet" : v < 35 ? "dry" : "optimal");
}

function formatNumber(value, digits = 0) {
  return new Intl.NumberFormat(language === "ta" ? "ta-IN" : "en-IN", {
    maximumFractionDigits: digits,
    minimumFractionDigits: digits
  }).format(value);
}

function displayWater(litres) {
  return displayUnit === "L"
    ? formatNumber(litres)
    : formatNumber(litres / 1000, 2);
}

function animateWater(target) {
  cancelAnimationFrame(animationFrame);
  const element = $("water");
  const from = Number(element.dataset.numericValue) || 0;
  const start = performance.now();
  const duration = 550;
  const step = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - (1 - progress) ** 3;
    const value = from + (target - from) * eased;
    element.textContent = displayWater(value);
    if (progress < 1) animationFrame = requestAnimationFrame(step);
    else element.dataset.numericValue = String(target);
  };
  animationFrame = requestAnimationFrame(step);
}

function setRecommendationCard(id, level) {
  const card = $(`card${id[0].toUpperCase()}${id.slice(1)}`);
  card.classList.remove("ok", "warn", "bad", "urgent", "no-irrigation");
  card.classList.add(level);
}

function updateResults(result) {
  const { kc, et0, cwr, effectiveRain, smMm, netMm, water, area, eff, moisture, temp, hum, stage } = result;
  $("kc").textContent = kc.toFixed(2);
  $("et0Result").textContent = et0.toFixed(2);
  $("cwr").textContent = cwr.toFixed(2);
  $("waterUnit").textContent = displayUnit === "L" ? "L/day" : "m³/day";
  animateWater(water);
  $("resultStatus").textContent = text("soilSummary", { moisture: moisture.toFixed(1) });
  $("stepKc").textContent = kc.toFixed(2);
  $("stepCwr").textContent = `${cwr.toFixed(2)} mm/day`;
  $("stepRain").textContent = `${effectiveRain.toFixed(2)} mm`;
  $("stepSm").textContent = `${smMm.toFixed(2)} mm`;
  $("stepWater").textContent = `${displayWater(water)} ${displayUnit}/day`;

  const cwrWhy = text("cwrSummary", { kc: kc.toFixed(2), et0: et0.toFixed(2), cwr: cwr.toFixed(2) });
  $("irrigationWhy").textContent = `${cwrWhy} ${text("waterSummary", {
    area: formatNumber(area), cwr: cwr.toFixed(2), sm: smMm.toFixed(2),
    rain: effectiveRain.toFixed(2), eff: eff.toFixed(2), water: formatNumber(water)
  })}`;
  let irrigationMessage;
  let irrigationLevel;
  if (netMm <= 0) {
    irrigationMessage = text("skipRain");
    irrigationLevel = "no-irrigation";
    $("urgencyBadge").textContent = text("noIrrigation");
    $("irrigationIcon").textContent = "🌧️";
  } else if (netMm < 3) {
    irrigationMessage = text("lightMessage", { net: netMm.toFixed(2), water: formatNumber(water) });
    irrigationLevel = "warn";
    $("urgencyBadge").textContent = text("lightIrrigation");
    $("irrigationIcon").textContent = "💧";
  } else {
    irrigationMessage = text("urgentMessage", { net: netMm.toFixed(2), water: formatNumber(water) });
    irrigationLevel = "urgent";
    $("urgencyBadge").textContent = text("irrigateNow");
    $("irrigationIcon").textContent = "💧";
  }
  $("irrigation").textContent = irrigationMessage;
  setRecommendationCard("irrigation", irrigationLevel);

  let pestKey = "pestLow";
  let pestLevel = "ok";
  if (hum > 80 && temp >= 22 && temp <= 32) {
    pestKey = "pestRisk";
    pestLevel = "warn";
  } else if (temp > 35 && hum < 40) {
    pestKey = "pestHot";
    pestLevel = "warn";
  }
  $("pesticide").textContent = text(pestKey);
  $("pesticideWhy").textContent = `${text("temperature")}: ${temp.toFixed(1)}°C; ${text("humidity")}: ${hum.toFixed(1)}%. Guidance is a scouting prompt, not a treatment prescription.`;
  setRecommendationCard("pesticide", pestLevel);

  let fertilizerKey = `fertilizer${stage}`;
  let fertilizerLevel = "ok";
  if (moisture < 20) {
    fertilizerKey = "dryBeforeFertilizer";
    fertilizerLevel = "warn";
  } else if (result.rain > 15) {
    fertilizerKey = "rainBeforeFertilizer";
    fertilizerLevel = "warn";
  }
  $("fertilizer").textContent = text(fertilizerKey, { moisture: moisture.toFixed(0), rain: result.rain.toFixed(1) });
  $("fertilizerWhy").textContent = `${text("growthStage")}: ${text(stage.toLowerCase())}; ${text("soilMoisture")}: ${moisture.toFixed(0)}%; forecast rain: ${result.rain.toFixed(1)} mm. Follow local soil-test recommendations.`;
  setRecommendationCard("fertilizer", fertilizerLevel);
  updateWaterChart(result);
}

function calculate() {
  const { values, errors } = validateInputs();
  updateGauges(values);
  if (Object.keys(errors).length) {
    cancelAnimationFrame(animationFrame);
    $("kc").textContent = Number.isFinite(CROPS[$("crop").value]?.kc[$("stage").value])
      ? CROPS[$("crop").value].kc[$("stage").value].toFixed(2) : "—";
    $("cwr").textContent = "—";
    $("et0Result").textContent = "—";
    $("water").textContent = "—";
    $("resultStatus").textContent = text("invalidForm");
    ["stepCwr", "stepRain", "stepWater"].forEach((id) => { $(id).textContent = "—"; });
    $("stepKc").textContent = $("kc").textContent;
    $("irrigation").textContent = text("invalidForm");
    $("pesticide").textContent = text("invalidForm");
    $("fertilizer").textContent = text("invalidForm");
    $("irrigationWhy").textContent = "";
    $("pesticideWhy").textContent = "";
    $("fertilizerWhy").textContent = "";
    $("urgencyBadge").textContent = "—";
    setRecommendationCard("irrigation", "ok");
    setRecommendationCard("pesticide", "ok");
    setRecommendationCard("fertilizer", "ok");
    if (waterChart) {
      waterChart.data.datasets[0].data = [0, 0];
      waterChart.update("none");
    }
    $("water").dataset.numericValue = "0";
    currentResult = null;
    return;
  }

  const crop = $("crop").value;
  const stage = $("stage").value;
  const kc = CROPS[crop].kc[stage];
  const cwr = kc * values.et0;
  const effectiveRain = Math.min(values.rain, cwr);
  const smMm = 0;
  const netMm = Math.max(cwr - smMm - effectiveRain, 0);
  const water = values.area * netMm / values.eff;
  currentResult = {
    crop, stage, kc, et0: values.et0, cwr, rain: values.rain, effectiveRain,
    smMm, netMm, water, area: values.area, eff: values.eff,
    moisture: values.moisture, temp: values.temp, hum: values.hum
  };
  updateResults(currentResult);
}

function initCropAndStage() {
  Object.keys(CROPS).forEach((crop) => {
    const option = document.createElement("option");
    option.value = crop;
    option.textContent = CROP_NAMES[language][crop];
    $("crop").appendChild(option);
  });
  $("stageStepper").addEventListener("click", (event) => {
    const button = event.target.closest("button[data-stage]");
    if (!button) return;
    $("stage").value = button.dataset.stage;
    updateStageStepper();
    calculate();
  });
  updateStageStepper();
}

function updateStageStepper() {
  document.querySelectorAll("#stageStepper button").forEach((button) => {
    const selected = button.dataset.stage === $("stage").value;
    button.setAttribute("aria-pressed", String(selected));
  });
  $("cropEmoji").textContent = CROPS[$("crop").value]?.emoji || "🌱";
}

function syncRange(rangeId, numberId) {
  const range = $(rangeId);
  const number = $(numberId);
  range.addEventListener("input", () => {
    number.value = range.value;
    if (numberId === "eff") $("effValue").textContent = `${Math.round(Number(range.value) * 100)}%`;
    calculate();
  });
  number.addEventListener("input", () => {
    if (number.value !== "" && Number(number.value) >= Number(range.min) && Number(number.value) <= Number(range.max)) {
      range.value = number.value;
    }
    if (numberId === "eff" && Number.isFinite(Number(number.value))) {
      $("effValue").textContent = `${Math.round(Number(number.value) * 100)}%`;
    }
    calculate();
  });
}

function initCharts() {
  if (typeof Chart === "undefined") {
    $("forecastStatus").textContent = text("chartUnavailable");
    return;
  }
  waterChart = new Chart($("waterChart"), {
    type: "bar",
    data: {
      labels: ["Irrigation", "Rainfall"],
      datasets: [{ data: [0, 0], backgroundColor: ["#2e7d32", "#72b7e5"], borderRadius: 9, maxBarThickness: 38 }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: (ctx) => `${formatNumber(ctx.raw)} L` } } },
      scales: {
        x: { grid: { display: false }, ticks: { color: chartTextColor() } },
        y: { beginAtZero: true, grid: { color: chartGridColor() }, ticks: { color: chartTextColor(), callback: (v) => `${formatNumber(v)} L` } }
      }
    }
  });
}

function chartTextColor() {
  return document.documentElement.dataset.theme === "dark" ? "#d3e3d4" : "#667a66";
}

function chartGridColor() {
  return document.documentElement.dataset.theme === "dark" ? "rgba(220,240,220,.12)" : "rgba(27,58,27,.1)";
}

function updateWaterChart(result) {
  if (!waterChart) return;
  const rainfallVolume = result.effectiveRain * result.area;
  waterChart.data.datasets[0].data = [result.water, rainfallVolume];
  waterChart.data.labels = language === "en" ? ["Irrigation", "Rainfall"] : ["நீர்ப்பாசனம்", "மழை"];
  waterChart.update("none");
}

function updateCharts() {
  if (waterChart) {
    waterChart.options.scales.x.ticks.color = chartTextColor();
    waterChart.options.scales.y.ticks.color = chartTextColor();
    waterChart.options.scales.y.grid.color = chartGridColor();
    waterChart.update("none");
  }
  if (forecastChart) {
    forecastChart.options.scales.x.ticks.color = chartTextColor();
    forecastChart.options.scales.y.ticks.color = chartTextColor();
    forecastChart.options.scales.y.grid.color = chartGridColor();
    forecastChart.update("none");
  }
}

async function fetchWithTimeout(url, timeoutMs = 8000) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { signal: controller.signal });
  } catch (error) {
    if (error.name === "AbortError") throw new Error(text("timeout"));
    throw new Error(text("networkError"));
  } finally {
    clearTimeout(timeout);
  }
}

async function withLoading(button, action) {
  button.disabled = true;
  button.classList.add("loading");
  try {
    await action();
  } finally {
    button.disabled = false;
    button.classList.remove("loading");
  }
}

function updateSensorStatus(status) {
  const badge = $("sensorStatus");
  badge.classList.remove("connected", "offline", "reading");
  badge.classList.add(status);
  $("sensorStatusText").textContent = text(status);
  if (status === "offline") $("sensorMessage").textContent = text("manualSensor");
  else if (status === "connected") $("sensorMessage").textContent = text("sensorSuccess");
}

async function fetchSensor() {
  if (sensorInFlight) return;
  sensorInFlight = true;
  updateSensorStatus("reading");
  try {
    let url;
    try {
      url = new URL($("espUrl").value.trim());
    } catch {
      throw new Error(text("networkError"));
    }
    if (!["http:", "https:"].includes(url.protocol)) throw new Error(text("networkError"));
    const response = await fetchWithTimeout(url, 5000);
    if (!response.ok) throw new Error(text("sensorHttpError", { status: response.status }));

    let data;
    try {
      data = JSON.parse(await response.text());
    } catch {
      throw new Error(text("sensorBadJson"));
    }
    const fields = ["soil_moisture", "temperature", "humidity"];
    if (!data || typeof data !== "object" || fields.some((field) => !(field in data))) {
      throw new Error(text("sensorMissingFields"));
    }
    const { soil_moisture: moisture, temperature: temp, humidity: hum } = data;
    if (![moisture, temp, hum].every((value) => typeof value === "number" && Number.isFinite(value)) ||
        moisture < 0 || moisture > 100 || hum < 0 || hum > 100 ||
        temp < -50 || temp > 70) throw new Error(text("invalidSensor"));
    $("moisture").value = moisture;
    $("temp").value = temp;
    $("hum").value = hum;
    lastSensorUpdate = Date.now();
    updateSensorStatus("connected");
    updateAgeLabel();
    calculate();
    showToast(text("sensorSuccess"));
  } catch (error) {
    updateSensorStatus("offline");
    showToast(error.message || text("sensorError"));
  } finally {
    sensorInFlight = false;
  }
}

function updateAgeLabel() {
  if (!lastSensorUpdate) {
    $("lastUpdated").textContent = text("notUpdated");
    return;
  }
  const seconds = Math.max(0, Math.floor((Date.now() - lastSensorUpdate) / 1000));
  $("lastUpdated").textContent = seconds === 0 ? text("updatedNow") : text("secondsAgo", { n: seconds });
}

function setAutoRefresh(enabled) {
  clearInterval(sensorPoll);
  sensorPoll = undefined;
  if (enabled) {
    fetchSensor();
    sensorPoll = setInterval(fetchSensor, 5000);
  }
}

function weatherEmoji(code) {
  if ([0, 1].includes(code)) return "☀️";
  if ([2, 3].includes(code)) return "⛅";
  if ([45, 48].includes(code)) return "🌫️";
  if ([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return "🌧️";
  if ([71, 73, 75, 77, 85, 86].includes(code)) return "❄️";
  if ([95, 96, 99].includes(code)) return "⛈️";
  return "🌤️";
}

function showWeatherLoading(loading) {
  document.querySelector(".weather-summary").classList.toggle("skeleton", loading);
  $("btnWeather").classList.toggle("loading", loading);
  $("btnWeather").disabled = loading;
  $("forecastSkeleton").hidden = !loading;
  $("forecastChart").hidden = loading;
}

async function fetchForecast() {
  const latitude = numeric("lat");
  const longitude = numeric("lon");
  const latValid = Number.isFinite(latitude) && latitude >= -90 && latitude <= 90;
  const lonValid = Number.isFinite(longitude) && longitude >= -180 && longitude <= 180;
  setFieldError("lat", latValid ? "" : text("validLocation"));
  setFieldError("lon", lonValid ? "" : text("validLocation"));
  if (!latValid || !lonValid) return;
  showWeatherLoading(true);
  $("weatherStatus").textContent = text("loadingWeather");
  try {
    const params = new URLSearchParams({
      latitude: latitude.toString(), longitude: longitude.toString(),
      daily: "precipitation_sum,precipitation_probability_max,et0_fao_evapotranspiration,temperature_2m_max,weather_code",
      timezone: "auto", forecast_days: "7"
    });
    const response = await fetchWithTimeout(`https://api.open-meteo.com/v1/forecast?${params}`);
    if (!response.ok) throw new Error(`Weather service returned HTTP ${response.status}.`);
    const daily = (await response.json()).daily;
    const keys = ["time", "precipitation_sum", "precipitation_probability_max", "et0_fao_evapotranspiration", "temperature_2m_max", "weather_code"];
    if (!daily || keys.some((key) => !Array.isArray(daily[key]) || daily[key].length < 1)) throw new Error(text("noForecast"));
    const rain = daily.precipitation_sum[0];
    const et0 = daily.et0_fao_evapotranspiration[0];
    if (![rain, et0, daily.temperature_2m_max[0]].every(Number.isFinite)) throw new Error(text("noForecast"));
    $("rain").value = rain;
    $("et0").value = et0;
    $("weatherIcon").textContent = weatherEmoji(daily.weather_code[0]);
    $("weatherTemp").textContent = `${Math.round(daily.temperature_2m_max[0])}°C`;
    $("rainChance").textContent = `${Number.isFinite(daily.precipitation_probability_max[0]) ? daily.precipitation_probability_max[0] : 0}%`;
    drawForecast(daily);
    $("weatherStatus").textContent = text("forecastLoaded");
    $("forecastStatus").textContent = text("forecastLoaded");
    calculate();
    showToast(text("weatherSuccess"));
  } catch (error) {
    $("weatherStatus").textContent = error.message || text("weatherError");
    $("forecastStatus").textContent = error.message || text("weatherError");
    showToast(error.message || text("weatherError"));
  } finally {
    showWeatherLoading(false);
  }
}

function drawForecast(daily) {
  if (typeof Chart === "undefined") {
    $("forecastStatus").textContent = text("chartUnavailable");
    return;
  }
  if (forecastChart) forecastChart.destroy();
  forecastChart = new Chart($("forecastChart"), {
    type: "bar",
    data: {
      labels: daily.time.map((date) => new Intl.DateTimeFormat(language === "ta" ? "ta-IN" : "en-IN", { weekday: "short" }).format(new Date(`${date}T12:00:00`))),
      datasets: [{ label: language === "en" ? "Rainfall (mm)" : "மழை (மிமீ)", data: daily.precipitation_sum, backgroundColor: "#6ab9e9", borderRadius: 7, maxBarThickness: 34 }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: (ctx) => `${ctx.raw} mm` } } },
      scales: {
        x: { grid: { display: false }, ticks: { color: chartTextColor() } },
        y: { beginAtZero: true, grid: { color: chartGridColor() }, ticks: { color: chartTextColor() } }
      }
    }
  });
}

function readHistory() {
  try {
    const history = JSON.parse(localStorage.getItem("uzhavan-history") || "[]");
    return Array.isArray(history) ? history.slice(0, 5) : [];
  } catch { return []; }
}

function renderHistory() {
  const list = $("historyList");
  const history = readHistory();
  list.replaceChildren();
  $("historyEmpty").hidden = history.length > 0;
  history.forEach((entry) => {
    const item = document.createElement("li");
    const button = document.createElement("button");
    button.type = "button";
    button.className = "history-item";
    const crop = document.createElement("span");
    crop.className = "history-crop";
    crop.textContent = `${CROPS[entry.crop]?.emoji || "🌱"} ${CROP_NAMES[language][entry.crop] || "Crop"} · ${text(entry.stage.toLowerCase())}`;
    const amount = document.createElement("strong");
    amount.textContent = `${displayWater(entry.water)} ${displayUnit}/day`;
    const savedAt = document.createElement("small");
    savedAt.textContent = new Date(entry.savedAt).toLocaleString(language === "ta" ? "ta-IN" : "en-IN");
    button.append(crop, amount, savedAt);
    button.addEventListener("click", () => loadHistory(entry));
    item.appendChild(button);
    list.appendChild(item);
  });
}

function saveResult() {
  if (!currentResult) {
    showToast(text("invalidForm"));
    return;
  }
  try {
    const history = readHistory();
    history.unshift({ ...currentResult, savedAt: new Date().toISOString() });
    localStorage.setItem("uzhavan-history", JSON.stringify(history.slice(0, 5)));
    renderHistory();
    showToast(text("saved"));
  } catch {
    showToast(text("saveFailed"));
  }
}

function loadHistory(entry) {
  $("crop").value = entry.crop;
  $("stage").value = entry.stage;
  $("area").value = entry.area;
  $("areaRange").value = Math.min(Math.max(entry.area, 1), 100000);
  $("eff").value = entry.eff;
  $("effRange").value = entry.eff;
  $("moisture").value = entry.moisture;
  $("temp").value = entry.temp;
  $("hum").value = entry.hum;
  $("et0").value = entry.et0;
  $("rain").value = entry.rain;
  $("effValue").textContent = `${Math.round(entry.eff * 100)}%`;
  updateStageStepper();
  calculate();
  $("calculator").scrollIntoView({ behavior: "smooth", block: "start" });
}

function init() {
  initCropAndStage();
  setTheme(getTheme(), false);
  applyLanguage();
  initCharts();
  syncRange("areaRange", "area");
  syncRange("effRange", "eff");
  $("crop").addEventListener("change", () => { updateStageStepper(); calculate(); });
  $("themeBtn").addEventListener("click", () => setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark"));
  $("languageBtn").addEventListener("click", () => {
    language = language === "en" ? "ta" : "en";
    applyLanguage();
    calculate();
  });
  $("startLink").addEventListener("click", (event) => {
    event.preventDefault();
    $("calculator").scrollIntoView({ behavior: "smooth", block: "start" });
    window.setTimeout(() => $("crop").focus({ preventScroll: true }), 350);
  });
  $("btnSensor").addEventListener("click", () => withLoading($("btnSensor"), fetchSensor));
  $("autoRefresh").addEventListener("change", (event) => setAutoRefresh(event.target.checked));
  $("btnWeather").addEventListener("click", () => withLoading($("btnWeather"), fetchForecast));
  $("saveResult").addEventListener("click", saveResult);
  $("downloadReport").addEventListener("click", () => window.print());
  $("unitToggle").addEventListener("click", () => {
    displayUnit = displayUnit === "L" ? "m³" : "L";
    $("unitToggle").textContent = displayUnit === "L" ? "L/day · m³/day" : "m³/day · L/day";
    if (currentResult) {
      $("water").textContent = displayWater(currentResult.water);
      $("waterUnit").textContent = `${displayUnit}/day`;
      $("stepWater").textContent = `${displayWater(currentResult.water)} ${displayUnit}/day`;
    }
    renderHistory();
  });
  $("backToTop").addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  window.addEventListener("scroll", () => $("backToTop").classList.toggle("visible", window.scrollY > 450), { passive: true });
  document.querySelectorAll("#crop, #area, #eff, #moisture, #temp, #hum, #et0, #rain").forEach((input) => {
    input.addEventListener("input", calculate);
    input.addEventListener("change", calculate);
  });
  $("area").addEventListener("input", () => {
    if (Number($("area").value) >= 1 && Number($("area").value) <= 100000) $("areaRange").value = $("area").value;
  });
  $("eff").addEventListener("input", () => {
    if (Number($("eff").value) >= 0.1 && Number($("eff").value) <= 1) {
      $("effRange").value = $("eff").value;
      $("effValue").textContent = `${Math.round(Number($("eff").value) * 100)}%`;
    }
  });
  document.querySelectorAll(".btn").forEach((button) => {
    button.addEventListener("pointerdown", (event) => {
      const bounds = button.getBoundingClientRect();
      button.style.setProperty("--ripple-x", `${event.clientX - bounds.left}px`);
      button.style.setProperty("--ripple-y", `${event.clientY - bounds.top}px`);
      button.classList.remove("ripple");
      void button.offsetWidth;
      button.classList.add("ripple");
    });
    button.addEventListener("animationend", () => button.classList.remove("ripple"));
  });
  window.setInterval(updateAgeLabel, 1000);
  renderHistory();
  calculate();
}

init();
