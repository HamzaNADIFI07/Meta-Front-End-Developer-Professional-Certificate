

## Semantic HTML cheat sheet

There are hundreds of semantic tags available to help describe the meaning of your HTML documents. Below is a cheat sheet with some of the most common ones you’ll use in this course and in your development career.

#### Sectioning tags
Use the following tags to organize your HTML document into structured sections. 

`<header>`
The header of a content section or the web page. The web page header often contains the website branding or logo.

`<nav>`
The navigation links of a section or the web page.

`<footer>`
The footer of a content section or the web page. On a web page, it often contains secondary links, the copyright notice, privacy policy and cookie policy links.

`<main>`
Specifies the main content of a section or the web page.

`<aside>`
A secondary set of content that is not required to understand the main content.

`<article>`
An independent, self-contained block of content such as a blog post or product.

`<section>`
A standalone section of the document that is often used within the body and article elements.

`<details>`
A collapsed section of content that can be expanded if the user wishes to view it.

`<summary>`
Specifies the summary or caption of a `<details>` element.

`<h1><h2><h3><h4><h5><h6>`
Headings on the web page. `<h1>` indicates the most important heading whereas `<h6>` indicates the least important. 

#### Content tags
`<blockquote>`
Used to describe a quotation.

`<dd>`
Used to define a description for the preceding `<dt>` element.

`<dl>`
Used to define a description list.

`<dt>`
Used to describe terms inside `<dl>` elements.

`<figcaption>`
Defines a caption for a photo image.

`<figure>`
Applies markup to a photo image.

`<hr>`
Adds a horizontal line to the parent element.

`<li>`
Used to define an item within a list.

`<menu>`
A semantic alternative to `<ul>` tag.

`<ol>`
Defines an ordered list.

`<p>`
Defines a paragraph.

`<pre>`
Used to represent preformatted text. Typically rendered in the web browser using a monospace font.

`<ul>`
Unordered list

#### Inline tags

`<a>`
An anchor link to another HTML document.

`<abbr>`
Specifies that the containing text is an abbreviation or acronym.

`<b>`
Bolds the containing text. When used to indicate importance use `<strong>` instead.

`<br>`
A line break. Moves the subsequent text to a new line.

`<cite>`
Defines the title of creative work (for example a book, poem, song, movie, painting or sculpture). The text in the `<cite>` element is usually rendered in italics.

`<code>`
Indicates that the containing text is a block of computer code.

`<data>`
Indicates machine-readable data.

`<em>`
Emphasizes the containing text.

`<i>`
The containing text is displayed in italics. Used to indicate idiomatic text or technical terms.

`<mark>`
The containing text should be marked or highlighted.

`<q>`
The containing text is a short quotation.

`<s>`
Displays the containing text with a strikethrough or line through it.

`<samp>`
The containing text represents a sample.

`<small>`
Used to represent small text, such as copyright and legal text.

`<span>`
A generic element for grouping content for CSS styling.

`<strong>`
Displays the containing text in bold. Used to indicate importance.

`<sub>`
The containing text is subscript text, displayed with a lowered baseline.

`<sup>`
The containing text is superscript text, displayed with a raised baseline.

`<time>`
A semantic tag used to display both dates and times.

`<u>`
Displays the containing text with a solid underline.

`<var>`
The containing text is a variable in a mathematical expression.

#### Embedded content and media tags
`<audio>`
Used to embed audio in web pages.

`<canvas>`
Used to render 2D and 3D graphics on web pages.

`<embed>`
Used as a containing element for external content provided by an external application such as a media player or plug-in application. 

`<iframe>`
Used to embed a nested web page. 

`<img>`
Embeds an image on a web page.

`<object>`
Similar to `<embed>` but the content is provided by a web browser plug-in.

`<picture>`
An element that contains one `<img>` element and one or more `<source>` elements to offer alternative images for different displays/devices.

`<video>`
Embeds a video on a web page.

