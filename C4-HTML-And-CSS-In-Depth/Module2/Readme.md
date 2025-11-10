## Flexbox

#### Understanding flexbox
Much like the div and box container that you can create using HTML, flexbox is a type of container. Flexbox can overcome the limitations caused by containers such as block and inline because it does a better job of scaling over larger web pages and also provides more dynamic control of the containers. This is because it can grow, shrink and align the items inside it which give better control to the programmer over the contents and styling of the items inside the container. 

Before learning about the common layouts built using the flexbox, it is important to understand the properties inside it and how flexbox works. Let’s examine some of the important characteristics of flexboxes and the properties that can be used to configure them.

Flexbox is single-dimensional, which means you can align it either along a row or a column and it is set to row alignment by default. There are two axes, the main and cross-axis, much like the x and y-axis used in coordinate geometry. When aligned along the row, the horizontal axis is called the main axis and the vertical axis is called the cross axis. For the items present inside the flexbox container, the placement starts from the top-left corner moving along the main or horizontal axis. When the row is filled, the items continue to the next row. Note that with the help of a property called flex-direction, you can instead flip the main axis to run vertically and the cross axis will then be horizontal. In such a case, the items will start from top left and move down along the vertical main axis. The properties you choose will help better control alignment, spacing, direction and eventually styling of the container and items present inside it. 

![img1](./images/img1.png)

Let’s now examine some of the important properties that will allow you to configure a flexbox.

  

##Flexbox properties

Original HTML code:
```html
<body>
  <div class="flex-container">
    <div class="box box1">  One..</div>
    <div class="box box2">  Two..</div>
    <div class="box box3">  Three..</div>
    <div class="box box4">  Four..</div>
    <div class="box box5">  Five..</div>
    <div class="box box6">  Six..</div>
    <div class="box box7">  Seven..</div>
  </div>
</body>
```
Original CSS file: 

```css
.box{
    background-color: aquamarine;
    border-radius: 5px;
    margin: 2px;
    padding: 10px;
}
```
Output:

![img2](./images/img2.png)

There are seven div containers inside the HTML file.

The corresponding CSS file contains rules for all seven div tags that have the box class. Note how two class names are given for each of the tags, one that is common among all classes and another independent of it. The style is applied to all the containers. 

Now let’s add properties to the flex container by converting it into flex. 

**display: flex;**
```css
.flex-container{
    display: flex;
}

```
The output is now seven flex containers that run from left to right starting in the top left corner.

![img3](./images/img3.png)

#### Alignment properties
Let’s examine a few alignment properties inside the flex. There are four main properties used to align a flex container and items present inside it:  

- justify-content. For item alignment on main axis.

- align-items. For item alignment on cross axis.

- align-self. For unique flex items on cross axis.

- align-content. Used for packing flex lines and control over space.

Of these, justify-content and align-items are frequently used for the respective two axes. 

Let’s first examine the use of justify-content which has a value of ‘left’ by default.

#### justify-content
CSS:
```css
.flex-container{
    display: flex;
    justify-content: center
}

```
Output

![img4](./images/img4.png)


#### flex-wrap:
The default for this property is ‘nowrap’ which means the items will span the entire width of the axis. 

```css
.flex-container{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
```
Output:

![img5](./images/img5.png)

The items will now be wrapped to the size of the available viewport. 

#### flex-direction: 
This property is used to set the main axis, which is a ‘row’ by default. It basically means you are changing your ‘main’ axis from horizontal rows to vertical columns. 

CSS Code:

```css
.flex-container{
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
}

```
Output:

![img6](./images/img6.png)

The output looks like the original output; however, it is now actually a flex.

Now let’s align the items again and examine a couple of the other properties mentioned earlier.   

#### align-items:
The alignment on the cross-axis is done with the help of this property. Let’s change the value for it to ‘flex-end’. 

CSS Code:

```css
.flex-container{
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    align-items:flex-end;
}
```
 Output:

![img7](./images/img7.png)

The term ‘end’ refers to the right side of the page as the left side is seen as the beginning. 

#### align-self:
This property can be used on individual items inside the flex. 
```css
.flex-container{
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    align-items:flex-end;
}
.box3{
    background-color: blanchedalmond;
    align-self: center;
}

```
 Output:       

![img8](./images/img8.png)

Here the color and alignment of the third box have been changed and it overrides the properties set using align-items.     

#### gap:
gap property can be used to create space between the items along the main axis. You can also individually configure the gaps in rows and columns using row-gap and column-gap properties.   

CSS Code:
```css
.flex-container{
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    align-items:flex-end;
    gap:10px;
}
.box3{
    background-color: blanchedalmond;
    align-self: center;
}
```
Output:

![img9](./images/img9.png)

There is a clear change in spacing between the items. 

