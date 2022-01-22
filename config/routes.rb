Rails.application.routes.draw do
  namespace :api do
    resources :users, only: %i[index create] do
      get :me, on: :collection
    end
  end

  devise_for :user

  root 'frontpage#index'
  match '*path' => 'frontpage#index', via: :all
end
