# Instrucciones para Agentes de IA - Proyecto Kanban

## Visión General

Este es un **Kanban Board personal** en desarrollo: una aplicación web de gestión de tareas con funcionalidad drag-and-drop. El proyecto implementa un tablero de tres columnas (Por hacer → En proceso → Hecho) para seguimiento visual de tareas.

### Arquitectura Principal

```
HTML/index.html        → Estructura Kanban (3 columnas)
css/styles.css         → Estilos (vacío - en desarrollo)
JavaScript/.js         → Lógica de interacción (vacío - en desarrollo)
```

## Estructura de Componentes

### 1. Tablero Kanban (HTML)
**Archivo:** [HTML/index.html](../HTML/index.html)

**Estructura de columnas:**
- `#todo-column` / `#todo` → Por hacer (rojo)
- `#doing-column` / `#doing` → En proceso (amarillo)  
- `#done-column` / `#done` → Hecho (verde)

**Patrón de tarjetas:**
- Cada tarea es un `.card` con `draggable="true"`
- Las tarjetas contienen texto y un `.delete-btn` (botón X)
- Contenedor padre: `.task-container` (recibe drop de tarjetas)

### 2. Entrada de Tareas
- `#taskInput` → Input para nueva tarea
- `#addBtn` → Botón para añadir tarea
- **Flujo esperado:** Input → Click/Enter → Nueva tarjeta en columna "Por hacer"

## Convenciones y Patrones

### Nomenclatura (Español)
- IDs usan español: `todo`, `doing`, `done`
- Emojis indican estado: 🔴 Por hacer, 🟡 En proceso, 🟢 Hecho
- Clases CSS descriptivas: `.task-container`, `.delete-btn`, `.card`

### Drag & Drop
- Tarjetas implementan `draggable="true"`
- Contenedores de tareas son destinos de drop (`.task-container`)
- **Comportamiento esperado:** Arrastrar tarjeta entre columnas (almacenar en localStorage si es persistente)

## Funcionalidades por Implementar

1. **JavaScript - Gestión de Tareas** (`JavaScript/.js`)
   - Capturar click en `#addBtn` y Enter en `#taskInput`
   - Crear y añadir `.card` dinámicamente a `#todo`
   - Implementar delete-btn (remover tarjeta)
   - Drag & drop entre `#todo`, `#doing`, `#done`
   - **Opcional:** Persistencia con localStorage

2. **CSS - Estilos** (`css/styles.css`)
   - Layout grid/flexbox para 3 columnas
   - Hover effects en botones
   - Validar fuente Roboto (importada en HTML)
   - Estados visuales: dragging, over, completed

## Directrices para Desarrollo

- **Mantener idioma español:** Variable names en español para consistencia con HTML
- **IDs únicos:** Referenciar elementos por ID específico (`#todo`, `#doing`, `#done`)
- **Selector de tareas:** Usar `.card` para tarjetas, `.task-container` para contenedores
- **Eventos:** `dragstart`, `dragover`, `drop` para reordenación entre columnas
- **Interfaz limpia:** El diseño actual es simple; no sobre-complicar CSS

## Próximos Pasos

1. Implementar lógica de captura de input en `JavaScript/.js`
2. Completar estilos en `css/styles.css` (layout y animaciones)
3. Validar drag & drop entre columnas
4. Añadir persistencia (localStorage) si se requiere