The final set of properties are flex-grow, flex-shrink and flex-basis. Together these determine how the flex takes up space, grows or shrinks according to the space available.

These are the sub-properties of a property called flex. Together all three properties can also be given values with the help of something called the shorthand notation in CSS. Shorthand notation helps you make your code compact and also easy to write and follow. The values left empty in shorthand notation are given their default values. 

For example:

```css
.flex-container{
flex: 0 1 auto;
}

```
Here for the flex-container class, there is a set rule for the flex property. The values correspond to the three properties, namely the flex-grow set to 0, flex-shrink to 1 and flex-basis to auto. The flex-basis sets the initial size of the container. and together they define the rigidity or flexibility and dynamism you want to add to the flexbox. 

To demonstrate the effect of this, the code has to be modified slightly by removing the flex-direction value set to ‘column’. This will change it to default ‘row’ and the output will again be centrally aligned and horizontal best-distributed between two rows. 

Output:

![img10](./images/img10.png)

The rest of the remaining code is unchanged. However, the output will change if the code is modified with the addition of the flex property inside the flex item box3 class. 

CSS Code:
```css
.box3{
    background-color: blanchedalmond;
    align-self: center;
    flex: 1 1 auto;
}

```
Output:

![img11](./images/img11.png)

The third box now takes up the entire free space available because flex-growth’s value has been set to 1. So if we have `flex-grow` set to 1, the children will all set to equal size. And if one of the children has a value of 1.5, that child would take up more space as compared to the others.

It’s important to understand how the changes in the main and cross axis affect the way you imagine and manipulate the flexbox. Once you’ve had more practice you’ll be more comfortable with the use of these properties, and it will become easier to use flexboxes and understand the flow and alignment of items inside the flexbox. 

## Grids and flexbox cheat sheet

#### Grid 
The syntax for creating a grid:

```css
selector{
    display: grid; /* or inline-grid */
}
```
Grid shorthand consists of the following properties with default values:

`grid`

A grid will allow you organize the various elements on your page. 

`grid-template-rows: none`

This feature allows you configure your elements so that they are organized similarly to rows on a table. 

`grid-template-columns: none`

This feature allows you configure your elements but with this setting the elements are organized like columns on a table. 

`grid-template-areas: none`

This feature allows you configure the names of a grid and how they sit in relation to one another. 

`grid-auto-rows: auto`

Default setting for all row sizes that have not been explicitly configured. 

`grid-auto-columns: auto`

Default setting for all column sizes that have not been explicitly configured. 

`grid-auto-flow: row`

Default location for rows that are not explicitly allocated. 

`column-gap: normal`

This sets the gap between the columns

`row-gap: normal`

This sets the gap between the rows

#### Grid properties for container

`grid-template-columns: measurement units | % units |repeat()`

Defines the line names, and maintains a constant size of column items. Can accept a range of different measurement sizes.

`grid-template-rows: measurement units | % units |repeat()`

Defines the line names, and maintains a constant size of rows. Can accept a range of different measurement sizes.

`grid-auto-columns: measurement unit (fixed value for all columns)`

Determines the default size for columns that have not been explicitly configured. 

`grid-auto-rows: measurement unit (fixed value for all rows)`

Determines the default size for rows that have not been explicitly configured.

`grid-template: “header header” auto`

This allows you define and maintain named cells on a grid 

`“main right” 75vh`

This defines two cells named main and right, that have a sizing of 75% of the viewport height. 

`“footer footer” 20rem`

This defines two cells named footer and footer, that have a sizing of 20 root em (rem). This defines the size in relation to the html font size. 

#### Gap
`grid-gap: measurement units`

Determines the gap between rows and columns 

`grid-column-gap: measurement units`

Determines the gap between columns

`grid-row-gap: m-unit-1  m-unit-2`

Determines the gap between columns

#### Alignment
`justify-items: start | center | end | stretch`

Defines the default space that is allot to each item on the grid 

`align-items: start | center | end | stretch`

Defines the default space related to an item along the grid’s block axis  

`place-items: start | stretch /* shorthand for two properties above */`

This feature allows you align items with  the block and inline directions.

#### Justification
`justify-content: start | center | end | stretch | space-between | space-evenly | space-around`

Defines browser allocation of space to content items in relation to the main-axis 

`align-content: start | center | end | stretch | space-between | space-evenly | space-around`

Defines browser allocation of space to content items in relation to cross axis and block axis  

`place-content: center | start`

This feature allows you align items with  the block and inline directions.

#### Positioning

`grid-auto-flow: row | column | dense`

This relates to how the items are placed automatically within the grid

`grid-auto-columns: measurement units`

This relates to the size for columns created without specific size specifications 

`grid-auto-rows: measurement units`

