Rails.application.routes.draw do
  get "users" => "users#index"
  get "users/new" => "users#new"
  get "users/:id" => "users#find"
  get "users/:id/edit" => "users#edit"
  post "users" => "users#add"
  get "users/tally/total" => "users#total"
end
