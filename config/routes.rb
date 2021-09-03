Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :sessions, only: [:create, :destroy]
  resources :signups, only: [:create]
  resources :comments
  

  resources :users
  get "/profile", to: "users#show"

  resources :posts
  delete :logout, to: "sessions#logout"
  get :logged_in, to: "sessions#logged_in"
  root to: "static#home"

end
