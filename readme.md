Realizaremos una pequeña simulación de una tienda. Para
ello nos serviremos de la API de pruebas de Platzi:
- https://fakeapi.platzi.com/
Para las conexiones a esta API nos serviremos de axios.
<h2>Vistas</h2>
La aplicación consta de 4 vistas muy sencillas. Se pueden hacer todos los
componentes que se deseen, pero sólo será necesario entregar estas cuatro
vistas.
Como todas las vistas, que no son la del login, en la parte superior se
mostrará un menú de navegación con un botón para hacer logout. En todas
estas pantallas no se podrá navegar de ninguna manera sin tener un token
guardado. Si no se tiene se navegará a la pantalla de login.
<h3>Login</h3>
El menú tendrá dos enlaces, uno para la vista de Listado de productos y otro
para la vista del Perfil. El botón de logout borrará el token guardado de todos
los sitios donde esté y navegará al login.

Se requiere un formulario sencillo de login con dos inputs: uno de tipo email y
otro de tipo password. Ambos campos serán obligatorios y no debería realizar
la petición en caso de que:
- alguno de los campos esté vacío
- el campo de email no tenga un email válido
Si todo es correcto al pulsar el botón de acceder se hará una petición a:
- [POST] https://api.escuelajs.co/api/v1/auth/login
Consulta la documentación de la API para más detalles de cómo hacer esta
petición.
Si la petición es correcta (devuelve un status 201 y un data con el token) se
guardará el token en el estado y en el localstorage y se navegará al listado de
productos.
Si la petición es incorrecta (status de de 401), se debe mostrar un error.

<h3>Listado de productos</h3>
El listado podrá filtrarse por título y por defecto se mostrarán los resultados
sin filtrar. Para filtrar es necesario meter al menos 3 caracteres. La paginación
en esta pantalla es opcional pero se valora positivamente.
Para cada producto se mostrará un componente con los datos básicos y una
de las imágenes. Pulsando en el producto (nombre, un botón o donde se
quiera) se navega al detalle del producto.
Para obtener los productos se utilizará:
- [GET] https://api.escuelajs.co/api/v1/products
- [GET] https://api.escuelajs.co/api/v1/products/?title=GenericDetalle de productos

<h3>Detalle de productos</h3>
Esta pantalla mostrará los mismos datos que los componentes de la anterior,
pero en este caso hay que hacer algún sistema para poder ir cambiando
entre las imágenes del producto. Se podrá utilizar para esto productos de
terceros.
Será posible navegar a esta pantalla introduciendo la dirección en la barra
del navegador
Para obtener el detalle:
- [GET] https://api.escuelajs.co/api/v1/products/4Perfil

<h3>Perfil</h3>
Por último se creará una vista con la información del usuario autenticado,
para ello obtendremos los datos desde:
- [GET] https://api.escuelajs.co/api/v1/auth/profile
Consulta la documentación para más detalles de cómo hacer esta petición.
