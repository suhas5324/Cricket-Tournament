package com.example.Cricketdatabase.Controller;

import com.example.Cricketdatabase.Exception.MatchNotFound;
import com.example.Cricketdatabase.Exception.PointsNotFound;
import com.example.Cricketdatabase.Model.Points;
import com.example.Cricketdatabase.Repository.PointsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins={"http://localhost:3000","https://cricket-tournament-nine.vercel.app"})
public class PointsController {
    @Autowired
    private PointsRepository pointsRepository;
    @PostMapping("/points")
    Points newPoints(@RequestBody Points newPoints){
        return pointsRepository.save(newPoints);
    }
    @GetMapping("/getpoints")
    List<Points> getPointsTable(){
        return pointsRepository.findAll();
    }

    @GetMapping("/points/{teamid}")
    Points getpointsbyid(@PathVariable Long teamid){
        return pointsRepository.findById(teamid).orElseThrow(()->new PointsNotFound(teamid));
    }
    @PutMapping("/points/{teamid}")
    Points updateMatch(@RequestBody Points newMatch,@PathVariable Long teamid){
        return pointsRepository.findById(teamid).map(points -> {
            points.setTeamid(newMatch.getTeamid());
            points.setPlayed(newMatch.getPlayed());
            points.setWon(newMatch.getWon());
            points.setLost(newMatch.getLost());
            points.setTotalpoints(newMatch.getTotalpoints());
            return pointsRepository.save(points);
        }).orElseThrow(()->new MatchNotFound(teamid));
    }

    @DeleteMapping("/points/{teamid}")
    String deleteMatch(@PathVariable Long teamid){
        if(!pointsRepository.existsById(teamid)){
            throw new MatchNotFound(teamid);
        }
        pointsRepository.deleteById(teamid);
        return "Points details deleted successfully";
    }
}
