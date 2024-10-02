package com.example.Cricketdatabase.Controller;

import com.example.Cricketdatabase.Exception.TeamNotFound;
import com.example.Cricketdatabase.Model.Team;
import com.example.Cricketdatabase.Repository.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins={"http://localhost:3000","https://cricket-tournament-nine.vercel.app"})
public class TeamController {
    @Autowired
    private TeamRepository teamRepository;
    @PostMapping("/team")
    Team newTeam(@RequestBody Team newTeam){
        return teamRepository.save(newTeam);
    }
    @GetMapping("/getteam")
    List<Team> getTeam(){
        return teamRepository.findAll();
    }

    @GetMapping("/team/{teamid}")
    Team getteambyid(@PathVariable Long teamid){
        return teamRepository.findById(teamid).orElseThrow(()->new TeamNotFound(teamid));
    }
    @PutMapping("/team/{teamid}")
    Team updateMatch(@RequestBody Team newTeam,@PathVariable Long teamid){
        return teamRepository.findById(teamid).map(team -> {
            team.setTeamid(newTeam.getTeamid());
            team.setTeam_name(newTeam.getTeam_name());
            team.setHomeground(newTeam.getHomeground());
            team.setHead_coach(newTeam.getHead_coach());
            team.setCaptain(newTeam.getCaptain());
            return teamRepository.save(team);
        }).orElseThrow(()->new TeamNotFound(teamid));
    }

    @DeleteMapping("/team/{teamid}")
    String deleteMatch(@PathVariable Long teamid){
        if(!teamRepository.existsById(teamid)){
            throw new TeamNotFound(teamid);
        }
        teamRepository.deleteById(teamid);
        return "Team details deleted successfully";
    }
}
