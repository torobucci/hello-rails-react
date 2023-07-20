class Api::MessagesController < ApplicationController
  def random_greeting
    random_message = Message.order('RANDOM()').first
    render json: { language: random_message.language, greeting: random_message.greeting }
  end
end
