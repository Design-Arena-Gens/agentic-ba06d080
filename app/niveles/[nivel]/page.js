import Link from "next/link";
import { getNivelById } from "../../../lib/data";

export async function generateStaticParams() {
  return ["primaria","secundaria","media"].map((id) => ({ nivel: id }));
}

export default async function NivelPage({ params }) {
  const nivel = await getNivelById(params.nivel);
  if (!nivel) return <div className="sectionCard">Nivel no encontrado</div>;

  return (
    <div className="stack-lg">
      <div className="kv">
        <b>Nivel</b>
        <div>
          <h1 style={{ margin: 0 }}>{nivel.nombre}</h1>
          <p className="muted">{nivel.descripcion}</p>
        </div>
        <b>Prop?sitos</b>
        <div>
          <ul className="list">
            {nivel.propositos.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </div>
        <b>Estrategias</b>
        <div>
          <ul className="list">
            {nivel.estrategias.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </div>
      </div>

      <section className="grid-3">
        {nivel.grados.map((g) => (
          <Link key={g.id} className="card" href={`/grados/${g.id}`}>
            <div className="cardBody">
              <h3>{g.nombre}</h3>
              <p className="muted">{g.enfoque}</p>
              <div className="badge">Actividades: {g.actividades.length}</div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
