module Api
  class LikesController < ApplicationController
    def index
      render json:
        Like
          .by_song_id(params[:song_id])
          .as_json(
            only: %i[id user_id song_id]
          )
    end

    def create
      like = Like.new(like_params)
      like.user_id = current_user.id

      if like.save
        render json: like.as_json(
          only: %i[id user_id song_id]
        ), status: 201
      else
        render json: like.errors, status: 422
      end
    end

    def destroy
      like = Like.find(params[:id])

      if like.user_id != current_user.id
        render json: 'Forbidden', status: 401
        return
      end

      if like.destroy
        render json: like.as_json(
          only: %i[id user_id song_id]
        ), status: 200
      else
        render json: like.errors, status: 422
      end
    end

    private

    def like_params
      params.require(:like).permit(:song_id)
    end
  end
end
