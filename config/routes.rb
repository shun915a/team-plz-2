Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :profiles
      resources :friends
    end
  end
end
