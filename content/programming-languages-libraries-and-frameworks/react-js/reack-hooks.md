---
title: "React Hooks"
metaTitle: "React Hooks | DevBucket"
metaDescription: ""
---

## React Hooks


Hooks are a new feature in React 16.8 that enable functional components to access state and other React functionalities. They are functions that allow you to integrate with React's state and lifecycle mechanisms, without the need for a class component. This allows for the reuse of stateful logic across different components, without altering their structure.

React offers several built-in Hooks, such as `useState`, `useEffect`, `useContext`, `useReducer`, and many others, that can be utilized for state management, performing side-effects, sharing data between components, etc. Additionally, you can also create your own Hooks to share stateful logic between multiple components.

Hooks simplify the process of working with state and lifecycle methods in functional components, promoting modular and reusable code, and making it easier to read and test.

Hooks also make it easier to test components, as they promote separation of concerns and make it easier to isolate individual pieces of logic for testing. In addition, hooks provide a more efficient and optimized way of adding state and other React features, as they allow React to re-use stateful logic between renders, reducing the amount of work React needs to do and improving performance.

### Motivation of hooks

The use of Hooks in ReactJS is motivated by the need to address a number of issues that have arisen from the use of React over the years. These issues include

- **Difficulty in reusing stateful logic between components:** With traditional React methods, it was difficult to attach reusable behavior to a component. This resulted in a cluttered structure of components surrounded by various abstractions such as higher-order components and render props. Hooks solve this problem by allowing developers to extract stateful logic from a component, making it easier to share logic among multiple components and with the wider community.

- **Complex components becoming hard to understand:** Components in React can become complex, especially when they start to mix unrelated logic in the same lifecycle method. Hooks allow developers to split components into smaller functions based on the related pieces of logic.

- **Confusion around the use of classes:** Classes can be a barrier to learning React as they work differently from how classes work in other programming languages. In addition, classes can lead to disagreements between experienced React developers, and they can limit the potential of future tools such as ahead-of-time compilation and hot reloading. Hooks embrace functions and provide a simpler, more intuitive API.

Overall, Hooks provide a solution for the problems associated with traditional React methods and allow developers to take advantage of more features in React without the use of classes.

### Benefits of hooks

There are several benefits to using Hooks in React:

- **Reusability:** Hooks allow for code sharing and reuse by extracting stateful logic from a component and making it available to other components or the community.
- **Better Organization:** Hooks enable component organization by splitting them into smaller functions based on related pieces, making maintenance and understanding easier.
- **Increased Productivity:** Hooks streamline code and improve readability, writing, and testing of components.
- **Improved Performance:** Hooks optimize component performance through techniques such as memoization and fine-grained control over rendering, avoiding unnecessary re-renders.
- **Improved Learning Curve:** Hooks simplify the codebase, making it easier for new developers to understand and work with React.
- **Better Integration:** Hooks facilitate integration with other libraries and tools, allowing for extended capabilities and complex application building.
- **No Class Components:** Hooks provide more access to React's features through functional components, improving performance and ease of use.
- **Improved Code Reuse and Composition:** Hooks enhance code reuse and composition by extracting and sharing stateful logic between components.
- **Better Understanding of Components:** Hooks improve component comprehension by dividing them into smaller functions, revealing their workings and relationships.
- **Increased Efficiency:** Hooks allow for writing optimized code that utilizes modern browser APIs and optimizations.
- **Improved Readability and Maintainability:** Hooks improve code readability and maintainability by organizing code into smaller functions, making it more straightforward.
- **Better Integration with Other Libraries and Tools:** Hooks provide a unified and consistent way of writing components that can be used with libraries such as Redux, MobX, and React Router.
- **Simplified Development Experience:** Hooks make it easier for developers to start with React, as they don't have to learn complex class-based concepts, and can instead use familiar functional programming techniques.

## Rules of Hooks

There are two rules of Hooks in React:

- **Only Call Hooks at the Top Level:** You should only call Hooks at the top level of your component or your own custom Hooks. Don’t call Hooks inside loops, conditions, or nested functions.

- **Only Call Hooks from React Functions:** You should only call Hooks from React function components or your own custom Hooks. Don’t call Hooks from regular JavaScript functions.

By following these rules, you ensure that Hooks are called in the same order each time a component renders. This is what allows React to correctly preserve the state of Hooks between renders.

#### Reason: Only Call Hooks at the Top Level

React Hooks should only be called at the top level of your component or your custom Hook, because React relies on the order in which Hooks are called to determine the state and behavior of your components. When you call a Hook inside a loop or condition, it creates a separate state for each iteration or branch, which can lead to unexpected behavior and bugs. To avoid these issues, it’s important to only call Hooks at the top level, where they are guaranteed to be called in the same order each time the component is rendered. This allows React to consistently track the state and behavior of your components, ensuring that your app behaves as expected.

- Consistency: When Hooks are called in the same order within a component, it ensures that the state and effects of your components are consistent and predictable. If you call Hooks inside loops or conditions, it can lead to unexpected behavior and potential bugs.

Here's an example of how calling Hooks inside loops can lead to unexpected behavior:

