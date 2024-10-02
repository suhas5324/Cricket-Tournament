package com.example.Cricketdatabase.Exception;

public class MatchNotFound extends RuntimeException{
    public MatchNotFound(Long id){
        super("Could not find match");
    }
}
