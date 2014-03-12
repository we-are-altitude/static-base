guard "jekyll-plus", :extensions => ['less', 'sass', 'scss', 'coffee', 'js', 'md', 'markdown', 'html'], :serve=> true, :config => ['_config.yml', '_config-local.yml'] do
  watch /.*/
  ignore /public/
end

guard 'livereload', apply_css_live: true,  host: '127.0.0.1'  do
  watch /site\/.*/
end