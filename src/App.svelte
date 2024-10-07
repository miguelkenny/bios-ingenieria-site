<script>
  import { onMount } from "svelte";
  import Header from "./components/Header.svelte";
  import Services from "./components/Services.svelte";
  import Industries from "./components/Industries.svelte";
  import Faq from "./components/FAQ.svelte";
  import About from "./components/About.svelte";
  import Team from "./components/Team.svelte";
  import Experience from "./components/Experience.svelte";
  import Contact from "./components/Contact.svelte";
  import Footer from "./components/Footer.svelte";
  import ScrollToTopButton from "./components/ScrollToTopButton.svelte";
  import SliderClientes from "./components/SliderClientes.svelte";
  import SliderBios from "./components/SliderBios.svelte";
  import WhatsAppButton from "./components/WhatsAppButton.svelte";

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

<!-- Navbar -->
<nav
  class="absolute top-20 left-1/2 transform -translate-x-1/2 w-11/12 max-w-7xl bg-white p-4 rounded-3xl flex justify-between items-center z-50"
>
  <div class="logo">
    <img src="/logo.png" alt="Logo" class="h-12 w-auto" />
  </div>

  <!-- Ícono de menú para móviles -->
  <button class="block md:hidden text-3xl" on:click={toggleMenu}>
    &#9776;
  </button>

  <!-- Opciones de navegación (se ocultan en dispositivos móviles) -->
  <div class="hidden md:flex gap-12">
    <a
      href="#services"
      class="text-2xl font-bold text-black hover:text-blue-500">Servicios</a
    >
    <a
      href="#industries"
      class="text-2xl font-bold text-black hover:text-blue-500">Industrias</a
    >
    <a href="#about" class="text-2xl font-bold text-black hover:text-blue-500"
      >Sobre Nosotros</a
    >
    <a href="#faq" class="text-2xl font-bold text-black hover:text-blue-500"
      >FAQs</a
    >
    <a href="#contact" class="text-2xl font-bold text-black hover:text-blue-500"
      >Contacto</a
    >
  </div>

  <!-- Menú desplegable para móviles -->
  {#if isMenuOpen}
    <div
      class="absolute top-20 left-0 w-full bg-white flex flex-col items-center space-y-4 mr-4 py-4 md:hidden rounded-3xl"
    >
      <a
        href="#services"
        class="text-xl font-bold text-black hover:text-blue-500"
        on:click={toggleMenu}>Servicios</a
      >
      <a
        href="#industries"
        class="text-xl font-bold text-black hover:text-blue-500"
        on:click={toggleMenu}>Industrias</a
      >
      <a
        href="#about"
        class="text-xl font-bold text-black hover:text-blue-500"
        on:click={toggleMenu}>Sobre Nosotros</a
      >
      <a
        href="#faq"
        class="text-xl font-bold text-black hover:text-blue-500"
        on:click={toggleMenu}>FAQs</a
      >
      <a
        href="#contact"
        class="text-xl font-bold text-black hover:text-blue-500"
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

<!-- Botón WhatsApp -->
<WhatsAppButton />
<!-- Botón para volver arriba -->
<!--<ScrollToTopButton {showScrollButton} />-->
