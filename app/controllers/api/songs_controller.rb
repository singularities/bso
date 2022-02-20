module Api
  class SongsController < ApplicationController
    def index
      render json: Song.all.order(created_at: :desc).as_json(
        only: %i[id title user_id youtube_id created_at]
      )
    end

    def create
      song = Song.new(song_params)
      song.user_id = current_user.id

      if song.save
        render json: song.as_json(
          only: %i[id title user_id youtube_id created_at]
        ), status: 201
      else
        render json: song.errors, status: 422
      end
    end

    def destroy
      song = Song.find(params[:id])

      raise "User can't delete other user's songs" unless song.user_id == current_user.id

      raise song.errors unless song.destroy

      render json: song.as_json(
        only: %i[id title user_id youtube_id created_at]
      )
    end

    private

    def song_params
      params.require(:song).permit(:title, :youtube_id)
    end
  end
end
