// Mock Data Storage
const appData = {
  casos: [
    { id: 'JLC/001/2023', expediente: 'JLC/001/2023', actor: 'Juan Pérez López', demandado: 'Constructora Mexicana S.A. de C.V.', etapa: 'Demanda Inicial', competencia: 'Juzgado 1º Laboral', fechaAlta: '2023-01-15', montoReclamado: 150000, abogado: 'María González', cliente: 'Sindicato de Trabajadores', status: 'activo' },
    { id: 'JLC/002/2023', expediente: 'JLC/002/2023', actor: 'Ana Martínez Cruz', demandado: 'Textiles del Norte S.A.', etapa: 'Conciliación', competencia: 'Juzgado 2º Laboral', fechaAlta: '2023-02-20', montoReclamado: 85000, abogado: 'Juan Pérez', cliente: 'Asociación Civil', status: 'activo' },
    { id: 'JLC/003/2023', expediente: 'JLC/003/2023', actor: 'Carlos Ramírez Soto', demandado: 'Servicios Corporativos XYZ', etapa: 'Demanda y Excepciones', competencia: 'Juzgado 3º Laboral', fechaAlta: '2023-03-10', montoReclamado: 200000, abogado: 'Ana Martínez', cliente: 'Empresa Cliente A', status: 'activo' },
    { id: 'JLC/004/2023', expediente: 'JLC/004/2023', actor: 'Luis García Mendoza', demandado: 'Manufacturas del Sur', etapa: 'Ofrecimiento de Pruebas', competencia: 'Juzgado 4º Laboral', fechaAlta: '2023-04-05', montoReclamado: 120000, abogado: 'Carlos López', cliente: 'Empresa Cliente B', status: 'activo' },
    { id: 'JLC/005/2023', expediente: 'JLC/005/2023', actor: 'Patricia Silva Vargas', demandado: 'Servicios Integrales ABC', etapa: 'Desahogo de Pruebas', competencia: 'Juzgado 5º Laboral', fechaAlta: '2023-05-12', montoReclamado: 95000, abogado: 'Laura Sánchez', cliente: 'Sindicato de Trabajadores', status: 'cerrado' },
    { id: 'JLC/006/2023', expediente: 'JLC/006/2023', actor: 'Roberto Flores Díaz', demandado: 'Industrias del Bajío', etapa: 'Demanda Inicial', competencia: 'Juzgado 1º Laboral', fechaAlta: '2023-06-18', montoReclamado: 175000, abogado: 'María González', cliente: 'Sindicato de Trabajadores', status: 'activo' },
    { id: 'JLC/007/2023', expediente: 'JLC/007/2023', actor: 'Sandra López Reyes', demandado: 'Comercializadora del Centro', etapa: 'Conciliación', competencia: 'Juzgado 2º Laboral', fechaAlta: '2023-07-22', montoReclamado: 92000, abogado: 'Juan Pérez', cliente: 'Empresa Cliente A', status: 'activo' }
  ],
  clientes: [
    { id: 1, tipo: 'empresa', nombre: 'Constructora Mexicana S.A. de C.V.', rfc: 'CMX930201ABC', sector: 'Construcción', casosActivos: 3, casosTotales: 12, contacto: 'Juan Director', email: 'juan@constructora.com' },
    { id: 2, tipo: 'trabajador', nombre: 'Sindicato de Trabajadores', rfc: 'STR850315XYZ', sector: 'Servicios', casosActivos: 5, casosTotales: 25, contacto: 'María Representante', email: 'maria@sindicato.org' },
    { id: 3, tipo: 'empresa', nombre: 'Textiles del Norte S.A.', rfc: 'TDN880420DEF', sector: 'Manufactura', casosActivos: 2, casosTotales: 8, contacto: 'Ana Gerente', email: 'ana@textiles.com' },
    { id: 4, tipo: 'empresa', nombre: 'Servicios Corporativos XYZ', rfc: 'SCX950715GHI', sector: 'Servicios', casosActivos: 4, casosTotales: 15, contacto: 'Carlos CEO', email: 'carlos@servicios.com' }
  ],
  audiencias: [
    { id: 1, casoId: 'JLC/001/2023', tipo: 'Audiencia Inicial', fecha: '2024-11-15T09:00:00', juzgado: 'Juzgado 1º Laboral', sala: 'Sala 3', juez: 'Dra. Ana Martínez', status: 'pendiente' },
    { id: 2, casoId: 'JLC/002/2023', tipo: 'Audiencia de Pruebas', fecha: '2024-11-20T10:00:00', juzgado: 'Juzgado 2º Laboral', sala: 'Sala 1', juez: 'Dr. Juan García', status: 'pendiente' },
    { id: 3, casoId: 'JLC/003/2023', tipo: 'Audiencia de Alegatos', fecha: '2024-11-25T11:00:00', juzgado: 'Juzgado 3º Laboral', sala: 'Sala 2', juez: 'Dr. Carlos Ruiz', status: 'pendiente' },
    { id: 4, casoId: 'JLC/004/2023', tipo: 'Sentencia', fecha: '2024-12-05T14:00:00', juzgado: 'Juzgado 4º Laboral', sala: 'Sala 4', juez: 'Dra. Laura Torres', status: 'programada' }
  ],
  usuarios: [
    { id: 1, nombre: 'Admin Principal', email: 'admin@lexlabor.com', rol: 'admin' },
    { id: 2, nombre: 'María González', email: 'maria.gonzalez@lexlabor.com', rol: 'abogado' },
    { id: 3, nombre: 'Juan Pérez', email: 'juan.perez@lexlabor.com', rol: 'abogado' },
    { id: 4, nombre: 'Ana Martínez', email: 'ana.martinez@lexlabor.com', rol: 'abogado' },
    { id: 5, nombre: 'Cliente Empresa A', email: 'cliente@empresa.com', rol: 'cliente' },
    { id: 6, nombre: 'Soporte Mesa', email: 'soporte@lexlabor.com', rol: 'mesa_ayuda' }
  ],
  catalogos: {
    etapas: [
      { id: 1, nombre: 'Demanda Inicial', descripcion: 'Primera etapa del proceso', activo: true },
      { id: 2, nombre: 'Conciliación', descripcion: 'Etapa de conciliación', activo: true },
      { id: 3, nombre: 'Demanda y Excepciones', descripcion: 'Presentación de demandas y excepciones', activo: true },
      { id: 4, nombre: 'Ofrecimiento de Pruebas', descripcion: 'Ofrecimiento y admisión de pruebas', activo: true },
      { id: 5, nombre: 'Desahogo de Pruebas', descripcion: 'Desahogo de pruebas admitidas', activo: true }
    ],
    competencias: [
      { id: 1, nombre: 'Juzgado 1º Laboral', ciudad: 'Ciudad de México', activo: true },
      { id: 2, nombre: 'Juzgado 2º Laboral', ciudad: 'Ciudad de México', activo: true },
      { id: 3, nombre: 'Juzgado 3º Laboral', ciudad: 'Ciudad de México', activo: true },
      { id: 4, nombre: 'Juzgado 4º Laboral', ciudad: 'Ciudad de México', activo: true },
      { id: 5, nombre: 'Juzgado 5º Laboral', ciudad: 'Ciudad de México', activo: true }
    ],
    tiposAudiencia: [
      { id: 1, nombre: 'Audiencia Inicial', descripcion: 'Primera audiencia del proceso', activo: true },
      { id: 2, nombre: 'Audiencia de Pruebas', descripcion: 'Desahogo de pruebas', activo: true },
      { id: 3, nombre: 'Audiencia de Alegatos', descripcion: 'Presentación de alegatos', activo: true },
      { id: 4, nombre: 'Sentencia', descripcion: 'Lectura de sentencia', activo: true }
    ]
  }
};

// Current State
let currentUser = null;
let currentRole = null;
let currentView = 'dashboard';

// Navigation Configuration - Sidebars específicos por rol
const navMenus = {
  admin: [
    { id: 'dashboard', icon: 'fa-tachometer-alt', label: 'Dashboard' },
    { id: 'empresas', icon: 'fa-building', label: 'Empresas' },
    { id: 'nuevo-cliente', icon: 'fa-plus-circle', label: 'Nuevo Cliente' },
    { id: 'abogados', icon: 'fa-user-tie', label: 'Abogados' },
    { id: 'corresponsales', icon: 'fa-users', label: 'Corresponsales' },
    { id: 'nuevo-usuario', icon: 'fa-user-plus', label: 'Nuevo Usuario' },
    { id: 'casos', icon: 'fa-briefcase', label: 'Todos los Casos' },
    { id: 'estadisticas', icon: 'fa-chart-bar', label: 'Estadísticas' },
    { id: 'audiencias', icon: 'fa-calendar-alt', label: 'Audiencias' },
    { id: 'plazos', icon: 'fa-clock', label: 'Plazos' },
    { id: 'ajustes', icon: 'fa-cog', label: 'Ajustes' }
  ],
  abogado: [
    { id: 'dashboard', icon: 'fa-home', label: 'Dashboard' },
    { id: 'mis-casos', icon: 'fa-briefcase', label: 'Mis Casos' },
    { id: 'nuevo-caso', icon: 'fa-plus-circle', label: 'Nuevo Caso' },
    { id: 'buscar-casos', icon: 'fa-search', label: 'Buscar Casos' },
    { id: 'audiencias', icon: 'fa-calendar-alt', label: 'Audiencias' },
    { id: 'plazos', icon: 'fa-clock', label: 'Plazos' },
    { id: 'plantillas', icon: 'fa-file-alt', label: 'Plantillas' },
    { id: 'archivos', icon: 'fa-folder-open', label: 'Archivos' },
    { id: 'ajustes', icon: 'fa-cog', label: 'Ajustes' },
    { id: 'cerrar-sesion', icon: 'fa-sign-out-alt', label: 'Cerrar Sesión' }
  ],
  cliente: [
    { id: 'dashboard', icon: 'fa-tachometer-alt', label: 'Dashboard' },
    { id: 'mis-casos', icon: 'fa-briefcase', label: 'Mis Casos' },
    { id: 'nuevo-caso', icon: 'fa-plus-circle', label: 'Nuevo Caso' },
    { id: 'abogados-asignados', icon: 'fa-user-tie', label: 'Abogados Asignados' },
    { id: 'mensajes', icon: 'fa-comments', label: 'Mensajes' },
    { id: 'expedientes', icon: 'fa-folder', label: 'Expedientes' },
    { id: 'contratos', icon: 'fa-file-contract', label: 'Contratos' },
    { id: 'audiencias', icon: 'fa-calendar-alt', label: 'Audiencias' },
    { id: 'plazos', icon: 'fa-clock', label: 'Plazos' },
    { id: 'perfil-empresa', icon: 'fa-cog', label: 'Perfil Empresa' }
  ],
  mesa_ayuda: [
    { id: 'dashboard', icon: 'fa-tachometer-alt', label: 'Dashboard' },
    { id: 'catalogos', icon: 'fa-book', label: 'Catálogos' },
    { id: 'nuevo-cliente', icon: 'fa-user-plus', label: 'Nuevo Cliente' },
    { id: 'nuevo-expediente', icon: 'fa-folder-plus', label: 'Nuevo Expediente' },
    { id: 'nuevo-juicio', icon: 'fa-gavel', label: 'Nuevo Juicio' },
    { id: 'nuevo-trabajador', icon: 'fa-users', label: 'Nuevo Trabajador' },
    { id: 'empresas', icon: 'fa-building', label: 'Empresas' },
    { id: 'trabajadores', icon: 'fa-user-tie', label: 'Trabajadores' },
    { id: 'juicios', icon: 'fa-gavel', label: 'Juicios' },
    { id: 'citatorios', icon: 'fa-calendar-plus', label: 'Citatorios/Conciliaciones' },
    { id: 'documentos', icon: 'fa-file-contract', label: 'Documentos' }
  ]
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  initializeLogin();
  initializeApp();
});

// Login Functions
function initializeLogin() {
  const loginForm = document.getElementById('loginForm');
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const role = document.getElementById('roleSelect').value;
    const username = document.getElementById('username').value;
    
    if (role && username) {
      currentRole = role;
      currentUser = appData.usuarios.find(u => u.rol === role) || { nombre: username, rol: role };
      
      document.getElementById('loginPage').style.display = 'none';
      document.getElementById('appContainer').style.display = 'grid';
      
      loadDashboard(role);
      showToast('Bienvenido a LexLabor', 'success');
    }
  });
}

// App Initialization
function initializeApp() {
  // Toggle Sidebar
  document.getElementById('toggleSidebar').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('mobile-active');
  });
  
  // Role Switch
  document.getElementById('roleSwitch').addEventListener('change', (e) => {
    currentRole = e.target.value;
    currentUser = appData.usuarios.find(u => u.rol === currentRole) || currentUser;
    loadDashboard(currentRole);
    showToast(`Cambiado a rol: ${getRoleName(currentRole)}`, 'info');
  });
  
  // User Menu
  document.getElementById('userMenuBtn').addEventListener('click', () => {
    document.getElementById('userDropdown').classList.toggle('active');
  });
  
  // Logout
  document.getElementById('logoutBtn').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('appContainer').style.display = 'none';
    document.getElementById('loginPage').style.display = 'flex';
    currentUser = null;
    currentRole = null;
    document.getElementById('loginForm').reset();
    showToast('Sesión cerrada', 'info');
  });
  
  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.user-menu')) {
      document.getElementById('userDropdown').classList.remove('active');
    }
  });
}

// Load Dashboard
function loadDashboard(role) {
  document.getElementById('roleSwitch').value = role;
  document.getElementById('currentUserName').textContent = currentUser.nombre;
  
  loadSidebarMenu(role);
  currentView = 'dashboard';
  renderView(role, 'dashboard');
}

// Load Sidebar Menu
function loadSidebarMenu(role) {
  const nav = document.querySelector('.sidebar-nav');
  const menu = navMenus[role] || [];
  
  nav.innerHTML = menu.map(item => `
    <a href="#" class="nav-item ${item.id === currentView ? 'active' : ''}" data-view="${item.id}">
      <i class="fas ${item.icon}"></i>
      <span>${item.label}</span>
    </a>
  `).join('');
  
  // Add event listeners
  nav.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const view = item.dataset.view;
      currentView = view;
      
      nav.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      
      // Close mobile sidebar if open
      const sidebar = document.getElementById('sidebar');
      if (sidebar.classList.contains('mobile-active')) {
        sidebar.classList.remove('mobile-active');
      }
      
      renderView(role, view);
    });
  });
}

// Render View
function renderView(role, view) {
  const mainContent = document.getElementById('mainContent');
  
  switch(role) {
    case 'admin':
      renderAdminView(view, mainContent);
      break;
    case 'abogado':
      renderAbogadoView(view, mainContent);
      break;
    case 'cliente':
      renderClienteView(view, mainContent);
      break;
    case 'mesa_ayuda':
      renderMesaAyudaView(view, mainContent);
      break;
  }
}

