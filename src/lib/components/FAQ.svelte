<script>
  let faqs = [
    {
      question: "¿Cómo puedo contratar sus servicios?",
      answer:
        "Puedes ponerte en contacto con nosotros a través de nuestro teléfono +540264 4228938, celular +54 0264 154369135 o enviarnos un correo electrónico a biosing@hotmail.com.ar. Estaremos encantados de coordinar una consulta o reunión para evaluar tus necesidades.",
      isOpen: false,
    },
    {
      question: "¿Qué tipo de capacitaciones ofrecen?",
      answer:
        "You can check the official Chanel website or contact their customer service for more information on pricing and availability.",
      isOpen: false,
    },
    {
      question: "¿Realizan mediciones de seguridad en el lugar de trabajo?",
      answer:
        "Chanel typically releases multiple collections each year, including Spring-Summer, Fall-Winter, and special editions.",
      isOpen: false,
    },
    {
      question: "¿Qué experiencia tienen en el sector?",
      answer:
        "Chanel typically releases multiple collections each year, including Spring-Summer, Fall-Winter, and special editions.",
      isOpen: false,
    },
    {
      question: "¿Qué tipo de certificaciones y permisos tienen?",
      answer:
        "Chanel typically releases multiple collections each year, including Spring-Summer, Fall-Winter, and special editions.",
      isOpen: false,
    },
  ];

  function toggleFAQ(index) {
    faqs = faqs.map((faq, i) =>
      i === index ? { ...faq, isOpen: !faq.isOpen } : { ...faq, isOpen: false }
    );
  }
</script>

<!-- FAQ Component -->
<div
  id="faq"
  class="lg:container lg:mx-auto lg:py-16 md:py-12 md:px-6 py-12 m-1 md:m-8"
>
  <h2 class="font-clashg text-lg text-center mt-4 uppercase font-bold text-DarkBlue">
    Preguntas Frecuentes
  </h2>
  <p class="font-clashg relative text-2xl md:text-5xl mt-2 font-medium text-center">
    Encontrá Respuestas a tus Preguntas
  </p>

  <div class="lg:w-8/12 w-full mx-auto mt-12 sm:mt-24">
    {#each faqs as faq, index}
      <div class="w-full px-4 sm:px-6 {faq.isOpen ? 'open-faq' : ''}">
        <div class="flex justify-between items-center w-full py-4 sm:py-6">
          <p
            class="flex items-center font-clashg font-medium text-md sm:text-xl"
          >
            {faq.question}
          </p>
          <button
            aria-label="toggler"
            class="focus:outline-none"
            on:click={() => toggleFAQ(index)}
          >
            <img
              class="border rounded-full p-1 {faq.isOpen ? 'rotate-180' : ''}"
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2.svg"
              alt="toggle"
            />
          </button>
        </div>

        {#if faq.isOpen}
          <div class="w-full mb-8">
            <p
              class="text-md sm:text-lg leading-7 sm:leading-8 text-Gray"
            >
              {faq.answer}
            </p>
          </div>
        {/if}

        <hr class="w-full mt-6 sm:mt-8 opacity-0" />
      </div>
    {/each}
  </div>
</div>

<style>
  .rotate-180 {
    transform: rotate(180deg);
  }
  .open-faq {
    border-radius: 20px;
    padding-top: 16px;
    background-color: #e9fbfd;
    color: #494a4a;
  }
</style>
