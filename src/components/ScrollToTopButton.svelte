<script>
  export let showScrollButton;

  // Función para scroll hacia arriba
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Desplazamiento suave
    });
  };
</script>

{#if showScrollButton}
  <button
    class="
        fixed text-4xl
        bottom-6
        left-1/2 transform -translate-x-1/2
        px-5 py-2
        bg-black bg-opacity-70
        text-white rounded-full
        shadow-lg
        transition duration-300
        ease-in-out
        hover:bg-blue-600 z-20"
    on:click={scrollToTop}
  >
    ↑
  </button>
{/if}
