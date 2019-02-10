### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out static testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')
class CardGame


  def checkforAce(card)         #convention says method should be named check_for_ace
    if card.value = 1           #should read if card.value == 1
      return true
    else
      return false
    end
  end

  #above - no initialize method
  #above - checkforAce should be in snake_case - check_for_ace

  dif highest_card(card1 card2) #dif should be spelled def, no comma between arguments
  if card1.value > card2.value
    return card.name            #should return card1
  else
    card2                     
  end
end                             #too many ends in this method
end

def self.cards_total(cards)
  total                         #total should = 0
  for card in cards
    total += card.value
    return "You have a total of" + total  
  end
end

#above - return should read "You have a total of #{self.cards_total}" and should come before the final end. +total is not required


#missing an "end" to end the class


```
