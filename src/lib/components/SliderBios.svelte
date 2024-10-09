<script>
  // Puedes agregar más logos o usar logos dinámicamente si es necesario
  let logos = [
    "/i1.jpeg",
    "/i2.jpeg",
    "/i3.jpeg",
    "/i4.jpeg",
    "/i5.jpeg",
    "/i6.jpeg",
    "/i7.jpeg",
  ];
</script>

<h2 class="font-clashg text-lg text-center mt-4 uppercase font-bold text-DarkBlue pb-8">
  BIOS En Acción
</h2>
<div class="logo-container py-16">
  <div class="logo-carousel">
    {#each logos as logo (logo)}
      <div class="logo-item">
        <img src={logo} alt="Company Logo" class="rounded-3xl" />
      </div>
    {/each}
    {#each logos as logo (logo)}
      <!-- Segunda fila para un loop infinito -->
      <div class="logo-item">
        <img src={logo} alt="Company Logo" class="rounded-3xl" />
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
    height: 300px; /* Ajusta la altura según tus necesidades */
    background-color: #f5f5f500;
    position: relative;
  }

  /* Carrusel de logos */
  .logo-carousel {
    display: flex;
    gap: 50px; /* Espacio entre los logos */
    animation: scroll 40s linear infinite;
    width: max-content; /* Hace que el ancho dependa del contenido */
  }

  /* Logo individual */
  .logo-item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 600px;
    height: 300px;
  }

  .logo-item img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Esto asegura que la imagen mantenga su proporción */
  }

  /* Animación de desplazamiento */
  @keyframes scroll {
    100% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
</style>
