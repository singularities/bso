Rails.application.routes.draw do
  namespace :api do
    resource :session, only: %i[show create destroy]
    resources :users, only: %i[index create]
    resources :songs, only: %i[index show create destroy]
    resources :comments, only: %i[index create destroy]
    resources :likes, only: %i[index create destroy]
    resources :groups, only: %i[index create]
    resources :memberships, only: %i[index create destroy]
  end

  devise_for :user

  root 'frontpage#index'
  match '*path' => 'frontpage#index',
        via: :all,
        constraints: lambda { |request|
          request.path.exclude? 'rails/active_storage'
        }
end
