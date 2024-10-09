<script>
  import { onMount } from "svelte";
  import Header from "./lib/components/Header.svelte";
  import Services from "./lib/components/Services.svelte";
  import Industries from "./lib/components/Industries.svelte";
  import Faq from "./lib/components/FAQ.svelte";
  import About from "./lib/components/About.svelte";
  import Team from "./lib/components/Team.svelte";
  import Experience from "./lib/components/Experience.svelte";
  import Contact from "./lib/components/Contact.svelte";
  import Footer from "./lib/components/Footer.svelte";
  import ScrollToTopButton from "./lib/components/ScrollToTopButton.svelte";
  import SliderClientes from "./lib/components/SliderClientes.svelte";
  import SliderBios from "./lib/components/SliderBios.svelte";
  import WhatsAppButton from "./lib/components/WhatsAppButton.svelte";

  let showScrollButton = false;
  let isMenuOpen = false;

  // Función para manejar el scroll
  const handleScroll = () => {
    showScrollButton = window.scrollY > 300; // Muestra el botón si se ha hecho scroll más de 300px
  };

  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
  };

  // Al montar el componente, se añade el listener para el scroll
  onMount(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Limpia el listener al desmontar
  });
</script>

<div>
  <!-- Navbar -->
  <nav
    class="sticky mx-auto top-5 w-full sm:w-max h-max bg-LightBlue border border-gray-300 p-4 rounded-3xl flex justify-between items-center z-50"
  >
    <div class="logo">
      <img src="/logo.png" alt="Logo" class="h-8 w-auto mr-12" />
    </div>
  
    <!-- Ícono de menú para móviles -->
    <button class="block md:hidden text-3xl" on:click={toggleMenu}>
      &#9776;
    </button>
  
    <!-- Opciones de navegación (se ocultan en dispositivos móviles) -->
    <div class="hidden md:flex gap-12">
      <a
        href="#services"
        class="font-clashg font-medium text-md text-black hover:text-blue-800">Servicios</a
      >
      <a
        href="#industries"
        class="font-clashg font-medium text-md text-black hover:text-blue-800">Industrias</a
      >
      <a href="#about" class="font-clashg font-medium text-md text-black hover:text-blue-800"
        >Sobre Nosotros</a
      >
      <a href="#faq" class="font-clashg font-medium text-md text-black hover:text-blue-800"
        >FAQs</a
      >
      <a href="#contact" class="font-clashg font-medium text-md text-Blue hover:text-blue-800"
        >Contacto</a
      >
    </div>
  
    <!-- Menú desplegable para móviles -->
    {#if isMenuOpen}
      <div
        class="absolute top-20 left-0 w-full bg-LightBlue border border-gray-300 flex flex-col items-start space-y-4 mr-4 py-4 md:hidden rounded-3xl px-6"
      >
        <a
          href="#services"
          class="font-clashg font-medium text-md text-black hover:text-blue-800"
          on:click={toggleMenu}>Servicios</a
        >
        <a
          href="#industries"
          class="font-clashg font-medium text-md text-black hover:text-blue-800"
          on:click={toggleMenu}>Industrias</a
        >
        <a
          href="#about"
          class="font-clashg font-medium text-md text-black hover:text-blue-800"
          on:click={toggleMenu}>Sobre Nosotros</a
        >
        <a
          href="#faq"
          class="font-clashg font-medium text-md text-black hover:text-blue-800"
          on:click={toggleMenu}>FAQs</a
        >
        <a
          href="#contact"
          class="font-clashg font-medium text-md text-black hover:text-blue-800"
          on:click={toggleMenu}>Contacto</a
        >
      </div>
    {/if}
  </nav>
  
  <!-- Secciones del sitio -->
  
  <Header />
  <SliderClientes />
  <Services />
  <Industries />
  <Faq />
  <About />
  <Team />
  <Experience />
  <SliderBios />
  <Contact />
  <Footer />
  
  <!-- Botón para volver arriba -->
  <!--<ScrollToTopButton {showScrollButton} />-->
  <ScrollToTopButton />
  
  <!-- Botón WhatsApp -->
  <WhatsAppButton />
</div>
