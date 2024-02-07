class Admin::CustomersController < ApplicationController
  def index
    @customers = Customer.all
  end

  def show
    @customer = Customer.includes(:contact).find(params[:id])
  end

  def create
    @customer = Customer.new(customer_params)

    if @customer.save
      render :show
    else
      render :error
    end
  end

  def update
    @customer = Customer.includes(:contact).find(params[:id])

    if @customer.update(customer_params)
      render :show
    else
      render :error
    end
  end

  def destroy
    @customer = Customer.find(params[:id])

    if @customer.destroy
      render :show
    else
      render :error
    end
  end

  private

  def customer_params
    params.require(:customer).permit(:full_name, :email)
  end
end
