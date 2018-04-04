class User < ActiveRecord::Base
    def validation_error
        errors.add(:first_name, :last_name, :age)
    end
    validates :first_name, :last_name, :email_address, :age, presence: true
    validates :first_name, :last_name, length: { minimum: 2 }
    validates :age, numericality: {only_integer: true, greater_than_or_equal_to: 10, less_than_or_equal_to: 150}
end