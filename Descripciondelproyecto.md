### Integrantes: 

* Eric Yael Zamarron Ramirez
* Karen Aide Navarez Espinoza
* Fanny Fuentes Reyes
* Douglas Gonzalez Stanford
* Tomas Emiliano Cienega Ortega
* Arturo Garcia Ibarra

**HEIN** is an application for buying clothes, it will allow our users to choose from a selected variety of products the ones they prefer, add them to the shopping cart and buying them with just a few clicks.

### Postwork 1

* On postwork1 we created a new application with the command `npx create-react-app [app name].`
* This command will set up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production.
* Under the hood, it uses Babel and webpack. 
* The directory was organized by deleting the files that were not going to be used and correcting the references to the files.
* A component named **Pedidos** was created. This component is responsible for rendering the clothes catalogue.
* Each element is rendered in a component called **PedidoItem**.
* **PedidoItem** contains the name of the product, a brief description and the price.
* Styles were added to the elements of the list.

### Postwork 2

The objective was to handle events and manipulate the state to add elements to the shopping cart. The followed steps were as follow:
* A component **Cart** was created in which the number of added elements to the cart is shown.
* Two inputs were added for each product, the first one allows the user to choose the number of products that he wishes to acquire and the second one is meant for adding them to the cart.
* We created the event handlers needed for the new elements.
* The hook `useState` was used to manipulate the number displayed on the shopping cart.

### Postwork 3

In this postwork the focus was on the dynamic styles.

* In our case we used the CSS Modules for the whole project.
* We used a variety of hovers, buttons, cards and many others to personalize our work.
* It was at this stage that much of the design of the interface was done. We tried several things to make it look professional and organized for the users.
* Among the most important things we did was the navigation bar which we will continue to develop on the following stages.

### Postwork 4

In this postwork the main objective was the modal for the shopping cart.

* Wherever we had the need to envelop several elements we used **React Fragments**.
* On the **index.html** two new nodes were added at the same level as the main node where the application is rendered. They are meant to allow us to create the necessary portals.
* Two portals were created, one for the backdrop which will darken the screen and highlight the modal and the modal itself which must open when the shopping cart is selected.
* Also, whenever the user clicks on the backdrop the modal must close. 
* The modal will display a summary of the shopping cart.

### Postwork 5

The main point of this postwork is the use of the hooks `useReducer` y `useContext`.

* We created the component **StateContext** to be used as the context of the shopping cart. 
* It was necessary to save a list of the elements, the total of elements and the respective functions to add and delete elements.
* In the UI the total amount of clothes should be displayed.
* In the modal we showed the list of products added to the cart and the total to be paid.
* The user can change the amount of each product from the modal and the total should be updated.

### Postwork 6

On Postwork 6 we will move the list of products to **Firebase** and we will use them with HTTP requests and event handlers. For this we followed the next steps:

* Create an account on Firebase and configure everything acording to the prework.
* Create a new project on Firebase and a new database with 12 different products.
* For each product we recorded its name, a description and the price.
* To obtain the information use `fetch()`
* Create a custom hook that allows to make **HTTP requests**.
* Every time the app is run it should make an HTTP request to the Firebase project to obtain the list of products that must be rendered.

### Postwork 7

On this postwork we will improve the user experience by adding different views depending on the URL visited. To achieve this the following steps were crucial:

* Instal the latest version of **React Router** 
* Use the component to wrap the application.
* Define a start route which should include the name of the name of the application, a brief description and an image.
* Define a route for the catalogue.
* Define a route that renders the details of the products.
* Define a route for the checkout where an overview of the purchase should be displayed.
* Define a route that will be showed by default whenever the route is not found along with a message.
* Add navigation links for all the routes.

### Postwork 8

Finally in the last postwork we used **Jest** which is a testing framework to test our code's functionality. The objective of this process is to evaluate most of the posible scenarios and confirm they work as intended. 

For this purpose we relied on unit testing where the smallest components or the modules of a software are tested individually. To avoid making HTTP petitions we used mocks.

Link to the repository of our project

[HTTPS link](https://github.com/ArturoGarIba/TiendaRopa_REACT-JS.git)

[SSH link](git@github.com:ArturoGarIba/TiendaRopa_REACT-JS.git)

Thanks for reading this readme and we hope you enjoy our application ;)