# Hello World for Node.js

Simply says "Hello World" upon calling a number.

## Running the Project on Your Machine

To run this project on your computer, download or clone the source. You will also need to download and install [Node.js](http://nodejs.org/) , which should also install [npm](https://iojs.org/en/index.html). You will also need to sign up for a [KooKoo account](http://kookoo.ozonetel.com/index.php/component/user/?task=register) if you don't have one already.

```bash
git clone https://github.com/kookootuts/helloworld-node.git
```
## Install Dependencies

Navigate to the project directory in your terminal and run:

```bash
npm install
```

This should install all of the project dependencies from npm into a local `node_modules` folder.

## Running the Project

To launch the application, you can use `node .` in the project's root directory. You might also consider using [nodemon](https://github.com/remy/nodemon) for this. It works just like the node command, but automatically restarts your application when you change any source code files.

```bash
npm install -g nodemon
nodemon .
```

## What is KooKoo

KooKoo is an interface between your web application and the caller. It takes phone commands from you and executes them on your behalf to the caller. The best way to think of KooKoo is as just another web page in your application. Only difference is, the web page is accessible from the phone rather than the browser.

## How does KooKoo work

  * Caller calls the KooKoo number
  * KooKoo informs your application (HTTP request)
  * You tell KooKoo what to do (Play some text, collect input, send sms, record etc)(XML Response)
  * HTTP helpers (redirection, caching, etc)
  * KooKoo performs the action on your behalf
  * KooKoo sends you the result of the action to your application (HTTP Request).

## KooKoo Challenges

  * [KooKoo Mashup Challenge](http://www.venturesity.com/challenge/id/149?utm_source=github&utm_medium=social&utm_campaign=kookootuts): Use any publically available API such as Facebook or Twitter API, Google location API etc. along with the KooKoo API to create cool products and solutions. 


## Important Links
  * [KooKoo Documentation](http://kookoo.ozonetel.com/index.php/kookoo-docs)
  * [Express routing](http://expressjs.com/en/guide/routing.html)
