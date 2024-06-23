<template>
  <div class="bg">
    <div class="container flex">
      <div class="left">
        <h1 class="heading gradient-text">{{$t('About Our Company')}}</h1>
        <p>
          {{$t('At')}} <span class="gradient-text">TON LINK</span>, {{$t('About Our Company p')}}
        </p>
      </div>
      <div class="image">
        <img src="@/assets/vr-glasses.png" />
      </div>
      <div class="image2">
        <img src="@/assets/vr-glasses.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.bg {
  position: relative;
  background-color: var(--dark-bg);
  color: var(--bg);
}

.image {
  position: absolute;
  top: 0;
  right: -400px;
}

.image2 {
  position: absolute;
  top: 0;
  left: -450px;
}

img {
  max-width: 600px;
  max-height: 600px;
  margin: auto;
}

h1 {
  margin-top: 1rem;
  font-size: 3rem;
  letter-spacing: 3px;
  font-weight: 400;
}

p {
  font-size: 1.2rem;
  line-height: 2rem;
  letter-spacing: 2px;
  font-weight: 300;
  margin: 3rem auto;
  text-align: center;
  width: 80%;
}

@media (max-width: 1024px) {
  .image {
    position: absolute;
    top: 100px;
    right: -400px;
  }

  .image2 {
    position: absolute;
    top: 100px;
    left: -400px;
  }

  img {
    max-width: 500px;
    max-height: 500px;
    margin: auto;
  }
}

@media (max-width: 800px) {
  .image {
    position: absolute;
    top: 150px;
    right: -450px;
  }

  .image2 {
    position: absolute;
    top: 150px;
    left: -450px;
  }

  img {
    max-width: 500px;
    max-height: 500px;
    margin: auto;
  }
}

@media (max-width: 500px) {}

@media (max-width: 400px) {
  .image {
    opacity: 0;
  }

  .image2 {
    opacity: 0;    
  }

  h1 {
  margin-top: 1rem;
  font-size: 3rem;
  letter-spacing: 3px;
  font-weight: 400;
}

p {
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: 1.5px;
  font-weight: 300;
  margin: 3rem auto;
  width: 100%;
}
}
</style>