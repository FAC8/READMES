# CSS Basics

### What is CSS

CSS stands for Cascading Style Sheets and is used to style the basic content that your HTML

### Why use CSS

### How CSS Works

### Cascading and Inheritance

### Selectors

#### Readable CSS

### Text Styles

### Color

### Content

### Lists

### Box Model

According to the box model concept, every element on a page is a rectangular box and may have width, height, padding, borders, and margins.

That’s worth repeating: Every element on a page is a rectangular box.

When your browser displays an element, the element takes up space. The space the element takes up is determined by the box model.

In the middle, there is the space that the element needs to display its content. Around that, there is padding. Around that, there is a border. Around that, there is a margin that separates the element from other elements.


![BoxModel](http://www.codeproject.com/KB/HTML/567385/boxmodel-image.png)


The padding, border and margin can have different sizes on the top, right, bottom and left of the element. Any or all of these sizes can be zero.

Let’s look these properties inside some code:

```HTML
div {
  border: 6px solid #949599;
  height: 100px;
  margin: 20px;
  padding: 20px;
  width: 400px;
}
```
The code above results in an element with the following box model:
![BoxModel](http://learn.shayhowe.com/assets/images/courses/html-css/opening-the-box-model/box-model.png)

As you see, the width property of the div above has been set to 400px, but the width of the actual element is much greater, in this case 492 pixels.

The box model is without question one of the more confusing parts of HTML and CSS. We set a width property value of 400 pixels, but the actual width of our element is 492 pixels. By default the box model is additive; thus to determine the actual size of a box we need to take into account padding, borders, and margins for all four sides of the box. Our width not only includes the width property value, but also the size of the left and right padding, left and right borders, and left and right margins.

Styling the Box:

* Coloring

The padding is always the same color as the element's background. So when you set the background color, you see the color applied to the element itself and its padding. The margin is always transparent.

* Borders

You can use borders to decorate elements with lines or boxes.

To specify the same border all around an element, use the border property. Specify the width (usually in pixels for display on a screen), the style, and the color.

* Example on using colors and borders:

This following rule sets the background color and the top border of heading elements:

h3 {
  border-top: 4px solid #7c7; /* mid green */
  background-color: #efe;     /* pale green */
  color: #050;                /* dark green */
  }

* Tutorial


### Layout

### Tables

### Media
