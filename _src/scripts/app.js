import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"

const application = Application.start()
const context = require.context("./controllers", true, /\.js$/)
application.load(definitionsFromContext(context));


const BLACKLISTED_KEY_CODES = [ 38 ];
const COMMANDS = {
  help:
    'Supported commands: <span class="code">about</span>, <span class="code">experience</span>, <span class="code">education</span>, <span class="code">skills</span>, <span class="code">contact</span>',
  about:
    "Hello 👋<br>I'm Andrés Castellanos. I’m a 23 years old web developer currently living in México. I love the feeling that comes when you learn something new, it motivates you to have a selfless will to  acquire knowledge.",
  skills:
    '<span class="code">Languages:</span> JavaScript, PHP, Java, Python, Clojure, C <br><span class="code">Technologies:</span> Webpack, Git, SQL, Transact-SQL, Salesforce, Github Pages, Webpack, Material Web Components <br><span class="code">Frameworks:</span> Angular, Vue.js, Laravel, Jekyll, RubyOnRails, Django',
  education:
    "Faculty of Math UADY, Mérida, México<br>Degree — Software Engineer",
  //resume: "<a href='./resume.pdf' class='success link'>resume.pdf</a>",
  experience: "6 Months working as Android Developer at Galletera Dondé <br> 8 months working as Salesforce at Zurjef <br> 5 months as intern at Nearsoft <br> Currently working as Back-end developer at Relappro - 4 months",
  contact:
    "You can contact me on any of following links:<br><a href='https://www.linkedin.com/in/castellanosandres/' class='success link'>LinkedIn</a>, <a href='mailto:acastellanosalcocer@gmail.com' class='success link'>Mail</a>, <a href='https://twitter.com/Andres_Cst' class='success link'>Twitter</a>"
};
let userInput, terminalOutput;

const app = () => {
  userInput = document.getElementById("userInput");
  terminalOutput = document.getElementById("terminalOutput");
  document.getElementById("dummyKeyboard").focus();
  console.log("Application loaded");
};

const execute = function executeCommand(input) {
  let output;
  input = input.toLowerCase();
  if (input.length === 0) {
    return;
  }
  output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
  if (!COMMANDS.hasOwnProperty(input)) {
    output += `<div class="terminal-line">no such command: ${input}</div>`;
    console.log("Oops! no such command");
  } else {
    output += COMMANDS[input];
  }

  terminalOutput.innerHTML = `${
    terminalOutput.innerHTML
  }<div class="terminal-line">${output}</div>`;
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
};

const key = function keyEvent(e) {
  const input = userInput.innerHTML;

  if (BLACKLISTED_KEY_CODES.includes(e.keyCode)) {
    return;
  }

  if (e.key === "Enter") {
    execute(input);
    userInput.innerHTML = "";
    return;
  }

  userInput.innerHTML = input + e.key;
};

const backspace = function backSpaceKeyEvent(e) {
  if (e.keyCode !== 8 && e.keyCode !== 46) {
    return;
  }
  userInput.innerHTML = userInput.innerHTML.slice(
    0,
    userInput.innerHTML.length - 1
  );
};

document.addEventListener("keydown", backspace);
document.addEventListener("keypress", key);
document.addEventListener("DOMContentLoaded", app);
