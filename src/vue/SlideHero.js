export default {
  data() {
    return {
      images: [
        { src: "Images/HeroExtra1.jpg" },
        { src: "Images/HeroExtra2.jpg" },
        { src: "Images/HeroExtra1.jpg" }
      ],
      slideIndex: 0
    };
  },
  mounted() {
    this.showSlides();
  },
  methods: {
    showSlides() {
      let i;
      const slides = document.getElementsByClassName("mySlides");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      this.slideIndex++;
      if (this.slideIndex > slides.length) {
        this.slideIndex = 1;
      }
      slides[this.slideIndex - 1].style.display = "block";
      setTimeout(this.showSlides, 5);
    }
  }
};