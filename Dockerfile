FROM ruby:2.7.4

EXPOSE 3000

WORKDIR /app

# Mostly static
COPY config.ru /app/
COPY Rakefile /app/
COPY bin /app/bin
COPY public /app/public
COPY db /app/db

# Gems
COPY Gemfile /app/
COPY Gemfile.lock /app/

RUN bundle install --without development test

# Code
COPY config /app/config
COPY app /app/app
COPY lib /app/lib

CMD ["bin/rails", "s"]