`<source>`
Specifies media resources for `<picture>`, `<audio>` and`<video>` elements.

`<svg>`
Used to define Scalable Vector Graphics within a web page.

#### Table tags
`<table>`
Defines a table element to display table data within a web page.

`<thead>`
Represents the header content of a table. Typically contains one `<tr>` element.

`<tbody>`
Represents the main content of a table. Contains one or more `<tr>`elements.

`<tfoot>`
Represents the footer content of a table. Typically contains one `<tr>` element.

`<tr>`
Represents a row in a table. Contains one or more `<td>` elements when used within `<tbody>` or `<tfoot>`. When used within `<thead>`, contains one or more `<th>` elements.

`<td>`
Represents a cell in a table. Contains the text content of the cell.

`<th>`
Defines a header cell of a table. Contains the text content of the header.

`<caption>`
Defines the caption of a table element.

`<colgroup>`
Defines a semantic group of one or more columns in a table for formatting.

`<col>`
Defines a semantic column in a table.

## Metadata cheat sheet


#### HTML `<meta>` tags 
Earlier in the course, you learned about meta tags and how you can leverage them to convey information to search engines to better categorize your pages. We recommend that you keep this cheat sheet handy when building your web applications. The structure of a meta tag is as follows.

**Name**
The name of the property can be anything you like, although browsers usually expect a value they understand and can take an action upon. An example would be `<meta name="author" content="name">` to state the author of the page. 

**Content**

The content field specifies the property's value. For example, you can use `<meta name="language" content="english">`, to specify the language of the webpage to search engines. 

**Charset** 

The charset is a special field that lets you specify the character encoding used for the page so that the browser can display it properly. The most frequently used is utf-8, and you would add it to your HTML header as follows: `<meta charset="UTF-8"> ` 

**HTTP-equiv**

This field stands for HTTP equivalent, and it’s used to simulate HTTP response headers. This is rare to see, and it’s recommended to use HTTP headers over HTML http-equiv meta tags. For example, the next tag would instruct the browser to refresh the page every 30 minutes: `<meta http-equiv="refresh" content="30">`


#### Basic meta tags (meta tags For SEO) 
`<meta name="description"/>` provides a brief description of the web page 

`<meta name=”title”/>` specifies the title of the web page 

`<meta name="author" content="name"> `specifies the author of the web page  

`<meta name="language" content="english">` specifies the language of the web page 



`<meta name="robots" content="index,follow" />` tells search engines how to crawl or index a certain page 

`<meta name="google"/>` tells Google not to show the sitelinks search box for your page when showing search results 

`<meta name="googlebot" content=”notranslate” />` tells Google you don’t want to provide an automatic translation for your page if the user uses a different language  

`<meta name="revised" content="Sunday, July 18th, 2010, 5:15 pm" />` specifies the last modified date and time on which you have made certain changes 

`<meta name="rating" content="safe for kids">` specifies the expected audience for your page 

`<meta name="copyright" content="Copyright 2022">` specifies a Copyright 


#### `<meta http-equiv="..."/>` tags
`<meta http-equiv="content-type" content="text/html">` specifies the format of the document returned by the server 

`<meta http-equiv="default-style"/>`  specifies the format of the styling document 

`<meta http-equiv="refresh"/>` specifies the duration of the page before it’s considered stale 

`<meta http-equiv=”Content-language”/>` specifies the language of the page 

`<meta http-equiv="Cache-Control" content="no-cache">` instructs the browser how to cache your page 

#### Responsive design/mobile meta tags 
`<meta name="format-detection" content="telephone=yes"/>` indicates that telephone numbers should appear as hypertext links that can be clicked to make a phone call 

`<meta name="HandheldFriendly" content="true"/>` specifies that the page can be properly visualized on mobile devices 

`<meta name="viewport" content="width=device-width, initial-scale=1.0"/>` specifies the area of the window in which web content can be seen

## Input types

#### Button

