class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :song

  validates :text, presence: true

  scope :by_song_id, ->(song_id) { where(song_id: song_id) }
end
