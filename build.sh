!/bin/sh

echo "Building assets..."
grunt build
echo "Building pages..."
jekyll build
echo "Build completed. Output saved to /dist"