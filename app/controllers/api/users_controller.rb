module Api
  class UsersController < ApplicationController
    respond_to :json

    before_action :authenticate_user!, except: :create

    def index
      render json: User.all.as_json(
        only: %i[id name]
      )
    end

    def me
      render json: current_user.as_json(
        only: %i[id name email]
      )
    end

    def create
      user = User.new(user_params)

      if user.save
        render json: user.as_json(
          only: %i[id name email]
        ), status: 201
      else
        # warden.custom_failure!

        render json: user.errors, status: 422
      end
    end

    private

    def user_params
      params.require(:user).permit(:name, :email, :password)
    end
  end
end
