---
layout: default
pass_style: true
---

<div class="staticrypt-page">
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

        document.getElementById('staticrypt-page').innerHTML = plainHTML;
    });
</script>
