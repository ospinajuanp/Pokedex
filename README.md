# PokemonGame
Consumo de Api y juego de peleas básico 

# HTML
- index.html &nbsp; 
Este es un documento HTML que incluye una sección de encabezado con un título, dos menús de selección para elegir una generación y tipo de Pokemon, y una sección principal con múltiples tarjetas que muestran información de Pokemon como nombre e imagen. Las tarjetas también tienen botones etiquetados como "VER" y "JUGAR". El documento también importa varias hojas de estilo CSS, una de las cuales se llama "normalize.css", que ayuda a que el diseño sea coherente en distintos navegadores. El documento utiliza clases para el estilo y el diseño, y utiliza un diseño adaptable para ajustarse a las diferentes anchuras de los dispositivos.

# CSS
- index.css &nbsp;
Se trata de una hoja de estilos CSS que comienza importando una fuente de Google Fonts y establece el tamaño y la familia de la fuente base para todo el documento. A continuación, aplica algunos estilos generales a todos los elementos, como establecer el tamaño de la caja en border-box, eliminar el margen y el relleno, y establecer un color por defecto. También aplica un efecto de transición a todos los elementos, que tardará medio segundo en cambiar cualquier propiedad que se modifique. Además, configura el cuerpo para que ocupe toda la altura y anchura de la ventana gráfica y establece el tamaño de la fuente en 1,5rem. También hay una clase llamada "container__detail" que está configurada para tener un display de none, lo que ocultará cualquier elemento con esa clase.

- header.css &nbsp;
Esta hoja de estilos CSS aplica estilos a elementos dentro de un contenedor con clase "container__header". Establece que el contenedor ocupe el 100% del ancho, con diseño flexible y elementos hijo centrados. También aplica estilos al título, incluyendo el tamaño y el peso de la fuente, el borde, el color de fondo y el radio del borde. También hay una sección para las opciones de selección dentro del contenedor, a las que también se les aplica el estilo de color de fondo, radio de borde y anchura. Los elementos de selección también tienen un ancho mínimo y máximo. El texto del título también recibe un efecto de stroke.

- cards.css &nbsp;
Esta hoja de estilos CSS aplica estilos a elementos con clase "container-card" y "card". El elemento container-card está configurado para ocupar el 90% del ancho y está centrado en la página con un margen de 0 auto. Tiene un padding de 8px y utiliza flex layout para organizar los elementos child en una fila y envolverlos cuando sea necesario.
El elemento card tiene las propiedades flex-grow, min-width, min-height, border-radius, border, background-color y text-color. Además, tiene elementos hijos con las clases "card__up" y "card__bottom" que también tienen estilo, con efectos hover, propiedades de visualización y posicionamiento. La tarjeta también tiene un elemento imagen.

- detail.css &nbsp;
Este css establece la estructura de una página web utilizando flexbox. Se establece un tamaño de fuente base para el documento, y se aplica a todos los elementos un box-sizing y un color de texto. Se establece un alto y ancho para el body y se agrega una clase container__detail con un alto y ancho del 100% y una disposición en columna. Se agrega una clase container__detail--img que tiene un alto y ancho del 100% y una disposición en columna. En el contenido se utilizan varias clases con disposiciones y tamaños específicos, y se utilizan bordes y tamaños de fuente para dar estilo a los elementos.