<script>
  let activeTab = "empresa"; // Tab activo por defecto

  const tabs = [
    { id: "empresa", label: "La Empresa" },
    { id: "filosofia", label: "Filosofía" },
    { id: "vision", label: "Visión" },
    { id: "calidad", label: "Política de Calidad" },
    {
      id: "seguridad",
      label: "Política de Seguridad, Higiene y Salud Ocupacional",
    },
  ];

  function selectTab(tabId) {
    activeTab = tabId;
  }
</script>

<section
  id="about"
  class="about services bg-blue-50 p-4 md:p-8 m-4 md:m-8"
  style="border-radius: 30px;"
>
  <div class="px-4 md:px-12 pb-12">
    <h2 class="text-2xl md:text-3xl mt-4 uppercase font-bold text-blue-900">
      Sobre Nosotros
    </h2>
    <p class="text-4xl md:text-6xl mt-4 font-bold">Conózcanos Un Poco Mejor</p>
    <p class="text-xl md:text-3xl my-4 md:my-8 text-gray-500">
      Brindamos soluciones especializadas para diversas industrias, adaptándonos
      a los retos únicos de cada sector.
    </p>

    <!-- Menú de Tabs -->
    <div class="flex flex-col md:flex-row">
      <div class="md:w-1/4">
        <ul class="space-y-4 md:space-y-8 mt-8 md:mt-10">
          {#each tabs as tab}
            <li>
              <button
                class="tab-item w-full text-xl md:text-3xl"
                class:active-tab={activeTab === tab.id}
                on:click={() => selectTab(tab.id)}
              >
                {tab.label}
              </button>
            </li>
          {/each}
        </ul>
      </div>

      <!-- Contenido de Tabs -->
      <div class="md:w-3/4 mt-6 md:mt-0 py-4 px-4 md:py-6 md:px-6">
        {#if activeTab === "empresa"}
          <div class="rounded-xl md:rounded-3xl p-6 md:p-14 bg-blue-400">
            <h2 class="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6">
              La Empresa
            </h2>
            <p class="text-blue-100 text-xl md:text-2xl font-semibold mb-6">
              Nuestra empresa, es una empresa sanjuanina fundada en el año 2010,
              bajo el nombre de BIOS Ingeniería de Gustavo Godoy.
            </p>
            <p class="text-blue-100 text-xl md:text-2xl font-semibold mb-6">
              En el año 2014, se realiza el cambio de razón social, pasando a
              denominarse BIOS Ingeniería S.R.L.”.
            </p>
            <p class="text-blue-100 text-xl md:text-2xl font-semibold mb-6">
              BIOS Ingeniería S.R.L., ha sido creada para satisfacer las
              necesidades reales de nuestros Clientes y posee una filosofía
              única: Ofrecer Servicios altamente profesionales, aportando
              Experiencia y Confiabilidad a nuestros Clientes, para lograr
              índices elevados de calidad en los Servicios que brindamos.
            </p>
            <p class="text-blue-100 text-xl md:text-2xl font-semibold mb-6">
              La empresa está orientada a brindar servicios de Higiene y
              Seguridad en el Trabajo desempeñando las actividades de manera
              conjunta y mancomunada con nuestros clientes, como un perfecto
              conjunto de engranajes que llevan al crecimiento permanente de
              ambas empresas.
            </p>
            <!-- contenido omitido para acortar ejemplo -->
          </div>
        {/if}

        {#if activeTab === "filosofia"}
          <div class="rounded-xl md:rounded-3xl p-6 md:p-14 bg-blue-400">
            <h2 class="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6">
              Filosofía
            </h2>
            <p class="text-blue-100 text-xl md:text-2xl font-semibold">
              La filosofía de BIOS Ingeniería S.R.L.es muy precisa: Más que
              Proveedores, somos Aliados Estratégicos de nuestros Clientes y
              aportamos Experiencia, Innovación y Confiabilidad para lograr la
              Excelencia de los Servicios que ofrecemos.
            </p>
          </div>
        {/if}

        {#if activeTab === "vision"}
          <div class="rounded-xl md:rounded-3xl p-6 md:p-14 bg-blue-400">
            <h2 class="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6">
              Visión
            </h2>
            <p class="text-blue-100 text-4xl font-semibold">
              LA SEGURIDAD ES NUESTRA META. CUAL ES LA TUYA?...
            </p>
          </div>
        {/if}

        {#if activeTab === "calidad"}
          <div class="rounded-xl md:rounded-3xl p-6 md:p-14 bg-blue-400">
            <h2 class="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6">
              Política de Calidad
            </h2>
            <p class="text-blue-100 text-xl md:text-2xl font-semibold mb-6">
              Mejorar en forma continua la confiabilidad, competitividad y
              rentabilidad para lograr y mantener un liderazgo en los mercados
              en los que opere.
            </p>
            <p class="text-blue-100 text-xl md:text-2xl font-semibold mb-6">
              Como resultado de nuestro programa de calidad nuestros Clientes y
              la Dirección de la empresa tienen la seguridad que los servicios
              ofrecidos y productos darán siempre los mismos resultados en las
              mismas condiciones de servicio o exigencia.
            </p>
            <p class="text-blue-100 text-xl md:text-2xl font-semibold mb-6">
              La Dirección determina la forma de verificar, como la Política de
              Calidad es entendida, implementada y mantenida en todos los
              niveles de la organización por medio de cursos de concientización,
              capacitación, entrenamiento y calificación del personal.
            </p>
          </div>
        {/if}

        {#if activeTab === "seguridad"}
          <div class="rounded-xl md:rounded-3xl p-6 md:p-14 bg-blue-400">
            <h2 class="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6">
              Política de Seguridad, Higiene y Salud Ocupacional
            </h2>
            <p class="text-blue-100 text-xl md:text-2xl font-semibold mb-6">
              Nuestra empresa, tiene como objetivo primordial, la preservación
              de la vida y los bienes con la más alta calidad, para propender a
              la mejora continua y al desarrollo sustentable.
            </p>
            <p class="text-blue-100 text-xl md:text-2xl font-semibold mb-6">
              Analizar, corregir y prevenir riesgos es responsabilidad
              compartida en nuestra empresa, constituyendo la seguridad una
              condición de empleo.
            </p>
            <p class="text-blue-100 text-xl md:text-2xl font-semibold mb-6">
              Asumir lo anteriormente expuesto contribuye al bienestar general y
              personal de cada individuo que integra nuestra organización.
            </p>
          </div>
        {/if}
      </div>
    </div>
  </div>
</section>

<style>
  .tab-item {
    @apply relative pl-4 py-2 cursor-pointer text-left rounded-lg;
  }

  .tab-item::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background-color: transparent;
    transition: background-color 0.3s ease;
  }

  .tab-item:hover::before {
    background-color: lightgray;
  }

  .active-tab {
    @apply text-gray-900 font-bold;
  }

  .active-tab::before {
    background-color: #728dd7;
  }
</style>