// Admin Views
function renderAdminView(view, container) {
  switch(view) {
    case 'dashboard':
      container.innerHTML = `
        <h2 class="mb-20">Dashboard Administrador</h2>
        <div class="dashboard-grid" id="adminStatsGrid">
          <div class="stat-card draggable-card" draggable="true" data-card-id="empresas">
            <div class="card-drag-handle"><i class="fas fa-grip-vertical"></i></div>
            <div class="stat-header">
              <div>
                <div class="stat-value">24</div>
                <div class="stat-label">Empresas</div>
              </div>
              <div class="stat-icon blue"><i class="fas fa-building"></i></div>
            </div>
          </div>
          <div class="stat-card draggable-card" draggable="true" data-card-id="abogados">
            <div class="card-drag-handle"><i class="fas fa-grip-vertical"></i></div>
            <div class="stat-header">
              <div>
                <div class="stat-value">15</div>
                <div class="stat-label">Abogados</div>
              </div>
              <div class="stat-icon green"><i class="fas fa-user-tie"></i></div>
            </div>
          </div>
          <div class="stat-card draggable-card" draggable="true" data-card-id="corresponsales">
            <div class="card-drag-handle"><i class="fas fa-grip-vertical"></i></div>
            <div class="stat-header">
              <div>
                <div class="stat-value">8</div>
                <div class="stat-label">Corresponsales</div>
              </div>
              <div class="stat-icon purple"><i class="fas fa-users"></i></div>
            </div>
          </div>
          <div class="stat-card draggable-card" draggable="true" data-card-id="casos">
            <div class="card-drag-handle"><i class="fas fa-grip-vertical"></i></div>
            <div class="stat-header">
              <div>
                <div class="stat-value">142</div>
                <div class="stat-label">Casos</div>
              </div>
              <div class="stat-icon yellow"><i class="fas fa-briefcase"></i></div>
            </div>
          </div>
        </div>
        
        
        <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 20px; margin-bottom: 20px;">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Casos por Empresa</h3>
            </div>
            <div class="card-body">
              <div class="chart-container">
                <canvas id="empresasChart"></canvas>
              </div>
            </div>
          </div>
          
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Próximas Audiencias</h3>
            </div>
            <div class="card-body">
              ${appData.audiencias.slice(0, 3).map(aud => {
                const fecha = new Date(aud.fecha);
                return `
                  <div class="calendar-event" style="margin-bottom: 12px;">
                    <div class="event-time" style="font-size: 11px;">
                      ${fecha.toLocaleDateString('es-MX', { month: 'short', day: 'numeric' })} - ${fecha.toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' })}
                    </div>
                    <div class="event-title" style="font-size: 13px;">${aud.tipo}</div>
                    <div class="event-info" style="font-size: 11px;">${aud.casoId}</div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        </div>
        
        <div class="card mb-20">
          <div class="card-header">
            <h3 class="card-title">Empresas Cliente Recientes</h3>
            <button class="btn btn--primary btn--sm" onclick="openEmpresaModal()">
              <i class="fas fa-plus"></i> Nueva Empresa
            </button>
          </div>
          <div class="card-body">
            <div class="table-container">
              <table class="table">
                <thead>
                  <tr>
                    <th>Empresa</th>
                    <th>RFC</th>
                    <th>Sector</th>
                    <th>Casos Activos</th>
                    <th>Abogado Asignado</th>
                  </tr>
                </thead>
                <tbody>
                  ${appData.clientes.slice(0, 5).map(c => `
                    <tr>
                      <td><strong>${c.nombre}</strong></td>
                      <td>${c.rfc}</td>
                      <td>${c.sector}</td>
                      <td>${c.casosActivos}</td>
                      <td>${c.contacto}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Acciones Rápidas</h3>
          </div>
          <div class="card-body">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px;">
              <button class="btn btn--outline" onclick="openCasoModal()">
                <i class="fas fa-plus-circle"></i> Nuevo Caso
              </button>
              <button class="btn btn--outline" onclick="openEmpresaModal()">
                <i class="fas fa-building"></i> Nueva Empresa
              </button>
              <button class="btn btn--outline" onclick="openAbogadoModal()">
                <i class="fas fa-user-tie"></i> Nuevo Abogado
              </button>
              <button class="btn btn--outline" onclick="openAudienciaModal()">
                <i class="fas fa-calendar-alt"></i> Nueva Audiencia
              </button>
            </div>
          </div>
        </div>
      `;
      initializeDraggableCards('adminStatsGrid');
      renderEmpresasChart();
      break;
      
    case 'corresponsales':
      renderCorresponsalesView(container);
      break;
      
    case 'nuevo-cliente':
      openEmpresaModal();
      setTimeout(() => renderView(currentRole, 'dashboard'), 100);
      break;
      
    case 'nuevo-usuario':
      openAbogadoModal();
      setTimeout(() => renderView(currentRole, 'dashboard'), 100);
      break;
      
    case 'estadisticas':
      renderEstadisticasView(container);
      break;
      
    case 'plazos':
      renderPlazosView(container);
      break;
      
    case 'ajustes':
      renderAjustesView(container);
      break;
      
    case 'casos':
      container.innerHTML = `
        <div class="flex justify-between items-center mb-20">
          <h2>Gestión de Casos</h2>
          <button class="btn btn--primary" onclick="openCasoModal()">
            <i class="fas fa-plus"></i> Nuevo Caso
          </button>
        </div>
        
        <div class="filters-bar">
          <div class="filter-group">
            <input type="text" class="form-control" placeholder="Buscar caso..." id="searchCasos">
          </div>
          <div class="filter-group">
            <select class="form-control" id="filterEtapa">
              <option value="">Todas las etapas</option>
              ${appData.catalogos.etapas.map(e => `<option value="${e.nombre}">${e.nombre}</option>`).join('')}
            </select>
          </div>
          <div class="filter-group">
            <select class="form-control" id="filterStatus">
              <option value="">Todos los estados</option>
              <option value="activo">Activo</option>
              <option value="cerrado">Cerrado</option>
            </select>
          </div>
        </div>
        
        <div class="card">
          <div class="card-body">
            <div class="table-container" id="casosTableContainer">
              ${renderCasosTable(appData.casos)}
            </div>
          </div>
        </div>
      `;
      
      // Add filter listeners
      ['searchCasos', 'filterEtapa', 'filterStatus'].forEach(id => {
        document.getElementById(id).addEventListener('input', filterCasos);
      });
      break;
      
    case 'catalogos':
      renderCatalogosSecondaryDashboard(container);
      break;
      
    case 'empresas':
      renderEmpresasView(container);
      break;
      
    case 'abogados':
      renderAbogadosView(container);
      break;
  }
}

// Abogado Views
function renderAbogadoView(view, container) {
  switch(view) {
    case 'dashboard':
      const misCasos = appData.casos.filter(c => c.abogado === currentUser.nombre);
      container.innerHTML = `
        <h2 class="mb-20">Dashboard Abogado - ${currentUser.nombre}</h2>
        
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin-bottom: 20px;" id="abogadoCardsGrid">
          <div class="card draggable-card" draggable="true" data-card-id="asuntos-pendientes">
            <div class="card-header">
              <h3 class="card-title"><i class="fas fa-tasks"></i> Asuntos Pendientes</h3>
              <div class="card-drag-handle"><i class="fas fa-grip-vertical"></i></div>
            </div>
            <div class="card-body">
              <div style="display: flex; flex-direction: column; gap: 8px;">
                <div style="padding: 8px; background: var(--color-bg-1); border-radius: var(--radius-base); font-size: 13px;">
                  <i class="fas fa-circle" style="font-size: 6px; color: var(--color-warning);"></i> Revisar demanda JLC/001/2023
                </div>
                <div style="padding: 8px; background: var(--color-bg-1); border-radius: var(--radius-base); font-size: 13px;">
                  <i class="fas fa-circle" style="font-size: 6px; color: var(--color-warning);"></i> Preparar audiencia del 15/11
                </div>
                <div style="padding: 8px; background: var(--color-bg-1); border-radius: var(--radius-base); font-size: 13px;">
                  <i class="fas fa-circle" style="font-size: 6px; color: var(--color-success);"></i> Entregar documentos
                </div>
              </div>
            </div>
          </div>
          
          <div class="card draggable-card" draggable="true" data-card-id="asuntos-urgentes">
            <div class="card-header">
              <h3 class="card-title"><i class="fas fa-exclamation-triangle"></i> Asuntos Urgentes</h3>
              <div class="card-drag-handle"><i class="fas fa-grip-vertical"></i></div>
            </div>
            <div class="card-body">
              <div style="display: flex; flex-direction: column; gap: 8px;">
                <div style="padding: 8px; background: var(--color-bg-4); border-left: 3px solid var(--color-error); border-radius: var(--radius-base); font-size: 13px;">
                  <strong>Vence hoy:</strong> Presentar escrito JLC/002/2023
                </div>
                <div style="padding: 8px; background: var(--color-bg-2); border-left: 3px solid var(--color-warning); border-radius: var(--radius-base); font-size: 13px;">
                  <strong>Vence mañana:</strong> Responder requerimiento
                </div>
              </div>
            </div>
          </div>
          
          <div class="card draggable-card" draggable="true" data-card-id="calendario">
            <div class="card-header">
              <h3 class="card-title"><i class="fas fa-calendar-alt"></i> Calendario</h3>
              <div class="card-drag-handle"><i class="fas fa-grip-vertical"></i></div>
            </div>
            <div class="card-body">
              <div style="text-align: center; padding: 20px;">
                <div style="font-size: 48px; font-weight: bold; color: var(--color-primary);">28</div>
                <div style="font-size: 14px; color: var(--color-text-secondary);">Octubre 2024</div>
                <div style="margin-top: 16px; font-size: 13px;">
                  <div style="padding: 4px 0;"><i class="fas fa-circle" style="font-size: 6px; color: var(--color-primary);"></i> 3 audiencias programadas</div>
                  <div style="padding: 4px 0;"><i class="fas fa-circle" style="font-size: 6px; color: var(--color-success);"></i> 2 plazos próximos</div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="card draggable-card" draggable="true" data-card-id="etapas-procesales">
            <div class="card-header">
              <h3 class="card-title"><i class="fas fa-project-diagram"></i> Etapas Procesales</h3>
              <div class="card-drag-handle"><i class="fas fa-grip-vertical"></i></div>
            </div>
            <div class="card-body">
              <div style="display: flex; gap: 8px; font-size: 11px;">
                <div style="flex: 1; text-align: center;">
                  <div style="background: var(--color-bg-1); padding: 8px; border-radius: var(--radius-base);">
                    <div style="font-weight: bold; color: var(--color-primary);">2</div>
                    <div style="color: var(--color-text-secondary);">Demanda</div>
                  </div>
                </div>
                <div style="flex: 1; text-align: center;">
                  <div style="background: var(--color-bg-3); padding: 8px; border-radius: var(--radius-base);">
                    <div style="font-weight: bold; color: #22c55e;">1</div>
                    <div style="color: var(--color-text-secondary);">Conciliación</div>
                  </div>
                </div>
                <div style="flex: 1; text-align: center;">
                  <div style="background: var(--color-bg-2); padding: 8px; border-radius: var(--radius-base);">
                    <div style="font-weight: bold; color: #f59e0b;">3</div>
                    <div style="color: var(--color-text-secondary);">Pruebas</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Todos los Casos</h3>
            <div class="flex gap-8">
              <input type="text" class="form-control" placeholder="Buscar..." style="width: 200px;">
              <button class="btn btn--primary btn--sm" onclick="openCasoModal()">
                <i class="fas fa-plus"></i> Nuevo
              </button>
            </div>
          </div>
          <div class="card-body">
            ${renderCasosTable(misCasos, true)}
            <p style="margin-top: 12px; font-size: 12px; color: var(--color-text-secondary); font-style: italic;">
              <i class="fas fa-info-circle"></i> Haz clic en cualquier fila para ver los detalles del caso
            </p>
          </div>
        </div>
      `;
      initializeDraggableCards('abogadoCardsGrid');
      break;
      
    case 'kanban':
      renderKanbanBoard(container);
      break;
      
    case 'audiencias':
      renderAudienciasCalendar(container);
      break;
      
    case 'nuevo-caso':
      openCasoModal();
      setTimeout(() => renderView(currentRole, 'dashboard'), 100);
      break;
      
    case 'cerrar-sesion':
      document.getElementById('logoutBtn').click();
      break;
      
    case 'buscar-casos':
      container.innerHTML = `
        <h2 class="mb-20">Buscar Casos</h2>
        <div class="card mb-20">
          <div class="card-body">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 16px;">
              <div class="form-group">
                <label class="form-label">Expediente</label>
                <input type="text" class="form-control" placeholder="JLC/XXX/XXXX">
              </div>
              <div class="form-group">
                <label class="form-label">Actor</label>
                <input type="text" class="form-control" placeholder="Nombre del actor">
              </div>
              <div class="form-group">
                <label class="form-label">Demandado</label>
                <input type="text" class="form-control" placeholder="Nombre del demandado">
              </div>
              <div class="form-group">
                <label class="form-label">Etapa</label>
                <select class="form-control">
                  <option value="">Todas</option>
                  ${appData.catalogos.etapas.map(e => `<option>${e.nombre}</option>`).join('')}
                </select>
              </div>
            </div>
            <button class="btn btn--primary">
              <i class="fas fa-search"></i> Buscar
            </button>
          </div>
        </div>
        
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Resultados</h3>
          </div>
          <div class="card-body">
            ${renderCasosTable(appData.casos.slice(0, 10))}
          </div>
        </div>
      `;
      break;
      
    case 'plazos':
      renderPlazosView(container);
      break;
      
    case 'plantillas':
      renderPlantillasView(container);
      break;
      
    case 'archivos':
      renderArchivosView(container);
      break;
      
    case 'ajustes':
      renderAjustesView(container);
      break;
  }
}

// Cliente Views
function renderClienteView(view, container) {
  const clienteCasos = appData.casos.filter(c => c.cliente === currentUser.nombre || c.cliente.includes('Cliente'));
  
  switch(view) {
    case 'dashboard':
      container.innerHTML = `
        <h2 class="mb-20">Dashboard Cliente</h2>
        <div class="dashboard-grid" id="clienteStatsGrid">
          <div class="stat-card draggable-card" draggable="true" data-card-id="casos-totales">
            <div class="card-drag-handle"><i class="fas fa-grip-vertical"></i></div>
            <div class="stat-header">
              <div>
                <div class="stat-value">12</div>
                <div class="stat-label">Casos Totales</div>
              </div>
              <div class="stat-icon blue"><i class="fas fa-briefcase"></i></div>
            </div>
          </div>
          <div class="stat-card draggable-card" draggable="true" data-card-id="casos-activos">
            <div class="card-drag-handle"><i class="fas fa-grip-vertical"></i></div>
            <div class="stat-header">
              <div>
                <div class="stat-value">7</div>
                <div class="stat-label">Casos Activos</div>
              </div>
              <div class="stat-icon green"><i class="fas fa-check-circle"></i></div>
            </div>
          </div>
          <div class="stat-card draggable-card" draggable="true" data-card-id="audiencias">
            <div class="card-drag-handle"><i class="fas fa-grip-vertical"></i></div>
            <div class="stat-header">
              <div>
                <div class="stat-value">3</div>
                <div class="stat-label">Audiencias</div>
              </div>
              <div class="stat-icon yellow"><i class="fas fa-calendar-alt"></i></div>
            </div>
          </div>
          <div class="stat-card draggable-card" draggable="true" data-card-id="documentos">
            <div class="card-drag-handle"><i class="fas fa-grip-vertical"></i></div>
            <div class="stat-header">
              <div>
                <div class="stat-value">5</div>
                <div class="stat-label">Documentos</div>
              </div>
              <div class="stat-icon purple"><i class="fas fa-file-alt"></i></div>
            </div>
          </div>
        </div>
        
        <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 20px; margin-bottom: 20px;">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Casos Recientes</h3>
            </div>
            <div class="card-body">
              ${renderCasosTable(clienteCasos.slice(0, 5))}
            </div>
          </div>
          
          <div>
            <div class="card mb-20">
              <div class="card-header">
                <h3 class="card-title">Próximas Audiencias</h3>
              </div>
              <div class="card-body">
                ${appData.audiencias.slice(0, 2).map(aud => {
                  const fecha = new Date(aud.fecha);
                  return `
                    <div class="calendar-event" style="margin-bottom: 12px;">
                      <div class="event-time" style="font-size: 11px;">
                        ${fecha.toLocaleDateString('es-MX', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                      </div>
                      <div class="event-title" style="font-size: 13px;">${aud.tipo}</div>
                      <div class="event-info" style="font-size: 11px;">${aud.casoId}</div>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
            
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Mensajes Recientes</h3>
              </div>
              <div class="card-body">
                <div style="padding: 8px; background: var(--color-bg-1); border-radius: var(--radius-base); margin-bottom: 8px; font-size: 13px;">
                  <strong>María González:</strong> Actualización caso JLC/001/2023
                  <div style="font-size: 11px; color: var(--color-text-secondary);">Hace 2 horas</div>
                </div>
                <div style="padding: 8px; background: var(--color-bg-1); border-radius: var(--radius-base); font-size: 13px;">
                  <strong>Sistema:</strong> Nueva audiencia programada
                  <div style="font-size: 11px; color: var(--color-text-secondary);">Hace 1 día</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Distribución de Casos</h3>
          </div>
          <div class="card-body">
            <div class="chart-container">
              <canvas id="casosClienteChart"></canvas>
            </div>
          </div>
        </div>
      `;
      initializeDraggableCards('clienteStatsGrid');
      renderCasosClienteChart();
      break;
      
    case 'audiencias':
      renderAudienciasCalendar(container);
      break;
      
    case 'nuevo-caso':
      openCasoModal();
      setTimeout(() => renderView(currentRole, 'dashboard'), 100);
      break;
      
    case 'abogados-asignados':
      renderAbogadosAsignadosView(container);
      break;
      
    case 'mensajes':
      renderMensajesView(container);
      break;
      
    case 'expedientes':
      container.innerHTML = `
        <h2 class="mb-20">Mis Expedientes</h2>
        <div class="card">
          <div class="card-body">
            ${renderCasosTable(clienteCasos)}
          </div>
        </div>
      `;
      break;
      
    case 'contratos':
      renderContratosView(container);
      break;
      
    case 'plazos':
      renderPlazosView(container);
      break;
      
    case 'perfil-empresa':
      renderPerfilEmpresaView(container);
      break;
  }
}

// Mesa de Ayuda Views
function renderMesaAyudaView(view, container) {
  switch(view) {
    case 'dashboard':
      container.innerHTML = `
        <h2 class="mb-20">Panel de Mesa de Ayuda</h2>
        
        <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 20px; margin-bottom: 20px;" id="mesaAyudaCardsGrid">
          <div class="card draggable-card" draggable="true" data-card-id="calendario-actividades">
            <div class="card-header">
              <h3 class="card-title"><i class="fas fa-calendar-week"></i> Calendario de Actividades</h3>
              <div class="card-drag-handle"><i class="fas fa-grip-vertical"></i></div>
            </div>
            <div class="card-body">
              <div style="text-align: center; padding: 20px;">
                <div style="font-size: 64px; font-weight: bold; color: var(--color-primary);">28</div>
                <div style="font-size: 18px; color: var(--color-text-secondary); margin-bottom: 20px;">Octubre 2024</div>
                <div style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 8px; font-size: 12px;">
                  ${['L', 'M', 'X', 'J', 'V', 'S', 'D'].map(d => `<div style="font-weight: bold; color: var(--color-text-secondary);">${d}</div>`).join('')}
                  ${Array.from({length: 31}, (_, i) => {
                    const isToday = i + 1 === 28;
                    return `<div style="padding: 8px; background: ${isToday ? 'var(--color-primary)' : 'var(--color-bg-1)'}; color: ${isToday ? 'var(--color-btn-primary-text)' : 'var(--color-text)'}; border-radius: var(--radius-sm); font-weight: ${isToday ? 'bold' : 'normal'};">${i + 1}</div>`;
                  }).join('')}
                </div>
              </div>
            </div>
          </div>
          
          <div class="card draggable-card" draggable="true" data-card-id="proximos-eventos">
            <div class="card-header">
              <h3 class="card-title"><i class="fas fa-clock"></i> Próximos Eventos</h3>
              <div class="card-drag-handle"><i class="fas fa-grip-vertical"></i></div>
            </div>
            <div class="card-body">
              <div style="display: flex; flex-direction: column; gap: 10px; max-height: 400px; overflow-y: auto;">
                <div style="padding: 10px; background: var(--color-bg-1); border-left: 3px solid var(--color-primary); border-radius: var(--radius-base);">
                  <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
                    <i class="fas fa-gavel" style="color: var(--color-primary);"></i>
                    <div style="font-weight: bold; font-size: 13px;">Audiencia - Caso JLC/001/2023</div>
                  </div>
                  <div style="font-size: 11px; color: var(--color-text-secondary);">15 Nov 2024 - 09:00 AM</div>
                </div>
                <div style="padding: 10px; background: var(--color-bg-4); border-left: 3px solid var(--color-error); border-radius: var(--radius-base);">
                  <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
                    <i class="fas fa-clock" style="color: var(--color-error);"></i>
                    <div style="font-weight: bold; font-size: 13px;">Vencimiento de plazo - Caso JLC/005/2023</div>
                  </div>
                  <div style="font-size: 11px; color: var(--color-text-secondary);">18 Nov 2024 - 23:59 PM</div>
                </div>
                <div style="padding: 10px; background: var(--color-bg-3); border-left: 3px solid #22c55e; border-radius: var(--radius-base);">
                  <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
                    <i class="fas fa-handshake" style="color: #22c55e;"></i>
                    <div style="font-weight: bold; font-size: 13px;">Conciliación - Nuevo caso</div>
                  </div>
                  <div style="font-size: 11px; color: var(--color-text-secondary);">20 Nov 2024 - 10:30 AM</div>
                </div>
                <div style="padding: 10px; background: var(--color-bg-6); border-left: 3px solid #f97316; border-radius: var(--radius-base);">
                  <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
                    <i class="fas fa-file-alt" style="color: #f97316;"></i>
                    <div style="font-weight: bold; font-size: 13px;">Revisión de documentos</div>
                  </div>
                  <div style="font-size: 11px; color: var(--color-text-secondary);">22 Nov 2024 - 14:00 PM</div>
                </div>
                <div style="padding: 10px; background: var(--color-bg-1); border-left: 3px solid var(--color-primary); border-radius: var(--radius-base);">
                  <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
                    <i class="fas fa-gavel" style="color: var(--color-primary);"></i>
                    <div style="font-weight: bold; font-size: 13px;">Audiencia - Caso JLC/012/2023</div>
                  </div>
                  <div style="font-size: 11px; color: var(--color-text-secondary);">25 Nov 2024 - 11:00 AM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="card draggable-card mb-20" draggable="true" data-card-id="acciones-rapidas" id="accionesRapidasCard">
          <div class="card-header">
            <h3 class="card-title"><i class="fas fa-bolt"></i> Acciones Rápidas</h3>
            <div class="card-drag-handle"><i class="fas fa-grip-vertical"></i></div>
          </div>
          <div class="card-body">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px;">
              <button class="btn btn--outline" onclick="openEmpresaModal()">
                <i class="fas fa-building"></i> Nueva Empresa
              </button>
              <button class="btn btn--outline" onclick="openAbogadoModal()">
                <i class="fas fa-user-tie"></i> Nuevo Abogado
              </button>
              <button class="btn btn--outline" onclick="openCorresponsalModal()">
                <i class="fas fa-users"></i> Nuevo Corresponsal
              </button>
              <button class="btn btn--outline" onclick="openCasoModal()">
                <i class="fas fa-gavel"></i> Nuevo Caso
              </button>
              <button class="btn btn--primary" onclick="navigateToCatalogos()">
                <i class="fas fa-book"></i> Gestionar Catálogos
              </button>
            </div>
          </div>
        </div>
        
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Resumen de Catálogos</h3>
          </div>
          <div class="card-body">
            <div class="dashboard-grid">
              <div class="stat-card">
                <div class="stat-header">
                  <div>
                    <div class="stat-value">${appData.clientes.length}</div>
                    <div class="stat-label">Empresas</div>
                  </div>
                  <div class="stat-icon blue"><i class="fas fa-building"></i></div>
                </div>
              </div>
              <div class="stat-card">
                <div class="stat-header">
                  <div>
                    <div class="stat-value">${appData.usuarios.filter(u => u.rol === 'abogado').length}</div>
                    <div class="stat-label">Abogados</div>
                  </div>
                  <div class="stat-icon green"><i class="fas fa-user-tie"></i></div>
                </div>
              </div>
              <div class="stat-card">
                <div class="stat-header">
                  <div>
                    <div class="stat-value">${appData.casos.length}</div>
                    <div class="stat-label">Juicios</div>
                  </div>
                  <div class="stat-icon purple"><i class="fas fa-gavel"></i></div>
                </div>
              </div>
              <div class="stat-card">
                <div class="stat-header">
                  <div>
                    <div class="stat-value">${appData.catalogos.competencias.length}</div>
                    <div class="stat-label">Juntas</div>
                  </div>
                  <div class="stat-icon yellow"><i class="fas fa-university"></i></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
      initializeDraggableCards('mesaAyudaCardsGrid');
      
      // Make Acciones Rapidas card draggable separately
      setTimeout(() => {
        const accionesCard = document.getElementById('accionesRapidasCard');
        if (accionesCard && accionesCard.parentElement) {
          new Sortable(accionesCard.parentElement, {
            animation: 150,
            handle: '.card-drag-handle',
            ghostClass: 'dragging'
          });
        }
      }, 100);
      break;
      
    case 'empresas':
      renderEmpresasView(container);
      break;
      
    case 'trabajadores':
      renderTrabajadoresView(container);
      break;
      
    case 'juicios':
      renderView(currentRole, 'dashboard');
      showToast('Vista de Juicios - En desarrollo', 'info');
      break;
      
    case 'nuevo-cliente':
      openEmpresaModal();
      setTimeout(() => renderView(currentRole, 'dashboard'), 100);
      break;
      
    case 'nuevo-expediente':
    case 'nuevo-juicio':
      openCasoModal();
      setTimeout(() => renderView(currentRole, 'dashboard'), 100);
      break;
      
    case 'nuevo-trabajador':
      showToast('Funcionalidad de nuevo trabajador - En desarrollo', 'info');
      setTimeout(() => renderView(currentRole, 'dashboard'), 100);
      break;
      
    case 'citatorios':
      renderCitatoriosView(container);
      break;
      
    case 'documentos':
      renderDocumentosView(container);
      break;
  }
}

// Render Functions
function renderCasosTable(casos, clickeable = false) {
  if (casos.length === 0) {
    return '<p class="text-center">No hay casos para mostrar</p>';
  }
  
  return `
    <table class="table">
      <thead>
        <tr>
          <th>Expediente</th>
          <th>Actor</th>
          <th>Demandado</th>
          <th>Etapa</th>
          <th>Abogado</th>
          <th>Monto</th>
          <th>Status</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        ${casos.map(caso => `
          <tr ${clickeable ? `style="cursor: pointer;" onclick="navigateToCasoDetails('${caso.id}')"` : ''}>
            <td><strong>${caso.expediente}</strong></td>
            <td>${caso.actor}</td>
            <td>${caso.demandado}</td>
            <td>${caso.etapa}</td>
            <td>${caso.abogado}</td>
            <td>$${caso.montoReclamado.toLocaleString()}</td>
            <td><span class="status-badge ${caso.status}">${caso.status}</span></td>
            <td class="table-actions" onclick="event.stopPropagation();">
              <button class="btn btn--sm btn--outline" onclick="viewCaso('${caso.id}')">
                <i class="fas fa-eye"></i>
              </button>
              <button class="btn btn--sm btn--outline" onclick="editCaso('${caso.id}')">
                <i class="fas fa-edit"></i>
              </button>
            </td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}

function renderKanbanBoard(container) {
  const etapas = appData.catalogos.etapas;
  const misCasos = appData.casos.filter(c => c.abogado === currentUser.nombre);
  
  container.innerHTML = `
    <div class="flex justify-between items-center mb-20">
      <h2>Vista Kanban - Mis Casos</h2>
      <button class="btn btn--primary" onclick="openCasoModal()">
        <i class="fas fa-plus"></i> Nuevo Caso
      </button>
    </div>
    
    <div class="kanban-board">
      ${etapas.map(etapa => {
        const casosPorEtapa = misCasos.filter(c => c.etapa === etapa.nombre);
        return `
          <div class="kanban-column">
            <div class="kanban-header">
              <div class="kanban-title">${etapa.nombre}</div>
              <div class="kanban-count">${casosPorEtapa.length}</div>
            </div>
            <div class="kanban-items" data-etapa="${etapa.nombre}">
              ${casosPorEtapa.map(caso => `
                <div class="kanban-card" draggable="true" data-caso-id="${caso.id}">
                  <div style="font-weight: 600; margin-bottom: 8px;">${caso.expediente}</div>
                  <div style="font-size: 12px; color: var(--color-text-secondary); margin-bottom: 4px;">${caso.actor}</div>
                  <div style="font-size: 11px; color: var(--color-text-secondary);">vs ${caso.demandado}</div>
                  <div style="margin-top: 8px; font-weight: 500; color: var(--color-primary);">$${caso.montoReclamado.toLocaleString()}</div>
                </div>
              `).join('')}
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
  
  initializeDragAndDrop();
}

function renderAudienciasCalendar(container) {
  const proximasAudiencias = appData.audiencias.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
  
  container.innerHTML = `
    <div class="flex justify-between items-center mb-20">
      <h2>Calendario de Audiencias</h2>
      <button class="btn btn--primary" onclick="openAudienciaModal()">
        <i class="fas fa-plus"></i> Nueva Audiencia
      </button>
    </div>
    
    <div class="calendar-container">
      ${proximasAudiencias.map(aud => {
        const fecha = new Date(aud.fecha);
        return `
          <div class="calendar-event">
            <div class="event-time">
              <i class="fas fa-clock"></i>
              ${fecha.toLocaleDateString('es-MX', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              - ${fecha.toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' })}
            </div>
            <div class="event-title">${aud.tipo} - Caso ${aud.casoId}</div>
            <div class="event-info">
              <i class="fas fa-university"></i> ${aud.juzgado} - ${aud.sala}
              <br>
              <i class="fas fa-gavel"></i> ${aud.juez}
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function renderEmpresasView(container) {
  container.innerHTML = `
    <div class="flex justify-between items-center mb-20">
      <h2>Gestión de Empresas</h2>
      <button class="btn btn--primary" onclick="openEmpresaModal()">
        <i class="fas fa-plus"></i> Nueva Empresa
      </button>
    </div>
    
    <div class="card">
      <div class="card-body">
        <table class="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>RFC</th>
              <th>Sector</th>
              <th>Casos Activos</th>
              <th>Total Casos</th>
              <th>Contacto</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            ${appData.clientes.map(cliente => `
              <tr>
                <td><strong>${cliente.nombre}</strong></td>
                <td>${cliente.rfc}</td>
                <td>${cliente.sector}</td>
                <td>${cliente.casosActivos}</td>
                <td>${cliente.casosTotales}</td>
                <td>${cliente.contacto}<br><small>${cliente.email}</small></td>
                <td class="table-actions">
                  <button class="btn btn--sm btn--outline" onclick="editCliente(${cliente.id})">
                    <i class="fas fa-edit"></i>
                  </button>
                  <button class="btn btn--sm btn--outline" onclick="deleteCliente(${cliente.id})">
                    <i class="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderAbogadosView(container) {
  const abogados = appData.usuarios.filter(u => u.rol === 'abogado');
  
  container.innerHTML = `
    <div class="flex justify-between items-center mb-20">
      <h2>Gestión de Abogados</h2>
      <button class="btn btn--primary" onclick="openAbogadoModal()">
        <i class="fas fa-plus"></i> Nuevo Abogado
      </button>
    </div>
    
    <div class="dashboard-grid">
      ${abogados.map(abogado => {
        const casosAbogado = appData.casos.filter(c => c.abogado === abogado.nombre);
        return `
          <div class="card">
            <div class="card-body">
              <div style="text-align: center; margin-bottom: 16px;">
                <div class="stat-icon blue" style="margin: 0 auto 12px;">
                  <i class="fas fa-user-tie"></i>
                </div>
                <h3 style="margin-bottom: 4px;">${abogado.nombre}</h3>
                <p style="color: var(--color-text-secondary); font-size: 12px;">${abogado.email}</p>
              </div>
              <div style="display: flex; justify-content: space-around; padding-top: 16px; border-top: 1px solid var(--color-border);">
                <div style="text-align: center;">
                  <div style="font-size: 24px; font-weight: 600; color: var(--color-primary);">${casosAbogado.length}</div>
                  <div style="font-size: 11px; color: var(--color-text-secondary);">Casos Totales</div>
                </div>
                <div style="text-align: center;">
                  <div style="font-size: 24px; font-weight: 600; color: var(--color-success);">${casosAbogado.filter(c => c.status === 'activo').length}</div>
                  <div style="font-size: 11px; color: var(--color-text-secondary);">Activos</div>
                </div>
              </div>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function renderCorresponsalesView(container) {
  container.innerHTML = `
    <div class="flex justify-between items-center mb-20">
      <h2>Corresponsales</h2>
      <button class="btn btn--primary" onclick="openCorresponsalModal()">
        <i class="fas fa-plus"></i> Nuevo Corresponsal
      </button>
    </div>
    
    <div class="card">
      <div class="card-body">
        <table class="table">
          <thead>
            <tr>
              <th>Despacho</th>
              <th>Responsable</th>
              <th>Ciudad</th>
              <th>Teléfono</th>
              <th>Email</th>
              <th>Casos Activos</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Despacho Juárez y Asociados</strong></td>
              <td>Lic. Pedro Juárez</td>
              <td>Guadalajara</td>
              <td>(33) 1234-5678</td>
              <td>contacto@juarez.com</td>
              <td>3</td>
              <td class="table-actions">
                <button class="btn btn--sm btn--outline">
                  <i class="fas fa-eye"></i>
                </button>
                <button class="btn btn--sm btn--outline">
                  <i class="fas fa-edit"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td><strong>Bufete López</strong></td>
              <td>Lic. Carmen López</td>
              <td>Monterrey</td>
              <td>(81) 9876-5432</td>
              <td>info@bufetelopez.com</td>
              <td>2</td>
              <td class="table-actions">
                <button class="btn btn--sm btn--outline">
                  <i class="fas fa-eye"></i>
                </button>
                <button class="btn btn--sm btn--outline">
                  <i class="fas fa-edit"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderEstadisticasView(container) {
  container.innerHTML = `
    <h2 class="mb-20">Estadísticas y Reportes</h2>
    
    <div class="dashboard-grid mb-20">
      <div class="stat-card">
        <div class="stat-header">
          <div>
            <div class="stat-value">156</div>
            <div class="stat-label">Total Casos</div>
          </div>
          <div class="stat-icon blue"><i class="fas fa-gavel"></i></div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-header">
          <div>
            <div class="stat-value">45</div>
            <div class="stat-label">Casos Activos</div>
          </div>
          <div class="stat-icon green"><i class="fas fa-check-circle"></i></div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-header">
          <div>
            <div class="stat-value">12</div>
            <div class="stat-label">Casos Este Mes</div>
          </div>
          <div class="stat-icon yellow"><i class="fas fa-calendar-plus"></i></div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-header">
          <div>
            <div class="stat-value">23</div>
            <div class="stat-label">Audiencias Pendientes</div>
          </div>
          <div class="stat-icon purple"><i class="fas fa-calendar-check"></i></div>
        </div>
      </div>
    </div>
    
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Casos por Etapa</h3>
        </div>
        <div class="card-body">
          <div class="chart-container">
            <canvas id="etapasChart"></canvas>
          </div>
        </div>
      </div>
      
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Casos por Abogado</h3>
        </div>
        <div class="card-body">
          <div class="chart-container">
            <canvas id="abogadosChart"></canvas>
          </div>
        </div>
      </div>
    </div>
  `;
  
  setTimeout(() => {
    const etapasCtx = document.getElementById('etapasChart');
    if (etapasCtx) {
      new Chart(etapasCtx, {
        type: 'doughnut',
        data: {
          labels: appData.catalogos.etapas.map(e => e.nombre),
          datasets: [{
            data: [2, 1, 3, 1, 0],
            backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F']
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          plugins: { legend: { position: 'bottom' } }
        }
      });
    }
    
    const abogadosCtx = document.getElementById('abogadosChart');
    if (abogadosCtx) {
      const abogados = appData.usuarios.filter(u => u.rol === 'abogado');
      new Chart(abogadosCtx, {
        type: 'bar',
        data: {
          labels: abogados.map(a => a.nombre.split(' ')[0]),
          datasets: [{
            label: 'Casos',
            data: abogados.map(a => appData.casos.filter(c => c.abogado === a.nombre).length),
            backgroundColor: '#1FB8CD'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          plugins: { legend: { display: false } },
          scales: { y: { beginAtZero: true } }
        }
      });
    }
  }, 100);
}

function renderPlazosView(container) {
  container.innerHTML = `
    <h2 class="mb-20">Control de Plazos</h2>
    
    <div class="card mb-20">
      <div class="card-header">
        <h3 class="card-title">Próximos Vencimientos</h3>
        <button class="btn btn--primary btn--sm">
          <i class="fas fa-plus"></i> Nuevo Plazo
        </button>
      </div>
      <div class="card-body">
        <table class="table">
          <thead>
            <tr>
              <th>Caso</th>
              <th>Descripción</th>
              <th>Fecha Vencimiento</th>
              <th>Días Restantes</th>
              <th>Prioridad</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>JLC/001/2023</strong></td>
              <td>Presentar contestación de demanda</td>
              <td>15 Nov 2024</td>
              <td><span class="status-badge pendiente">2 días</span></td>
              <td><span class="status-badge pendiente">Alta</span></td>
              <td class="table-actions">
                <button class="btn btn--sm btn--outline">
                  <i class="fas fa-check"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td><strong>JLC/002/2023</strong></td>
              <td>Ofrecimiento de pruebas</td>
              <td>20 Nov 2024</td>
              <td><span class="status-badge activo">7 días</span></td>
              <td><span class="status-badge activo">Media</span></td>
              <td class="table-actions">
                <button class="btn btn--sm btn--outline">
                  <i class="fas fa-check"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td><strong>JLC/003/2023</strong></td>
              <td>Presentar alegatos</td>
              <td>30 Nov 2024</td>
              <td><span class="status-badge activo">17 días</span></td>
              <td><span class="status-badge activo">Media</span></td>
              <td class="table-actions">
                <button class="btn btn--sm btn--outline">
                  <i class="fas fa-check"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderAjustesView(container) {
  container.innerHTML = `
    <h2 class="mb-20">Configuración del Sistema</h2>
    
    <div class="card mb-20">
      <div class="card-header">
        <h3 class="card-title">Perfil de Usuario</h3>
      </div>
      <div class="card-body">
        <form>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
            <div class="form-group">
              <label class="form-label">Nombre</label>
              <input type="text" class="form-control" value="${currentUser.nombre}">
            </div>
            <div class="form-group">
              <label class="form-label">Email</label>
              <input type="email" class="form-control" value="${currentUser.email || ''}">
            </div>
            <div class="form-group">
              <label class="form-label">Teléfono</label>
              <input type="tel" class="form-control" placeholder="(55) 1234-5678">
            </div>
            <div class="form-group">
              <label class="form-label">Rol</label>
              <input type="text" class="form-control" value="${getRoleName(currentUser.rol)}" disabled>
            </div>
          </div>
          <button type="button" class="btn btn--primary" onclick="showToast('Perfil actualizado', 'success')">
            <i class="fas fa-save"></i> Guardar Cambios
          </button>
        </form>
      </div>
    </div>
    
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">Cambiar Contraseña</h3>
      </div>
      <div class="card-body">
        <form>
          <div class="form-group">
            <label class="form-label">Contraseña Actual</label>
            <input type="password" class="form-control">
          </div>
          <div class="form-group">
            <label class="form-label">Nueva Contraseña</label>
            <input type="password" class="form-control">
          </div>
          <div class="form-group">
            <label class="form-label">Confirmar Contraseña</label>
            <input type="password" class="form-control">
          </div>
          <button type="button" class="btn btn--primary" onclick="showToast('Contraseña actualizada', 'success')">
            <i class="fas fa-key"></i> Cambiar Contraseña
          </button>
        </form>
      </div>
    </div>
  `;
}

function renderPlantillasView(container) {
  container.innerHTML = `
    <h2 class="mb-20">Plantillas de Documentos</h2>
    
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">Plantillas Disponibles</h3>
        <button class="btn btn--primary btn--sm">
          <i class="fas fa-plus"></i> Nueva Plantilla
        </button>
      </div>
      <div class="card-body">
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 16px;">
          <div class="card">
            <div class="card-body" style="text-align: center;">
              <div style="font-size: 48px; color: var(--color-primary); margin-bottom: 12px;">
                <i class="fas fa-file-word"></i>
              </div>
              <h4>Demanda Inicial</h4>
              <p style="font-size: 12px; color: var(--color-text-secondary);">Plantilla base para demanda laboral</p>
              <button class="btn btn--outline btn--sm" style="margin-top: 12px;">
                <i class="fas fa-download"></i> Descargar
              </button>
            </div>
          </div>
          <div class="card">
            <div class="card-body" style="text-align: center;">
              <div style="font-size: 48px; color: var(--color-success); margin-bottom: 12px;">
                <i class="fas fa-file-alt"></i>
              </div>
              <h4>Contestación</h4>
              <p style="font-size: 12px; color: var(--color-text-secondary);">Contestación de demanda</p>
              <button class="btn btn--outline btn--sm" style="margin-top: 12px;">
                <i class="fas fa-download"></i> Descargar
              </button>
            </div>
          </div>
          <div class="card">
            <div class="card-body" style="text-align: center;">
              <div style="font-size: 48px; color: var(--color-warning); margin-bottom: 12px;">
                <i class="fas fa-file-pdf"></i>
              </div>
              <h4>Ofrecimiento Pruebas</h4>
              <p style="font-size: 12px; color: var(--color-text-secondary);">Escrito de pruebas</p>
              <button class="btn btn--outline btn--sm" style="margin-top: 12px;">
                <i class="fas fa-download"></i> Descargar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderArchivosView(container) {
  container.innerHTML = `
    <h2 class="mb-20">Archivo de Documentos</h2>
    
    <div class="card mb-20">
      <div class="card-body">
        <div style="display: flex; gap: 12px; align-items: center;">
          <input type="text" class="form-control" placeholder="Buscar documentos..." style="flex: 1;">
          <button class="btn btn--primary">
            <i class="fas fa-upload"></i> Subir Archivo
          </button>
        </div>
      </div>
    </div>
    
    <div class="card">
      <div class="card-body">
        <table class="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Tipo</th>
              <th>Tamaño</th>
              <th>Fecha</th>
              <th>Caso</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><i class="fas fa-file-pdf" style="color: var(--color-error);"></i> Demanda_JLC001.pdf</td>
              <td>PDF</td>
              <td>2.5 MB</td>
              <td>15 Oct 2024</td>
              <td>JLC/001/2023</td>
              <td class="table-actions">
                <button class="btn btn--sm btn--outline">
                  <i class="fas fa-download"></i>
                </button>
                <button class="btn btn--sm btn--outline">
                  <i class="fas fa-eye"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td><i class="fas fa-file-word" style="color: var(--color-primary);"></i> Contestacion_JLC002.docx</td>
              <td>Word</td>
              <td>1.8 MB</td>
              <td>18 Oct 2024</td>
              <td>JLC/002/2023</td>
              <td class="table-actions">
                <button class="btn btn--sm btn--outline">
                  <i class="fas fa-download"></i>
                </button>
                <button class="btn btn--sm btn--outline">
                  <i class="fas fa-eye"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderAbogadosAsignadosView(container) {
  const abogados = appData.usuarios.filter(u => u.rol === 'abogado').slice(0, 3);
  
  container.innerHTML = `
    <h2 class="mb-20">Abogados Asignados</h2>
    
    <div class="dashboard-grid">
      ${abogados.map(abogado => `
        <div class="card">
          <div class="card-body">
            <div style="text-align: center; margin-bottom: 16px;">
              <div class="stat-icon blue" style="margin: 0 auto 12px;">
                <i class="fas fa-user-tie"></i>
              </div>
              <h3 style="margin-bottom: 4px;">${abogado.nombre}</h3>
              <p style="color: var(--color-text-secondary); font-size: 12px;">${abogado.email}</p>
            </div>
            <div style="padding-top: 16px; border-top: 1px solid var(--color-border);">
              <button class="btn btn--outline btn--sm btn--full-width" style="margin-bottom: 8px;">
                <i class="fas fa-envelope"></i> Enviar Mensaje
              </button>
              <button class="btn btn--outline btn--sm btn--full-width">
                <i class="fas fa-phone"></i> Contactar
              </button>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function renderMensajesView(container) {
  container.innerHTML = `
    <h2 class="mb-20">Mensajes</h2>
    
    <div style="display: grid; grid-template-columns: 300px 1fr; gap: 20px; height: 600px;">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Conversaciones</h3>
        </div>
        <div class="card-body" style="padding: 0; overflow-y: auto;">
          <div style="padding: 12px; border-bottom: 1px solid var(--color-border); cursor: pointer; background: var(--color-bg-1);">
            <div style="font-weight: bold; font-size: 13px;">María González</div>
            <div style="font-size: 11px; color: var(--color-text-secondary);">Actualización del caso...</div>
          </div>
          <div style="padding: 12px; border-bottom: 1px solid var(--color-border); cursor: pointer;">
            <div style="font-weight: bold; font-size: 13px;">Juan Pérez</div>
            <div style="font-size: 11px; color: var(--color-text-secondary);">Documentos adjuntos</div>
          </div>
          <div style="padding: 12px; border-bottom: 1px solid var(--color-border); cursor: pointer;">
            <div style="font-weight: bold; font-size: 13px;">Sistema</div>
            <div style="font-size: 11px; color: var(--color-text-secondary);">Notificación automática</div>
          </div>
        </div>
      </div>
      
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">María González</h3>
        </div>
        <div class="card-body" style="display: flex; flex-direction: column; height: 100%;">
          <div style="flex: 1; overflow-y: auto; margin-bottom: 16px;">
            <div style="padding: 12px; background: var(--color-bg-1); border-radius: var(--radius-base); margin-bottom: 12px; max-width: 70%;">
              <div style="font-size: 13px;">Hola, te envío la actualización del caso JLC/001/2023</div>
              <div style="font-size: 10px; color: var(--color-text-secondary); margin-top: 4px;">10:30 AM</div>
            </div>
            <div style="padding: 12px; background: var(--color-primary); color: var(--color-btn-primary-text); border-radius: var(--radius-base); margin-bottom: 12px; max-width: 70%; margin-left: auto;">
              <div style="font-size: 13px;">Perfecto, muchas gracias</div>
              <div style="font-size: 10px; opacity: 0.8; margin-top: 4px;">10:35 AM</div>
            </div>
          </div>
          <div style="display: flex; gap: 8px;">
            <input type="text" class="form-control" placeholder="Escribe un mensaje...">
            <button class="btn btn--primary">
              <i class="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderContratosView(container) {
  container.innerHTML = `
    <h2 class="mb-20">Contratos</h2>
    
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">Mis Contratos</h3>
        <button class="btn btn--primary btn--sm">
          <i class="fas fa-upload"></i> Subir Contrato
        </button>
      </div>
      <div class="card-body">
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 16px;">
          <div class="card">
            <div class="card-body">
              <div style="font-size: 36px; color: var(--color-primary); margin-bottom: 12px;">
                <i class="fas fa-file-contract"></i>
              </div>
              <h4>Contrato de Servicio</h4>
              <p style="font-size: 12px; color: var(--color-text-secondary); margin-bottom: 12px;">Firmado: 15 Ene 2023</p>
              <div style="display: flex; gap: 8px;">
                <button class="btn btn--outline btn--sm" style="flex: 1;">
                  <i class="fas fa-eye"></i> Ver
                </button>
                <button class="btn btn--outline btn--sm" style="flex: 1;">
                  <i class="fas fa-download"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderPerfilEmpresaView(container) {
  container.innerHTML = `
    <h2 class="mb-20">Perfil de Empresa</h2>
    
    <div class="card mb-20">
      <div class="card-header">
        <h3 class="card-title">Información General</h3>
      </div>
      <div class="card-body">
        <form>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
            <div class="form-group">
              <label class="form-label">Razón Social</label>
              <input type="text" class="form-control" value="Empresa Cliente A">
            </div>
            <div class="form-group">
              <label class="form-label">RFC</label>
              <input type="text" class="form-control" value="ECA950715ABC">
            </div>
            <div class="form-group">
              <label class="form-label">Sector</label>
              <input type="text" class="form-control" value="Servicios">
            </div>
            <div class="form-group">
              <label class="form-label">Teléfono</label>
              <input type="tel" class="form-control" value="(55) 1234-5678">
            </div>
            <div class="form-group">
              <label class="form-label">Email</label>
              <input type="email" class="form-control" value="contacto@empresaa.com">
            </div>
            <div class="form-group">
              <label class="form-label">Representante Legal</label>
              <input type="text" class="form-control" value="Juan Director">
            </div>
          </div>
          <button type="button" class="btn btn--primary" onclick="showToast('Perfil actualizado', 'success')">
            <i class="fas fa-save"></i> Guardar Cambios
          </button>
        </form>
      </div>
    </div>
  `;
}

function renderCitatoriosView(container) {
  container.innerHTML = `
    <h2 class="mb-20">Citatorios y Conciliaciones</h2>
    
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">Próximos Citatorios</h3>
        <button class="btn btn--primary btn--sm">
          <i class="fas fa-plus"></i> Nuevo Citatorio
        </button>
      </div>
      <div class="card-body">
        <table class="table">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Caso</th>
              <th>Tipo</th>
              <th>Lugar</th>
              <th>Status</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>15 Nov 2024</td>
              <td>10:00 AM</td>
              <td>JLC/001/2023</td>
              <td>Conciliación</td>
              <td>Centro de Conciliación</td>
              <td><span class="status-badge pendiente">Pendiente</span></td>
              <td class="table-actions">
                <button class="btn btn--sm btn--outline">
                  <i class="fas fa-eye"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td>18 Nov 2024</td>
              <td>11:30 AM</td>
              <td>JLC/002/2023</td>
              <td>Citatorio</td>
              <td>Junta Local</td>
              <td><span class="status-badge pendiente">Pendiente</span></td>
              <td class="table-actions">
                <button class="btn btn--sm btn--outline">
                  <i class="fas fa-eye"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderDocumentosView(container) {
  container.innerHTML = `
    <h2 class="mb-20">Gestión de Documentos</h2>
    
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">Documentos del Sistema</h3>
        <button class="btn btn--primary btn--sm">
          <i class="fas fa-upload"></i> Subir Documento
        </button>
      </div>
      <div class="card-body">
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 16px;">
          ${['Contrato de Trabajo', 'Recibos de Nómina', 'Carta de Despido', 'Horas Extras', 'Demanda Inicial'].map((doc, i) => `
            <div class="card draggable-card" draggable="true" data-card-id="doc-${i}">
              <div class="card-body" style="text-align: center;">
                <div class="card-drag-handle"><i class="fas fa-grip-vertical"></i></div>
                <div style="font-size: 36px; color: var(--color-primary); margin-bottom: 8px;">
                  <i class="fas fa-file-pdf"></i>
                </div>
                <h5 style="font-size: 13px; margin-bottom: 8px;">${doc}</h5>
                <p style="font-size: 11px; color: var(--color-text-secondary); margin-bottom: 12px;">PDF - 2.5 MB</p>
                <button class="btn btn--outline btn--sm btn--full-width">
                  <i class="fas fa-download"></i> Descargar
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
  
  initializeDraggableCards('documentosGrid');
}

function renderTrabajadoresView(container) {
  container.innerHTML = `
    <div class="flex justify-between items-center mb-20">
      <h2>Gestión de Trabajadores</h2>
      <button class="btn btn--primary" onclick="showToast('Funcionalidad en desarrollo', 'info')">
        <i class="fas fa-plus"></i> Nuevo Trabajador
      </button>
    </div>
    
    <div class="card">
      <div class="card-body">
        <table class="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Empresa</th>
              <th>Puesto</th>
              <th>Status</th>
              <th>Casos Relacionados</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Juan Pérez López</strong></td>
              <td>Constructora Mexicana</td>
              <td>Obrero</td>
              <td><span class="status-badge activo">Activo</span></td>
              <td>1</td>
              <td class="table-actions">
                <button class="btn btn--sm btn--outline">
                  <i class="fas fa-eye"></i>
                </button>
                <button class="btn btn--sm btn--outline">
                  <i class="fas fa-edit"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td><strong>Ana Martínez Cruz</strong></td>
              <td>Textiles del Norte</td>
              <td>Supervisor</td>
              <td><span class="status-badge activo">Activo</span></td>
              <td>1</td>
              <td class="table-actions">
                <button class="btn btn--sm btn--outline">
                  <i class="fas fa-eye"></i>
                </button>
                <button class="btn btn--sm btn--outline">
                  <i class="fas fa-edit"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td><strong>Carlos Ramírez Soto</strong></td>
              <td>Servicios Corporativos XYZ</td>
              <td>Gerente</td>
              <td><span class="status-badge cerrado">Inactivo</span></td>
              <td>1</td>
              <td class="table-actions">
                <button class="btn btn--sm btn--outline">
                  <i class="fas fa-eye"></i>
                </button>
                <button class="btn btn--sm btn--outline">
                  <i class="fas fa-edit"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderCatalogoEtapas(container) {
  container.innerHTML = `
    <div class="flex justify-between items-center mb-20">
      <h2>Catálogo de Etapas</h2>
      <button class="btn btn--primary" onclick="openEtapaModal()">
        <i class="fas fa-plus"></i> Nueva Etapa
      </button>
    </div>
    
    <div class="card">
      <div class="card-body">
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            ${appData.catalogos.etapas.map(etapa => `
              <tr>
                <td>${etapa.id}</td>
                <td><strong>${etapa.nombre}</strong></td>
                <td>${etapa.descripcion}</td>
                <td><span class="status-badge ${etapa.activo ? 'activo' : 'cerrado'}">${etapa.activo ? 'Activo' : 'Inactivo'}</span></td>
                <td class="table-actions">
                  <button class="btn btn--sm btn--outline" onclick="editEtapa(${etapa.id})">
                    <i class="fas fa-edit"></i>
                  </button>
                  <button class="btn btn--sm btn--outline" onclick="deleteEtapa(${etapa.id})">
                    <i class="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderCatalogoCompetencias(container) {
  container.innerHTML = `
    <div class="flex justify-between items-center mb-20">
      <h2>Catálogo de Competencias</h2>
      <button class="btn btn--primary" onclick="openCompetenciaModal()">
        <i class="fas fa-plus"></i> Nueva Competencia
      </button>
    </div>
    
    <div class="card">
      <div class="card-body">
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Ciudad</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            ${appData.catalogos.competencias.map(comp => `
              <tr>
                <td>${comp.id}</td>
                <td><strong>${comp.nombre}</strong></td>
                <td>${comp.ciudad}</td>
                <td><span class="status-badge ${comp.activo ? 'activo' : 'cerrado'}">${comp.activo ? 'Activo' : 'Inactivo'}</span></td>
                <td class="table-actions">
                  <button class="btn btn--sm btn--outline" onclick="editCompetencia(${comp.id})">
                    <i class="fas fa-edit"></i>
                  </button>
                  <button class="btn btn--sm btn--outline" onclick="deleteCompetencia(${comp.id})">
                    <i class="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderCatalogoTiposAudiencia(container) {
  container.innerHTML = `
    <div class="flex justify-between items-center mb-20">
      <h2>Catálogo de Tipos de Audiencia</h2>
      <button class="btn btn--primary" onclick="openTipoAudienciaModal()">
        <i class="fas fa-plus"></i> Nuevo Tipo
      </button>
    </div>
    
    <div class="card">
      <div class="card-body">
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            ${appData.catalogos.tiposAudiencia.map(tipo => `
              <tr>
                <td>${tipo.id}</td>
                <td><strong>${tipo.nombre}</strong></td>
                <td>${tipo.descripcion}</td>
                <td><span class="status-badge ${tipo.activo ? 'activo' : 'cerrado'}">${tipo.activo ? 'Activo' : 'Inactivo'}</span></td>
                <td class="table-actions">
                  <button class="btn btn--sm btn--outline" onclick="editTipoAudiencia(${tipo.id})">
                    <i class="fas fa-edit"></i>
                  </button>
                  <button class="btn btn--sm btn--outline" onclick="deleteTipoAudiencia(${tipo.id})">
                    <i class="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// Charts
function renderEmpresasChart() {
  setTimeout(() => {
    const ctx = document.getElementById('empresasChart');
    if (!ctx) return;
    
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Constructora Mexicana', 'Textiles del Norte', 'Servicios XYZ', 'Manufacturas del Sur', 'Servicios ABC'],
        datasets: [{
          label: 'Casos por Empresa',
          data: [12, 8, 15, 6, 9],
          backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }, 100);
}

function renderCasosClienteChart() {
  setTimeout(() => {
    const ctx = document.getElementById('casosClienteChart');
    if (!ctx) return;
    
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Activos', 'En Conciliación', 'Cerrados', 'Pendientes'],
        datasets: [{
          data: [7, 2, 2, 1],
          backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            position: 'bottom'
          }
        }
      }
    });
  }, 100);
}

// Drag and Drop para Kanban
function initializeDragAndDrop() {
  const columns = document.querySelectorAll('.kanban-items');
  
  columns.forEach(column => {
    new Sortable(column, {
      group: 'kanban',
      animation: 150,
      ghostClass: 'dragging',
      onEnd: function(evt) {
        const casoId = evt.item.dataset.casoId;
        const nuevaEtapa = evt.to.dataset.etapa;
        
        const caso = appData.casos.find(c => c.id === casoId);
        if (caso) {
          caso.etapa = nuevaEtapa;
          showToast(`Caso ${casoId} movido a ${nuevaEtapa}`, 'success');
        }
      }
    });
  });
}

// Drag and Drop para tarjetas de dashboard
function initializeDraggableCards(gridId) {
  setTimeout(() => {
    const grid = document.getElementById(gridId);
    if (!grid) return;
    
    new Sortable(grid, {
      animation: 150,
      handle: '.card-drag-handle',
      ghostClass: 'dragging',
      onEnd: function(evt) {
        showToast('Tarjetas reorganizadas', 'success');
      }
    });
  }, 100);
}

// Filter Functions
function filterCasos() {
  const searchTerm = document.getElementById('searchCasos').value.toLowerCase();
  const filterEtapa = document.getElementById('filterEtapa').value;
  const filterStatus = document.getElementById('filterStatus').value;
  
  let filtered = appData.casos.filter(caso => {
    const matchSearch = !searchTerm || 
      caso.expediente.toLowerCase().includes(searchTerm) ||
      caso.actor.toLowerCase().includes(searchTerm) ||
      caso.demandado.toLowerCase().includes(searchTerm);
    
    const matchEtapa = !filterEtapa || caso.etapa === filterEtapa;
    const matchStatus = !filterStatus || caso.status === filterStatus;
    
    return matchSearch && matchEtapa && matchStatus;
  });
  
  document.getElementById('casosTableContainer').innerHTML = renderCasosTable(filtered);
}

// Modal Functions
function openCasoModal(casoId = null) {
  const caso = casoId ? appData.casos.find(c => c.id === casoId) : null;
  const isEdit = !!caso;
  
  const modalHTML = `
    <div class="modal-overlay" onclick="closeModal(event)">
      <div class="modal" onclick="event.stopPropagation()">
        <div class="modal-header">
          <h3 class="modal-title">${isEdit ? 'Editar' : 'Nuevo'} Caso</h3>
          <button class="btn-icon" onclick="closeModal()">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div class="modal-body">
          <form id="casoForm">
            <div class="form-group">
              <label class="form-label">Expediente</label>
              <input type="text" class="form-control" name="expediente" value="${caso?.expediente || ''}" required>
            </div>
            <div class="form-group">
              <label class="form-label">Actor</label>
              <input type="text" class="form-control" name="actor" value="${caso?.actor || ''}" required>
            </div>
            <div class="form-group">
              <label class="form-label">Demandado</label>
              <input type="text" class="form-control" name="demandado" value="${caso?.demandado || ''}" required>
            </div>
            <div class="form-group">
              <label class="form-label">Etapa</label>
              <select class="form-control" name="etapa" required>
                ${appData.catalogos.etapas.map(e => 
                  `<option value="${e.nombre}" ${caso?.etapa === e.nombre ? 'selected' : ''}>${e.nombre}</option>`
                ).join('')}
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Competencia</label>
              <select class="form-control" name="competencia" required>
                ${appData.catalogos.competencias.map(c => 
                  `<option value="${c.nombre}" ${caso?.competencia === c.nombre ? 'selected' : ''}>${c.nombre}</option>`
                ).join('')}
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Monto Reclamado</label>
              <input type="number" class="form-control" name="montoReclamado" value="${caso?.montoReclamado || ''}" required>
            </div>
            <div class="form-group">
              <label class="form-label">Abogado</label>
              <select class="form-control" name="abogado" required>
                ${appData.usuarios.filter(u => u.rol === 'abogado').map(a => 
                  `<option value="${a.nombre}" ${caso?.abogado === a.nombre ? 'selected' : ''}>${a.nombre}</option>`
                ).join('')}
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Cliente</label>
              <input type="text" class="form-control" name="cliente" value="${caso?.cliente || ''}" required>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button class="btn btn--secondary" onclick="closeModal()">Cancelar</button>
          <button class="btn btn--primary" onclick="saveCaso('${casoId || ''}')">
            <i class="fas fa-save"></i> Guardar
          </button>
        </div>
      </div>
    </div>
  `;
  
  document.getElementById('modalContainer').innerHTML = modalHTML;
}

function openEtapaModal(etapaId = null) {
  const etapa = etapaId ? appData.catalogos.etapas.find(e => e.id === etapaId) : null;
  const isEdit = !!etapa;
  
  const modalHTML = `
    <div class="modal-overlay" onclick="closeModal(event)">
      <div class="modal" onclick="event.stopPropagation()">
        <div class="modal-header">
          <h3 class="modal-title">${isEdit ? 'Editar' : 'Nueva'} Etapa</h3>
          <button class="btn-icon" onclick="closeModal()">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div class="modal-body">
          <form id="etapaForm">
            <div class="form-group">
              <label class="form-label">Nombre</label>
              <input type="text" class="form-control" name="nombre" value="${etapa?.nombre || ''}" required>
            </div>
            <div class="form-group">
              <label class="form-label">Descripción</label>
              <textarea class="form-control" name="descripcion" rows="3" required>${etapa?.descripcion || ''}</textarea>
            </div>
            <div class="form-group">
              <label class="form-label">
                <input type="checkbox" name="activo" ${etapa?.activo !== false ? 'checked' : ''}>
                Activo
              </label>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button class="btn btn--secondary" onclick="closeModal()">Cancelar</button>
          <button class="btn btn--primary" onclick="saveEtapa(${etapaId || 'null'})">
            <i class="fas fa-save"></i> Guardar
          </button>
        </div>
      </div>
    </div>
  `;
  
  document.getElementById('modalContainer').innerHTML = modalHTML;
}

function openCompetenciaModal(compId = null) {
  const comp = compId ? appData.catalogos.competencias.find(c => c.id === compId) : null;
  const isEdit = !!comp;
  
  const modalHTML = `
    <div class="modal-overlay" onclick="closeModal(event)">
      <div class="modal" onclick="event.stopPropagation()">
        <div class="modal-header">
          <h3 class="modal-title">${isEdit ? 'Editar' : 'Nueva'} Competencia</h3>
          <button class="btn-icon" onclick="closeModal()">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div class="modal-body">
          <form id="competenciaForm">
            <div class="form-group">
              <label class="form-label">Nombre</label>
              <input type="text" class="form-control" name="nombre" value="${comp?.nombre || ''}" required>
            </div>
            <div class="form-group">
              <label class="form-label">Ciudad</label>
              <input type="text" class="form-control" name="ciudad" value="${comp?.ciudad || ''}" required>
            </div>
            <div class="form-group">
              <label class="form-label">
                <input type="checkbox" name="activo" ${comp?.activo !== false ? 'checked' : ''}>
                Activo
              </label>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button class="btn btn--secondary" onclick="closeModal()">Cancelar</button>
          <button class="btn btn--primary" onclick="saveCompetencia(${compId || 'null'})">
            <i class="fas fa-save"></i> Guardar
          </button>
        </div>
      </div>
    </div>
  `;
  
  document.getElementById('modalContainer').innerHTML = modalHTML;
}

function openTipoAudienciaModal(tipoId = null) {
  const tipo = tipoId ? appData.catalogos.tiposAudiencia.find(t => t.id === tipoId) : null;
  const isEdit = !!tipo;
  
  const modalHTML = `
    <div class="modal-overlay" onclick="closeModal(event)">
      <div class="modal" onclick="event.stopPropagation()">
        <div class="modal-header">
          <h3 class="modal-title">${isEdit ? 'Editar' : 'Nuevo'} Tipo de Audiencia</h3>
          <button class="btn-icon" onclick="closeModal()">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div class="modal-body">
          <form id="tipoAudienciaForm">
            <div class="form-group">
              <label class="form-label">Nombre</label>
              <input type="text" class="form-control" name="nombre" value="${tipo?.nombre || ''}" required>
            </div>
            <div class="form-group">
              <label class="form-label">Descripción</label>
              <textarea class="form-control" name="descripcion" rows="3" required>${tipo?.descripcion || ''}</textarea>
            </div>
            <div class="form-group">
              <label class="form-label">
                <input type="checkbox" name="activo" ${tipo?.activo !== false ? 'checked' : ''}>
                Activo
              </label>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button class="btn btn--secondary" onclick="closeModal()">Cancelar</button>
          <button class="btn btn--primary" onclick="saveTipoAudiencia(${tipoId || 'null'})">
            <i class="fas fa-save"></i> Guardar
          </button>
        </div>
      </div>
    </div>
  `;
  
  document.getElementById('modalContainer').innerHTML = modalHTML;
}

function openAbogadoModal(abogadoId = null) {
  const abogado = abogadoId ? appData.usuarios.find(u => u.id === abogadoId) : null;
  const isEdit = !!abogado;
  
  const modalHTML = `
    <div class="modal-overlay" onclick="closeModal(event)">
      <div class="modal" onclick="event.stopPropagation()">
        <div class="modal-header">
          <h3 class="modal-title">${isEdit ? 'Editar' : 'Nuevo'} Abogado</h3>
          <button class="btn-icon" onclick="closeModal()">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div class="modal-body">
          <form id="abogadoForm">
            <div class="form-group">
              <label class="form-label">Nombre Completo</label>
              <input type="text" class="form-control" name="nombre" value="${abogado?.nombre || ''}" required>
            </div>
            <div class="form-group">
              <label class="form-label">Email</label>
              <input type="email" class="form-control" name="email" value="${abogado?.email || ''}" required>
            </div>
            <div class="form-group">
              <label class="form-label">Cédula Profesional</label>
              <input type="text" class="form-control" name="cedula" required>
            </div>
            <div class="form-group">
              <label class="form-label">Especialidad</label>
              <input type="text" class="form-control" name="especialidad" value="Derecho Laboral" required>
            </div>
            <div class="form-group">
              <label class="form-label">Teléfono</label>
              <input type="tel" class="form-control" name="telefono" required>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button class="btn btn--secondary" onclick="closeModal()">Cancelar</button>
          <button class="btn btn--primary" onclick="saveAbogado(${abogadoId || 'null'})">
            <i class="fas fa-save"></i> Guardar
          </button>
        </div>
      </div>
    </div>
  `;
  
  document.getElementById('modalContainer').innerHTML = modalHTML;
}

function saveAbogado(abogadoId) {
  const form = document.getElementById('abogadoForm');
  const formData = new FormData(form);
  
  const abogadoData = {
    id: abogadoId || appData.usuarios.length + 1,
    nombre: formData.get('nombre'),
    email: formData.get('email'),
    rol: 'abogado'
  };
  
  if (abogadoId) {
    const index = appData.usuarios.findIndex(u => u.id === abogadoId);
    appData.usuarios[index] = { ...appData.usuarios[index], ...abogadoData };
    showToast('Abogado actualizado exitosamente', 'success');
  } else {
    appData.usuarios.push(abogadoData);
    showToast('Abogado registrado exitosamente', 'success');
  }
  
  closeModal();
  renderView(currentRole, currentView);
}

function openCorresponsalModal() {
  const modalHTML = `
    <div class="modal-overlay" onclick="closeModal(event)">
      <div class="modal" onclick="event.stopPropagation()">
        <div class="modal-header">
          <h3 class="modal-title">Nuevo Corresponsal</h3>
          <button class="btn-icon" onclick="closeModal()">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div class="modal-body">
          <form id="corresponsalForm">
            <div class="form-group">
              <label class="form-label">Nombre del Despacho</label>
              <input type="text" class="form-control" name="nombre" required>
            </div>
            <div class="form-group">
              <label class="form-label">Responsable</label>
              <input type="text" class="form-control" name="responsable" required>
            </div>
            <div class="form-group">
              <label class="form-label">Ciudad</label>
              <input type="text" class="form-control" name="ciudad" required>
            </div>
            <div class="form-group">
              <label class="form-label">Teléfono</label>
              <input type="tel" class="form-control" name="telefono" required>
            </div>
            <div class="form-group">
              <label class="form-label">Email</label>
              <input type="email" class="form-control" name="email" required>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button class="btn btn--secondary" onclick="closeModal()">Cancelar</button>
          <button class="btn btn--primary" onclick="saveCorresponsal()">
            <i class="fas fa-save"></i> Guardar
          </button>
        </div>
      </div>
    </div>
  `;
  
  document.getElementById('modalContainer').innerHTML = modalHTML;
}

function saveCorresponsal() {
  showToast('Corresponsal registrado exitosamente', 'success');
  closeModal();
  renderView(currentRole, currentView);
}

function openEmpresaModal(clienteId = null) {
  const cliente = clienteId ? appData.clientes.find(c => c.id === clienteId) : null;
  const isEdit = !!cliente;
  
  const modalHTML = `
    <div class="modal-overlay" onclick="closeModal(event)">
      <div class="modal" onclick="event.stopPropagation()">
        <div class="modal-header">
          <h3 class="modal-title">${isEdit ? 'Editar' : 'Nueva'} Empresa</h3>
          <button class="btn-icon" onclick="closeModal()">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div class="modal-body">
          <form id="empresaForm">
            <div class="form-group">
              <label class="form-label">Nombre</label>
              <input type="text" class="form-control" name="nombre" value="${cliente?.nombre || ''}" required>
            </div>
            <div class="form-group">
              <label class="form-label">RFC</label>
              <input type="text" class="form-control" name="rfc" value="${cliente?.rfc || ''}" required>
            </div>
            <div class="form-group">
              <label class="form-label">Sector</label>
              <input type="text" class="form-control" name="sector" value="${cliente?.sector || ''}" required>
            </div>
            <div class="form-group">
              <label class="form-label">Contacto</label>
              <input type="text" class="form-control" name="contacto" value="${cliente?.contacto || ''}" required>
            </div>
            <div class="form-group">
              <label class="form-label">Email</label>
              <input type="email" class="form-control" name="email" value="${cliente?.email || ''}" required>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button class="btn btn--secondary" onclick="closeModal()">Cancelar</button>
          <button class="btn btn--primary" onclick="saveEmpresa(${clienteId || 'null'})">
            <i class="fas fa-save"></i> Guardar
          </button>
        </div>
      </div>
    </div>
  `;
  
  document.getElementById('modalContainer').innerHTML = modalHTML;
}

function openAudienciaModal() {
  const modalHTML = `
    <div class="modal-overlay" onclick="closeModal(event)">
      <div class="modal" onclick="event.stopPropagation()">
        <div class="modal-header">
          <h3 class="modal-title">Nueva Audiencia</h3>
          <button class="btn-icon" onclick="closeModal()">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div class="modal-body">
          <form id="audienciaForm">
            <div class="form-group">
              <label class="form-label">Caso</label>
              <select class="form-control" name="casoId" required>
                ${appData.casos.map(c => `<option value="${c.id}">${c.expediente} - ${c.actor}</option>`).join('')}
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Tipo</label>
              <select class="form-control" name="tipo" required>
                ${appData.catalogos.tiposAudiencia.map(t => `<option value="${t.nombre}">${t.nombre}</option>`).join('')}
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Fecha y Hora</label>
              <input type="datetime-local" class="form-control" name="fecha" required>
            </div>
            <div class="form-group">
              <label class="form-label">Juzgado</label>
              <select class="form-control" name="juzgado" required>
                ${appData.catalogos.competencias.map(c => `<option value="${c.nombre}">${c.nombre}</option>`).join('')}
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Sala</label>
              <input type="text" class="form-control" name="sala" required>
            </div>
            <div class="form-group">
              <label class="form-label">Juez</label>
              <input type="text" class="form-control" name="juez" required>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button class="btn btn--secondary" onclick="closeModal()">Cancelar</button>
          <button class="btn btn--primary" onclick="saveAudiencia()">
            <i class="fas fa-save"></i> Guardar
          </button>
        </div>
      </div>
    </div>
  `;
  
  document.getElementById('modalContainer').innerHTML = modalHTML;
}

function closeModal(event) {
  if (!event || event.target.classList.contains('modal-overlay')) {
    document.getElementById('modalContainer').innerHTML = '';
  }
}

// Save Functions
function saveCaso(casoId) {
  const form = document.getElementById('casoForm');
  const formData = new FormData(form);
  
  const casoData = {
    id: casoId || `JLC/${String(appData.casos.length + 1).padStart(3, '0')}/2023`,
    expediente: formData.get('expediente'),
    actor: formData.get('actor'),
    demandado: formData.get('demandado'),
    etapa: formData.get('etapa'),
    competencia: formData.get('competencia'),
    fechaAlta: new Date().toISOString().split('T')[0],
    montoReclamado: parseInt(formData.get('montoReclamado')),
    abogado: formData.get('abogado'),
    cliente: formData.get('cliente'),
    status: 'activo'
  };
  
  if (casoId) {
    const index = appData.casos.findIndex(c => c.id === casoId);
    appData.casos[index] = casoData;
    showToast('Caso actualizado exitosamente', 'success');
  } else {
    appData.casos.push(casoData);
    showToast('Caso creado exitosamente', 'success');
  }
  
  closeModal();
  renderView(currentRole, currentView);
}

function saveEtapa(etapaId) {
  const form = document.getElementById('etapaForm');
  const formData = new FormData(form);
  
  const etapaData = {
    id: etapaId || appData.catalogos.etapas.length + 1,
    nombre: formData.get('nombre'),
    descripcion: formData.get('descripcion'),
    activo: formData.get('activo') === 'on'
  };
  
  if (etapaId) {
    const index = appData.catalogos.etapas.findIndex(e => e.id === etapaId);
    appData.catalogos.etapas[index] = etapaData;
    showToast('Etapa actualizada exitosamente', 'success');
  } else {
    appData.catalogos.etapas.push(etapaData);
    showToast('Etapa creada exitosamente', 'success');
  }
  
  closeModal();
  renderView(currentRole, currentView);
}

function saveCompetencia(compId) {
  const form = document.getElementById('competenciaForm');
  const formData = new FormData(form);
  
  const compData = {
    id: compId || appData.catalogos.competencias.length + 1,
    nombre: formData.get('nombre'),
    ciudad: formData.get('ciudad'),
    activo: formData.get('activo') === 'on'
  };
  
  if (compId) {
    const index = appData.catalogos.competencias.findIndex(c => c.id === compId);
    appData.catalogos.competencias[index] = compData;
    showToast('Competencia actualizada exitosamente', 'success');
  } else {
    appData.catalogos.competencias.push(compData);
    showToast('Competencia creada exitosamente', 'success');
  }
  
  closeModal();
  renderView(currentRole, currentView);
}

function saveTipoAudiencia(tipoId) {
  const form = document.getElementById('tipoAudienciaForm');
  const formData = new FormData(form);
  
  const tipoData = {
    id: tipoId || appData.catalogos.tiposAudiencia.length + 1,
    nombre: formData.get('nombre'),
    descripcion: formData.get('descripcion'),
    activo: formData.get('activo') === 'on'
  };
  
  if (tipoId) {
    const index = appData.catalogos.tiposAudiencia.findIndex(t => t.id === tipoId);
    appData.catalogos.tiposAudiencia[index] = tipoData;
    showToast('Tipo de audiencia actualizado exitosamente', 'success');
  } else {
    appData.catalogos.tiposAudiencia.push(tipoData);
    showToast('Tipo de audiencia creado exitosamente', 'success');
  }
  
  closeModal();
  renderView(currentRole, currentView);
}

function saveEmpresa(clienteId) {
  const form = document.getElementById('empresaForm');
  const formData = new FormData(form);
  
  const empresaData = {
    id: clienteId || appData.clientes.length + 1,
    tipo: 'empresa',
    nombre: formData.get('nombre'),
    rfc: formData.get('rfc'),
    sector: formData.get('sector'),
    casosActivos: 0,
    casosTotales: 0,
    contacto: formData.get('contacto'),
    email: formData.get('email')
  };
  
  if (clienteId) {
    const index = appData.clientes.findIndex(c => c.id === clienteId);
    appData.clientes[index] = { ...appData.clientes[index], ...empresaData };
    showToast('Empresa actualizada exitosamente', 'success');
  } else {
    appData.clientes.push(empresaData);
    showToast('Empresa creada exitosamente', 'success');
  }
  
  closeModal();
  renderView(currentRole, currentView);
}

function saveAudiencia() {
  const form = document.getElementById('audienciaForm');
  const formData = new FormData(form);
  
  const audienciaData = {
    id: appData.audiencias.length + 1,
    casoId: formData.get('casoId'),
    tipo: formData.get('tipo'),
    fecha: formData.get('fecha'),
    juzgado: formData.get('juzgado'),
    sala: formData.get('sala'),
    juez: formData.get('juez'),
    status: 'pendiente'
  };
  
  appData.audiencias.push(audienciaData);
  showToast('Audiencia programada exitosamente', 'success');
  
  closeModal();
  renderView(currentRole, currentView);
}

// View/Edit/Delete Functions
function viewCaso(casoId) {
  const caso = appData.casos.find(c => c.id === casoId);
  if (!caso) return;
  
  const modalHTML = `
    <div class="modal-overlay" onclick="closeModal(event)">
      <div class="modal" onclick="event.stopPropagation()">
        <div class="modal-header">
          <h3 class="modal-title">Detalle del Caso ${caso.expediente}</h3>
          <button class="btn-icon" onclick="closeModal()">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div class="modal-body">
          <div style="display: grid; gap: 16px;">
            <div>
              <strong>Expediente:</strong> ${caso.expediente}
            </div>
            <div>
              <strong>Actor:</strong> ${caso.actor}
            </div>
            <div>
              <strong>Demandado:</strong> ${caso.demandado}
            </div>
            <div>
              <strong>Etapa:</strong> ${caso.etapa}
            </div>
            <div>
              <strong>Competencia:</strong> ${caso.competencia}
            </div>
            <div>
              <strong>Abogado:</strong> ${caso.abogado}
            </div>
            <div>
              <strong>Cliente:</strong> ${caso.cliente}
            </div>
            <div>
              <strong>Monto Reclamado:</strong> $${caso.montoReclamado.toLocaleString()}
            </div>
            <div>
              <strong>Status:</strong> <span class="status-badge ${caso.status}">${caso.status}</span>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn--secondary" onclick="closeModal()">Cerrar</button>
          <button class="btn btn--primary" onclick="editCaso('${casoId}')">
            <i class="fas fa-edit"></i> Editar
          </button>
        </div>
      </div>
    </div>
  `;
  
  document.getElementById('modalContainer').innerHTML = modalHTML;
}

function editCaso(casoId) {
  closeModal();
  setTimeout(() => openCasoModal(casoId), 100);
}

function editCliente(clienteId) {
  openEmpresaModal(clienteId);
}

function deleteCliente(clienteId) {
  if (confirm('¿Está seguro de eliminar esta empresa?')) {
    const index = appData.clientes.findIndex(c => c.id === clienteId);
    appData.clientes.splice(index, 1);
    showToast('Empresa eliminada', 'success');
    renderView(currentRole, currentView);
  }
}

function editEtapa(etapaId) {
  openEtapaModal(etapaId);
}

function deleteEtapa(etapaId) {
  if (confirm('¿Está seguro de eliminar esta etapa?')) {
    const index = appData.catalogos.etapas.findIndex(e => e.id === etapaId);
    appData.catalogos.etapas.splice(index, 1);
    showToast('Etapa eliminada', 'success');
    renderView(currentRole, currentView);
  }
}

function editCompetencia(compId) {
  openCompetenciaModal(compId);
}

function deleteCompetencia(compId) {
  if (confirm('¿Está seguro de eliminar esta competencia?')) {
    const index = appData.catalogos.competencias.findIndex(c => c.id === compId);
    appData.catalogos.competencias.splice(index, 1);
    showToast('Competencia eliminada', 'success');
    renderView(currentRole, currentView);
  }
}

function editTipoAudiencia(tipoId) {
  openTipoAudienciaModal(tipoId);
}

function deleteTipoAudiencia(tipoId) {
  if (confirm('¿Está seguro de eliminar este tipo de audiencia?')) {
    const index = appData.catalogos.tiposAudiencia.findIndex(t => t.id === tipoId);
    appData.catalogos.tiposAudiencia.splice(index, 1);
    showToast('Tipo de audiencia eliminado', 'success');
    renderView(currentRole, currentView);
  }
}

// Toast Notifications
function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
    <span>${message}</span>
  `;
  
  document.getElementById('toastContainer').appendChild(toast);
  
  setTimeout(() => {
    toast.remove();
  }, 3000);
}

// Navigation Functions
function navigateToCatalogos() {
  currentView = 'catalogos';
  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
  const catalogosItem = Array.from(document.querySelectorAll('.nav-item')).find(item => item.dataset.view === 'catalogos');
  if (catalogosItem) catalogosItem.classList.add('active');
  renderView(currentRole, 'catalogos');
}

function navigateToCasoDetails(casoId) {
  currentView = 'caso-details';
  renderAbogadoSecondaryDashboard(document.getElementById('mainContent'), casoId);
}

// Secondary Dashboard - Mesa de Ayuda Catalogos
function renderCatalogosSecondaryDashboard(container) {
  container.innerHTML = `
    <div style="margin-bottom: 20px;">
      <button class="btn btn--secondary btn--sm" onclick="renderView(currentRole, 'dashboard')">
        <i class="fas fa-arrow-left"></i> Regresar
      </button>
      <h2 style="margin-top: 12px;">Gestión de Catálogos</h2>
    </div>
    
    <div class="card">
      <div class="card-header" style="border-bottom: none; padding-bottom: 0;">
        <div style="display: flex; gap: 8px; flex-wrap: wrap;" id="catalogoTabs">
          <button class="btn btn--sm tab-btn active" data-tab="empresas">Empresas</button>
          <button class="btn btn--sm tab-btn" data-tab="abogados">Abogados</button>
          <button class="btn btn--sm tab-btn" data-tab="corresponsales">Corresponsales</button>
          <button class="btn btn--sm tab-btn" data-tab="trabajadores">Trabajadores</button>
          <button class="btn btn--sm tab-btn" data-tab="juntas-locales">Juntas Locales</button>
          <button class="btn btn--sm tab-btn" data-tab="juntas-federales">Juntas Federales</button>
          <button class="btn btn--sm tab-btn" data-tab="tribunales">Tribunales</button>
        </div>
      </div>
      <div class="card-body" id="catalogoTabContent">
        <!-- Content will be loaded here -->
      </div>
    </div>
  `;
  
  // Tab switching logic
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      loadCatalogoTab(btn.dataset.tab);
    });
  });
  
  // Load initial tab
  loadCatalogoTab('empresas');
}

function loadCatalogoTab(tabName) {
  const content = document.getElementById('catalogoTabContent');
  
  switch(tabName) {
    case 'empresas':
      content.innerHTML = `
        <div class="flex justify-between items-center mb-20">
          <h3>Catálogo de Empresas</h3>
          <button class="btn btn--primary btn--sm" onclick="openEmpresaModal()">
            <i class="fas fa-plus"></i> Nuevo Registro
          </button>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>RFC</th>
              <th>Sector</th>
              <th>Contacto</th>
              <th>Email</th>
              <th>Teléfono</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            ${appData.clientes.map(c => `
              <tr>
                <td><strong>${c.nombre}</strong></td>
                <td>${c.rfc}</td>
                <td>${c.sector}</td>
                <td>${c.contacto}</td>
                <td>${c.email}</td>
                <td>55-1234-5678</td>
                <td class="table-actions">
                  <button class="btn btn--sm btn--outline" title="Ver"><i class="fas fa-eye"></i></button>
                  <button class="btn btn--sm btn--outline" onclick="editCliente(${c.id})" title="Editar"><i class="fas fa-edit"></i></button>
                  <button class="btn btn--sm btn--outline" onclick="deleteCliente(${c.id})" title="Eliminar"><i class="fas fa-trash"></i></button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
        <button class="btn btn--secondary btn--sm mt-20">
          <i class="fas fa-download"></i> Exportar
        </button>
      `;
      break;
      
    case 'abogados':
      content.innerHTML = `
        <div class="flex justify-between items-center mb-20">
          <h3>Catálogo de Abogados</h3>
          <button class="btn btn--primary btn--sm" onclick="openAbogadoModal()">
            <i class="fas fa-plus"></i> Nuevo Registro
          </button>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th>CURP</th>
              <th>Nombre</th>
              <th>Cédula</th>
              <th>Especialidad</th>
              <th>Email</th>
              <th>Teléfono</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            ${appData.usuarios.filter(u => u.rol === 'abogado').map(a => `
              <tr>
                <td>GOMA850312MDFNRL05</td>
                <td><strong>${a.nombre}</strong></td>
                <td>12345678</td>
                <td>Derecho Laboral</td>
                <td>${a.email}</td>
                <td>55-3456-7890</td>
                <td class="table-actions">
                  <button class="btn btn--sm btn--outline" title="Ver"><i class="fas fa-eye"></i></button>
                  <button class="btn btn--sm btn--outline" title="Editar"><i class="fas fa-edit"></i></button>
                  <button class="btn btn--sm btn--outline" title="Eliminar"><i class="fas fa-trash"></i></button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
        <button class="btn btn--secondary btn--sm mt-20">
          <i class="fas fa-download"></i> Exportar
        </button>
      `;
      break;
      
    case 'corresponsales':
      content.innerHTML = `
        <div class="flex justify-between items-center mb-20">
          <h3>Catálogo de Corresponsales</h3>
          <button class="btn btn--primary btn--sm" onclick="openCorresponsalModal()">
            <i class="fas fa-plus"></i> Nuevo Registro
          </button>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Ubicación</th>
              <th>Especialidad</th>
              <th>Contacto</th>
              <th>Email</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Bufete Jurídico del Bajío</strong></td>
              <td>Guadalajara, Jalisco</td>
              <td>Derecho Laboral</td>
              <td>Lic. Carlos Ramírez</td>
              <td>contacto@bujetebajio.com</td>
              <td class="table-actions">
                <button class="btn btn--sm btn--outline" title="Ver"><i class="fas fa-eye"></i></button>
                <button class="btn btn--sm btn--outline" title="Editar"><i class="fas fa-edit"></i></button>
                <button class="btn btn--sm btn--outline" title="Eliminar"><i class="fas fa-trash"></i></button>
              </td>
            </tr>
            <tr>
              <td><strong>Despacho Legal del Norte</strong></td>
              <td>Monterrey, Nuevo León</td>
              <td>Derecho Corporativo y Laboral</td>
              <td>Lic. Laura Sánchez</td>
              <td>info@legaldenorte.com</td>
              <td class="table-actions">
                <button class="btn btn--sm btn--outline" title="Ver"><i class="fas fa-eye"></i></button>
                <button class="btn btn--sm btn--outline" title="Editar"><i class="fas fa-edit"></i></button>
                <button class="btn btn--sm btn--outline" title="Eliminar"><i class="fas fa-trash"></i></button>
              </td>
            </tr>
          </tbody>
        </table>
        <button class="btn btn--secondary btn--sm mt-20">
          <i class="fas fa-download"></i> Exportar
        </button>
      `;
      break;
      
    case 'trabajadores':
      content.innerHTML = `
        <div class="flex justify-between items-center mb-20">
          <h3>Catálogo de Trabajadores</h3>
          <button class="btn btn--primary btn--sm">
            <i class="fas fa-plus"></i> Nuevo Registro
          </button>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Empresa</th>
              <th>Puesto</th>
              <th>CURP</th>
              <th>NSS</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Juan Pérez López</strong></td>
              <td>Constructora Mexicana</td>
              <td>Obrero</td>
              <td>PELJ850312HDFRN08</td>
              <td>12345678901</td>
              <td class="table-actions">
                <button class="btn btn--sm btn--outline" title="Ver"><i class="fas fa-eye"></i></button>
                <button class="btn btn--sm btn--outline" title="Editar"><i class="fas fa-edit"></i></button>
                <button class="btn btn--sm btn--outline" title="Eliminar"><i class="fas fa-trash"></i></button>
              </td>
            </tr>
          </tbody>
        </table>
        <button class="btn btn--secondary btn--sm mt-20">
          <i class="fas fa-download"></i> Exportar
        </button>
      `;
      break;
      
    case 'juntas-locales':
      content.innerHTML = `
        <div class="flex justify-between items-center mb-20">
          <h3>Catálogo de Juntas Locales</h3>
          <button class="btn btn--primary btn--sm">
            <i class="fas fa-plus"></i> Nuevo Registro
          </button>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Ciudad</th>
              <th>Dirección</th>
              <th>Teléfono</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            ${appData.catalogos.competencias.map((c, i) => `
              <tr>
                <td><strong>${c.nombre}</strong></td>
                <td>${c.ciudad}</td>
                <td>Av. Principal ${100 + i * 50}, Col. Centro</td>
                <td>55-${1000 + i * 111}-${2000 + i * 111}</td>
                <td class="table-actions">
                  <button class="btn btn--sm btn--outline" title="Ver"><i class="fas fa-eye"></i></button>
                  <button class="btn btn--sm btn--outline" title="Editar"><i class="fas fa-edit"></i></button>
                  <button class="btn btn--sm btn--outline" title="Eliminar"><i class="fas fa-trash"></i></button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
        <button class="btn btn--secondary btn--sm mt-20">
          <i class="fas fa-download"></i> Exportar
        </button>
      `;
      break;
      
    case 'juntas-federales':
      content.innerHTML = `
        <div class="flex justify-between items-center mb-20">
          <h3>Catálogo de Juntas Federales</h3>
          <button class="btn btn--primary btn--sm">
            <i class="fas fa-plus"></i> Nuevo Registro
          </button>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Ciudad</th>
              <th>Dirección</th>
              <th>Teléfono</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Junta Federal de Conciliación y Arbitraje</strong></td>
              <td>Ciudad de México</td>
              <td>Anillo Periférico 5000, Col. Insurgentes Cuicuilco</td>
              <td>55-5000-3000</td>
              <td class="table-actions">
                <button class="btn btn--sm btn--outline" title="Ver"><i class="fas fa-eye"></i></button>
                <button class="btn btn--sm btn--outline" title="Editar"><i class="fas fa-edit"></i></button>
                <button class="btn btn--sm btn--outline" title="Eliminar"><i class="fas fa-trash"></i></button>
              </td>
            </tr>
          </tbody>
        </table>
        <button class="btn btn--secondary btn--sm mt-20">
          <i class="fas fa-download"></i> Exportar
        </button>
      `;
      break;
      
    case 'tribunales':
      content.innerHTML = `
        <div class="flex justify-between items-center mb-20">
          <h3>Catálogo de Tribunales</h3>
          <button class="btn btn--primary btn--sm">
            <i class="fas fa-plus"></i> Nuevo Registro
          </button>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Ciudad</th>
              <th>Tipo</th>
              <th>Dirección</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Tribunal de Justicia Laboral CDMX</strong></td>
              <td>Ciudad de México</td>
              <td>Local</td>
              <td>Av. Insurgentes Sur 421</td>
              <td class="table-actions">
                <button class="btn btn--sm btn--outline" title="Ver"><i class="fas fa-eye"></i></button>
                <button class="btn btn--sm btn--outline" title="Editar"><i class="fas fa-edit"></i></button>
                <button class="btn btn--sm btn--outline" title="Eliminar"><i class="fas fa-trash"></i></button>
              </td>
            </tr>
          </tbody>
        </table>
        <button class="btn btn--secondary btn--sm mt-20">
          <i class="fas fa-download"></i> Exportar
        </button>
      `;
      break;
  }
}

// Secondary Dashboard - Abogado Detalles de Caso
function renderAbogadoSecondaryDashboard(container, casoId) {
  const caso = appData.casos.find(c => c.id === casoId) || appData.casos[0];
  
  container.innerHTML = `
    <div style="margin-bottom: 20px;">
      <button class="btn btn--secondary btn--sm" onclick="renderView(currentRole, 'dashboard')">
        <i class="fas fa-arrow-left"></i> Regresar
      </button>
      <h2 style="margin-top: 12px;">Detalles del Caso Laboral</h2>
      <div style="font-size: 24px; font-weight: bold; color: var(--color-primary); margin-top: 8px;">
        Caso #LXT-2023-0456
      </div>
    </div>
    
    <div class="card">
      <div class="card-header" style="border-bottom: none; padding-bottom: 0;">
        <div style="display: flex; gap: 8px; flex-wrap: wrap;" id="casoTabs">
          <button class="btn btn--sm tab-btn active" data-tab="resumen">Resumen</button>
          <button class="btn btn--sm tab-btn" data-tab="documentos">Documentos</button>
          <button class="btn btn--sm tab-btn" data-tab="audiencias">Audiencias</button>
          <button class="btn btn--sm tab-btn" data-tab="liquidaciones">Liquidaciones</button>
          <button class="btn btn--sm tab-btn" data-tab="historial">Historial</button>
        </div>
      </div>
      <div class="card-body" id="casoTabContent">
        <!-- Content will be loaded here -->
      </div>
    </div>
  `;
  
  // Tab switching logic
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      loadCasoTab(btn.dataset.tab, caso);
    });
  });
  
  // Load initial tab
  loadCasoTab('resumen', caso);
}

function loadCasoTab(tabName, caso) {
  const content = document.getElementById('casoTabContent');
  
  switch(tabName) {
    case 'resumen':
      content.innerHTML = `
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-bottom: 20px;">
          <div class="card" style="background: var(--color-bg-1);">
            <div class="card-body">
              <h4 style="margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
                <i class="fas fa-user" style="color: var(--color-primary);"></i> Cliente
              </h4>
              <p style="font-size: 16px; font-weight: bold; margin-bottom: 4px;">${caso.demandado}</p>
              <p style="font-size: 12px; color: var(--color-text-secondary);">RFC: CMX930201ABC</p>
              <p style="font-size: 12px; color: var(--color-text-secondary);">Tel: 55-1234-5678</p>
            </div>
          </div>
          
          <div class="card" style="background: var(--color-bg-3);">
            <div class="card-body">
              <h4 style="margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
                <i class="fas fa-user-circle" style="color: #22c55e;"></i> Contraparte
              </h4>
              <p style="font-size: 16px; font-weight: bold; margin-bottom: 4px;">${caso.actor}</p>
              <p style="font-size: 12px; color: var(--color-text-secondary);">Actor/Demandante</p>
            </div>
          </div>
          
          <div class="card" style="background: var(--color-bg-2);">
            <div class="card-body">
              <h4 style="margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
                <i class="fas fa-user-tie" style="color: #f59e0b;"></i> Abogado Responsable
              </h4>
              <p style="font-size: 16px; font-weight: bold; margin-bottom: 4px;">${caso.abogado}</p>
              <p style="font-size: 12px; color: var(--color-text-secondary);">Lic. Derecho Laboral</p>
            </div>
          </div>
        </div>
        
        <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 20px; margin-bottom: 20px;">
          <div class="card">
            <div class="card-body">
              <h4 style="margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
                <i class="fas fa-file-alt" style="color: var(--color-primary);"></i> Resumen del Caso
              </h4>
              <p style="font-size: 13px; line-height: 1.6; color: var(--color-text-secondary);">
                Demanda laboral por despido injustificado. El actor solicita reinstalación o indemnización constitucional, salarios caídos y prestaciones.
              </p>
              <div style="margin-top: 16px; display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                <div>
                  <strong style="font-size: 12px; color: var(--color-text-secondary);">Fecha Inicio:</strong>
                  <p style="font-size: 13px;">15 Ene 2023</p>
                </div>
                <div>
                  <strong style="font-size: 12px; color: var(--color-text-secondary);">Etapa Actual:</strong>
                  <p style="font-size: 13px;">${caso.etapa}</p>
                </div>
                <div>
                  <strong style="font-size: 12px; color: var(--color-text-secondary);">Monto Reclamado:</strong>
                  <p style="font-size: 13px; font-weight: bold; color: var(--color-primary);">$${caso.montoReclamado.toLocaleString()} MXN</p>
                </div>
                <div>
                  <strong style="font-size: 12px; color: var(--color-text-secondary);">Estado:</strong>
                  <p style="font-size: 13px;"><span class="status-badge ${caso.status}">${caso.status}</span></p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="card" style="background: var(--color-bg-5);">
            <div class="card-body">
              <h4 style="margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
                <i class="fas fa-calendar-check" style="color: #9333ea;"></i> Próxima Audiencia
              </h4>
              <p style="font-size: 14px; font-weight: bold; margin-bottom: 8px;">Audiencia de Desahogo de Pruebas</p>
              <p style="font-size: 13px; color: var(--color-text-secondary); margin-bottom: 4px;">
                <i class="fas fa-calendar"></i> 15 Nov 2024 - 09:00 AM
              </p>
              <p style="font-size: 13px; color: var(--color-text-secondary); margin-bottom: 4px;">
                <i class="fas fa-university"></i> ${caso.competencia} - Sala 3
              </p>
              <p style="font-size: 13px; color: var(--color-text-secondary);">
                <i class="fas fa-gavel"></i> Dra. Ana Martínez Ruiz
              </p>
            </div>
          </div>
        </div>
        
        <div class="card mb-20">
          <div class="card-body">
            <h4 style="margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
              <i class="fas fa-bolt" style="color: var(--color-primary);"></i> Acciones Rápidas
            </h4>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px;">
              <button class="btn btn--outline btn--sm">
                <i class="fas fa-file-upload"></i> Subir Documento
              </button>
              <button class="btn btn--outline btn--sm">
                <i class="fas fa-calendar-plus"></i> Programar Audiencia
              </button>
              <button class="btn btn--outline btn--sm">
                <i class="fas fa-edit"></i> Editar Caso
              </button>
              <button class="btn btn--outline btn--sm">
                <i class="fas fa-envelope"></i> Enviar Notificación
              </button>
            </div>
          </div>
        </div>
        
        <div class="card">
          <div class="card-body">
            <h4 style="margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
              <i class="fas fa-sticky-note" style="color: var(--color-warning);"></i> Notas del Caso
            </h4>
            <div style="display: flex; flex-direction: column; gap: 12px;">
              <div style="padding: 12px; background: var(--color-bg-2); border-radius: var(--radius-base); border-left: 3px solid var(--color-warning);">
                <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                  <strong style="font-size: 13px;">${caso.abogado}</strong>
                  <span style="font-size: 11px; color: var(--color-text-secondary);">15 Oct 2023</span>
                </div>
                <p style="font-size: 13px; color: var(--color-text-secondary);">Cliente solicita acelerar el proceso. Pendiente presentar documentación adicional.</p>
              </div>
              <div style="padding: 12px; background: var(--color-bg-3); border-radius: var(--radius-base); border-left: 3px solid #22c55e;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                  <strong style="font-size: 13px;">${caso.abogado}</strong>
                  <span style="font-size: 11px; color: var(--color-text-secondary);">20 Sep 2023</span>
                </div>
                <p style="font-size: 13px; color: var(--color-text-secondary);">Se admitieron las pruebas. Próxima audiencia programada.</p>
              </div>
            </div>
            <button class="btn btn--outline btn--sm" style="margin-top: 12px;">
              <i class="fas fa-plus"></i> Agregar Nota
            </button>
          </div>
        </div>
      `;
      break;
      
    case 'documentos':
      content.innerHTML = `
        <div class="flex justify-between items-center mb-20">
          <h3>Documentos del Caso</h3>
          <button class="btn btn--primary btn--sm">
            <i class="fas fa-upload"></i> Subir Documento
          </button>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 16px;" id="documentosGrid">
          <div class="card draggable-card" draggable="true" data-card-id="doc-1">
            <div class="card-body" style="text-align: center;">
              <div class="card-drag-handle"><i class="fas fa-grip-vertical"></i></div>
              <div style="font-size: 48px; color: var(--color-error); margin-bottom: 8px;">
                <i class="fas fa-file-pdf"></i>
              </div>
              <h5 style="font-size: 13px; margin-bottom: 8px;">Contrato de Trabajo</h5>
              <p style="font-size: 11px; color: var(--color-text-secondary); margin-bottom: 4px;">PDF - 2.5 MB</p>
              <p style="font-size: 11px; color: var(--color-text-secondary); margin-bottom: 12px;">10 Ene 2023</p>
              <div style="display: flex; gap: 8px;">
                <button class="btn btn--outline btn--sm" style="flex: 1;">
                  <i class="fas fa-eye"></i>
                </button>
                <button class="btn btn--outline btn--sm" style="flex: 1;">
                  <i class="fas fa-download"></i>
                </button>
              </div>
            </div>
          </div>
          
          <div class="card draggable-card" draggable="true" data-card-id="doc-2">
            <div class="card-body" style="text-align: center;">
              <div class="card-drag-handle"><i class="fas fa-grip-vertical"></i></div>
              <div style="font-size: 48px; color: var(--color-error); margin-bottom: 8px;">
                <i class="fas fa-file-pdf"></i>
              </div>
              <h5 style="font-size: 13px; margin-bottom: 8px;">Recibos de Nómina</h5>
              <p style="font-size: 11px; color: var(--color-text-secondary); margin-bottom: 4px;">PDF - 1.8 MB</p>
              <p style="font-size: 11px; color: var(--color-text-secondary); margin-bottom: 12px;">15 Feb 2023</p>
              <div style="display: flex; gap: 8px;">
                <button class="btn btn--outline btn--sm" style="flex: 1;">
                  <i class="fas fa-eye"></i>
                </button>
                <button class="btn btn--outline btn--sm" style="flex: 1;">
                  <i class="fas fa-download"></i>
                </button>
              </div>
            </div>
          </div>
          
          <div class="card draggable-card" draggable="true" data-card-id="doc-3">
            <div class="card-body" style="text-align: center;">
              <div class="card-drag-handle"><i class="fas fa-grip-vertical"></i></div>
              <div style="font-size: 48px; color: var(--color-error); margin-bottom: 8px;">
                <i class="fas fa-file-pdf"></i>
              </div>
              <h5 style="font-size: 13px; margin-bottom: 8px;">Carta de Despido</h5>
              <p style="font-size: 11px; color: var(--color-text-secondary); margin-bottom: 4px;">PDF - 800 KB</p>
              <p style="font-size: 11px; color: var(--color-text-secondary); margin-bottom: 12px;">20 Mar 2023</p>
              <div style="display: flex; gap: 8px;">
                <button class="btn btn--outline btn--sm" style="flex: 1;">
                  <i class="fas fa-eye"></i>
                </button>
                <button class="btn btn--outline btn--sm" style="flex: 1;">
                  <i class="fas fa-download"></i>
                </button>
              </div>
            </div>
          </div>
          
          <div class="card draggable-card" draggable="true" data-card-id="doc-4">
            <div class="card-body" style="text-align: center;">
              <div class="card-drag-handle"><i class="fas fa-grip-vertical"></i></div>
              <div style="font-size: 48px; color: var(--color-success); margin-bottom: 8px;">
                <i class="fas fa-file-excel"></i>
              </div>
              <h5 style="font-size: 13px; margin-bottom: 8px;">Horas Extras</h5>
              <p style="font-size: 11px; color: var(--color-text-secondary); margin-bottom: 4px;">Excel - 450 KB</p>
              <p style="font-size: 11px; color: var(--color-text-secondary); margin-bottom: 12px;">25 Mar 2023</p>
              <div style="display: flex; gap: 8px;">
                <button class="btn btn--outline btn--sm" style="flex: 1;">
                  <i class="fas fa-eye"></i>
                </button>
                <button class="btn btn--outline btn--sm" style="flex: 1;">
                  <i class="fas fa-download"></i>
                </button>
              </div>
            </div>
          </div>
          
          <div class="card draggable-card" draggable="true" data-card-id="doc-5">
            <div class="card-body" style="text-align: center;">
              <div class="card-drag-handle"><i class="fas fa-grip-vertical"></i></div>
              <div style="font-size: 48px; color: var(--color-primary); margin-bottom: 8px;">
                <i class="fas fa-file-word"></i>
              </div>
              <h5 style="font-size: 13px; margin-bottom: 8px;">Demanda Inicial</h5>
              <p style="font-size: 11px; color: var(--color-text-secondary); margin-bottom: 4px;">Word - 1.2 MB</p>
              <p style="font-size: 11px; color: var(--color-text-secondary); margin-bottom: 12px;">01 Abr 2023</p>
              <div style="display: flex; gap: 8px;">
                <button class="btn btn--outline btn--sm" style="flex: 1;">
                  <i class="fas fa-eye"></i>
                </button>
                <button class="btn btn--outline btn--sm" style="flex: 1;">
                  <i class="fas fa-download"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
      
      // Initialize drag and drop for documents
      setTimeout(() => {
        const grid = document.getElementById('documentosGrid');
        if (grid) {
          new Sortable(grid, {
            animation: 150,
            handle: '.card-drag-handle',
            ghostClass: 'dragging',
            onEnd: () => showToast('Documentos reorganizados', 'success')
          });
        }
      }, 100);
      break;
      
    case 'audiencias':
      content.innerHTML = `
        <div class="flex justify-between items-center mb-20">
          <h3>Audiencias y Plazos</h3>
          <button class="btn btn--primary btn--sm">
            <i class="fas fa-plus"></i> Nueva Audiencia
          </button>
        </div>
        
        <table class="table">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Tipo</th>
              <th>Lugar</th>
              <th>Asistentes</th>
              <th>Estado</th>
              <th>Resultado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>15 May 2023 - 10:00</td>
              <td>Audiencia Inicial</td>
              <td>${caso.competencia} - Sala 3</td>
              <td>Actor, Demandado, Abogados</td>
              <td><span class="status-badge activo">Completada</span></td>
              <td>Se fijó fecha para desahogo de pruebas</td>
            </tr>
            <tr>
              <td>20 Jul 2023 - 09:30</td>
              <td>Audiencia de Conciliación</td>
              <td>${caso.competencia} - Sala 3</td>
              <td>Actor, Demandado, Abogados</td>
              <td><span class="status-badge activo">Completada</span></td>
              <td>No hubo conciliación, se continuará el proceso</td>
            </tr>
            <tr>
              <td>10 Sep 2023 - 11:00</td>
              <td>Audiencia de Ofrecimiento de Pruebas</td>
              <td>${caso.competencia} - Sala 3</td>
              <td>Actor, Demandado, Abogados</td>
              <td><span class="status-badge activo">Completada</span></td>
              <td>Pruebas admitidas</td>
            </tr>
            <tr>
              <td>15 Nov 2024 - 09:00</td>
              <td>Audiencia de Desahogo de Pruebas</td>
              <td>${caso.competencia} - Sala 3</td>
              <td>Actor, Demandado, Abogados, Testigos</td>
              <td><span class="status-badge pendiente">Pendiente</span></td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      `;
      break;
      
    case 'liquidaciones':
      content.innerHTML = `
        <h3 class="mb-20">Cálculo de Liquidaciones</h3>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
          <div class="card">
            <div class="card-body">
              <h4 style="margin-bottom: 16px;">Conceptos de Liquidación</h4>
              <table class="table">
                <thead>
                  <tr>
                    <th>Concepto</th>
                    <th style="text-align: right;">Monto</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Salarios caídos</td>
                    <td style="text-align: right; font-weight: 600;">$45,000</td>
                  </tr>
                  <tr>
                    <td>Indemnización constitucional</td>
                    <td style="text-align: right; font-weight: 600;">$35,000</td>
                  </tr>
                  <tr>
                    <td>Prima de antigüedad</td>
                    <td style="text-align: right; font-weight: 600;">$25,000</td>
                  </tr>
                  <tr>
                    <td>Vacaciones no disfrutadas</td>
                    <td style="text-align: right; font-weight: 600;">$8,000</td>
                  </tr>
                  <tr>
                    <td>Prima vacacional</td>
                    <td style="text-align: right; font-weight: 600;">$2,000</td>
                  </tr>
                  <tr>
                    <td>Aguinaldo proporcional</td>
                    <td style="text-align: right; font-weight: 600;">$12,000</td>
                  </tr>
                  <tr style="background: var(--color-bg-1); font-weight: bold;">
                    <td>TOTAL</td>
                    <td style="text-align: right; color: var(--color-primary); font-size: 18px;">$127,000 MXN</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div class="card">
            <div class="card-body">
              <h4 style="margin-bottom: 16px;">Distribución de Conceptos</h4>
              <div class="chart-container" style="height: 350px;">
                <canvas id="liquidacionChart"></canvas>
              </div>
            </div>
          </div>
        </div>
      `;
      
      // Render liquidacion chart
      setTimeout(() => {
        const ctx = document.getElementById('liquidacionChart');
        if (ctx) {
          new Chart(ctx, {
            type: 'bar',
            data: {
              labels: ['Salarios caídos', 'Indemnización', 'Prima antigüedad', 'Vacaciones', 'Prima vac.', 'Aguinaldo'],
              datasets: [{
                label: 'Monto (MXN)',
                data: [45000, 35000, 25000, 8000, 2000, 12000],
                backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545']
              }]
            },
            options: {
              responsive: true,
              maintainAspectRatio: true,
              plugins: {
                legend: { display: false }
              },
              scales: {
                y: {
                  beginAtZero: true,
                  ticks: {
                    callback: function(value) {
                      return '$' + value.toLocaleString();
                    }
                  }
                }
              }
            }
          });
        }
      }, 100);
      break;
      
    case 'historial':
      content.innerHTML = `
        <h3 class="mb-20">Historial del Caso</h3>
        
        <div style="position: relative; padding-left: 40px;">
          <div style="position: absolute; left: 15px; top: 0; bottom: 0; width: 2px; background: var(--color-border);"></div>
          
          <div style="position: relative; margin-bottom: 24px;">
            <div style="position: absolute; left: -32px; width: 12px; height: 12px; border-radius: 50%; background: var(--color-primary); border: 3px solid var(--color-surface);"></div>
            <div class="card">
              <div class="card-body">
                <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                  <strong style="color: var(--color-primary);">Caso creado</strong>
                  <span style="font-size: 12px; color: var(--color-text-secondary);">15 Ene 2023 - 14:30</span>
                </div>
                <p style="font-size: 13px; color: var(--color-text-secondary);">Se registró el caso en el sistema</p>
                <p style="font-size: 12px; color: var(--color-text-secondary); margin-top: 4px;"><i class="fas fa-user"></i> ${caso.abogado}</p>
              </div>
            </div>
          </div>
          
          <div style="position: relative; margin-bottom: 24px;">
            <div style="position: absolute; left: -32px; width: 12px; height: 12px; border-radius: 50%; background: var(--color-success); border: 3px solid var(--color-surface);"></div>
            <div class="card">
              <div class="card-body">
                <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                  <strong style="color: var(--color-success);">Documentos cargados</strong>
                  <span style="font-size: 12px; color: var(--color-text-secondary);">20 Ene 2023 - 10:00</span>
                </div>
                <p style="font-size: 13px; color: var(--color-text-secondary);">Se cargaron 5 documentos iniciales</p>
                <p style="font-size: 12px; color: var(--color-text-secondary); margin-top: 4px;"><i class="fas fa-user"></i> ${caso.abogado}</p>
              </div>
            </div>
          </div>
          
          <div style="position: relative; margin-bottom: 24px;">
            <div style="position: absolute; left: -32px; width: 12px; height: 12px; border-radius: 50%; background: var(--color-warning); border: 3px solid var(--color-surface);"></div>
            <div class="card">
              <div class="card-body">
                <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                  <strong style="color: var(--color-warning);">Audiencia programada</strong>
                  <span style="font-size: 12px; color: var(--color-text-secondary);">10 Feb 2023 - 16:45</span>
                </div>
                <p style="font-size: 13px; color: var(--color-text-secondary);">Se programó audiencia inicial para el 15/05/2023</p>
                <p style="font-size: 12px; color: var(--color-text-secondary); margin-top: 4px;"><i class="fas fa-robot"></i> Sistema</p>
              </div>
            </div>
          </div>
          
          <div style="position: relative; margin-bottom: 24px;">
            <div style="position: absolute; left: -32px; width: 12px; height: 12px; border-radius: 50%; background: var(--color-primary); border: 3px solid var(--color-surface);"></div>
            <div class="card">
              <div class="card-body">
                <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                  <strong style="color: var(--color-primary);">Audiencia completada</strong>
                  <span style="font-size: 12px; color: var(--color-text-secondary);">15 May 2023 - 12:00</span>
                </div>
                <p style="font-size: 13px; color: var(--color-text-secondary);">Se realizó audiencia inicial. Ver resultados en tab de audiencias.</p>
                <p style="font-size: 12px; color: var(--color-text-secondary); margin-top: 4px;"><i class="fas fa-user"></i> ${caso.abogado}</p>
              </div>
            </div>
          </div>
          
          <div style="position: relative;">
            <div style="position: absolute; left: -32px; width: 12px; height: 12px; border-radius: 50%; background: var(--color-success); border: 3px solid var(--color-surface);"></div>
            <div class="card">
              <div class="card-body">
                <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                  <strong style="color: var(--color-success);">Notas actualizadas</strong>
                  <span style="font-size: 12px; color: var(--color-text-secondary);">20 Oct 2023 - 09:15</span>
                </div>
                <p style="font-size: 13px; color: var(--color-text-secondary);">Se agregaron notas sobre el estado del caso</p>
                <p style="font-size: 12px; color: var(--color-text-secondary); margin-top: 4px;"><i class="fas fa-user"></i> ${caso.abogado}</p>
              </div>
            </div>
          </div>
        </div>
      `;
      break;
  }
}

// Helper Functions
function getRoleName(role) {
  const roles = {
    admin: 'Administrador',
    abogado: 'Abogado',
    cliente: 'Cliente',
    mesa_ayuda: 'Mesa de Ayuda'
  };
  return roles[role] || role;
}