9// Import stylesheets
import './style.css';

  const expressionElement: Element = document.getElementsByTagName('expression').item(0)

  const answerElement: Element = document.getElementsByTagName('answer').item(0)

  function solve() {
    answerElement.innerHTML=eval(expressionElement.innerText)
  }

solve();  

expressionElement.addEventListener('blur', e=> solve())