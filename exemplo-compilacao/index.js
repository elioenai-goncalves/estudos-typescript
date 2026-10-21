function sendMessage(userName, isLooged) {
    console.log("Ol\u00E1 ".concat(userName, ". Voc\u00EA ").concat(!isLooged ? "não" : "", " \u00B4pode logar."));
}
var userName = "Elioenai";
var isLooged = true;
sendMessage(userName, isLooged);
