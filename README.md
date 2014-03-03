static-base
========
Static base is a foundation for a static websites. It combines Jekyll (for static page creation) & Grunt (for buliding assets, among other things).

Currently, Static Base is simple but the following:

- Auto-compiles Coffeescript and SASS files for you
- Uses Live Reload for faster development
- Concatenates your resulting CSS & JS files into one file each
- Provides an intial structure for your CSS & JS 
- Provides a basic grid, form and button modules
- Has 1 simple command to build your site so that's is ready for deployment
 



__Requirements:__ Node & Ruby.

###To get started, clone the project:

```
$ git clone https://github.com/twanlass/static-base.git
```

###Install dependencies:

``` 
$ bundle install
$ npm install
```
###Launch the site (and a server):

```
$ grunt server
```

###To build the site for deployment:

In the project directory, from the cli run:

```
$ ./build.sh
```

Or you can build assets and pages separately (order is important):

```
$ grunt build
$ jekyll build
```

###Deploy built assets:
Final assets will be located in the 'Dist' folder ready for deployment to any FTP, Amazon S3 or similar service. 

###Follow us for more updates:
[@twanlass](http://www.twitter.com/@twanlass) / [@dev_vine](http://www.twitter.com/@dev_vine) / [@WeAreAltitude](http://www.twitter.com/@WeAreAltitude)