<script>
  import { Marquee } from "flowbite-svelte";
  // Puedes agregar más logos o usar logos dinámicamente si es necesario
  let logos = [
    "/clients/Cummins.png",
    "/clients/Datum.png",
    "/clients/ExploService.png",
    "/clients/Maxiklak.png",
    "/clients/Sibelco.png",
    "/clients/Epiroc.png",
  ];
</script>

<h2 class="font-clashg text-lg text-center mt-4 uppercase font-bold text-DarkBlue">
  RESPALDADOS POr
</h2>
<Marquee speed={0.5} hoverSpeed={0.5} class="py-16">
  {#each logos as logo (logo)}
    <img class="mx-10 w-max" alt="flowbite-svelte icon logo" src={logo} />
  {/each}
</Marquee>