This relates to the size for rows created without specific size specifications 

#### Grid properties for items (child)

`grid-column: column position /* E.g. 1/2  */`

Allows for specifying where on the grid the column is to start. 

`grid-column-start: column start position`

This property determines the starting column position an item is placed on a grid. 

`grid-column-end: column end position`

This property determines the end column position an item is placed on a grid. 

`grid-row: row position /* E.g. 1/2  */`

Allows for specifying where on the grid the row is to start. 

`grid-row-start: row start position` 

This property determines the starting row position an item is placed on a grid. 

`grid-row-end: row end position`

This property determines the end row position an item is placed on a grid. 

#### Justification and alignment

`justify-self: start | center | end | stretch`

Determines how  an item is positioned inside its aligned container in relation to the appropriate axis. 

`align-self: start | center | end | stretch`

Aligns an item within a grid area. 

`place-self: start | stretch /* shorthand for two properties above */`

This setting lets one align and justify an item within a block. 

#### Flexbox

The syntax for creating a flexbox:

```css
selector{
    display: flex | inline-flex
}

```
Here the selector can refer to any of the following flex attributes 

- Attribute selector

- Class Selector

- ID Selector 

- Type Selectors 

- Universal Selectors 

The display relates to how you want the selector to be shown. Setting display to flex makes the given selector a flex box. Setting display to `inline-flex` makes the selector a flex box container while will be inline. 

#### Properties for flexbox container
`flex-direction: row | row-reverse | column | column-reverse`

It is possible to specify the direction your elements will follow. Traditionally text goes from left to right which is flex’s default setting however it can be set from right to left or even top to bottom. The four flex-direction are:

- row : organized from left to right 

- row-reverse: organized from right to left 

- column: organized from top to bottom

- column-reverse: organized from bottom to top. 

`flex-wrap: wrap | nowrap`

The standard layout is to plot the elements from left to right in a straight line. The wrap feature allows you customize this to match the size of the window displaying the page. 

- wrap: Automatically wrap the items with as the window space gets smaller. 

- Nowrap: Default setting, items remain rigid and don’t respond  to adjustments made to the window size.

`align-items: flex-start | flex-end | center |Stretch`

This determines how the flex items are to be positioned on the page. Items can be aligned in a variety of ways 

- Flex-start: Similar to standard writing, items start at the top left-hand corner and are positioned from left to right 

- Flex-end: Position begins in the bottom right hand corner. 

- Center: Item is positioned from the center. 

- Stretch: item expands to fill the container. 

`justify-content: flex-start | flex-end | center | space-between | space-evenly`


Justify-content determines the alignment of the flex items. 

- Flex-start: goes from right to left along the main axis. 

- Flex-end: goes from left to right along the main axis. 

- Center: Starting at the middle, alignments expands from there. 

- Space-between: first and last item are flush with the left and right wall respectively, every other item is evenly spaced. 

- Space-evenly: each item is equidistant from each other and the boundary wall 

#### Properties for flexbox items (child)

`flex-grow: factor of flex’s main size`  

This attribute enables the flex container to grow proportionally to the other containers present. 

`flex-shrink: factor of flex’s main size`

This allows elements to shrink in relation to items around it.

`flex-basis: auto | factor of main’s size | measurement unit`

The sets the initial main size of an item. It can be overridden if other stylized elements are configured. 

`order:position in flex /* Set ascending by default */`

The standard positioning of items is by source order, however this feature will enable you to configure where the items appear on the page. 

`align-self:  start | center | end | stretch`

This determines where on the page the child items will be positioned. Similar to the main flex attributes, start is to the left and end is to the right.

## Grid template area

Grid areas are a way to group one or more grid cells. The grid template area is an extension of this concept where you can give names to these grid areas. Once you have the names defined, you can address these new grid area items by their names and configure them accordingly. 

The property grid-template-areas is usually placed inside the body tag or any container where the grid needs to be placed, the same way that you would define the rules for the grid. The main difference is, in case of grid-template-areas the values present will be the different names. 

#### Process
The process isn’t prescriptive but these are the steps in general:

- Define the grid using display property 

- Set the height and width of the grid 

- Set the grid-template-areas with the appropriate name identifiers

- Add the appropriate sizes for the rows inside the grid using grid-template-rows property 

- Add the appropriate sizes for the columns inside the grid using grid-template-columns property 

But how exactly do you use these names and where do they come from? The names that you use inside the grid template areas are the HTML tags that you have used. Or, where you need to get more specific, you designate a class name to these tags. Once the names are assigned, you define the properties for each class the same way that you define them conventionally. Let's examine an example.

#### Example

HTML Code:

