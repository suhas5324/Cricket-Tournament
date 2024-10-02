package com.example.Cricketdatabase.Exception;

public class PointsNotFound extends RuntimeException{
    public PointsNotFound(Long teamid){
        super("could not find points");
    }
}
