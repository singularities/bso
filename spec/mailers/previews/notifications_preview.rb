# Preview all emails at http://localhost:3000/rails/mailers/notifications
class NotificationsPreview < ActionMailer::Preview

  # Preview this email at http://localhost:3000/rails/mailers/notifications/comment
  def comment
    NotificationsMailer.with(
      user: User.new(name: 'receiver', email: 'receiver@example.com'),
      comment: Comment.new(
        user: User.new(name: 'commenter'),
        song: Song.new(title: 'Peazo canción')
      )
    ).comment
  end
end
