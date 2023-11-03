ARG RUBY_VERSION=3.2.0
FROM ruby:$RUBY_VERSION

WORKDIR /usr/src/peeper

RUN apt-get update -qq && apt-get install -y \
    apt-utils \
    build-essential \
    default-libmysqlclient-dev

RUN git config --global init.defaultBranch main

RUN gem update --system
RUN gem install bundler

COPY /web /usr/src/peeper

RUN bundle install