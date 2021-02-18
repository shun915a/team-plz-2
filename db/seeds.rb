3.times do |n|
  user = User.new(
    email: "tester_#{n}@test.com",
    password: 'foobar111',
    nickname: "User_#{n}",
    gender_id: '1',
    birthday: '1990-01-01',
    profile: "This is User_#{n} profile text.",
    twitter_name: "twitter#{n}",
    twitch_name: "twitch#{n}",
    mildom_name: "0000000#{n}"
  )

  4.times do |m|
    user.friends.build(
      title: "募集タイトル_#{m}",
      game_id: "Gamer#000#{n}",
      text: "募集文_#{m} 一緒にゲームをするフレンド募集中！楽しくプレイできる方！"
    )
  end

  user.save!
end
