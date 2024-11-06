<script>
  import { Marquee } from "flowbite-svelte";
  // Puedes agregar más logos o usar logos dinámicamente si es necesario
  let logos = [
    "/Clients/Cummins.png",
    "/Clients/Datum.png",
    "/Clients/ExploService.png",
    "/Clients/Maxiklak.png",
    "/Clients/Epiroc.png",
    "/Clients/Acer.png",
    "/Clients/Bustin.png",
    "/Clients/Consular.png",
    "/Clients/efeeme.png",
    "/Clients/Finning.png",
    "/Clients/Gm.png",
    "/Clients/Indumet.png",
    "/Clients/Isemar.png",
    "/Clients/Knight.png",
    "/Clients/Laplatense.png",
    "/Clients/Lg.png",
    "/Clients/Minetech.png",
    "/Clients/Superflow.png",
    "/Clients/Tecma.png",
    "/Clients/Weiresco.png",
  ];
</script>

<h2
  class="font-clashg text-lg text-center mt-4 uppercase font-bold text-DarkBlue"
>
  ALGUNOS DE NUESTROS CLIENTES
</h2>

<body>
  <div class="Marquees">
    <div class="Marquee FirstRow">
      {#each logos as logo}
        <div class="marquee Item">
          <img
            src={logo}
            alt={logo.split("/").pop().split(".")[0]}
            class="object-cover"
          />
        </div>
      {/each}
    </div>

    <div class="Marquee SecondRow">
      {#each logos as logo}
        <div class="marquee Item">
          <img
            src={logo}
            alt={logo.split("/").pop().split(".")[0]}
            class="object-cover"
          />
        </div>
      {/each}
    </div>
  </div>
</body>

<style>
  body {
    width: 100vw;
    height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .Marquees {
    overflow-x: hidden;
    width: 100%;
  }

  .Marquee {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200vw;
    height: 13vh;
  }

  .marquee {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #1a1a1a00;
    height: 11vh;
    width: 12.5vw;
    margin: 5px; /* Reducir el margen para que las filas estén más juntas */
    border-radius: 15px;
  }

  /* Para asegurar que las imágenes mantengan su tamaño y se adapten al contenedor */
  .marquee img {
    max-width: 100%;
    max-height: 100%;
  }

  /* Animaciones para la primera y segunda fila */
  .FirstRow {
    animation: Scroll 30s linear infinite;
  }
  .SecondRow {
    animation: Scroll 30s linear infinite;
    animation-direction: reverse;
  }

  /* Animación de scrolling */
  @keyframes Scroll {
    0% {
      transform: translateX(-50vw);
    }
    100% {
      transform: translateX(50vw);
    }
  }

  /* Ajustes para móviles */
  @media (max-width: 768px) {
    body {
      height: 35vh; /* Ajustar el alto del contenedor en móviles para reducir la separación */
    }

    .Marquee {
      width: 300vw; /* Aumentar el ancho total para más espacio de desplazamiento */
      height: 13vh; /* Reducir la altura de cada fila en móviles */
    }

    .marquee {
      width: 35vw; /* Hacer cada ítem más ancho en móviles */
      height: 13vh; /* Ajustar la altura de los ítems en móviles */
      margin: 3px; /* Reducir aún más el margen en móviles */
    }

    .FirstRow,
    .SecondRow {
      animation-duration: 20s; /* Reducir la velocidad de la animación en móviles */
    }
  }
</style>
