# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?
The same as Redux, preventing prop drilling by making state used app wide easily accessable.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Store is where state lives and what it contains (both shape and data)
Actions are the objects that contain both 1. instructions (type:) and 2. an optional payload which is data to the reducer to process according to its specifications.
A reducer is a function that returns a different object that will become the new state once it is returned and after making adjustmentings to this new copy of state according to its type and payload.

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?
Redux thunk allows us to 'short-stop' our actions being dispatched into our reducers so we can work on them in an async manner. Our action creators change in that they now return an inner function, called a thunk.

4. What is your favorite state management system you've learned and this sprint? Please explain why!
I like Redux. It's clunkly to set up, but I get how each piece works and I've spent more time with it and it feels like there is less black magic happening under the hood.