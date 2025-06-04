# 🌟 Mi E-Commerce (Pre-Entrega de Proyecto)

**Descripción breve:**  
Aplicación web tipo e-commerce desarrollada en **React**, donde el usuario puede:

- Ver un catálogo de productos (obtenidos desde una API).
- Agregar / editar / eliminar ítems en un carrito.
- Navegar entre distintas rutas.
- Realizar un checkout simulado.

> **Objetivo de esta pre-entrega:** presentar al cliente una primera versión funcional que cumpla con los requisitos mínimos de diseño, usabilidad y arquitectura.

---

## 🎯 1. Objetivos y métricas solicitadas

Durante esta pre-entrega, se buscó cumplir con los siguientes aspectos extraídos de la consigna:

---

### 1.1. Listado de productos

- **API REST externa:**  
  Se usa `https://fakestoreapi.com/products`.
- **Elementos a mostrar en cada tarjeta:**  
  - Imagen  
  - Título  
  - Precio  
  - Enlaces para:
    - **Ver detalle**  
    - **Agregar al carrito**
- **Manejo de estados:**  
  - 🌀 `loading` → Se muestra un spinner.  
  - ⚠️ `error` → Se muestra un mensaje de error amigable.

---

### 1.2. Carrito de compras

- **Agregar / aumentar / disminuir / eliminar productos**  
  Cada tarjeta de producto tiene un botón “Añadir al carrito”.  
  En la página del carrito, se permiten “+” / “−” para ajustar cantidades y un ícono de 📤 para eliminar ítems.
- **Cálculo dinámico**  
  - **Total de ítems**  
  - **Monto total**  
- **Persistencia**  
  - Uso de `localStorage` para mantener el carrito al recargar la página.

---

### 1.3. Rutas y navegación

- **Librería:**  
  `react-router-dom` v6
- **Rutas definidas:**
  1. `/` &rarr; **HomePage** (página de bienvenida)  
  2. `/productos` &rarr; **ProductosPage** (catálogo con grid responsivo)  
  3. `/producto/:id` &rarr; **ProductoDetallePage** (detalle de cada producto)  
  4. `/carrito` &rarr; **CarritoPage** (lista de ítems agregados)  
  5. `/checkout` &rarr; **CheckoutPage** (formulario simulado de compra)  
  6. `/login` &rarr; **LoginPage** (pantalla de autenticación ficticia)
- **Rutas dinámicas:**  
  - `/producto/:id` utiliza `useParams()` para leer el `id`.
- **Rutas protegidas:**  
  - `/carrito` y `/checkout` sólo accesibles si el usuario está autenticado (usando un `ProtectedRoute`).

---

### 1.4. Autenticación simple

- **AuthContext:** simula `login / logout`.
- **Regla de validación:**  
  - El usuario ingresa **cualquier** email y contraseña no vacíos.  
  - Al hacer “login”, se almacena el usuario en `localStorage`.  
- **Comportamiento si no está logueado:**  
  - Intentar acceder a `/carrito` o `/checkout` → redirige a `/login`.

---

### 1.5. Gestión de estado

- **React Context API + Hooks** (`useState`, `useEffect`, `useContext`):
  1. **CartContext** → Estado global del carrito  
     - `addToCart()`  
     - `removeFromCart()`  
     - `updateQuantity()`  
     - `clearCart()`  
     - `totalItems`  
     - `totalPrice`  
     - Persistencia en `localStorage`
  2. **AuthContext** → Estado de autenticación  
     - `user` (persistido en `localStorage`)  
     - `login(email, password)` → Simula validación y redirige a `/productos`  
     - `logout()` → Limpia `user` y redirige a `/login`

---

### 1.6. Diseño moderno y buenas prácticas

- **Styled-components:**  
  - Estilos modularizados  
  - Variables CSS (colores, tipografías)
- **Navbar fija en la parte superior:**  
  - Enlaces:  
    - **Home** → `/`  
    - **Productos** → `/productos`  
    - **Carrito** (ícono con badge de `totalItems`) → `/carrito`  
    - **Login / Salir** → según estado de `user`
- **Grid responsivo** para tarjetas de producto:  
  - **Sombra suave**  
  - **Bordes redondeados**  
  - **Transiciones** en hover
- **Formularios estilizados:**  
  - Inputs con estados `:focus`  
  - Botones con estados `:hover`
