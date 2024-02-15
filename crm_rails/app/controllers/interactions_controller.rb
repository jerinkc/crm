class InteractionsController < ApplicationController
  before_action :authorize_request

  def index
    @interactions = Interaction.select(:content)
                               .includes(
                                 sender: [:id, :full_name, :type],
                                 recipient: [:id, :full_name]
                               )
  end

  def create
    @interaction = Interaction.new(interaction_params)

    # TODO: Remove once customer authentication completed
    @interaction.sender_id = @current_user.id
    @interaction.recipient_id = Customer.first.id

    if @interaction.save
      render :interaction
    else
      render :error
    end
  end

  private

  def interaction_params
    params.require(:interaction).permit(:content)
  end
end
