import { getFuentes } from "../../lib/data";

export const dynamic = "force-dynamic";

export default async function FuentesPage() {
  const fuentes = await getFuentes();

  return (
    <div className="stack-lg">
      <h1>Fuentes y verificaci?n de autenticidad (? 10 a?os)</h1>
      <p className="muted">Enlaces oficiales y referencias con publicaci?n 2016?2025.</p>
      <table className="table">
        <thead>
          <tr>
            <th>Referencia</th>
            <th>A?o</th>
            <th>Tipo</th>
            <th>Autenticidad</th>
          </tr>
        </thead>
        <tbody>
          {fuentes.map((f, i) => (
            <tr key={i}>
              <td>
                <div style={{ fontWeight: 600 }}>{f.autor} ({f.anio}). {f.titulo}</div>
                <a className="navLink" href={f.url} target="_blank" rel="noopener noreferrer">{f.url}</a>
              </td>
              <td>{f.anio}</td>
              <td>{f.tipo}</td>
              <td>
                <div className="badge">Dominio: {new URL(f.url).hostname}</div>
                <div className="muted">{f.pertinencia}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