```JS
function Counter() {
  let [count, setCount] = useState(0);

  for (let i = 0; i < 10; i++) {
    useEffect(() => {
      console.log(`Effect ${i} executed.`);
    });
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

In this example, you would expect each iteration of the loop to create a new effect. However, this code will only create a single effect, and it will only log "Effect 9 executed." This is because the Hooks are being called inside the loop, and the value of i changes with each iteration, which means React can't keep track of the state between calls.

- Optimization: Calling Hooks only at the top level can also improve the performance of your React application. React is able to optimize the performance of your components better when Hooks are called in the same order each time the component is rendered.

Here's an example of how calling Hooks inside conditions can lead to reduced performance:

```JS
function Counter() {
  let [count, setCount] = useState(0);

  if (count > 5) {
    useEffect(() => {
      console.log(`Effect executed.`);
    });
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

In this example, the effect will only be executed if the count is greater than 5. However, because the condition changes with each render, React can't optimize the performance of your component as effectively. This can lead to a slower and less performant application.

#### Reason:Only Call Hooks from React Functions

Hooks should only be called from React functions because they allow you to reuse stateful logic, and stateful logic should only occur in response to changes in your React components. This helps ensure that your state updates in a predictable manner and eliminates the need for complex and hard-to-follow control flow structures. If you call Hooks from outside of a React function, such as a regular JavaScript function, it will not have access to the current React state or the ability to trigger a re-render. Additionally, it will not be able to properly track the state of your components, which could lead to unpredictable behavior and bugs in your code. To ensure that your Hooks work correctly, it is recommended that you only call them from React functions.

Instead, you can:

- Call Hooks from React function components.
- Call Hooks from custom Hooks

Here's an example of what not to do:

```JS
function myFunction() {
  const [count, setCount] = useState(0);
  setCount(count + 1);
}

function App() {
  myFunction();
  return <h1>Hello, World!</h1>;
}
```

In this example, the useState hook is being called from the myFunction function, which is not a React function. This will result in an error because the hook can only be called from React functions.

Here's the correct way to use the hook:

```JS
function App() {
  const [count, setCount] = useState(0);
  setCount(count + 1);
  return <h1>Hello, World!</h1>;
}
```

In this example, the useState hook is being called from the App component, which is a React function. This will work as expected and the component tree will be updated when the state changes.

---

## Built-in React hooks

  | React hooks                                   | Used For                                    |
  | --------------------------------------------- | ------------------------------------------- |
  | useState Hook                                 | For State Management                        |
  | useEffect Hook                                | For Side Effects                            |
  | useContext Hook                               | For Context API                             |
  | useReducer Hook                               | For Managing Complex State                  |
  | useMemo Hook                                  | For Memoization                             |
  | useCallback Hook                              | For Optimizing Function Calls               |
  | useRef Hook                                   | For Managing Refs                           |
  | useDebugValue Hook                            | For Debugging                               |
  | useLayoutEffect Hook                          | For Optimizing Layout Peformance            |
  | useLazy, useSuspense, and useTransition Hooks | For Lazy Loading                            |
  | useImperativeHandle Hooks                     | For Exposing Functions to Parent Components |
  | useMutationEffect Hooks                       | For Synchronous Updates in Layout           |
  |                                               |                                             |


## useState hook: For State Management

The `useState` hook is a built-in hook in React that enables you to manage state within your functional components.

To use the useState hook, you first need to import it at the top of your file using:

```JS
import React, { useState } from 'react';
```

Then, you can use the hook inside your functional component like this:

```JS
const [state, setState] = useState(initialState);
```

Here, 
* `state` is the current state value and 
* `setState` is a function that you can use to update the state value
* `initialState` is the initial value of the state.

For example, let's say you want to add a counter to your component. You can use the useState hook to initialize the counter to 0 and provide a way to increment it when a button is clicked:

```JS
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default Counter;
```

In this example, we've initialized the `count` state to `0` using `useState(0)`. We've also created an `incrementCount` function that updates the count state using `setCount(count + 1)`. Finally, we've rendered the count value in a paragraph tag and a button that calls the `incrementCount` function when clicked.


## useEffect hook: For Side Effects

The `useEffect` hook is a built-in hook in React that allows you to perform side effects in your functional components.

Side effects include operations that affect something outside of the component, such as
* Updating the DOM
* Making API calls
* Setting up event listeners


The useEffect hook takes a function as its argument and runs that function every time the component is rendered. By default, it runs the function after every render.

Here's the basic syntax for using the useEffect hook:

```JS
import React, { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    // do something
  });

  return <h1>Hello, World!</h1>;
}
```

In this example, we've created a functional component called MyComponent and used the useEffect hook to execute a function. This function will run every time the component is rendered.

You can also pass a second argument to useEffect that controls when the function should run. The second argument is an array of values that the effect depends on. If any of those values change, the effect will run again.

For example, if you only want the effect to run once when the component mounts, you can pass an empty array as the second argument:

```JS
import React, { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    // do something
  }, []);

  return <h1>Hello, World!</h1>;
}
```

In this example, the effect will only run once when the component mounts because we've passed an empty array as the second argument.

Some common use cases for the useEffect hook include fetching data from an API, subscribing to events, and updating the DOM. The useEffect hook is a powerful tool for managing side effects in your React components.


## useContext Hook: For Context API 

The `useContext` hook is a built-in hook in React that provides a way to pass data down the component tree without having to pass props down manually at every level.

To use the useContext hook, you first need to create a context object using the `createContext` method. 

Here's an example:
```JS
import React, { createContext } from 'react';

const MyContext = createContext(defaultValue);
```
In this example, we've created a context object called `MyContext` using the `createContext` method. We've also provided a default value for the context using the defaultValue parameter.

Next, you can use the `MyContext` object in your component tree by wrapping the relevant components with the `MyContext.Provider` component. 

Here's an example:
```JS
<MyContext.Provider value={value}>
  <ChildComponent />
</MyContext.Provider>
```
In this example, we've used the `MyContext.Provider` component to wrap a child component called `ChildComponent`. We've also passed a value to the context using the value prop.

Finally, you can use the `useContext` hook inside any child component that needs to access the context. 

Here's an example:
```JS
import React, { useContext } from 'react';
import MyContext from './MyContext';

function ChildComponent() {
  const value = useContext(MyContext);

  return <div>{value}</div>;
}
```
In this example, we've used the `useContext` hook to access the value of the `MyContext` object in the `ChildComponent`. The useContext hook returns the `current` value of the context, which we've stored in a variable called `value`.

The useContext hook is a powerful tool for passing data down the component tree in a more efficient and less error-prone way than passing props down manually.

## useReducer Hook: For Managing Complex State  
The `useReducer` hook is a built-in hook in React that allows you to manage state using a reducer function. It is an alternative to the useState hook and is particularly useful for managing complex state or state that involves multiple sub-values.

To use the useReducer hook, you first need to define a `reducer` function that takes the current state and an action as its arguments and returns the new state. 

Here's an example:
```JS
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}
```

In this example, we've defined a reducer function that takes 
* a `state` object with a count property and 
* an `action` object with a type property. 

The reducer function checks the value of the type property and returns a new state object with the `count` property incremented or decremented accordingly.

Once you've defined your reducer function, you can use the useReducer hook inside your functional component like this:

```JS
import React, { useReducer } from 'react';

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}

export default Counter;
```

In this example, we've created a functional component called `Counter` that uses the `useReducer` hook to manage state. We've passed: 
* the reducer function as the first argument to useReducer and 
* an initial state object as the second argument. 
  
The useReducer hook returns an array with the current state and a dispatch function that we can use to send actions to the reducer function.

We've then rendered the count value in a paragraph tag and two buttons that call the dispatch function with an action object that specifies the type of action to perform.

The useReducer hook is a powerful tool for managing complex state in your React components. It provides a way to manage state in a more structured way and can help prevent bugs by centralizing state updates in a single function.


## useMemo Hook: For Memoization  

The `useMemo` hook is a built-in hook in React that allows you to memoize the results of a function call and prevent unnecessary re-renders of your component.

Memoization is a technique where the results of a function call are cached so that if the same arguments are passed to the function again, the cached result can be returned instead of re-running the function.

Here's the basic syntax for using the useMemo hook:

```JS
import React, { useMemo } from 'react';

function MyComponent({ a, b }) {
  const result = useMemo(() => {
    // do some expensive calculation using `a` and `b`
    return someResult;
  }, [a, b]);

  return <div>{result}</div>;
}
```

In this example, we've created a functional component called `MyComponent` and used the `useMemo` hook to memoize the result of an expensive calculation. 

The useMemo hook takes two arguments: 
* the first is a function that returns the memoized value, and 
* the second is an array of dependencies that the memoized value depends on. 

If any of the dependencies change, the memoized value will be recalculated.

By using useMemo, we can prevent unnecessary re-renders of MyComponent when `a` and `b` haven't changed, since the memoized value will be returned from cache.

Some common use cases for the useMemo hook include memoizing the results of expensive calculations, optimizing performance by preventing unnecessary re-renders, and improving the efficiency of your application.

It's important to note that the useMemo hook should only be used for expensive calculations or other operations that might slow down your component's rendering performance. If you're not experiencing any performance issues, there's no need to use the useMemo hook.

## useCallback Hook: For Optimizing Function Calls  

The `useCallback` hook is a built-in hook in React that allows you to optimize your function components by memoizing the functions they depend on.

When a component is re-rendered, its functions are recreated from scratch. If a function is passed as a prop to a child component, and the parent component re-renders, the child component will re-render too even if the props it receives haven't changed. This can lead to performance issues, especially if the function is computationally expensive or requires network requests.

The useCallback hook solves this problem by memoizing the function and returning a memoized version of it. This means that the same function instance will be used across renders as long as its dependencies haven't changed.

Here's the basic syntax for using the useCallback hook:
```JS
import React, { useCallback } from 'react';

function MyComponent() {
  const memoizedFunction = useCallback(() => {
    // do something
  }, [dependency]);

  return <ChildComponent onClick={memoizedFunction} />;
}
```
In this example, we've created a memoized function called `memoizedFunction` using the `useCallback` hook. The function will only be recreated if the value of its dependency changes. We then pass this memoized function to a child component as a prop.

The second argument of the useCallback hook is an **array of dependencies**. If any of the dependencies change, the memoized function will be recreated. If the array is empty, the function will only be created once and then reused on subsequent renders.

Some common use cases for the useCallback hook include 
* optimizing event handlers, 
* preventing unnecessary re-renders caused by passing a function as a prop, and 
* optimizing expensive computations

By using the useCallback hook, you can improve the performance of your React components by avoiding unnecessary re-renders and reducing the computational cost of expensive functions.

## useRef Hook: For Managing Refs

The `useRef` hook is a built-in hook in React that allows you to create a mutable object that persists throughout the lifetime of a component.

The most common use case for useRef is to manage references to HTML elements in your component, such as a text input or a button. When you use the ref attribute on an HTML element, React will assign the DOM node to the current property of the ref object.

Here's the basic syntax for using the useRef hook:

```JS
import React, { useRef } from 'react';

function MyComponent() {
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleButtonClick}>Focus Input</button>
    </div>
  );
}
```

In this example, we've created a `useRef` object called `inputRef`, which we assign to the ref attribute of an input element. We also define a `handleButtonClick` function that calls the focus method on the current property of `inputRef` when a button is clicked.

Another use case for useRef is to store values that persist across re-renders of a component. Since the useRef object is not updated when the component is re-rendered, any values stored in the object will persist across re-renders.

```JS
import React, { useState, useRef } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const previousCountRef = useRef(null);

  const handleButtonClick = () => {
    previousCountRef.current = count;
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <p>Previous Count: {previousCountRef.current}</p>
      <button onClick={handleButtonClick}>Increment Count</button>
    </div>
  );
}
```
In this example, we've created a `useRef` object called `previousCountRef`, which we use to store the previous value of the count state. When the button is clicked, we update the `previousCountRef.current` property to the current value of count. Since the useRef object is not updated when the component is re-rendered, the previous count value will persist across re-renders.

The useRef hook is a powerful tool for managing references and persistent values in your React components.


## useDebugValue Hook: For Debugging  

The `useDebugValue` hook is a built-in hook in React that allows you to display custom labels for custom hooks in React DevTools.

When you create a custom hook, you can use the `useDebugValue` hook to provide a label for the hook that will be displayed in the React DevTools. This can be useful for debugging custom hooks and understanding how they're being used in your application.

Here's an example of how to use the useDebugValue hook:

```JS
import { useDebugValue, useState } from 'react';

function useCustomHook() {
  const [state, setState] = useState(0);

  useDebugValue('Custom Hook Label');

  return [state, setState];
}
```
In this example, we've created a custom `hook` called `useCustomHook` that uses the useState hook to manage state. We've also used the useDebugValue hook to provide a custom label for the hook that will be displayed in the React DevTools.

When you use this custom hook in your component, you'll be able to see the label in the React DevTools, which can help you better understand how the hook is being used and how it's affecting the state of your application.

The useDebugValue hook can be a helpful tool for debugging custom hooks and gaining better insight into how they're working in your application.

## useLayoutEffect Hook: For Optimizing Layout Peformance 

The `useLayoutEffect` hook is similar to the useEffect hook, but it runs synchronously immediately after a component has been updated and before the browser paints the screen, whereas useEffect runs asynchronously after the component has been updated and the browser has painted the screen.

The purpose of `useLayoutEffect` is to give you a way to perform imperative mutations to the DOM and interact with the browser layout before the browser has a chance to paint the screen, which can improve the perceived performance of your app.

The basic syntax for using the useLayoutEffect hook is the same as useEffect:

```JS
import React, { useLayoutEffect } from 'react';

function MyComponent() {
  useLayoutEffect(() => {
    // do something
  });

  return <h1>Hello, World!</h1>;
}
```

In this example, we've created a functional component called `MyComponent` and used the `useLayoutEffect` hook to execute a function immediately after the component has been updated.

You can use useLayoutEffect to perform imperative mutations to the DOM, such as 
* measuring the size of an element, 
* setting the focus to an input field, or 
* scrolling to a certain position on the page

It's important to note that using `useLayoutEffect` can potentially cause jank or other performance issues, especially on slower devices, so you should use it sparingly and only when necessary.

Also, keep in mind that the code inside a useLayoutEffect hook runs **synchronously**, so it can potentially block the main thread and cause the app to freeze. You should be mindful of this and only perform necessary operations inside the useLayoutEffect hook.

In summary, the useLayoutEffect hook is a powerful tool for optimizing the performance of your app by giving you a way to perform imperative mutations to the DOM before the browser has a chance to paint the screen. 

_However, you should use it sparingly and be mindful of potential performance issues._

## useLazy, useSuspense, and useTransition Hooks: For Lazy Loading 

React provides three hooks to help with lazy loading: 
* useLazy, 
* useSuspense 
* useTransition

### useLazy
This hook allows you to lazily load a component, meaning that the component is loaded only when it is actually needed. The `useLazy` hook takes a function that returns a promise as its argument. When the component needs to be loaded, the promise is resolved and the component is loaded. 

Here is an example:
```JS
import React, { useLazy } from 'react';

function MyComponent() {
  const LazyComponent = useLazy(() => import('./LazyComponent'));

  return (
    <div>
      <button onClick={LazyComponent.preload}>Load Component</button>
      {LazyComponent.loaded && <LazyComponent.default />}
    </div>
  );
}
```
In this example, we've created a functional component called `MyComponent` and used the `useLazy` hook to lazily load a component called LazyComponent. The LazyComponent is loaded when its promise is resolved, which can be triggered by calling the preload method on the LazyComponent object.

### useSuspense
This hook is used in conjunction with the `<Suspense>` component to show a fallback UI while a component is being loaded. The `<Suspense>` component is used to wrap the lazy-loaded component, and the `useSuspense` hook is used to show a fallback UI if the component is not yet loaded. 

Here is an example:
```JS
import React, { useLazy, useSuspense } from 'react';

function MyComponent() {
  const LazyComponent = useLazy(() => import('./LazyComponent'));
  const fallback = <div>Loading...</div>;

  return (
    <div>
      <button onClick={LazyComponent.preload}>Load Component</button>
      <useSuspense fallback={fallback}>
        {LazyComponent.loaded && <LazyComponent.default />}
      </useSuspense>
    </div>
  );
}
```
In this example, we've added the `<Suspense>` component around the lazy-loaded component, and we've used the useSuspense hook to show a fallback UI when the component is not yet loaded.

### useTransition
This hook is used to add a transition to a lazy-loaded component. 

The useTransition hook takes two arguments: 
* the timeout (in milliseconds) for the transition, and 
* a config object that contains the transition properties

Here is an example:
```JS
import React, { useLazy, useTransition } from 'react';

function MyComponent() {
  const LazyComponent = useLazy(() => import('./LazyComponent'));
  const [startTransition, isPending] = useTransition({ timeoutMs: 2000 });

  return (
    <div>
      <button onClick={() => startTransition(() => LazyComponent.preload())}>Load Component</button>
      {isPending ? <div>Loading...</div> : <LazyComponent.default />}
    </div>
  );
}
```

In this example, we've used the `useTransition` hook to add a two-second transition to the lazy-loaded component. 
* The `startTransition` function is used to trigger the transition, and 
* the `isPending` variable is used to check if the transition is still pending. 
  
If the transition is pending, we show a loading message, and once the transition is complete, we show the lazy-loaded component.


## useImperativeHandle: For Exposing Functions to Parent Components
The `useImperativeHandle` hook is used to expose functions or other values from a child component to its parent component. This can be useful when you need to access specific functions or properties of a child component from the parent component.

Here's an example of how to use the useImperativeHandle hook:

```JS
import React, { forwardRef, useImperativeHandle } from 'react';

const ChildComponent = forwardRef((props, ref) => {
  const handleClick = () => {
    // do something
  };

  useImperativeHandle(ref, () => ({
    handleClick,
  }));

  return <button onClick={handleClick}>Click me</button>;
});

export default ChildComponent;
```
In this example, we've created a child component called ChildComponent that contains a button with a handleClick function. We've used the useImperativeHandle hook to expose the handleClick function to the parent component by passing it as an object to the ref parameter.


## useMutationEffect Hook: For Synchronous Updates in Layout

The `useMutationEffect` hook is similar to the useEffect hook, but it runs synchronously after all DOM mutations have been processed. This can be useful for updating the layout of a component after changes have been made to the DOM.

Here's an example of how to use the useMutationEffect hook:

```JS
import React, { useMutationEffect, useState } from 'react';

function MyComponent() {
  const [text, setText] = useState('Hello, world!');

  useMutationEffect(() => {
    // do something with the updated DOM
  });

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
    </div>
  );
}
export default MyComponent;
```

In this example, we've created a functional component called MyComponent that contains an input field for changing the value of the text state. We've used the useMutationEffect hook to perform some action after the DOM has been updated, such as updating the layout of the component.

## Custom Hooks for Reusable Logic

Custom Hooks are a way to reuse logic across multiple components in a React application. By creating a custom hook, you can encapsulate complex functionality and make it easy to reuse in multiple parts of your application. Custom Hooks are essentially a set of functions that can be shared between components.

To create a custom hook, you can define a function that uses built-in React Hooks like useState, useEffect, and useContext. You can then export this function and use it in other components in your application.

For example, let's say you have several components in your application that need to fetch data from an API. You could create a custom hook called useDataFetcher that encapsulates the API call and returns the data to the component. 

> Example 1: useDataFetcher
Here's an example of what the `useDataFetcher` hook might look like:

```JS
import { useState, useEffect } from 'react';

function useDataFetcher(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => setError(error))
      .finally(() => setIsLoading(false));
  }, [url]);

  return { data, isLoading, error };
}

export default useDataFetcher;
```

In this example, the useDataFetcher hook takes a url argument and uses the useState and useEffect hooks to fetch data from the API. The hook returns an object that contains the data, loading state, and error state. By creating this custom hook, you can easily reuse this functionality in multiple components throughout your application.

Custom Hooks are a powerful tool for creating reusable logic in a React application. By encapsulating complex functionality in a custom hook, you can make your code more modular, easier to maintain, and less prone to errors.

> Example 2: useToggle

Here's an example of a custom hook that uses the useState hook to toggle a boolean value:

```JS
import { useState } from 'react';

function useToggle(initialValue) {
  const [value, setValue] = useState(initialValue);
  const toggle = () => setValue(!value);
  return [value, toggle];
}
```
In this example, we've created a custom hook called useToggle that takes an initial value as its argument. The hook uses the useState hook to create a state value and a function to toggle that value. Finally, the hook returns an array containing the current state value and the toggle function.

You can use this custom hook in any functional component like this:

```JS
import { useToggle } from './useToggle';

function MyComponent() {
  const [isOpen, toggleOpen] = useToggle(false);

  return (
    <div>
      <button onClick={toggleOpen}>Toggle</button>
      {isOpen && <p>Hello, World!</p>}
    </div>
  );
}
```
In this example, we've imported the useToggle hook from a file called useToggle.js. We've used the hook to create a state value called isOpen and a function called toggleOpen to toggle that value. Finally, we've rendered a button that calls the toggleOpen function and a paragraph tag that is only shown when isOpen is true.


### useErrorBoundary: For catching and handling errors

`useErrorBoundary` is a custom React hook that helps catch and handle errors in React applications. This hook allows you to define a boundary around a group of components and catch any errors that occur within them. It takes a callback function as an argument that is called whenever an error occurs.

Here is an example implementation of useErrorBoundary:

```JS
import { useState, useEffect } from 'react';

function useErrorBoundary() {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const errorHandler = (error) => {
      console.error(error);
      setHasError(true);
    };
    window.addEventListener('error', errorHandler);
    return () => {
      window.removeEventListener('error', errorHandler);
    };
  }, []);

  return hasError;
}

export default useErrorBoundary;
```

This custom hook sets up an error handler that logs any errors to the console and sets a state variable hasError to true. The component using this hook can then use this state variable to conditionally render an error message or take some other action.

To use this custom hook in a component, you would import it and call it like any other hook:

```JS
import React from 'react';
import useErrorBoundary from './useErrorBoundary';

function MyComponent() {
  const hasError = useErrorBoundary();

  if (hasError) {
    return <div>Something went wrong!</div>;
  }

  return <div>Hello, World!</div>;
}

export default MyComponent;

```
In this example, we've defined a custom `useErrorBoundary` hook that takes an error handler function as an argument. The useErrorBoundary hook returns a new component that acts as an error boundary and catches any errors that occur within its children.

We've used the useErrorBoundary hook to define an ErrorBoundary component that we've wrapped around our ChildComponent. If any errors occur within ChildComponent, they will be caught by the ErrorBoundary and the errorHandler function will be called.

The errorHandler function takes two arguments: the error that occurred and the component stack trace. In this example, we've simply logged these to the console, but you could also display an error message to the user or perform other error-handling logic.

In summary, `useErrorBoundary` is a helpful custom hook to use in React applications when you want to catch and handle errors that occur within a group of components.

## Optimizing Performance with React Hooks

React hooks can be used to optimize the performance of React applications. Here are some of the ways in which hooks can help improve performance:

- **Memoization with useMemo:** useMemo can be used to memoize expensive calculations, so that they are only computed when necessary. This can help reduce the number of re-renders and improve the overall performance of the application.

- **Caching with useRef:** useRef can be used to cache values between renders, so that they can be reused without being recomputed. This can also help reduce the number of re-renders and improve performance.

- **Lazy loading with useLazy:** useLazy can be used to lazy load components or data, so that they are only loaded when they are actually needed. This can help reduce the initial load time of the application and improve the overall performance.

- **Concurrent mode with useTransition:** useTransition can be used in conjunction with React's Concurrent mode to create smooth transitions and reduce jank when updating the UI.

- **Custom hooks for code reuse:** Custom hooks can be created to encapsulate common functionality and reduce code duplication. This can help improve maintainability and performance, as well as make it easier to reason about the application.

Overall, using React hooks can help improve the performance of React applications by reducing unnecessary re-renders, optimizing expensive calculations, and lazy loading components and data.

## Integrating React Hooks with React Router
React Router is a popular routing library for React that allows you to handle client-side routing in your applications. Integrating React hooks with React Router can help you create more optimized and efficient routing solutions for your applications.

React Router provides a number of hooks that you can use in your application to enhance your routing logic. Here are some of the most commonly used hooks:

- **useParams:** This hook allows you to access the dynamic parameters in your URL. For example, if you have a route that looks like `/users/:id`, you can use useParams to access the `id` parameter in your component.

- **useLocation:** This hook returns the **current location** object that represents the current URL. You can use this hook to access 
  - the current pathname, 
  - search parameters, and 
  - hash in your component


- **useHistory:** This hook provides access to the **history** object, which you can use to programmatically navigate to different routes in your application.

- **useRouteMatch:** This hook allows you to match the current **URL** to a specific route path, and access the matched parameters and location data.


> Example 1:
> Here's an example of using these hooks in a simple React Router application:

```JS
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams, useLocation } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <ul>
        <li><Link to="/topics/react">React</Link></li>
        <li><Link to="/topics/angular">Angular</Link></li>
        <li><Link to="/topics/vue">Vue</Link></li>
      </ul>
    </div>
  );
}

function Topics() {
  const { topicId } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const sort = query.get('sort') || 'latest';

  return (
    <div>
      <h2>Topics</h2>
      <h3>{topicId}</h3>
      <p>Sort order: {sort}</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/topics/:topicId">
            <Topics />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
```

In the `Topics` component, we use `useParams` to extract the `topicId` parameter from the `URL`. 
We also use `useLocation` to get the current location object, and then extract the sort query parameter from the URL using the URLSearchParams API. We then use the values of these variables to render the component accordingly.


> Example 2:
> Here is an example that uses useParams, useLocation, useHistory, and useRouteMatch hooks from `react-router-dom` package


```JS
import { Switch, Route, Link, useParams, useLocation, useHistory, useRouteMatch } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/topics">
          <Topics />
        </Route>
      </Switch>
    </div>
  );
}

const Topics = () => {
  const { path, url } = useRouteMatch();
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${url}/react-hooks`}>React Hooks</Link>
        </li>
        <li>
          <Link to={`${url}/react-router`}>React Router</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <TopicComponent />
        </Route>
      </Switch>
    </div>
  );
}

