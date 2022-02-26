class NotifyOnCommentJob < ApplicationJob
  queue_as :default

  def perform(comment)
    users = comment.song.notifiable_users - [comment.user]

    users.each do |user|
      NotificationsMailer.with(comment:, user:).comment.deliver_later
    end
  end
end
