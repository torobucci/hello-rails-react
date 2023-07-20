Rails.application.routes.draw do
  root 'root#index'

  namespace :api do
    get '/random_greeting', to: 'messages#random_greeting'
  end
end
