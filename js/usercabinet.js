window.onload = function () {


    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open("GET", 'http://127.0.0.1:8000/api/userdetail/1/', true);

    xhr.send();
    let userdata;

    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) return;

        if (xhr.status !== 200) {
            console.log(xhr.status + " " + xhr.statusText)
        } else {
            userdata = xhr.response;
            console.log(userdata);
            document.getElementById("useremail").textContent = userdata['user']['email'];
            document.getElementById("username").textContent = userdata['user']['username'];
            document.getElementById("userdetail").textContent = userdata['description'];

            // var img = document.createElement("img");
            //
            // img.src = "image.png";
            // var src = document.getElementById("image");
            //
            // src.appendChild(img);
            //


            const userid =userdata['user']['id'];

            const walletlist = document.getElementById("walletlist");
            const walletxhr = new XMLHttpRequest();
            walletxhr.responseType = 'json';

            walletxhr.open("GET", 'http://127.0.0.1:8000/api/wallets/'+ userid +'/', true);

            walletxhr.send();
            let walletdata;
            walletxhr.onreadystatechange = function () {
            if (walletxhr.readyState !== 4) return;
            if (walletxhr.status !== 200) {
                console.log(walletxhr.status + " " + walletxhr.statusText)
            } else {
                walletdata = walletxhr.response;
                console.log(walletdata);
                for(let i=0;i<walletdata['length'];i++) {

                    let walletname=walletdata[i]['name'];
                    let walletvalue=walletdata[i]['money'];
                    let walletcurrency=walletdata[i]['currency'];
                    let walletnowner=walletdata[i]['owner']['username'];
                    walletlist.innerHTML += "<article class=\"card\">\n" +
                        "                    <div class=\"fakeimg\">Image</div>\n" +
                        "                    <h2>"+ walletname +"</h2>\n" +
                        "                    <h3>"+walletvalue+" "+walletcurrency+"</h3>\n" +
                        "                    <p>Owner: "+walletnowner+"</p>\n" +
                        "                    <a href=\"wallet.html\"><button class=\"button\">Go</button></a>\n" +
                        "                    </article>"
                }
                }
            }


        }
    };






};