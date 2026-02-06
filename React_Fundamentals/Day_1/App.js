
// {} is used to pass the attributes of the element and the 
// content of the element is passed as the third argument.


//ReactElement is a JavaScript object that represents a DOM element.
//  It is created using the React.createElement() method. 
//it is converted to a DOM element by the ReactDOM.render() method. and into HTML 
// by the ReactDOM.createRoot() method.
const parent = React.createElement('div', { id: 'parent' },
    React.createElement('div', { id: 'child' },), [
    React.createElement('h1', {}, 'I am an h1 tag!'),
    React.createElement('h2', {}, 'I am an h2 tag!')
], [
    React.createElement('div', { id: 'child2' },), [
        React.createElement('h1', {}, 'I am an h3 tag!'),
        React.createElement('h2', {}, 'I am an h4 tag!')
    ]
])

const root = ReactDOM.createRoot(document.getElementById('root'))
//root.render() method is used to render the ReactElement into the DOM. 
// It takes the ReactElement as an argument and renders it into the DOM element specified by the createRoot() method.
root.render(parent)

