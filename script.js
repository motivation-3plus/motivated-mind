function speak(message) {
  const synth = window.speechSynthesis;
  const utter = new SpeechSynthesisUtterance(message);
  utter.rate = 1;
  utter.pitch = 1;
  utter.lang = 'en-US';
  synth.speak(utter);
}

console.log("Interactive Motivated Mind Dashboard Loaded");
