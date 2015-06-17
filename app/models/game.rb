class Game < ActiveRecord::Base
  has_many :moves

  def has_winner
    winning_combination = [[0, 1, 2],
                          [3, 4, 5],
                          [6, 7, 8],
                          [0, 3, 6],
                          [1, 4, 7],
                          [2, 5, 8],
                          [0, 4, 8],
                          [2, 4, 6]]

    winning_combination.each do |i|
      square_1 = moves.find_by_square(i[0])
      square_2 = moves.find_by_square(i[1])
      square_3 = moves.find_by_square(i[2])
      if (square_1 == square_2) and (square_2 == square_3)
        true
      end
    end
  end

  def board_full
    if moves.length == 9
      true
    end
  end

  def has_ended
    if has_winner or board_full
      true
    end
  end

end