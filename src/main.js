import './assets/css/style.css';
import './assets/css/background.css';
document.body.addEventListener("pointermove", (e)=>{
    const { currentTarget: el, clientX: x, clientY: y } = e;
    const { top: t, left: l, width: w, height: h } = el.getBoundingClientRect();
    el.style.setProperty('--posX',  x-l-w/2);
    el.style.setProperty('--posY',  y-t-h/2);
  })

  import formGeraSenha from './modules/formGeraSenha';

  formGeraSenha();