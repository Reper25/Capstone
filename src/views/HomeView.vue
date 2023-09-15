<template>
  <div class="body">
    <div class="homeh">
        <div class="overlay w-100 h-100">
        </div>
    </div>
    <br>
    <h2 class="hdr text-left mx-2" >Bring On The Fashion</h2>
    <br>
    <div class="portfolio">
  <a href="/product" class="card">
    <div class="content">
      <span class="title">LM Editon Air Forces</span>
      <span class="category">Sneakers</span>
    </div>
    <div class="image">
      <img src="https://i.postimg.cc/qRdx4BWV/96fe5003-091a-48d4-8f13-1a801f1ce86d.webp" alt="" />
    </div>
  </a>

  <a href="/product" class="card">
    <div class="content">
      <span class="title">White Air Max 90</span>
      <span class="category">Sneakers</span>
    </div>
    <div class="image">
      <img src="https://i.postimg.cc/d1mm1PK7/air-max-90-ltr-shoes-JQG9k-N.jpg" alt="" />
    </div>
  </a>

  <a href="/product" class="card">
    <div class="content">
      <span class="title">LM Edition Air Max 90</span>
      <span class="category">Sneakers</span>
    </div>
    <div class="image">
      <img src="https://i.postimg.cc/pdjJw5GJ/be71562a-2151-4fbb-9d7a-868e0c09ccef.webp" alt="" />
    </div>
  </a>

  <a href="/product" class="card">
    <div class="content">
      <span class="title">Black Air Max 90</span>
      <span class="category">Sneakers</span>
    </div>
    <div class="image">
      <img src="https://i.postimg.cc/x86vvv8n/ccffbb98-ff7d-411b-9c3e-58b8c4e8535e.webp" alt="" />
    </div>
  </a>

  <a href="/product" class="card">
    <div class="content">
      <span class="title">White Air Jordan Hoodie</span>
      <span class="category">Hoodies</span>
    </div>
    <div class="image">
      <img src="https://i.postimg.cc/3JP7KPrC/1a8a0313-22cf-4a79-a198-8615c041413c.webp" alt="" />
    </div>
  </a>

  <a href="/product" class="card">
    <div class="content">
      <span class="title">Black Air Jordan Hoodie</span>
      <span class="category">Hoodies</span>
    </div>
    <div class="image">
      <img src="https://i.postimg.cc/rsVGRn8f/cc1fc113-989f-4c5d-a1b7-7900c371798b.webp" alt="" />
    </div>
  </a>

  <a href="/product" class="card">
    <div class="content">
      <span class="title">Brown NBA Hoodie</span>
      <span class="category">Hoodies</span>
    </div>
    <div class="image">
      <img src="https://i.postimg.cc/2SMx97w5/d7967bc2-f542-47dd-b802-41cee375ffb4.webp" alt="" />
    </div>
  </a>

  <a href="/product" class="card">
    <div class="content">
      <span class="title">Air Jordan Wolf Grey Hoodie</span>
      <span class="category">Hoodies</span>
    </div>
    <div class="image">
      <img src="https://i.postimg.cc/CxzN4Qbt/images-1.jpg" alt="" />
    </div>
  </a>
</div>
<br>
<h2 class="hdr text-end mx-2">Endless Fashion</h2>
  <br>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
@import url('https://fonts.cdnfonts.com/css/oblivious-font');
.body{
  background-color: #EEEDED !important;
}
.homeh{
  background: url(https://gifdb.com/images/high/nike-logo-led-light-flashing-1t6qanoqm20ta58w.gif);
  background-size: cover;
  background-position: center;
  height: 60vh;
}

.hdr{
 
  font-size: 4rem;
  text-align: left ;
  font-family: 'Oblivious font', sans-serif;
  color: black;
                                                
}

* {
  margin: 0;
  padding: 0;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
}
.portfolio {
  display: flex;
  flex-wrap: wrap;
  min-width: 320px;
}

.portfolio h2 {
  flex-basis: 100%;
  text-align: center;
  margin: 50px auto 30px;
  text-transform: uppercase;
  font-size: 20px;
  letter-spacing: 2px;
  color: #111;
}
.card {
  width: 25%;
  overflow: hidden;
  position: relative;
}
.card .content {
  z-index: 2;
  width: 100%;
  position: absolute;
  bottom: -100px;
  transition: all 0.7s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  min-height: 100px;
  background: #111;
}
.card .image {
  z-index: 1;
  height: 100%;
}
.card img {
  height: 100%;
  width: 100%;
  transition: all 0.5s ease;
  transform: scale(1.2);
}

.card:hover .content {
  bottom: 0px;
  color: #fff;
}

.card:hover .image img {
  transform: scale(1);
}

.card .content span:first-child {
  text-transform: uppercase;
  margin-bottom: 10px;
  font-weight: 700;
  letter-spacing: 1px;
  text-align: center;
  color: #fff;
  font-size: 16px;
}

.card .content span:last-child {
  font-size: 14px;
  color: #18cfab;
  text-align: center;
  font-weight: 700;
}


@media screen and (max-width: 768px) {
  .card {
  width: 50%;
  }
  .card .content {
    bottom: 0;
  }
}

@media screen and (max-width: 480px) {
  .card {
  width: 100%;
  }
}
</style>