class Project
    attr_accessor :name, :description, :owner
    
    def initialize(name, description, owner="John Doe", tasks=[])
        @name = name
        @description = description
        @owner = owner
        @tasks = tasks
    end
    def elevator_pitch
        "#{@name}, #{@description}, #{owner}"
    end
    def tasks
        @tasks
    end
    def add_tasks(task)
        @tasks.push(task)
    end
end
# project1 = Project.new("Project 1", "Description 1")
# puts project1.name # => "Project 1"
# project1.elevator_pitch  # => "Project 1, Description 1"
  