This displays a clickable button and it’s mostly used in HTML forms to activate a script when clicked. `<input type="button" value="Click me" onclick="msg()" />`

Keep in mind you can also define buttons with the `<button>` tag, with the added benefit of being able to place content like text or images inside the tag.
```html
<button onclick="alert('Are you sure you want to continue?')"> 
    <img src="https://yourserver.com/button_img.jpg" 
        alt="Submit the form" height="64" width="64">
 </button> 
```
#### Checkbox
Defines a check box allowing single values to be selected or deselected. They are used to let a user select one or more options of a limited number of choices.
```html
<input type="checkbox" id="dog" name="dog" value="Dog">
<label for="dog">I like dogs</label>
<input type="checkbox" id="cat" name="cat" value="Cat">
<label for="cat">I like cats</label>
```
#### Radio
Displays a radio button, allowing only a single value to be selected out of multiple choices. They are normally presented in radio groups, which is a collection of radio buttons describing a set of related options that share the same "name" attribute.

```html
<input type="radio" id="light" name="theme" value="Light"> 
<label for="light">Light</label> 
<input type="radio" id="dark" name="theme" value="Dark"> 
<label for="dark">Dark</label> 
```
#### Submit
Displays a submit button for submitting all values from an HTML form to a form-handler, typically a server. The form-handler is specified in the form’s "action" attribute:
```html
<form action="myserver.com" method="POST">
  …
<input type="submit" value="Submit" />
</form>
```
#### Text
Defines a basic single-line text field that a user can enter text into. 
```html
<label for="fname">First name:</label> 
<input type="text" id="fname" name="fname"> 
```
#### Password
Defines a single-line text field whose value is obscured, suited for sensitive information like passwords.
```html
<label for="pwd">Password:</label> 
<input type="password" id="pwd" name="pwd"> 
```
#### Date
Displays a control for entering a date with no time (year, month and day).
```html
<label for="dob">Date of birth:</label>
<input type="date" id="dob" name="date of birth">
```
#### Datetime-local
Defines a control for entering a date and time, including the year, month and day, as well as the time in hours and minutes.

```html
<label for="birthdaytime">Birthday (date and time):</label>
<input type="datetime-local" id="birthdaytime" name="birthdaytime">
```
#### Email
Defines a field for an email address. It’s similar to a plain text input, with the addition that it validates automatically when submitted to the server.
```html
<label for="email">Enter your email:</label>
<input type="email" id="email" name="email">
```
#### File
Displays a control that lets the user select and upload a file from their computer. To define the types of files permissible you can use the "accept" attribute. Also, to enable multiple files to be selected, add the "multiple" attribute.
```html
<label for="myfile">Select a file:</label>
<input type="file" id="myfile" name="myfile">
```
#### Hidden
Defines a control that is not displayed but whose value is still submitted to the server.
```html
<input type="hidden" id="custId" name="custId" value="3487">
```

#### Image
Defines an image as a graphical submit button. You should use the “src” attribute to point to the location of your image file.
```html
<input type="image"src="submit_img.png" alt="Submit" width="48" height="48">
```
#### Number
Defines a control for entering a number. You can use attributes to specify restrictions, such as min and max values allowed, number intervals or a default value.
```html
<input type="number" id="quantity" name="quantity" min="1" max="5">
```
#### Range
Displays a range widget for specifying a number between two values. The precise value, however, is not considered important. This is typically represented using a slider or dial control. To define the range of acceptable values, use the “min” and “max” properties.
```html
<label for="volume">Volume:</label>
<input type="range" id="volume" name="volume" min="0" max="10">
```