```html
<head> 

    <link rel="stylesheet" href="gridta.css"> 

</head> 

 

<body> 

    <header> Header </header> 

    <nav class="nav-bar"> Navigation </nav> 

    <main> Main area </main> 

    <footer> Footer </footer> 

</body> 
```
CSS Code:

```css
body { 

    display: grid; 

    height: 200px; 

    grid-template-areas: "head head" 

                         "nav  main" 

                         "footer  footer"; 

    grid-template-rows: 30px 1fr 30px; 

    grid-template-columns: 150px 1fr; 

  } 

   

  header { 

    grid-area: head; 

    background-color: lightsalmon; 

  } 

   

  .nav-bar { 

    grid-area: nav; 

    background-color: lightblue; 

  } 

   

  main { 

    grid-area: main; 

    background-color: lightyellow; 

  } 

   

   footer { 

    grid-area: footer; 

    background-color: firebrick; 

  } 
```

Output:   

![img12](./images/img12.png)

Though there are five sets of rules, logically the CSS code is divided into two sections. The first is where you define the rules for the grid inside the body selector. And second is where you allocate specific rules for the different grid areas. The way these grid areas are distributed is according to how you have defined the names inside the grid-template-areas property. In the example above the relevant code is: 
```css
 grid-template-areas: "head head"
                         "nav  main"
                         "footer  footer";
```

The ‘head’ is written twice to imply two columns and the rest of the content follows the usual convention. The number of rows will be the number of ‘pairs of quotes’ you have used which in this case is three. Namely  “head head”, “nav main” and “footer footer”. Once you know the number of rows and columns, the values for those will be set by grid-template-rows and grid-template-columns. Since these are three and two respectively here, you need to add that many values. The height simply gives the overall value of the height for the grid. 

Note that the number of times you wrote “header” did not have to be two. You could write more of those and if you align the rest of the grid-names correctly, the height and width of the grid-areas will be distributed proportionately. 

Let’s return to the example. If you keep all other properties the same but you change the grid-template-areas as follows: 

```css
grid-template-areas: "head head head"
                         "nav  main main"
                         "footer  footer footer";
```
The output will remain the same as you have fixed the value of the third row to “30px”. The example is simple for the sake of clarity, but if you had used relative values, you would’ve seen an observable change in the comparable sizes of nav and main grid-areas. 

Grid-areas are convenient when you have a clear schematic of what you want in a grid. It’s also easier to configure individual areas if you can address them by their names. Let’s say you are designing a resume on your website, you will be able to name the different areas such as ‘Bio’, ‘Education’, ‘Work experience’ and so on. And it’s easier to use these labels when you are defining the rules. Creating a block diagram using pen and paper before starting to work on a grid is always a good idea. 

## All selectors and their specificity

As you build a website, the complexity of the code might increase to such a point that more than one CSS rule is applied to the same element. Or, you might accidentally add more than one rule over the same element. This results in conflicts as only one rule can be applied to a specific property. For example, the color of a certain p tag can either be blue or white, but not both. CSS engines use something called specificity to resolve these conflicts. Specificity is the ranking or score that helps CSS determine the final rule that will be applied to a given element. 

This reading will help you grasp how the element with the ‘highest’ specificity is selected by CSS. But before you read on, it is important to note that these rules only apply in cases where conflicts arise for the properties. 

#### Specificity hierarchy
CSS has a set of rules that it uses to ‘score’ or assign a certain weight to selectors and this creates a specificity hierarchy. Based on the weights, there are four categories in this hierarchy: 

- Inline styles 

- IDs 

- Classes, attributes, and pseudo-classes 

- Elements and pseudo-elements 

#### Inline styles
Inline styles are attached to the elements within your HTML code like with the ‘style’ attribute. inline styles have the highest specificity. That means that rules that are defined as inline styles will be applied irrespective of other rules. 

For example, take these two rules that create a conflict in color styling for a p tag:

```html
 <p style=“color: white;”> 
```
```css
p{color: blue} 
```
The p tag will be colored white because it is declared inside the inline tag. 

#### IDs
Next in the hierarchy are IDs and by now you know that they are represented by ‘#’.  For example:

#div

Classes, attributes, and pseudo-classes
Classes, and the attributes inside the selectors, come next with what is called the pseudo-classes that you will soon learn more about. 

For example:

**`.my-class`**

**`p[“attribute”]`**

**`div:hover`**

#### Elements and pseudo-elements
Finally, elements and something you call pseudo-elements have the lowest position in the specificity hierarchy. You will learn more about pseudo-elements later in this lesson.

#### Calculating scores
But by now you might wonder how is specificity calculated? 

CSS uses the hierarchical model internally to calculate the specificity of the selectors used on a web page. But often as the size of CSS code increases, developers unavoidably face rule conflicts. In these cases, developers use the specificity hierarchy to calculate the precedence of CSS rules and to control the outcome of their web pages. 

