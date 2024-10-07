<script>
  export let phoneNumber = "+1234567890"; // Número de teléfono de WhatsApp por defecto
  export let message = "¡Hola! Me gustaría más información."; // Mensaje predefinido
</script>

<!-- Enlace de WhatsApp -->
<a
  class="whatsapp-button"
  href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
  target="_blank"
  rel="noopener noreferrer"
>
  <img src="/WA.png" alt="WhatsApp" class="whatsapp-icon" />
</a>

<style>
  .whatsapp-button {
    position: fixed;
    bottom: 45px;
    right: 45px;
    z-index: 100;
    background-color: #25d366;
    border-radius: 50%;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.3s ease;
  }

  .whatsapp-button:hover {
    transform: scale(1.1);
  }

  .whatsapp-icon {
    width: 52px;
    height: 52px;
  }

  /* Para dispositivos móviles */
  @media (max-width: 768px) {
    .whatsapp-button {
      width: 50px;
      height: 50px;
    }

    .whatsapp-icon {
      width: 24px;
      height: 24px;
    }
  }
</style>
