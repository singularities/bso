module Api
  class UsersController < ApplicationController
    skip_before_action :authenticate_user!, only: :create

    def index
      render json: User.all.as_json(
        only: %i[id name]
      )
    end

    def create
      user = User.new(user_params)

      if user.save
        sign_in(:user, user)

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
