var btn = document.getElementsByTagName('on-off');

for (let i = 0; i < btn.length; i++) {

    this.buttonHtml = `
        <div class="box">
            <button id="` + btn[i].id + "1" + `" onclick="onBtn(` + btn[i].id + `)" disabled class="check-box box-on">
                ON
            </button>
            <button id="` + btn[i].id + "2" + `" onclick="offBtn(` + btn[i].id + `)" class="check-box">
                OFF
            </button>
        </div>
    `;

    btn[i].innerHTML = this.buttonHtml;
}

function onBtn(id){
    var on;
    var off;
    on = id.id + "1";
    off = id.id + "2";

    document.getElementById(off).removeAttribute("disabled");
    document.getElementById(on).setAttribute("disabled", true);
    
    document.getElementById(on).classList.add("box-on");
    document.getElementById(off).classList.remove("box-off");
}
function offBtn(id){
    var on;
    var off;
    on = id.id + "1";
    off = id.id + "2";

    document.getElementById(on).removeAttribute("disabled");
    document.getElementById(off).setAttribute("disabled", true);

    document.getElementById(off).classList.add("box-off");
    document.getElementById(on).classList.remove("box-on");
}