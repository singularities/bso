class Like < ApplicationRecord
  belongs_to :user
  belongs_to :song

  scope :by_song_id, ->(song_id) { where(song_id: song_id) }

  validates :user_id, uniqueness: { scope: :song_id }
end
