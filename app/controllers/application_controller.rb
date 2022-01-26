class ApplicationController < ActionController::API
  respond_to :json

  before_action :authenticate_user!, except: :create

  private

  def authenticate_user!
    return if current_user

    render json: { error: 'Not authenticated' }, status: :unauthorized
  end
end
