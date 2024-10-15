<script>
  import { Marquee } from "flowbite-svelte";
  // Puedes agregar más logos o usar logos dinámicamente si es necesario
  let logos = [
    "/Clients/Cummins.png",
    "/Clients/Datum.png",
    "/Clients/ExploService.png",
    "/Clients/Maxiklak.png",
    "/Clients/Sibelco.png",
    "/Clients/Epiroc.png",
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
      <div class="marquee Item">
        <img src="/Clients/Cummins.png" alt="Cummins" class="object-cover" />
      </div>
      <div class="marquee Item">
        <img src="/Clients/Maxiklak.png" alt="Maxiklak" class="object-cover" />
      </div>
      <div class="marquee Item">
        <img src="/Clients/Datum.png" alt="Datum" class="object-cover" />
      </div>
      <div class="marquee Item">
        <img
          src="/Clients/ExploService.png"
          alt="ExploService"
          class="object-cover"
        />
      </div>
      <div class="marquee Item">
        <img src="/Clients/Sibelco.png" alt="Sibelco" class="object-cover" />
      </div>
      <div class="marquee Item">
        <img src="/Clients/Epiroc.png" alt="Epiroc" class="object-cover" />
      </div>
      <div class="marquee Item">
        <img src="/Clients/Cummins.png" alt="Cummins" class="object-cover" />
      </div>
      <div class="marquee Item">
        <img src="/Clients/Maxiklak.png" alt="Maxiklak" class="object-cover" />
      </div>

      <div class="marquee Item">
        <img src="/Clients/Datum.png" alt="Datum" class="object-cover" />
      </div>
      <div class="marquee Item">
        <img
          src="/Clients/ExploService.png"
          alt="ExploService"
          class="object-cover"
        />
      </div>
      <div class="marquee Item">
        <img src="/Clients/Sibelco.png" alt="Sibelco" class="object-cover" />
      </div>
      <div class="marquee Item">
        <img src="/Clients/Epiroc.png" alt="Epiroc" class="object-cover" />
      </div>
      <div class="marquee Item">
        <img src="/Clients/Cummins.png" alt="Cummins" class="object-cover" />
      </div>
      <div class="marquee Item">
        <img src="/Clients/Maxiklak.png" alt="Maxiklak" class="object-cover" />
      </div>
      <div class="marquee Item">
        <img src="/Clients/Datum.png" alt="Datum" class="object-cover" />
      </div>
      <div class="marquee Item">
        <img
          src="/Clients/ExploService.png"
          alt="ExploService"
          class="object-cover"
        />
      </div>
    </div>

    <div class="Marquee SecondRow">
      <div class="marquee Item">
        <img src="/Clients/Cummins.png" alt="Cummins" class="object-cover" />
      </div>
      <div class="marquee Item">
        <img src="/Clients/Maxiklak.png" alt="Maxiklak" class="object-cover" />
      </div>
      <div class="marquee Item">
        <img src="/Clients/Datum.png" alt="Datum" class="object-cover" />
      </div>
      <div class="marquee Item">
        <img
          src="/Clients/ExploService.png"
          alt="ExploService"
          class="object-cover"
        />
      </div>
      <div class="marquee Item">
        <img src="/Clients/Sibelco.png" alt="Sibelco" class="object-cover" />
      </div>
      <div class="marquee Item">
        <img src="/Clients/Epiroc.png" alt="Epiroc" class="object-cover" />
      </div>
      <div class="marquee Item">
        <img src="/Clients/Cummins.png" alt="Cummins" class="object-cover" />
      </div>
      <div class="marquee Item">
        <img src="/Clients/Maxiklak.png" alt="Maxiklak" class="object-cover" />
      </div>

      <div class="marquee Item">
        <img src="/Clients/Cummins.png" alt="Cummins" class="object-cover" />
      </div>
      <div class="marquee Item">
        <img src="/Clients/Maxiklak.png" alt="Maxiklak" class="object-cover" />
      </div>
      <div class="marquee Item">
        <img src="/Clients/Datum.png" alt="Datum" class="object-cover" />
      </div>
      <div class="marquee Item">
        <img
          src="/Clients/ExploService.png"
          alt="ExploService"
          class="object-cover"
        />
      </div>
      <div class="marquee Item">
        <img src="/Clients/Sibelco.png" alt="Sibelco" class="object-cover" />
      </div>
      <div class="marquee Item">
        <img src="/Clients/Epiroc.png" alt="Epiroc" class="object-cover" />
      </div>
      <div class="marquee Item">
        <img src="/Clients/Cummins.png" alt="Cummins" class="object-cover" />
      </div>
      <div class="marquee Item">
        <img src="/Clients/Maxiklak.png" alt="Maxiklak" class="object-cover" />
      </div>
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
