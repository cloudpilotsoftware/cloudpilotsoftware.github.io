<template>
  <div>
    <Navbar />
    <Header />
    <main>
      <Services />
      <ChooseUs />
      <Reviews />
      <Pricing />
      <Blog />
      <Contact />
    </main>
    <Footer />
  </div>
</template>

<script>
import Blog from '../../components/IT/Blog';
import ChooseUs from '../../components/IT/ChooseUs';
import Contact from '../../components/IT/Contact';
import Footer from '../../components/IT/Footer';
import Header from '../../components/IT/Header';
import Pricing from '../../components/IT/Pricing';
import Reviews from '../../components/IT/Reviews';
import Services from '../../components/IT/Services';
import Navbar from '../../components/Navbars/ITNav';

export default {
  name: 'HomeITSolutions',
  layout: "Main",
  components: {
    Navbar,
    Header,
    Services,
    ChooseUs,
    Reviews,
    Pricing,
    Blog,
    Contact,
    Footer
  },
  head() {
    return {
      titleTemplate: "%s - IT Solutions",
    }
  }
}
</script>
