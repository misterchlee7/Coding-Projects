class StudentsController < ApplicationController

  def new
    @dojos = Dojo.all
    render '/students/new'
  end

  def create
    @student = Student.new(student_params)
    if !@student.valid?
      flash[:notice] = @student.errors
      redirect_to '/dojos/:id/create/student'
    else
      flash[:success] = "Student was successfully created"
      @student.save
      redirect_to '/dojos'
    end
  end

  def show
    @dojo = Dojo.find(params[:id])
    @student = Student.find(params[:stu_id])
    @cohort = Dojo.find(params[:id]).students.where.not(id: params[:stu_id])
    render '/students/show'
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private
    def student_params
      params.require(:students).permit(:first_name, :last_name, :email, :dojo_id)
    end
end
