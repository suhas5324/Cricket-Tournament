package com.example.Cricketdatabase.Model;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="teams")
public class Team {
    @Id
    private Long teamid;
    private String team_name,captain,head_coach,homeground;

    public Long getTeamid() {
        return teamid;
    }

    public void setTeamid(Long teamid) {
        this.teamid = teamid;
    }

    public String getTeam_name() {
        return team_name;
    }

    public void setTeam_name(String team_name) {
        this.team_name = team_name;
    }

    public String getCaptain() {
        return captain;
    }

    public void setCaptain(String captain) {
        this.captain = captain;
    }

    public String getHead_coach() {
        return head_coach;
    }

    public void setHead_coach(String head_coach) {
        this.head_coach = head_coach;
    }

    public String getHomeground() {
        return homeground;
    }

    public void setHomeground(String homeground) {
        this.homeground = homeground;
    }
}
