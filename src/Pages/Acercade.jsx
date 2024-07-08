import React from 'react';
import Navbar from '../Components/Shared/Navbar';
import Footer from '../Components/Shared/Footer';

function AcercaDe() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-5 py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#4B2E39]">Acerca de Nosotros</h1>
          <p className="mt-4 text-xl text-gray-700">Descubre la historia y la pasión detrás de Cafetería BenSal.</p>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <img className="rounded-lg shadow-lg object-cover w-full h-100" src="/logocafeteria.webp" alt="Cafetería BenSal" />
          </div>
          <div className="lg:w-1/2 lg:pl-12">
            <h2 className="text-2xl font-semibold text-[#4B2E39] mb-4">Nuestra Historia</h2>
            <p className="mb-6 text-lg text-gray-700">Cafetería BenSal nació del amor por el café y el deseo de compartir esa pasión con nuestra comunidad. Desde nuestros humildes comienzos, hemos crecido hasta convertirnos en un punto de encuentro para los amantes del café en toda la región.</p>
            <h2 className="text-2xl font-semibold text-[#4B2E39] mb-4">Nuestra Misión</h2>
            <p className="mb-6 text-lg text-gray-700">Nuestra misión es ofrecer a nuestros clientes una experiencia única con cada taza de café, utilizando granos de la más alta calidad y técnicas de preparación expertas. Nos esforzamos por crear un ambiente acogedor donde todos se sientan bienvenidos.</p>
            <h2 className="text-2xl font-semibold text-[#4B2E39] mb-4">Nuestros Valores</h2>
            <ul className="list-disc list-inside text-lg text-gray-700">
              <li className="mb-2">Calidad: Solo servimos el mejor café, seleccionado y tostado con esmero.</li>
              <li className="mb-2">Comunidad: Nos enorgullece ser parte de la comunidad local y apoyar eventos y causas locales.</li>
              <li className="mb-2">Sostenibilidad: Nos comprometemos a prácticas sostenibles y responsables con el medio ambiente.</li>
              <li className="mb-2">Servicio: Valoramos a nuestros clientes y nos esforzamos por brindar un servicio excepcional.</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-12">
          <h2 className="text-2xl font-semibold text-[#4B2E39] mb-4">Desarrolladores</h2>
          <div className="flex flex-col lg:flex-row items-center lg:justify-center">
            <div className="lg:w-1/3 mb-8 lg:mb-0 lg:mr-8">
              <img className=" w-32 h-32 mx-auto mb-4" src="/644617.png" />
              <h3 className="text-xl font-medium text-gray-900">Sebastián Saldiás</h3>
              <p className="text-gray-700">Desarrollador Full Stack</p>
            </div>
            <div className="lg:w-1/3 lg:ml-8">
              <img className=" w-32 h-32 mx-auto mb-4" src="/1995515.png" />
              <h3 className="text-xl font-medium text-gray-900">Benjamín Navarrete</h3>
              <p className="text-gray-700">Desarrollador Full Stack</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AcercaDe;
