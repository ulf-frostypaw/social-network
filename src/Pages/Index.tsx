import React from "react";
import Layout from "../Components/Layout";

function Index() {
  return (
    <Layout title="Home">
      <section className="text-center text-">
        <h1 className="text-5xl font-black">Vite Project Template</h1>
        <p>
          Desarrolle su proyecto desde una plantilla y elija el tipo de
          tecnologías que quiera de forma sencilla y eficaz.
        </p>
      </section>
      <section className="rounded-xl p-4 bg-sky-950 text-white">
        <h2 className="text-3xl font-black">Librerías</h2>
        <ul className="list-disc p-4">
          <li>Vite (react)</li>
          <li>TailwindCSS</li>
          <li>react-helmet-async - para metadatos</li>
          <li>react-router-dom - para enrutamiento</li>
        </ul>
      </section>
    </Layout>
  );
}

export default Index;