Let’s explore a practical example of how to determine the score of a few selectors. 

**`#hello {} will be 0100`**

**`div {} will be 0001 and`**

**`div p.foo {} will be 0012`**

In the order stated above, the four categories will be assigned values 1000, 100, 10 and 1 with the element selectors having the lowest value of 1. These scores will be calculated respectively for each element present inside the selector. The total score for these elements is then calculated and the one with the highest value has the highest specificity.

Let’s explore a couple of examples for clarity. Take note that the properties and values are not included in these examples to keep the focus on the selectors only. 

Example 1
```css
p {} 
div p {}
div p.foo {}
```
p  => 1 element =>  0 0 0 1 => Score: 1

div p => 2 elements => 0 0 0 2 => Score: 2

div p.foo {} => 2 elements and 1 class selector => 0 0 1 2 => Score: 12

The third case has a total of 12 for the p tag and so has the highest specificity. The rules for the other two cases are then overridden and the rules inside the third case are applied. 

#### Example 2
p#bar => 1 element & 1 ID =>  0 1 0 1 => Score: 101

p.foo => 1 element & 1 class => 0 0 1 1 => Score: 11

p.p.foo => 1 element & 2 class =>  0 0 2 1 => Score: 21

By now it should be clear that the case containing ID has a much higher score and the rules inside it will be applied. 

Once you learn about the different pseudo-classes, pseudo-elements, and wide range of selectors later in this section, it will be easy to see why understanding specificity is important. 

While the weights assigned from the hierarchical structure help in a systematic approach, there are a few more guidelines and rules that become important especially in cases when the score for the different selectors is the same. Some of these are:

- Every selector will have a score and place in the hierarchy

- In the case of selectors with equal specificity, the latest or last written rule is the one that will be applied

- In general, ID selector should be applied in cases where you need to be certain about a rule 

- Universal selectors have zero specificity value

This reading only gave you an overview of specificity, but you should know that it is a much broader topic and also the underlying basis on which CSS engines work. That's what the 'Cascading' in CSS means: the way in which CSS engines evaluate and apply the specificity rules is called ‘cascade’. Cascade is a type of small waterfall that falls in stages down the rocks and that is exactly how CSS behaves. 

## Pseudo-elements
By now you know that pseudo-elements help you style a specific part of an element. For example, you can decide to apply styling to only the first word or line in a given element. First, let’s examine the syntax of a pseudo-element.

#### Syntax
```css
selector::pseudo-element {

 property: value; 

}
```

It is important to note that pseudo-elements use two colon characters instead of one.

Now, let’s explore some examples of popular pseudo-elements.

#### ::first-letter
You can use first-letter to change the color of just the first letter of each of the three points in the example text.

HTML code:
```html
<!DOCTYPE html> 

<html> 

    <head> 

        <link rel="stylesheet" href="pseudo4.css"> 

    </head> 

<body> 

    <ul> 

        <li>Based in Chicago, Illinois, Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. </li> 

    <li>The chefs draw inspiration from Italian, Greek, and Turkish culture and have a menu of 12–15 items that they rotate seasonally. The restaurant has a rustic and relaxed atmosphere with moderate prices, making it a popular place for a meal any time of the day.</li> 

    <li>Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant. To craft the menu, Mario relies on family recipes and his experience as a chef in Italy.</li> 

  </ul> 

</body> 

</html> 
```
CSS code:

```css
li::first-letter { 

color:coral; 

font-size: 1.3em; 

font-weight: bold; 

line-height: 1; 

} 
```

![img13](./images/img13.png)

Although the code only changed the first letter of each bullet point, it makes a big difference in terms of presentation. Now let’s change the font in a different way. 

#### ::first-line
First-line will change the complete first line of each of the bullet points to light sea green. 

CSS code:

```css
ul{
    list-style-type: none;
}

li::first-line {
    color: lightseagreen;
    text-decoration: underline;
    line-height: 1;
}

```
Output:

![img14](./images/img14.png)

Because it’s only the first line of each bullet point, it almost functions like dividers between the three different points instead of having to rely on bullets.  

Note that the contents of the line to which this pseudo-element is applied will change as you increase or decrease the size of your viewport. 

Output:

![img15](./images/img15.png)


#### ::selection
Selection is another useful pseudo-element. For example, you may use it when you are taking notes on your device because it allows you to highlight specific text. The effect of it becomes obvious only after the user selects content. On web pages today, you will typically see inverted colors from white-black to black-white when selecting a portion of text.

CSS code:

```css
ul{
    list-style-type: none;
}

li::selection {
    color:brown;
    background-color: antiquewhite;
    line-height: 1;
}

```
 Here is an example of a selection of text.

 Output:

 ![img16](./images/img16.png)

