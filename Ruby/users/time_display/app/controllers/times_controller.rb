class TimesController < ApplicationController
  def main
    @time = Time.now.strftime("%Y-%d-%m %H:%M:%S %Z")
    render "times/main"
  end
end
