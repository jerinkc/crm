Rails.application.routes.draw do
  namespace :admin do
    resources :customers, except: [:new, :edit]
  end
end
