Rails.application.routes.draw do

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
  root "home#index"
  get "/contact", to: "contacts#new", as: :contact
  post "/contact", to: "contacts#create"

  get "/gardenease", to: "gardenease#index", as: :gardenease
  get "/adventure-exchange", to: "adventure_exchange#index", as: :adventureExchange

end