#### Reset
Displays a button that resets the contents of the form to their default values.
```html
<input type="reset">
```
#### Search
Defines a text field for entering a search query. These are functionally identical to text inputs, but may be styled differently depending on the browser.
```html
<label for="gsearch">Search in Google:</label>
<input type="search" id="gsearch" name="gsearch">
```
#### Time
Displays a control for entering a time value in hours and minutes, with no time zone.
```html
<label for="appt">Select a time:</label>
<input type="time" id="appt" name="appt">
```
#### Tel
Defines a control for entering a telephone number. Browsers that do not support “tel” fall back to standard text input. You can optionally use the "pattern" field to perform validation.
```html
<label for="phone">Enter your phone number:</label>
<input type="tel" id="phone" name="phone" pattern="[+]{1}[0-9]{11,14}">
```
#### Url
Displays a field for entering a text URL. It works similar to a text input, but performs automatic validation before being submitted to the server.
```html
<label for="homepage">Add your homepage:</label>
<input type="url" id="homepage" name="homepage">
```
#### Week
Defines a control for entering a date consisting of a week-year number and a year, with no time zone. Keep in mind that this is a newer type that is not supported by all the browsers.
```html
<label for="week">Select a week:</label>
<input type="week" id="week" name="week">
```
#### Month
Displays a control for entering a month and year, with no time zone. Keep in mind that this is a newer type that is not supported by all the browsers.

```html
<label for="bdaymonth">Birthday (month and year):</label>
<input type="month" id="bdaymonth" name="bdaymonth" min="1930-01" value="2000-01">
```
## Cheat sheet: Interactive form elements
When filling in HTML forms, we expect users to abide by certain rules, like using numbers when asked to, or properly formatting a URL or an email when needed. However, humans are prone to errors and in some cases, they may overlook some of the data they input. That’s why it’s important to ensure the shape of the data we expect in each field is correct. HTML form validation is a set of attributes we can add to form inputs to perform automatic validation on the user’s behalf. 
The most important attributes you’ll find yourself using for validation are the following.

#### Required
Denotes a mandatory input that the user can’t leave empty. It can be used with any input type, like password, radio, text and so on. 

`<input type="text" id="firstName" name="firstName" required>`

#### Maxlength 
Specifies the maximum length of a text input, in other words, the maximum number of characters that can be entered for a specific field. If provided, it will prevent the user from entering more characters than the limit. 

`<input type="text" id="description" name="description" maxlength="50">` 

#### Minlength 
Specifies the minimum length of a text input. If set, the input will not accept fewer characters than those specified. 

`<input type="password" id="password" name="password" minlength="8">` 

#### Min and max attributes 
Determine the minimum and maximum values allowed for an input field. They are usually applied to numerical text inputs, range inputs or dates. 

`<input type="number" id="quantity" name="quantity" min="1" max="10">`

`<input type="range" id="volume" name="volume" min="1" max="100">`

#### Multiple 
Indicates that the user can enter more than one value in a single input field. This attribute can only be used for email and file input types. 

`<input type="file" id="gallery" name="gallery" multiple>` 

#### Pattern 
Defines a particular pattern that an input field value has to fulfill to be considered valid. This attribute expects a regular expression to specify the pattern. It works with text, date, search, URL, tel, email and password input types. For example, you can restrict phone numbers to be only from the UK. 
`<input type="tel" id="phone" name="phone" pattern=”^(?:0|\+?44)(?:\d\s?){9,10}$” >`
## Submit
You have recently learned about how forms are sent to web servers and the difference between Get and Post. In this reading, you will build on this knowledge by learning about Submit. 

#### Action and method 

Form submissions are an essential part of the world wide web. Nearly every website uses forms, from buying items online to ordering food for delivery. When you click the login button on a website, it sends your username and password to a web server to log you into your account. 

As you know by now, you add a form to your web page using the form tag. 
```html
<form> 
</form> 
```
But how the form is submitted is determined by two essential attributes: action and method. 

The action attribute specifies to which web address the form must be sent. This is address is location of server-side code that will process the request.

```html
<form action="/login"> 
</form> 
```
It is important to note that action can be a full URL address such as `https://meta.com`, an absolute path such as `/login`, or a relative path such as `login`. 

