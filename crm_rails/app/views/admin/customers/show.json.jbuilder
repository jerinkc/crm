json.data do
  json.id @customer.id
  json.email @customer.email
  json.full_name @customer.full_name
  json.contact do
    json.phone @customer.contact.phone
    json.address @customer.contact.address
  end
end
json.success true
