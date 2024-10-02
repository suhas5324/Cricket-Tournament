package com.example.Cricketdatabase.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.sql.Date;
import java.time.LocalDate;

@Entity
@Table(name = "matches")

public class Match {
    @Id
    private Long id;
    private Long team1_id,team2_id;
    private String venue;
    private Date date;
    private String status;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getTeam1_id() {
        return team1_id;
    }

    public void setTeam1_id(Long team1_id) {
        this.team1_id = team1_id;
    }

    public Long getTeam2_id() {
        return team2_id;
    }

    public void setTeam2_id(Long team2_id) {
        this.team2_id = team2_id;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getVenue() {
        return venue;
    }

    public void setVenue(String venue) {
        this.venue = venue;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
