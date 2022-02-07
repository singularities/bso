class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :song

  scope :by_song_id, ->(song_id) { where(song_id: song_id) }
end
