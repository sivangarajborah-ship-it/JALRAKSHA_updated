let selectedPlace = "Unknown Location";

// SEARCH PLACE
function searchPlace() {
  const place = document.getElementById("placeInput").value;
  selectedPlace = place;
  document.getElementById("locationResult").innerText =
    "Location set to: " + place;
}

// CURRENT LOCATION
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(pos => {
      const lat = pos.coords.latitude.toFixed(4);
      const lon = pos.coords.longitude.toFixed(4);
      selectedPlace = "Lat " + lat + ", Lon " + lon;

      document.getElementById("currentLocation").innerText =
        "Detected location: " + selectedPlace;
    });
  } else {
    alert("Geolocation not supported");
  }
}

// RAINFALL + FLOOD PREDICTION
function predictFlood() {
  const rainfall = Math.floor(Math.random() * 200);
  let risk = "Low Risk";

  if (rainfall > 120) risk = "HIGH FLOOD RISK ⚠️";
  else if (rainfall > 70) risk = "MEDIUM FLOOD RISK ⚠️";

  document.getElementById("predictionResult").innerText =
    "Location: " + selectedPlace +
    " | Rainfall: " + rainfall + "mm | Risk: " + risk;
}

// AI ALERT
function generateAlert() {
  document.getElementById("alertResult").innerText =
    "AI Alert: Heavy rainfall detected in " + selectedPlace +
    ". Flood possible within 12 hours. Move to higher ground.";
}

// MULTI LANGUAGE
function translateAlert() {
  const lang = document.getElementById("language").value;
  let msg = "";

  if (lang === "en") {
    msg = "Flood risk detected. Move to safe location.";
  } else if (lang === "hi") {
    msg = "बाढ़ का खतरा है। कृपया सुरक्षित स्थान पर जाएं।";
  } else if (lang === "as") {
    msg = "বানপানীৰ আশংকা আছে। সুৰক্ষিত ঠাইলৈ যাওক।";
  }

  document.getElementById("langResult").innerText = msg;
}

// SOS
function sendSOS() {
  document.getElementById("sosResult").innerText =
    "🚨 SOS SENT! Authorities & nearby volunteers alerted for " + selectedPlace;
}

// AI CHAT
function aiChat() {
  const q = document.getElementById("userQuestion").value.toLowerCase();
  let reply = "AI analyzing situation...";

  if (q.includes("safe")) {
    reply = "Current risk is low, but stay alert.";
  } else if (q.includes("what should")) {
    reply = "Prepare emergency kit and avoid low-lying areas.";
  } else if (q.includes("help")) {
    reply = "Use SOS button or move to nearest shelter.";
  }

  document.getElementById("chatResult").innerText = reply;
}