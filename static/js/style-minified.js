const openHamburguer=()=>{document.getElementsByClassName("menu-link")[0].classList.toggle("open"),document.getElementById("menu").classList.toggle("open");const e=document.getElementsByClassName("btn-white");for(const t of e)"none"===getComputedStyle(t).display?t.style.display="inline-block":t.style.display="none";const t=document.getElementsByClassName("btn-blue");for(const e of t)"none"===getComputedStyle(e).display?e.style.display="inline-block":e.style.display="none";const n=document.getElementsByClassName("btn-border");for(const e of n)"none"===getComputedStyle(e).display?e.style.display="inline-block":e.style.display="none"};document.getElementsByClassName("menu-link")[0].addEventListener("click",openHamburguer);const openSocialLinkMedia=e=>{switch(e){case"twitter":return"https://twitter.com/rd_station";case"facebook":return"https://www.facebook.com/ResultadosDigitais/";case"linkedin":return"https://www.linkedin.com/company/resultadosdigitais";case"instagram":return"https://www.instagram.com/resdigitais/";case"youtube":return"https://www.youtube.com/channel/UC5lPKvmw6-DFya_qreisENQ"}},openSocialMedia=e=>{window.open(openSocialLinkMedia(e),"_blank")};document.getElementsByClassName("icons-footer-one")[0].addEventListener("click",(()=>openSocialMedia("twitter"))),document.getElementsByClassName("icons-footer-two")[0].addEventListener("click",(()=>openSocialMedia("facebook"))),document.getElementsByClassName("icons-footer-three")[0].addEventListener("click",(()=>openSocialMedia("linkedin"))),document.getElementsByClassName("icons-footer-four")[0].addEventListener("click",(()=>openSocialMedia("instagram"))),document.getElementsByClassName("icons-footer-five")[0].addEventListener("click",(()=>openSocialMedia("youtube")));const validarEmail=()=>{const e=document.getElementById("email").value;/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(e)?document.getElementById("email").classList.remove("invalid-field"):document.getElementById("email").classList.add("invalid-field")};document.getElementById("email").addEventListener("change",validarEmail);const validarSite=()=>{const e=document.getElementById("site").value;/^((http(s?):\/\/(www.)?[a-z]+.com\/)|(magnet:\?xt=urn:btih:))/i.test(e)?document.getElementById("site").classList.remove("invalid-field"):document.getElementById("site").classList.add("invalid-field")};document.getElementById("site").addEventListener("change",validarSite),mascaraTelefone=()=>{let e=document.getElementById("telefone").value;e=e.replace(/\D/g,""),e=e.replace(/^(\d{2})(\d)/g,"($1) $2"),e=e.replace(/(\d)(\d{4})$/,"$1-$2"),document.getElementById("telefone").value=e},document.getElementById("telefone").addEventListener("keyup",mascaraTelefone);const confirmarPass=()=>{const e=document.getElementById("password").value;let t=/[A-Z]/,n=/[a-z]/,s=/[0-9]/;e.length<6?document.getElementById("password").classList.add("invalid-field"):document.getElementById("password").classList.remove("invalid-field");let o=0,a=0,d=0;for(let l=0;l<e.length;l++)t.test(e[l])?o++:n.test(e[l])?a++:s.test(e[l])&&d++;o<1||a<1||d<1?document.getElementById("password").classList.add("invalid-field"):document.getElementById("password").classList.remove("invalid-field")};document.getElementById("password").addEventListener("change",confirmarPass);const validarSenha=()=>{let e=document.getElementById("password"),t=document.getElementById("confirm-password");return e.value!=t.value?(t.setCustomValidity("Senhas diferentes!"),t.reportValidity(),!1):(t.setCustomValidity(""),!0)};document.getElementById("confirm-password").addEventListener("change",validarSenha);const showPassword=()=>{const e=document.getElementById("password"),t=document.getElementById("btnEye");"password"===e.type?(e.type="text",t.src="static/images/eye-open.svg"):(e.type="password",t.src="static/images/eye-close.svg")};document.getElementById("btnEye").addEventListener("click",showPassword);const confirmEye=()=>{const e=document.getElementById("confirm-password"),t=document.getElementById("btnEye-confirm");"password"===e.type?(e.type="text",t.src="static/images/eye-open.svg"):(e.type="password",t.src="static/images/eye-close.svg")};document.getElementById("btnEye-confirm").addEventListener("click",confirmEye);const showModal=()=>{document.body.classList.add("modalActive"),document.getElementsByClassName("youtubeModal")[0].style.display="block"};document.getElementById("show-demonstration").addEventListener("click",showModal);const closeModal=()=>{document.body.classList.remove("modalActive"),document.getElementsByClassName("youtubeModal")[0].style.display="none"};document.getElementsByClassName("youtubeModal")[0].addEventListener("click",closeModal);const sendForm=()=>{const e=new XMLHttpRequest,t=new FormData(document.getElementById("formularioContato"));e.addEventListener("load",(()=>{alert("Obrigado!, entraremos em contato")})),e.addEventListener("error",(()=>{alert("Obrigado!, entraremos em contato")})),e.open("POST","https://rdstation-signup-psel.herokuapp.com"),e.setRequestHeader("Accept","*/*"),e.setRequestHeader("Access-Control-Allow-Origin","*"),e.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),e.setRequestHeader("Access-Control-Allow-Methods","GET, POST, OPTIONS, PUT, PATCH, DELETE"),e.setRequestHeader("Access-Control-Allow-Headers","Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"),e.send(t),document.getElementById("formularioContato").reset()};document.getElementById("formularioContato").addEventListener("submit",(e=>{e.preventDefault(),sendForm()}));