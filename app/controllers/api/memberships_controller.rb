module Api
  class MembershipsController < ApplicationController
    def index
      render json: (Membership.all.map do |membership|
        membership_json(membership)
      end)
    end

    def create
      membership = current_user.memberships.create!(membership_params)

      render json: membership_json(membership)
    end

    def destroy
      membership = current_user.memberships.find(params[:id])

      membership.destroy!

      render json: membership_json(membership)
    end

    private

    def membership_json(membership)
      membership.as_json(
        only: %i[id user_id group_id]
      )
    end

    def membership_params
      params.require(:membership).permit(:group_id)
    end
  end
end
