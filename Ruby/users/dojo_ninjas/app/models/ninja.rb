class Ninja < ActiveRecord::Base
  belongs_to :dojo

  def validation_error
    errors.add(:first_name, :last_name)
  end
  validates :first_name, :last_name, presence: true
end

# Dojo.second.ninjas.select(:first_name).order('created_at DESC')
