<script>
  // Lista de logos
  let logos = [
    "/i1.jpeg",
    "/i2.jpeg",
    "/i3.jpeg",
    "/i4.jpeg",
    "/i5.jpeg",
    "/i6.jpeg",
    "/i7.jpeg",
    "/i8.jpeg",
    "/i9.jpeg",
    "/i10.jpeg",
    "/i11.jpeg",
  ];
</script>

<h2
  class="font-clashg text-lg text-center mt-4 uppercase font-bold text-DarkBlue pb-8"
>
  BIOS En Acción
</h2>
<div class="logo-container py-16">
  <div class="logo-carousel">
    {#each logos.concat(logos) as logo}
      <!-- Duplicamos los logos para el desplazamiento continuo -->
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
    animation: scroll 40s linear infinite; /* Ajustamos la velocidad */
  }

  /* Logo individual */
  .logo-item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 600px; /* Mantiene el ancho deseado */
    height: 300px; /* Mantiene la altura deseada */
  }

  .logo-item img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Asegura que la imagen llene el contenedor sin distorsionarse */
  }

  /* Animación de desplazamiento continuo */
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
</style>
