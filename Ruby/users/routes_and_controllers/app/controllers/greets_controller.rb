class GreetsController < ApplicationController
  def blank
    render text: "What do you want me to say???"
  end

  def index
    render text: "Hello CodingDojo!"
  end

  def hello
    render text: "Saying Hello!"
  end

  def joe
    render text: "Saying Hello Joe!"
  end

  def michael
    redirect_to "/say/hello/joe"
  end

  def times
    if !session[:total]
      session[:total] = -1
    end
    session[:total] += 1
    total = session[:total] 
    render text: total
  end

  def times_restart
    session[:total] = nil
    render text: "Destroyed the session!"
  end
end
