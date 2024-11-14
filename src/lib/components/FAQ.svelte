<script>
  let faqs = [
    {
      question: "¿Cómo puedo contratar sus servicios?",
      answer:
        "Puedes ponerte en contacto con nosotros a través de nuestro teléfono +540264 4228938, celular +54 0264 154369135 o enviarnos un correo electrónico a gustavo@biosing.com.ar. Estaremos encantados de coordinar una consulta o reunión para evaluar tus necesidades.",
      isOpen: true,
    },
    {
      question: "¿Qué tipo de capacitaciones ofrecen?",
      answer:
        "En base a los riesgos asociados a la tarea de nuestros clientes confeccionamos un plan de capacitacion que involucren las area de salud, seguridad y medio ambiente. Elaboramos un plan anual de capacitación, diseñado y adaptado a las necesidades de cada organización. Formamos y capacitamos, concientizando a los trabajadores y promoviendo una cultura colectiva de prevención. Buscamos estimular el interés e incentivar la participación sobre la preservación de la salud, la detección de condiciones inseguras, el reporte de factores de riesgos presentes en los espacios de trabajo, etc. Brindamos capacitaciones en modalidad online o presencial, con entrega de material de apoyo (flyers informativos y didácticos, manuales, procedimientos, videos, entre otros)",
      isOpen: false,
    },
    {
      question: "¿Realizan mediciones de seguridad en el lugar de trabajo?",
      answer: `Adaptándonos a las necesidades de cada organización y a la normativa legal vigente, se realizan los relevamientos necesarios, y mediciones con equipos en caso de corresponder, y se confeccionan los siguientes estudios.
          •	Estudios de carga de fuego, según Decreto 351/79
          •	Estudios de iluminación, según Resolución SRT 84/2012
          •	Estudios de ruido, según Resolución SRT 85/2012
          •	Estudios de estrés térmico, según Resolución SRT 295/03
          •	Estudios de puesta a tierra, según Resolución SRT 900/2015
          •	Estudios de ergonomía, según Resolución SRT 886/2015`,
      isOpen: false,
    },
    {
      question: "¿Qué experiencia tienen en el sector?",
      answer:
        "nos avalan mas de 20 años en materia de prevencion laboral atentiendo a corporaciones locales e internacionales.",
      isOpen: false,
    },
    {
      question: "¿Qué tipo de Certificaciones tienen?",
      answer:
        "Nuestro equipo de trabajo profesional cuenta con personal matriculados de Ingenieros, licenciados y tecnicos, a su vez, teniendo formaciones complementarias como ISO 45001, ISO 14001 lider ICAM (metodologia de investigacion de accidentes laborales), Bow-tie, posgrado en economia, entre otros.",
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
  <h2
    class="font-clashg text-lg text-center mt-4 uppercase font-bold text-DarkBlue"
  >
    Preguntas Frecuentes
  </h2>
  <p
    class="font-clashg relative text-2xl md:text-5xl mt-2 font-medium text-center"
  >
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
            <p class="text-md sm:text-lg leading-7 sm:leading-8 text-Gray">
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
