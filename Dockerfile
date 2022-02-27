FROM ruby:3.1.0

EXPOSE 3000

WORKDIR /app

RUN apt-get update && apt-get install -y youtube-dl

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
