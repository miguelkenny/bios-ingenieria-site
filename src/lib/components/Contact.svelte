<section
  id="contact"
  class="contact relative px-4 md:px-20 py-10 md:py-20 m-4 md:m-8 flex flex-col md:flex-row justify-between items-start bg-Blue"
  style="border-radius: 30px;"
>
  <!-- Texto de Contacto -->
  <div class="w-full md:w-1/2 pr-0 md:pr-8">
    <h2 class="font-clashg text-md md:text-lg text-left mt-4 uppercase font-bold text-LightBlue">
      Contacto
    </h2>
    <p class="font-clashg relative text-2xl md:text-5xl mt-2 font-medium text-left">
      Hablemos de seguridad y soluciones a medida para tu empresa
    </p>
    <p class="text-lg md:text-xl my-4 text-LightBlue">
      En BIOS Ingeniería S.R.L., estamos comprometidos con la excelencia en
      Higiene, Seguridad y Gestión Ambiental. Si necesitas asesoramiento,
      capacitación o tienes alguna consulta sobre nuestros servicios, no dudes
      en contactarnos. Nuestro equipo de expertos está listo para ayudarte a
      mejorar la seguridad y eficiencia de tu empresa.
    </p>
  </div>

  <!-- Formulario de Contacto -->
  <div class="w-full md:w-max bg-white p-2 md:p-8 py-10 mr-0 md:mr-20 rounded-3xl shadow-lg">
    <form class="py-2">
      <div class="w-full flex flex-col md:flex-row md:space-x-4">
        <!-- Contenedor para Nombre -->
        <div class="mb-4 w-full md:w-1/2">
          <label
            for="firstName"
            class="font-clashg text-lg"
            >Nombre</label
          >
          <input
            type="text"
            id="firstName"
            class="w-full p-3 border-b-2 border-gray-200 rounded-lg"
          />
        </div>

        <!-- Contenedor para Apellido -->
        <div class="mb-4 w-full md:w-1/2">
          <label
            for="lastName"
            class="font-clashg text-lg"
            >Apellido</label
          >
          <input
            type="text"
            id="lastName"
            class="w-full p-3 border-b-2 border-gray-200 rounded-lg"
          />
        </div>
      </div>
      <div class="mb-4">
        <label
          for="email"
          class="font-clashg text-lg mt-4"
          >Email</label
        >
        <input
          type="email"
          id="email"
          class="w-full p-3 border-b-2 border-gray-200 rounded-lg"
        />
      </div>

      <div class="mb-4 mt-4 md:mt-8">
        <label
          for="message"
          class="font-clashg text-lg"
          >Mensaje</label
        >
        <textarea
          id="message"
          class="w-full p-3 border-b-2 border-gray-200 rounded-lg"
          rows="4"
        ></textarea>
      </div>

      <!-- Botón de enviar -->
      <button
        type="submit"
        class="bg-Blue text-white font-clashg text-lg py-2 px-6 rounded-xl hover:bg-blue-600 transition-colors"
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
