class UsersController < ApplicationController
  layout "two_column", only: [:index, :post]

  def index
    @users = User.all
    render 'users/index'
  end

  def post
    @user = User.new(user_params)
    if !@user.valid?
      flash[:notice] = @user.errors
      redirect_to '/users/'
    else
      flash[:success] = "User was successfully created"
      @user.save
      redirect_to '/users/'
    end
  end

  private
    def user_params
      params.require(:users).permit(:first_name, :last_name, :favorite_language)
    end
end
