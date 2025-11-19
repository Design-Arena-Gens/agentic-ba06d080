export const metadata = {
  title: "DesignArena - C?tedra de Estudios Afrocolombianos",
  description: "Orientaciones, estrategias y recursos para la transversalizaci?n de la CEA en Bogot?",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <header className="siteHeader">
          <div className="container headerInner">
            <div className="brand">
              <span className="logo">?</span>
              <div>
                <div className="title">DesignArena</div>
                <div className="subtitle">C?tedra de Estudios Afrocolombianos (CEA)</div>
              </div>
            </div>
            <nav className="nav">
              <a href="/" className="navLink">Inicio</a>
              <a href="/fuentes" className="navLink">Fuentes</a>
            </nav>
          </div>
        </header>
        <main className="container mainArea">{children}</main>
        <footer className="siteFooter">
          <div className="container">
            <span>Aplicaci?n orientada a colegios p?blicos de Bogot? D.C.</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