And another example of the same text but with a different section selected and highlighted.

Output:

![img17](./images/img17.png)

  Different segments of the text are highlighted depending on the text that is selected at any given point.    

#### ::marker  
Markers are typically used to add style elements to a list, for instance, to color bullet points. For example, you can enhance the user experience when you use a marker in the following way.    

CSS code:
```css
li::marker {
    color: cornflowerblue;
    content: '<> ';
    font-size: 1.1em;
}

```
Output

![img18](./images/img18.png)

Now the bullet points are cornflower blue and they have the shape specified in the code.

#### ::before and ::after
One more pair of pseudo-elements are the **::before** and **::after** pseudo-elements. They allow you to add content before and after an element on which they are allowed. In other words, new content can be added to a page without adding HTML code for it. You can also add styling options for this content. Let’s do an example where text is added both before and after some cooking guidelines to identify them as important tips. 

HTML code:
```html
<body>
    <p id="tips"> Don't rinse your pasta after it is drained. </p>
    <p> Slice the tomatoes. Take the extra efforts to seed them. </p>
    <p id="tips"> Peel and seed large tomatoes. </p>
</body>

```
CSS code:

```css
#tips::before{
    background: darkkhaki;
    color:darkslategray;
    content: "Tip:";
    padding-left: 3px;
    padding-right: 5px;
    border-radius: 10%;
}

#tips::after{
    background:darkkhaki;
    color:darkslategray;
    content: "!!";
    padding-right: 5px;
    border-radius: 20%;
}

```
Output:

![img19](./images/img19.png)

The “content” property is where the text for the guidelines goes. The word “tip” has been added before each guideline thanks to the rules added for **tips::before**. And, each of the three guidelines now has two exclamation marks after them thanks to the rules added for **tips::after**. Note how the second `<p>` element inside the HTML code remains unaffected. You don’t have to use after and before together like this, but sometimes it is useful to combine them.

The examples covered here illustrate that adding simple code for pseudo-elements can greatly enhance the appearance of websites. There are plenty of other pseudo-elements and some of them are more popular than others. You can follow your own style and explore the creative possibilities that pseudo-classes and pseudo-elements offer.


## CSS Pseudo cheat sheet

#### Simple selectors

| Selector  | Syntax  | Example     |
|-----------|---------|-------------|
| Element   | element | div { }     |
| Class     | .class  | .alpha {  } |
| ID        | #id     | #alpha {  } |
| Universal | *       | * { }       |


#### Variations of simple selectors

| Elements          | Syntax                    | Example         | Description                              |
|-------------------|---------------------------|-----------------|------------------------------------------|
| Two classes       | .first-class.second-class | .alpha.beta { } | All elements with classes alpha and beta |
| Element and class | element.class             | p.alpha { }     | All alpha class elements inside <p>      |
| Two elements      | element, element          | p, div { }      | All <p> and <div> elements               |
| Two elements      | element element           | p div { }       | All <div> elements inside <p>            |

#### Descendant selectors/combinators

| Selector         | Syntax          | Example     | Description                            |
|------------------|-----------------|-------------|----------------------------------------|
| Descendant       | element element | div p { }   | All <p> descendants of <div>           |
| Child            | element>element | div > p { } | All <p> direct descendants of <div>    |
| Adjacent Sibling | element+element | div + p { } | <p> element directly after <div>       |
| General Sibling  | element~element | div ~ p { } | All <p> element iterations after <div> |

#### Attribute selectors

| Selector            | Syntax               | Example                                                                               |
|---------------------|----------------------|---------------------------------------------------------------------------------------|
| [attribute]         | [href] { }           | Selects all elements with a href attribute                                            |
| [attribute=value]   | [lang="fr"] { }      | Selects all elements with lang attribute that has a value of "fr"                     |
| [attribute~=value]  | [input~=hello] { }   | Elements with input attribute containing the whitespace separated substring "hello"   |
| [attribute\|=value] | [lang\|=en] { }      | Elements with lang attribute value equal to "en" or "en-"(en hyphen)                  |
| [attribute^=value]  | a[href^="https"] { } | Every `<a>` element with href attribute value begins with "https"                     |
| [attribute$=value]  | a[href$=".docx"] { } | Every `<a>` element with href attribute value ends with ".docx"                       |
| [attribute*=value]  | a[href*="meta"] { }  | Every `<a>` element with href attribute value has substring "meta"                    |


