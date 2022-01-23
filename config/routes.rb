Rails.application.routes.draw do
  namespace :api do
    resource :session, only: %i[show create destroy]
    resources :users, only: %i[index create]
  end

  devise_for :user

  root 'frontpage#index'
  match '*path' => 'frontpage#index', via: :all
end
