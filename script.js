
const avanca = document.querySelectorAll('.btn-proximo');
avanca.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');
        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    })
})
‎style.css
+33
Original file line number	Diff line number	Diff line change
@@ -0,0 +1,33 @@
body {
    background-color: #1D4221;
    color: white;
    font-family: "Bai Jamjuree", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 700px;
    margin: 0;
}
button {
    background-color: #64A712;
    color: white;
    font-family: "Bai Jamjuree", sans-serif;
}
.passo {
    display: none;
}
.passo.ativo {
    display:block;
}
main {
    text-align: center;
    max-width: 90%;
}
img {
    max-width: 90%;
}
