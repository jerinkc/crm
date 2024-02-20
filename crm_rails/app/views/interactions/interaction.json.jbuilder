json.data do
  json.interaction do
    json.content @interaction.content
    json.sender do
      json.id @interaction.sender.id
      json.full_name @interaction.sender.full_name
      json.type @interaction.sender.type
    end
    json.recipient do
      json.id @interaction.recipient.id
      json.full_name @interaction.recipient.full_name
    end
  end
end
json.success true
