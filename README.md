# LET IT BE SHOP - ECOMMERCE 

-------✨ DESCRIPCIÓN DEL PROYECTO ✨------

Desarrollo de un e-commerce utilizando React.js y Firebase a modo de SPA (Single Page Application).

La APP comienza en el Home donde se pueden ver todos los productos del comercio.

Tiene la opción de filtrar los productos por categoría, seleccionando las mismas desde el NAV.

🛒 Una vez que opta por algún producto, al hacer click en el botón "BUY NOW" lo llevará al detalle del producto, donde podrá elegir la cantidad deseada del mismo.

👜 Al agregar el primer producto a la Bag (carrito), aparecerá el widget de la Bag en el NAV, con un contador de los productos que tiene dentro de la misma.

🧰 Manejo del stock:
- Si el producto en la base de datos no tiene stock (stock = 0), en el detalle del producto no aparecerá ni el contador ni el boton agregar al carrito.
- Si el producto que agrega ya está en la BAG, le sumará la nueva cantidad (siempre y cuando no supere al stock de ese producto, sino aparecerá un mensaje de advertencia).

💰 Cuando el cliente ya tenga los productos que desea llevar en la BAG, podrá pasar al CHECKOUT en cualquier momento haciendo click en el botón correspondiente.

📋 Una vez dentro del CHECKOUT, el cliente podrá observar el resúmen de su compra, el precio total y deberá llenar un formulario (con los campos validados) para finalizar su compra.

💼 Al finalizar la compra:

- Desde el lado del vendedor: se creará un documento en la base de datos con los datos del comprador, del carrito, la hora de la compra, el estado de la compra, y el precio total a pagar.

- Desde el lado del vendedor: le llegará en pantalla un mensaje de aprobación del pedido y un número identificador (ID) de la compra.


-----🔨 ¿ QUÉ SE UTILIZÓ PARA DESAROLLAR ESTA APP ? 🔧-----

- React.js para escribir el código. 

- BrowserRouter: para hacer la navegación del sitio.

- Firebase y firestore: para hacer la base de datos de los productos, de las ordenes de compras y para el deploy del ecommerce. 

- Librería MaterialUI: para los iconos del sitio, la elegí porque no la conocía y quería probar algo nuevo que no sea Bootstrap/Tailwind.













