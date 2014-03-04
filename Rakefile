# For Heroku Ruby Build Pack
# Requires an 'env' environment variable to be set
# and for Heroku Labs user-env-compile to be enabled:
# $ heroku labs:enable user-env-compile -a myapp
# Ref: https://devcenter.heroku.com/articles/labs-user-env-compile

namespace :assets do
  desc 'Precompile assets'
  task :precompile do
    sh "jekyll build  --config _config.yml,_config-#{ENV['env']}.yml"
  end
end