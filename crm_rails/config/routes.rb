Rails.application.routes.draw do
  namespace :admin do
    resources :customers, except: [:new, :edit]
  end

  post '/auth/login', to: 'authentications#login'
end
