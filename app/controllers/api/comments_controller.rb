module Api
  class CommentsController < ApplicationController
    def index
      render json: Comments.by_user_id(params[:user_id]).as_json(
        only: %i[id user_id song_id text]
      )
    end

    def create
      comment = Song.new(comment_params)
      comment.user_id = current_user.id

      if comment.save
        render json: comment.as_json(
          only: %i[id user_id song_id text]
        ), status: 201
      else
        render json: comment.errors, status: 422
      end
    end

    private

    def comment_params
      params.require(:comment).permit(:text, :song_id)
    end
  end
end
