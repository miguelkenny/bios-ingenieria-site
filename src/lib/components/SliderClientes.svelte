<script>
  import { Marquee } from "flowbite-svelte";
  // Puedes agregar más logos o usar logos dinámicamente si es necesario
  let logos = [
    "/clients/Cummins.png",
    "/clients/Datum.png",
    "/clients/ExploService.png",
    "/clients/Maxiklak.png",
    "/clients/Epiroc.png",
    "/clients/Acer.png",
    "/clients/Bustin.png",
    "/clients/Consular.png",
    "/clients/efeeme.png",
    "/clients/Finning.png",
    "/clients/Gm.png",
    "/clients/Indumet.png",
    "/clients/Isemar.png",
    "/clients/Knight.png",
    "/clients/Laplatense.png",
    "/clients/Lg.png",
    "/clients/Minetech.png",
    "/clients/Superflow.png",
    "/clients/Tecma.png",
    "/clients/Weiresco.png",
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
          <img src={logo} alt={logo.split('/').pop().split('.')[0]} class="object-cover" />
        </div>
      {/each}
    </div>

    <div class="Marquee SecondRow">
      {#each logos as logo}
        <div class="marquee Item">
          <img src={logo} alt={logo.split('/').pop().split('.')[0]} class="object-cover" />
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
    /*line 43 is very important. since we have 16 items, width of the Marquee which is 200vw must be devided between them. which turns out to be 12.5vw*/
    margin: 10px;
    border-radius: 15px;
  }

  .FirstRow {
    animation: Scroll 30s linear infinite;
  }
  .SecondRow {
    animation: Scroll 30s linear infinite;
    animation-direction: reverse;
  }
  @keyframes Scroll {
    0% {
      transform: translateX(-50vw);
      -webkit-transform: translateX(-50vw);
    }
    100% {
      transform: translateX(50vw);
      -webkit-transform: translateX(50vw);
    }
  }
</style>
