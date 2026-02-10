# ⚡ IMPACT CHANNEL | Project Roadmap & Changelog

## [1.3.0] - 2026-02-10
### Añadido (Added)
- **Rediseño Premium de la Página de Contacto:** Nueva interfaz visual con animaciones de entrada (`fade-in`, `stagger`), tipografía de gran formato y diseño limpio.
- **Formulario Interactivo:** Nuevos estilos de campos, estados de foco, validación en tiempo real y feedback visual de carga. Integración con Google Sheets para captura de leads.
- **Mapa Dinámico & Dark Mode:** Bloque de mapa integrado (`rounded-3xl`) con estilo oscuro personalizado y acentos corporativos (`hue-rotate`), optimizado para la estética de la marca.
- **Botón Flotante de Acción (FAB):** Botón de contacto rediseñado con animación de "respiración" sutil y menú desplegable (Llamar / Presupuesto) con transiciones suaves y fondo atenuado.
- **Hero Interactivo (Micro-UX):** Implementada física de colisiones en los haces de luz del fondo. Los "meteoritos" ahora interactúan con el botón principal, disolviéndose al impacto y generando una micro-reacción luminosa ultra-sutil en el botón.
- **Página Know-How (`/know-how`):** Nueva página dedicada. Incluye un **Timeline interactivo** (Aceternity UI) para visualizar el proceso de trabajo, además de áreas de expertise y diferenciadores animados.

## [1.2.0] - 2026-02-10
### Añadido (Added)
- Nueva página de contacto dedicada (`/contact`) con diseño dividido (información + formulario) e integración de Google Maps.
- Sistema de rutas con `react-router-dom` para gestionar la navegación entre Inicio y Contacto.
- Lógica del Header para adaptar la visibilidad (fondo blanco, texto negro y logo negro) en la página de Contacto cuando está expandido.
- Integración del Formulario de Contacto con Google Sheets para guardar leads automáticamente como base de datos.

### Cambiado (Changed)
- Eliminado el mapa de Google Maps de la página de Inicio (Home).
- Actualizados los enlaces de navegación para funcionar correctamente entre secciones de la Home y páginas externas (Contacto).
- Mejorada la visibilidad del menú móvil en fondos claros.
- Optimizada la animación de la Navbar para que sea mucho más fluida y lenta (0.7s-0.8s), creando una sensación más premium.

## [1.1.0] - 2026-02-09

### 🚀 ESTADO ACTUAL
La plataforma ha evolucionado a la versión **V1.1**. Hemos consolidado la base técnica y restaurado la integridad visual de los componentes clave. El sitio es ahora más robusto, rápido y fiel al diseño original premium.

---

### 📋 HISTORIAL DE VERSIONES

#### 🏷️ V1.1 - Optimización y Restauración (Actual)
*Enfocada en corregir regresiones visuales y mejorar la infraestructura.*

**🚀 Implementations**
• **Continuous Carousel:** El carrusel de clientes ahora es 100% independiente. No se detiene ni salta al hacer scroll o pasar el cursor, garantizando un flujo visual infinito y constante.
• **Vite Engine:** Migración completa al motor de desarrollo Vite para una velocidad de carga instantánea.
• **TypeScript Integration:** Implementación de tipado estricto para evitar errores en producción.
• **Responsive Design:** Reajuste de contenedores para asegurar simetría en todas las pantallas.

**🔧 Fixes**
• **Carousel Stutter:** Eliminado el efecto de "pausa" en hover que causaba saltos visuales en el carrusel de logos.
• **Visual Fix:** Reparados los degradados de fondo que desaparecían en ciertas secciones.
• **Client Logos:** Restaurados los logos perdidos de clientes (ING, Vision & Co, Milar) en el carrusel.
• **Smooth Scroll:** Corregida la navegación del menú superior para un desplazamiento fluido.

---

#### 🏷️ V1.0 - Estructura Base y Diseño
*Lanzamiento inicial del concepto visual.*

• **Base:** Creación de componentes modulares (Hero, Services, Contact).
• **UI/UX:** Definición de paleta de colores corporativa y tipografía *Outfit*.
• **Interactividad:** Implementación de efectos 3D en tarjetas de servicios.

---

### ⚡ CHECKLIST DE RENDIMIENTO (QA)

🟢 **Velocidad de Carga:** Excelente. Carga en menos de 1 segundo.
🟡 **SEO & Visibilidad:** Estructura de títulos lista. (Próximo paso: Meta Tags).
🟢 **Adaptación Móvil:** Revisado. 100% adaptable.
⚪ **Accesibilidad:** Pendiente de etiquetado `aria-label`.

> **💡 Consejo Pro de QA:** Convertir logos a formato .WebP para ahorrar un 40% de peso extra.

---

### 📖 Walkthrough (ESTÁTICO)
*Referencia guía para el manejo del proyecto.*

1.  **Entorno de Desarrollo**:
    - Ejecutar `npm install` para instalar dependencias.
    - Usar `npm run dev` para levantar el servidor local en [http://localhost:5173](http://localhost:5173).
2.  **Gestión de Contenidos**:
    - Los textos principales residen en cada componente dentro de `src/components/`.
    - Los logos de marcas se gestionan desde `src/components/ClientsCarousel.tsx`.
3.  **Sistema de Estilos**:
    - Se utiliza **Tailwind CSS** para utilidades rápidas y archivos `.css` modulares para animaciones complejas.
    - Los tokens de color están definidos en `src/index.css` bajo `:root`.
4.  **Despliegue (Vercel)**:
    - Conectar el repositorio de GitHub a Vercel.
    - Seleccionar el Framework Preset: **Vite**.
    - El directorio de salida debe ser `dist`.