The absolute path, which starts with a forward slash, will use the base address of the current website, such as 
https://meta.com` and combine it with the absolute path. For example, if `/login` is the absolute path, the form will be submitted to `https://meta.com/login`. If the address is `https://meta.com/company-info/` and /login is the absolute path, the submission address will still be `https://meta.com/login`.

Similarly, a relative path will combine the current web address with a relative path. For example, if the web browser is currently on the web page `https://meta.com/company-info/`, and the relative path is set to `login`, the form will be submitted to `https://meta.com/company-info/login`. 

The method attribute specifies which HTTP method is used to submit the form; GET or POST. 
```html
<form method="get"> 
</form> 
```
```html
<form method="post"> 
</form> 
```
The form will default to the HTTP GET method when the method attribute is not provided. 

As you may already know, when the form is submitted using the HTTP GET method, the data in the form's fields are encoded in the URL. And when the form is submitted using the HTTP POST method, the data is sent as part of the HTTP request body. 

When the web server receives the request, it processes the data and sends back an HTTP response. The response indicates the result of the submission, which can be successful or fail due to invalid or incorrect data. 

However, as a front-end developer, it is essential to know that forms are not the only way to submit data to the web server. As you learn more about JavaScript and front-end libraries, you’ll discover that developers often submit HTTP requests directly via code and send data as part of the HTTP request body in a text format called JavaScript Object Notation, or JSON. But that is a topic for another course. 

## Glossary: HTML form elements

The `<form>` element in HTML is an important and useful element. The following sheet provides an overview of the `<form>` constituent elements and their common attributes with simple examples for quick reference.

#### <input> 
It is used to create interactive controls, for example, buttons and various types of text fields and so on, to accept input or data from the user. The key attribute of this element is `type`. Some common values for the `type` include: `button, checkbox, date, email, number, password, submit, text, and url`. These values dictate the appearance of the element. For example, this code:
```html
<form action="my_action_page"> 

  <label for="uname">Username:</label> 
  <br> 
  <input type="text" id="uname" name="username"> 
  <br> 
  <label for="pwd">Password:</label> 
  <br> 
  <input type="password" id="pwd" name="pwd"> 
  <br><br> 
  <input type="submit" value="Login"> 
</form> 
```
Results in the following output:

![img1](./images/img1.png)

 Note how the type `password` hides the user input. 

#### <label>
Defines a label for an element. It has an attribute "for", the value of which should be equal to the id attribute of the element it is associated with. Note how in the example above, the `<label>` is associated with the `<input>` using its id value. 


#### <select>
Defines a drop-down list of options presented to the user. It has a couple of attributes: 

- Form, the id of the form in which the drop-down appears 

- Name specifies the name of the control 

- Multiple Boolean attribute, when specified, indicates if a user can select multiple options out of the list 

- Required indicates if the user is required to select an option before submitting a form 

- Size mentions the number of visible options in a drop-down list 

The options in a drop-down list are defined using the `<option>` element inside `<select>`. Note the example in the `<option>` description below. 


#### <textarea>

Defines a multi-line input field, typically to allow the user to input longer textual data. The common attributes for this element include: 

- `cols` defines the width of the text area, the default value is 20 

- `form` the form element the text area is associated with 

- `maxlength` when specified, limits the maximum number of characters that can be entered in the text area 

- `minlength` the minimum number of characters that the user should enter 

- `readonly` once set, the user cannot modify the contents 

- `rows` defines the number of visible text lines for the text area 

The following line of code defines a text area of 10 visible lines and nearly 30 characters wide where the user can input a maximum of 200 characters: 
```html
<textarea name="response" rows="10" cols="30" maxlength=”200”> 

</textarea> 
```
#### <button>
Defines a clickable button. The `onclick` attribute defines the behavior when the button is clicked by the user. For example, in the code below, an alert message is shown to the user. 
```html
<button type="button" onclick="alert('You just clicked!')">Click Me! 
</button> 
```
#### <fieldset> 

