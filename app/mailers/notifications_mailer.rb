class NotificationsMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.notifications_mailer.comment.subject
  #
  def comment
    @comment = params[:comment]
    @user = params[:user]

    mail to: @user.email,
         subject: "Nuevo comentario en la canción #{@comment.song.title}"
  end
end
