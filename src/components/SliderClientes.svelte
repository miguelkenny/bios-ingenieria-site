<script>
  import { Marquee } from "flowbite-svelte";
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
  Respaldados Por:
</h2>
<Marquee speed={1} hoverSpeed={0.5} class="py-16 shadow">
  {#each logos as logo (logo)}
    <img class="w-full" alt="flowbite-svelte icon logo" src={logo} />
  {/each}
</Marquee>
