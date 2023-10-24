FROM ruby:3.0
WORKDIR /docker
COPY Gemfile Gemfile.lock ./
RUN bundle install
COPY config.ru ./
CMD ["bundle", "exec", "puma"]