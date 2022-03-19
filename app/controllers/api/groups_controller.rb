module Api
  class GroupsController < ApplicationController
    def index
      render json: Group.all.includes(:memberships).as_json(
        only: %i[id name]
      )
    end
  end
end
