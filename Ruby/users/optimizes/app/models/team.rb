class Team < ActiveRecord::Base
    has_many :players
end

# Player.includes(:team).where("teams.name = 'Chicago Bulls'").references(:team)

# players = Player.includes(:team).where("teams.stadium = 'Staples Center'").references(:team)
# players.each do |player|
#     puts "#{player.name}, #{player.team.name}"
# end

# players = Player.includes(:team).where("players.name like?", "Z%").references(:team)players.each do |player|
#     puts "#{player.team.name}"
# end