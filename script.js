// Menu Hambúrguer
const botaoMenu = document.getElementById("botaoMenuHamburguer");
const menuNavegacao = document.getElementById("menuNavegacao");

botaoMenu.addEventListener("click", () => {
  menuNavegacao.classList.toggle("ativo");
});

// Fechar menu ao clicar em um item
document.querySelectorAll(".menu-navegacao a").forEach((link) => {
  link.addEventListener("click", () => {
    menuNavegacao.classList.remove("ativo");
  });
});

// Scroll Suave
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Envio do Formulário para WhatsApp
const formulario = document.getElementById("formularioContato");
formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const empresa = document.getElementById("empresa").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;
  const mensagem = document.getElementById("mensagem").value;

  const numeroWhatsApp = "244947399578";

  let textoMensagem = `🚀 *Novo Contato via Portfólio!*\n\n`;
  textoMensagem += `👤 *Nome:* ${nome}\n`;

  if (empresa.trim() !== "") {
    textoMensagem += `🏢 *Empresa:* ${empresa}\n`;
  }

  textoMensagem += `📧 *E-mail:* ${email}\n`;

  if (telefone.trim() !== "") {
    textoMensagem += `📱 *Telefone:* ${telefone}\n`;
  }

  textoMensagem += `\n💬 *Mensagem:*\n${mensagem}`;

  const mensagemCodificada = encodeURIComponent(textoMensagem);

  const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;

  window.open(linkWhatsApp, "_blank");

  formulario.reset();
});

// Efeito de scroll para animações
window.addEventListener("scroll", function () {
  const navegacao = document.querySelector(".navegacao");
  if (window.scrollY > 100) {
    navegacao.style.background = "rgba(10, 10, 10, 0.98)";
  } else {
    navegacao.style.background = "rgba(10, 10, 10, 0.95)";
  }
});

// Animação dos elementos ao entrar na viewport
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.1 },
);

// Elementos para animar
document
  .querySelectorAll(".cartao-servico, .cartao-projeto, .diferencial-item")
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
