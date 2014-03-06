require 'jekyll_asset_pipeline'

module JekyllAssetPipeline

    # ---------------------------
    # Asset Converters
    # ---------------------------
    class CoffeeScriptConverter < JekyllAssetPipeline::Converter
      require 'coffee-script'

      def self.filetype
        '.coffee'
      end

      def convert
        return CoffeeScript.compile(@content)
      end
    end


    class SassConverter < JekyllAssetPipeline::Converter
      require 'sass'

      def self.filetype
        '.scss'
      end

      def convert
        Dir.chdir "./site/_assets/stylesheets" do
            return Sass::Engine.new(@content, syntax: :scss, debug_info: true).render
        end
      end
    end


    class LessConverter < JekyllAssetPipeline::Converter
      require 'less'

      def self.filetype
        '.less'
      end

      def convert
        Dir.chdir "./site/_assets/stylesheets" do
          return Less::Parser.new(:paths => ['.', '_assets']).parse(@content).to_css
        end
      end
    end


    # ---------------------------
    # Asset Compressors
    # ---------------------------
    class CssCompressor < JekyllAssetPipeline::Compressor
      require 'yui/compressor'

      def self.filetype
        '.css'
      end

      def compress
        return YUI::CssCompressor.new.compress(@content)
      end
    end

    class JavaScriptCompressor < JekyllAssetPipeline::Compressor
      require 'closure-compiler'

      def self.filetype
        '.js'
      end

      def compress
        return Closure::Compiler.new.compile(@content)
      end
    end

  end