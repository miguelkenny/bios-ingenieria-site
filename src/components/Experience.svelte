<script>
  // Datos del timeline
  const timelineData = [
    {
      id: 1,
      title: "Octubre 2015 - Febrero 2022",
      description:
        "A Cargo de los cursos de inducción de hombre nuevo Minera del Carmen SA",
      text: "Realizando tareas de Recepción de Turnos, Dictado de Inducciones de Seguridad, Salud y Medio Ambiente con su correspondiente corrección de evaluaciones del Cursos de Hombre Nuevo para BARRICK - Proyecto Del Carmen”.",
      side: "left",
      bgColor: "bg-blue-200",
    },
    {
      id: 2,
      title: "Octubre 2015 - Febrero 2022",
      description:
        "A Cargo de los cursos de inducción de hombre nuevo Minera del Carmen SA",
      text: "Realizando tareas de Recepción de Turnos, Dictado de Cursos de Manejo Defensivo, su correspondiente corrección de para determinar aprobaciones y emisión de Licencias Internas para BARRICK - Proyecto Del Carmen”. ",
      side: "right",
      bgColor: "bg-blue-200",
    },
    {
      id: 3,
      title: "Octubre 2015 - Febrero 2022",
      description:
        "A Cargo de los cursos de inducción de hombre nuevo Minera del Carmen SA",
      text: "Realizando tareas de Recepción de Turnos, Dictado de Inducciones de Seguridad, Salud y Medio Ambiente con su correspondiente corrección de evaluaciones del Cursos de Hombre Nuevo para determinar aprobaciones BARRICK - Proyecto Lama”. ",
      side: "left",
      bgColor: "bg-blue-200",
    },
    {
      id: 4,
      title: "Octubre 2015 - Febrero 2022",
      description:
        "A Cargo de los cursos de inducción de hombre nuevo Minera del Carmen SA",
      text: "Realizando tareas de Dictado, Recepción de Turnos y Corrección de evaluaciones del Cursos de Hombre Nuevo para BARRICK - Mina Veladero”.",
      side: "right",
      bgColor: "bg-blue-200",
    },
  ];
</script>

<section
  id="experience"
  class="experience bg-blue-50 p-4 md:p-8 m-4 md:m-8"
  style="border-radius: 30px;"
>
  <div class="px-4 md:px-12 pb-8 md:pb-12">
    <h2 class="text-2xl md:text-3xl mt-4 uppercase font-bold text-blue-900">
      Experiencia
    </h2>
    <p class="text-4xl md:text-6xl mt-4 font-bold">
      Más De Una Década De Soluciones
    </p>
    <p class="text-lg md:text-3xl my-4 md:my-8 text-gray-500">
      En BIOS Ingeniería S.R.L., contamos con más de 10 años de experiencia
      brindando soluciones efectivas a diversas industrias. Hemos colaborado con
      empresas líderes como Barrick, Minera Argentina Gold, Atlas Copco, y
      muchas otras, diseñando programas de seguridad, dictando capacitaciones y
      asesorando en proyectos de alta complejidad.
    </p>
  </div>
  <div class="container mx-auto w-full h-full">
    <div class="relative wrap overflow-hidden p-4 md:p-10 h-full">
      <div
        class="border-4 absolute border-blue-400 h-full timeline-border"
      ></div>

      <!-- Timeline loop -->
      {#each timelineData as item}
        <div
          class="mb-8 flex flex-col md:flex-row justify-between items-center w-full {item.side ===
          'right'
            ? 'right-timeline'
            : 'left-timeline'}"
        >
          <div class="order-1 w-full md:w-5/12"></div>
          <div
            class="z-20 flex items-center order-1 bg-blue-400 w-12 h-12 rounded-full"
          >
            <h1 class="mx-auto font-semibold text-lg md:text-xs text-blue-400">
              .
            </h1>
          </div>
          <div
            class="order-1 {item.bgColor} rounded-3xl w-full md:w-5/12 px-4 md:px-8 md:mt-2 py-4 md:py-8 z-0"
          >
            <h3 class="mb-3 font-bold text-gray-500 text-lg md:text-2xl">
              {item.title}
            </h3>
            <p
              class="text-lg md:text-3xl font-bold leading-snug tracking-wide text-gray-600 text-opacity-100"
            >
              {item.description}
            </p>
            <p
              class="text-lg md:text-2xl font-bold leading-snug tracking-wide text-gray-400 text-opacity-100 mt-4"
            >
              {item.text}
            </p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .timeline-border {
    /* Mover la línea un poco a la derecha para que no pase por los puntos */
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
  }

  /* Ajustar la altura de la línea conectada */
  .timeline-point {
    position: relative;
  }

  /* La línea debe estar dentro del timeline, ajustada entre los puntos */
  .timeline-point::before {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    background-color: rgba(55, 65, 81, 0.3); /* Gris con opacidad */
    top: 100%;
    height: 100%; /* Ajustar para conectar bien entre los puntos */
    z-index: -1; /* Para que la línea esté detrás de los puntos */
  }

  /* La línea no aparece en el último elemento */
  .timeline-point:last-child::before {
    display: none;
  }

  /* Estilos específicos para pantallas grandes */
  @media (min-width: 768px) {
    .left-timeline {
      flex-direction: row-reverse;
    }
    .right-timeline {
      flex-direction: row;
    }
  }
</style>
