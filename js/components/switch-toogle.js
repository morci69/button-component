var btn = document.getElementsByTagName('switch');

for (let i = 0; i < btn.length; i++) {

    this.buttonHtml = `
        <div class="box">
            <input type="button" id="`+ "on" + btn[i].id + `" onclick="checkSwitch('`+ "on" + btn[i].id + `')" value="ON" disabled class="check-box box-on"></input>
            <input type="button" id="`+ "off" + btn[i].id + `" onclick="checkSwitch('`+ "off" + btn[i].id + `')" value="OFF" class="check-box"></input>
        </div>
    `;

    btn[i].innerHTML = this.buttonHtml;
}

function checkSwitch(value){
    if(value.indexOf('on') !== -1) {
        var off = value.replace("on", "off");
        document.getElementById(off).removeAttribute("disabled");
        document.getElementById(value).setAttribute("disabled", true);
        document.getElementById(value).classList.add("box-on");
        document.getElementById(off).classList.remove("box-off");
    }else {
        var on = value.replace("off", "on");
        document.getElementById(on).removeAttribute("disabled");
        document.getElementById(value).setAttribute("disabled", true);
        document.getElementById(value).classList.add("box-off");
        document.getElementById(on).classList.remove("box-on");
    }
}