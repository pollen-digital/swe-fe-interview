# Product Engineer Coding Exercise

## Overview

In this exercise, you'll be building a small Next.js application that displays and interacts with a list of products. This task is designed to assess your skills in React, Next.js, TypeScript, and your ability to create performant, user-friendly interfaces.

## Requirements

### Core Features

1. Use Next.js App Router and TypeScript.
2. Fetch a list of products from this API: `https://apinew.soundshelter.net/explore/trending/0`
3. Display the products in a grid layout using Cards.
4. Implement a delete functionality for cards, with an undo option to reinsert the card into the grid.
5. When a card is clicked, navigate to a new route showing that product's details. Use the URL structure of `/vinyl/<slug>` where `slug` is the product's unique identifier from the API. The API call is `https://apinew.soundshelter.net/vinyl/<slug>`.
6. Add a loading state with an artificial 2-second delay before rendering the content on the product details page.

### Like Button Feature

7. Add a "Like" button to each product card.
8. Implement a counter that updates the number of likes when clicked.
9. Ensure that updating the like count doesn't cause unnecessary re-renders of other components or the entire grid.

## Technical Considerations

- You may use either Server Components or Client Components as you see fit.
- Use Tailwind or a styling method of your choice.
- Focus on creating a smooth user experience.
- Be mindful of performance and avoid unnecessary re-renders.

## Additional Notes

- Be prepared to explain your choices regarding component structure, state management, and performance optimizations.
- If you complete the exercise early, consider how you might implement additional features or optimizations.
- Quality is preferred over quantity - it's okay if you don't complete every aspect within the time limit.

## Time Limit

You have 40 minutes to complete this exercise.

## Evaluation Criteria

We will be evaluating your submission based on:

1. Functionality: Does the application work as described?
2. Code Quality: Is the code clean, well-organized, and easily maintainable?
3. Performance: How well does the application perform, especially in terms of rendering efficiency?
4. User Experience: Is the interface intuitive and responsive?
5. Technical Choices: Can you explain and justify your technical decisions?

Good luck!
