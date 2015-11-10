Rails.application.routes.draw do
  root to: "static_pages#root"
  namespace :api do
    resources :todo, only: [:index, :show, :create, :destroy, :update] do
      resources :steps, only: [:index, :create]
    end

    resources :steps, only: [:update, :destroy]
  end

end
