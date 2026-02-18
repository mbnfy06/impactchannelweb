# 🚀 PLAN DE CORRECCIÓN Y EVOLUCIÓN DE NEGOCIO - IMPACT CHANNEL

Este documento detalla la hoja de ruta para alinear la presencia digital de **Impact Channel** con su realidad comercial y elevar su posicionamiento hacia un perfil "Premium Partner".

---

## 📅 FASE 1: SANEAMIENTO Y CENTRALIZACIÓN DE DATOS (Inmediato)
**Objetivo:** Eliminar deuda técnica y asegurar que toda la información de contacto sea precisa y fácil de mantener.

1.  **Creación de `site.config.ts`**:
    *   Centralizar *hardcoded values* (teléfonos, emails, direcciones, redes sociales) en un único archivo de configuración.
    *   *Beneficio:* Cambiar un teléfono en el futuro tomará 1 segundo, no 20 minutos buscando en 10 archivos.
2.  **Validación de Credenciales**:
    *   **Acción Crítica:** Confirmar operatividad de `info@impactchannel.es` (actualmente asociado a dominio caído).
    *   **Acción Crítica:** Verificar línea `91 805 34 00` vs. líneas móviles corporativas.
    *   **Acción Crítica:** Definir dirección fiscal vs. operativa (Nave 19A).
3.  **Corrección de Footer y Cabecera**:
    *   Reemplazar textos estáticos por variables dinámicas del `site.config.ts`.

---

## 💎 FASE 2: REESTRUCTURACIÓN DE OFERTA (Estratégico)
**Objetivo:** Dejar de vender "servicios" y empezar a vender "soluciones y valor".

1.  **Renaming de Servicios (Elevación de Percepción)**:
    *   `Impresión Digital` → **Producción Gráfica & Gran Formato**.
    *   `Regalo Publicitario` → **Merchandising Estratégico & Corporativo**.
    *   `Trade Marketing` → **Consultoría de Punto de Venta (PDV)**.
    *   `Ad-hoc Development` → **Innovación & Proyectos a Medida**.
2.  **Eliminación de "Ruido"**:
    *   Retirar o reenfocar `Customer Services` (a menos que sea un servicio B2B de call center, si no, es valor añadido, no producto).
3.  **Nueva Propuesta de Valor (Copywriting)**:
    *   Implementar el nuevo *tagline*: **"Transformamos Espacios en Experiencias de Venta"**.
    *   Reescribir descripciones de servicios para enfocarse en el *beneficio* (ROI, Visibilidad) en lugar de la *característica* (máquinas, tintas).

---

## 🎨 FASE 3: ELEVACIÓN VISUAL Y UX (Diseño "Wow")
**Objetivo:** Que la web respire tecnología, solidez y modernidad.

1.  **Implementación de "Glassmorphism Premium"**:
    *   Rediseñar tarjetas de servicios con fondos translúcidos, bordes sutiles y "glow" effects.
    *   Abandonar el diseño plano (flat) por uno con profundidad y jerarquía.
2.  **Sistema de Diseño (Tokens)**:
    *   Ajustar paleta de colores: Negro Profundo (`#0D1117`) + Amarillo Impact (`#F5A623`) como acento vibrante.
    *   Mejorar tipografías: Asegurar legibilidad y peso en títulos (Outfit/Inter).
3.  **Micro-Interacciones**:
    *   Añadir *hover states* magnéticos en botones.
    *   Transiciones suaves al navegar entre pestañas de servicios.

---

## ⚙️ FASE 4: OPTIMIZACIÓN TÉCNICA Y SEO (Crecimiento)
**Objetivo:** Ser encontrados y convertir visitas en leads cualificados.

1.  **SEO Local Avanzado**:
    *   Implementar **Schema.org LocalBusiness** (JSON-LD) con los datos saneados de la Fase 1.
    *   Optimizar meta-títulos y descripciones para keywords: "Agencia Trade Marketing Madrid", "Digital Signage Retail".
2.  **Formularios de Alta Conversión**:
    *   Revisar `ContactSection`. Simplificar campos.
    *   Asegurar feedback visual inmediato (loading states, success messages).
3.  **Performance Check**:
    *   Optimizar carga de imágenes (WebP).
    *   Auditoría Lighthouse para asegurar >90 en Performance y SEO.

---

## 📝 RESUMEN DE ACCIONES INMEDIATAS (Next Steps)

1.  [ ] **Aprobar** este plan de fases.
2.  [ ] **Proveer** los datos de contacto definitivos (Fase 1).
3.  [ ] **Autorizar** la creación del archivo `site.config.ts`.
