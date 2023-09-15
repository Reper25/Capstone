<template>
  <div class="body">
    <div class="container">
      <div class="about">
        <br>
        <h1>About Us</h1>
        <h3>Welcome to Walk In Wonder, your ultimate destination for Nike sneakers and hoodies. We are more than just an online store; we are a haven for sneakerheads and athleisure enthusiasts who share a passion for style, comfort, and quality.</h3>
      </div>
      <br>
      <div class="info">
        <h1>Our Mission</h1>
        <h3>At Walk In Wonder, our mission is simple: to provide you with the latest and greatest Nike sneakers and hoodies, all in one place. We are committed to offering a curated selection of premium Nike products that cater to your unique sense of fashion and sporty lifestyle. Whether you're looking for the perfect pair of sneakers to make a statement or a cozy hoodie to stay warm and stylish, we've got you covered.</h3>
      </div>
      <br>
      <div class="img">
        <img src="https://i.postimg.cc/rpQrsvys/production-id-5086893-2160p.gif" alt="" class="img-fluid img" loading="lazy" >
      </div>
      <br>
      <div class="info">
        <h1>Why Choose Us?</h1>
        <h3><b>Authenticity Guaranteed:</b> We take pride in offering only 100% authentic Nike products sourced directly from authorized suppliers. When you shop with us, you can trust that you are getting the real deal.<br><br>
          <b>Diverse Selection:</b> Our collection features a wide range of Nike sneakers and hoodies, from classic essentials to limited-edition releases. We cater to both sneaker enthusiasts and those seeking versatile, comfortable clothing.<br><br>
          <b>Assurance:</b>  Nike is synonymous with quality, and we uphold those same standards. Every product we offer is made to withstand the test of time, ensuring you get the most value out of your purchase.<br><br>
          <b>Trendsetting Styles:</b> Stay ahead of the fashion curve with our carefully curated selection of Nike products. We keep our finger on the pulse of the latest trends to bring you the freshest styles.<br><br>
          <b>Customer-Centric Approach:</b> Your satisfaction is our top priority. Our friendly customer support team is here to assist you with any questions or concerns, and we strive to make your shopping experience as seamless as possible.</h3>
      </div>
      <br>
    </div>
    <br>
    <div class="info">
        <h1>Join the Walk In Wonder Community</h1>
        <h3>We invite you to join our community of sneaker enthusiasts and fashion-forward individuals who are as passionate about Nike as we are. Follow us on social media for updates on new arrivals, style tips, and exclusive promotions.<br>
          Thank you for choosing Walk In Wonder as your go-to destination for Nike sneakers and hoodies. We look forward to being a part of your journey towards effortless style and unmatched comfort. Walk with us, and let's explore the world of wonder together, one step at a time.





</h3>
      </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
img{
  
  width: 30%;  
}

.col{
  padding: 1rem;
}

.body{
height: max-content;
}

.card {
  width: 21rem;
  height: 8rem;
  border-radius: 20px;
  background: #f5f5f5;
  position: relative;
  padding: 1.8rem;
  border: 2px solid #c3c6ce;
  -webkit-transition: 0.5s ease-out;
  transition: 0.5s ease-out;
  overflow: visible;
}

.card-details {
  height: 100%;
  gap: .5em;
  display: grid;
  place-content: center;
}



.spon{
  width: 100%;
  height: fit-content;
}

.card:hover {
  border-color: gold;
  box-shadow: 10px 5px 18px 0 rgba(255, 255, 255, 0.877);
}

.card:hover .card-button {
  transform: translate(-50%, 50%);
  transform: translate(-50%, 50%);
  transform: translate(-50%, 50%);
  opacity: 1;
}

@media (max-width: 850px) {

  .img{
    height: auto;
  }
  
}
</style>
