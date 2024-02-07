admin = Admin.create!(email: 'admin@example.com', full_name: 'Admin 1 from CRM')

customer = Customer.create!(email: 'customer1@example.com', full_name: 'Customer 1')

Interaction.create!(content: 'Hello from customer 1', sender: customer, recipient: admin)
