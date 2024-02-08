class Customer < User
  has_one :contact

  validates :email, :full_name, :contact, presence: true


  accepts_nested_attributes_for :contact
end