const TopicComponent = () => {
  const { topicId } = useParams();
  const location = useLocation();
  const history = useHistory();

  return (
    <div>
      <h3>Topic ID: {topicId}</h3>
      <p>Current URL: {location.pathname}</p>
      <button onClick={() => history.goBack()}>Go Back</button>
    </div>
  );
}
```

In this example, we are using the 
* `useParams` hook to extract the topicId from the URL path
* `useLocation` hook to get information about the current location
* `useHistory` hook to navigate to a different location
* `useRouteMatch` hook to get information about the current route match and construct nested routes


## React Hooks and Testing

Testing is an important part of developing React applications, and React Hooks make it easy to write tests for your components.

To test a component that uses a hook, you can simply mock the hook using Jest or another testing library. For example, let's say you have a component that uses the useCounter hook to increment and decrement a counter:

```JS
import React from 'react';
import { useCounter } from './useCounter';

function Counter() {
  const [count, increment, decrement] = useCounter(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default Counter;
```

To test this component, you can create a mock useCounter hook that returns the values you want to test:

```JS
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from './Counter';
import { useCounter } from './useCounter';

jest.mock('./useCounter', () => ({
  useCounter: jest.fn(() => [0, jest.fn(), jest.fn()]),
}));

describe('Counter', () => {
    const count = 0;
    const increment = jest.fn();
    const decrement = jest.fn();

  it('should render the counter with initial value of 0', () => {
    const { getByText } = render(<Counter />);
    expect(getByText(/count/i)).toHaveTextContent('Count: 0');
  });

  it('should increment the count when the plus button is clicked', () => {
    const newCount = 1;
    useCounter.mockImplementation(() => [newCount, increment, decrement]);
    const { getByText } = render(<Counter />);
    fireEvent.click(getByText('+'));
    expect(getByText(/count/i)).toHaveTextContent('Count: 1');
  });

  it('should decrement the count when the minus button is clicked', () => {
    const newCount = -1;
    useCounter.mockImplementation(() => [newCount, increment, decrement]);
    const { getByText } = render(<Counter />);
    fireEvent.click(getByText('-'));
    expect(getByText(/count/i)).toHaveTextContent('Count: -1');
  });
});
```

In this example, we're using `Jest` and `@testing-library/react` to render the `Counter` component and simulate button clicks. We're also using the `jest.mock` function to mock the useCounter hook and return different values for each test.

In the first test, we're checking that the initial value of the counter is 0. In the second and third tests, we're mocking the `useCounter` hook to return different values and simulating button clicks to test that the count is incremented and decremented correctly.

This is just a simple example, but you can use this approach to test any component that uses a hook. By mocking the hook, you can easily test different scenarios and ensure that your component behaves correctly.


## Interview Preparation

- **What are React Hooks and how do they work?**

  React Hooks are a new addition to the React library that allow developers to add state and lifecycle methods to functional components. Hooks are functions that let you use React state and other features without writing a class. They work by allowing you to use React's state management features like useState and useEffect in functional components.

- **What are React Hooks, and why were they introduced?**

  React Hooks are functions that allow you to use state and other React features in functional components, instead of having to use class components. They were introduced in React 16.8 as a way to simplify state management and make it more consistent between functional and class components. With hooks, you can use state and other features without needing to write a lot of boilerplate code or use higher-order components. Additionally, hooks make it easier to reuse code and create custom hooks that can be shared across different components.

- **What is the difference between class components and functional components with hooks?**
  
  The main difference is that class components can use lifecycle methods, whereas functional components with hooks cannot. With hooks, you can add state and lifecycle methods to functional components. Additionally, functional components are simpler and easier to read, while class components can be more complex and verbose.

  | Class Components                                                                         | Functional Components with Hooks                                               |
  | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
  | Defined using ES6 class syntax                                                           | Defined using a JavaScript function                                            |
  | Require extending the React.Component class                                              | Do not extend any class or use this keyword                                    |
  | Use render() method to return the UI elements                                            | Use the function to return the UI elements                                     |
  | Can have state using the state property                                                  | Use useState() hook to add state to the component                              |
  | Can have lifecycle methods such as componentDidMount()                                   | Use useEffect() hook to add lifecycle methods                                  |
  | Use this keyword to access the state or props                                            | Access state and props as function arguments                                   |
  | Can use ref to access the underlying DOM elements                                        | Use useRef() hook to access the underlying DOM elements                        |
  | More verbose and requires more code                                                      | Less verbose and requires less code                                            |
  | Can be harder to read and debug in larger codebases                                      | Easier to read and debug in larger codebases                                   |
  | Can have performance issues due to the use of this keyword and the overhead of the class | Has better performance due to the use of function closures and fewer overheads |


- **What is useState hook? How do you declare it?**
  
  The useState hook is a function that allows you to add state to a functional component. It takes an initial value and returns an array with two elements: the current state value and a function to update the state. You can declare it like this:

  ```JS
    import React, { useState } from 'react';

    function MyComponent() {
      const [count, setCount] = useState(0);

      return (
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>
        </div>
      );
    }
  ```

- **How do you update state in React Hooks?**

  To update state in React Hooks, you can use the function returned by the useState hook. For example:

  ```JS
    const [count, setCount] = useState(0);

    function handleClick() {
      setCount(count + 1);
    }
  ```

- **What is useEffect hook? When would you use it?**

  The useEffect hook is a function that lets you perform side effects in functional components. You would use it to perform tasks like fetching data, setting up event listeners, and updating the DOM. You can use it to replace the lifecycle methods of class components. The useEffect hook takes a function as an argument, and runs that function after every render.

- **What is the difference between useMemo and useCallback hooks?**

  The useMemo hook is used to memoize expensive calculations so that they are only run when necessary. The useCallback hook is used to memoize functions so that they are only recreated when their dependencies change. Both hooks can help optimize performance, but they serve different purposes.

- **What is useContext hook and how does it work?**
  
  The useContext hook allows you to consume a context that has been created using the React.createContext API. It takes the context object as an argument and returns its current value. This allows you to access shared data across the component tree without having to pass props down through multiple levels of the tree.

- **How do you optimize performance with React Hooks?**

  You can optimize performance with React Hooks by using memo to prevent unnecessary re-renders, using useCallback to memoize functions, and using useMemo to memoize expensive calculations. You can also use the useEffect hook to handle side effects and avoid unnecessary re-renders.

- **What is useReducer hook and when would you use it?**

  The useReducer hook is used to manage complex state in functional components. It takes a reducer function and an initial state, and returns the current state and a dispatch function. You would use useReducer when you have complex state that cannot be managed with useState, or when you need to update state based on the previous state.

- **Can you use multiple state variables in a single component using useState hook?**

  Yes, you can use multiple state variables in a single component using useState hook. You just need to call useState multiple times with different variable names. For example:

  ```JS
    import React, { useState } from 'react';

    function Counter() {
      const [count, setCount] = useState(0);
      const [name, setName] = useState('John');

      return (
        <div>
          <p>You clicked {count} times.</p>
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>
          <p>My name is {name}.</p>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
      );
    }

  ```

- **What are custom hooks? Can you give an example of a custom hook?**

  Custom hooks are JavaScript functions that utilize React Hooks to share logic between different components. They allow you to extract common code from multiple components and reuse it. A custom hook is a function that starts with the word "use" and can call other hooks if necessary.

  Here's an example of a custom hook that uses the useState hook to keep track of a form's input values:

  ```JS
    import { useState } from 'react';

    function useForm(initialValues) {
      const [values, setValues] = useState(initialValues);

      function handleChange(event) {
        setValues({
          ...values,
          [event.target.name]: event.target.value
        });
      }

      function resetForm() {
        setValues(initialValues);
      }

      return { values, handleChange, resetForm };
    }

  ```

- **What are the rules of using Hooks?**

  There are a few important rules to follow when using React Hooks:

  - **Only call Hooks at the top level:** You should only call Hooks at the top level of your functional component or custom Hook, and not inside loops or nested functions.
  - **Only call Hooks from React functions:** You should only call Hooks from within React function components or custom Hooks, and not from regular JavaScript functions or class components.
  - **Use the same order of Hooks:** You should always call Hooks in the same order on every render. This is important because React relies on the order of Hooks to keep track of state and props.
  - **Use Hooks conditionally:** You should only call Hooks conditionally, based on a specific state or props, and not inside loops or other branching logic.
  - **Use Hooks in the correct context:** You should only call Hooks inside the React component where they are intended to be used. If you need to share state or logic between components, consider using a custom Hook.

  By following these rules, you can ensure that your code is predictable, easy to read and maintain, and works correctly with React's internal state management system.

- **How can you ensure that Hooks are called in the correct order?**

  React enforces the order of Hooks calls, so if you follow the rules of using Hooks, the order of Hook calls will always be correct. One way to ensure the correct order of Hooks is to put them at the top level of your function component, before any other code.

- **What is the difference between useState and useRef hooks?**

  The useState and useRef hooks are used for different purposes. useState is used to manage state in a functional component, while useRef is used to create a mutable reference that can be used to access DOM elements or other values that persist across renders. Unlike state, changes to a ref don't trigger a re-render of the component, so it can be used to store values that don't affect the component's appearance or behavior. Additionally, when you update a ref, the new value is immediately available, without waiting for the next render, which can be useful in some cases.


- **Can you explain the concept of “lifting state up” in the context of React Hooks?**

  "Lifting state up" is a pattern that involves moving state management from a child component up to its parent component, which makes the state available to other child components as well. This can be useful when multiple components need to share the same state, or when you want to avoid prop drilling. With hooks, you can use the useState hook to create state in a parent component and pass it down to child components as props. This allows the child components to update the state by calling a callback function passed down as a prop, which updates the state in the parent component and triggers a re-render of all the affected components.

- **What is the useLayoutEffect Hook, and how does it differ from useEffect?**

  The useLayoutEffect hook is similar to useEffect, but it runs synchronously after all DOM mutations are complete. This can be useful when you need to read from the DOM, such as to measure an element's size or position. By using useLayoutEffect, you can ensure that you get an up-to-date measurement that reflects any changes made by other components. However, because useLayoutEffect runs synchronously, it can lead to slower performance, so you should only use it when necessary.


## Resources

- [https://reactjs.org/docs/hooks-intro.html](https://reactjs.org/docs/hooks-intro.html)
