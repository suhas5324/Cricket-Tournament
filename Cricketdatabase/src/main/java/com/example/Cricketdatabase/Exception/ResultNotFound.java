package com.example.Cricketdatabase.Exception;

public class ResultNotFound extends RuntimeException {
    public ResultNotFound(Long teamid){
        super("couldnt find result");
    }
}
