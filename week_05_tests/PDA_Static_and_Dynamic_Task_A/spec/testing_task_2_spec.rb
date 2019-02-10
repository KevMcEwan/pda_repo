require("minitest/autorun")
require("minitest/rg")
require_relative("../testing_task_2.rb")


class TestCardGame < MiniTest::Test

  def setup()
    @cardgame = CardGame.new(@card1, @card2, @card3, @card4)
    @card1 = Card.new("Spades", 1)
    @card2 = Card.new("Diamonds", 7)
    @card3 = Card.new("Clubs", 10)
    @card4 = Card.new("Hearts", 9)
    @cards = [@card1, @card2, @card3, @card4]
  end

  # def test_card_value
  #   expected = 1
  #   actual = @card1.value
  #   assert_equal(expected, actual)
  # end
  #
  # def test_card_suit
  #   expected = "Diamonds"
  #   actual = @card2.suit
  #   assert_equal(expected, actual)
  # end
  #
  # def test_checkforAce__card_is_ace
  #   expected = true
  #   actual = @cardgame.checkforAce(@card1)
  #   assert_equal(expected, actual)
  # end

  def test_check_for_ace__card_is_ace
    expected = true
    actual = @cardgame.check_for_ace(@card1)
    assert_equal(expected, actual)
  end
  #
  # def test_check_for_ace__card_is_not_ace
  #   expected = false
  #   actual = @cardgame.checkforAce(@card2)
  #   assert_equal(expected, actual)
  # end
  #
  def test_highest_card
    expected = @card2
    actual = @cardgame.highest_card(@card1, @card2)
    assert_equal(expected, actual)
  end

  # def test_cards_total
  #   expected = "You have a total of 27"
  #   actual = CardGame.cards_total(@cards)
  #   assert_equal(expected, actual)
  # end

end
