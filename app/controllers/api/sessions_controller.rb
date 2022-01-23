module Api
  class SessionsController < ApplicationController
    prepend_before_action :allow_params_authentication!, only: :create

    respond_to :json

    before_action :authenticate_user!, only: :show

    def show
      render json: current_user.as_json(
        only: %i[id name email]
      )
    end

    def create
      user = warden.authenticate!

      sign_in(:user, user)

      render json: user.as_json(
        only: %i[id name email]
      )
    end

    def destroy
      sign_out

      head :ok
    end

    class CustomAuthFailure < Devise::FailureApp
      def respond
        self.status = 401
        self.content_type = :json
        self.response_body = {
          'base' => ['Email / contraseña inválidos']
        }.to_json
      end
    end
  end
end
