package com.example.Cricketdatabase.Exception;

public class TeamNotFound extends RuntimeException {
    public TeamNotFound(Long teamid) {
        super("Could not find match");
    }
}
