# Assignment 01: Build a web server in Node.js

This assignment will help you get started working with Node.js by hacking your way through creating a webserver from scratch. 

## DO NOT CLONE THIS REPOSITORY DIRECTLY

Use the GitHub classroom link instead: https://classroom.github.com/a/d2j_Uokh

**_If you clone this repo directly, it will not be added to the organization as an individual repo associated with your account and you will not be able to push to it._**

# Instructions

## Build your own web server from scratch!

In this assignment, you will write a script that uses mostly built-in Node.js modules to serve a single web page from a file that you have stored in a `public` subdirectory next to your server file.

The cool thing about this assignment is that it should take about 20 lines of code *in toto.*

### But I don't know how to build a web server?

Yes. That's right. You don't.

Yet.

Or maybe you do already? That's okay, too.

I didn't used to know how to build a web server either, but then I hacked one together and now I know how to do that.

This assignment is an exercise not in programming as much as it is in being able to figure things out based only on an inexhaustible glut of information that you have complete, unfettered access to.

### If you don't know what you're doing, you can't make mistakes.

This assignment is an exercise in hacking something together that works.
That, it turns out, is how we do most things.
You need to get used to taking a deep breath, centering yourself, and then heading into the unknown.

You are not doing this assignment so that you can memorize how to do these things, but rather to give yourself confidence that you, in fact, can figure out how to do these things.

The instructions below will not give you full directions for every single step or directive, but instead point you to where you can look to find things that will be helpful.

### Try stuff

You will also have to try stuff and if it doesn't work, try something else.
Read documentation.
Read tutorials.
Search for things (Stack Overflow is your friend).

You can do this.

I believe in you.

## Get started

We'll get started like we always will: with GitHub.

Follow the link at the top of this page to accept the assignment through GitHub classroom. Click the link to the repository. Get the SSH clone URL.

### Clone your repository

Using git in the terminal, clone your repo locally.

You should see a couple of files, but it should be mostly empty.

Like this:

```
$ ls
LICENSE  README.md  server.js.example
```

> **IMPORTANT:** TRACK YOUR CHANGES. As you work through this assignment, once you get one thing to work, and you test it: commit the change with git. Be intentional about this. This will help you revert to a known working state if you break something as you move to your next step.

### Initialize the repo as an NPM package

Run `npm init` following and fill in the prompts accordingly.

Make sure to do the following:

1. Give the package whatever `name` you like, "something-something-webserver," or whatever. It doesn't matter what you call it.
2. Set `author` to your GitHub username.
3. Set `main` to `server.js`.
4. Set `test` to `node server.js --port=5555`
5. Set `license` to match the one identified in the `LICENSE` file instead of ISC. 

To look up the string that you must put to make that change, find the correct identifier at this site: https://spdx.org/licenses/

When you are done with that, your `package.json` file should look something like this (though yours will be a little different):

```json
{
  "name": "my-own-private-web-server",
  "version": "0.0.1",
  "description": "This package contains a very simple web server that takes one argument for port and then serves any files inside the public directory.",
  "main": "server.js",
  "scripts": {
    "test": "node server.js --port=5555",
    "start": "node server.js"
  },
  "keywords": [
    "web",
    "server",
    "port",
    "node",
    "fs",
    "args",
    "http"
  ],
  "author": "@jdmar3",
  "license": "GPL-3.0-or-later"
}
```

`package.json` is just a configuration file, which means that you can always change it later.
You do have to be careful when you edit it to ensure that the JSON structure remains intact.
See the guides for links to JSON validators that you can use: https://jsononline.net/json-validator

Read through the `npm` documentation to help you better understand what the `init` process is doing and what `package.json` does for you: https://nodejs.dev/learn/an-introduction-to-the-npm-package-manager

### Install one dependency

For this assignment we need to grab one dependency package, `minimist`.
This is going to help us accept arguments from the command line to interact with our web server.

Run `npm install minimist` to install the package.

You should now see a `package-lock.json` file and a `node_modules` subdirectory in your directory as well:

```
$ ls
node_modules  package.json  package-lock.json  server.js.example
```

### Add `.gitignore`

Add a file named `.gitignore` and put `node_modules/` in it:

```.gitignore
node_modules/
```

This is going to tell `git` not to track anything in that directory.

If you want a full `.gitignore` for Node, you can use the text in this file: https://github.com/github/gitignore/blob/main/Node.gitignore

### Make the public directory

Make a directory (folder) inside your repo directory called `public`.

This is where we are going to store some HTML. 

Create a new file in the `public` directory called `index.html`. Then put the following HTML code in it. Add rows to the table below so that there is one row for every letter in the alphabet:

```html
<!DOCTYPE html>
<html lang="en">
	<head>  
        	<meta charset="UTF-8">
        	<meta name="viewport" content="width=device-width, initial-scale=1.0">
        	<title>Alphabet</title>
    	</head>
    	<body>
        	<div>
            		<h1>Alphabet table</h1>
            		<table>
				<thead>
  					<tr>
    						<th>Column 0</th><th>Column 1</th>
  					</tr>
				</thead>
				<tbody>
  					<tr>
    						<td>A</td><td></td>
  					</tr>
  					<tr>
    						<td></td><td>B</td>
  					</tr>
  					<tr>
    						<td></td><td>C</td>
  					</tr>
  					<tr>
    						<td></td><td>D</td>
  					</tr>
  					<tr>
    						<td>E</td><td></td>
  					</tr>
  					<tr>
    						<td>F</td><td></td>
  					</tr>
  					<tr>
    						<td></td><td>G</td>
  					</tr>
  					<tr>
    						<td>?</td><td>?</td>
  					</tr>
				</tbody>
			</table>
        	</div>
    	</body>
</html>
```

