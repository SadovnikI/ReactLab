
window.onload = function () {


    const completelist = document.getElementById("adminlist");
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open("GET",'http://127.0.0.1:8000/api/superuser',true);

    xhr.send();
    let admindata;
    xhr.onreadystatechange = function() {
        if (xhr.readyState!==4) return;
        if (xhr.status !==200) {
            console.log(xhr.status + " " +xhr.statusText)
        }
        else {
            admindata =xhr.response;


            for(let i=0;i<admindata['length'];i++)
            {
                let username=admindata[i]['user']['username'];
                let email=admindata[i]['user']['email'];
                let wallets= admindata[i]['walets'];
                let description = admindata[i]['description'];



                completelist.innerHTML += "<article class=\"card\">\n" +
            "                <div class=\"fakeimg\">Image</div>\n" +
            "                <b>"+username+"</b>\n" +
            "                <i>"+email+"</i>\n" +
            "                <p class=\"userwalets\">Wallets : "+wallets+"</p>\n" +
            "                <p class=\"usertext\">"+description+"</p>\n" +
            "                <a href=\"usercabinet.html\"><button class=\"button\">Go</button></a>\n" +
            "                </article>";
                }
        }
        };


    const usercompletelist = document.getElementById("userlist");
    const userxhr = new XMLHttpRequest();
    userxhr.responseType = 'json';
    userxhr.open("GET",'http://127.0.0.1:8000/api/user',true);

    userxhr.send();
    let userdata=null;
    userxhr.onreadystatechange = function() {
        if (userxhr.readyState!==4) return;
        if (userxhr.status !==200) {
            console.log(userxhr.status + " " +userxhr.statusText)
        }
        else {
            userdata =userxhr.response;


            for(let i=0;i<userdata['length'];i++)
            {
                let username=userdata[i]['user']['username'];
                let email=userdata[i]['user']['email'];
                let wallets= userdata[i]['walets'];
                let description = userdata[i]['description'];



                usercompletelist.innerHTML += "<article class=\"card\">\n" +
            "                <div class=\"fakeimg\">Image</div>\n" +
            "                <b>"+username+"</b>\n" +
            "                <i>"+email+"</i>\n" +
            "                <p class=\"userwalets\">Wallets : "+wallets+"</p>\n" +
            "                <p class=\"usertext\">"+description+"</p>\n" +
            "                <a href=\"usercabinet.html\"><button class=\"button\">Go</button></a>\n" +
            "                </article>";
                }
        }
        }

};







