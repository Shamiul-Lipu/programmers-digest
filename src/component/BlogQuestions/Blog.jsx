import React from 'react';

const Blog = () => {
    return (
        <div className='py-11 px-3'>
            <h2 className="text-3xl text-center py-11">Question Answered</h2>
            <section>
                {/* Question 01. */}
                <div>
                    <h3 className="text-xl font-bold py-3">
                        {/* Question */}
                        1. Difference between props and state?
                    </h3>
                    <p>
                        {/* answer */}
                        <span className='font-semibold'>Props </span> (short for properties) are received from above and immutable.we use props in React to pass data from parent component to child component and it is unidirectional.
                        <br />
                        <span className='font-semibold'>State </span> can be changed asychronous and mutable. State holds information about the components.State is local to a component and cannot be used in other components.
                    </p>
                </div>
                {/* Question 02. */}
                <div>
                    <h3 className="text-xl font-bold py-3">
                        {/* Question */}
                        2. How does useState works?
                    </h3>
                    <p>
                        {/* answer */}
                        The useState Hook allows us to track state in a function component. Every time component renders, useState gives us an array containing two values:  state variable(the value we stored), state setter function(which can update the state variable and trigger React to render the component again.) .
                        <br />
                        useState takes a initial value and the setState/setter function is responsible for updating the state with new state being passed during call and then re-rendering the component to update the actual DOM.

                    </p>
                </div>
                {/* Question 03. */}
                <div>
                    <h3 className="text-xl font-bold py-3">
                        {/* Question */}
                        3. Purpose of useEffect other than fetching data.
                    </h3>
                    <p>
                        {/* answer */}
                        The useEffect Hook allows you to perform side effects in your components.
                        Some examples of side effects are: fetching data, directly updating the DOM, and timers.
                        The useEffect hook is useful when we wish to run some functions during the component's lifecycle.
                        <br />
                        Reading from local storage.
                        <br />
                        Registering and deregistering event listeners.
                        <br />
                        Validating an input while it's receiving characters .
                    </p>
                </div>
                {/* Question 04. */}
                <div>
                    <h3 className="text-xl font-bold py-3">
                        {/* Question */}
                        4. How does React works?
                    </h3>
                    <p>
                        {/* answer */}
                        React is a free and open-source front-end JavaScript library for building user interfaces based on components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props.
                        <br />
                        Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM using reconciliation algorithem. React implements a virtual DOM which is a DOM tree representation in JavaScript.
                        When there is a need to read and write to the DOM, it uses its virtual representation of it.Following this, the virtual DOM will attempt to locate the most effective manner to update the DOM of the browser. React DOM looks after updating the DOM to blend with the React elements. React  rendered HTML on the browser. React allows us to effectively re-construct our DOM in JavaScript and push only those changes to the DOM which have actually occurred.
                        React finds out what changes have been made, and changes only what needs to be changed.
                        You will learn the various aspects of how React does this in the rest of this tutorial.
                        <br />

                    </p>
                </div>
            </section>
        </div>
    );
};

export default Blog;