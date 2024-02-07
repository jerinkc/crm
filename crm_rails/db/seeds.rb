admin = Admin.create!(email: 'admin@example.com', full_name: 'Admin 1 from CRM')

customer = Customer.new(email: 'customer1@example.com', full_name: 'Customer 1')
customer.build_contact(phone: '+91 87654321', address: 'Address')
customer.save!

Interaction.create!(content: 'Hello from customer 1', sender: customer, recipient: admin)

puts 'Seed Complete!'
