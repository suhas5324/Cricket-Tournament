package com.example.Cricketdatabase.Exception;

public class PlayerNotFound extends RuntimeException {
    public PlayerNotFound(Long player_id){
        super("couldnt find player");
    }
}
