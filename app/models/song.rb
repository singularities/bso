class Song < ApplicationRecord
  belongs_to :user
  has_many :comments, dependent: :destroy
  has_many :commenters, -> { distinct }, through: :comments, source: :user
  has_many :likes, dependent: :destroy
  has_one_attached :thumbnail
  has_one_attached :video

  after_commit :download_video, on: :create

  def notifiable_users
    ([user] + commenters).uniq
  end

  def url
    "https://youtube.com/v/#{youtube_id}"
  end

  private

  def download_video
    SongVideoDownloaderJob.perform_later(self)
  end
end
