### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
- react is a front end framework so it makes making the front end of a website a lot easier and faster. Specifically when using the same thing over and over is a good project to use react on. Example instagram uses react and it makes the template for the images that they reuse on every image very easy.

- What is Babel?
- Babel pretty much translates different versions of javascript 

- What is JSX?
- is html like code that you can write in javascript. using babel it can be understood as html.

- How is a Component created in React?
- it can be written as a function that returns JSX and then be imported and called to main app componant. 

- What are some difference between state and props?
- State is something that can be changed and set whereas props are consistant information.

- What does "downward data flow" refer to in React?
- This refers to how Data will come from parent componants to children componants but not the other way around. an example is a parent sending props as data.

- What is a controlled component?
- A controlled component is where a form elements value is controlled by the components state.

- What is an uncontrolled component?
- An uncontrolled componentis where a form elements value is handled by the DOM not a react component.

- What is the purpose of the `key` prop when rendering a list of components?
- The purpose of the `key` prop is to give each componant an unique id to be able to easily manipulate the list.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components? Because if an item is deleted all the items indexes after the deleted item will change on the rerender.

- Describe useEffect.  What use cases is it used for in React components?
- useEffect is a hook you can use that will not be called on every render but only the first or when certain values are changed depending on second parameter. When making API calls that is a good case or making a timer.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
- useRef makes a mutable value that can persist across re-renders. A change to a ref doesnt cause a rerender.

- When would you use a ref? When wouldn't you use one?
- when you want a value to persist an example can be a counter. Don't useRef all the time to solve problems but try to use useState and other hooks when they fit better.

- What is a custom hook in React? When would you want to write one?
- A costum hook is a function that can uses one or more of the built in hooks. You can use a custom hooks when need to reuse functionality. examples are makeing Api calls you can make a custom hook for that.
