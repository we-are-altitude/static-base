static-base
========
Foundation for a static site built on Jekyll & Grunt. 

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

```
$ grunt build
$ jekyll build
```

###Deploy built assets:
Final assets will be located in the 'Dist' folder ready for deployment to any FTP, Amazon S3 or similar.