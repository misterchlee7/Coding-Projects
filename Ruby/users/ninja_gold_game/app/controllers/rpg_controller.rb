class RpgController < ApplicationController

  def index
    if !session[:gold]
      session[:gold] = 0
      session[:log] = []
    end
    render "rpg/index"
  end

  def farm
    random_gold = Random.new.rand(10..20)
    session[:gold] += random_gold
    session[:log] << {color: "green", log: "Earned #{random_gold} golds from the farm! #{Time.now}"}
    render "rpg/index"
  end

  def cave
    random_gold = Random.new.rand(5..10)
    session[:gold] += random_gold
    session[:log] << {color: "green",log: "Earned #{random_gold} golds from the cave! #{Time.now}"}
    render "rpg/index"
  end

  def casino
    random_gold = Random.new.rand(-50..50)
    session[:gold] += random_gold
    if random_gold >= 0
      session[:log] << {color: "green", log: "Earned #{random_gold} golds from the casino! #{Time.now}"}
    else
      session[:log] << {color: "red", log: "Lost #{random_gold} golds from the casino! #{Time.now}"}
    end
    render "rpg/index"
  end

  def house
    random_gold = Random.new.rand(2..5)
    session[:gold] += random_gold
    session[:log] << {color: "green", log: "Earned #{random_gold} golds from the house! #{Time.now}"}
    render "rpg/index"
  end  

  def reset
    session[:gold] = nil
    session[:log] = nil
    redirect_to "/"
  end
end
