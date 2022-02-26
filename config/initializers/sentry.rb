if Rails.env.production?
  Sentry.init do |config|
    config.dsn = 'https://12589f9bfda04178b2db9c539b323ef7@o1148925.ingest.sentry.io/6220458'
    config.breadcrumbs_logger = [:active_support_logger, :http_logger]

    # Set tracesSampleRate to 1.0 to capture 100%
    # of transactions for performance monitoring.
    # We recommend adjusting this value in production
    config.traces_sample_rate = 1.0
    # or
    config.traces_sampler = lambda do |_context|
      true
    end
  end
end
