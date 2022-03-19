class Group < ApplicationRecord
  has_many :memberships, dependent: :destroy
end
