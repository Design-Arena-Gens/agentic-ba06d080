import { getGradoById } from "../../../lib/data";

export async function generateStaticParams() {
  // Grad IDs used in content.json
  const ids = [
    "1","2","3","4","5","6","7","8","9","10","11"
  ];
  return ids.map((id) => ({ grado: id }));
}

export default async function GradoPage({ params }) {
  const result = await getGradoById(params.grado);
  if (!result) return <div className="sectionCard">Grado no encontrado</div>;
  const { grado, nivel } = result;

  return (
    <div className="stack-lg">
      <div className="kv">
        <b>Grado</b>
        <div>
          <h1 style={{ margin: 0 }}>{grado.nombre} <span className="badge">{nivel.nombre}</span></h1>
          <p className="muted">{grado.enfoque}</p>
        </div>
        <b>Est?ndares / DBA</b>
        <div>
          <ul className="list">
            {grado.estandares.map((e, i) => (<li key={i}>{e}</li>))}
          </ul>
        </div>
        <b>Lineamientos legales</b>
        <div>
          <ul className="list">
            {grado.legales.map((l, i) => (<li key={i}>{l}</li>))}
          </ul>
        </div>
      </div>

      <section className="sectionCard">
        <h2>Orientaciones Did?cticas</h2>
        <ul className="list">
          {grado.orientaciones.map((o, i) => (<li key={i}>{o}</li>))}
        </ul>
      </section>

      <section className="sectionCard">
        <h2>Estrategias</h2>
        <ul className="list">
          {grado.estrategias.map((o, i) => (<li key={i}>{o}</li>))}
        </ul>
      </section>

      <section className="sectionCard">
        <h2>Actividades sugeridas</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Actividad</th>
              <th>Recursos</th>
              <th>Evaluaci?n</th>
            </tr>
          </thead>
          <tbody>
            {grado.actividades.map((a, i) => (
              <tr key={i}>
                <td>
                  <div style={{ fontWeight: 600 }}>{a.titulo}</div>
                  <div className="muted">{a.descripcion}</div>
                </td>
                <td>
                  <ul className="list">
                    {a.recursos.map((r, j) => (<li key={j}>{r}</li>))}
                  </ul>
                </td>
                <td>{a.evaluacion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
