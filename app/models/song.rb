class Song < ApplicationRecord
  belongs_to :user
  has_many :comments, dependent: :destroy
  has_many :commenters, -> { distinct }, through: :comments, source: :user
  has_many :likes, dependent: :destroy

  def notifiable_users
    ([user] + commenters).uniq
  end
end
