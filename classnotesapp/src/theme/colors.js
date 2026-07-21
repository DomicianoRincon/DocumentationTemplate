// src/theme/colors.js
//
// Founding a new course? This is the one file to edit for re-branding —
// every key below is used consistently across the app, so changing values
// here (not the keys) is enough. Keep both `light` and `dark` in sync.

export const light = {
  // Títulos y textos
  contentTitle: '#222',         // Títulos en gris casi negro
  contentSubtitle: '#6C4CD6',   // Subtítulos — color de acento del curso
  drawerTitle: '#222',          // Título del drawer en gris casi negro
  drawerSection: '#5A3FC0',     // Acento intermedio para secciones del drawer
  textPrimary: '#222',          // Texto principal sobre fondo claro
  textSecondary: '#444',        // Texto secundario

  // Fondos
  background: '#F5F7FA',        // Fondo general claro
  backgroundLight: '#FFFFFF',   // Fondo alternativo (cards, etc.)
  drawerBg: '#F5F7FA',          // Drawer y TOC fondo (igual que background)

  // Drawer y TOC
  tocTitle: '#222',             // Título TOC en gris casi negro
  tocText: '#222',              // Texto TOC

  // Accentos y bordes
  accent: '#6C4CD6',                // Acento del curso
  border: '#e0e0e0',                // Bordes sutiles

  // Inline code
  inlineCodeBg: 'rgba(120,120,120,0.10)',
  inlineCodeText: '#5A3FC0',

  // Otros
  error: '#D32F2F',                // Errores
  success: '#00B97A',              // Éxito
  warning: '#FFA000',              // Advertencia

  // CodeBlock
  codeBg: '#f5f5f5',
  codeText: '#222',

  appBarBg: '#3B2C7A',             // Fondo AppBar claro
  appBarText: '#FFFFFF',           // Texto AppBar claro - Blanco para contraste
};

export const dark = {
  // Títulos y textos
  contentTitle: '#FFFFFF',         // Títulos en blanco
  contentSubtitle: '#8F7BE8',      // Subtítulos — color de acento del curso
  drawerTitle: '#FFFFFF',          // Título del drawer en blanco
  drawerSection: '#8F7BE8',        // Acento intermedio para secciones del drawer
  textPrimary: '#F3F6FB',          // Texto principal sobre fondo oscuro
  textSecondary: '#AAB4BE',        // Texto secundario

  // Fondos
  background: '#181C23',           // Fondo general oscuro, elegante
  backgroundLight: '#232936',      // Fondo alternativo (cards, etc.)
  drawerBg: '#181C23',             // Drawer y TOC fondo (igual que background)

  // Drawer y TOC
  tocTitle: '#8F7BE8',             // Título TOC
  tocText: '#F3F6FB',              // Texto TOC

  // Accentos y bordes
  accent: '#8F7BE8',                // Acento del curso
  border: '#232936',                // Bordes sutiles

  // Inline code
  inlineCodeBg: 'rgba(120,120,120,0.22)',
  inlineCodeText: '#B4A6F2',

  // Otros
  error: '#FF5370',                // Errores
  success: '#43D39E',              // Éxito
  warning: '#FFB300',              // Advertencia

  // CodeBlock
  codeBg: '#23272e',
  codeText: '#f8f8f2',

  appBarBg: '#241B4E',             // Fondo AppBar oscuro
  appBarText: '#ffffff',           // Texto AppBar oscuro - Blanco para contraste
};

// Por defecto exportamos dark
const colors = dark;
export default colors;
