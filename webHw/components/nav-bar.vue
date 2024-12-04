<template>
  <header class="header">
    <div id="announcements-main">
      <Swiper
        :slides-per-view="1"
        loop="true"
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
        class="my-swiper"
        style="height: 40px"
      >
        <SwiperSlide>
          <div
            class="slider-banner flex justify-center items-center h-full"
            style="
              color: rgb(253, 253, 253);
              background-color: rgb(0, 0, 0);
              height: 40px;
            "
          >
            <div
              class="w-3/4 mx-auto text-center announcement-text font-medium uppercase"
              style="font-size: 13px"
            >
              16:00'A KADAR VERİLEN TÜM SİPARİŞLER AYNI GÜN KARGODA!
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            class="slider-banner flex justify-center items-center h-full"
            style="
              color: rgb(253, 253, 253);
              background-color: rgb(0, 0, 0);
              height: 40px;
            "
          >
            <div
              class="w-3/4 mx-auto text-center announcement-text font-medium uppercase"
              style="font-size: 13px"
            >
              16:00'A KADAR VERİLEN TÜM SİPARİŞLER AYNI GÜN KARGODA!
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>

    <div class="menu">
      <nav>
        <ul class="nav-items">
          <div class="parent">
            <a href="/main"
              ><img
                src="https://cdn.myikas.com/images/theme-images/c86b3cdb-e936-440f-bb01-27b8ade84ff3/image_540.webp"
                alt="logo"
                class="logo"
            /></a>
          </div>
          <div class="parent">
            <li>
              <a href="/giyim" class="title">YENİ</a>
            </li>
          </div>
          <div class="parent">
            <li>
              <a href="/ust-giyim" class="title">ÜST GİYİM</a>
              <div class="child">
                <a href="/t-shirt">T-Shirt</a><br />
                <a href="/sweatshirt">Sweatshirt</a><br />
                <a href="/gomlek">Gömlek</a><br />
                <a href="/ust-giyim">Tümünü Gör</a>
              </div>
            </li>
          </div>
          <div class="parent">
            <li>
              <a href="/alt-giyim" class="title">ALT GİYİM</a>
              <div class="child">
                <a href="/pantolon">Pantolon</a><br />
                <a href="/esofman">Eşofman</a><br />
                <a href="/sort">Şort</a><br />
                <a href="/alt-giyim">Tümünü Gör</a>
              </div>
            </li>
          </div>
          <div class="parent">
            <li>
              <a href="/alt-giyim" class="title">DIŞ GİYİM</a>
              <div class="child">
                <a href="/ceket">Ceket</a>
              </div>
            </li>
          </div>
          <div class="parent">
            <li>
              <a href="/aksesuar" class="title">AKSESUAR</a>
              <div class="child">
                <a href="/corap">Çorap</a><br />
                <a href="/bere">Bere</a><br />
                <a href="/atki">Atkı</a><br />
                <a href="/sapka">Şapka</a><br />
                <a href="/canta">Çanta</a><br />
                <a href="/cuzdan">Cüzdan</a><br />
                <a href="/aksesuar">Tümünü Gör</a>
              </div>
            </li>
          </div>
          <div class="parent">
            <li>
              <a href="/sohigh" class="title">SOHIGH</a>
            </li>
          </div>
          <div class="nov">
            <li>
              <a href="/efsane-kasım" class="nov-title">YILBAŞI İNDİRİMLERİ</a>
            </li>
          </div>
          <div class="parent">
            <a href="/arama"
              ><font-awesome-icon
                class="icons"
                :icon="['fas', 'magnifying-glass']"
            /></a>
            <a href="/sign-up"
              ><font-awesome-icon class="icons" icon="fa-solid fa-user"
            /></a>
            <a href="/bag-shopping"
              ><font-awesome-icon
                class="icons"
                :icon="['fas', 'bag-shopping']"
                style="padding-right: 200px"
            /></a>
          </div>
        </ul>
      </nav>
    </div>
    <hr />
  </header>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
export default {
  name: "SecondComp",
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style>
* {
  margin: 0%;
  padding: 0%;
}
.icons {
  color: black;
  font-size: 23px;
  padding: 10px;
}
ul {
  list-style: none; 
  padding: 0; 
  margin: 0; 
}
.nav-items {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  display: inline-block;
  width: 140px;
  margin-left: 150px;
  margin-top: 0%;
  margin-right: 150px;
}
.title {
  text-decoration: none;
  background-color: white;
  color: black;
  font-size: 16px;
  margin: 0px 15px;
}
.title::after {
  content: ""; 
  position: absolute;
  left: 0;
  bottom: -5px; 
  height: 1px; 
  background-color: black; 
  width: 0; 
  transition: width 0.3s ease-in-out; 
}
.title:hover::after {
  width: 100%; 
}
.parent {
  position: relative;
  display: inline-block;
  font-family: "Oswald", -apple-system, system-ui, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
  font-weight: bolder;
}
.parent .child {
  position: absolute;
  visibility: hidden;
  opacity: 0;
  padding: 10px;
  border-radius: 5px;
  transition: visibility 0s, opacity 0.3s ease-in-out;
  font-family: "Oswald", -apple-system, system-ui, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
}
.child a {
  color: black;
  background-color: white;
}
.parent:hover .child {
  visibility: visible;
  opacity: 1;
}
.nov-title {
  position: relative;
  color: #d82525ff;
  text-decoration: none;
  font-family: "Oswald", -apple-system, system-ui, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
  font-weight: bolder;
}
.nov-title:hover {
  color: black;
}
.nov-title::after {
  content: ""; /* Pseudo-element için boş içerik */
  position: absolute;
  left: 0;
  bottom: -5px; /* Yazının hemen altına yerleştir */
  height: 1px; /* Çizginin kalınlığı */
  background-color: #d82525ff; /* Çizgi rengi */
  width: 0; /* Başlangıçta görünmez */
  transition: width 0.3s ease-in-out; /* Geçiş efekti */
}
.nov-title:hover::after {
  width: 100%; /* Hover ile tam genişlikte görünür */
}
.announcement-text {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  font-size: 13px;
  color: rgb(253, 253, 253);
  font-family: "Oswald", -apple-system, system-ui, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
  font-weight: bolder;
}
.slider-banner {
  background-color: rgb(0, 0, 0);
  height: 40px;
  justify-content: center;
}
</style>
