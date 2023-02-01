# Lighthouse Labs | Data-Fetching-Other-Side-Effects

* [x] Pure Functions
* [x] Side-Effects
* [x] React-Hooks 
* [x] The 'useEffect' Hook


## Pure Functions 
- Small & Simple Functions that perform a specific task
- identical arguments gives identical return
- no side effects 

```js
const rand = () => {
    return Math.random() * 5
}

const sum = (num1, num2) => {
    rand()
    return num1 + num2
}
```

## Side Effects 
- console.log()
- referencing/mutating outside variables
- mutating arguments passed by reference
- calling impure functions


```js
const fullName = (name1, name2) => {
    console.log(name1)
    console.log(name2)
    return name1 + name2
}

const fullChar = (name1, name2) => {
    return name1.split(" ")
}

const id = () => {
    return Math.random() * 5
}

const person = (name) => {
    return {
        name: name, 
        id: id()
    }
}
```

- useState
- useContext
- useEffect*******

## React Hooks 
- React Hooks are pre-built functions that allows us to tap-in to the many React features like state. 

1. Dont forget the 'use' prefix
2. Only call Hooks at the top level 
3. Only call Hooks in React Functions

```js

const App = () => {
    return(

    )

    const [state, setState] = useState()
}
```


## UseEffect Hook 

- Timers (Setinterval, SetTimeout)
- Direct updates to the DOM
- fetching data from external source 
- console.log

```js
const [state, setState] = useState()
const [state2, setState2] = useState()

//general equation
useEffect(callback, array)

//1. callback runs once
useEffect(()=> {
    console.log(state)

}, [])

//2. callback runs whenever state changes
useEffect(()=> {
    console.log(state)

}, [state])

//3. callback runs whenever any state changes
useEffect(()=> {
    console.log(state)

})

//4. cleanup function runs whenever the components is unmounted
useEffect(()=> {
    console.log(state)

    return () => {

    }

})

{game === true && <Component/>}


```