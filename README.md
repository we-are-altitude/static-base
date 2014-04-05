#What Is This?#
Static Base is a minimal static site framework built on top of [Jekyll](https://github.com/jekyll/jekyll). It's got a bunch of development niceties baked right in for extra goodness.

##Niceties you say? Yup - things like:##
- Support for Sass, Less and Coffeescript
- Automatic asset minification and fingerprinting (cachebusting filenames)
- Live Reload support baked in (refresh ALL THE THINGS!)
- Altitude's simple grid, form and button modules
- A starter UI Kit - view it at /ui-kit

##Getting Started:##
1. `$ git clone https://github.com/we-are-altitude/static-base.git`
2. `$ bundle install`

##Launch A Local Server:##
1. `$ guard`
2. Browse to **http://localhost:4000**

##Build your site locally:##
`jekyll build --config _config.yml,_config-local.yml`

##Deploying to Amazon S3:##

Like any other Jekyll based blog or site, publishing to Amazon S3 is fast, easy and often free. To build your static site, ready for deployment to S3 simply run:

`$ jekyll build --config _config.yml,_config-production.yml`

This will create a new **public** folder in the root with your minified and fingerprinted assets. Drop the contents of this folder in your Amazon S3 bucket of choice and [enable static website hosting](http://docs.aws.amazon.com/AmazonS3/latest/dev/HowDoIWebsiteConfiguration.html). 

Of course you could go a step further and use a something like the [s3_wesbite gem](https://github.com/laurilehmijoki/s3_website) to easily push and update your site from the command line.

Boosh!

##Deploying to Heroku:##

Static Base is preconfigured to make deployments to Heroku simple. While Amazon S3 is great for 99% of static sites, if you need SSL support Heroku may be much cheaper / more robust. 

Before you can push your static site however you'll need to do two things:

1. Enable the [Heroku Labs feature user-env-compile](https://devcenter.heroku.com/articles/labs-user-env-compile):
`$ heroku labs:enable user-env-compile -a myapp`

2. Create a [Heroku environment config variable](https://devcenter.heroku.com/articles/config-vars) ('staging' and 'production' supported):
`$ heroku config:set ENV=production`

That's it. When you push your changes to your Heroku app your assets will be built, minified and fingerprinted and [Puma server](http://puma.io/) will be started. 


##Follow us for more updates:
[@twanlass](http://www.twitter.com/@twanlass) / [@dev_vine](http://www.twitter.com/@dev_vine) / [@WeAreAltitude](http://www.twitter.com/@WeAreAltitude)
