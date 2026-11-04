// ============================================================
//  CONFIGURACIÓN DEL QUIZ · ProgresSpanish
//  Este es el único archivo que necesitas editar.
//  Cambia solo lo que está entre comillas "..." y guarda.
// ============================================================

window.QUIZ_CONFIG = {

  // Pago directo en la página del resultado (botones de PayPal: tarjeta o PayPal).
  // Es el mismo plan de tu landing. Deja paypalPlanId vacío ("") para volver
  // al botón que lleva a la landing.
  paypalClientId: "AdHQsrOHZwdWZGbLkT-GYUEc64Bwu0wsiDEJ8eiYzpZ27I4D3Ok8xFKI6uInYZT5YKF3LSt_D5ZE41fd",
  paypalPlanId: "P-3RA10924ET035924YNIRTWBA",
  // Página a la que va la persona después de pagar.
  thankYouUrl: "/thank-you/",

  // Respaldo: si PayPal no carga, aparece un enlace a tu landing.
  trialUrl: "https://progresspanish.com/spanish-community#checkout",

  // Páginas de captura de Systeme, una por identidad.
  // Mientras estén vacías (""), el quiz pide nombre y correo aquí mismo
  // y muestra el resultado directo (modo prueba: el correo NO se guarda).
  // Cada página debe redirigir a:
  //   https://progresspanish.com/cuestionario-de-identidad/?type=<la identidad>
  // (por ejemplo ?type=fresh-starter).
  // Cuando las pegues, al terminar la pregunta 7 la persona va a su
  // página de Systeme, deja su correo y Systeme la trae de vuelta a su resultado.
  systemeOptinUrls: {
    "fresh-starter": "",
    "word-collector": "",
    "silent-understander": "",
    "on-and-off": ""
  },

  // Página de captura de Systeme para quienes responden en la pregunta 7
  // "Not yet, I'm just exploring" o "I'm only curious".
  // Reciben correos suaves (valor + Instagram) en vez de la secuencia de venta.
  // En Systeme, que esta página redirija a:
  //   https://progresspanish.com/cuestionario-de-identidad/?type=saved
  // Si la dejas vacía (""), van a la página de su resultado como todos.
  systemeOptinCurious: "",

  // Enlace pequeño "Not sure yet? Send me a message" debajo del botón de prueba.
  // Déjalo vacío ("") para quitarlo.
  messageUrl: "https://ig.me/m/progresspanish",

  // Enlaces de tus 4 videos, de Vimeo o YouTube (pueden ser privados/"No listados").
  // Ejemplos: "https://vimeo.com/123456789/abcdef1234" o "https://youtu.be/AbCdEfGhIjK"
  videos: {
    "fresh-starter": "",
    "word-collector": "",
    "silent-understander": "",
    "on-and-off": ""
  },

  // Enlace de YouTube del testimonio de Nick (ya editado).
  nickVideo: ""
};
