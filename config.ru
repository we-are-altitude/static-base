#\ -s puma

require 'rack/contrib/try_static'
require 'rack/contrib/not_found'

# Enable to force SSL
#require 'rack/ssl'
#use Rack::SSL


use Rack::TryStatic, 
    :root => "public",
    :urls => %w[/],
    :try => ['index.html', '/index.html']
    
run Rack::NotFound.new('public/404/index.html')