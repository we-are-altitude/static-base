guard "jekyll-plus", :extensions => ['less', 'sass', 'scss', 'coffeescript', 'js', 'md', 'markdown', 'html'], :serve=> true, :config => ['_config.yml', '_config-local.yml'] do
  watch /.*/
  ignore /public/
end


guard 'livereload', host: '127.0.0.1'  do
  watch(%r{site/.+\.(html|scss|css|js|coffee)})
  watch(%r{public/.+\.(css|js|html)})
end
