const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {
  const rec = new SpeechRecognition();

  rec.lang = "en-US";
  rec.continuous = true;

  rec.onresult = function (e) {
    const acceptedColors = [
      "red",
      "blue",
      "green",
      "yellow",
      "pink",
      "brown",
      "purple",
      "orange",
      "black",
      "white",
    ];

    let colorRecognized = false;

    for (let i = e.resultIndex; i < e.results.length; i++) {
      const script = e.results[i][0].transcript.toLowerCase().trim();

      if (acceptedColors.includes(script)) {
        document.body.style.backgroundColor = script;
        colorRecognized = true;
        break; 
      }
    }

    if (!colorRecognized) {
      alert("Please say a color");
    }
  };

  rec.onstart = () => {
    console.log("Voice recognition activated. Try saying a color name.");
  };

  rec.onerror = (e) => {
    console.error("Error occurred:", e.error);
  };

  rec.start();
} else {
  alert("Speech recognition is not supported in this browser.");
}
