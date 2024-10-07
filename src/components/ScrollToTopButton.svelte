<script>
  export let showScrollButton;

  // Función para scroll hacia arriba
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Suave
    });
  };
</script>

{#if showScrollButton}
  <button
    class="
        fixed text-4xl
        bottom-6
        right-6 px-5 py-2
        bg-black
        bg-opacity-70
        text-white
        rounded-full
        shadow-lg
        transition
        duration-300
        ease-in-out
        transform
        hover:bg-blue-600 z-20"
    on:click={scrollToTop}
  >
    ↑
  </button>
{/if}
