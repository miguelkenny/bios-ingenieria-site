<section
  id="contact"
  class="contact relative px-4 md:px-20 py-10 md:py-20 m-4 md:m-8 flex flex-col md:flex-row justify-between items-start"
  style="background-color: rgb(1,162,232); border-radius: 60px;"
>
  <!-- Texto de Contacto -->
  <div class="w-full md:w-1/2 pr-0 md:pr-8">
    <h2 class="text-2xl md:text-3xl mt-4 uppercase font-bold text-blue-200">
      Contacto
    </h2>
    <p class="text-4xl md:text-6xl mt-4 font-bold text-gray-800">
      Hablemos de seguridad y soluciones a medida para tu empresa
    </p>
    <p class="text-lg md:text-3xl my-4 md:my-8 pr-0 md:pr-8 text-gray-100">
      En BIOS Ingeniería S.R.L., estamos comprometidos con la excelencia en
      Higiene, Seguridad y Gestión Ambiental. Si necesitas asesoramiento,
      capacitación o tienes alguna consulta sobre nuestros servicios, no dudes
      en contactarnos. Nuestro equipo de expertos está listo para ayudarte a
      mejorar la seguridad y eficiencia de tu empresa.
    </p>
  </div>

  <!-- Formulario de Contacto -->
  <div
    class="w-full md:w-1/2 bg-white p-4 md:p-8 py-10 mr-0 md:mr-32 rounded-3xl shadow-lg"
  >
    <form class="py-8 md:py-28">
      <div class="w-full flex flex-col md:flex-row md:space-x-4">
        <!-- Contenedor para Nombre -->
        <div class="mb-4 w-full md:w-1/2">
          <label
            for="firstName"
            class="block text-gray-700 font-bold text-lg md:text-2xl"
            >Nombre</label
          >
          <input
            type="text"
            id="firstName"
            class="w-full p-3 border-b-4 border-gray-300"
          />
        </div>

        <!-- Contenedor para Apellido -->
        <div class="mb-4 w-full md:w-1/2">
          <label
            for="lastName"
            class="block text-gray-700 font-bold text-lg md:text-2xl"
            >Apellido</label
          >
          <input
            type="text"
            id="lastName"
            class="w-full p-3 border-b-4 border-gray-300"
          />
        </div>
      </div>
      <div class="mb-4">
        <label
          for="email"
          class="block text-gray-700 font-bold text-lg md:text-2xl mt-4"
          >Email</label
        >
        <input
          type="email"
          id="email"
          class="w-full p-3 border-b-4 border-gray-300"
        />
      </div>

      <div class="mb-4 mt-4 md:mt-8">
        <label
          for="message"
          class="block text-gray-700 font-bold text-lg md:text-2xl"
          >Mensaje</label
        >
        <textarea
          id="message"
          class="w-full p-3 border-b-4 border-gray-300"
          rows="4"
        ></textarea>
      </div>

      <!-- Botón de enviar -->
      <button
        type="submit"
        class="bg-blue-400 w-full md:w-1/3 text-white text-lg md:text-3xl font-bold py-3 rounded-2xl hover:bg-blue-600 transition-colors mt-8 h-20"
      >
        Enviar
      </button>
    </form>
  </div>

  <!-- Semicírculo en la esquina inferior izquierda (oculto en móviles) -->
  <div class="absolute bottom-0 left-0 w-full md:w-auto">
    <img
      src="/semicirculo.png"
      alt="semicirculo"
      class="semicircle hidden md:block"
    />
  </div>
</section>

<style>
  /* Semicírculo en la esquina inferior izquierda */
  .semicircle {
    width: 100%; /* Ajusta el tamaño según sea necesario */
    max-width: 850px; /* Tamaño máximo para pantallas grandes */
    height: auto;
  }
</style>
