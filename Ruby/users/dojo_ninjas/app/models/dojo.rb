class Dojo < ActiveRecord::Base
    has_many :ninjas

    before_destroy :destroy_ninjas

    def validation_error
        errors.add(:name, :city, :state)
    end
    validates :name, :city, :state, presence: true
    validates :state, length: { is: 2 }

    private
    def destroy_ninjas
        self.ninjas.destroy_all
    end
end
