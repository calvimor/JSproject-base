JSproject-base
==============
[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/calvimor/JSproject-base?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Base Template to javascript's project

Para comenzar a desarrollar nuestro proyecto Frontend, vamos a
estructurar los archivos de la siguiente manera

project/<br>
|-- app/<br>
|-- dist/<br>
|-- package.json<br>
|-- bower.json<br>
|-- README.md<br>
|-- .gitignore<br>
|-- .editorconfig<br>
|-- .jshintrc
  

<h3>Pasos de automatización GULP</h3>
<ul>
  <li>Instalar node: <code>npm install -g gulp</code> y gulp: <code>npm install -g bower</code> a nivel global</li>
  <li>Descargar y descomprimir</li>
  <li>Ejecutar los siguientes comandos en una consola ubicada en la carpeta o directorio
    <ul>
      <li><code>npm install --save-dev gulp</code></li>
      <li><code>npm install --save-dev gulp-connect</code></li>
      <li><code>npm install --save-dev connect-history-api-fallback</code></li>
      <li><code>npm install --save-dev gulp-jshint</code></li>
      <li><code>npm install --save-dev gulp-useref</code></li>
      <li><code>npm install --save-dev gulp-if</code></li>
      <li><code>npm install --save-dev gulp-uglify</code></li>
      <li><code>npm install --save-dev gulp-minify-css</code></li>
      <li><code>npm install --save-dev gulp-stylus</code></li>
      <li><code>npm install --save-dev nib</code></li>
      <li><code>npm install --save-dev jshint-stylish</code></li>
      <li><code>npm install --save-dev gulp-inject</code></li>
      <li><code>npm install --save-dev wiredep</code></li>
      <li><code>gulp</code></li>
      <li>
    </ul>
  </li>
</ul>
<p>
Este último comando gulp inicia el servidor en http://localhost:8080 y las tareas definidas en Gulpfile.js
Ahora se abre otra consola para instalar las librerías con bower y podemos ver que se agregan a bower.json y en el index.html gracias a las tareas gulp.
</p>
<h3>Bower</h3>
<ul>
  <li><code>bower install --save bootstrap</code></li>
  <li><code>bower install --save angular</code></li>
  <li><code>bower install --save angular-ui-router</code></li>
</ul>

<p>Si nos hemos equivocado, y no requerimos de alguna librería que hemos instalado, se puede eliminar con
<strong>uninstall</strong>, ejemplo:
<code>bower uninstall --save angular</code></p>
<h3>Referencias</h3>
Basado en la guía "DESARROLLO WEB ÁGIL CON ANGULAR de Carlos Azaustre
