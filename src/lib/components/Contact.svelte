<script>
  import emailjs from "emailjs-com";
  import DOMPurify from "dompurify";

  let firstName = "";
  let lastName = "";
  let email = "";
  let message = "";

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Sanitizar el mensaje para evitar scripts maliciosos
    const sanitizedMessage = DOMPurify.sanitize(message);

    // Validación de correo electrónico
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      alert("Por favor, ingresa un email válido.");
      return;
    }

    // Configura el objeto de datos para enviar con EmailJS
    const templateParams = {
      firstName,
      lastName,
      email,
      message: sanitizedMessage,
    };

    try {
      // Reemplaza 'YOUR_TEMPLATE_ID' y 'YOUR_USER_ID' con tu Template ID y User ID de EmailJS
      await emailjs.send(
        "service_10ni2li",
        "template_kxo4ila",
        templateParams,
        "P5Kf34xNv7Z-94lZx"
      );
      alert("Mensaje enviado correctamente. Pronto nos pondremos en contacto.");

      // Resetea los campos del formulario
      firstName = "";
      lastName = "";
      email = "";
      message = "";
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
      alert("Hubo un problema al enviar el mensaje");
    }
  };
</script>

<section
  id="contact"
  class="contact px-4 md:px-20 py-10 md:py-10 m-4 md:m-8 flex flex-col justify-between items-center gap-y-10 bg-Blue"
  style="border-radius: 30px;"
>
  <div
    id="contact"
    class="contact relative flex flex-col md:flex-row justify-between items-start"
  >
    <!-- Texto de Contacto -->
    <div class="w-full md:w-1/2 pr-0 md:pr-8">
      <h2
        class="font-clashg text-md md:text-lg text-left mt-4 uppercase font-bold text-LightBlue"
      >
        Contacto
      </h2>
      <p
        class="font-clashg relative text-2xl md:text-5xl mt-2 font-medium text-left"
      >
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
    <div
      class="w-full md:w-max bg-white p-2 md:p-8 py-10 mr-0 md:mr-20 rounded-3xl shadow-lg"
    >
      <form on:submit={handleSubmit} class="py-2">
        <div class="w-full flex flex-col md:flex-row md:space-x-4">
          <!-- Contenedor para Nombre -->
          <div class="mb-4 w-full md:w-1/2">
            <label for="firstName" class="font-clashg text-lg">Nombre</label>
            <input
              type="text"
              id="firstName"
              bind:value={firstName}
              class="w-full p-3 border-b-2 border-gray-200 rounded-lg"
            />
          </div>

          <!-- Contenedor para Apellido -->
          <div class="mb-4 w-full md:w-1/2">
            <label for="lastName" class="font-clashg text-lg">Apellido</label>
            <input
              type="text"
              id="lastName"
              bind:value={lastName}
              class="w-full p-3 border-b-2 border-gray-200 rounded-lg"
            />
          </div>
        </div>
        <div class="mb-4">
          <label for="email" class="font-clashg text-lg mt-4">Email</label>
          <input
            type="email"
            id="email"
            bind:value={email}
            class="w-full p-3 border-b-2 border-gray-200 rounded-lg"
          />
        </div>

        <div class="mb-4 mt-4 md:mt-8">
          <label for="message" class="font-clashg text-lg">Mensaje</label>
          <textarea
            id="message"
            bind:value={message}
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
  </div>

  <div class="flex flex-col gap-y-10 md:flex-row md:gap-x-20">
    <p class="font-clashg relative text-xl mt-2 font-medium text-left">
      +54 264 154369135
    </p>
    <p class="font-clashg relative text-xl mt-2 font-medium text-left">
      gustavo@biosing.com.ar
    </p>
  </div>
</section>
