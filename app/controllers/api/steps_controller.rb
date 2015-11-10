class Api::StepsController < ApplicationController

  def index
    @steps = Todo.find(params[:todo_id]).steps
    render json: @steps
  end

  def create
    @step = Step.create!(description: step_params[:description], todo_id: params[:todo_id])
    render json: @step
  end

  def update
    @step = Step.find(params[:id])
    @step.update_attributes(step_params)
    render json: @step
  end

  def destroy
    @step = Step.find(params[:id])
    @step.destroy!
    render json: @step
  end

  def step_params
    params.require(:step).permit(:description)
  end

end
