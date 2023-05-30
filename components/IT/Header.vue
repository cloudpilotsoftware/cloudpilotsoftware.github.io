<template>
  <header class="style-2 overflow-hidden"  data-scroll-index="1">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="content text-center text-light text-capitalize">
            <div class="top_info">
              <h2 class="text-uppercase">CloudPilot</h2>
              <p class="fw-light text-uppercase">
                Best Solutions for <br /> <strong class="fw-bold">Cloud Architecture & Devops</strong> Services
              </p>
              <a href="https://youtu.be/pGbIOC83-So?t=21" class="vid-btn" @click="openVideo">
                <i class="bi bi-play-fill wow heartBeat infinite slower"></i>
              </a>
            </div>
            <div class="brands mt-200 mb-80">
              <a href="#" class="logo wow fadeInUp" data-wow-delay="0">
                <img height="100px" src="/assets/img/about/about_logos/fiverr.png" alt="" />
              </a>
              <a href="#" class="logo wow fadeInUp" data-wow-delay="0.2s">
                <img src="/assets/img/about/about_logos/upwork.png" alt="" />
              </a>
              <a href="#" class="logo wow fadeInUp" data-wow-delay="0.4s">
                <img src="/assets/img/about/about_logos/linkedin.png" alt="" />
              </a>
              <a href="#" class="logo wow fadeInUp" data-wow-delay="0.6s">
                <img src="/assets/img/about/about_logos/facebook.png" alt="" />
              </a>
              <a href="#" class="logo wow fadeInUp" data-wow-delay="0.8s">
                <img src="/assets/img/about/about_logos/2.png" alt="" />
              </a>
            </div>
            <h4>
              We can help to maintain and modernize <br /> your Cloud infrastructure & solve various infrastructure-specific <br /> issues a business may face.
            </h4>
            <p class="d-block mt-40">
              CloudPilot Co is the partner of choice for many of the clients  in marketplaces<br /> enterprises, SMEs and technology challengers. We help businesses elevate their value through <br /> cloud infra design, deployment, open source software customizations and consultancy services.
            </p>
            <NuxtLink to="/page-about-5" class="btn sm-butn border text-white radius-9 mt-60 hover-darkBlue">
              <span>More About Us</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <img src="/assets/img/header/header_2.png" alt="" class="head_shape2 wave" />
    <ModalVideo channel="youtube" videoId="pGbIOC83-So" :isOpen.sync="videoIsOpen" />
  </header>
</template>

<script>
import ModalVideo from '../ModelVideo';

export default {
  components: {
    ModalVideo
  },
  data() {
    return {
      videoIsOpen: false
    }
  },
  methods: {
    openVideo(e) {
      e.preventDefault();
      this.videoIsOpen = !this.videoIsOpen
    }
  },
}
</script>