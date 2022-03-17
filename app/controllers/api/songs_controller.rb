module Api
  class SongsController < ApplicationController
    def index
      render json: (
        Song.all.order(created_at: :desc).map do |song|
          song_json(song)
        end
      )
    end

    def show
      song = Song.find params[:id]

      render json: song_json(song)
    end

    def create
      song = Song.new(song_params)
      song.user_id = current_user.id

      if song.save
        render json: song_json(song), status: 201
      else
        render json: song.errors, status: 422
      end
    end

    def destroy
      song = Song.find(params[:id])

      raise "User can't delete other user's songs" unless song.user_id == current_user.id

      raise song.errors unless song.destroy

      render json: song_json(song)
    end

    private

    def song_params
      params.require(:song).permit(:title, :youtube_id)
    end

    def song_json(song)
      song.as_json(
        only: %i[id title user_id youtube_id created_at]
      ).merge(
        thumbnail_url: song.thumbnail.attached? ? rails_blob_url(song.thumbnail, disposition: 'attachment') : nil,
        video_url: song.video.attached? ? rails_blob_url(song.video, disposition: 'attachment') : nil
      )
    end
  end
end
