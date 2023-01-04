//ABERTURA DE MENU HAMBURGUER
const openHamburguer = () => {
  document.getElementsByClassName('menu-link')[0].classList.toggle('open');
  document.getElementById('menu').classList.toggle('open');
  const btnWhite = document.getElementsByClassName('btn-white');
  for (const btn of btnWhite) {
    if (getComputedStyle(btn).display === "none") {
      btn.style.display = "inline-block";
    }
    else {
      btn.style.display = "none";
    }
  }
  const btnBlue = document.getElementsByClassName('btn-blue');
  for (const btn of btnBlue) {
    if (getComputedStyle(btn).display === "none") {
      btn.style.display = "inline-block";
    }
    else {
      btn.style.display = "none";
    }
  }
  const btnBorder = document.getElementsByClassName('btn-border');
  for (const btn of btnBorder) {
    if (getComputedStyle(btn).display === "none") {
      btn.style.display = "inline-block";
    }
    else {
      btn.style.display = "none";
    }
  }
}

document.getElementsByClassName('menu-link')[0].addEventListener('click', openHamburguer)

//LINK REDES SOCIAIS
const openSocialLinkMedia = (media) => {
  switch (media) {
    case 'twitter':
      return 'https://twitter.com/rd_station';
    case 'facebook':
      return 'https://www.facebook.com/ResultadosDigitais/';
    case 'linkedin':
      return 'https://www.linkedin.com/company/resultadosdigitais';
    case 'instagram':
      return 'https://www.instagram.com/resdigitais/';
    case 'youtube':
      return 'https://www.youtube.com/channel/UC5lPKvmw6-DFya_qreisENQ';
  }
}

const openSocialMedia = (media) => {
  window.open(openSocialLinkMedia(media), '_blank');
}

document.getElementsByClassName('icons-footer-one')[0].addEventListener('click', () => openSocialMedia('twitter'));
document.getElementsByClassName('icons-footer-two')[0].addEventListener('click', () => openSocialMedia('facebook'));
document.getElementsByClassName('icons-footer-three')[0].addEventListener('click', () => openSocialMedia('linkedin'));
document.getElementsByClassName('icons-footer-four')[0].addEventListener('click', () => openSocialMedia('instagram'));
document.getElementsByClassName('icons-footer-five')[0].addEventListener('click', () => openSocialMedia('youtube'));

//VALIDAÇÃO EMAIL
const validarEmail = () => {
  const email = document.getElementById("email").value
  const emailPattern = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
  if (!emailPattern.test(email)) {
    document.getElementById("email").classList.add('invalid-field')
  }
  else {
    document.getElementById('email').classList.remove('invalid-field')
  }
}

document.getElementById("email").addEventListener('change', validarEmail);

//VALIDAÇÃO SITE
const validarSite = () => {
  const site = document.getElementById("site").value
  const sitePattern = /^((http(s?):\/\/(www.)?[a-z]+.com\/)|(magnet:\?xt=urn:btih:))/i;
  if (!sitePattern.test(site)) {
    document.getElementById("site").classList.add('invalid-field')
  }
  else {
    document.getElementById('site').classList.remove('invalid-field')
  }
}

document.getElementById("site").addEventListener('change', validarSite);

//MASCARA NUMERO TELEFONE
mascaraTelefone = () => {
  let telefone = document.getElementById('telefone').value;
  telefone = telefone.replace(/\D/g, ""); //Remove tudo o que não é dígito
  telefone = telefone.replace(/^(\d{2})(\d)/g, "($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
  telefone = telefone.replace(/(\d)(\d{4})$/, "$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
  document.getElementById('telefone').value = telefone;
}

document.getElementById('telefone').addEventListener('keyup', mascaraTelefone)

//CONFIRMAÇÃO DE SENHA
const confirmarPass = () => {
  const password = document.getElementById("password").value
  let anUpperCase = /[A-Z]/;
  let aLowerCase = /[a-z]/;
  let aNumber = /[0-9]/;

  if (password.length < 6) {
    document.getElementById("password").classList.add('invalid-field')
  }
  else {
    document.getElementById('password').classList.remove('invalid-field')
  }

  let numUpper = 0;
  let numLower = 0;
  let numNums = 0;
  for (let i = 0; i < password.length; i++) {
    if (anUpperCase.test(password[i]))
      numUpper++;
    else if (aLowerCase.test(password[i]))
      numLower++;
    else if (aNumber.test(password[i]))
      numNums++;
  }

  if (numUpper < 1 || numLower < 1 || numNums < 1) {
    document.getElementById("password").classList.add('invalid-field')
  }
  else {
    document.getElementById('password').classList.remove('invalid-field')
  }
}

document.getElementById("password").addEventListener('change', confirmarPass);

//VALIDAR SENHAS 
const validarSenha = () => {
  let password = document.getElementById('password');
  let confirmPassword = document.getElementById('confirm-password');

  if (password.value != confirmPassword.value) {
    confirmPassword.setCustomValidity("Senhas diferentes!");
    confirmPassword.reportValidity();
    return false;
  } else {
    confirmPassword.setCustomValidity("");
    return true;
  }
}

// verificar também quando o campo for modificado, para que a mensagem suma quando as senhas forem iguais
document.getElementById('confirm-password').addEventListener('change', validarSenha);

//OLHO ABERTO E FECHADO "CRIE SENHA"
const showPassword = () => {
  const senha = document.getElementById('password');
  const btnEye = document.getElementById('btnEye');

  if (senha.type === 'password') {
    senha.type = 'text';
    btnEye.src = 'static/images/eye-open.svg';
  }
  else {
    senha.type = 'password';
    btnEye.src = 'static/images/eye-close.svg';
  }
}

document.getElementById('btnEye').addEventListener('click', showPassword);
//FIM OLHO ABERTO E FECHADO

//OLHO ABERTO E FECHADO "CONFIRME SENHA"
const confirmEye = () => {
  const senha = document.getElementById('confirm-password');
  const btnEye = document.getElementById('btnEye-confirm');

  if (senha.type === 'password') {
    senha.type = 'text';
    btnEye.src = 'static/images/eye-open.svg';
  }
  else {
    senha.type = 'password';
    btnEye.src = 'static/images/eye-close.svg';
  }
}

document.getElementById('btnEye-confirm').addEventListener('click', confirmEye);
//FIM OLHO ABERTO E FECHADO


//MODAL
const showModal = () => {
  document.body.classList.add('modalActive');
  document.getElementsByClassName('youtubeModal')[0].style.display = 'block';
}

document.getElementById('show-demonstration').addEventListener('click', showModal);

const closeModal = () => {
  document.body.classList.remove('modalActive')
  document.getElementsByClassName('youtubeModal')[0].style.display = 'none';  
}

document.getElementsByClassName('youtubeModal')[0].addEventListener('click', closeModal)

//MODAL FIM

const sendForm = () => {
  const request = new XMLHttpRequest();
  const formData = new FormData(document.getElementById('formularioContato'));

  request.addEventListener('load', () => {
    alert('Obrigado!, entraremos em contato');
  });

  request.addEventListener('error', () => {
    alert('Obrigado!, entraremos em contato');
  });

  request.open('POST', 'https://rdstation-signup-psel.herokuapp.com');
  request.setRequestHeader('Accept', '*/*');
  request.setRequestHeader('Access-Control-Allow-Origin', '*');
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  request.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  request.setRequestHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  request.send(formData);
  document.getElementById('formularioContato').reset();
}

document.getElementById('formularioContato').addEventListener('submit', (event) => {
  event.preventDefault();
  sendForm();
})