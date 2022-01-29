module Api
  class SongsController < ApplicationController
    def index
      render json: Song.all.as_json(
        only: %i[id title user_id youtube_id]
      )
    end

    def create
      song = Song.new(song_params)

      if song.save
        render json: song.as_json(
          only: %i[id title user_id youtube_id]
        ), status: 201
      else
        render json: song.errors, status: 422
      end
    end

    private

    def song_params
      params.require(:song).permit(:title, :youtube_id)
    end
  end
end
