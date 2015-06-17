enable :sessions

get '/' do
  if !session[:id].nil?
    redirect to "/lobby"
  else
    erb :index
  end
end

post "/" do
  user = User.find_or_create_by(params[:user])
  authentication = User.authenticate(params[:user])
    if authentication == nil
      redirect to("/")
    else
      session[:id] = authentication.id
      redirect to("/lobby")
    end
end

get "/lobby" do
  @available_games = Game.where(started: false)
  erb :lobby
end

post "/games/new" do
  Game.create(player1_id: session[:id])
end

post "/games/:game_id/join" do
  game = Game.find(params[:game_id])
  game.player2_id = session[:id]
  game.started = true
end

get "/games/:game_id" do
  @game = Game.find(params[:game_id])
  @player1 = User.find(@game.player1_id)
  @player2 = User.find(@game.player2_id)
  erb :game
end

get "/users/:user_id" do
end

get "/game_test" do
  @user_id = 1
  erb :game_test
end

get "/test_game" do
  @user_id = 1
  erb :test_game
end

post "/next_player" do
  redirect to "/game_test"
end


get "/games/:game_id/state" do
  game = Game.find(params[:game_id])
  @moves = game.moves
end

post "/games/:game_id/move" do
  game = Game.find(params[:game_id])
  player_id = session[id]

  if player_id == game.player1_id
    symbol = "O"
  else
    symbol = "X"
  end

  Move.create(
    game_id: game.id,
    square: params[:square],
    symbol: symbol
    )

  if game.hasEnded == false
    if game.moves.last.symbol == "O"
      {
        has_ended: false,
        next_player: 0
      }
    else
      {
        has_ended: false,
        next_player: 1
      }
    end
  else
    {
      has_ended: true
    }
  end
end