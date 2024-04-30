# Desafío Banco Solar
Este desafío es parte del curso de Desafio Latam, Desarrollo de aplicaciones Full Stack Js, en el cual validaremos nuestros conocimientos de Conectar una base de datos PostgreSQL con Node, Realizar consultas DML con Node y el paquete pg, Realizar consultas TCL con Node y el paquete pg, Construir una API RESTful utilizando PostgreSQL para la persistencia de datos, Manejar errores y Manejar códigos de estado HTTP.


# Descripción del desafío
El Banco Solar acaba de decidir invertir una importante suma de dinero para contratar un equipo de desarrolladores Full Stack que desarrollen un nuevo sistema de transferencias, y han anunciado que todo aquel que postule al cargo debe realizar un servidor con Node que utilice PostgreSQL para la gestión y persistencia de datos, y simular un sistema de transferencias. El sistema debe permitir registrar nuevos usuarios con un balance inicial y basados en estos, realizar transferencias de saldos entre ellos.


# Visuales



| Vista principal | Transferencia |
| --- | --- |
| ![nueva](/assets/agregando.png)| ![Visualización_dos](/assets/editar.png) |

La vista principal del proyecto, nos muestra 4 secciones:
- Dos formularios simples: Agregar usuarios, Realizar transferencia.
- Dos Tablas: Una tabla para visualizar a todos los usuarios registrados, y otra para listar todas las transferencias realizadas.

Además, se nos permite editar y/o eliminar a los usuarios registrados. 
Nota: Si un usuario tiene una transferencia hecha, ya sea si el usuario es emisor o receptor, no se puede eliminar ese usuario. No se utiliza on delete cascade por temas de trazabilidad.

## Empezando 🚀

Estas instrucciones te guiarán para obtener una copia de este proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.

### Prerrequisitos 📋

Lista de software y herramientas, incluyendo versiones, que necesitas para instalar y ejecutar este proyecto:

- Sistema Operativo: puedes usar Ubuntu o Windows 10 o superior.
- Se trabajo con Javascript.
- Se utilizo pg y express.

### Instalación 🔧

1. Para utilizar este proyecto debes clonar este repositorio en tu máquina, utilizando git.

```
git clone git@github.com:jesbell/miRepertorio.git
```

2. Una vez allí puedes abrir el proyecto donde te sea más comodo. Pero dentro de la carpeta del proyecto deberas realizar las instalación de las dependencias, con el siguiente comando.

```
npm install
```

3. Debes crear la base de datos correspondiente que esta utilizando este proyecto y sus tablas. Dichas consultas se encuentran en el archivo archivoBanco.sql. Desdes realizar las instrucciones indicadas, para generar la base de datos (bancosolar) y la tablas (usuarios y transferencias) que utiliza este proyecto.

4. El siguiente paso es hacer la conexión a la base de datos. En el archivo dbconfig.js debes agregar tu usuario y contraseña.
```
const name = "";
const pass = "";

```
5. Finalmente, debes levantar el servidor (index.js) con el siguiente comando en tu consola
```
node index.js
```

Este te dará el enlace para que puedas ingresar directamente al localhost
```
http://localhost:3000
```

Una vez allí, puedes crear usuarios, editarlos, eliminarlos (si procede) y crear transferencias.

## Soporte

Si tienes algún problema o sugerencia, por favor abre un problema [aquí](https://github.com/jesbell/miRepertorio/issues).

## Versionado  📌

Usamos [Git](https://git-scm.com) para el versionado.

## Expresiones de Gratitud 🎁

Si encontraste cualquier valor en este proyecto o quieres contribuir, aquí está lo que puedes hacer:

- Comparte este proyecto con otros
- Invítanos un café ☕
- Inicia un nuevo problema o contribuye con un PR
- Muestra tu agradecimiento diciendo gracias en un nuevo problema.

---

⌨️ con ❤️ por [Joselyn Gonzalez](https://github.com/jesbell) 😊
