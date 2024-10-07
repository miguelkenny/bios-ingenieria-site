<script>
  export let phoneNumber = "+5492644369135"; // Número de teléfono de WhatsApp por defecto
  export let message = "¡Hola! Me gustaría más información."; // Mensaje predefinido
</script>

<!-- Enlace de WhatsApp -->
<a
  href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
  target="_blank"
  rel="noopener noreferrer"
  class="fixed
  bottom-36
  md:bottom-40
  right-14 z-50
  bg-[#25d366]
  rounded-full
  shadow-lg
  w-16 h-16
  md:w-20 md:h-20
  flex
  justify-center
  items-center
  hover:scale-110
  transition-transform
  duration-300"
>
  <img src="/WA.png" alt="WhatsApp" class="w-11 h-11 md:w-11 md:h-11" />
</a>