| Pseudo-class         | Example                   | Description of selection                                                                               |
|----------------------|---------------------------|--------------------------------------------------------------------------------------------------------|
| :active              | a:active { }              | All active links                                                                                       |
| :checked             | input:checked { }         | All the checked `<input>` elements                                                                     |
| :default             | input:default { }         | All default `<input>` elements                                                                         |
| :disabled            | input:disabled { }        | All disabled `<input>` elements                                                                        |
| :empty               | div:empty { }             | All the <div> elements with no children                                                                |
| :enabled             | input:enabled { }         | All the enabled `<input>` elements                                                                     |
| :first-child         | p:first-child { }         | All the <p> elements who are the first child of a parent element                                       |
| :first-of-type       | p:first-of-type { }       | All the <p> element who are the first <p> element of a parent element                                  |
| :focus               | input:focus { }           | Input element under focus                                                                              |
| :fullscreen          | :fullscreen { }           | The element in full-screen mode                                                                        |
| :hover               | p:hover { }               | Action effect on mouse hover                                                                           |
| :invalid             | input:invalid { }         | Input elements with an invalid value                                                                   |
| :last-child          | p:last-child { }          | All the <p> elements who are the last child of a parent element                                        |
| :last-of-type        | p:last-of-type { }        | All the <p> elements who are the last <p> element of a parent element                                  |
| :link                | a:link { }                | All unvisited links                                                                                    |
| :not(selector)       | :not(div) { }             | All the elements that are not a <div> element                                                          |
| :nth-child(n)        | div:nth-child(3) { }      | All the <p> elements that are the third child of a parent element                                      |
| :nth-last-child(n)   | div:nth-last-child(3) { } | All the <div> elements which are the third child of a parent element, counting from last child element |
| :nth-last-of-type(n) | p:nth-last-of-type(2) { } | The second sibling from the last child of a parent element.                                            |
| :nth-of-type(n)      | p:nth-of-type(2) { }      | The second sibling of a parent element.                                                                |
| :only-of-type        | p:only-of-type { }        | All the <p> elements which are only <p> elements inside its parent                                     |
| :only-child          | p:only-child { }          | All the <p> elements which are only child of a parent element                                          |
| :optional            | input:optional { }        | The input elements with no "required" attribute                                                        |
| :required            | input:required { }        | Selects input elements with the "required" attribute specified                                         |
| :root                | :root { }                 | The Root element of document                                                                           |
| ::selection          | ::selection { }           | The portion of an element that is selected by a user                                                   |
| :valid               | input:valid { }           | All the input elements with a valid value                                                              |
| :visited             | a:visited { }             | Selects all visited links                                                                              |

#### Pseudo-element selectors

| Syntax         | Example                | Description                                                   |
|----------------|------------------------|---------------------------------------------------------------|
| ::after        | p::after { }           | Inserts content after content of <p> element                  |
| ::before       | p::before { }          | Inserts content before content of <p> element                 |
| ::first-letter | p::first-letter { }    | Selects first letter of every <p> element                     |
| ::first-line   | p::first-line { }      | Selects first line of every <p> element                       |
| ::placeholder  | input::placeholder { } | Selects input elements with "placeholder" attribute specified |
| ::marker       | ::marker { }           | Selects markers in a list                                     |

#### Text effects cheat sheet

The effects developers use on text items on a web page are chosen mainly because of their styling and layout style. Interesting effects can be created by combining these with other CSS properties. 

The visual representation of text content can be changed by four main properties: text-transform, font-style, font-weight and text-decoration.

| Property        | Values                                             | Description                                                                                        |
|-----------------|----------------------------------------------------|----------------------------------------------------------------------------------------------------|
| Text-transform  | None, uppercase, lowercase, capitalize, full-width | Modify text properties                                                                             |
| Font-style      | Normal, italic, oblique                            | Font styling options such as italics                                                               |
| Font-weight     | Normal, weight, lighter, bolder, 100-900           | Other font styling options like change of emphasis such as making text bold                        |
| Text-decoration | None, underline, overline, line-through            | Shorthand for auxiliary elements added to text using other properties such as text-decoration-line |

The additional properties that help configure styling effects are below.

| Text-align                | For horizontal alignment of text                                                         |
|---------------------------|------------------------------------------------------------------------------------------|
| Text-align-last           | Alignment for the last line when text set to justify                                     |
| Text-combine-upright      | Multiple characters into the space of a single character placed upright like in Mandarin |
| Text-decoration-color     | Color configuration of the text-decoration                                               |
| Text-decoration-line      | Line type in text-decoration such as underline, overline and so on                       |
| Text-decoration-style     | Styles added to lines under text such as wavy, dotted and so on                          |
| Text-decoration-thickness | Thickness of the decoration line                                                         |
| Text-emphasis             | Shorthand for other properties such as color and style                                   |
| Text-indent               | The indentation of the first line                                                        |
| Text-justify              | Specifies the justification method used when text-align is "justify"                     |
| Text-orientation          | Orientation of text in a line such as sideways, upright and so on                        |
| Text-shadow               | Adds shadow to text                                                                      |
| Text-underline-position   | Declare position of underline set using the text-decoration property                     |

