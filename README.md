# Manage Landing Page

## Welcome! 👋

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Explore the power of data analytics with Manage Landing Page! 

This webpage provides companies with data analytics tools for analyzing website traffic, helping them create products that better fit the market and are loved by customers. 

Users can:-
- View the optimal layout for the site based on their device's screen size.
- Interact with hover states for all interactive elements. 
- Additionally, testimonials are presented in a horizontal slider, allowing users to easily navigate through them. 
- The newsletter sign-up form includes error validation to ensure that users provide valid input.

### Screenshot

![Design Preview](./design/active-states.jpg)

### Links

- Solution URL: [GitHub Repository](https://github.com/SartHak-0-Sach/Manage-landing-page_frontend_project)
- Live Site URL: [Live Site](https://manage-landing-page-frontend-project.netlify.app/)

## My process

### Built with

- HTML5
- CSS3
- JavaScript

You will find all the required assets in the `/design` folder. The assets are already optimized.

There is also a `style-guide.md` file containing the information you'll need, such as color palette and fonts.

### What I learned

This project taught me how to use JavaScript efficiently in doing input validation and use try catch code to catch all unknown errors that might occur, along with DOM manipulation to tell user to input proper email as shown in snippet below-

```js
/* email check */
function formCheck(event) {
    for (let i = 0; i < formItem.length; i++) {
        console.log(formItem[i].checkValidity())
        if (!formItem[i].checkValidity()) {
            if (formItem[i].type == 'email') {
                formError.innerHTML = 'Looks like this is not an email';
            }
            formItem[i].oninvalid = function (e) {
                e.preventDefault();
            }

            if (!formError[i].classList.contains('-active')) {
                formError[i].classList.toggle('-active');
                formItem[i].classList.toggle('-error');
            }

            formItem[i].addEventListener('keydown', function () {
                formItem[i].style.color = 'rgb(0,0,0)';
            });
        } else {
            formItem[i].value = '';
            formError[i].classList.toggle('-active');
            formItem[i].classList.toggle('-error');
        }

    }
}
```

### Continued development

The continuously learning journey of a programmer never ends. This project made me realize that there are many concepts that I need to work upon including fundamentals like flex-box and its properties, to more complex concepts like working with fetch and async await in javascript. These areas are some that I think I need to work more upon in the upcoming future as they highlight some of the most significant regions of web development that are important for every developer to know of. 

These key points mentioned here will help me grow accountable and consistent towards improving at writing good quality code and be a successful full stack developer one day.

### Useful resources

- [Harkirat Singh course notes](https://github.com/SartHak-0-Sach/harkirat-singh-course_code_and_notes) - I have added notes of all lectures along with code and lecture insights of all weeks along with bonus lectures to help you all as much as I can.
- [My development code and notes](https://github.com/SartHak-0-Sach/cwh-web-dev-playlist_code_and_notes) - These are my notes that I made while working on my development skills in initial days and did these courses. Make sure to star the repository if you like it.✨💫
- [MDN documentation hover state for CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/:hover) - This is an amazing article which helped me finally understand hover states. I'd recommend it to anyone still learning this concept.

## Author

<b><strong>Sarthak Sachdev</strong></b>
- Website - [Sarthak Sachdev](https://itsmesarthak.netlify.app/)
- LeetCode - [@sarthak_sachdev](https://leetcode.com/u/sarthak_sachdev/)
- Twitter - [@sarthak_sach69](https://www.twitter.com/sarthak_sach69)

## Acknowledgments

I feel like the solutions provided on the website and the continuous doubt solving by industry experts on discord for free is something that is unmatched by anyone else and need to be acknowledged for their efforts in improving me as a developer by suggesting the best practices in your respective tech stack.

## Got feedback for me?

I love receiving feedback! I am always looking to improve my code and take up new innovative ideas to work upon. So if you have anything you'd like to mention, please email 'hi' at saarsaach30[at]gmail[dot]com.

If you liked this project make sure to spread the word and share it with all your friends.

**Happy coding!** ☺️🚀
