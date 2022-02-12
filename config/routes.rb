Rails.application.routes.draw do
  namespace :api do
    resource :session, only: %i[show create destroy]
    resources :users, only: %i[index create]
    resources :songs, only: %i[index create]
    resources :comments, only: %i[index create]
    resources :likes, only: %i[index create destroy]
  end

  devise_for :user

  root 'frontpage#index'
  match '*path' => 'frontpage#index', via: :all
end
