---
layout: default
use_math: true
use_highlight: true
---

<div class="staticrypt-page">
    <div class="staticrypt-form">
        <div class="staticrypt-instructions">
            <p class="staticrypt-title">Protected Page</p>
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
<footer class="staticrypt-footer">
    <p class="pull-right">Created with <a href="https://robinmoisson.github.io/staticrypt">StatiCrypt</a></p>
</footer>


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
            alert('Bad passphrase!');
            return;
        }

        var plainHTML = CryptoJS.AES.decrypt(encryptedHTML, passphrase).toString(CryptoJS.enc.Utf8);

        document.getElementById('staticrypt-page').innerHTML = plainHTML;
    });
</script>