Used to group related input elements in a form. For instance, elements related to the user’s personal information and educational qualification can be grouped separately in two field sets. 

#### <legend> 

Defines a caption for the `<fieldset>` element. For example: 
```html
<fieldset> 
  <legend>Personal Info</legend> 
  <label for="fname">First name:</label><br> 
  <input type="text" id="fname" name="fname" value="John"><br> 
  <label for="lname">Last name:</label><br> 
  <input type="text" id="lname" name="lname" value="Doe"><br> 
</fieldset> 

<fieldset> 
  <legend>Qualificaiton</legend> 
  <label for="pdegree">Primary degree:</label><br> 
  <input type="text" id="pdegree" name="degree" value="Masters"><br> 
  <label for="fos">Last name:</label><br> 
  <input type="text" id="fos" name="field" value="Psychology"><br> 
</fieldset> 
```
#### <datalist>


Specifies a list of pre-defined options for an input element. It differs from <select> since the user can still provide textual or numeric input other than the listed options. 
```html
<form action="/my_action_page"> 
  <label for="flowers">Favourite flower:</label><br> 
  <input list="flowers" name="flowers"> 
  <datalist id="flowers"> 
    <option value="Rose"> 
    <option value="Lily"> 
    <option value="Tulip"> 
    <option value="Daffodil"> 
    <option value="Orchid"> 
  </datalist> 
  ... 
</form>
```
![img2](./images/img2.png)

#### <output> 

Represents the result of a calculation (typically the output of a script) or the outcome of the user action. 

#### <option> 

Defines an option for the drop-down list. The following code example demonstrates how a simple list can be defined, with the rendered view below the code block.
```html
<label for="course">Choose a course:</label><br> 
<select id="course" name="courselist"> 
  <option value="html">HTML Introduction</option> 
  <option value="css">Styling with CSS</option> 
  <option value="js">JavaScript</option> 
  <option value="react">React Basics</option> 
</select> 
```
![img3](./images/img3.png)


By default, the first item in the drop-down list is selected. To define a pre-selected option, add the selected attribute to the option. 

#### <optgroup> 

Defines a group of related options in a drop-down list. Its attribute label names the group. 

## Images
This lesson will help refresh your knowledge of the `<img>` tag and how you can use it to embed images in webpages. 

The `<img>` tag is used to add an image to a web page. The image’s address is specified using the src attribute. For example, if you wanted to embed an image file named photo.png, you can do that with the following HTML. 

`<img src="photo.png">`

You can also specify the width and height of the image using the width and height attributes. For example, if the width of the photo is 640 pixels and the height of the photo is 480 pixels, you can use the following HTML. 

`<img src="photo.png" width="640" height="480">`

It is important to note that you can set the image to a larger or smaller size and the web browser will automatically scale the image. For example, you can update the previous HTML to half the width and height and the image would shrink by 50%. 

`<img src="photo.png" width="320" height="240">` 

One useful feature of rendering images in the web browser is that the web browser can automatically keep the correct ratio of width to height. So for example, if you want to scale the image by 50%, you can simply set the width attribute and the web browser will automatically calculate the height. 

`<img src="photo.png" width="320">` 

But what happens if the photo doesn’t load? Perhaps the file was accidentally deleted, or you mistyped the file name. Luckily, the web browser has a way to display some text when the image fails to load. This is done using the alt attribute. For example, you can display the text My Profile Photo using the alt attribute in the previous HTML. 

`<img src="photo.png" width="320" alt="My Profile Photo">` 

It is important to ensure that screen reader accessibility software can interpret images displayed in the web browser. To support this, the `<img>` tag is combined with the `<figure>` and `<figcaption>` tags to provide a description of the image. The `<img>` tag is added inside the `<figure>` tag and the `<figcaption>` is specified after it. 
```html
<figure> 
   <img src="photo.png" width="320" alt="My Profile Photo"> 
   <figcaption>A photo of myself on a beach in 2015</figcaption> 
</figure>
```
One last thing to note is that like videos and audio, the web browser only supports specific file types. These file types are: 

