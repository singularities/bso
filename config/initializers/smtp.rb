if ENV['MAIL_URL']
  uri = URI.parse ENV['MAIL_URL']

  settings = {}

  settings[:address] = uri.host

  if uri.port
    settings[:port] = uri.port
  end

  ActionMailer::Base.smtp_settings = settings
end
