<script>
  // Puedes agregar más logos o usar logos dinámicamente si es necesario
  let logos = [
    "/indumet.avif",
    "/LaPlatense.avif",
    "/cummins.avif",
    "/datum.jpg",
    "/exploservice.jpg",
    "/maxiklak.jpg",
    "/sibelco.jpg",
  ];
</script>

<h2 class="text-3xl text-center mt-4 uppercase font-bold text-blue-900">
  Respaldados Por
</h2>
<div class="logo-container">
  <div class="logo-carousel">
    {#each logos as logo (logo)}
      <div class="logo-item">
        <img src={logo} alt="Company Logo" />
      </div>
    {/each}
    {#each logos as logo (logo)}
      <!-- Segunda fila para un loop infinito -->
      <div class="logo-item">
        <img src={logo} alt="Company Logo" />
      </div>
    {/each}
  </div>
</div>

<style>
  /* Contenedor del carrusel */
  .logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 100vw;
    height: 180px; /* Ajusta la altura según tus necesidades */
    background-color: #f5f5f500;
    position: relative;
  }

  /* Carrusel de logos */
  .logo-carousel {
    display: flex;
    gap: 50px; /* Espacio entre los logos */
    animation: scroll 20s linear infinite;
    width: max-content; /* Hace que el ancho dependa del contenido */
  }

  /* Logo individual */
  .logo-item img {
    width: 100%; /* Ajusta el tamaño del logo */
    height: 100%;
    object-fit: cover;
  }

  /* Animación de desplazamiento */
  @keyframes scroll {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
</style>
