package com.example.Cricketdatabase.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "pointstable")
public class Points {
    @Id
    private Long teamid;
    private Long played,won,lost,totalpoints;

    public Long getTeamid() {
        return teamid;
    }

    public void setTeamid(Long teamid) {
        this.teamid = teamid;
    }

    public Long getPlayed() {
        return played;
    }

    public void setPlayed(Long played) {
        this.played = played;
    }

    public Long getWon() {
        return won;
    }

    public void setWon(Long won) {
        this.won = won;
    }

    public Long getLost() {
        return lost;
    }

    public void setLost(Long lost) {
        this.lost = lost;
    }

    public Long getTotalpoints() {
        return totalpoints;
    }

    public void setTotalpoints(Long totalpoints) {
        this.totalpoints = totalpoints;
    }
}
