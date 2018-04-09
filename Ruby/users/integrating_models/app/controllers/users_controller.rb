class UsersController < ApplicationController
    def index
        users = User.all
        render json: users
    end

    def new
        render "users/new"
    end

    def find
        user = User.find(params[:id])
        render json: user
    end

    def edit
        @user = User.find(params[:id])
        render "users/edit"
    end

    def add
        new_user = User.create(name:params[:name])
        redirect_to "/users"
    end

    def total
        total = User.all.length
        render text: total
    end
end