it inside your `public` directory right now.

We will use that as the HTML that we are serving from our web server.

### Ready, set, go!

With that you are all ready to begin actually writing your web server script.

## Read and code

Look inside the `server.js.example` script file.

It should look like this: 

```server.js.example
// Require http module

// Require fs module

// Require minimist module (make sure you install this one via npm).

// Use minimist to process one argument `--port=` on the command line after `node server.js`.

// Define a const `port` using the argument from the command line. 
// Make this const default to port 3000 if there is no argument given for `--port`.

// Use the fs module to create an arrow function using `fs.readFile`.
// Use the documentation for the Node.js `fs` module. 
// The function must read a file located at `./public/index.html` and do some stuff with it.
// The stuff that should be inside this function is all below.

// If there is an error, put it on the console error and return. 
// Do not be nice about exiting.





// Define a const `server` as an arrow function using http.createServer. 
// Use the documentation for the node.js http module. 
// The function should have three responses: 
// 1. status code 200, 
// 2. set a header with content type `text/html`, and 
// 3. end with the data that you are reading in from ./public/index.html.





// Start the `server` const listening on the port defined by argument in your `port` const. 
// Put the exact message `Server listening on port ${port}` on the console log. 




// That's it! You're all done!

```

You should immediately notice that there is no code here; only comments.

That is because YOU are going to write all the code.

I left blank lines based on how many lines are in minimum working example (MWE) I created when designing this assignment, but you can certainly expand beyond that.
The blank lines are just there to give you a sense of what it should look like. 

As noted above, you can do this in 20 lines.

### Instructions

The instructions are in the comments, but I will reiterate them below with links to places in the documentation that will guide you in putting this together.

The first thing you need to do is either rename or copy `server.js.example` to `server.js` so that you can start writing your server script.

#### Overview

The resources that you will want to lean on most heavily for this assignment are: 

[Introduction to Node.js](https://nodejs.dev/learn) - Node.js

[JavaScript Tutorial](https://www.w3schools.com/js/) - w3 schools

Everything you need to know to build this assignment is contained there.

#### The http module

The main thing that we are trying to do in this assignment is make Node serve some HTML for us.

That's it.

We're going to fancy it up a bit, but this is the main event.

Everything you need to know to be able to do that is here: 

https://nodejs.dev/learn/build-an-http-server

More granular documentation of the `http` module is available here:

https://nodejs.dev/learn/the-nodejs-http-module

So, start with that.

Get a very basic web server up and running with the example provided in the link above and then proceed from there.

#### The fs module

The next thing that we care about doing is making our web server read from a file and then serve what is in that file instead of just the `res.end('Hello, world!')` that our basic web server in the example is doing.

Instead, you are going to read in `./public/index.html` and put that inside `res.end` instead.

Everything you need to be able to do that is available here:

https://nodejs.dev/learn/reading-files-with-nodejs

You can use either method available in that example, BTW.
They do different things, but the end result is the same.

> **HINT: The important bits of your server code (the last two functions in the example) are going to go where `console.log(data)` is.

Read the following to better understand what the `fs` module does, beyond just reading files:

https://nodejs.dev/learn/the-nodejs-fs-module

#### Error handling

Pay special attention to the error handling that is happening in the examples on that page.

```javascript
  if (err) {
    console.error(err)
    return
  }
```

Look here for a deeper understanding of dealing with errors:

https://nodejs.dev/learn/error-handling-in-nodejs

#### The minimist module

Finally, we want our script to accept a command line argument to set the port number.

There are multiple ways to do this, but we are going to use the `minimist` module so we can make it operate like the `--` switches/options that we see in a lot of programs that we run on the command line.

Everything that you need to be able to do that is here:

https://nodejs.dev/learn/nodejs-accept-arguments-from-the-command-line

> **HINT:** You will need to use `args.port` from your `args` const in order to define a `port` const, but use a logical OR operator `||` to give it the option of defaulting to port 3000 in the case that a port number is not supplied when we run the script. 
You can use the example that is provided in the link above to figure out how to do this.
In that example, `process.env.PORT` is available to grab the port as defined in the system environment and then 3000 is the default. You will define your const similarly. You can also leave `process.env.port` in there as another option, but make sure that your default is last.

## The laundry list

Here is the list of things that we are looking for in your `server.js` script:

1. Require/import http module.
2. Require/import fs module.
3. Require/import minimist module (make sure you install this one via npm).
4. Use minimist to process one argument `--port=` on the command line after `node server.js`.
6. Define a const `port` using the value in the `--port=` argument from the command line. 
7. Make this const default to port 3000 if there is no argument given for `--port`.
8. Use the fs module to create an arrow function using `fs.readFile`.
Use the documentation for the Node.js `fs` module. 
The function must read a file located at `./public/index.html` and do some stuff with it.
9. If there is an error, put it on the console error with `console.err().
10. Define a const `server` as an arrow function using http.createServer. 
Use the documentation for the node.js http module. 
The function should have three responses: 
	1. status code 200, 
	2. set a header with content type `text/html`, and 
	3. end with the data that you are reading in from ./public/index.html.
11. Start the `server` const listening on the port defined by argument in your `port` const. 
12. Put the exact message `Server listening on port ${port}` on the console log.

These are all of the things that are listed in the comments. 

> To reiterate: the purpose of this assignment is not to memorize things, but to learn how to think around a problem and come up with a solution, given ample documentation and no time limit.
