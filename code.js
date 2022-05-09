

function getRandomValues (){
    let arr ;
    const trashArr = [];
    while (trashArr.length < 10) {

        let integer = Math.floor(Math.random() * 100)+1;
        console.log(integer)
        if (!trashArr.includes(integer) ) {
            trashArr.push(integer)
        }

    }

    let tr = trashArr.toString();

    arr = trashArr;
    arr.sort(((a, b) => a - b));

    document.getElementById("num").innerHTML+=`<p>Osorterad array<pre>${tr}</pre></p><p>Sorterad array<pre>${arr.toString()}</pre></p>`;
}



class User {
    constructor(name, pass, passRep, email, check) {
        this.name = name;
        this.pass = pass;
        this.passRep = passRep;
        this.email = email;
        this.check = check;

    }

    validateEmail() {
        const regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regExp.test(String(this.email).toLowerCase());

    }

    validateName() {
        if (this.name !== '') {
            return true;
        } else {
            return false;
        }
    }

    validatePass() {
        if (this.pass.length > 5) {
            return true
        } else {
            return false;
        }
    }

    validatePassRep() {
        if (this.passRep.length < 6 || this.passRep !== this.pass) {
            console.log("Lösenord stämmer inte ");
            return false
        } else {
            return true
        }
    }

}


form.addEventListener("submit", (e) => {


    e.preventDefault();
    let form = document.getElementById("form");
    let name = document.getElementById("name");
    let password = document.getElementById("password");
    let passRep = document.getElementById("passRep");
    let email = document.getElementById("email");
    let check = document.getElementById("check");

    let user = new User(name.value.trim(), password.value.trim(), passRep.value.trim(), email.value.trim(), check.checked)
    console.log(user);
    console.log(check.checked+" yes it is")
    console.log(user.validateEmail(), user.validateName(), user.validatePass(), user.validatePassRep(), user.check.checked);
    if (user.validateEmail(), user.validateName(), user.validatePass(), user.validatePassRep(), check.checked) {
        window.location.href = "hello.html";
    } else {
        const funcRet = {
            name: user.validateName(),
            password: user.validatePass(),
            passRep: user.validatePassRep(),
            email: user.validateEmail(),
            check: check.checked
        }
        let err = getKey(funcRet);
        console.log(err);
        for (i = 0; i < err.length; i++) {
            document.getElementById(err[i]).classList.add("err");
            document.getElementsByClassName(err[i])[0].classList.remove("hiddentext")
        }

    }


    function getKey(obj) {
        let arr = []
        for (const key in obj) {

            if (obj[key] === false) {
                arr.push(key)
            }

        }
        return arr;
    }
})


