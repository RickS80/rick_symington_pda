
user = {
  "Avril" => {
    :twitter => "avril",
    :lottery_numbers => [27, 36, 3, 43, 6, 8,]
  }
}

def sortLotteryNumbers(hash)
  p hash["Avril"][:lottery_numbers].sort
end

sortLotteryNumbers(user)



# def getLowestLotteryNumber(hash)
#   p hash["Avril"][:lottery_numbers].min
# end
#
# getLowestLotteryNumber(user)
