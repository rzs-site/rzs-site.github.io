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
                   placeholder="passphrase"
                   autofocus/>

            <input type="submit" class="staticrypt-decrypt-button" value="DECRYPT"/>
        </form>
    </div>

</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/crypto-js.min.js" integrity="sha384-lp4k1VRKPU9eBnPePjnJ9M2RF3i7PC30gXs70+elCVfgwLwx1tv5+ctxdtwxqZa7" crossorigin="anonymous"></script>

<script>
    document.getElementById('staticrypt-form').addEventListener('submit', function(e) {
        e.preventDefault();

        var passphrase = document.getElementById('staticrypt-password').value,
            encryptedMsg = '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',
            encryptedHMAC = encryptedMsg.substring(0, 64),
            encryptedHTML = encryptedMsg.substring(64),
            decryptedHMAC = CryptoJS.HmacSHA256(encryptedHTML, CryptoJS.SHA256(passphrase).toString()).toString();

        if (decryptedHMAC !== encryptedHMAC) {
            alert('Naprawdę wydawało Ci się, że takie jest hasło? XD');
            return;
        }

        var plainHTML = CryptoJS.AES.decrypt(encryptedHTML, passphrase).toString(CryptoJS.enc.Utf8);

        document.getElementById('str').innerHTML = plainHTML;
    });
</script>
