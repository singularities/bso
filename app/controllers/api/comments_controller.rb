module Api
  class CommentsController < ApplicationController
    def index
      render json:
        Comment
          .by_song_id(params[:song_id])
          .order(created_at: :asc)
          .as_json(
            only: %i[id user_id song_id text created_at]
          )
    end

    def create
      comment = Comment.new(comment_params)
      comment.user_id = current_user.id

      if comment.save
        render json: comment.as_json(
          only: %i[id user_id song_id text]
        ), status: 201
      else
        render json: comment.errors, status: 422
      end
    end

    def destroy
      comment = Comment.find(params[:id])

      raise "User can't delete other user's comment" unless comment.user_id == current_user.id

      raise comment.errors unless comment.destroy

      render json: comment.as_json(
        only: %i[id user_id song_id text]
      )
    end

    private

    def comment_params
      params.require(:comment).permit(:text, :song_id)
    end
  end
end
