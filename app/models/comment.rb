class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :song

  validates :text, presence: true

  scope :by_song_id, ->(song_id) { where(song_id: song_id) }

  after_commit :notify_on_comment, on: :create

  private

  def notify_on_comment
    NotifyOnCommentJob.perform_later(self)
  end
end
