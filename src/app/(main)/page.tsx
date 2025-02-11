"use client";
import SpinningVinyl from "../components/landing";
import CardWithFlipEffect from "../components/gift-card-effect";
import ValentineLanding from "../components/landing";
import Header from "../components/landing";
import Swal from "sweetalert2";

const ValentinePage = () => {
  const handleResponderClick = () => {
    // SweetAlert con estilo mejorado para UX
    Swal.fire({
      title: "¿Quieres ser mi San Valentín?",
      text: "Elige una opción con todo tu corazón 💖",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Sí, quiero",
      cancelButtonText: "No quiero",
      confirmButtonColor: "#6600A1", // Color vibrante para el "Sí, quiero"
      cancelButtonColor: "#E53E3E", // Color de alerta para el "No quiero"
      background: "#F7FAFC", // Fondo suave y ligero
      customClass: {
        title: "text-3xl font-semibold text-gray-800 mb-4", // Estilo del título
        confirmButton:
          "px-6 py-3 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-110  focus:outline-none focus:ring-2  focus:ring-opacity-50",
        cancelButton:
          "px-6 py-3 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-110 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50",
        htmlContainer: "text-lg text-gray-800", // Estilo del texto
      },
      showClass: {
        popup: "animate__animated animate__fadeIn animate__faster", // Animación de entrada
      },
      hideClass: {
        popup: "animate__animated animate__fadeOut animate__faster", // Animación de salida
      },
    }).then((result) => {
      if (result.isConfirmed) {
        // Redirigir a WhatsApp con el mensaje predefinido

        Swal.fire({
          title: "¡Yay!",
          text: "¡Gracias por decir que sí! 💖",
          icon: "success",
          timer: 2000,
          timerProgressBar: true,
          confirmButtonColor: "#48BB78",
          customClass: {
            title: "text-2xl font-bold text-gray-900",
            htmlContainer: "text-lg text-gray-800", // Estilo del texto
          },
        }).then(() => {
          window.location.href = "https://wa.link/8zayr8";
        });
      } else if (result.isDismissed) {
        Swal.fire({
          title: "Como que no quieres!! 😤",
          text: "¿Otra oportunidad?",
          icon: "error",
          confirmButtonColor: "#48BB78",
          customClass: {
            title: "text-2xl font-bold text-gray-900",
            htmlContainer: "text-lg text-gray-800", // Estilo del texto
          },
        }).then(() => {
          Swal.fire({
            title: "¡Te prometo que será divertido! 💖",

            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Bueno, está bien",
            cancelButtonText: "No, gracias",
            confirmButtonColor: "#6600A1", // Color vibrante para el "Bueno, está bien"
            cancelButtonColor: "#E53E3E", // Color de alerta para el "No, gracias"
            background: "#F7FAFC", // Fondo suave y ligero
            customClass: {
              title: "text-3xl font-semibold text-gray-800 mb-4", // Estilo del título
              confirmButton:
                "px-6 py-3 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-110  focus:ring-opacity-50",
              cancelButton:
                "px-6 py-3 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-110 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50",
              htmlContainer: "text-lg text-gray-800", // Estilo del texto
            },
            showClass: {
              popup: "animate__animated animate__fadeIn animate__faster", // Animación de entrada
            },
            hideClass: {
              popup: "animate__animated animate__fadeOut animate__faster", // Animación de salida
            },
          }).then((result) => {
            if (result.isConfirmed) {
              // Redirigir a WhatsApp con el mensaje predefinido

              Swal.fire({
                title: "¡Yay!",
                text: "¡Gracias por decir que sí! 💖",
                icon: "success",
                timer: 2000,
                timerProgressBar: true,
                confirmButtonColor: "#48BB78",
                customClass: {
                  title: "text-2xl font-bold text-gray-900",
                  htmlContainer: "text-lg text-gray-800", // Estilo del texto
                },
              }).then(() => {
                window.location.href = "https://wa.link/8zayr8";
              });
            } else if (result.isDismissed) {
              Swal.fire({
                title: "Última oportunidad!",
                text: "¿Qué dices?",
                icon: "question",
                confirmButtonText: "Está bien",
                confirmButtonColor: "#6600A1", // Color vibrante para el "Está bien, acepto"
                background: "#F7FAFC", // Fondo suave y ligero
                customClass: {
                  title: "text-3xl font-semibold text-gray-800 mb-4", // Estilo del título
                  confirmButton:
                    "px-6 py-3 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-110 focus:ring-opacity-50",
                  htmlContainer: "text-lg text-gray-800", // Estilo del texto
                },
                showClass: {
                  popup: "animate__animated animate__fadeIn animate__faster", // Animación de entrada
                },
                hideClass: {
                  popup: "animate__animated animate__fadeOut animate__faster", // Animación de salida
                },
              }).then((result) => {
                if (result.isConfirmed) {
                  // Redirigir a WhatsApp con el mensaje predefinido

                  Swal.fire({
                    title: "¡Yay!",
                    text: "¡Gracias por decir que sí! 💖",
                    icon: "success",
                    timer: 2000,
                    timerProgressBar: true,

                    confirmButtonColor: "#48BB78",
                    customClass: {
                      title: "text-2xl font-bold text-gray-900",
                      htmlContainer: "text-lg text-gray-800", // Estilo del texto
                    },
                  }).then(() => {
                    window.location.href = "https://wa.link/8zayr8";
                  });
                }
              });
            }
          });
        });
      }
    });
  };

  return (
    <div className="min-h-screen w-full bg-purple-100 shadow-2xl rounded-2xl">
      {/* Hero Section */}
      <Header />

      <style jsx>{`
        @tailwind base;
        @tailwind components;
        @tailwind utilities;

        @layer utilities {
          @keyframes floating {
            0% {
              transform: translateY(0);
              opacity: 0.7;
            }
            50% {
              transform: translateY(-20px);
              opacity: 1;
            }
            100% {
              transform: translateY(0);
              opacity: 0.7;
            }
          }

          .animate-floating {
            animation: floating infinite ease-in-out;
          }
        }
      `}</style>

      {/* Sección de características */}
      <section
        id="features"
        className="container mx-auto s:h-screen  py-10 xl:py-20"
      >
        <h2 className="text-3xl font-bold text-center">
          Tengo algunas sorpresas...
        </h2>

        <center>
          <div className="flex flex-col justify-center w-fit items-center  mx-auto py-14 gap-4">
            {/* Fila con tres tarjetas románticas */}
            <div className="flex flex-wrap justify-center gap-4">
              {/* 💌 Tarjeta con mensaje romántico */}
              <CardWithFlipEffect
                frontContent={
                  <div className="flex flex-col items-center justify-center">
                    <div className="text-5xl mb-6">💌</div>
                    <h3 className="text-xl font-bold mb-4">
                      Un Mensaje para Ti
                    </h3>
                    <p className="text-gray-700 text-center">
                      Haz click para abrir
                    </p>
                  </div>
                }
                backContent={
                  <div className="flex flex-col items-center justify-center text-center p-4">
                    <p className="text-lg font-semibold text-red-500">
                      "Eres la razon de mi felicidad y mi amor. 💖 Gracias por ser tan
                      especial."
                    </p>
                  </div>
                }
              />

              {/* 🎵 Tarjeta con canción romántica y disco giratorio */}
              <CardWithFlipEffect
                frontContent={
                  <div className="flex flex-col items-center justify-center">
                    <div className="text-5xl mb-6">🎵</div>
                    <h3 className="text-xl font-bold mb-4">
                      Una Canción que me recerda a Ti
                    </h3>
                    <p className="text-gray-700 text-center">
                      Haz click para escuchar
                    </p>
                  </div>
                }
                backContent={
                  <iframe
                    src="https://open.spotify.com/embed/track/7na7Bk98usp84FaOJFPv3d?utm_source=generator"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    height="300"
                    className="w-full h-full  rounded-lg shadow-xl"
                  ></iframe>
                }
              />

              {/* ✨ Tarjeta con deseo y cielo estrellado animado */}
              <CardWithFlipEffect
                frontContent={
                  <div className="flex flex-col items-center justify-center">
                    <div className="text-5xl mb-6">✨</div>
                    <h3 className="text-xl font-bold mb-4">
                      Un deseo que me acompaña
                    </h3>
                    <p className="text-gray-700 text-center">
                      Haz click para ver
                    </p>
                  </div>
                }
                backContent={
                  <div className="relative flex items-center justify-center h-full w-full bg-black rounded-lg overflow-hidden">
                    <p className="absolute text-lg font-semibold text-white text-center z-10">
                      Que cada momento a tu lado sea eterno.{" "}
                      <span className="text-2xl">💫</span>
                    </p>
                    <div className="absolute inset-0 bg-[url('/images/stars.gif')] opacity-60"></div>
                  </div>
                }
              />
            </div>
          </div>
        </center>
        <div className="flex w-full justify-center">
          <a
            href="#features"
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-lg transition-transform duration-300 transform hover:scale-105 mb-8"
            onClick={(e) => {
              e.preventDefault(); // Evita que el enlace haga su acción predeterminada
              handleResponderClick();
            }}
          >
            Responder
          </a>
        </div>
      </section>
    </div>
  );
};

export default ValentinePage;
