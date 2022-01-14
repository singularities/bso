Rails.application.routes.draw do
  namespace :api do
    resources :users, only: [:create]
  end

  root 'frontpage#index'
  match '*path' => 'frontpage#index', via: :all
end
