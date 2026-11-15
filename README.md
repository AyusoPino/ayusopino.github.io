# Portfolio de ayusopino

Portfolio personal con React y Vite, listo para GitHub Pages. No necesita servidor ni ordenador encendido una vez publicado.

## 1. Preparar el ordenador (Windows / PowerShell)

Instala Node.js LTS y Git si no los tienes. Descomprime el ZIP. Abre una terminal dentro de la carpeta que contiene `package.json`.

```powershell
npm install
npm run dev
```

Abre la dirección local que indique Vite (habitualmente http://localhost:5173).

## 2. Crear repositorio

En GitHub, con la cuenta `ayusopino`, crea un repositorio **público** llamado exactamente `ayusopino.github.io`, vacío (sin README ni .gitignore desde la web, porque ya están en el ZIP).

## 3. Subir el proyecto

Desde la carpeta que contiene `package.json`, ejecuta:

```powershell
git init
git branch -M main
git add .
git commit -m "Crear portfolio React"
git remote add origin https://github.com/ayusopino/ayusopino.github.io.git
git push -u origin main
```

Si el repositorio ya tiene un README inicial, lo más sencillo es crearlo de nuevo vacío o clonar y copiar los archivos antes de confirmar cambios; no fuerces el push sobre trabajo existente.

## 4. Activar GitHub Pages

Abre https://github.com/ayusopino/ayusopino.github.io/settings/pages

En **Build and deployment > Source** selecciona **GitHub Actions**. El flujo `.github/workflows/deploy.yml` se ejecutará al hacer push a `main`. Comprueba su estado en **Actions**. Tras el despliegue, abre https://ayusopino.github.io/.

GitHub Pages es alojamiento estático: no ejecuta PHP, Python, Flask, FastAPI, SQLite del servidor ni Ollama. Para esos proyectos necesitarás una API o servidor en la nube. Los proyectos solo muestran botón de demo si configuras una URL real.

## 5. Añadir proyectos y uso de IA

Edita `src/projects.js`:

- `title`: título del proyecto.
- `description`: descripción.
- `technologies`: lista de tecnologías.
- `ai`: `con-ia`, `sin-ia`, `parcial` o `pendiente`.
- `aiDetails`: explica exactamente qué papel tuvo la IA (generación de código, depuración, diseño, etc.).
- `demo`: URL HTTPS real de la aplicación publicada, o `''` si no está lista.
- `repo`: URL pública del código, o `''`.
- `status`: estado del proyecto.

La clasificación de IA de los proyectos académicos está inicialmente **pendiente**, para no inventar información. AgentHub está marcado con ayuda de IA según el desarrollo conversado.

## 6. Actualizar la web

```powershell
git add .
git commit -m "Actualizar portfolio"
git push
```

GitHub Actions recompilará y publicará la web automáticamente, aunque tu ordenador esté apagado después del push.

## Notas

- Para no depender de tu ordenador, publica cada frontend estático en GitHub Pages y conecta los que necesiten backend a servicios en la nube (por ejemplo, Cloudflare Workers + Workers AI para AgentHub).
- No subas contraseñas, claves API, archivos `.env` ni bases de datos privadas al repositorio.
- Si el GitHub institucional se desactiva tras terminar los estudios, perderías control del repositorio: conviene conservar una copia y plantear una cuenta personal.
- Los textos y tecnologías son editables; comprueba que reflejen fielmente tu trabajo antes de difundir el portfolio.
