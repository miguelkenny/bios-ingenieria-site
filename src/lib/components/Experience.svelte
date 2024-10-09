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
      bgColor: "bg-white",
    },
    {
      id: 2,
      title: "Octubre 2015 - Febrero 2022",
      description:
        "A Cargo de los cursos de inducción de hombre nuevo Minera del Carmen SA",
      text: "Realizando tareas de Recepción de Turnos, Dictado de Cursos de Manejo Defensivo, su correspondiente corrección de para determinar aprobaciones y emisión de Licencias Internas para BARRICK - Proyecto Del Carmen”. ",
      side: "right",
      bgColor: "bg-white",
    },
    {
      id: 3,
      title: "Octubre 2015 - Febrero 2022",
      description:
        "A Cargo de los cursos de inducción de hombre nuevo Minera del Carmen SA",
      text: "Realizando tareas de Recepción de Turnos, Dictado de Inducciones de Seguridad, Salud y Medio Ambiente con su correspondiente corrección de evaluaciones del Cursos de Hombre Nuevo para determinar aprobaciones BARRICK - Proyecto Lama”. ",
      side: "left",
      bgColor: "bg-white",
    },
    {
      id: 4,
      title: "Octubre 2015 - Febrero 2022",
      description:
        "A Cargo de los cursos de inducción de hombre nuevo Minera del Carmen SA",
      text: "Realizando tareas de Dictado, Recepción de Turnos y Corrección de evaluaciones del Cursos de Hombre Nuevo para BARRICK - Mina Veladero”.",
      side: "right",
      bgColor: "bg-white",
    },
  ];
</script>

<section
  id="experience"
  class="experience bg-blue-50 p-4 md:p-8 m-4 md:m-8"
  style="border-radius: 30px;"
>
  <div class="px-4 md:px-12 pb-8 md:pb-12">
    <h2 class="font-clashg text-lg text-left mt-4 uppercase font-bold text-DarkBlue">
      Experiencia
    </h2>
    <p class="font-clashg relative text-2xl md:text-5xl mt-2 font-medium text-left">
      Más De Una Década De Soluciones
    </p>
    <p class="text-lg my-4 text-Gray">
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
            class="z-20 flex items-center order-1 bg-Black w-8 h-8 rounded-full"
          >
          </div>
          <div
            class="order-1 {item.bgColor} rounded-3xl w-full md:w-5/12 px-4 md:px-8 md:mt-2 py-4 md:py-8 z-0"
          >
            <h3 class="font-clashg relative text-xl mt-2 font-medium text-left text-Blue">
              {item.title}
            </h3>
            <p
              class="font-clashg relative text-2xl mt-2 font-medium text-left"
            >
              {item.description}
            </p>
            <p
              class="text-lg my-4 text-Gray"
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
    background-color: #202020;
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