- .APNG – Animated Portable Network Graphics 

- .AVIF – AV1 Image Format 

- .GIF – Graphics Interchange Format 

- .JPEG / .JPG – Joint Photographic Expert Group image format 

- .PNG – Portable Network Graphics 

- .SVG – Scalable Vector Graphics 

- .WEBP – Web Picture Format 


Images will be important as you build websites and ensuring they are accessible will provide a better user experience for all visitors. 

## iFrame sandbox cheat sheet

The `<iframe>` is the inline frame element that embeds an HTML page into another page.  

Apart from the global attributes, which can be a part of the iframe, major element-specific attributes are listed below. 

#### allow 
It specifies what features or permissions are available to the frame, for instance, access to the microphone, camera, other APIs and so on. For example: 

- `allow="fullscreen”` the fullscreen mode can be activated 

- `allow=“geolocation”` lets you access the user’s location 

To specify more than one feature, a semicolon-separator should be used between features. For example, the following would allow using the camera and the microphone: 

`<iframe src="https://example.com/…" allow="camera; microphone"> </iframe>`

#### name 
The name for the `<iframe>`. For example: 

`<iframe name = "My Frame" width="400" height="300"></iframe>`  

#### height 
It specifies the height of the frame. The default value is 150, in terms of CSS pixels. 
width 

#### width
Specifies the width of the frame, in terms of CSS pixels. The default value is 300 pixels.

#### referrerpolicy 
A referrer is the HTTP header that lets the page know who is loading it. This attribute indicates which referrer information to send when loading the frame resource. The common values are: 

- no-referrer The referrer header will not be sent. 

- origin The referrer will be limited to the origin of the referring page 

- strict-origin The origin of the document is sent as the referrer only when using the same protocol security level (HTTPS to HTTPS) 

#### sandbox 
To enforce greater security, a sandbox applies extra restrictions to the content in the `<iframe>`. To lift particular restrictions, an attribute value (permission token) is used. The common permission tokens are listed below: 

- `allow-downloads` Allows the user to download an item 

- `allow-forms` Allows the user to submit forms 

- `allow-modals` The resource can open modal windows 

- `allow-orientation-lock` Lets the resource lock the screen orientation 

- `allow-popups` Allows popups to open 

- `allow-presentation` Allows a presentation session to start 

- `allow-scripts` Lets the resource run scripts without creating popup windows 


Note that when the value of this attribute is empty, all restrictions are applied. To apply more than one permission, use a space-separated list. For example, the following would allow form submission and scripts while keeping other restrictions active: 

```html
<iframe src="my_iframe_sandbox.html" sandbox="allow-forms allow-scripts"> 
</iframe> 
```
#### src 
The URL of the page to embed in the `<iframe>`. Using the value `about:blank` would embed an empty page. 

#### srcdoc
Let's you specify the inline HTML to embed in the `<iframe>`. When defined, this attribute would override the `src` attribute.  

For instance, the following code will display "My inline html" in the frame, instead of loading `my_iframe_src.html`.
```html
<iframe src="my_iframe_src.html" srcdoc="<p>My inline html</p>" > 
</iframe> 
```
#### loading
This attribute let's you specify if the iframe should be loaded immediately when the web page loads (`eager`) or loaded when iframe is displayed in the browser (`lazy`). This allows you to defer loading iframe content if it is further down your web page and outside of the display area when the page is initially loaded. 
```html
<iframe src="my_iframe_src.html" loading="lazy" > 
</iframe> 
```
#### title
This attribute let's you add a description to the iframe for accessibility purposes. The value of this attribute should accurately describe the iframe's content.
```html
<iframe src="history.html" title="An embedded document about the history of my family" > 
</iframe> 
```
