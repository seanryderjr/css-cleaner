const cssCode = document.getElementById("css-code");
const result = document.getElementById("result");
const cleanButton = document.getElementById("clean");
const clearButton = document.getElementById("clear");
const copyButton = document.getElementById("copy");

cleanButton.addEventListener("click", function() {
  const input = cssCode.value;
  const output = input.replace(/\s*([{}|:;,])\s*/g, "$1");
  result.value = output;
});

clearButton.addEventListener("click", function() {
  cssCode.value = "";
  result.value = "";
});

copyButton.addEventListener("click", function() {
  result.select();
  document.execCommand("copy");
  copyButton.textContent = "Copied!";
});
