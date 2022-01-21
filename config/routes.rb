Rails.application.routes.draw do
  namespace :api do
    resources :users, only: %i[index create]
  end

  root 'frontpage#index'
  match '*path' => 'frontpage#index', via: :all
end
