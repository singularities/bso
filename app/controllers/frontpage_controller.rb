class FrontpageController < ActionController::Base
  def index
    render inline: '', layout: 'application'
  end
end
