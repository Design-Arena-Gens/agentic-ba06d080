import Link from "next/link";
import { getContent } from "../lib/data";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const { niveles, resumen } = await getContent();

  return (
    <div className="stack-lg">
      <section className="hero">
        <h1>Transversalizaci?n de la C?tedra de Estudios Afrocolombianos</h1>
        <p className="lead">
          Orientaciones did?cticas, estrategias, recursos y actividades por nivel y grado,
          con est?ndares, DBA y lineamientos legales para su aplicaci?n en colegios p?blicos de Bogot?.
        </p>
      </section>

      <section className="grid-3">
        {niveles.map((nivel) => (
          <Link className="card" key={nivel.id} href={`/niveles/${nivel.id}`}>
            <div className="cardBody">
              <h3>{nivel.nombre}</h3>
              <p>{nivel.descripcion}</p>
              <ul className="tags">
                {nivel.grados.map((g) => (
                  <li className="tag" key={g.id}>{g.nombre}</li>
                ))}
              </ul>
            </div>
          </Link>
        ))}
      </section>

      <section className="callout">
        <h2>Enfoque pedag?gico</h2>
        <p>{resumen.enfoque}</p>
        <div className="bullets">
          {resumen.principios.map((p, i) => (
            <div key={i} className="bullet">{p}</div>
          ))}
        </div>
      </section>
    </div>
  );
}
