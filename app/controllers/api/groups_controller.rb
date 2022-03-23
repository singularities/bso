module Api
  class GroupsController < ApplicationController
    def index
      render json: (
        Group.all.map do |group|
          group_json(group)
        end
      )
    end

    def create
      group = Group.create! group_params

      render json: group_json(group)
    end

    private

    def group_params
      params.require(:group).permit(:name)
    end

    def group_json(group)
      group.as_json(
        only: %i[id name]
      )
    end
  end
end
