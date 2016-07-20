const articles = [
  {
    "id": "prototypal-oop-using-js",
    "title": "Prototypal Object-Oriented Programming using JavaScript",
    "description": "Our <em>industry</em> has gotten really good at making living style guides out of parts: reusable components like color, typography, buttons and forms, voice and tone. We’ve also learned how to map skills to these parts by mobilizing the best people to make decisions across platforms.",
    "topic": "JavaScript",
    "foldImage": {
      "file": "prototypal-oop-using-js-fold.jpg",
      "alt": "Prototypal OOP is like a Throneroom",
      "description": "Prototypal OOP using JavaScript is hard.<br>Very <em>hard</em>."
    },
    "pubdate": "2015-06-25",
    "readtime": 12,
    "content": [
      {
        "type": "text",
        "attributes": "wide10",
        "markdown": "<p class='full-article-summary'>The scene: day one of a consulting gig with a new client to build a design and code library for a web app. As luck would have it, the client invited me to sit in on a summit of 25 design leaders from across their enterprise planning across platforms and lines of business.</p> <section> <h4>What is going on?</h4> <p><strong>Redux & React</strong> are currently mainstream technologies in front-end. Every self-respecting front-end developer knows this fact and tries to dive into them to understand what they are and how to deal with them. Because it seems really clear that the future web applications are all about this sweet couple.</p> <p>The problem is that the process of changing developer’s mind to start thinking in React & Redux way isn’t actually smooth. Frameworks we used to apply (Backbone, Angular, jQuery, etc.) work in drastically another way, so we need some time to switch.</p> <aside>changing developer’s mind to start thinking in React & Redux is hard </aside> <p>Context is an advanced and experimental feature, and perhaps you will never need to use it on your own. Anyway, if you want to be aware of it, <a href='#'>check out the documentation.</a></p> </section> <section> <h4>JavaScript and prototype-based OOP</h4> <p>Following is an example that demonstrates this kind of OOP in JavaScript. We start by creating an <code>animal</code> object:</p> <pre class='language-javascript'> <code class='language-javascript'> <span class='token keyword'>var</span> genericAnimal = object.create(<span class='token keyword'>null</span>); </code> </pre> <p><code>Object.create(null)</code> creates a new empty object. Next, we add some properties and functions to our new object:</p> <pre class='language-javascript'> <code class='language-javascript'> genericAnimal.name = <span class='token string'>'Animal'</span>;<br /> genericAnimal.gender = <span class='token string'>'female'</span>;<br /> genericAnimal.description = function() { return someStuff; } </code> </pre> </section>"
      },
      {
        "type": "image",
        "attributes": "wide9",
        "alt": "somealt",
        "file": "prototypal-oop-using-js-old-apple.jpg"
      },
      {
        "type": "text",
        "attributes": "wide10",
        "markdown": "<section> <h4>Start with a simple product list</h4> <p>A simple list is easy enough. Any whiteboard or text file will do. Produce the list quickly by freelisting as many products as you can think of with teammates involved in starting the system. List actual products (“Investor Relations” and “Careers”), not types of products (such as “Corporate Subsites”).</p> <figure> <table> <thead> <tr> <th>Large Corporate Website</th> <th>Small Product Company</th> <th>Large Enterprise</th> </tr> </thead> <tbody> <tr> <td> <ul> <li>Homepage</li> <li>Products</li> <li>Support</li> <li>About</li> </ul> </td> <td> <ul> <li>Web marketing site</li> <li>Web support site</li> <li>Web Corporate Site</li> <li>Community Site 1</li> <li>Community Site 2</li> <li>Web App Basic</li> <li>Web App Premium</li> </ul> </td> <td> <ul> <li>Web home</li> <li>Web product pages</li> <li>Web product search</li> <li>Web Rewards program</li> <li>iOS apps</li> <li>Android apps</li> </ul> </td> </tr> </tbody> </table> <figcaption>Note that because every enterprise is unique, the longer the lists get, the more specific they become.</figcaption> </figure> <p>If your portfolio is more extensive, you’ll need more deliberate planning and coordination of teams spanning an organization. This calls for a more structured, detailed inventory. It’s spreadsheet time, with products as rows and columns for the following:</p> <ul> <li><strong>Name</strong>, such as Gmail</li> <li>Type / platform: web site, web app, iOS, Android, kiosk, etc.</li> <li>Product owner, if that person even exists</li> <li>Description (optional)</li> </ul> <ol> <li>San Fransisco</li> <li>El Capitan</li> </ol> <dl> <dt>Coffee</dt> <dd>Black hot drink</dd> <dd>Milk</dd> <dd>White cold drink</dd> </dl> <p class='last-content-item'>Creating such an inventory can feel draining for a designer. Some modern digital organizations struggle to fill out an inventory like this. I’m talking deer-in-headlights kind of struggling. Completely locked up. Can’t do it. But consider life without it: if you don’t know the possible players, you may set yourself up for failure, or at least a slower road to success. Therefore, take the time to understand the landscape, because the next step is choosing the right products to work with.</p> </section>"
      }
    ]
  },
  {
    "id": "making-your-js-pure",
    "title": "Making your javaScript pure",
    "description": "Apply the principles of purely functional languages to your JavaScript to gain more reliable, self-documenting codebases.",
    "topic": "JavaScript",
    "foldImage": {
       "file": "prototypal-oop-using-js-fold.jpg",
      "alt": "Prototypal OOP is like a Throneroom",
      "description": "There is time for <em>work</em>.<br>And there is time for vacations."
    },
    "pubdate": "2015-06-07",
    "readtime": 1,
    "content": [
      {
        "type": "text",
        "attributes": "wide10",
        "markdown": "<p>Dark Lord and his generals are invading the World. Only <em>you</em> can stop him! User iterface design and Scaleform implementation for iOS fighting game - Bladelords.</p>"
      }
    ]
  },
  {
    "id": "once-upon-a-time",
    "title": "Once Upon a Time",
    "description": "Business communications benefit from better, tighter delivery—a technique we learned from fairy tales, Anne Gibson reminds us.",
    "topic": "Bussines",
    "foldImage": {
       "file": "prototypal-oop-using-js-fold.jpg",
      "alt": "Prototypal OOP is like a Throneroom",
      "description": "There is time for <em>work</em>.<br>And there is time for vacations."
    },
    "pubdate": "2015-05-24",
    "readtime": 7,
    "content": [
      {
        "type": "text",
        "attributes": "wide10",
        "markdown": "<p>Dark Lord and his generals are invading the World. Only <em>you</em> can stop him! User iterface design and Scaleform implementation for iOS fighting game - Bladelords.</p>"
      }
    ]
  },
  {
    "id": "meaningful-css-style-like-you-mean-it",
    "title": "Meaningful CSS: Style Like You Mean It",
    "description": "Tim Baxter encourages us to move beyond the “measles of markup” to write rich, semantic HTML and CSS. Only habit is stopping us.",
    "topic": "JavaScript",
    "foldImage": {
       "file": "prototypal-oop-using-js-fold.jpg",
      "alt": "Prototypal OOP is like a Throneroom",
      "description": "There is time for <em>work</em>.<br>And there is time for vacations."
    },
    "pubdate": "2015-04-12",
    "readtime": 14,
    "content": [
      {
        "type": "text",
        "attributes": "wide10",
        "markdown": "<p>Dark Lord and his generals are invading the World. Only <em>you</em> can stop him! User iterface design and Scaleform implementation for iOS fighting game - Bladelords.</p>"
      }
    ]
  }
];

export default articles;
