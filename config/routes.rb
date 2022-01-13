Rails.application.routes.draw do
  devise_for :users

  root 'frontpage#index'
  match '*path' => 'frontpage#index', via: :all
end
