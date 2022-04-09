function init() {
    //add your javascrip between these two lines of code


    var h2center = document.querySelector("h2[class='center']")
    h2center.textContent = "Qingbin Wang"
    var h2center = document.querySelector("h3[class='center']")
    h2center.textContent = "1445207429@qq.com"

    function inputAlert() {
        var inputTxt = document.getElementById("entryinput").value
        alert("Qingbin Wang:" + inputTxt)
        if (inputTxt.length > 0) {
            document.getElementById("textoutput").textContent = inputTxt
        }
    }
    document.getElementById("entrybutton").addEventListener("click", inputAlert)
}



window.addEventListener('load', init);