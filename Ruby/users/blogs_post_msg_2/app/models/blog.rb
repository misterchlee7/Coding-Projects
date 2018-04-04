class Blog < ActiveRecord::Base
    has_many :posts

    def validation_error
        errors.add(:name, :description)
    end
    validates :name, :description, presence: true
end
