# Rock | Paper | Scissors

Welcome to Rock Paper Scissors

This webpage has been created and designed for users looking for a simple and fun destraction from their day.
The user can play against the computer by choose their option first and playing against the computer.
The game will keep a score of who is winning and on refreshing the screen clear all the available data.

![image](./assets/images/Rock%20paper%20Scrissors_MockUP.JPG)

---

## Preparation

- **Wire Frame**
    1. During the planning phase of the project a wireframing tool called balsamiq was used. 
    2. By using a wireframe the webpage could be visualised and the number of sections and functions understood from a high level.
    3. Throughout the project the wireframe was used as a guide of what was set out to achieve.
    4. The wireframe file can be viewed here [Link](./assets/wireframe/Rock_Paper_Scissors.bmpr)



---

## Features

### Existing Features

- **Navigation Menu**
    1. A logo has been added to the top of the page to ensure the visitor knows what they are reviewing.
    2. Underneath the logo display there is the first prompt line for the user, the user is asked to "Take Your Pick".

![image](./assets/images/Coding_Logo_Section.JPG)

- **Selection Area**
    1. The next section of the webpage displays the first play area of the rock paper scissors game.
    2. Here it shows three images representing "Rock" "Paper" and "Scissors" so the user knows what their choices in the game are.
    3. Underneath the image for each selection a button with a box shadow style can be seen which names each selection. The buttons are interactive with a hover effect to ensure the user knows the button is clickable.

![image](./assets/images/Rock_Paper_Scissors_Selection.JPG)

- **Rules Area**
    1. To ensure the user understands the game the next section has been set up to show each game rule, what beats what and so on.
    2. The rules section starts with a heading followed by a line of rules seperated by "|" . It was decided that the simpliest way to layout the rules was not using a list but a visual representation of the rule set.

![image](./assets/images/Rock%20paper%20Scrissors_Rules.JPG)

- **Results Display Dashboard**
    1. In order to the user to understand who won in each game a results display dashboard has been created.
    2. 

![image](./assets/images/Rock%20paper%20Scrissors_Results.JPG)


<!-- - **Contact Us Button**
    1. A button has been added at the bottom of the homepage and about us page just above the footer. This button acts as a call to action to fill out the contact us form on the contact us page. 
    2. The button has a hover effect and an active effect to ensure it is clear for the user that this is a functional button. The button will move the user to the contact page.

![image](https://user-images.githubusercontent.com/64638313/153780049-f8d53b9e-9406-483f-ad57-c3acfa2e8236.png)


- **Footer**
    1. Within the footer the social tags can been seen for Facebook, Instagram, twitter and YouTube. 
    2. Each icon if clicked will load out a new page for the visitor with the desired Social Media Account showing on a new tab.
    3. The background has been given a dark grey background to provide contrast to the rest of the page with the icons styled in an off white to standout on the footer.
    4. The footer is consistent throughout each page is responsive for desktop, tablet and mobile.

![image](./assets/images/footer.JPG)

- **About Us Section**
    1. The next page the visitor will see along the navigation menu is the "about us" section. Initially greeted with a hero image with a text overlay. Its purpose is to get the visitor to read more.
    2. This page is here to demonstrate to the visitor who the founders of Croghan are and provide a background into both Sam & Matt.
    3. Along with a short paragraph of text is a portrait photo of each founder so the visitor can get a sense of who they are going to be doing business with.
    4. The page remains consistent in its call-to-action button for "Contact Us" and its footer containing the socials.

![image](./assets/images/about_us_snip.JPG)

- **Contact Us Section**
    1. When the visitor clicks either the call-to-action button "contact us" or navigate to the contact page they will move to the page with a contact form.
    2. The form is formatted and provides an open text area for the visitor to submit a message.
    3. The form has a hover effect added to the button to ensure the visitor understand this is functional button.

![image](./assets/images/contact_snip.JPG)

---

## Testing

### Manual Testing

- **Click through**
    - In order to ensure that the user experience is as expected manual testing was performed on the webpage.
    - This involved clicking on all navigations links to ensure the user was brought to the desired page.
    - Testing any hover functions that had been added for navigation links and user buttons.
    - Scrolling was also tested for sticky headers.
    - After retesting and fixing bugs no more issues where found.

- **Bugs**
    - When hovering over the navigation links it was found that there was an a:active set for clicking on a link which interfere with the class a.active for underlining the active navigation tab. The a:active function was removed from the navigation links to add a more user friendly experience. 

- **Screen Resolution**
    - In order to create a user-friendly experience for desktop, tablet and mobile the webpage has been tested for screen resolution sizes.
    - This was carried out using Dev Tools and adjusting the screen resolution for each respectively.
    - After retesting the bugs that were found no issues could be noticed, this was also passed via Lighthouse.

- **Bugs**
    - There was a bug found when adjusting the screen resolution to mobile. On the homepage section for brand values the test was overflowing onto the contact us button and footer. This was adjusted and fixed by remove the height from the footer and contact button section.
    - Another bug appeared on the contact us page, because the page was not long enough it created a white space below the footer. When this was investigated a sticky footer was recommended but it was found that adjusting the height of the hero image section worked best to across all devices.


---

### Lighthouse Testing

- The code for each page has been validated using Dev Tools - Lighthouse.
- Lighthouse showed that images were too large and in order to fix this issue the files had to be compressed using resource https://tinypng.com/
- Using lighthouse as resource allowed for quick retesting and changes to each element that was flagged until an appropriate score was obtained.

![image](./assets/images/testing_snip.JPG)

### Validator Testing

- HTML
    - No errors were returned when passing through the official W3C validator

- CSS
    - No errors were found when passing through the official (Jigsaw) validator


---
## Deployment

- The site was deployed using GitHub Pages as follows;
    - In the GitHub repository, navigate to the Settings tab
    - From the code and automation section select Pages
    - From the source section drop-down menu, select the Master Branch
    - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found here - https://svankampen.github.io/croghan/

---

## Credits 

- **Content**
    - Footer logos have been taken from https://fontawesome.com/
    - Adobe type founds where used from Croghan Brand assets of which designer Colm O Connor created the branding for https://www.colmoconnor.com/ 
    - Colour palette used for headings and text come from Croghan Brand assets of which designer Colm O Connor created the branding for https://www.colmoconnor.com/ 
    - Mentor Akshat Garg recommended https://flexboxfroggy.com/ to use the flex function where needed in the webpage.
    - The structure for the project was created using I Love Running as a guide https://github.com/Code-Institute-Org/love-running-2.0 . Basic structure for the contact form and webpage layout was referred to throughout.
    - For any code issues that came up https://www.w3schools.com/html/html_css.asp was used as a library of potential solutions in HTML & CSS.
    - To compress images the webpage https://tinypng.com/ was used.



- **Media**
    - Portrait images of the founders are owned personally and where taken for another webpage project.
    - Image for the homepage hero image is taken from opensource https://www.pexels.com/
    - Image for the homepage find us at section was from opensource https://www.hdrshooter.com/2020/04/22/more-super-ultra-wide-wallpapers-3/ 
    - Image for about us hero image is taken from opensource https://www.pexels.com/
    - Image for contact us hero image is taken from opensource https://www.pexels.com/ -->
