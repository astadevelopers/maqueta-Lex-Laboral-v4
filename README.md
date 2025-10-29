# LexLabor V5 - Maqueta Demo

## 📋 Descripción

Esta es una maqueta funcional del sistema **LexLabor V5**, diseñada para presentaciones a clientes y validación de conceptos. La maqueta incluye datos simulados y funcionalidades básicas para demostrar la interfaz de usuario y experiencia de navegación.

## 🎯 Objetivos

- **Validación de Concepto**: Demostrar la viabilidad del sistema antes de desarrollo completo
- **Presentación Profesional**: Proporcionar una herramienta visual para reuniones con clientes
- **Navegación por Roles**: Mostrar diferentes perspectivas según el tipo de usuario
- **Interfaz Moderna**: Implementar un diseño responsive y accesible

## 👥 Roles Disponibles

### 1. Administrador
- Vista completa del sistema
- Gestión de usuarios y configuración
- Reportes globales y estadísticas
- Configuración del sistema

### 2. Abogado
- Gestión de casos asignados
- Calendario de audiencias
- Calculadora de prestaciones
- Plantillas documentales

### 3. Cliente
- Visualización de casos propios
- Descarga de documentos
- Contacto con abogados
- Historial de actividades

### 4. Mesa de Ayuda
- Gestión de tickets de soporte
- Búsqueda de información
- Contactos de emergencia
- Reportes operativos

## 🚀 Inicio Rápido

### Opción 1: Servidor Python (Recomendado)
```bash
cd lexlabor-maqueta
python3 -m http.server 3000
```
Luego abre http://localhost:3000 en tu navegador.

### Opción 2: Servidor Node.js
```bash
cd ..  # Desde la raíz del proyecto
node server.js
```
Luego abre http://localhost:3000 en tu navegador.

### Opción 3: Abrir directamente (Limitado)
Abre `index.html` directamente en tu navegador (algunas funcionalidades pueden no trabajar correctamente).

### Prerrequisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Python 3.x o Node.js (para servidor local)
- Conexión a internet (para cargar librerías externas como TailwindCSS y Chart.js)

### Archivos Principales
```
lexlabor-maqueta/
├── index.html              # Página de login
├── dashboard.html          # Dashboard principal
├── assets/
│   ├── css/
│   │   └── styles.css      # Estilos personalizados
│   └── js/
│       ├── mock-data.js    # Datos simulados
│       ├── navigation.js   # Lógica de navegación
│       ├── interactions.js # Interacciones de usuario
│       └── app.js          # Aplicación principal
```

## 📊 Funcionalidades Implementadas

### ✅ Completadas
- [x] Sistema de login con selección de roles
- [x] Dashboard principal con estadísticas
- [x] Navegación lateral responsive
- [x] Cambio dinámico de roles
- [x] Tablas interactivas con filtros
- [x] Gráficos y visualizaciones
- [x] Interfaz responsive (mobile/desktop)
- [x] Datos mock completos (50+ casos, 20+ clientes)
- [x] **Dashboards específicos por rol (Admin y Abogado)**
- [x] **Integración de dashboards existentes**
- [x] **Navegación dinámica por roles**

### 🔄 Limitaciones de la Maqueta
- [ ] Sin backend real (datos estáticos)
- [ ] Funcionalidades CRUD limitadas
- [ ] Sin persistencia de datos
- [ ] Sin integraciones externas
- [ ] Sin autenticación real
- [ ] Dashboards de Cliente y Mesa de Ayuda pendientes

## 🎨 Tecnologías Utilizadas

### Frontend
- **HTML5**: Estructura semántica
- **Tailwind CSS**: Framework de estilos utilitarios
- **JavaScript (Vanilla)**: Lógica de aplicación
- **Chart.js**: Gráficos y visualizaciones
- **Font Awesome**: Iconografía

### Arquitectura
- **SPA-like**: Navegación sin recargas
- **Component-based**: Módulos JavaScript independientes
- **Responsive Design**: Adaptable a diferentes dispositivos
- **Accessibility**: Soporte para lectores de pantalla

## 📈 Datos de Demostración

### Estadísticas Generales
- **247** casos totales
- **89** casos activos
- **156** clientes registrados
- **45** audiencias programadas este mes

### Casos por Tipo
- Despido injustificado: 45%
- Cálculo de prestaciones: 32%
- Accidentes de trabajo: 28%
- Otros: 23%

### Clientes por Sector
- Manufactura: 35%
- Servicios: 28%
- Construcción: 20%
- Industrial: 17%

## 🗂️ Estructura de Navegación

```
Dashboard
├── Casos
│   ├── Lista de casos
│   ├── Filtros y búsqueda
│   └── Detalles de caso
├── Clientes
│   ├── Lista de clientes
│   ├── Información de contacto
│   └── Historial de casos
├── Audiencias
│   ├── Calendario
│   ├── Programación
│   └── Historial
└── Documentos
    ├── Gestión documental
    ├── Descargas
    └── Plantillas
```

## 📈 Estado del Proyecto

### ✅ Día 1 - Completado (100%)
- [x] Sistema de login con selección de roles
- [x] Estructura unificada del dashboard
- [x] Módulos JavaScript (app.js, navigation.js, interactions.js, mock-data.js)
- [x] Datos mock completos (247 casos, 156 clientes, 45 audiencias)
- [x] Documentación completa

### ✅ Día 2 - Completado (100%)
- [x] Análisis de dashboards existentes (admin y abogado)
- [x] Creación de dashboards específicos por rol
- [x] Integración de contenido dinámico por rol
- [x] Funcionalidad de carga de dashboards
- [x] Navegación específica por rol implementada
- [x] Servidor local configurado para pruebas

### 🔄 Día 3 - Pendiente
- [ ] Dashboard de Cliente
- [ ] Dashboard de Mesa de Ayuda
- [ ] Integración de funcionalidades adicionales
- [ ] Testing completo de navegación

### 🎯 Próximos Pasos
- Completar dashboards restantes
- Agregar interacciones avanzadas
- Optimizar responsive design
- Preparar para presentación final

## 📞 Soporte

Para soporte técnico o consultas sobre la maqueta:
- **Email**: soporte@lexlabor.com
- **Teléfono**: +52 55 1234 5678
- **Horario**: Lunes a Viernes, 9:00 - 18:00

## 📝 Notas de Desarrollo

### Convenciones de Código
- **JavaScript**: CamelCase para variables y funciones
- **CSS**: BEM methodology con Tailwind utilities
- **HTML**: Semántico y accesible

### Datos Mock
Los datos simulados están estructurados para representar escenarios realistas del sistema jurídico laboral mexicano.

### Performance
- Carga inicial: < 2 segundos
- Navegación: < 500ms
- Memoria: < 50MB

## 🔒 Seguridad

### En Desarrollo
- Validación de entrada de usuario
- Sanitización de datos
- Protección contra XSS
- Manejo seguro de sesiones

### En Producción
- Encriptación de datos sensibles
- Autenticación de dos factores
- Auditoría de acceso
- Backup automático

---

**LexLabor V5** - Sistema Integral de Gestión Jurídica Laboral
*Desarrollado para la transformación digital de la justicia laboral en México*

---

*Esta maqueta fue creada como parte del proyecto LexLabor V5 para validar la arquitectura y experiencia de usuario antes del desarrollo completo.*
