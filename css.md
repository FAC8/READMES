# CSS Basics

### What is CSS

Cascading Style Sheets (CSS) is a language for specifying how documents are presented to users. These documents are written in a markup language such as HTML.

### How CSS Works

CSS works by applying styles and providing formatting advice to your browser when it reads and displays HTML. These styles can exist within style tags as in the example below:

```html
<html>
<head>
<style>
h1 {color:red;}
p {color:blue;}
</style>
</head>
<body>

<h1>A heading</h1>
<p>A paragraph.</p>

</body>
</html>

```
In this example, font colors styles are being applied to the h1 and p elements within the HTML. This is normally not done because style tags embedded within the HTML are more difficult to edit and audit than if they are separated into a stylesheet, which contains all of the CSS used to style that page.

#### Exercise 1 Linking to a stylesheet

* Create a new directory on your computer to save and organize the tutorial exercises.

* Open your text editor and create a new text file. This file will contain the document for the next few tutorial exercises.

* Copy and paste the HTML shown below. Save the file using the name doc1.html

```html
<!DOCTYPE html>
<html>
  <head>
  <meta charset="UTF-8">
  <title>Sample document</title>
  <link rel="stylesheet" href="style1.css">
  </head>

  <body>
    <p>
      <strong>C</strong>ascading
      <strong>S</strong>tyle
      <strong>S</strong>heets
    </p>
  </body>
</html>

```
* Create another text file in the same directory as the doc1.html document you created in the first section.
Save your document as: style1.css. This file will be your stylesheet.

* In your CSS file, copy and paste this one line, then save the file:

```css
strong {color: red;}
```

* Now open doc1.html in your browser by copying in the directory and file name into the URL bar. You should see:

![Exercise 1 example](CSS.png)

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

```css
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

The box model is without question one of the more confusing parts of HTML and CSS. We set a width property value of 400 pixels, but the actual width of our element is 492 pixels. By default the box model is additive; thus to determine the actual size of a box we need to take into account padding, borders, and margins for all four sides of the box. The element width not only includes the width property value, but also the size of the left and right padding, left and right borders, and left and right margins.

Styling the Box:

* Coloring

The padding is always the same color as the element's background. So when you set the background color, you see the color applied to the element itself and its padding. The margin is always transparent.

* Borders

You can use borders to decorate elements with lines or boxes.

To specify the same border all around an element, use the border property. Specify the width (usually in pixels for display on a screen), the style, and the color.

* Examples on using colors and borders:

The following rule sets the background color and the top border of heading elements:

```css
h3 {
  border-top: 4px solid #7c7; /* mid green */
  background-color: #efe;     /* pale green */
  color: #050;                /* dark green */
  }
```

This rule makes images easier to see by giving them a mid-gray border all round:

```css
img {border: 2px solid #ccc;}
```

Add an image to your doc1.html and style that image with the above css rule in your style1.css

Rounding the Box:

The border-radius property enables us to round the corners of an element.

The border-radius property accepts length units, including percentages and pixels, that identify the radius by which the corners of an element are to be rounded. A single value will round all four corners of an element equally; two values will round the top-left/bottom-right and top-right/bottom-left corners in that order; four values will round the top-left, top-right, bottom-right, and bottom-left corners in that order.

When considering the order in which multiple values are applied to the border-radius property (as well as the margin and padding properties), remember that they move in a clockwise fashion starting at the top left of an element.

In your style1.css, add a border-radius property to your img, remember that it can be set in either pixels or percentages.  Set the property to 50%; what is your result?

* Margins and padding

Use margins and padding to adjust elements' positions and to create space around them.

If you specify one width (or margin), it applies all around the element (top, right, bottom and left).

If you specify two widths (or margins), the first applies to the top and bottom, the second to the right and left.

You can specify all four widths (or margins) in the order: top, right, bottom, left.

Try it out in your files!  In doc1.html, give one paragraph a class 'remark'.  Then put the following code into your style1.css:

```css
p.remark {
  border: 2px solid red;
  padding: 4px;
  margin-left: 24px;
  }
```
On your rendered page, notice how padding all round separates the border from the text a little; a left margin indents the paragraph relative to the rest of the text. You can play with the margin and padding widths and view the results on your rendered page!

Warning Note:

When you use margins and padding to adjust the way elements are laid out, your style rules interact with the browser's defaults in ways that can be complex.

Different browsers lay elements out differently. The results might look similar until your stylesheet changes things. Sometimes this can make your stylesheet give surprising results.

To get the result you want, you might have to change your document's markup.

### Layout

You can use CSS to specify various visual effects that change the layout of your document. Some of the techniques for specifying layout are advanced, and beyond the scope of this basic  README.

When you design a layout to look similar in many browsers, your stylesheet interacts with the browser's default stylesheet and layout engine in ways that can be complex. This is also an advanced subject, beyond the scope of this basic tutorial.

This section describes some simple techniques that you can try.

* Document Structure

Your document's markup language might have general-purpose tags for creating structure. For example, in HTML you can use the ``<div>`` element to create structure.

In your doc1.html wrap a chosen section, such as a list, in a div and give it a class.  In your style1.css, style that class with a border, such as:
```css
{border: 1em solid #69b;
  padding-right:1em;}
```

* Size units

So far in this tutorial, you have specified sizes in pixels (px). These are appropriate for some purposes on a display device like a computer screen. But when the user changes the font size, your layout can look wrong.

For many purposes it is better to specify sizes as a percentage or in ems (em). An em is nominally the size of the current font (the width of a letter m). When the user changes the font size, your layout adjusts automatically.

* Floats

The float property forces an element to the left or right. This is a simple way to control its position and size.

The rest of the document's content normally flows around the floated element. You can control this by using the clear property on other elements to make them stay clear of floats.

### Tables

A table is an arrangement of information in a rectangular grid. Some tables can be complex, and for complex tables different browsers can give different results.

When you design your document, use a table to express the relationships between the pieces of information. Then it does not matter if different browsers present the information in slightly different ways, because the meaning is still clear.

Do not use tables in unusual ways to produce particular visual layouts. The techniques on the previous page of this tutorial (Layout) are better for that purpose.

* Table structure

In a table, each piece of information is displayed in a cell.

The cells in a line across the page make up a row.

In some tables, the rows might be grouped. A special group of rows at the start of the table is the header. A special group of rows at the end of the table is the footer. The main rows in the table are the body, and they might also be in groups.

The cells in a line down the page make up a column, but columns have limited use in CSS tables.

### Media

The purpose of CSS is to specify how documents are presented to the user. Presentation can take more than one form.

For example, you are probably reading this page on a display device. But you might also want to project it on a screen for a large audience, or print it. These different media can have different characteristics. CSS provides ways to present a document differently in different media.

To specify rules that are specific to a type of media, use @media followed by the media type, followed by curly braces that enclose the rules.
