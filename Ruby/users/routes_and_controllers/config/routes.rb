Rails.application.routes.draw do
  get "" => "greets#blank"
  get "hello" => "greets#index"
  get "say/hello" => "greets#hello"
  get "say/hello/joe" => "greets#joe"
  get "say/hello/michael" => "greets#michael"
  get "times" => "greets#times"
  get "times/restart" => "greets#times_restart"
end
