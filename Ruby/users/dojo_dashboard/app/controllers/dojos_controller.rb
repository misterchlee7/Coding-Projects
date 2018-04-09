class DojosController < ApplicationController
  def index
    @all_dojos = Dojo.all
    @count = Dojo.all.count
  end

  def new
    render '/dojos/new'
  end

  def create
    @dojo = Dojo.new(dojo_params)
    if !@dojo.valid?
      flash[:notice] = @dojo.errors
      redirect_to '/dojos/new'
    else
      flash[:success] = "User was successfully created"
      @dojo.save
      redirect_to '/dojos'
    end
  end

  def edit
    @dojo_edit = Dojo.find(params[:id])
    render '/dojos/edit'
  end

  def update
    @dojo_edit = Dojo.find(params[:id])
    @dojo_edit.update(dojo_params)
    flash[:success] = "User was successfully updated"
    @dojo_edit.save
    redirect_to "/dojos"

  end

  def show
    @dojo_find = Dojo.find(params[:id])
    @students = @dojo_find.students
    render '/dojos/show'
  end

  def delete
    @dojo_del = Dojo.find(params[:id])
    @dojo_del.destroy
    redirect_to '/dojos'
  end

  private
    def dojo_params
      params.require(:dojos).permit(:branch, :street, :city, :state)
    end
end