- **Estructura de carpetas semántica:**

  ```text
  src/
  ├─ assets/           ← Imágenes estáticas (logo, capturas)
  ├─ components/       ← Componentes reutilizables
  │   ├─ Navbar.jsx
  │   ├─ ProductCard.jsx
  │   ├─ CartItem.jsx
  │   ├─ Spinner.jsx
  │   └─ ProtectedRoute.jsx
  ├─ contexts/         ← Contextos globales
  │   ├─ CartContext.jsx
  │   └─ AuthContext.jsx
  ├─ pages/            ← Páginas (rutas)
  │   ├─ HomePage.jsx
  │   ├─ ProductosPage.jsx
  │   ├─ ProductoDetallePage.jsx
  │   ├─ CarritoPage.jsx
  │   ├─ CheckoutPage.jsx
  │   └─ LoginPage.jsx
  ├─ services/         ← Lógica de llamadas a API (api.js)
  ├─ styles/           ← Estilos globales y variables (GlobalStyles.js)
  ├─ App.jsx           ← Definición de rutas y layout general
  └─ index.js          ← Renderizado principal (BrowserRouter + Providers)

### 1.7. Checkout simulado

1. **CheckoutPage:**
   - Muestra el “Total a Pagar” (obtenido de `totalPrice` en `CartContext`).
   - Formulario con campos:
     1. Nombre completo
     2. Dirección de envío
   - Si el carrito está vacío → muestra mensaje:
     ```
     Tu carrito está vacío. Añade productos antes de hacer checkout.
     ```
   - Al enviar, simula una compra exitosa, vacía el carrito y muestra un mensaje de confirmación.

---

## 📸 2. Capturas de pantalla

1. **HomePage**  

   > “Bienvenido a Mi E-Commerce” con botón **“Ver Productos”**.

2. **ProductoDetallePage**  

   > Muestra imagen grande, título, precio y control de cantidad.

3. **ProductosPage**  
   
   > Grid responsivo con tarjetas, botones **“Añadir al carrito”** y **“Ver detalle”**.

4. **CarritoPage**  
   
   > Lista de ítems con imagen, precio, **“+”/“−”**, subtotal, ícono de papelera, total y botones **“Vaciar carrito”** / **“Ir a Checkout”**.

5. **CheckoutPage**  
  
   > Formulario simple (Nombre, Dirección) y mensaje de confirmación al completar.

6. **LoginPage**  
 
   > Formulario con inputs de email y contraseña, botón **“Ingresar”** y manejo de errores si faltan datos.

---

## 🛠️ 3. Tecnologías y librerías utilizadas

- **React** (v18)
- **Create React App**
- **React Router DOM** (v6)
- **Styled-Components** (CSS-in-JS)
- **Axios** (para llamadas a la API)
- **React Icons** (íconos de carrito, usuario, basurero)
- **Context API + Hooks** (`useState`, `useEffect`, `useContext`, `useParams`)
- **LocalStorage** (persistencia de carrito y usuario)

---

## 📂 4. Estructura de carpetas y archivos clave

```text
mi-ecommerce/
├─ node_modules/
├─ public/
│   └─ index.html          # “Plantilla” HTML base
│
└─ src/
    ├─ assets/             # Imágenes (logo, capturas)
    │   ├─ logo.png
    │   ├─ readme-home.png
    │   ├─ readme-listado.png
    │   ├─ readme-detalle.png
    │   ├─ readme-carrito.png
    │   ├─ readme-checkout.png
    │   └─ readme-login.png
    │
    ├─ components/         # Componentes reutilizables
    │   ├─ Navbar.jsx
    │   ├─ ProductCard.jsx
    │   ├─ CartItem.jsx
    │   ├─ Spinner.jsx
    │   └─ ProtectedRoute.jsx
    │
    ├─ contexts/           # Contextos globales
    │   ├─ CartContext.jsx
    │   └─ AuthContext.jsx
    │
    ├─ pages/              # Páginas (rutas)
    │   ├─ HomePage.jsx
    │   ├─ ProductosPage.jsx
    │   ├─ ProductoDetallePage.jsx
    │   ├─ CarritoPage.jsx
    │   ├─ CheckoutPage.jsx
    │   └─ LoginPage.jsx
    │
    ├─ services/           # Lógica de API
    │   └─ api.js
    │
    ├─ styles/             # Estilos globales y variables
    │   └─ GlobalStyles.js
    │
    ├─ App.jsx             # Definición de rutas y layout general
    └─ index.js            # Renderizado: BrowserRouter + Providers


 5. Guía rápida para levantar el proyecto
Sigue estos pasos en tu VSCode (o terminal preferida) para clonar e iniciar la aplicación localmente:

Clonar el repositorio

git clone https://github.com/JonatanUribio7749/Proyecto_React-Talento-Tech.git

cd mi-ecommerce



Instalar dependencias

npm install



Descarga todos los paquetes necesarios:
react, react-dom
react-router-dom
styled-components
axios
react-icons



Ejecutar en modo desarrollo
npm start