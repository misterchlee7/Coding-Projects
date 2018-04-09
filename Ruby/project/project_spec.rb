require_relative 'project'
RSpec.describe Project do
    before(:each) do
        @project1 = Project.new('Project 1', 'description 1')
        @project2 = Project.new('Project 2', 'description 2')
    end
    it 'has a getter and setter for name attribute' do
        @project1.name = "Changed Name"
        expect(@project1.name).to eq("Changed Name")
    end
    it 'has a method elevator_pitch to explain name and description' do
        expect(@project1.elevator_pitch).to eq("Project 1, description 1, John Doe")
        expect(@project2.elevator_pitch).to eq("Project 2, description 2, John Doe")
    end
    it 'has a getter and setter for owner attribute' do
        @project1.owner = "Jane Doe"
        expect(@project1.owner).to eq("Jane Doe")
        expect(@project2.owner).to eq("John Doe")
    end
    it 'has a method tasks to display tasks' do
        expect(@project1.tasks).to eq([])
    end
    it 'has a method add_tasks to add a task to tasks attribute' do
        result = @project1.add_tasks("Eat!")
        expect(@project1.tasks).to eq(["Eat!"])
    end
end