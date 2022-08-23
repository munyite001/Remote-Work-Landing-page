# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview
This was not an easy challenge. It is a junior level difficulty challenge, but, for a beginner tring to get their feet wet with js, it can really make you sweat.
But overall, it is a very nice challenge, gets you thining alot, the only issues one might have is with the navbar, but, ofcourse, the navbar LOL!
### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![Desktop Design](./Screenshots/Desktop%20Design.png)
![Mobile Design](./Screenshots/Mobile%20Design.png)

### Links

- Github Repository: [Remote Work](https://github.com/munyite001/Remote-Work-Landing-page)
- Live Site URL: [Live preview](https://remote-landing-page.netlify.app/)

## My process
I work with a mobile first workflow, and so as always, I start with a thorough analysis of the designs, both desktop and mobile. Then I try to figure out the breakpoints of wach design, trying to see how the designs will transiion from a smaller device to a bigger device. Once that's done, I lay some structure for the design with html, then ,start adding styles progressively till completion.
### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
### What I learned

It's very crucial to have a firm understanding of the basics.
This is what has helped me, with the navbar problem, ensuring that when a nested link is open, it doesn't disrup the entire structure.
It will take time, but soon enough some day, I will get to master web development, I jus need to keep working the problem
One particular part, I was most proud of, was this javascript code, that added  click event listeners to all nested links, such that upon a click event, we would access a child element with the class of nested list, and either add a class t make the list visible, or remove the class
```js
//  Add an event listener for each nested link for whn it is clicked
nestedLinks.forEach(link => {
    link.addEventListener('click',(e)=> {
        let element = e.currentTarget;
        const nestedList = element.querySelector('.nested-list');
        const upArrow = element.querySelector('.up-arrow');
        const downArrow = element.querySelector('.down-arrow');
        if (nestedList.classList.contains('show-nested-list')){
            upArrow.classList.add('hide-arrow');
            downArrow.classList.remove('hide-arrow');
            nestedList.classList.remove('show-nested-list');
        }
        else
        {
            upArrow.classList.remove('hide-arrow');
            downArrow.classList.add('hide-arrow');
            nestedList.classList.add('show-nested-list');
        }

    })
})
```
### Continued development

I want to continue improving my Javascript development game, so in the future, I hope to tackle more complex Js challenges

## Author

- Website - [Github](https://github.com/munyite001)
- Frontend Mentor - [@munyite001](https://www.frontendmentor.io/profile/munyite001)
- Twitter - [@emunyite](https://www.twitter.com/emunyite)
 share.**
