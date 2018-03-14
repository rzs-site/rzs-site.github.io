---
layout: default
pass_style: true
---

<div class="staticrypt-page" id="str">
    <div class="staticrypt-form">
        <div class="staticrypt-instructions">
            <p class="staticrypt-title">Strona zabezpieczona.</p>
            <p></p>
        </div>

        <hr class="staticrypt-hr">

        <form id="staticrypt-form" action="#" method="post">
            <input id="staticrypt-password"
                   type="password"
                   name="password"
                   placeholder="hasło"
                   autofocus/>
            <input type="submit" class="staticrypt-decrypt-button" value="WYŚLIJ"/>
        </form>
    </div>
</div>



<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/crypto-js.min.js" integrity="sha384-lp4k1VRKPU9eBnPePjnJ9M2RF3i7PC30gXs70+elCVfgwLwx1tv5+ctxdtwxqZa7" crossorigin="anonymous"></script>

<script>
    var crypt;
    
    window.onload = function(){
        var client = new XMLHttpRequest();
        client.open('GET', '/protected/encrypted.txt');
        client.onreadystatechange = function() {
            crypt = client.responseText;
        }
        client.send();
    };
    
    document.getElementById('staticrypt-form').addEventListener('submit', function(e) {
        e.preventDefault();

        var passphrase = document.getElementById('staticrypt-password').value,
            encryptedMsg = crypt.split('\r')[0].split('\n')[0],
            encryptedHMAC = encryptedMsg.substring(0, 64),
            encryptedHTML = encryptedMsg.substring(64),
            decryptedHMAC = CryptoJS.HmacSHA256(encryptedHTML, CryptoJS.SHA256(passphrase).toString()).toString();
			
        if (passphrase == "fraktur") {
			var d = new Date();
			d.setTime(d.getTime() + (5*60*1000));
			var expires = "expires=" + d.toGMTString();
			document.cookie = "fraktur=on" + ";" + expires + ";path=/";
			var head  = document.getElementsByTagName('head')[0];
			var link  = document.createElement('link');
			link.id   = cssId;
			link.rel  = 'stylesheet';
			link.type = 'text/css';
			link.href = '/assets/fraktur_style.css';
			link.media = 'all';
			head.appendChild(link);
			alert('Witamy w Świecie Prawdziwych Fontów!');
            return;
        }           
		
        if (decryptedHMAC !== encryptedHMAC) {
            alert('O przepraszam, to nie to hasło!');
            return;
        }

        var plainHTML = CryptoJS.AES.decrypt(encryptedHTML, passphrase).toString(CryptoJS.enc.Utf8);

        document.getElementById('str').innerHTML = plainHTML;
    });
</script>
