class CreateMoves < ActiveRecord::Migration
  def change
    create_table :moves do |move|
    move.belongs_to :game
    move.integer :square
    move.string :symbol
    move.timestamps
  end
end
