Rails.application.routes.draw do
  devise_for :users
  root 'frontpage#index'
end
