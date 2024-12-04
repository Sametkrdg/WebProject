<template>
  <div class="container">
    <h2>Ödev Sayfasına Hoşgeldiniz</h2>
    <p class="child">
      Componentler arasında gezinmek için butonları kullanabilirsiniz
    </p>
  </div>
</template>

<script></script>

<style>
.container {
  background-color: darkcyan;
  color: white;
  padding: 20px;
  transition: background-color 0.3s ease;
}

.container:hover {
  background-color: lightseagreen; /* Kapsayıcı rengi değişir */
  color: black;
  font-size: smaller;
}

.container:hover .child {
  color: darkred; /* Alt elemanın rengi değişir */
  font-weight: bolder;
  font-size: larger;
}
</style>