Other than these, there are some more properties that help modify the alignment and define the scope of text with their containers. 

| Property      | Values                                  | Description                                                     |
|---------------|-----------------------------------------|-----------------------------------------------------------------|
| Text-overflow | Clip, ellipsis                          | Determines overflow behavior of text with the container         |
| Word-wrap     | Normal, anywhere, break-word            | Applies to inline elements, alias for overflow-wrap             |
| Word-break    | Normal, break-all, keep-all, break-word | Used for long words to decide if words should break or overflow |
| Writing-mode  | Horizontal-tb, vertical-lr, vertical-rl | Can set the text direction vertical or horizontal               |

The properties mentioned are ones that can be used for giving effects to text. 

#### Animation and effects cheat sheet

##### Transform property

**Syntax**

transform: transform function-values

##### Example
```css
.sample-class {
    transform: rotate(60deg);
}
```
##### Keyword-value type: none
```css
.sample-class {
    transform: none;
}
```
**Function-value type: matrix()**

Variations: matrix(), matrix3d()
```css
.sample-class {
     transform: matrix(1.0, 2.0, 3.0, 4.0, 5.0, 6.0);
}
```
**Function-value type: rotate(deg)**

Variations: rotate(), rotate3d(), rotateX(), rotate(), rotateZ()
```css
.sample-class {
    transform: rotate3d(3,2,1, 100deg);
}
```
Note: In rotate3d(), the respective values represent x, y, z co-ordinate and degree of rotations

**Function-value type: translate(x,y)**

Variations: translate(), translate3d(), translateX(), translateY(), translateZ()

```css
.sample-class {
    transform: translate3d(10px, 20px, 30px);
}
```
Note: In translate3d(), the respective values represent translation along the x, y, z co-ordinates

**Function-value type: scale(factor)**

Variations: scale(), scale3d(), scaleX(), scaleY(), scaleZ()
```css
.sample-class {
    transform: scale3d(2, 1, 0.3);
}
```
Note: In scale3d(), the respective values represent scaling times along the x, y, z co-ordinates

**Function-value type: skew(deg, deg)**

Variations: skew(), skewX(), skewY()
```css
.sample-class {
    transform: skew(100deg);
}
```
**Global value types:**
```css
.sample-class {
    transform: inherit;
}
```
```css
.sample-class {
    transform: initial;
}
```
```css
.sample-class {
    transform: revert;
}
```
```css
.sample-class {
    transform: revert-layer;
}
```
```css
.sample-class {
    transform: unset;
}
```

#### Multiple transform over the same element

##### Syntax
Transform can be applied for rotate(), scale() and translate() that can be listed together. Each of these properties can have their own values and the actions will give a combined effect. 

**Example**
```css
.sample-class {
    transform: rotate(45deg) scale(1.5) translate(45px);
}
```
Additional property under transform:transform-origin

Determines the anchor point for the centering of transform.

**Example**
```css
.sample-class {
    transform-origin: 10px 10px;
}
```
```css
.sample-class {
    transform-origin: right bottom;
}
```
##### Transition property
**Transition shorthand**

Transition shorthand has four following sub-properties, each of which can also be individually defined. 

- transition-property

- transition-duration

- transition-timing-function

- transition-delay

You have to list the values without naming them individually. Values skipped will be assigned their default values. 

**Syntax**

transition: property duration timing-function delay;

**Example**

transition: margin-left2s ease-in-out 0.5s;

##### Animations and @keyframes
**animation property:**

**Syntax**

animation: name duration timing-function delay iteration-count direction fill-mode play-state;

**Example**
```css
.sample-class {
    animation: none 2 ease 0.5 4 normal none running;
}
```
The animation property is a shorthand for the sub-properties below:

```
animation-name
animation-duration
animation-timing-function
animation-delay
animation-iteration-count
animation-direction
animation-fill-mode
animation-play-state
```
The values not mentioned are given default values.

Animation-name property is used to tie-in the @keyframes rule.

#### @keyframes

**Syntax**

```css
@keyframes mymove {
  from {property: value}
  to { property: value }
}
```
**Example**
```css
@keyframes animation-name {
    from {bottom: 0px;}
    to {bottom: 100px;}
}
```
Percentage denotes the timing of the animation. 

**Alternative syntax**

```css
@keyframes animation-name {
/* declare actions here */
}
```
**Example**
```css
@keyframes animation-name {
    0%,100%{
        background-color: blue;
    }
    50% {
        background-color: green;
    }
}
```
##### Multiple animations
Works the same as regular animation, multiple rules can be set. 
```css
#some-class{
    animation: animation-a 2s linear infinite alternate, 
        animation-b 3s ease infinite alternate;
}  
```
