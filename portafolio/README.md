Portafolio Personal en React con Vite

Descripción del Proyecto

Este es mi portafolio personal desarrollado con React y Vite.

El portafolio está estructurado en varios componentes, cada uno representando una sección de mi perfil profesional y académico.

Estructura del Código

Componentes Funcionales: Cada uno encargado de una sección específica del contenido. Estos componentes se encuentran en la carpeta src/components. Los componentes incluyen:

NombreApellido.jsx: Para nombre y foto.

DatosPersonales.jsx: Para información personal.

Estudios.jsx: Para formación académica.

CursosRealizados.jsx: Para cursos adicionales.

HabilidadesBlandas.jsx: Para describir Habilidades Blandas.

HabilidadesTecnicas.jsx: Para describir Habilidades Profesionales.

Contacto.jsx: Que funciona como pie de página para la información de contacto.

Gestión de Activos: Las imágenes, como tu foto personal, se guardan en la carpeta /public y se acceden con rutas relativas directamente desde el código.

Estilización CSS: Los estilos se aplican mediante CSS, definido en el archivo src/App.css. 

Exportaciones por defecto: Cada componente .jsx dentro de src/components incluye un export default para permitir que sea importado y utilizado en App.jsx.